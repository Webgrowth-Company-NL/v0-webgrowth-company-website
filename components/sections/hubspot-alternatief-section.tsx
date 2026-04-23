"use client"

import { motion } from "framer-motion"
import { ArrowRight, Check, X, Sparkles, TrendingDown, Receipt, Clock } from "lucide-react"
import Link from "next/link"
import { useMemo, useState } from "react"

type Pakket = "Core" | "Growth" | "Scale"

type OptieGroep = {
  id: string
  vraag: string
  opties: { label: string; value: string }[]
}

const optieGroepen: OptieGroep[] = [
  {
    id: "medewerkers",
    vraag: "Hoeveel medewerkers werken er in jouw kantoor?",
    opties: [
      { label: "1 (ZZP)", value: "1" },
      { label: "2 tot 5", value: "2-5" },
      { label: "6 tot 15", value: "6-15" },
      { label: "16+", value: "16+" },
    ],
  },
  {
    id: "contacten",
    vraag: "Hoeveel contacten zitten er in je database?",
    opties: [
      { label: "Onder 500", value: "<500" },
      { label: "500 tot 2.000", value: "500-2k" },
      { label: "2.000 tot 10.000", value: "2k-10k" },
      { label: "10.000+", value: "10k+" },
    ],
  },
  {
    id: "website",
    vraag: "Wat is je huidige website-situatie?",
    opties: [
      { label: "Nog niets", value: "nieuw" },
      { label: "Oude site, moet vernieuwd", value: "opknappen" },
      { label: "Recente site, wel onderhoud nodig", value: "onderhoud" },
    ],
  },
  {
    id: "marketing",
    vraag: "Welke marketing- en CRM-tools gebruik je nu?",
    opties: [
      { label: "Geen", value: "geen" },
      { label: "HubSpot", value: "hubspot" },
      { label: "Losse tools (Mailchimp, Pipedrive)", value: "losse" },
      { label: "Anders", value: "anders" },
    ],
  },
  {
    id: "automations",
    vraag: "Wil je automatische lead-opvolging en e-mailcampagnes?",
    opties: [
      { label: "Nee, basis is prima", value: "nee" },
      { label: "Ja, graag", value: "ja" },
    ],
  },
  {
    id: "custom",
    vraag: "Heb je een eigen cliënt-portaal of app nodig?",
    opties: [
      { label: "Nee", value: "nee" },
      { label: "Ja", value: "ja" },
    ],
  },
]

const pakketInfo: Record<
  Pakket,
  { prijsPerMaand: number; prijsPerJaar: number; tagline: string; accent: string }
> = {
  Core: {
    prijsPerMaand: 399,
    prijsPerJaar: 4788,
    tagline: "Website, CRM en dashboard in één",
    accent: "#623bc7",
  },
  Growth: {
    prijsPerMaand: 699,
    prijsPerJaar: 8388,
    tagline: "Plus automations en lead-opvolging",
    accent: "#ff0096",
  },
  Scale: {
    prijsPerMaand: 999,
    prijsPerJaar: 11988,
    tagline: "Plus custom platform of cliënt-portaal",
    accent: "#8b5cf6",
  },
}

const defaultAntwoorden: Record<string, string> = {
  medewerkers: "2-5",
  contacten: "500-2k",
  website: "opknappen",
  marketing: "hubspot",
  automations: "ja",
  custom: "nee",
}

function medewerkerAantal(value: string): number {
  return { "1": 1, "2-5": 4, "6-15": 10, "16+": 20 }[value] ?? 4
}

function bepaalPakket(a: Record<string, string>): Pakket {
  if (a.custom === "ja" || a.medewerkers === "16+") return "Scale"
  if (
    a.medewerkers === "6-15" ||
    a.contacten === "2k-10k" ||
    a.contacten === "10k+" ||
    a.automations === "ja" ||
    a.marketing === "hubspot"
  ) {
    return "Growth"
  }
  return "Core"
}

