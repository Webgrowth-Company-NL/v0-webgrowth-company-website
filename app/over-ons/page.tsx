import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CtaButton } from "@/components/ui/cta-button"
import Image from "next/image"
import { Building2, Code2, Layers, Rocket } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Over ons — Het verhaal achter Webgrowth Company | Breda",
  description:
    "Van Marketing Genius naar Webgrowth Company. Waarom we Forester OS bouwden en waarom we vanaf 2025 weer in het hart van Breda zitten.",
  keywords: [
    "over Webgrowth Company",
    "Marketing Genius Breda",
    "Forester OS verhaal",
    "Martijn Duin",
    "websitebureau Breda",
  ],
  alternates: {
    canonical: "https://webgrowth.company/over-ons",
  },
  openGraph: {
    title: "Over ons — Het verhaal achter Webgrowth Company",
    description:
      "Van Marketing Genius naar Webgrowth Company. Waarom we Forester OS bouwden en waarom we vanaf 2025 weer in het hart van Breda zitten.",
    type: "website",
    locale: "nl_NL",
    siteName: "Webgrowth",
    url: "https://webgrowth.company/over-ons",
    images: [
      {
        url: "/images/kantoor/drie-hoefijzers.jpg",
        width: 1200,
        height: 630,
        alt: "Het Drie Hoefijzers-pand aan de Ceresstraat in Breda",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Over ons — Het verhaal achter Webgrowth Company",
    description: "Van Marketing Genius naar Webgrowth Company. Waarom we Forester OS bouwden.",
    images: ["/images/kantoor/drie-hoefijzers.jpg"],
  },
}

const principes = [
  {
    icon: Building2,
    title: "Eén platform",
    body: "Geen WordPress + Mailchimp + HubSpot + bureau-uren + losse plugins. Alles op Forester OS, gebouwd om met je mee te groeien.",
  },
  {
    icon: Code2,
    title: "Tools, geen folders",
    body: "We bouwen geen homepage met een formulier eronder. We bouwen het ding waar je klanten op afkomen en dat jou werk uit handen neemt.",
  },
  {
    icon: Layers,
    title: "Maandelijks beter",
    body: "Q analyseert je verkeer, kansen en SEO-gaten. Wij voeren de aanpassingen uit. Geen rapport, gewoon resultaat in je inbox.",
  },
  {
    icon: Rocket,
    title: "Geen verkooppraatje",
    body: "We zijn solo en zelfstandig, met een vast netwerk eromheen. Dat houdt ons eerlijk en wendbaar. Geen sales-funnel, gewoon werken.",
  },
]

const milestones = [
  {
    year: "2009",
    title: "Marketing Genius wordt geboren",
    body: "Begonnen als kleine WordPress-bouwer onder de naam Marketing Genius, vanuit een zolderkamer in Breda.",
  },
  {
    year: "2015 — 2024",
    title: "Bureauleven en de grenzen van WordPress",
    body: "Tientallen klanten geholpen aan een goede website, maar steeds vaker tegen dezelfde muren aangelopen: plugin-rommel, security-updates die kapot maakten, marketing- en CRM-tools die niet met de site praatten.",
  },
  {
    year: "2024",
    title: "Forester OS",
    body: "Nieuwe stack op Next.js en Firebase. Eén platform met website, CRM, content-editor en AI ingebouwd. Geen plugins meer. Schaalbaar van ZZP tot grotere kantoren.",
  },
  {
    year: "2025",
    title: "Webgrowth Company en terug naar het hart van Breda",
    body: "Naam veranderd naar Webgrowth Company en het kantoor verhuisd naar het monumentale Drie Hoefijzers-pand in het centrum van Breda. Fundament voor de volgende stap.",
  },
]

export default function OverOnsPage() {
  return (
    <div className="bg-[#0d0818] min-h-screen">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-16 px-5 sm:px-8 overflow-hidden">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-[#623bc7]/10 blur-[180px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#ff0096]/8 blur-[140px] pointer-events-none" />
          <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[1fr_1fr] gap-12 items-center">
            <div>
              <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-5">
                Over ons
              </p>
              <h1 className="font-[family-name:var(--font-gottak)] text-[clamp(2.6rem,7vw,5.4rem)] font-black text-white leading-[1.02] tracking-tight mb-6">
                Geen bureau.{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Een platform met mensen erachter.
                </span>
              </h1>
              <p className="text-white/65 text-lg md:text-xl leading-relaxed max-w-xl">
                Webgrowth Company bouwt websites en software voor MKB-bedrijven die meer willen dan een mooie folder online. Wij doen dat sinds 2009, eerst als Marketing Genius en sinds 2025 onder onze huidige naam. Vanuit het monumentale Drie Hoefijzers-pand in Breda, met Forester OS als ons eigen platform onder elke oplevering.
              </p>
            </div>

            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10">
              <Image
                src="/images/kantoor/drie-hoefijzers.jpg"
                alt="Het Drie Hoefijzers-pand aan de Ceresstraat in Breda, kantoor van Webgrowth Company"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0818]/85 via-[#0d0818]/30 to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-[#ff0096] text-[10px] font-semibold tracking-widest uppercase mb-2">
                  HQ in Breda
                </p>
                <p className="font-[family-name:var(--font-gottak)] text-2xl md:text-3xl font-black text-white leading-tight">
                  Het Drie Hoefijzers-pand
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tijdlijn */}
        <section className="px-5 sm:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <p className="text-[#a78bfa] text-xs font-semibold tracking-widest uppercase mb-4">
              Het verhaal
            </p>
            <h2 className="font-[family-name:var(--font-gottak)] text-[clamp(2rem,4.5vw,3.4rem)] font-black text-white leading-[1.06] tracking-tight mb-12 max-w-2xl">
              Van Marketing Genius naar Forester OS.
            </h2>

            <div className="space-y-4">
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 p-6 md:p-7 grid sm:grid-cols-[140px_1fr] gap-4 sm:gap-8"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <p className="font-[family-name:var(--font-gottak)] text-2xl md:text-3xl font-black leading-tight">
                    <span
                      style={{
                        background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {m.year}
                    </span>
                  </p>
                  <div>
                    <h3 className="text-white font-bold text-lg md:text-xl mb-2">{m.title}</h3>
                    <p className="text-white/65 text-base leading-relaxed">{m.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Principes */}
        <section className="px-5 sm:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-4">
              Wat ons drijft
            </p>
            <h2 className="font-[family-name:var(--font-gottak)] text-[clamp(2rem,4.5vw,3.4rem)] font-black text-white leading-[1.06] tracking-tight mb-12 max-w-2xl">
              Vier dingen die alles bepalen.
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {principes.map((p, i) => {
                const Icon = p.icon
                return (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/10 p-7 flex gap-5"
                    style={{ background: "rgba(255,255,255,0.03)" }}
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#ff0096]/15 border border-[#ff0096]/25 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#ff0096]" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-gottak)] text-xl font-black text-white mb-2">
                        {p.title}
                      </h3>
                      <p className="text-white/65 text-base leading-relaxed">{p.body}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 sm:px-8 py-20">
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
                  Eens praten?
                </p>
                <p className="text-white/65 text-base md:text-lg leading-relaxed max-w-xl">
                  Dertig minuten kennismaken, gratis en online. Gewoon eens kijken of het klikt.
                </p>
              </div>
              <div className="shrink-0">
                <CtaButton href="/contact" variant="primary">
                  Boek een kennismaking
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
