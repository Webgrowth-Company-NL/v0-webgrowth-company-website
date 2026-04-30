"use client"

import { motion } from "framer-motion"
import { FileText, Server, Shield, Mail, Wrench, Palette, Database, Lock, Search, ArrowRight } from "lucide-react"
import Link from "next/link"

const leveranciers = [
  { icon: Palette, label: "Websitebureau" },
  { icon: Server, label: "Hoster" },
  { icon: Database, label: "HubSpot" },
  { icon: Mail, label: "E-mailtool" },
  { icon: Shield, label: "Security" },
  { icon: FileText, label: "Content-uurtjes" },
  { icon: Wrench, label: "Onderhoud" },
  { icon: Lock, label: "AVG-module" },
  { icon: Search, label: "SEO-bureau" },
]

export function HomeV2Probleem() {
  return (
    <section className="relative py-28 px-5 sm:px-8 overflow-hidden">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[5%] w-[500px] h-[500px] rounded-full bg-[#ff0096]/10 blur-[160px]"
        />
        <motion.div
          animate={{
            x: [0, -30, 30, 0],
            y: [0, 30, -20, 0],
          }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[5%] right-[5%] w-[600px] h-[600px] rounded-full bg-[#623bc7]/12 blur-[180px]"
        />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Top + bottom fade edges */}
      <div className="absolute inset-x-0 top-0 h-24 pointer-events-none bg-gradient-to-b from-[#0d0818] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none bg-gradient-to-t from-[#0d0818] to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 max-w-3xl mx-auto"
        >
          <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-5">Het probleem</p>
          <h2 className="font-[family-name:var(--font-gottak)] text-[clamp(2rem,5vw,3.8rem)] font-black text-white leading-[1.04] tracking-tight">
            Je betaalt nu{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ff0096 0%, #8b5cf6 50%, #623bc7 100%)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "probleemShimmer 6s ease-in-out infinite",
              }}
            >
              negen rekeningen.
            </span>
          </h2>
          <p className="text-white/65 text-lg mt-5 leading-relaxed">
            Elke maand weer. Elk voor iets anders. Zonder dat ze met elkaar praten.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[1.4fr_auto_1fr] gap-6 md:gap-6 items-center">
          {/* Linker: 9 leveranciers grid in een subtle frame */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl p-5 sm:p-6"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.015) 100%)",
              border: "1px solid rgba(255,255,255,0.06)",
              boxShadow: "inset 0 0 30px rgba(255,255,255,0.02)",
            }}
          >
            {/* Subtle counter in de hoek */}
            <div className="absolute -top-3 left-5 rounded-full bg-[#0d0818] border border-white/10 px-3 py-1">
              <p className="text-white/55 text-[10px] font-semibold tracking-widest uppercase">9 leveranciers</p>
            </div>

            <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
              {leveranciers.map((lev, i) => {
                const Icon = lev.icon
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.85, y: 10 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
                    className="group flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-4 cursor-default transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.07]"
                  >
                    <Icon className="w-5 h-5 text-white/55 group-hover:text-white/80 transition-colors duration-200" />
                    <p className="text-white/70 text-xs font-medium text-center leading-tight">{lev.label}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Midden: pijl met pulse */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center"
          >
            <motion.div
              animate={{
                x: [0, 4, 0],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-full bg-[#ff0096]/30 blur-xl" />
              <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-[#ff0096] to-[#623bc7] flex items-center justify-center shadow-lg">
                <ArrowRight className="w-5 h-5 text-white rotate-90 md:rotate-0" />
              </div>
            </motion.div>
          </motion.div>

          {/* Rechter: 1 abonnement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative rounded-3xl p-6 text-center overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,0,150,0.15) 0%, rgba(98,59,199,0.12) 100%)",
              border: "1px solid rgba(255,0,150,0.35)",
              boxShadow: "0 0 80px rgba(255,0,150,0.25), inset 0 0 30px rgba(255,0,150,0.05)",
            }}
          >
            {/* Glowing orb background */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.25, 0.4, 0.25],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#ff0096] blur-3xl pointer-events-none"
            />

            <div className="relative">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#ff0096] to-[#623bc7] flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="font-[family-name:var(--font-gottak)] text-white text-2xl font-black">1</span>
              </div>
              <p className="text-white text-xl font-bold mb-1">Eén abonnement.</p>
              <p className="text-white/70 text-sm mb-4">Alles erin. Vanaf €399 per maand.</p>
              <Link
                href="/hubspot-alternatief"
                className="inline-flex items-center gap-1.5 text-[#ff0096] text-xs font-semibold hover:text-white transition-colors"
              >
                Zie de vergelijking <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes probleemShimmer {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  )
}