type Uitkomst = {
  pakket: Pakket
  huidigeKostenJaar1: number
  huidigeKostenJaar2: number
  foresterPerJaar: number
  bespaarJaar1: number
  bespaarDrieJaar: number
  procent: number
}

function bereken(antwoorden: Record<string, string>): Uitkomst {
  const a = { ...defaultAntwoorden, ...antwoorden }
  const pakket = bepaalPakket(a)
  const med = medewerkerAantal(a.medewerkers)

  const websiteEenmalig =
    a.website === "nieuw" ? 4500 : a.website === "opknappen" ? 3500 : 0
  const portalEenmalig = a.custom === "ja" ? 18500 : 0

  const websiteJaarlijks =
    420 + // hosting + SSL + domein
    1140 + // updates + plugin-onderhoud
    180 + // backups
    240 + // security monitoring
    240 + // performance + CDN
    180 + // AVG + cookiebanner
    3060 + // kleine aanpassingen bureau (3u/m × €85)
    3000 // content en SEO-uurtjes

  let marketingJaarlijks = 0
  let onboardingEenmalig = 0

  if (a.marketing === "hubspot") {
    let marketingHub = 240
    if (a.contacten === "500-2k") marketingHub = 10680
    if (a.contacten === "2k-10k") marketingHub = 10680
    if (a.contacten === "10k+") marketingHub = 19800
    const salesHubPerUser = med < 6 ? 180 : 1080
    const salesHub = salesHubPerUser * med
    onboardingEenmalig = 3000
    marketingJaarlijks = marketingHub + salesHub
  } else if (a.marketing === "losse") {
    const mailchimp = 660
    const pipedrive = 408 * med
    marketingJaarlijks = mailchimp + pipedrive
  } else if (a.marketing === "anders") {
    marketingJaarlijks = 1500 + 240 * med
  }

  if (a.automations === "ja" && a.marketing !== "hubspot") {
    marketingJaarlijks += 660
  }

  const huidigeKostenJaar1 =
    websiteJaarlijks +
    marketingJaarlijks +
    websiteEenmalig +
    portalEenmalig +
    onboardingEenmalig

  const huidigeKostenJaar2 = websiteJaarlijks + marketingJaarlijks
  const foresterPerJaar = pakketInfo[pakket].prijsPerJaar

  const bespaarJaar1 = Math.max(0, huidigeKostenJaar1 - foresterPerJaar)
  const bespaarJaar2 = Math.max(0, huidigeKostenJaar2 - foresterPerJaar)
  const bespaarDrieJaar = bespaarJaar1 + bespaarJaar2 * 2

  const procent = huidigeKostenJaar1 > 0
    ? Math.round((bespaarJaar1 / huidigeKostenJaar1) * 100)
    : 0

  return {
    pakket,
    huidigeKostenJaar1,
    huidigeKostenJaar2,
    foresterPerJaar,
    bespaarJaar1,
    bespaarDrieJaar,
    procent,
  }
}

const kostenposten = [
  { label: "Website-bouw of redesign", nu: "€3.500 tot €4.500 eenmalig", forester: "Inclusief", icoon: Receipt },
  { label: "Hosting, SSL en domein", nu: "€420 per jaar", forester: "Inclusief", icoon: Receipt },
  { label: "Updates, backups en security", nu: "€1.560 per jaar", forester: "Inclusief", icoon: Receipt },
  { label: "Kleine aanpassingen (bureau-uren)", nu: "€3.060 per jaar", forester: "Inclusief, via Q", icoon: Clock },
  { label: "Content en SEO (bureau-uren)", nu: "€3.000 per jaar", forester: "Inclusief, via Q", icoon: Clock },
  { label: "AVG, cookiebanner en compliance", nu: "€180 per jaar", forester: "Inclusief", icoon: Receipt },
  { label: "HubSpot Marketing Professional", nu: "€10.680 per jaar", forester: "Vervangen", icoon: TrendingDown },
  { label: "HubSpot Sales (3 users)", nu: "€540 per jaar", forester: "Vervangen", icoon: TrendingDown },
  { label: "HubSpot onboarding (eenmalig)", nu: "€3.000", forester: "Geen onboarding-kosten", icoon: TrendingDown },
  { label: "E-mailtool (Mailchimp of vergelijkbaar)", nu: "€480 per jaar", forester: "Inclusief", icoon: TrendingDown },
]

