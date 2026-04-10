"use client"

import { useEffect, useRef } from "react"

export function ForestParallax() {
  const layersRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    // Each layer gets its own speed — back=slow, front=fast
    const speeds = [0.015, 0.04, 0.08, 0.14, 0.22, 0.34]

    const onScroll = () => {
      const y = window.scrollY
      layersRef.current.forEach((el, i) => {
        if (el) el.style.transform = `translateY(${y * speeds[i]}px)`
      })
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" style={{ background: "#05000f" }}>

      {/* ── Layer 0: Sky + pink glow (slowest) ── */}
      <div ref={el => { layersRef.current[0] = el }} className="absolute inset-0 will-change-transform">
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMax slice" className="w-full h-full">
          <defs>
            <radialGradient id="sky" cx="50%" cy="98%" r="90%">
              <stop offset="0%"   stopColor="#ff0096" stopOpacity="0.85" />
              <stop offset="18%"  stopColor="#c01870" stopOpacity="0.65" />
              <stop offset="40%"  stopColor="#623bc7" stopOpacity="0.55" />
              <stop offset="68%"  stopColor="#200a40" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#05000f"  stopOpacity="1" />
            </radialGradient>
          </defs>
          <rect width="1440" height="900" fill="url(#sky)" />
        </svg>
        {/* Pulsing glow blob */}
        <div style={{
          position: "absolute",
          bottom: "12%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "160%",
          height: "55%",
          background: "radial-gradient(ellipse 50% 65% at 50% 100%, rgba(255,0,150,0.5) 0%, rgba(180,0,100,0.18) 45%, transparent 70%)",
          filter: "blur(70px)",
          animation: "pulse 5s ease-in-out infinite",
        }} />
      </div>

      {/* ── Layer 1: Distant mountains ── */}
      <div ref={el => { layersRef.current[1] = el }} className="absolute inset-0 will-change-transform">
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMax slice" className="w-full h-full">
          <path fill="#1a0535" d="
            M0,720
            L80,640 L130,680 L200,590 L260,640
            L330,555 L390,605 L450,520 L510,575
            L580,490 L640,545 L710,460 L760,510
            L830,440 L900,495 L960,415 L1020,465
            L1090,390 L1150,445 L1220,370 L1280,420
            L1350,355 L1410,400 L1440,380
            L1440,900 L0,900 Z
          "/>
        </svg>
      </div>

      {/* ── Layer 2: Mid mountains ── */}
      <div ref={el => { layersRef.current[2] = el }} className="absolute inset-0 will-change-transform">
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMax slice" className="w-full h-full">
          <defs>
            <linearGradient id="mid" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2d1060" />
              <stop offset="100%" stopColor="#1a0840" />
            </linearGradient>
          </defs>
          <path fill="url(#mid)" d="
            M0,760
            L60,700 L100,730 L160,660 L220,705
            L280,630 L340,675 L400,605 L460,650
            L520,580 L580,625 L650,550 L710,600
            L770,530 L830,575 L900,510 L960,555
            L1020,490 L1080,535 L1150,470 L1210,515
            L1280,455 L1340,500 L1400,445 L1440,470
            L1440,900 L0,900 Z
          "/>
        </svg>
      </div>

      {/* ── Layer 3: Near mountains ── */}
      <div ref={el => { layersRef.current[3] = el }} className="absolute inset-0 will-change-transform">
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMax slice" className="w-full h-full">
          <defs>
            <linearGradient id="near" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#623bc7" />
              <stop offset="100%" stopColor="#3b1e8a" />
            </linearGradient>
          </defs>
          <path fill="url(#near)" d="
            M0,810
            L40,775 L75,790 L110,750 L155,770
            L195,730 L240,755 L285,715 L330,740
            L375,700 L420,728 L470,688 L515,715
            L565,675 L615,705 L665,665 L715,695
            L765,655 L815,685 L870,645 L920,675
            L975,635 L1025,665 L1080,628 L1130,658
            L1185,622 L1235,652 L1290,618 L1340,648
            L1390,615 L1440,638
            L1440,900 L0,900 Z
          "/>
        </svg>
      </div>

      {/* ── Layer 4: Far treeline ── */}
      <div ref={el => { layersRef.current[4] = el }} className="absolute inset-0 will-change-transform">
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMax slice" className="w-full h-full">
          <g fill="#140325">
            {Array.from({ length: 52 }).map((_, i) => {
              const x = i * 28 - 8
              const heights = [75, 92, 68, 85, 100, 72, 88, 95, 65, 80, 105, 78]
              const h = heights[i % heights.length]
              const w = 20 + (i % 4) * 3
              return <polygon key={i} points={`${x},900 ${x + w / 2},${900 - h} ${x + w},900`} />
            })}
          </g>
        </svg>
      </div>

      {/* ── Layer 5: Near treeline (fastest) ── */}
      <div ref={el => { layersRef.current[5] = el }} className="absolute inset-0 will-change-transform">
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMax slice" className="w-full h-full">
          <g fill="#080012">
            {Array.from({ length: 38 }).map((_, i) => {
              const x = i * 38 - 12
              const heights = [130, 155, 120, 145, 168, 138, 160, 125, 142, 175, 135, 158]
              const h = heights[i % heights.length]
              const w = 30 + (i % 5) * 5
              return <polygon key={i} points={`${x},900 ${x + w / 2},${900 - h} ${x + w},900`} />
            })}
          </g>
        </svg>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.8; transform: translateX(-50%) scale(1); }
          50%       { opacity: 1;   transform: translateX(-50%) scale(1.07); }
        }
      `}</style>
    </div>
  )
}
