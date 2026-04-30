"use client"

import { motion } from "framer-motion"
import { Wrench, Layers, TrendingUp } from "lucide-react"
import { CtaButton } from "@/components/ui/cta-button"

type Differentiator = {
  icon: typeof Wrench
  accent: string
  title: string
  body: string
  proofs: string[]
  link?: { label: string; href: string }
}

const differentiators: Differentiator[] = [
  {
    icon: Wrench,
    accent: "#ff0096",
    title: "De tool, niet de website",
    body:
      "We bouwen geen contactformulier onder een hero. We bouwen het ding waar je klanten op afkomen en dat jou werk bespaart.",
    proofs: [
      "Tornado Rent: live reserveringstool met WhatsApp-melding bij elke aanvraag",
      "Adalace: Quickscan met persoonlijk PDF-rapport per gebouw",
    ],
    link: { label: "Bekijk de klantcases", href: "/succesverhalen" },
  },
  {
    icon: Layers,
    accent: "#a78bfa",
    title: "Eén platform, geen stack",
    body:
      "Geen WordPress, Mailchimp, HubSpot en een los SEO-bureau. Alles draait op Forester OS, ons eigen platform.",
    proofs: [
      "Eén login, één team, één maandelijkse rekening",
      "Geen plugin-conflicten of dubbele licenties",
      "Updates zonder dat er iets breekt",
    ],
  },
  {
    icon: TrendingUp,
    accent: "#623bc7",
    title: "Elke maand beter, zonder vergaderen",
    body:
      "Q analyseert je verkeer, conversies en SEO-kansen. Wij voeren de aanpassingen uit. Geen rapport om door te ploegen, geen meeting in te plannen.",
    proofs: [
      "Maandelijks bericht in je inbox met wat er beter is geworden",
      "Concrete acties, geen PowerPoint",
    ],
    link: { label: "Hoe wij werken", href: "/hoe-het-werkt" },
  },
]

export function HomeV2VoorWie() {
  return (
    <section className="relative py-24 md:py-32 px-5 sm:px-8 bg-[#0d0818] overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#623bc7]/8 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#ff0096]/6 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-5">Het verschil</p>
          <h2 className="font-[family-name:var(--font-gottak)] text-[clamp(2.2rem,5vw,3.8rem)] font-black text-white leading-[1.06] tracking-tight">
            Wij bouwen niet wat andere bureaus bouwen.<br />
            <span
              style={{
                background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Wij bouwen wat je klanten gebruiken.
            </span>
          </h2>
          <p className="text-white/65 text-base sm:text-lg leading-relaxed mt-5">
            Een mooie website is niet wat we leveren. Het is het beginpunt. Drie dingen die je bij geen ander bureau krijgt.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {differentiators.map((d, i) => {
            const Icon = d.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col rounded-2xl overflow-hidden border border-white/8"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${d.accent}, transparent)` }} />

                <div className="p-7 flex flex-col flex-1">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: `${d.accent}1f`, border: `1px solid ${d.accent}33` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: d.accent }} strokeWidth={2} />
                  </div>

                  <h3 className="font-[family-name:var(--font-gottak)] text-2xl font-black text-white mb-3 leading-tight">
                    {d.title}
                  </h3>

                  <p className="text-white/65 text-sm leading-relaxed mb-5">
                    {d.body}
                  </p>

                  <ul className="space-y-2.5 mb-5 flex-1">
                    {d.proofs.map((p, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: d.accent }}
                        />
                        <span className="text-white/55 text-sm leading-relaxed">{p}</span>
                      </li>
                    ))}
                  </ul>

                  {d.link && (
                    <a
                      href={d.link.href}
                      className="inline-flex items-center gap-1.5 text-[#a78bfa] text-sm font-semibold hover:text-white transition-colors duration-200"
                    >
                      {d.link.label} <span className="text-base leading-none" aria-hidden>→</span>
                    </a>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 rounded-2xl px-6 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 border border-white/8"
          style={{ background: "rgba(255,255,255,0.03)" }}
        >
          <div>
            <p className="text-white text-sm font-semibold mb-1">Werkt voor advocaten, notarissen, accountants, logistiek, retail en B2B-dienstverlening.</p>
            <p className="text-white/55 text-sm leading-relaxed">
              De fase waarin je zit, bepaalt het pakket. Je branche bepaalt de invulling. Vanaf €399 per maand, alles inbegrepen.
            </p>
          </div>
          <div className="shrink-0">
            <CtaButton href="/contact" variant="primary">Plan een kennismaking</CtaButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
