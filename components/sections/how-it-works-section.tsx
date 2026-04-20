"use client"

import { motion } from "framer-motion"
import { Hammer, Eye, TrendingUp, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Hammer,
    title: "We bouwen je fundament",
    description: "Een uitzonderlijk goede website. Snel, scherp en gebouwd om te groeien.",
  },
  {
    number: "02",
    icon: Eye,
    title: "Q gaat aan het werk",
    description: "Vanaf dag één meet Q wat er gebeurt. Bezoekers, gedrag, conversies. Alles.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "We optimaliseren continu",
    description: "Q spot kansen en pakt ze op. Elke maand beter. Zonder dat jij erom vraagt.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Jij groeit",
    description: "Meer bezoekers, meer leads, meer klanten. En jij ziet het live in je dashboard.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="hoe-het-werkt" className="py-24 md:py-36 px-5 sm:px-8 bg-[#f8f6f1]">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#623bc7] text-xs font-semibold tracking-widest uppercase mb-4">
            Hoe het werkt
          </p>
          <h2 className="font-[family-name:var(--font-gottak)] text-[clamp(2.2rem,5vw,3.8rem)] font-black text-[#0a0a0a] leading-[1.06] tracking-tight">
            Van nul naar groei.<br />In vier stappen.
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
                <span className="text-[11px] font-black tracking-widest text-[#623bc7] mb-1.5">
                  {step.number}
                </span>
                <div className="w-10 h-10 rounded-full bg-white border border-[#623bc7]/15 shadow-sm flex items-center justify-center">
                  <step.icon className="w-4.5 h-4.5 text-[#623bc7]" />
                </div>
              </div>
              <div className="flex-1 rounded-2xl p-5 bg-white border border-black/6 shadow-sm">
                <p className="font-[family-name:var(--font-gottak)] text-[#0a0a0a] font-black text-sm mb-2">
                  {step.title}
                </p>
                <p className="text-[#0a0a0a]/50 text-sm leading-relaxed">{step.description}</p>
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
              className="flex gap-4 bg-white rounded-2xl p-5 border border-black/6 shadow-sm"
            >
              <div className="flex flex-col items-center gap-1 shrink-0 pt-0.5">
                <span className="text-[10px] font-black text-[#623bc7]">{step.number}</span>
                <div className="w-9 h-9 rounded-full bg-[#623bc7]/8 flex items-center justify-center">
                  <step.icon className="w-4 h-4 text-[#623bc7]" />
                </div>
              </div>
              <div>
                <p className="font-[family-name:var(--font-gottak)] text-[#0a0a0a] font-black text-sm mb-1">
                  {step.title}
                </p>
                <p className="text-[#0a0a0a]/50 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
