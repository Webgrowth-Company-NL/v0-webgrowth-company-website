"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, Eye, Zap, Sparkles, Bell, MessageCircle } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { CtaButton } from "@/components/ui/cta-button"

function AnimatedCounter({
  from,
  to,
  suffix = "",
  duration = 1.8,
}: {
  from: number
  to: number
  suffix?: string
  duration?: number
}) {
  const [value, setValue] = useState(from)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const step = (now: number) => {
            const progress = Math.min((now - start) / (duration * 1000), 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setValue(Math.round(from + (to - from) * eased))
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.5 },
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [from, to, duration])

  return (
    <span ref={ref}>
      {value.toLocaleString("nl-NL")}
      {suffix}
    </span>
  )
}

export function HomeV2Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-24 px-5 sm:px-8 overflow-hidden">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -30, 40, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] rounded-full bg-[#ff0096]/15 blur-[180px]"
        />
        <motion.div
          animate={{
            x: [0, -50, 30, 0],
            y: [0, 40, -20, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-15%] left-[-15%] w-[700px] h-[700px] rounded-full bg-[#623bc7]/18 blur-[200px]"
        />
        <motion.div
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -20, 30, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] left-[30%] w-[500px] h-[500px] rounded-full bg-[#8b5cf6]/10 blur-[160px]"
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-[1.05fr_1fr] gap-12 items-center">
        {/* Linker kolom: tekst */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#ff0096] text-sm font-semibold mb-5"
          >
            Platform, geen bureau.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-[family-name:var(--font-gottak)] text-[clamp(2rem,4.5vw,3.8rem)] font-black text-white leading-[1.05] tracking-tight mb-6 max-w-xl"
          >
            Je volgende website is geen project.{" "}
            <span
              className="inline-block"
              style={{
                background:
                  "linear-gradient(135deg, #ff0096 0%, #8b5cf6 50%, #623bc7 100%)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "shimmer 6s ease-in-out infinite",
              }}
            >
              Het is een platform dat met je meegroeit.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/65 text-lg leading-relaxed max-w-lg mb-8"
          >
            Eén abonnement. Website, CRM, marketing en AI, in plaats van negen losse leveranciers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            <CtaButton href="/contact" variant="primary">Boek een kennismaking</CtaButton>
            <CtaButton href="/website-apk" variant="secondary">Doe de gratis website APK</CtaButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-x-6 gap-y-2 text-white/55 text-xs font-medium"
          >
            <div className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[#a78bfa]" />
              Gebouwd in Breda
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[#a78bfa]" />
              Maandelijks opzegbaar
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[#a78bfa]" />
              Eén factuur, geen verrassingen
            </div>
          </motion.div>
        </motion.div>

        {/* Rechter kolom: dashboard preview met floating cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
          style={{ perspective: "1200px" }}
        >
          {/* Glow halo achter dashboard */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(255,0,150,0.35) 0%, transparent 70%)",
              filter: "blur(60px)",
              transform: "scale(0.85)",
            }}
          />

          {/* Subtle tilt op desktop */}
          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <div
              className="rounded-2xl overflow-hidden border border-white/10"
              style={{
                boxShadow:
                  "0 30px 80px -20px rgba(255,0,150,0.3), 0 0 0 1px rgba(255,255,255,0.05)",
              }}
            >
              {/* Donkere header */}
              <div
                className="flex items-center gap-2 px-4 py-3"
                style={{ background: "#0d0015" }}
              >
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
                </div>
                <div className="flex-1 ml-3">
                  <div className="inline-flex items-center gap-1.5 rounded-md bg-white/[0.04] px-2.5 py-1">
                    <div className="w-1 h-1 rounded-full bg-[#a78bfa]" />
                    <span className="text-white/50 text-[11px] font-medium">
                      forester.webgrowth.company/dashboard
                    </span>
                  </div>
                </div>
              </div>

              {/* Witte dashboard body */}
              <div className="bg-white p-5">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-[#1a1a2e]/45 text-[10px] font-semibold tracking-widest uppercase mb-0.5">
                      Vandaag
                    </p>
                    <p className="text-[#1a1a2e] text-sm font-semibold">Momentum overzicht</p>
                  </div>
                  <div
                    className="flex items-center gap-2 rounded-full px-2.5 py-1"
                    style={{
                      background: "#fff0f9",
                      border: "1px solid rgba(255,0,150,0.2)",
                    }}
                  >
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#ff0096] to-[#623bc7] flex items-center justify-center">
                      <span className="text-white text-[9px] font-black">Q</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-[#16a34a] animate-pulse" />
                      <span className="text-[#ff0096] text-[10px] font-semibold">Q is actief</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2 mb-4">
                  {[
                    { icon: Eye, label: "Bezoekers", value: 2847, suffix: "", color: "#ff0096" },
                    { icon: Users, label: "Leads", value: 23, suffix: "", color: "#623bc7" },
                    { icon: TrendingUp, label: "Conversie", value: 4, suffix: ".2%", color: "#8b5cf6" },
                    { icon: Zap, label: "Momentum", value: 87, suffix: "/100", color: "#a78bfa" },
                  ].map((kpi, i) => {
                    const Icon = kpi.icon
                    return (
                      <div
                        key={i}
                        className="rounded-xl border border-[#e5e5ea] bg-[#fafafb] px-2.5 py-2.5"
                      >
                        <div className="flex items-center gap-1.5 mb-1.5">
                          <Icon className="w-3 h-3" style={{ color: kpi.color }} />
                          <span className="text-[#1a1a2e]/55 text-[9px] font-semibold tracking-wider uppercase">
                            {kpi.label}
                          </span>
                        </div>
                        <p className="text-[#1a1a2e] text-lg font-black tabular-nums">
                          <AnimatedCounter from={0} to={kpi.value} suffix={kpi.suffix} duration={1.5} />
                        </p>
                      </div>
                    )
                  })}
                </div>

                <div className="rounded-xl p-3.5 mb-3" style={{ background: "#fff0f9" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-3 h-3 text-[#ff0096]" />
                    <p className="text-[#ff0096] text-[10px] font-semibold tracking-widest uppercase">
                      Inzicht van Q
                    </p>
                  </div>
                  <p className="text-[#1a1a2e]/80 text-xs leading-relaxed">
                    Je blog over erfbelasting 2026 trekt deze week 2x zoveel lezers. 12 van hen keken ook naar je tarievenpagina. Zal ik er een landingspagina van maken?
                  </p>
                </div>

                <div className="rounded-xl border border-[#e5e5ea] bg-[#fafafb] p-3">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[#1a1a2e]/55 text-[10px] font-semibold tracking-wider uppercase">
                      Bezoekers (30 dagen)
                    </p>
                    <p className="text-[#8b5cf6] text-[10px] font-semibold">+34%</p>
                  </div>
                  <svg viewBox="0 0 300 60" className="w-full h-12" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="heroChart" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#ff0096" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#ff0096" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,45 L25,42 L50,38 L75,40 L100,32 L125,28 L150,30 L175,22 L200,18 L225,20 L250,12 L275,10 L300,8 L300,60 L0,60 Z"
                      fill="url(#heroChart)"
                    />
                    <motion.path
                      d="M0,45 L25,42 L50,38 L75,40 L100,32 L125,28 L150,30 L175,22 L200,18 L225,20 L250,12 L275,10 L300,8"
                      fill="none"
                      stroke="#ff0096"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 0.8, ease: "easeInOut" }}
                    />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating card 1: nieuwe lead notificatie, top-right */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: -20, scale: 0.9 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -8, 0],
              scale: 1,
            }}
            transition={{
              opacity: { duration: 0.6, delay: 0.8 },
              x: { duration: 0.6, delay: 0.8 },
              scale: { duration: 0.6, delay: 0.8 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
            }}
            className="absolute -top-5 -right-3 sm:-right-5 rounded-2xl border border-white/10 bg-[#0d0015]/95 backdrop-blur-sm shadow-2xl px-4 py-3 hidden sm:flex items-center gap-3 max-w-[230px]"
            style={{ boxShadow: "0 10px 40px rgba(255,0,150,0.2)" }}
          >
            <div className="relative shrink-0">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#ff0096] to-[#623bc7] flex items-center justify-center">
                <Bell className="w-4 h-4 text-white" />
              </div>
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#16a34a] border-2 border-[#0d0015] animate-pulse" />
            </div>
            <div className="min-w-0">
              <p className="text-white text-xs font-semibold">Nieuwe lead</p>
              <p className="text-white/55 text-[11px] truncate">Marieke J. via blog</p>
            </div>
          </motion.div>

          {/* Floating card 2: Q chat bubble, bottom-left */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: 20, scale: 0.9 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, 6, 0],
              scale: 1,
            }}
            transition={{
              opacity: { duration: 0.6, delay: 1.1 },
              x: { duration: 0.6, delay: 1.1 },
              scale: { duration: 0.6, delay: 1.1 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 },
            }}
            className="absolute -bottom-6 -left-3 sm:-left-6 rounded-2xl border border-white/10 bg-[#0d0015]/95 backdrop-blur-sm shadow-2xl px-4 py-3 hidden sm:flex items-start gap-3 max-w-[260px]"
            style={{ boxShadow: "0 10px 40px rgba(98,59,199,0.25)" }}
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#ff0096] to-[#623bc7] flex items-center justify-center shrink-0">
              <MessageCircle className="w-4 h-4 text-white" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 mb-0.5">
                <p className="text-white text-xs font-semibold">Q</p>
                <span className="w-1 h-1 rounded-full bg-[#16a34a]" />
                <span className="text-white/50 text-[10px]">online</span>
              </div>
              <p className="text-white/75 text-[11px] leading-snug">
                Ik heb 3 optimalisaties gevonden voor deze week.
              </p>
            </div>
          </motion.div>

          {/* Floating stat card 3: right-middle */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.9 }}
            animate={{
              opacity: 1,
              x: [0, 4, 0],
              scale: 1,
            }}
            transition={{
              opacity: { duration: 0.6, delay: 1.4 },
              scale: { duration: 0.6, delay: 1.4 },
              x: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2.5 },
            }}
            className="absolute top-1/2 -right-6 sm:-right-10 -translate-y-1/2 rounded-xl border border-white/10 bg-[#0d0015]/95 backdrop-blur-sm shadow-2xl px-3.5 py-2.5 hidden lg:flex items-center gap-2.5"
            style={{ boxShadow: "0 10px 30px rgba(139,92,246,0.2)" }}
          >
            <TrendingUp className="w-4 h-4 text-[#16a34a]" />
            <div>
              <p className="text-white text-xs font-bold tabular-nums">+18%</p>
              <p className="text-white/45 text-[9px] font-semibold tracking-wider uppercase">Verkeer</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Keyframes voor shimmer en sheen animaties */}
      <style jsx>{`
        @keyframes shimmer {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes sheen {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  )
}
