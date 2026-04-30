import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CtaButton } from "@/components/ui/cta-button"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bedankt — We hebben je bericht ontvangen | Webgrowth",
  description:
    "We hebben je aanvraag goed ontvangen en nemen binnenkort contact op.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://webgrowth.company/bedankt",
  },
}

const next = [
  {
    title: "Bekijk onze klantcases",
    body: "Concrete voorbeelden van wat we voor andere bedrijven bouwen.",
    href: "/succesverhalen",
    cta: "Naar succesverhalen",
  },
  {
    title: "Lees onze field logs",
    body: "Korte praktijkverhalen over website, SEO en automatisering voor MKB.",
    href: "/field-logs",
    cta: "Naar field logs",
  },
  {
    title: "Reken zelf je besparing uit",
    body: "Vergelijk jouw huidige stack met Forester OS in eigen cijfers.",
    href: "/hubspot-alternatief#calculator",
    cta: "Open de calculator",
  },
]

export default function BedanktPage() {
  return (
    <div className="bg-[#0d0818] min-h-screen">
      <Navigation />
      <main>
        <section className="relative pt-32 pb-16 px-5 sm:px-8 overflow-hidden">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-[#623bc7]/10 blur-[180px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#ff0096]/8 blur-[160px] pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mb-8">
              <CheckCircle2 className="w-10 h-10 text-emerald-400" />
            </div>
            <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-5">
              Bedankt
            </p>
            <h1 className="font-[family-name:var(--font-gottak)] text-[clamp(2.6rem,7vw,5.4rem)] font-black text-white leading-[1.02] tracking-tight mb-6">
              We hebben je bericht{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                goed ontvangen.
              </span>
            </h1>
            <p className="text-white/65 text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-10">
              Je krijgt zo een bevestiging in je inbox. Wij nemen binnen één werkdag contact op om de volgende stap te plannen. Geen verkooppraatje, gewoon een eerlijk gesprek.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <CtaButton href="/" variant="primary">
                Terug naar home
              </CtaButton>
              <CtaButton href="/succesverhalen" variant="outline">
                Bekijk klantcases
              </CtaButton>
            </div>
          </div>
        </section>

        <section className="px-5 sm:px-8 pb-24">
          <div className="max-w-7xl mx-auto">
            <p className="text-[#a78bfa] text-xs font-semibold tracking-widest uppercase mb-4 text-center">
              Verder kijken
            </p>
            <h2 className="font-[family-name:var(--font-gottak)] text-3xl md:text-4xl font-black text-white leading-tight mb-10 text-center">
              Iets om te lezen terwijl je wacht
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {next.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="group rounded-2xl border border-white/10 p-7 flex flex-col gap-3 hover:border-white/25 transition-colors"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <h3 className="font-[family-name:var(--font-gottak)] text-xl md:text-2xl font-black text-white leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-white/65 text-sm leading-relaxed flex-1">{item.body}</p>
                  <span className="inline-flex items-center gap-1.5 text-[#a78bfa] text-sm font-semibold group-hover:text-white transition-colors">
                    {item.cta}
                    <span aria-hidden>→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
