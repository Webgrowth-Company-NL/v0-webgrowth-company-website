"use client"

import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react"
import { ArrowLeft, ArrowRight, Calculator, CheckCircle2, Loader2, Sparkles, TrendingUp, Target, X as XIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { CtaButton } from "@/components/ui/cta-button"
import {
  getProfileSummary,
  getProfileConsequences,
  getForesterOSRecommendation,
  type ProfileType,
} from "@/lib/website-scan-profile-content"

const PLAN_PRICES: Record<string, { perMaand: number; perJaar: number }> = {
  Core: { perMaand: 399, perJaar: 4788 },
  Growth: { perMaand: 699, perJaar: 8388 },
  Scale: { perMaand: 999, perJaar: 11988 },
}

type Step =
  | "url"
  | "ease"
  | "campaigns"
  | "dare"
  | "maintenance"
  | "responsible"
  | "cost"
  | "goal"
  | "contact"

type Answer = string | null

type AnswerOption = {
  value: string
  emoji: string
  label: string
}

type Question = {
  step: Exclude<Step, "url" | "contact">
  title: string
  options: AnswerOption[]
}

const QUESTIONS: Question[] = [
  {
    step: "ease",
    title: "Kun je vandaag iets aanpassen aan je website zonder gedoe?",
    options: [
      { value: "yes", emoji: "😎", label: "Ja, dat kan gewoon" },
      { value: "sometimes", emoji: "🤔", label: "Soms, ligt eraan" },
      { value: "no", emoji: "😤", label: "Nee, dat is gedoe" },
    ],
  },
  {
    step: "campaigns",
    title: "Blijven ideeën of campagnes wel eens liggen door techniek?",
    options: [
      { value: "never", emoji: "🚀", label: "Nooit" },
      { value: "sometimes", emoji: "🪵", label: "Soms" },
      { value: "often", emoji: "🌿", label: "Te vaak" },
    ],
  },
  {
    step: "dare",
    title: "Durf je zelf aan je website te komen zonder bang te zijn iets stuk te maken?",
    options: [
      { value: "yes", emoji: "🛠️", label: "Ja, geen probleem" },
      { value: "doubt", emoji: "😬", label: "Met wat twijfel" },
      { value: "no", emoji: "🙈", label: "Liever niet" },
    ],
  },
  {
    step: "maintenance",
    title: "Weet je wanneer er voor het laatst écht onderhoud is gedaan?",
    options: [
      { value: "yes", emoji: "🗓️", label: "Ja, recent" },
      { value: "approx", emoji: "🕰️", label: "Ongeveer" },
      { value: "no", emoji: "🤷", label: "Geen idee" },
    ],
  },
  {
    step: "responsible",
    title: "Weet je wie er verantwoordelijk is als er vandaag iets misgaat?",
    options: [
      { value: "yes", emoji: "🧑‍🚒", label: "Ja, duidelijk" },
      { value: "mostly", emoji: "🧩", label: "Meestal" },
      { value: "no", emoji: "🫠", label: "Geen idee" },
    ],
  },
  {
    step: "cost",
    title: "Weet je vooraf wat een aanpassing kost?",
    options: [
      { value: "always", emoji: "💸", label: "Altijd duidelijk" },
      { value: "sometimes", emoji: "🤨", label: "Soms" },
      { value: "after", emoji: "💥", label: "Achteraf pas" },
    ],
  },
  {
    step: "goal",
    title: "Wat moet je website komend jaar vooral doen?",
    options: [
      { value: "stability", emoji: "🌲", label: "Rust & stabiliteit" },
      { value: "growth", emoji: "🔥", label: "Groei & marketing" },
      { value: "unknown", emoji: "🧭", label: "Weet ik nog niet" },
    ],
  },
]

const STEP_ORDER: Step[] = [
  "url",
  "ease",
  "campaigns",
  "dare",
  "maintenance",
  "responsible",
  "cost",
  "goal",
  "contact",
]

type WebsiteAnalysis = {
  description?: string
  industry?: string
  technologies?: string[]
  normalVisitors?: { min: number; max: number; explanation: string }
  leadDefinition?: string
  prospectsExpectation?: { min: number; max: number; explanation: string }
  averageYearlyCosts?: {
    min: number
    max: number
    breakdown: {
      bouw: string
      hosting: string
      onderhoud: string
      updates: string
      aanpassingen: string
    }
    explanation: string
  }
  isOnePager?: boolean
}

type ProfileResult = {
  profile: string | null
  profileName: string
  profileEmoji: string
  tone: string | null
}

export function WebsiteScanFlow() {
  const [step, setStep] = useState<Step>("url")
  const [websiteUrl, setWebsiteUrl] = useState("https://")
  const [checkingWebsite, setCheckingWebsite] = useState(false)
  const [websiteExists, setWebsiteExists] = useState(false)
  const checkTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const [answers, setAnswers] = useState<Record<Question["step"], Answer>>({
    ease: null,
    campaigns: null,
    dare: null,
    maintenance: null,
    responsible: null,
    cost: null,
    goal: null,
  })

  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [companyName, setCompanyName] = useState("")

  const [analysis, setAnalysis] = useState<WebsiteAnalysis | null>(null)
  const [analyzing, setAnalyzing] = useState(false)

  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [profile, setProfile] = useState<ProfileResult | null>(null)
  const [success, setSuccess] = useState(false)

  // Debounced URL check
  useEffect(() => {
    if (checkTimeoutRef.current) clearTimeout(checkTimeoutRef.current)
    if (!websiteUrl.trim() || websiteUrl === "https://" || websiteUrl === "http://") {
      setWebsiteExists(false)
      return
    }
    checkTimeoutRef.current = setTimeout(async () => {
      try {
        setCheckingWebsite(true)
        const res = await fetch("/api/website-scan/check", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: websiteUrl }),
        })
        if (res.ok) {
          const data = await res.json()
          setWebsiteExists(Boolean(data.exists))
        }
      } catch {
        setWebsiteExists(false)
      } finally {
        setCheckingWebsite(false)
      }
    }, 800)
    return () => {
      if (checkTimeoutRef.current) clearTimeout(checkTimeoutRef.current)
    }
  }, [websiteUrl])

  const startAnalysis = async (url: string) => {
    if (analysis || analyzing) return
    if (!url || url === "https://" || url === "http://") return
    try {
      setAnalyzing(true)
      const res = await fetch("/api/website-scan/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      })
      if (res.ok) {
        const data = await res.json()
        if (data.analysis) setAnalysis(data.analysis)
      }
    } catch {
      // analysis is achtergrondwerk; geen blocker
    } finally {
      setAnalyzing(false)
    }
  }

  const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value
    if (!value.startsWith("https://") && !value.startsWith("http://")) {
      value = "https://" + value.replace(/^https?:\/\//, "")
    }
    setWebsiteUrl(value)
  }

  const handleUrlSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!websiteUrl.trim() || websiteUrl === "https://" || websiteUrl === "http://") return
    if (checkingWebsite || websiteExists) return
    setStep("ease")
    startAnalysis(websiteUrl)
  }

  const setAnswer = (key: Question["step"], value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }))
  }

  const goNext = () => {
    const idx = STEP_ORDER.indexOf(step)
    if (idx < STEP_ORDER.length - 1) {
      setStep(STEP_ORDER[idx + 1])
    }
  }

  const goBack = () => {
    const idx = STEP_ORDER.indexOf(step)
    if (idx > 0) setStep(STEP_ORDER[idx - 1])
  }

  const canProceed = () => {
    if (step === "url") {
      return (
        !websiteExists &&
        !checkingWebsite &&
        websiteUrl.trim() !== "" &&
        websiteUrl !== "https://" &&
        websiteUrl !== "http://"
      )
    }
    if (step === "contact") {
      return (
        firstName.trim() !== "" &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) &&
        companyName.trim() !== ""
      )
    }
    const q = QUESTIONS.find((qq) => qq.step === step)
    if (!q) return false
    return answers[q.step] !== null
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!canProceed()) return
    setSubmitting(true)
    setSubmitError(null)
    try {
      const res = await fetch("/api/website-scan/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          websiteUrl,
          ease: answers.ease,
          campaigns: answers.campaigns,
          dare: answers.dare,
          maintenance: answers.maintenance,
          responsible: answers.responsible,
          cost: answers.cost,
          goal: answers.goal,
          contact: {
            firstName: firstName.trim(),
            email: email.trim(),
            companyName: companyName.trim(),
          },
          analysis,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || "Er ging iets mis")
      setProfile({
        profile: data.profile,
        profileName: data.profileName,
        profileEmoji: data.profileEmoji,
        tone: data.tone,
      })
      if (data.analysis) {
        setAnalysis(data.analysis)
      }
      setSuccess(true)
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Onbekende fout")
    } finally {
      setSubmitting(false)
    }
  }

  const stepIndex = STEP_ORDER.indexOf(step)
  const totalSteps = STEP_ORDER.length
  const progressPercent = success ? 100 : Math.round(((stepIndex + 1) / totalSteps) * 100)

  if (success && profile) {
    const profileSlug = (profile.profile ?? null) as ProfileType
    const profileSummary = profileSlug ? getProfileSummary(profileSlug) : null
    const consequences = profileSlug ? getProfileConsequences(profileSlug) : null
    const tone = (profile.tone ?? null) as Parameters<typeof getForesterOSRecommendation>[1]
    const recommendation = profileSlug
      ? getForesterOSRecommendation(profileSlug, tone, analysis?.isOnePager ?? false)
      : null

    const consequenceItems = consequences?.content
      .split("\n\n")
      .map((s) => s.replace(/^❌\s*/, "").trim())
      .filter(Boolean)

    return (
      <div className="max-w-4xl mx-auto">
        {/* Bevestiging strook */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase">
              Scan ontvangen
            </p>
            <p className="text-white/55 text-sm">
              Rapport ook in je inbox naar{" "}
              <span className="text-white font-medium">{email}</span>
            </p>
          </div>
        </div>

        {/* Profiel-hero */}
        {profile.profile && (
          <section className="mb-12">
            <div className="text-7xl md:text-8xl mb-5" aria-hidden>
              {profile.profileEmoji}
            </div>
            <p className="text-white/55 text-xs font-semibold tracking-widest uppercase mb-3">
              Jouw profiel
            </p>
            <h2 className="font-[family-name:var(--font-gottak)] text-[clamp(2.4rem,6vw,5rem)] font-black text-white leading-[1.04] tracking-tight mb-6">
              <span
                style={{
                  background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {profile.profileName}
              </span>
            </h2>
            {profileSummary && (
              <p className="text-white/75 text-lg md:text-xl leading-relaxed max-w-3xl">
                {profileSummary}
              </p>
            )}
          </section>
        )}

        {/* Wat dit je kost */}
        {consequences && consequenceItems && consequenceItems.length > 0 && (
          <section className="mb-10">
            <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-3">
              {consequences.title}
            </p>
            <h3 className="font-[family-name:var(--font-gottak)] text-2xl md:text-3xl font-black text-white leading-tight mb-6">
              Drie dingen die nu sluipenderwijs gebeuren.
            </h3>
            <ul className="space-y-3">
              {consequenceItems.map((item, i) => (
                <li
                  key={i}
                  className="rounded-2xl border border-white/8 p-5 flex items-start gap-4"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <div className="w-7 h-7 rounded-full bg-rose-500/15 border border-rose-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <XIcon className="w-4 h-4 text-rose-400" strokeWidth={3} />
                  </div>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Aanbevolen plan */}
        {recommendation && (
          <section className="mb-10">
            <div
              className="rounded-3xl border border-[#ff0096]/25 p-7 md:p-9"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,0,150,0.08) 0%, rgba(98,59,199,0.08) 100%)",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-[#ff0096]" />
                <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase">
                  Aanbevolen plan
                </p>
              </div>
              <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1 mb-4">
                <h3 className="font-[family-name:var(--font-gottak)] text-3xl md:text-5xl font-black text-white leading-tight">
                  {recommendation.plan}
                </h3>
                {PLAN_PRICES[recommendation.plan] && (
                  <p className="text-white/75 text-base md:text-lg">
                    €{formatNumber(PLAN_PRICES[recommendation.plan].perMaand)} per maand
                    <span className="text-white/45 text-sm md:text-base ml-2">
                      · €{formatNumber(PLAN_PRICES[recommendation.plan].perJaar)} per jaar, alles inbegrepen
                    </span>
                  </p>
                )}
              </div>
              <p className="text-white/75 text-base md:text-lg leading-relaxed mb-6">
                {recommendation.explanation}
              </p>
              <div className="flex flex-wrap gap-3">
                <CtaButton href="/contact" variant="primary">
                  Boek een kennismaking
                </CtaButton>
                <CtaButton href="/prijzen" variant="outline">
                  Bekijk pakketten
                </CtaButton>
              </div>
            </div>
          </section>
        )}

        {/* Website analyse */}
        {analysis && (
          <section className="mb-10">
            <p className="text-[#a78bfa] text-xs font-semibold tracking-widest uppercase mb-3">
              Wat we van je website zien
            </p>
            <h3 className="font-[family-name:var(--font-gottak)] text-2xl md:text-3xl font-black text-white leading-tight mb-6">
              Analyse op basis van{" "}
              <span className="text-white/55 font-bold">{websiteUrl.replace(/^https?:\/\//, "")}</span>
            </h3>

            <div className="space-y-4">
              {analysis.description && (
                <ReportCard label="Beschrijving">
                  <p className="text-white/80 text-base leading-relaxed">{analysis.description}</p>
                </ReportCard>
              )}

              {analysis.industry && (
                <ReportCard label="Branche">
                  <p className="text-white/80 text-base">{analysis.industry}</p>
                </ReportCard>
              )}

              {analysis.technologies && analysis.technologies.length > 0 && (
                <ReportCard label="Technologieën gevonden">
                  <div className="flex flex-wrap gap-2">
                    {analysis.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(255,0,150,0.14) 0%, rgba(98,59,199,0.14) 100%)",
                        }}
                      >
                        <span
                          style={{
                            background: "linear-gradient(135deg, #ff0096 0%, #a78bfa 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                          }}
                        >
                          {tech}
                        </span>
                      </span>
                    ))}
                  </div>
                </ReportCard>
              )}

              {analysis.normalVisitors && (
                <ReportCard
                  label="Verwachte bezoekers per maand"
                  icon={<TrendingUp className="w-4 h-4 text-[#a78bfa]" strokeWidth={2.5} />}
                >
                  <p className="font-[family-name:var(--font-gottak)] text-2xl md:text-3xl font-black text-white mb-2">
                    {formatNumber(analysis.normalVisitors.min)}{" "}
                    <span className="text-white/40">tot</span>{" "}
                    {formatNumber(analysis.normalVisitors.max)}
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {analysis.normalVisitors.explanation}
                  </p>
                </ReportCard>
              )}

              {analysis.leadDefinition && (
                <ReportCard label="Wat is een lead voor jouw site?">
                  <p className="text-white/80 text-base leading-relaxed">{analysis.leadDefinition}</p>
                </ReportCard>
              )}

              {analysis.prospectsExpectation && (
                <ReportCard
                  label="Verwachte prospects per maand"
                  icon={<Target className="w-4 h-4 text-[#ff0096]" strokeWidth={2.5} />}
                >
                  <p className="font-[family-name:var(--font-gottak)] text-2xl md:text-3xl font-black text-white mb-2">
                    {formatNumber(analysis.prospectsExpectation.min)}{" "}
                    <span className="text-white/40">tot</span>{" "}
                    {formatNumber(analysis.prospectsExpectation.max)}
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {analysis.prospectsExpectation.explanation}
                  </p>
                </ReportCard>
              )}

            </div>
          </section>
        )}

        {/* Calculator-link in plaats van AI-gok */}
        <section className="mb-10">
          <div
            className="rounded-2xl border border-white/10 p-6 md:p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5"
            style={{ background: "rgba(255,255,255,0.03)" }}
          >
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#a78bfa]/15 border border-[#a78bfa]/25 flex items-center justify-center shrink-0">
                <Calculator className="w-5 h-5 text-[#a78bfa]" strokeWidth={2} />
              </div>
              <div>
                <p className="text-white text-base font-semibold mb-1">
                  Wil je weten wat jij nu jaarlijks kwijt bent?
                </p>
                <p className="text-white/55 text-sm leading-relaxed max-w-xl">
                  Vul de calculator in op basis van jouw daadwerkelijke stack. Dan krijg je een vergelijking met cijfers die echt kloppen, geen schatting.
                </p>
              </div>
            </div>
            <div className="shrink-0">
              <CtaButton href="/hubspot-alternatief#calculator" variant="secondary">
                Reken je besparing uit
              </CtaButton>
            </div>
          </div>
        </section>

        {analyzing && !analysis && (
          <section className="mb-10 rounded-2xl border border-white/8 px-5 py-4 flex items-center gap-3 bg-white/[0.03]">
            <Loader2 className="w-4 h-4 animate-spin text-[#a78bfa]" />
            <p className="text-white/60 text-sm">
              We zijn nog aan het analyseren. Het volledige rapport komt zo meteen ook in je inbox.
            </p>
          </section>
        )}

        {/* Onderkant CTA */}
        <section className="rounded-2xl border border-white/8 px-6 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4" style={{ background: "rgba(255,255,255,0.03)" }}>
          <div>
            <p className="text-white font-semibold mb-1">Klaar voor de volgende stap?</p>
            <p className="text-white/55 text-sm">30 minuten kennismaken. Gratis, geen verplichtingen.</p>
          </div>
          <CtaButton href="/contact" variant="primary">
            Boek een kennismaking
          </CtaButton>
        </section>
      </div>
    )
  }

  const currentQuestion = QUESTIONS.find((q) => q.step === step)

  return (
    <div className="max-w-4xl mx-auto">
      {/* Voortgangsbalk */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-3 text-xs font-semibold tracking-widest uppercase">
          <span className="text-white/55">
            Stap {stepIndex + 1} van {totalSteps}
          </span>
          <span className="text-[#ff0096]">{progressPercent}%</span>
        </div>
        <div className="h-1.5 bg-white/8 rounded-full overflow-hidden">
          <div
            className="h-full transition-all duration-500 ease-out rounded-full"
            style={{
              width: `${progressPercent}%`,
              background: "linear-gradient(90deg, #ff0096, #623bc7)",
            }}
          />
        </div>
      </div>

      {/* URL stap */}
      {step === "url" && (
        <form onSubmit={handleUrlSubmit} className="space-y-10">
          <h2 className="font-[family-name:var(--font-gottak)] text-[clamp(2.4rem,6vw,5rem)] font-black text-white leading-[1.04] tracking-tight">
            Wat is de URL van{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              jouw website?
            </span>
          </h2>

          <div className="relative">
            <span
              className="absolute left-5 top-1/2 -translate-y-1/2 text-2xl md:text-3xl pointer-events-none"
              aria-hidden
            >
              🌍
            </span>
            <input
              type="text"
              value={websiteUrl}
              onChange={handleUrlChange}
              placeholder="https://"
              className={cn(
                "w-full h-16 md:h-20 pl-16 md:pl-20 pr-14 rounded-2xl border bg-white/[0.04] text-white placeholder:text-white/30 transition-colors focus:outline-none focus:bg-white/[0.06]",
                "text-xl md:text-2xl font-[family-name:var(--font-gottak)] font-semibold",
                websiteExists
                  ? "border-amber-400/50 focus:border-amber-400/70"
                  : "border-white/10 focus:border-[#ff0096]/60",
              )}
            />
            {checkingWebsite && (
              <Loader2 className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 animate-spin" />
            )}
          </div>

          {websiteExists && !checkingWebsite && (
            <div className="rounded-2xl border border-amber-400/30 bg-amber-500/10 px-6 py-5 flex items-start gap-4">
              <span className="text-3xl shrink-0" aria-hidden>🪓</span>
              <div>
                <p className="font-[family-name:var(--font-gottak)] text-white text-lg md:text-xl font-bold leading-snug mb-1">
                  Deze website loopt al met ons mee.
                </p>
                <p className="text-white/65 text-sm">Geen wilde groei hier nodig.</p>
              </div>
            </div>
          )}

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={!canProceed()}
              className="inline-flex items-center gap-2 bg-[#ff0096] hover:bg-[#e6007f] disabled:bg-white/10 disabled:text-white/40 disabled:cursor-not-allowed text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-200 enabled:hover:scale-[1.03]"
            >
              {checkingWebsite ? "Controleren..." : "Volgende"}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      )}

      {/* Vraagstap */}
      {currentQuestion && (
        <div className="space-y-10">
          <h2 className="font-[family-name:var(--font-gottak)] text-[clamp(2rem,5vw,4.4rem)] font-black text-white leading-[1.04] tracking-tight">
            {currentQuestion.title}
          </h2>

          <div className="space-y-3">
            {currentQuestion.options.map((option) => {
              const isSelected = answers[currentQuestion.step] === option.value
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setAnswer(currentQuestion.step, option.value)}
                  className={cn(
                    "w-full p-5 md:p-6 rounded-2xl border-2 text-left flex items-center gap-5 transition-all duration-200",
                    isSelected
                      ? "border-[#ff0096] bg-[#ff0096]/10"
                      : "border-white/10 bg-white/[0.04] hover:border-white/25 hover:bg-white/[0.06]",
                  )}
                >
                  <span className="text-3xl md:text-4xl shrink-0" aria-hidden>
                    {option.emoji}
                  </span>
                  <span className="flex-1 font-[family-name:var(--font-gottak)] text-xl md:text-2xl font-bold text-white">
                    {option.label}
                  </span>
                  {isSelected && (
                    <span className="w-6 h-6 rounded-full bg-[#ff0096] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </span>
                  )}
                </button>
              )
            })}
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              onClick={goBack}
              className="inline-flex items-center gap-2 text-white/55 hover:text-white text-sm font-semibold transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Terug
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={!canProceed()}
              className="inline-flex items-center gap-2 bg-[#ff0096] hover:bg-[#e6007f] disabled:bg-white/10 disabled:text-white/40 disabled:cursor-not-allowed text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-200 enabled:hover:scale-[1.03]"
            >
              Volgende <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Contact stap */}
      {step === "contact" && (
        <form onSubmit={handleSubmit} className="space-y-8">
          <h2 className="font-[family-name:var(--font-gottak)] text-[clamp(2rem,5vw,4.4rem)] font-black text-white leading-[1.04] tracking-tight">
            Laatste stap.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Jouw gegevens.
            </span>
          </h2>

          {analyzing && (
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 flex items-center gap-3 text-sm text-white/60">
              <Loader2 className="w-4 h-4 animate-spin text-[#a78bfa]" />
              <span>We analyseren je site nog op de achtergrond. Het rapport bevat zo meteen ook die uitkomst.</span>
            </div>
          )}

          {submitError && (
            <div className="rounded-2xl border border-rose-500/30 bg-rose-500/10 px-5 py-4 text-sm text-rose-200">
              {submitError}
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-5">
            <ContactField label="Voornaam">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Jouw voornaam"
                disabled={submitting}
                className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/35 focus:outline-none focus:border-[#ff0096]/60 transition-colors disabled:opacity-60"
              />
            </ContactField>
            <ContactField label="Bedrijfsnaam">
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Jouw bedrijf"
                disabled={submitting}
                className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/35 focus:outline-none focus:border-[#ff0096]/60 transition-colors disabled:opacity-60"
              />
            </ContactField>
            <ContactField label="E-mailadres" className="sm:col-span-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jij@bedrijf.nl"
                disabled={submitting}
                className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/35 focus:outline-none focus:border-[#ff0096]/60 transition-colors disabled:opacity-60"
              />
            </ContactField>
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              onClick={goBack}
              disabled={submitting}
              className="inline-flex items-center gap-2 text-white/55 hover:text-white text-sm font-semibold transition-colors disabled:opacity-50"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Terug
            </button>
            <button
              type="submit"
              disabled={!canProceed() || submitting}
              className="inline-flex items-center gap-2 bg-[#ff0096] hover:bg-[#e6007f] disabled:bg-white/10 disabled:text-white/40 disabled:cursor-not-allowed text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-200 enabled:hover:scale-[1.03]"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Versturen...
                </>
              ) : (
                <>
                  Verstuur scan <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

function ContactField({
  label,
  children,
  className,
}: {
  label: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <label className={cn("block", className)}>
      <span className="block font-[family-name:var(--font-gottak)] text-white text-base font-bold mb-2">
        {label}
      </span>
      {children}
    </label>
  )
}

function ReportCard({
  label,
  icon,
  children,
}: {
  label: string
  icon?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div
      className="rounded-2xl border border-white/8 p-6"
      style={{ background: "rgba(255,255,255,0.03)" }}
    >
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <p className="text-white/55 text-xs font-semibold tracking-widest uppercase">{label}</p>
      </div>
      {children}
    </div>
  )
}

function formatNumber(n: number): string {
  return n.toLocaleString("nl-NL")
}
