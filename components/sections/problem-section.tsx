"use client"

import { motion } from "framer-motion"
import { X } from "lucide-react"
import Link from "next/link"

const problems = [
  "Je bureau heeft gebouwd en is verdwenen",
  "Je weet niet of je website iets doet",
  "Je concurrent staat boven jou en je snapt niet waarom",
  "Je hebt al drie keer gevraagd om een aanpassing",
  "Je betaalt elke maand maar ziet geen verschil",
  "Je website draait. Maar je bedrijf groeit er niet van",
]

export function ProblemSection() {
  return (
    <section className="relative py-24 md:py-36 px-5 sm:px-8 bg-[#0d0818] overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#ff0096]/6 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 lg:items-end">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-6">Herken je dit?</p>
            <h2 className="font-[family-name:var(--font-gottak)] text-[clamp(2.2rem,5vw,3.8rem)] font-black text-white leading-[1.06] tracking-tight">
              Bureaus bouwen<br />
              <span style={{
                background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                en verdwijnen.
              </span>
            </h2>
            <p className="mt-6 text-white/80 text-lg leading-relaxed max-w-sm">
              Jij betaalt. Maar wat je website oplevert? Geen idee. Dat is het echte probleem.
            </p>

            <div className="mt-10 rounded-2xl border border-[#623bc7]/40 p-6" style={{ background: "linear-gradient(135deg, rgba(98,59,199,0.18) 0%, rgba(74,43,158,0.12) 100%)" }}>
              <p className="text-white font-black text-lg mb-1">Wij pakken het anders aan.</p>
              <p className="text-white/80 text-sm leading-relaxed mb-5">
                Je krijgt een website die zichzelf elke maand verbetert. En jij ziet precies wat het oplevert.
              </p>
              <Link
                href="/momentum-scan"
                className="inline-flex items-center bg-[#ff0096] hover:bg-[#e6007f] text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-colors duration-200"
              >
                Start je Momentum Scan
              </Link>
            </div>
          </motion.div>

          {/* Right */}
          <div className="space-y-3">
            {problems.map((problem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 32, scale: 0.97 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                whileHover={{ x: 4, borderColor: "rgba(255,255,255,0.18)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.4 + i * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                className="flex items-center gap-4 rounded-xl px-5 py-4 border border-white/8 cursor-default"
                style={{ background: "rgba(255,255,255,0.04)" }}
              >
                <motion.div
                  className="w-6 h-6 rounded-full bg-red-500/15 flex items-center justify-center shrink-0"
                  initial={{ scale: 0, rotate: -45 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.4 + i * 0.1 + 0.2, type: "spring", stiffness: 260, damping: 18 }}
                  style={{ boxShadow: "0 0 8px rgba(239,68,68,0.25)" }}
                >
                  <X className="w-3.5 h-3.5 text-red-400 stroke-[3]" />
                </motion.div>
                <span className="text-white/80 text-base">{problem}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
