"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative py-24 md:py-36 px-5 sm:px-8 bg-[#0d0818] overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-[#623bc7]/10 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#ff0096]/8 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden border border-white/8"
          style={{ background: "rgba(255,255,255,0.03)" }}
        >
          <div className="grid lg:grid-cols-2 min-h-[420px]">

            {/* Left: text */}
            <div className="relative z-10 flex flex-col justify-center px-10 py-14 md:px-14">
              <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-5">Gratis en vrijblijvend</p>
              <h2 className="font-[family-name:var(--font-gottak)] text-[clamp(2.4rem,5vw,4rem)] font-black text-white leading-[1.04] tracking-tight mb-6">
                Klaar voor een website{" "}
                <span style={{
                  background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  die meer doet?
                </span>
              </h2>
              <p className="text-white/65 text-lg leading-relaxed max-w-md mb-10">
                We kijken gratis mee. Je ziet waar je nu staat, wat er beter kan, en wat je krijgt als we samenwerken.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/website-apk"
                  className="inline-flex items-center gap-2 bg-[#ff0096] hover:bg-[#e6007f] text-white px-6 py-3.5 rounded-full text-sm font-black transition-all duration-200 hover:scale-[1.03]"
                >
                  Doe de gratis website APK
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-white/50 hover:text-white px-2 py-3 text-sm font-semibold transition-colors duration-200"
                >
                  Liever direct bellen?
                </Link>
              </div>
              <p className="mt-6 text-white/50 text-xs">Eerlijk gesprek. Geen pitch, geen verplichtingen.</p>
            </div>

            {/* Right: image */}
            <div className="relative hidden lg:block">
              <Image
                src="/images/q-relaxing.jpg"
                alt="Q — jouw vaste aanspreekpunt"
                fill
                className="object-cover object-center"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to right, rgba(13,8,24,0.85) 0%, rgba(13,8,24,0.3) 40%, rgba(13,8,24,0) 70%)",
                }}
              />
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
