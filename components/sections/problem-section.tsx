"use client"

import { motion } from "framer-motion"
import { X, Trees } from "lucide-react"

const problems = [
  "Je bureau heeft gebouwd en is vertrokken",
  "Je weet niet of je website überhaupt iets doet",
  "Je concurrent staat boven jou en je snapt niet waarom",
  "Je hebt al drie keer gevraagd om een aanpassing",
  "Je betaalt elke maand maar ziet geen verschil",
  "Je website draait. Maar je bedrijf groeit er niet van",
]

export function ProblemSection() {
  return (
    <section className="relative py-24 md:py-32 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="bg-[#0d0015]/80 backdrop-blur-xl rounded-3xl border border-white/10 p-6 md:p-12 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Illustration placeholder */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-[#623bc7]/30 to-[#ff0096]/20 rounded-3xl flex items-center justify-center border border-white/10 overflow-hidden">
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Forest illustration */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0015] via-transparent to-transparent" />
                  <Trees className="w-32 h-32 md:w-48 md:h-48 text-[#623bc7]/60" strokeWidth={1} />
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0d0015] to-transparent" />
                </div>
                {/* Lumberjack silhouette effect */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                  <div className="w-20 h-32 bg-[#1a0a2e] rounded-t-full" />
                </div>
              </div>
            </div>
            
            {/* Right: Content */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8 text-balance">
                Waarom de meeste{" "}
                <span className="text-[#ff0096]">websites stilvallen.</span>
              </h2>
              
              <ul className="space-y-4">
                {problems.map((problem, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3 text-white/90"
                  >
                    <X className="w-5 h-5 text-[#ff0096] flex-shrink-0 mt-0.5" />
                    <span className="text-base md:text-lg">{problem}</span>
                  </motion.li>
                ))}
              </ul>
              
              {/* CTA Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-8 bg-[#623bc7] rounded-2xl p-6"
              >
                <p className="text-white text-base md:text-lg mb-4">
                  👉 Daarom pakken wij het anders aan.
                  <br />
                  <span className="text-white/80">
                    Wij behandelen je website niet als een project maar als een groeimachine. Die wij elke maand meten, verbeteren en versnellen. Zonder dat jij erom hoeft te vragen.
                  </span>
                </p>
                <a
                  href="#momentum-scan"
                  className="inline-block bg-[#0d0015] hover:bg-[#1a0a2e] text-white px-6 py-3 rounded-full font-semibold transition-all hover:scale-105"
                >
                  Start je Momentum Scan
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
