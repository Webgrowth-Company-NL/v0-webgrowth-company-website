import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CtaButton } from "@/components/ui/cta-button"
import Link from "next/link"
import {
  Calendar,
  CalendarCheck,
  CreditCard,
  Database,
  FileText,
  Layers,
  Rocket,
  Smartphone,
  Sparkles,
  Wrench,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Scale — Geïntegreerd platform op Forester OS | Webgrowth",
  description:
    "Scale is voor wie zijn hele losse stack wil vervangen door één platform. Custom CRM, klantportaal, fabrieksportaal, eigen consumenten-app, betalingen en automatisering. Inclusief Bosscher International en Mind Movement als levende voorbeelden.",
  keywords: [
    "custom platform laten bouwen",
    "Pipedrive vervangen platform",
    "geïntegreerd handelsplatform",
    "consumenten-app laten ontwikkelen",
    "Forester OS Scale",
    "klantportaal op maat",
    "platform-as-a-service Nederland",
  ],
  alternates: {
    canonical: "https://webgrowth.company/scale",
  },
  openGraph: {
    title: "Scale — Geïntegreerd platform op Forester OS",
    description:
      "Voor wie zijn hele losse stack wil vervangen. CRM, klantportaal, fabrieksportaal, eigen consumenten-app en automatisering op Forester OS.",
    type: "website",
    locale: "nl_NL",
    siteName: "Webgrowth",
    url: "https://webgrowth.company/scale",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scale — Geïntegreerd platform op Forester OS",
    description: "Eén platform dat je hele losse stack vervangt.",
  },
}

const inclusief = [
  {
    icon: Layers,
    title: "Forester OS als fundament",
    body:
      "Database, authenticatie, multi-tenant dashboard, AI-laag (Q), e-mail-infrastructuur en CMS zit er al in. Wij bouwen jouw bedrijfsspecifieke functionaliteit erop, niet vanaf nul.",
  },
  {
    icon: Wrench,
    title: "Eén platform, geen losse tools",
    body:
      "CRM, offerte-engine, productconfigurator, klantportaal, fabrieksportaal, designportaal, warehouse, facturatie en betalingen. Vervangt Pipedrive, HubSpot, Excel-prijslijsten, losse webshops, mailflows en WhatsApp-groepen.",
  },
  {
    icon: Database,
    title: "Slimme koppelingen",
    body:
      "Mollie, Stripe, Google Calendar, WhatsApp Business, Pipedrive, HubSpot, BAG en Kadaster, KvK, en marktdata-API's voor valutakoersen, transportprijzen en importtarieven.",
  },
  {
    icon: Sparkles,
    title: "AI ingebouwd via Q",
    body:
      "Anthropic Claude en Google Gemini draaien onder de motorkap voor source-attribution, sample-foto-controle, transcriptie van klantgesprekken en automatische lead-classificatie.",
  },
  {
    icon: Smartphone,
    title: "Web én eigen consumenten-app",
    body:
      "Wanneer eindgebruikers een app verwachten, bouwen we native iOS en Android op dezelfde Forester OS-data-laag. Eén centrale waarheid, drie kanalen (web, iOS, Android).",
  },
  {
    icon: Calendar,
    title: "Strategisch partnership",
    body:
      "Niet alleen bouwen, ook meedenken. Maandelijks reviewen we wat het platform doet, wat klanten gebruiken en wat de volgende module zou moeten worden.",
  },
]

type ScaleCase = {
  client: string
  badge: string
  headline: string
  intro: string
  replaces?: string[]
  features: { icon: typeof Layers; label: string }[]
  status: string
  accent: string
  logo?: string
}

