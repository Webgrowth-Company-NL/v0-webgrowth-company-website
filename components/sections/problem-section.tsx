"use client"

import { motion } from "framer-motion"
import { X, Trees } from "lucide-react"
import Link from "next/link"

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
          {/* Left: Illustration - Dark card with gradient border and pine trees */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto rounded-3xl p-[2px] bg-gradient-to-br from-[#623bc7] to-[#ff0096]">
              <div className="w-full h-full bg-[#0d0015] rounded-3xl flex items-center justify-center overflow-hidden relative">
                {/* Pine tree silhouettes */}
                <svg viewBox="0 0 400 400" className="w-full h-full absolute inset-0">
                  <defs>
                    <linearGradient id="treeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#623bc7" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#0d0015" stopOpacity="1" />
                    </linearGradient>
                  </defs>
                  <rect fill="url(#treeGradient)" width="400" height="400" />
                  {/* Trees */}
                  <path fill="#1a0030" d="M50,400 L50,300 L30,300 L60,200 L45,200 L80,100 L115,200 L100,200 L130,300 L110,300 L110,400 Z" />
                  <path fill="#1a0030" d="M150,400 L150,320 L130,320 L165,220 L150,220 L190,120 L230,220 L215,220 L250,320 L230,320 L230,400 Z" />
                  <path fill="#1a0030" d="M270,400 L270,280 L250,280 L290,180 L275,180 L320,80 L365,180 L350,180 L390,280 L370,280 L370,400 Z" />
                  <path fill="#0a0010" d="M0,400 L0,340 L20,340 L40,260 L55,300 L75,220 L95,280 L110,340 L130,340 L130,400 Z" />
                  <path fill="#0a0010" d="M120,400 L120,360 L140,360 L160,290 L175,330 L195,260 L215,310 L230,360 L250,360 L250,400 Z" />
                  <path fill="#0a0010" d="M240,400 L240,350 L260,350 L280,280 L295,320 L315,250 L335,300 L350,350 L370,350 L370,400 Z" />
                  <path fill="#0a0010" d="M360,400 L360,370 L375,370 L390,310 L400,340 L400,400 Z" />
                </svg>
                <div className="absolute bottom-4 left-4 bg-[#0d0015]/80 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-1.5">
                  <span className="text-white/60 text-sm">Jouw website nu</span>
                </div>
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
