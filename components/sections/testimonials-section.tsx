"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "Dankzij Webgrowth Company hebben we nu een website die niet alleen mooi is, maar actief bijdraagt aan onze groei en processen automatiseert.",
    name: "Gil Lont",
    result: "Meer leads via de website, minder handmatig werk",
    img: "/images/testimonials/gil-lont.webp",
  },
  {
    quote: "Complexe technische keuzes worden helder gemaakt en snel uitgevoerd, waardoor wij kunnen focussen op marketing en strategie.",
    name: "Linda van der Zwan",
    result: "Focus op strategie in plaats van techniek",
    img: "/images/testimonials/linda-van-der-zwan.jpg",
  },
]

const clients = [
  { name: "MOL Logistics",     logo: "/images/clients/mol-logistics.png",  since: "2017" },
  { name: "The Mind Movement", logo: "/images/clients/mind-movement.png",  since: "2021" },
  { name: "InterDam",          logo: "/images/clients/interdam.png",        since: "2015" },
  { name: "Roll Group",        logo: "/images/clients/roll-group.png",      since: "2018" },
]

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[#ff0096] text-[#ff0096]" />
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section id="succesverhalen" className="relative py-24 md:py-36 px-5 sm:px-8 bg-[#0d0818] overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#623bc7]/8 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-6">Wat klanten zeggen</p>
          <h2 className="font-[family-name:var(--font-gottak)] text-[clamp(2.2rem,5vw,3.8rem)] font-black text-white leading-[1.06] tracking-tight max-w-2xl">
            Gebouwd voor bedrijven{" "}
            <span style={{
              background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              die vooruit willen.
            </span>
          </h2>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="rounded-2xl p-7 border border-white/8 flex flex-col"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              <Stars />
              <p className="text-white/80 text-base leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-5 mb-4 px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <p className="text-emerald-400 text-xs font-semibold">Resultaat: {t.result}</p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-white/8">
                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-white/10">
                  <Image src={t.img} alt={t.name} width={40} height={40} className="w-full h-full object-cover" />
                </div>
                <p className="text-white font-semibold text-sm">{t.name}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client logos */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-t border-white/8 pt-10"
        >
          <p className="text-white/55 text-xs font-semibold tracking-widest uppercase mb-6">Werken al samen met Q</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {clients.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                className="bg-white rounded-[18px] flex flex-col items-center justify-center gap-2 px-5 py-5"
              >
                <Image src={c.logo} alt={c.name} width={150} height={50} className="h-10 w-auto object-contain" />
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-black/35 text-xs font-light">sinds {c.since}</span>
              </motion.div>
            ))}
          </div>
          <Link
            href="/succesverhalen"
            className="inline-flex items-center gap-2 mt-8 text-[#a78bfa] text-sm font-semibold hover:text-white transition-colors duration-200"
          >
            Lees de succesverhalen
            <span className="text-lg leading-none">→</span>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
