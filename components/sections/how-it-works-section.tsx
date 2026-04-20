"use client"

import { motion } from "framer-motion"
import { Hammer, Eye, TrendingUp, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Hammer,
    title: "We bouwen je fundament",
    description: "Een uitzonderlijk goede website. Snel, scherp en gebouwd om te groeien.",
    accent: "#623bc7",
  },
  {
    number: "02",
    icon: Eye,
    title: "Q gaat aan het werk",
    description: "Vanaf dag één meet Q wat er gebeurt. Bezoekers, gedrag, conversies. Alles.",
    accent: "#ff0096",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "We optimaliseren continu",
    description: "Q spot kansen en pakt ze op. Elke maand beter. Zonder dat jij erom vraagt.",
    accent: "#623bc7",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Jij groeit",
    description: "Meer bezoekers, meer leads, meer klanten. En jij ziet het live in je dashboard.",
    accent: "#ff0096",
  },
]

export function HowItWorksSection() {
  return (
    <section id="hoe-het-werkt" className="relative py-24 md:py-36 px-5 sm:px-8 bg-[#0d0818] overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#623bc7]/10 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-6">Hoe het werkt</p>
          <h2 className="font-[family-name:var(--font-gottak)] text-[clamp(2.2rem,5vw,3.8rem)] font-black text-white leading-[1.06] tracking-tight">
            Van nul naar groei.{" "}
            <span style={{
              background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              In vier stappen.
            </span>
          </h2>
        </motion.div>

        {/* Desktop */}
        <div className="hidden md:grid grid-cols-4 gap-4 relative">
          <div className="absolute top-8 left-[13%] right-[13%] h-px border-t border-dashed border-[#623bc7]/25" />
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col"
            >
              <div className="relative z-10 flex flex-col items-center mb-6">
                <span className="text-[11px] font-black tracking-widest mb-1.5" style={{ color: step.accent }}>
                  {step.number}
                </span>
                <div className="w-10 h-10 rounded-full border flex items-center justify-center" style={{ background: `${step.accent}18`, borderColor: `${step.accent}30` }}>
                  <step.icon className="w-4 h-4" style={{ color: step.accent }} />
                </div>
              </div>
              <div className="flex-1 rounded-2xl p-5 border border-white/8 hover:border-white/15 transition-colors duration-300" style={{ background: "rgba(255,255,255,0.04)" }}>
                <p className="font-[family-name:var(--font-gottak)] text-white font-black text-sm mb-2">
                  {step.title}
                </p>
                <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile */}
        <div className="md:hidden space-y-3">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex gap-4 rounded-2xl p-5 border border-white/8"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              <div className="flex flex-col items-center gap-1 shrink-0 pt-0.5">
                <span className="text-[10px] font-black" style={{ color: step.accent }}>{step.number}</span>
                <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: `${step.accent}18` }}>
                  <step.icon className="w-4 h-4" style={{ color: step.accent }} />
                </div>
              </div>
              <div>
                <p className="font-[family-name:var(--font-gottak)] text-white font-black text-sm mb-1">
                  {step.title}
                </p>
                <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
