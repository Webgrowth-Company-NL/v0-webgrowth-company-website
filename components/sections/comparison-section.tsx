"use client"

import { motion } from "framer-motion"
import { X, Check } from "lucide-react"

const rows = [
  {
    traditional: "Gebouwd, gefactureerd, weg.",
    webgrowth: "Q blijft. Elke maand actief.",
  },
  {
    traditional: "Elke aanpassing? Nieuwe offerte.",
    webgrowth: "Wij regelen het. Geen discussie.",
  },
  {
    traditional: "Als het kapot gaat, bel een ander.",
    webgrowth: "Wij lossen het op. Direct.",
  },
  {
    traditional: "Jij weet niet wat je website doet.",
    webgrowth: "Live inzicht. Altijd en overal.",
  },
  {
    traditional: "SEO en groei? Vraag maar een ander bureau.",
    webgrowth: "Alles in één. Marketing loopt door.",
  },
  {
    traditional: "Kosten die je niet zag aankomen.",
    webgrowth: "Transparant. Geen verrassingen.",
  },
]

export function ComparisonSection() {
  return (
    <section className="relative py-24 md:py-32 px-5 sm:px-8 bg-[#0d0818] overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#ff0096]/6 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-5">Het verschil</p>
          <h2 className="font-[family-name:var(--font-gottak)] text-[clamp(2.2rem,5vw,3.8rem)] font-black text-white leading-[1.06] tracking-tight">
            Anders gebouwd.{" "}
            <span style={{
              background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Anders geleverd.
            </span>
          </h2>
        </motion.div>

        {/* Header */}
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="rounded-xl px-5 py-3 border border-white/8 bg-white/[0.02]">
            <p className="text-white/40 text-xs font-semibold tracking-widest uppercase">Traditioneel bureau</p>
          </div>
          <div className="rounded-xl px-5 py-3 border border-[#ff0096]/20" style={{ background: "rgba(255,0,150,0.07)" }}>
            <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase">Webgrowth</p>
          </div>
        </div>

        {/* Rows */}
        <div className="flex flex-col gap-2">
          {rows.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              className="grid grid-cols-2 gap-3"
            >
              {/* Traditional */}
              <div className="flex items-center gap-3 rounded-xl px-5 py-4 border border-white/6 bg-white/[0.02]">
                <div className="w-5 h-5 rounded-full bg-red-500/15 flex items-center justify-center shrink-0">
                  <X className="w-3 h-3 text-red-400 stroke-[3]" />
                </div>
                <span className="text-white/45 text-sm leading-snug">{row.traditional}</span>
              </div>

              {/* Webgrowth */}
              <div className="flex items-center gap-3 rounded-xl px-5 py-4 border border-[#ff0096]/12" style={{ background: "rgba(255,0,150,0.05)" }}>
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-emerald-400 stroke-[3]" />
                </div>
                <span className="text-white font-medium text-sm leading-snug">{row.webgrowth}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
