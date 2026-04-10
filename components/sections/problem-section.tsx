"use client"

import { motion } from "framer-motion"
import { X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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
    <section className="relative py-24 md:py-32 px-4 sm:px-6 bg-[#0d0015]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Illustration - Forester character */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto rounded-3xl p-[2px] bg-gradient-to-br from-[#623bc7] to-[#ff0096]">
              <div className="w-full h-full bg-[#0d0015] rounded-3xl overflow-hidden relative">
                <Image
                  src="/images/forester-character.jpg"
                  alt="Forester karakter met bijl in het bos"
                  fill
                  className="object-cover -scale-x-100"
                />
              </div>
            </div>
          </div>
          
          {/* Right: Content */}
          <div>
            <h2 className="font-[family-name:var(--font-gottak)] text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
              Waarom de meeste
              <br />
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
                  <X className="w-5 h-5 text-[#ff0096] flex-shrink-0 mt-0.5 stroke-[3]" />
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
                Daarom pakken wij het anders aan. Wij behandelen je website niet als een project maar als een groeimachine. Die wij elke maand meten, verbeteren en versnellen. Zonder dat jij erom hoeft te vragen.
              </p>
              <Link
                href="/momentum-scan"
                className="inline-block bg-[#0d0015] hover:bg-[#1a0a2e] text-white px-6 py-3 rounded-full font-semibold transition-all hover:scale-105"
              >
                Start je Momentum Scan
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
