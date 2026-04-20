"use client"

import { motion } from "framer-motion"

const toolsLeft = [
  { name: "Jira", bg: "#0052CC", label: "◆", accent: "#579DFF" },
  { name: "Microsoft", bg: "#1a1a2e", label: "⊞", accent: "#00A4EF" },
  { name: "Slack", bg: "#3c1747", label: "S", accent: "#E01E5A" },
]

const toolsRight = [
  { name: "Zendesk", bg: "#03363D", label: "Z", accent: "#03CCBB" },
  { name: "ActiveCampaign", bg: "#2d0066", label: "✱", accent: "#a855f7" },
  { name: "Mailchimp", bg: "#1a120a", label: "M", accent: "#FFE01B" },
]

function AnimatedLine({ delay, fromRight = false }: { delay: number; fromRight?: boolean }) {
  return (
    <div className="relative h-px bg-white/10 flex-1 overflow-hidden">
      <motion.span
        className="absolute top-0 h-full w-16 rounded-full"
        style={{
          background: fromRight
            ? "linear-gradient(to left, transparent, #623bc7, #ff0096, transparent)"
            : "linear-gradient(to right, transparent, #ff0096, #623bc7, transparent)",
        }}
        initial={{ left: fromRight ? "110%" : "-64px" }}
        animate={{ left: fromRight ? "-64px" : "110%" }}
        transition={{
          duration: 1.6,
          delay,
          repeat: Infinity,
          repeatDelay: 1.4,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}

function ToolIcon({
  label,
  bg,
  accent,
  name,
  rowIndex,
}: {
  label: string
  bg: string
  accent: string
  name: string
  rowIndex: number
}) {
  return (
    <motion.div
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 3 + rowIndex * 0.5, repeat: Infinity, ease: "easeInOut", delay: rowIndex * 0.6 }}
      className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border border-white/10 text-base font-black"
      style={{ background: bg, color: accent }}
      title={name}
    >
      {label}
    </motion.div>
  )
}

export function IntegrationsSection() {
  return (
    <section className="py-24 md:py-36 px-5 sm:px-8 bg-[#f8f6f1]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-5">
              Growth pakket
            </p>
            <h2 className="font-[family-name:var(--font-gottak)] text-[clamp(2.2rem,5vw,3.8rem)] font-black text-[#0a0a0a] leading-[1.06] tracking-tight">
              Werkt met alles<br />wat jij al gebruikt.
            </h2>
            <p className="mt-6 text-[#0a0a0a]/55 text-lg leading-relaxed max-w-md">
              Forester OS koppelt aan jouw bestaande tools. Jira, Slack, Microsoft, Zendesk. Jouw website, jouw data, één overzicht.
            </p>
            <div className="mt-8 flex items-center gap-2.5 bg-white rounded-xl border border-black/6 px-4 py-3 w-fit shadow-sm">
              <div className="w-2 h-2 rounded-full bg-[#ff0096]" />
              <p className="text-[#0a0a0a]/60 text-sm">Beschikbaar in het Growth pakket</p>
            </div>
          </motion.div>

          {/* Right: hub visualization */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-[440px]">

              {/* Rows */}
              <div className="flex flex-col gap-6">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="flex items-center gap-3 h-12">
                    {/* Left tool */}
                    <ToolIcon {...toolsLeft[i]} rowIndex={i} />

                    {/* Line: left tool → center */}
                    <AnimatedLine delay={i * 0.45} />

                    {/* Spacer for center card */}
                    <div className="w-20 shrink-0" />

                    {/* Line: center → right tool */}
                    <AnimatedLine delay={0.7 + i * 0.45} fromRight />

                    {/* Right tool */}
                    <ToolIcon {...toolsRight[i]} rowIndex={i} />
                  </div>
                ))}
              </div>

              {/* Center card — absolutely overlaid on top of middle row */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                {/* Pulse ring */}
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  animate={{
                    boxShadow: [
                      "0 0 0 0px rgba(255,0,150,0.4)",
                      "0 0 0 12px rgba(255,0,150,0)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                />

                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 24px rgba(255,0,150,0.3), 0 0 48px rgba(98,59,199,0.2)",
                      "0 0 40px rgba(255,0,150,0.55), 0 0 80px rgba(98,59,199,0.35)",
                      "0 0 24px rgba(255,0,150,0.3), 0 0 48px rgba(98,59,199,0.2)",
                    ],
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-20 h-20 rounded-3xl border border-white/20 flex flex-col items-center justify-center gap-1"
                  style={{
                    background: "linear-gradient(135deg, #1a0a2e 0%, #0d0015 100%)",
                  }}
                >
                  <div
                    className="w-7 h-7 rounded-xl flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)" }}
                  >
                    <span className="text-white font-black text-xs">F</span>
                  </div>
                  <span className="text-white text-[9px] font-semibold tracking-wide">Forester</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
