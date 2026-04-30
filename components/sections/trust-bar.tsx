"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star } from "lucide-react"
import { clientsWithLogo, trustSignals } from "@/lib/testimonials-data"

export function TrustBar() {
  return (
    <section className="relative px-5 sm:px-8 py-10 md:py-14 border-y border-white/6 bg-[#0d0818]">
      <div className="max-w-7xl mx-auto">
        {/* Eyebrow met stats */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-xs md:text-sm text-white/55 mb-8 md:mb-10"
        >
          <span className="font-semibold tracking-wide">
            <span className="text-white">{trustSignals.klantenAantal}+ MKB-bedrijven</span>{" "}
            werken al samen met Q
          </span>
          <span className="text-white/20" aria-hidden>·</span>
          <span>sinds {trustSignals.klantSinds}</span>
          <span className="text-white/20" aria-hidden>·</span>
          <a
            href={trustSignals.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <span className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              ))}
            </span>
            <span className="font-semibold text-white">{trustSignals.googleRating}/10</span>
            <span>op Google</span>
          </a>
        </motion.div>

        {/* Logo-rij */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-4"
        >
          {clientsWithLogo.slice(0, 7).map((c) => (
            <div
              key={c.name}
              className="bg-white rounded-xl flex items-center justify-center px-3 py-3 h-16 md:h-20 transition-transform hover:scale-[1.03]"
              title={c.industry ? `${c.name} — ${c.industry}, sinds ${c.since}` : c.name}
            >
              <Image
                src={c.logo!}
                alt={`${c.name} logo`}
                width={120}
                height={32}
                className="max-h-9 md:max-h-10 w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
