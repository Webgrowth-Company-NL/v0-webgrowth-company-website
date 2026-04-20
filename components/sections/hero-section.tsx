"use client"

import { motion } from "framer-motion"
import { Users, Target, TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"

const avatars = [
  { initials: "MV", color: "#623bc7" },
  { initials: "SB", color: "#ff0096" },
  { initials: "JK", color: "#4a2b9e" },
  { initials: "AR", color: "#c0007a" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#080808] px-5 sm:px-8 overflow-hidden">

      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#623bc7]/12 blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 xl:gap-20 items-center">

          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#623bc7]/30 bg-[#623bc7]/8 text-[#ff0096] text-xs font-semibold tracking-wide mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff0096] animate-pulse" />
              Website bouwen voor het MKB
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-[family-name:var(--font-gottak)] text-[clamp(2.8rem,7vw,5.5rem)] font-black text-white leading-[1.02] tracking-tight"
            >
              Een website die werkt.<br />
              <span style={{
                background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                En dan nog veel meer.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="mt-6 text-[#ffffff80] text-lg leading-relaxed max-w-md"
            >
              Wij bouwen jouw website. Maar wat je daarna ontdekt, daar wordt iedereen stil van.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.34 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/website-apk"
                className="inline-flex items-center gap-2 bg-[#ff0096] hover:bg-[#e6007f] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-[1.03]"
              >
                Doe de gratis website APK
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/hoe-het-werkt"
                className="inline-flex items-center text-white/60 hover:text-white px-5 py-2.5 text-sm font-semibold transition-colors duration-200"
              >
                Hoe het werkt
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex items-center gap-3"
            >
              <div className="flex -space-x-2.5">
                {avatars.map((av, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-[#080808] flex items-center justify-center text-white text-[10px] font-black"
                    style={{ background: av.color }}
                  >
                    {av.initials}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-white text-sm font-semibold">300+ MKB bedrijven</p>
                <p className="text-white/35 text-xs">deden hetzelfde WOW-moment mee</p>
              </div>
            </motion.div>
          </div>

          {/* Right — dashboard card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="hidden lg:block"
          >
            <div
              className="rounded-2xl p-6 border border-white/10"
              style={{
                background: "linear-gradient(160deg, rgba(98,59,199,0.12) 0%, rgba(8,8,8,0.95) 100%)",
                backdropFilter: "blur(24px)",
              }}
            >
              <div className="flex items-center justify-between mb-5">
                <p className="text-white/35 text-[11px] font-semibold uppercase tracking-widest">Forester OS</p>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-emerald-400 text-xs font-medium">Live</span>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { icon: Users, label: "Bezoekers deze maand", value: "1.636", delta: "+18%", color: "#623bc7" },
                  { icon: Target, label: "Nieuwe leads", value: "52", delta: "+24%", color: "#ff0096" },
                  { icon: TrendingUp, label: "Conversieratio", value: "3,2%", delta: "+0,4%", color: "#623bc7" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/4 border border-white/5"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: `${stat.color}18` }}
                    >
                      <stat.icon className="w-4 h-4" style={{ color: stat.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white/35 text-[11px] truncate">{stat.label}</p>
                      <p className="text-white font-black text-lg leading-tight">{stat.value}</p>
                    </div>
                    <span
                      className="text-[11px] font-bold px-2 py-0.5 rounded-full shrink-0"
                      style={{ background: `${stat.color}18`, color: stat.color }}
                    >
                      {stat.delta}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-white/8">
                <div className="flex items-center justify-between">
                  <p className="text-white/25 text-xs">Bijgewerkt 2 min geleden</p>
                  <div className="flex gap-1">
                    {[...Array(7)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 rounded-full bg-[#623bc7]"
                        style={{ height: `${12 + Math.sin(i * 1.2) * 8}px`, opacity: 0.4 + i * 0.08 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
