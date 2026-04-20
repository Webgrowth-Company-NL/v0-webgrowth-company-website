"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-24 md:py-36 px-5 sm:px-8 bg-[#f8f6f1]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-[#080808] px-8 py-16 md:px-16 md:py-20 text-center"
        >
          <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-6">
            Gratis en vrijblijvend
          </p>

          <h2 className="font-[family-name:var(--font-gottak)] text-[clamp(2.4rem,6vw,4.8rem)] font-black text-white leading-[1.04] tracking-tight max-w-3xl mx-auto">
            Klaar voor een website<br />
            <span style={{
              background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              die meer doet dan je denkt?
            </span>
          </h2>

          <p className="mt-6 text-white/45 text-lg leading-relaxed max-w-xl mx-auto">
            We kijken gratis mee. Je ziet waar je nu staat, wat er beter kan, en wat je krijgt als we samenwerken.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/website-apk"
              className="inline-flex items-center gap-2 bg-[#ff0096] hover:bg-[#e6007f] text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-[1.03]"
            >
              Doe de gratis website APK
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center text-white/50 hover:text-white px-6 py-3 text-sm font-semibold transition-colors duration-200"
            >
              Liever direct bellen?
            </Link>
          </div>

          <p className="mt-6 text-white/20 text-xs">
            Geen verkooppraatje. Gewoon een eerlijk gesprek.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
