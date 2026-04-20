"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Webhook } from "lucide-react"

const leftIcons = [
  { name: "Zapier",     bg: "#FF4A00", img: "/images/integrations/zapier.png" },
  { name: "Moneybird",  bg: "#ffffff", img: "/images/integrations/moneybird.png" },
  { name: "PipeDrive",  bg: "#1a2e1a", img: "/images/integrations/pipedrive.png" },
  { name: "Gmail",      bg: "#ffffff", img: "/images/integrations/gmail.png" },
]

const rightIcons = [
  { name: "Google Drive", bg: "#ffffff", img: "/images/integrations/googledrive.png" },
  { name: "Stripe",       bg: "#ffffff", img: "/images/integrations/stripe.png" },
  { name: "Outlook",      bg: "#ffffff", img: "/images/integrations/outlook.png" },
  { name: "Webhook",      bg: "#1e1e2e", img: null },
]

// Layout constants
const W = 420
const H = 380
const HUB_CX = 210
const HUB_CY = 178
const SPINE_L = 148
const SPINE_R = 272
const ICON_X_L = 42   // center x of left tiles (left:14 + w28)
const ICON_X_R = 378  // center x of right tiles
const ICON_Y = [28, 118, 238, 328] // center y of each icon row

function IconTile({ name, bg, img, index }: {
  name: string; bg: string; img: string | null; index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: 0.1 + index * 0.09 }}
      title={name}
      className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border border-white/10 bg-[#1a1030]"
    >
      {img ? (
        <div className="w-9 h-9 rounded-xl overflow-hidden" style={{ background: bg }}>
          <Image src={img} alt={name} width={36} height={36} className="w-full h-full object-cover" />
        </div>
      ) : (
        <Webhook className="w-6 h-6 text-[#a855f7]" />
      )}
    </motion.div>
  )
}

// Animated neon dot traveling along a horizontal line (SVG space)
function HDot({ y, x1, x2, delay, reverse }: { y: number; x1: number; x2: number; delay: number; reverse?: boolean }) {
  const from = reverse ? x2 : x1
  const to   = reverse ? x1 : x2
  return (
    <motion.circle
      r={3}
      fill="#ff0096"
      style={{ filter: "drop-shadow(0 0 5px #ff0096) drop-shadow(0 0 10px #ff0096)" }}
      cy={y}
      animate={{ cx: [from, to, from] }}
      transition={{ duration: 2.2, delay, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.4 }}
    />
  )
}

// Animated dot traveling along the vertical spine
function VDot({ x, y1, y2, delay }: { x: number; y1: number; y2: number; delay: number }) {
  return (
    <motion.circle
      r={3}
      fill="#ff0096"
      style={{ filter: "drop-shadow(0 0 5px #ff0096) drop-shadow(0 0 10px #ff0096)" }}
      cx={x}
      animate={{ cy: [y1, y2, y1] }}
      transition={{ duration: 3, delay, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.3 }}
    />
  )
}

