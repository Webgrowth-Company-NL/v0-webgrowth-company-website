"use client"

import { motion } from "framer-motion"
import { Users, Target, TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef } from "react"

function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animId: number
    const mouse = { x: -9999, y: -9999 }

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    window.addEventListener("mousemove", onMouseMove)

    const COLORS = ["#623bc7", "#ff0096", "#4a2b9e", "#c0007a"]
    const COUNT = 60
    const CONNECT_DIST = 130

    type P = { x: number; y: number; vx: number; vy: number; r: number; color: string; alpha: number }

    const particles: P[] = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.28,
      vy: -(Math.random() * 0.22 + 0.06),
      r: Math.random() * 1.8 + 1.2,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: Math.random() * 0.5 + 0.38,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const p of particles) {
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const d = Math.sqrt(dx * dx + dy * dy)
        if (d < 110) {
          p.vx += (dx / d) * 0.05
          p.vy += (dy / d) * 0.05
        }
        p.vx *= 0.989
        p.vy *= 0.989
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.alpha
        ctx.fill()
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < CONNECT_DIST) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = "#623bc7"
            ctx.globalAlpha = (1 - d / CONNECT_DIST) * 0.32
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      ctx.globalAlpha = 1
      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", onMouseMove)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
}

const avatars = [
  { initials: "MV", color: "#623bc7" },
  { initials: "SB", color: "#ff0096" },
  { initials: "JK", color: "#4a2b9e" },
  { initials: "AR", color: "#c0007a" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center px-5 sm:px-8 overflow-hidden" style={{ background: "linear-gradient(160deg, #1a0a2e 0%, #2d1b66 50%, #1a0a2e 100%)" }}>

      <ParticleNetwork />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#623bc7]/12 blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 xl:gap-20 items-center">

          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-8 block"
            >
              Website bouwen voor het MKB
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-[family-name:var(--font-gottak)] text-[clamp(2.8rem,7vw,5.5rem)] font-black text-white leading-[1.02] tracking-tight"
            >
              Wij bouwen jouw website.{" "}
              <span style={{
                background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                En zorgen dat die groeit.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="mt-6 text-[#ffffffcc] text-lg leading-relaxed max-w-md"
            >
              Voor MKB-ondernemers die klaar zijn met bureaus die bouwen en verdwijnen. Wij blijven. En jij ziet het verschil.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.34 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <div className="w-full flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span className="text-white/60 text-xs">Nog <span className="text-white font-semibold">3 plekken</span> beschikbaar in mei</span>
              </div>
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
                    className="w-8 h-8 rounded-full border-2 border-[#0d0818] flex items-center justify-center text-white text-[10px] font-black"
                    style={{ background: av.color }}
                  >
                    {av.initials}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-white text-sm font-semibold">300+ MKB bedrijven</p>
                <p className="text-white/45 text-xs">gingen je voor</p>
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
                <p className="text-white/45 text-[11px] font-semibold uppercase tracking-widest">Forester OS</p>
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
                      <p className="text-white/45 text-[11px] truncate">{stat.label}</p>
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
                  <p className="text-white/40 text-xs">Bijgewerkt 2 min geleden</p>
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
