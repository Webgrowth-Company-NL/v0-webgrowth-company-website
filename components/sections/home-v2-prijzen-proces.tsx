"use client"

import { motion } from "framer-motion"
import { ArrowRight, MessageCircle, Hammer, Rocket } from "lucide-react"
import Link from "next/link"

const pakketten = [
  { naam: "Core", prijs: "399", tagline: "Website, CRM, dashboard", accent: "#623bc7" },
  { naam: "Growth", prijs: "699", tagline: "Plus automations en e-mail", accent: "#ff0096", popular: true },
  { naam: "Scale", prijs: "999", tagline: "Plus custom platform", accent: "#8b5cf6" },
]

const stappen = [
  {
    nummer: "01",
    icon: MessageCircle,
    titel: "Intake met Martijn",
    tekst: "Geen verkooppraatje. We bekijken samen wat je nu betaalt en wat je nodig hebt.",
    duur: "30 minuten",
  },
  {
    nummer: "02",
    icon: Hammer,
    titel: "Bouw in Forester OS",
    tekst: "Ik bouw je site, Q vult content en CRM-velden. Jij reviewt tussentijds.",
    duur: "2 tot 4 weken",
  },
  {
    nummer: "03",
    icon: Rocket,
    titel: "Launch plus Momentum",
    tekst: "Live. Elke maand rapporteert Q wat werkt. Elke week verbeteren we iets.",
    duur: "Doorlopend",
  },
]

export function HomeV2PrijzenProces() {
  return (
    <section className="relative py-24 px-5 sm:px-8 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#623bc7]/8 blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Prijzen */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-4">Prijzen</p>
          <h3 className="font-[family-name:var(--font-gottak)] text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-white leading-[1.1] tracking-tight mb-6">
            Drie pakketten. Eén systeem.
          </h3>

          <div className="flex flex-col gap-2.5 mb-6">
            {pakketten.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative flex items-center gap-4 rounded-xl border p-4 overflow-hidden"
                style={
                  p.popular
                    ? {
                        background: "rgba(255,0,150,0.06)",
                        borderColor: "rgba(255,0,150,0.3)",
                      }
                    : {
                        background: "rgba(255,255,255,0.025)",
                        borderColor: "rgba(255,255,255,0.08)",
                      }
                }
              >
                <div className="h-full w-1 absolute left-0 top-0" style={{ background: p.accent }} />

                <div className="pl-2 flex-1">
                  <div className="flex items-baseline gap-2 mb-0.5">
                    <p className="text-white text-base font-bold">{p.naam}</p>
                    {p.popular && (
                      <span className="text-[9px] font-black text-white px-1.5 py-0.5 rounded" style={{ background: p.accent }}>
                        POPULAIR
                      </span>
                    )}
                  </div>
                  <p className="text-white/55 text-xs">{p.tagline}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-[family-name:var(--font-gottak)] text-2xl font-black text-white tabular-nums">
                    €{p.prijs}
                  </p>
                  <p className="text-white/45 text-[10px]">per maand</p>
                </div>
              </motion.div>
            ))}
          </div>

          <Link
            href="/prijzen"
            className="inline-flex items-center gap-2 text-[#a78bfa] hover:text-white text-sm font-semibold transition-colors duration-200"
          >
            Bekijk alle features per pakket <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Proces */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-4">Hoe we starten</p>
          <h3 className="font-[family-name:var(--font-gottak)] text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-white leading-[1.1] tracking-tight mb-6">
            Drie stappen. Geen offertes over offertes.
          </h3>

          <div className="flex flex-col gap-3">
            {stappen.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-4 rounded-xl border border-white/8 bg-white/[0.025] p-4"
                >
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-9 h-9 rounded-lg bg-[#ff0096]/12 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#ff0096]" />
                    </div>
                    <span className="text-white/30 text-[10px] font-black tracking-widest mt-1">{s.nummer}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-2 mb-1">
                      <p className="text-white text-sm font-semibold">{s.titel}</p>
                      <span className="text-[#a78bfa] text-[10px] font-semibold shrink-0">{s.duur}</span>
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed">{s.tekst}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