export function IntegrationsSection() {
  return (
    <section className="py-24 md:py-36 px-5 sm:px-8 bg-[#2d1b66] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
          <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-6">Growth pakket</p>

            <h2 className="font-[family-name:var(--font-gottak)] text-[clamp(2.2rem,5vw,3.8rem)] font-black text-white leading-[1.06] tracking-tight">
              Werkt met alles{" "}
              <span style={{
                background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                wat jij al gebruikt.
              </span>
            </h2>

            <p className="mt-6 text-white/80 text-lg leading-relaxed max-w-md">
              Jouw website wordt een stuk slimmer. Forester OS koppelt aan de tools die jij al gebruikt, zoals Moneybird, PipeDrive, Gmail en Stripe, en maakt er één krachtig groeisysteem van.
            </p>

            <div className="mt-8 flex items-center gap-2.5 bg-white/8 rounded-full border border-white/15 px-4 py-2.5 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#ff0096] animate-pulse" />
              <p className="text-white/80 text-sm">Beschikbaar in het Growth pakket</p>
            </div>
          </motion.div>

          {/* Right: circuit hub */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex items-center justify-center"
          >
            <div className="relative" style={{ width: W, height: H }}>

              <svg className="absolute inset-0 w-full h-full" viewBox={`0 0 ${W} ${H}`} fill="none">

                {/* Left: icon → spine */}
                {ICON_Y.map((y, i) => (
                  <line key={`ll${i}`} x1={ICON_X_L} y1={y} x2={SPINE_L} y2={y} stroke="white" strokeOpacity="0.15" strokeWidth="1" />
                ))}
                {/* Left spine */}
                <line x1={SPINE_L} y1={ICON_Y[0]} x2={SPINE_L} y2={ICON_Y[3]} stroke="white" strokeOpacity="0.15" strokeWidth="1" />
                {/* Left spine → hub */}
                <line x1={SPINE_L} y1={HUB_CY} x2={HUB_CX - 48} y2={HUB_CY} stroke="white" strokeOpacity="0.18" strokeWidth="1" />

                {/* Right: icon → spine */}
                {ICON_Y.map((y, i) => (
                  <line key={`rl${i}`} x1={ICON_X_R} y1={y} x2={SPINE_R} y2={y} stroke="white" strokeOpacity="0.15" strokeWidth="1" />
                ))}
                {/* Right spine */}
                <line x1={SPINE_R} y1={ICON_Y[0]} x2={SPINE_R} y2={ICON_Y[3]} stroke="white" strokeOpacity="0.15" strokeWidth="1" />
                {/* Right spine → hub */}
                <line x1={SPINE_R} y1={HUB_CY} x2={HUB_CX + 48} y2={HUB_CY} stroke="white" strokeOpacity="0.18" strokeWidth="1" />

                {/* Corner dots */}
                {[...ICON_Y.map(y => [SPINE_L, y]), ...ICON_Y.map(y => [SPINE_R, y])].map(([cx, cy], i) => (
                  <circle key={`dot${i}`} cx={cx} cy={cy} r="2.5" fill="rgba(255,255,255,0.18)" />
                ))}

                {/* Neon flow dots — left horizontal lines */}
                {ICON_Y.map((y, i) => (
                  <HDot key={`lh${i}`} y={y} x1={ICON_X_L} x2={SPINE_L} delay={i * 0.55} reverse={i % 2 === 1} />
                ))}

                {/* Neon flow dots — right horizontal lines */}
                {ICON_Y.map((y, i) => (
                  <HDot key={`rh${i}`} y={y} x1={SPINE_R} x2={ICON_X_R} delay={0.3 + i * 0.55} reverse={i % 2 === 0} />
                ))}

                {/* Neon flow dots — left spine */}
                <VDot x={SPINE_L} y1={ICON_Y[0]} y2={HUB_CY} delay={0.2} />
                <VDot x={SPINE_L} y1={ICON_Y[3]} y2={HUB_CY} delay={1.1} />

                {/* Neon flow dots — right spine */}
                <VDot x={SPINE_R} y1={ICON_Y[0]} y2={HUB_CY} delay={0.7} />
                <VDot x={SPINE_R} y1={ICON_Y[3]} y2={HUB_CY} delay={1.6} />

                {/* Neon flow dots — spine to hub */}
                <HDot y={HUB_CY} x1={SPINE_L} x2={HUB_CX - 48} delay={0.9} />
                <HDot y={HUB_CY} x1={SPINE_R} x2={HUB_CX + 48} delay={1.3} reverse />

              </svg>

              {/* Left icons */}
              {leftIcons.map((icon, i) => (
                <div key={icon.name} className="absolute" style={{ left: 14, top: ICON_Y[i] - 28 }}>
                  <IconTile {...icon} index={i} />
                </div>
              ))}

              {/* Right icons */}
              {rightIcons.map((icon, i) => (
                <div key={icon.name} className="absolute" style={{ right: 14, top: ICON_Y[i] - 28 }}>
                  <IconTile {...icon} index={i} />
                </div>
              ))}

              {/* Center hub */}
              <div className="absolute" style={{ left: HUB_CX - 48, top: HUB_CY - 48 }}>
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 0 0px rgba(255,0,150,0.4), 0 0 40px rgba(98,59,199,0.25)",
                      "0 0 0 8px rgba(255,0,150,0.0), 0 0 70px rgba(98,59,199,0.5)",
                      "0 0 0 0px rgba(255,0,150,0.4), 0 0 40px rgba(98,59,199,0.25)",
                    ],
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-24 h-24 rounded-3xl border-2 border-[#ff0096]/40 flex flex-col items-center justify-center gap-1"
                  style={{ background: "linear-gradient(135deg, #1a0535 0%, #0a0018 100%)" }}
                >
                  <Image src="/images/logo.png" alt="Webgrowth" width={40} height={40} className="w-10 h-10 object-contain" />
                  <span className="text-white/70 text-[8px] font-semibold tracking-wide">Forester OS</span>
                </motion.div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
