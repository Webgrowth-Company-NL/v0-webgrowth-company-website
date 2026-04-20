"use client"

import { motion } from "framer-motion"
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
    <section className="py-24 md:py-36 px-5 sm:px-8 bg-[#f8f6f1]">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-5">
              Herken je dit?
            </p>
            <h2 className="font-[family-name:var(--font-gottak)] text-[clamp(2.2rem,5vw,3.8rem)] font-black text-[#0a0a0a] leading-[1.06] tracking-tight">
              Bureaus bouwen<br />en verdwijnen.
            </h2>
            <p className="mt-6 text-[#0a0a0a]/55 text-lg leading-relaxed max-w-sm">
              Jij betaalt, maar ziet geen resultaat. Geen inzicht, geen updates, geen idee wat je website doet. Maand na maand. Dat is het patroon.
            </p>

            <div className="mt-10 inline-block rounded-2xl bg-[#623bc7] p-px">
              <div className="rounded-2xl bg-gradient-to-br from-[#623bc7] to-[#4a2b9e] px-7 py-6">
                <p className="text-white font-black text-lg mb-1">Wij pakken het anders aan.</p>
                <p className="text-white/65 text-sm leading-relaxed mb-5">
                  Jij krijgt niet alleen een website. Je krijgt toegang tot Forester OS, jouw eigen HQ. Zodat je precies weet wat er gebeurt.
                </p>
                <Link
                  href="/momentum-scan"
                  className="inline-flex items-center bg-white text-[#0a0a0a] px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-[#ff0096] hover:text-white transition-colors duration-200"
                >
                  Start je Momentum Scan
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <div className="space-y-3">
            {problems.map((problem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-center gap-4 bg-white rounded-xl px-5 py-4 border border-black/5"
              >
                <div className="w-1 h-8 rounded-full bg-[#ff0096]/30 shrink-0" />
                <span className="text-[#0a0a0a]/70 text-base">{problem}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