const cases = [
  {
    titel: "ZZP advocaat",
    profiel: "1 medewerker, 500 contacten",
    huidigeKosten: "€8.060 per jaar",
    foresterPakket: "Core",
    foresterPrijs: "€4.788 per jaar",
    besparing: "€3.272 (41%) per jaar",
    accent: "#623bc7",
  },
  {
    titel: "Notariskantoor",
    profiel: "5 medewerkers, 3.000 contacten",
    huidigeKosten: "€27.420 per jaar",
    foresterPakket: "Growth",
    foresterPrijs: "€8.388 per jaar",
    besparing: "€19.032 (69%) per jaar",
    accent: "#ff0096",
    highlight: true,
  },
  {
    titel: "Advocatenkantoor",
    profiel: "20 medewerkers, 10k+ contacten, eigen portal",
    huidigeKosten: "€65.140 per jaar",
    foresterPakket: "Scale",
    foresterPrijs: "€11.988 per jaar",
    besparing: "€53.152 (82%) per jaar",
    accent: "#8b5cf6",
  },
]

export function HubspotAlternatiefSection() {
  const [antwoorden, setAntwoorden] = useState<Record<string, string>>(defaultAntwoorden)

  const update = (groepId: string, waarde: string) => {
    setAntwoorden((prev) => ({ ...prev, [groepId]: waarde }))
  }

  const uitkomst = useMemo(() => bereken(antwoorden), [antwoorden])

  const formatEuro = (bedrag: number) =>
    new Intl.NumberFormat("nl-NL", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(bedrag)

  return (
    <div className="bg-[#0d0818]">
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-16 px-5 sm:px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-[#ff0096]/10 blur-[180px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#623bc7]/8 blur-[160px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-5">
              HubSpot alternatief voor Nederlandse kantoren
            </p>
            <h1 className="font-[family-name:var(--font-gottak)] text-[clamp(2.6rem,6.5vw,5rem)] font-black text-white leading-[1.02] tracking-tight mb-6 max-w-4xl">
              Je betaalt nu negen rekeningen.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Wij sturen er één.
              </span>
            </h1>
            <p className="text-white/65 text-xl leading-relaxed max-w-2xl mb-8">
              HubSpot. Je websitebureau. Hoster. Backups. Security. Onderhoud. E-mailtool. Content-uurtjes. AVG-module. Forester OS vervangt de hele stapel voor één vast bedrag vanaf €399 per maand.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="#calculator"
                className="inline-flex items-center justify-center gap-2 bg-[#ff0096] hover:bg-[#e6007f] text-white py-3 px-6 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-[1.03]"
              >
                Reken uit wat je bespaart <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white hover:bg-white/8 hover:border-white/40 py-3 px-6 rounded-full text-sm font-semibold transition-all duration-200"
              >
                Plan een demo bij Q
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Probleem: de 10 kostenposten ──────────────────────── */}
      <section className="relative py-20 px-5 sm:px-8 overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-4">
              Waar de euro's nu heen gaan
            </p>
            <h2 className="font-[family-name:var(--font-gottak)] text-[clamp(2rem,4.5vw,3.4rem)] font-black text-white leading-[1.08] tracking-tight max-w-3xl">
              Wat een kantoor met 5 medewerkers nu jaarlijks kwijt is.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-3">
            {kostenposten.map((post, i) => {
              const Icoon = post.icoon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/[0.02] px-4 py-3.5"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#ff0096]/15 flex items-center justify-center shrink-0">
                    <Icoon className="w-4 h-4 text-[#ff0096]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-medium leading-snug">{post.label}</p>
                    <p className="text-white/50 text-xs mt-0.5">Nu: {post.nu}</p>
                  </div>
                  <div className="text-right shrink-0 hidden sm:block">
                    <p className="text-[#a78bfa] text-xs font-semibold">{post.forester}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 rounded-2xl border border-[#ff0096]/25 bg-[#ff0096]/[0.05] p-6 sm:p-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-white/65 text-sm">Totaal per jaar, typisch kantoor van 5 medewerkers</p>
                <p className="font-[family-name:var(--font-gottak)] text-5xl font-black text-white mt-1">
                  €27.420
                </p>
              </div>
              <div className="text-left sm:text-right">
                <p className="text-[#ff0096] text-sm font-semibold">Forester OS Growth</p>
                <p className="font-[family-name:var(--font-gottak)] text-5xl font-black text-[#ff0096] mt-1">
                  €8.388
                </p>
                <p className="text-white/55 text-xs mt-1">per jaar, alles inbegrepen</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ROI Calculator ─────────────────────────────────────── */}
      <section id="calculator" className="relative py-24 px-5 sm:px-8 overflow-hidden scroll-mt-24">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-[#623bc7]/10 blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-4">
              Besparingscalculator
            </p>
            <h2 className="font-[family-name:var(--font-gottak)] text-[clamp(2rem,4.5vw,3.4rem)] font-black text-white leading-[1.08] tracking-tight mb-4 max-w-3xl">
              Reken in één minuut uit wat je bespaart.
            </h2>
            <p className="text-white/60 text-base max-w-2xl leading-relaxed">
              Zes vragen, één minuut. Je ziet direct welk pakket past en wat je per jaar minder kwijt bent.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-6">
            {/* Input */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-7">
              <div className="flex flex-col gap-6">
                {optieGroepen.map((groep) => (
                  <div key={groep.id}>
                    <p className="text-white text-sm font-semibold mb-3">{groep.vraag}</p>
                    <div className="flex flex-wrap gap-2">
                      {groep.opties.map((optie) => {
                        const actief = antwoorden[groep.id] === optie.value
                        return (
                          <button
                            key={optie.value}
                            onClick={() => update(groep.id, optie.value)}
                            className={`px-3.5 py-2 rounded-full text-xs font-medium transition-all duration-200 border ${
                              actief
                                ? "bg-[#ff0096] border-[#ff0096] text-white"
                                : "bg-white/[0.03] border-white/10 text-white/70 hover:border-white/30 hover:text-white"
                            }`}
                          >
                            {optie.label}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Output */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative rounded-2xl overflow-hidden flex flex-col"
              style={{
                background: "rgba(255,0,150,0.06)",
                border: "1px solid rgba(255,0,150,0.25)",
                boxShadow: "0 0 60px rgba(255,0,150,0.1)",
              }}
            >
              <div
                className="h-1 w-full shrink-0 transition-colors duration-300"
                style={{
                  background: `linear-gradient(90deg, ${pakketInfo[uitkomst.pakket].accent}, transparent)`,
                }}
              />

              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-5">
                  <Sparkles className="w-4 h-4 text-[#ff0096]" />
                  <p className="text-[#ff0096] text-[11px] font-semibold tracking-widest uppercase">
                    Aanbevolen pakket
                  </p>
                </div>

                <p
                  key={uitkomst.pakket}
                  className="font-[family-name:var(--font-gottak)] text-6xl font-black text-white leading-none mb-1 transition-all duration-300"
                >
                  {uitkomst.pakket}
                </p>
                <p className="text-white/60 text-sm mb-6">{pakketInfo[uitkomst.pakket].tagline}</p>

                <div className="h-px bg-white/10 mb-5" />

                <div className="flex flex-col gap-3 mb-5">
                  <div className="flex items-baseline justify-between">
                    <p className="text-white/55 text-xs">Wat je nu betaalt, jaar 1</p>
                    <p className="text-white/80 text-base line-through decoration-white/30">
                      {formatEuro(uitkomst.huidigeKostenJaar1)}
                    </p>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <p className="text-white text-sm font-medium">
                      Met Forester OS {uitkomst.pakket}
                    </p>
                    <p className="font-[family-name:var(--font-gottak)] text-3xl font-black text-[#ff0096]">
                      {formatEuro(uitkomst.foresterPerJaar)}
                    </p>
                  </div>
                </div>

                <div className="rounded-xl bg-white/[0.04] border border-white/10 p-4 mb-6">
                  <p className="text-white/55 text-[11px] font-semibold tracking-widest uppercase mb-2">
                    Jouw besparing
                  </p>
                  <div className="flex items-baseline gap-2">
                    <p className="font-[family-name:var(--font-gottak)] text-4xl font-black text-white">
                      {formatEuro(uitkomst.bespaarJaar1)}
                    </p>
                    {uitkomst.procent > 0 && (
                      <p className="text-[#a78bfa] text-sm font-semibold">({uitkomst.procent}%)</p>
                    )}
                  </div>
                  <p className="text-white/55 text-xs mt-1">
                    in jaar 1, {formatEuro(uitkomst.bespaarDrieJaar)} over drie jaar
                  </p>
                </div>

                <Link
                  href={`/contact?plan=${uitkomst.pakket.toLowerCase()}`}
                  className="inline-flex items-center justify-center gap-2 w-full bg-[#ff0096] hover:bg-[#e6007f] text-white py-3 px-5 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-[1.02]"
                >
                  Plan een demo bij Q <ArrowRight className="w-4 h-4" />
                </Link>
                <p className="text-white/40 text-[11px] text-center mt-3">
                  Indicatieve berekening op basis van gemiddelde marktprijzen. Vraag een vergelijking op maat voor exacte cijfers.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Drie cases ─────────────────────────────────────────── */}
      <section className="relative py-24 px-5 sm:px-8 overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 max-w-3xl"
          >
            <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-4">
              Drie cases
            </p>
            <h2 className="font-[family-name:var(--font-gottak)] text-[clamp(2rem,4.5vw,3.4rem)] font-black text-white leading-[1.08] tracking-tight">
              Drie kantoren. Drie pakketten. Drie besparingen.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {cases.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col rounded-2xl overflow-hidden"
                style={
                  c.highlight
                    ? {
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,0,150,0.35)",
                        boxShadow: "0 0 50px rgba(255,0,150,0.1)",
                      }
                    : {
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }
                }
              >
                <div
                  className="h-1 w-full shrink-0"
                  style={{ background: `linear-gradient(90deg, ${c.accent}, transparent)` }}
                />

                <div className="p-6 flex flex-col flex-1">
                  <p className="text-white/50 text-[11px] font-semibold tracking-widest uppercase mb-3">
                    {c.titel}
                  </p>
                  <p className="font-[family-name:var(--font-gottak)] text-2xl font-black text-white leading-tight mb-4">
                    {c.profiel}
                  </p>

                  <div className="h-px bg-white/8 mb-5" />

                  <div className="flex flex-col gap-3 flex-1">
                    <div>
                      <p className="text-white/45 text-[11px] uppercase tracking-wider mb-1">
                        Betaalt nu
                      </p>
                      <p className="text-white/80 text-lg font-semibold line-through decoration-white/25">
                        {c.huidigeKosten}
                      </p>
                    </div>

                    <div>
                      <p className="text-white/45 text-[11px] uppercase tracking-wider mb-1">
                        Forester OS {c.foresterPakket}
                      </p>
                      <p className="text-white text-lg font-semibold">{c.foresterPrijs}</p>
                    </div>

                    <div
                      className="mt-2 rounded-xl p-3"
                      style={{ background: `${c.accent}15`, border: `1px solid ${c.accent}35` }}
                    >
                      <p className="text-white/55 text-[11px] uppercase tracking-wider mb-1">
                        Besparing
                      </p>
                      <p
                        className="font-[family-name:var(--font-gottak)] text-xl font-black"
                        style={{ color: c.accent }}
                      >
                        {c.besparing}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Waarom Forester OS ──────────────────────────────── */}
      <section className="relative py-24 px-5 sm:px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#623bc7]/8 blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-5">
              Waarom Forester OS
            </p>
            <h2 className="font-[family-name:var(--font-gottak)] text-[clamp(2rem,4.5vw,3.4rem)] font-black text-white leading-[1.06] tracking-tight">
              Niet goedkoper omdat het minder is.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Goedkoper omdat het slimmer is.
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="rounded-xl px-5 py-3 border border-white/8 bg-white/[0.02]">
              <p className="text-white/55 text-xs font-semibold tracking-widest uppercase">
                HubSpot plus losse leveranciers
              </p>
            </div>
            <div
              className="rounded-xl px-5 py-3 border border-[#ff0096]/25"
              style={{ background: "rgba(255,0,150,0.07)" }}
            >
              <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase">
                Forester OS
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            {[
              {
                links: "Prijs per gebruiker. Schaalbaar met je ellende.",
                rechts: "Vast maandbedrag, ongeacht aantal gebruikers.",
              },
              {
                links: "Tot negen facturen per maand.",
                rechts: "Eén factuur. Eén contract.",
              },
              {
                links: "Website, CRM en marketing leven los.",
                rechts: "Alles in één platform, data deelt zichzelf.",
              },
              {
                links: "Updates en security zijn jouw probleem.",
                rechts: "Geen plugins. Geen onderhoud. Geen zorgen.",
              },
              {
                links: "Kleine aanpassing? Offerte afwachten.",
                rechts: "Q doet het meteen. Jij hebt het gevraagd.",
              },
              {
                links: "Engelstalige interface, support uit Dublin.",
                rechts: "Nederlandstalig. Bereikbaar. Hetzelfde team, altijd.",
              },
            ].map((rij, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="grid grid-cols-2 gap-3"
              >
                <div className="rounded-xl border border-white/8 bg-white/[0.02] px-5 py-4 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/8 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-white/50" />
                  </div>
                  <p className="text-white/65 text-sm leading-snug">{rij.links}</p>
                </div>
                <div
                  className="rounded-xl px-5 py-4 flex items-start gap-3"
                  style={{ background: "rgba(255,0,150,0.05)", border: "1px solid rgba(255,0,150,0.2)" }}
                >
                  <div className="w-5 h-5 rounded-full bg-[#ff0096]/25 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#ff0096]" />
                  </div>
                  <p className="text-white text-sm leading-snug font-medium">{rij.rechts}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="relative py-24 px-5 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#ff0096]/8 blur-[180px]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-[family-name:var(--font-gottak)] text-[clamp(2.2rem,5vw,4rem)] font-black text-white leading-[1.04] tracking-tight mb-6">
              Klaar om te stoppen met negen facturen per maand?
            </h2>
            <p className="text-white/65 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              Twintig minuten met Q. Je loopt naar buiten met een vergelijking op maat: jouw huidige stack versus Forester OS, op papier, in euro's.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/contact?plan=growth"
                className="inline-flex items-center justify-center gap-2 bg-[#ff0096] hover:bg-[#e6007f] text-white py-3 px-6 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-[1.03]"
              >
                Plan een demo bij Q <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/prijzen"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white hover:bg-white/8 hover:border-white/40 py-3 px-6 rounded-full text-sm font-semibold transition-all duration-200"
              >
                Bekijk alle pakketten
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
