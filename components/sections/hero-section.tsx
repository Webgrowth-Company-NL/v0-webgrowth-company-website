"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 sm:px-6 pt-24" style={{ minHeight: "110vh" }}>
      <div id="hero-content" className="text-center max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#ff0096] text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-6"
        >
          Powered by Q
        </motion.p>

        <h1 className="font-[family-name:var(--font-gottak)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] text-balance">
          Websites voor het MKB die blijven groeien
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 md:mt-8 text-lg md:text-xl text-white/70 max-w-[580px] mx-auto"
        >
          De meeste bureaus bouwen je website en verdwijnen. Wij niet. Elke maand weet jij precies wat er is gebeurd en wat wij eraan hebben gedaan.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/website-apk"
            className="w-full sm:w-auto bg-[#ff0096] hover:bg-[#ff0096]/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,0,150,0.5)]"
          >
            Doe de gratis website APK
          </Link>
          <Link
            href="/hoe-het-werkt"
            className="w-full sm:w-auto border-2 border-white/30 hover:border-white/70 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:bg-white/10"
          >
            Bekijk hoe het werkt
          </Link>
        </motion.div>
      </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="text-[#ff0096]"
        >
          <ChevronDown size={36} />
        </motion.div>
      </motion.div>

      {/* Fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, rgba(5,0,15,0.6) 50%, rgba(5,0,15,0.95) 100%)",
        }}
      />
    </section>
  )
}