const cases: ScaleCase[] = [
  {
    client: "Bosscher International",
    badge: "B2B handel",
    headline: "Geïntegreerd handelsplatform dat de hele losse stack vervangt",
    intro:
      "Internationaal handelsbedrijf in branded merchandising. Stapte uit Pipedrive, een lappendeken van Excel-sheets, een losse webshop en WhatsApp-groepen met fabrieken in China en Turkije. Wij bouwen één platform dat alles vervangt.",
    replaces: [
      "Pipedrive en losse CRM-ervaring",
      "Excel-prijslijsten, prijslijst-PDFs en website-prijzen die uit elkaar lopen",
      "WhatsApp-groepen voor fabriekscommunicatie",
      "Excel-warehouse en losse mailflows per order",
    ],
    features: [
      { icon: Layers, label: "CRM met source-attribution per beurs, mailing en campagne" },
      { icon: Database, label: "Klant-, fabrieks-, design- en warehouse-portaal in één omgeving" },
      { icon: FileText, label: "Offerte-engine met productconfigurator, multi-currency en margin-toggle voor resellers" },
      { icon: Sparkles, label: "AI-monitoring van valutakoersen, importtarieven en transportkosten per land" },
      { icon: CalendarCheck, label: "Sample-flow met foto-AI-controle voor verzending, automatische status-updates" },
      { icon: FileText, label: "Auto-gegenereerde product-paspoorten conform CE-regelgeving 2027" },
    ],
    status: "In ontwikkeling — live in 2026",
    accent: "#ff0096",
  },
  {
    client: "Mind Movement",
    badge: "Coaching & retraites",
    headline: "Website, consumenten-app en eigen CMS voor coaching-organisatie",
    intro:
      "Mind Movement begeleidt klanten via één-op-één sessies en groepsretraites. Werkt sinds 2021 met Webgrowth op een platform dat website, eigen CMS en mobiele app combineert tot één samenhangend ecosysteem.",
    features: [
      { icon: Layers, label: "Eigen CMS waar het volledige aanbod en alle content beheerd wordt" },
      { icon: Smartphone, label: "Native consumenten-app voor klanten, gekoppeld aan dezelfde data-laag" },
      { icon: CalendarCheck, label: "Booking-engine voor losse sessies en meerdaagse retraites" },
      { icon: CreditCard, label: "Facturatie en betalingen ingebakken via Mollie en Stripe" },
      { icon: Database, label: "Klant-dashboard met persoonlijke voortgang, sessie-historie en aankomende afspraken" },
      { icon: Wrench, label: "Doorlopende uitbreidingen sinds 2021, telkens nieuwe module wanneer het bedrijf dat vraagt" },
    ],
    status: "Live sinds 2021, groeit door",
    accent: "#a78bfa",
    logo: "/images/clients/mind-movement.png",
  },
]

const voorWie = [
  {
    icon: Rocket,
    label: "Je hebt een idee voor een platform of app",
    body:
      "Een gat in de markt, een interne tool die niet bestaat, een betere manier om jouw klanten te bedienen. Je weet wat je wilt, maar niet hoe. Wij bouwen het.",
  },
  {
    icon: CalendarCheck,
    label: "Je doelgroep heeft een specifiek proces",
    body:
      "Een offerte-configurator met fabriekslogica, een booking-flow voor sessies en retraites, een sample-flow met fabriekscommunicatie. Wat een standaard CMS niet kan, bouwen wij in Forester OS.",
  },
  {
    icon: Layers,
    label: "Je groeit uit je huidige stack",
    body:
      "WordPress en losse plugins houden het niet meer. HubSpot is te duur. Een eigen platform is goedkoper én sneller dan zes losse tools onderhouden.",
  },
]

export default function ScalePage() {
  return (
    <div className="bg-[#0d0818] min-h-screen">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-16 px-5 sm:px-8 overflow-hidden">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-[#623bc7]/10 blur-[180px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#ff0096]/8 blur-[140px] pointer-events-none" />
          <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
            <div>
              <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-5">
                Forester OS Scale
              </p>
              <h1 className="font-[family-name:var(--font-gottak)] text-[clamp(2.6rem,7vw,5.4rem)] font-black text-white leading-[1.02] tracking-tight mb-6">
                Verder dan een website.{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Een platform op maat.
                </span>
              </h1>
              <p className="text-white/65 text-lg md:text-xl leading-relaxed max-w-xl mb-8">
                Scale is voor wie zijn hele losse stack wil vervangen door één platform. Geen website met een formulier eronder, maar een geïntegreerd systeem dat Pipedrive, Excel-prijslijsten, losse webshops, fabriekscommunicatie en mailflows samenbrengt. Inclusief eigen consumenten-app als je doelgroep dat vraagt.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <CtaButton href="/contact" variant="primary">
                  Boek een kennismaking
                </CtaButton>
                <CtaButton href="/succesverhalen" variant="secondary">
                  Bekijk de cases
                </CtaButton>
              </div>
              <p className="mt-5 text-white/55 text-xs">
                Vanaf €999/maand · custom development inbegrepen ·{" "}
                <Link href="/prijzen" className="underline underline-offset-2 hover:text-white/80 transition-colors">
                  bekijk de pakketten
                </Link>
              </p>
            </div>

            {/* Visuele showcase */}
            <div className="relative">
              <div
                className="rounded-3xl border border-white/10 overflow-hidden p-8"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,0,150,0.10) 0%, rgba(98,59,199,0.10) 100%)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-[0.05] pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, rgba(255,255,255,1) 1.5px, transparent 1.5px)",
                    backgroundSize: "24px 24px",
                  }}
                />
                <div className="relative">
                  <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-4">
                    Wat een Scale-platform omvat
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Eén centrale CRM met source-attribution per kanaal",
                      "Klant-, fabrieks-, design- en warehouse-portaal in één omgeving",
                      "Offerte-engine met configurator, multi-currency en marges",
                      "Eigen consumenten-app voor iOS en Android, gekoppeld aan dezelfde data",
                      "Facturatie, Mollie- en Stripe-betalingen, automatische opvolging",
                      "AI-monitoring van valuta, transportkosten, importtarieven",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span
                          className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)" }}
                        />
                        <span className="text-white/85 text-base leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wat zit erin */}
        <section className="px-5 sm:px-8 py-20 border-t border-white/6">
          <div className="max-w-7xl mx-auto">
            <p className="text-[#a78bfa] text-xs font-semibold tracking-widest uppercase mb-4">
              Wat zit er in Scale
            </p>
            <h2 className="font-[family-name:var(--font-gottak)] text-[clamp(2rem,4.5vw,3.4rem)] font-black text-white leading-[1.06] tracking-tight mb-12 max-w-2xl">
              Zes bouwstenen die elke Scale-opdracht meekrijgt.
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {inclusief.map((item, i) => {
                const Icon = item.icon
                return (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/10 p-7"
                    style={{ background: "rgba(255,255,255,0.03)" }}
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#ff0096]/15 border border-[#ff0096]/25 flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5 text-[#ff0096]" strokeWidth={2} />
                    </div>
                    <h3 className="font-[family-name:var(--font-gottak)] text-xl font-black text-white mb-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-white/65 text-base leading-relaxed">{item.body}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Cases */}
        <section className="px-5 sm:px-8 py-20 border-t border-white/6">
          <div className="max-w-7xl mx-auto">
            <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-4">
              Bewijs uit de praktijk
            </p>
            <h2 className="font-[family-name:var(--font-gottak)] text-[clamp(2rem,4.5vw,3.4rem)] font-black text-white leading-[1.06] tracking-tight mb-5 max-w-3xl">
              Twee bedrijven die hun losse stack al achter zich lieten.
            </h2>
            <p className="text-white/65 text-base md:text-lg leading-relaxed max-w-2xl mb-12">
              Concrete Scale-opdrachten die laten zien hoe ver een platform op Forester OS kan gaan. Niet één tool extra, maar een complete vervanging.
            </p>

            <div className="space-y-6">
              {cases.map((c) => (
                <article
                  key={c.client}
                  className="rounded-3xl border border-white/10 overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <div
                    className="h-1 w-full"
                    style={{ background: `linear-gradient(90deg, ${c.accent}, transparent)` }}
                  />
                  <div className="p-7 md:p-9">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span
                        className="text-xs font-semibold tracking-widest uppercase"
                        style={{ color: c.accent }}
                      >
                        Klantcase · {c.client}
                      </span>
                      <span className="text-white/20 text-xs" aria-hidden>·</span>
                      <span
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase"
                        style={{
                          background: `${c.accent}1f`,
                          color: c.accent,
                          border: `1px solid ${c.accent}33`,
                        }}
                      >
                        {c.badge}
                      </span>
                      <span className="text-white/20 text-xs" aria-hidden>·</span>
                      <span className="text-white/55 text-xs">{c.status}</span>
                    </div>
                    <h3 className="font-[family-name:var(--font-gottak)] text-2xl md:text-3xl font-black text-white leading-tight mb-4 max-w-3xl">
                      {c.headline}
                    </h3>
                    <p className="text-white/65 text-base md:text-lg leading-relaxed mb-7 max-w-3xl">
                      {c.intro}
                    </p>

                    {c.replaces && (
                      <div className="mb-7 rounded-2xl border border-white/10 p-5 bg-white/[0.02]">
                        <p className="text-white/55 text-[11px] font-semibold tracking-widest uppercase mb-3">
                          Wat wij vervangen
                        </p>
                        <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                          {c.replaces.map((r, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2.5 text-white/70 text-sm leading-relaxed"
                            >
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-400/70 shrink-0" />
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div>
                      <p className="text-white/55 text-[11px] font-semibold tracking-widest uppercase mb-4">
                        Wat wij {c.replaces ? "ervoor in de plaats bouwen" : "hebben gebouwd"}
                      </p>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {c.features.map((f, i) => {
                          const Icon = f.icon
                          return (
                            <li
                              key={i}
                              className="flex items-start gap-3 rounded-xl border border-white/8 p-4"
                              style={{ background: "rgba(255,255,255,0.03)" }}
                            >
                              <span
                                className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                                style={{
                                  background: `${c.accent}1f`,
                                  border: `1px solid ${c.accent}33`,
                                }}
                              >
                                <Icon
                                  className="w-4 h-4"
                                  style={{ color: c.accent }}
                                  strokeWidth={2}
                                />
                              </span>
                              <span className="text-white/80 text-sm leading-relaxed">{f.label}</span>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Voor wie */}
        <section className="px-5 sm:px-8 py-20 border-t border-white/6">
          <div className="max-w-7xl mx-auto">
            <p className="text-[#a78bfa] text-xs font-semibold tracking-widest uppercase mb-4">
              Voor wie
            </p>
            <h2 className="font-[family-name:var(--font-gottak)] text-[clamp(2rem,4.5vw,3.4rem)] font-black text-white leading-[1.06] tracking-tight mb-12 max-w-2xl">
              Drie soorten opdrachten waarvoor Scale werkt.
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {voorWie.map((item, i) => {
                const Icon = item.icon
                return (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/10 p-7 flex flex-col gap-4"
                    style={{ background: "rgba(255,255,255,0.03)" }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#ff0096]/15 border border-[#ff0096]/25 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#ff0096]" strokeWidth={2} />
                    </div>
                    <h3 className="font-[family-name:var(--font-gottak)] text-xl font-black text-white leading-tight">
                      {item.label}
                    </h3>
                    <p className="text-white/65 text-base leading-relaxed">{item.body}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Hoe het werkt voor Scale */}
        <section className="px-5 sm:px-8 py-20 border-t border-white/6">
          <div className="max-w-4xl mx-auto">
            <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-4">
              Hoe een Scale-traject loopt
            </p>
            <h2 className="font-[family-name:var(--font-gottak)] text-[clamp(2rem,4.5vw,3.4rem)] font-black text-white leading-[1.06] tracking-tight mb-12 max-w-2xl">
              Vier stappen, geen offerte over offerte.
            </h2>
            <div className="space-y-4">
              {[
                {
                  nr: "01",
                  title: "Discovery",
                  duration: "1 week",
                  body:
                    "We schetsen samen wat het platform moet doen, voor wie en met welke koppelingen. Geen 30 pagina's PvE, gewoon een wireframe en een lijstje features op één A4.",
                },
                {
                  nr: "02",
                  title: "Bouw in sprints",
                  duration: "4 tot 12 weken",
                  body:
                    "Sprints van twee weken. Na elke sprint een werkende demo waar je op kunt klikken. Tussentijdse koers-correctie zonder dat de begroting ontspoort.",
                },
                {
                  nr: "03",
                  title: "Live met monitoring",
                  duration: "1 week",
                  body:
                    "We zetten het platform live, koppelen monitoring en zorgen dat de eerste echte gebruikers zonder problemen door het systeem komen.",
                },
                {
                  nr: "04",
                  title: "Doorontwikkeling",
                  duration: "Doorlopend",
                  body:
                    "Elke maand kijken we wat klanten doen, waar ze afhaken en wat de volgende functionaliteit moet zijn. Inbegrepen in het abonnement.",
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 p-6 md:p-7 grid sm:grid-cols-[100px_1fr_120px] gap-4 sm:gap-8 items-start"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <p className="font-[family-name:var(--font-gottak)] text-3xl md:text-4xl font-black leading-none">
                    <span
                      style={{
                        background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {step.nr}
                    </span>
                  </p>
                  <div>
                    <h3 className="text-white font-bold text-lg md:text-xl mb-2">{step.title}</h3>
                    <p className="text-white/65 text-base leading-relaxed">{step.body}</p>
                  </div>
                  <p className="text-white/45 text-xs sm:text-right">{step.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Eind-CTA */}
        <section className="px-5 sm:px-8 py-20 border-t border-white/6">
          <div className="max-w-7xl mx-auto">
            <div
              className="rounded-3xl border border-[#ff0096]/25 p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,0,150,0.08) 0%, rgba(98,59,199,0.08) 100%)",
              }}
            >
              <div>
                <p className="font-[family-name:var(--font-gottak)] text-white text-3xl md:text-4xl font-black leading-tight mb-2">
                  Heb je een idee voor een platform?
                </p>
                <p className="text-white/65 text-base md:text-lg leading-relaxed max-w-xl">
                  Dertig minuten kennismaken, gratis en online. Geen pitch, gewoon kijken of het haalbaar is en wat er ongeveer voor nodig is.
                </p>
              </div>
              <div className="shrink-0">
                <CtaButton href="/contact" variant="primary">
                  Vertel ons je idee
                </CtaButton>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
