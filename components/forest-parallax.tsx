"use client"

import { useEffect, useRef } from "react"

export function ForestParallax() {
  const containerRef = useRef<HTMLDivElement>(null)
  const layersRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const speeds = [0.02, 0.05, 0.1, 0.18, 0.28, 0.42]

    const handleScroll = () => {
      const scrollY = window.scrollY
      layersRef.current.forEach((layer, i) => {
        if (layer) {
          layer.style.transform = `translateY(${scrollY * speeds[i]}px)`
        }
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden" style={{ background: "#0d0015" }}>

      {/* Sky glow — slowest */}
      <div ref={el => { layersRef.current[0] = el }} className="absolute inset-0 will-change-transform">
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMax slice" className="w-full h-full">
          <defs>
            <radialGradient id="skyGrad" cx="50%" cy="105%" r="85%">
              <stop offset="0%" stopColor="#ff0096" stopOpacity="0.9" />
              <stop offset="20%" stopColor="#c0186e" stopOpacity="0.7" />
              <stop offset="45%" stopColor="#623bc7" stopOpacity="0.6" />
              <stop offset="75%" stopColor="#1a0535" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#0d0015" stopOpacity="1" />
            </radialGradient>
          </defs>
          <rect x="0" y="0" width="1440" height="900" fill="url(#skyGrad)" />
        </svg>
      </div>

      {/* Far mountains */}
      <div ref={el => { layersRef.current[1] = el }} className="absolute inset-0 will-change-transform">
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMax slice" className="w-full h-full">
          <path
            fill="#1a0535"
            d="M0,680
               C60,640 100,660 160,620
               C220,580 270,610 340,570
               C410,530 460,560 530,520
               C600,480 650,510 720,470
               C790,430 840,465 910,430
               C980,395 1030,425 1100,400
               C1170,375 1220,405 1290,380
               C1340,360 1390,385 1440,370
               L1440,900 L0,900 Z"
          />
        </svg>
      </div>

      {/* Mid mountains */}
      <div ref={el => { layersRef.current[2] = el }} className="absolute inset-0 will-change-transform">
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMax slice" className="w-full h-full">
          <path
            fill="#2d1060"
            d="M0,730
               C40,700 80,715 130,680
               C180,645 230,665 290,630
               C350,595 400,620 460,585
               C520,550 575,570 635,540
               C695,510 745,535 810,505
               C875,475 925,500 990,472
               C1055,444 1105,468 1170,445
               C1235,422 1285,445 1350,425
               C1395,410 1420,420 1440,415
               L1440,900 L0,900 Z"
          />
        </svg>
      </div>

      {/* Near mountains */}
      <div ref={el => { layersRef.current[3] = el }} className="absolute inset-0 will-change-transform">
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMax slice" className="w-full h-full">
          <defs>
            <linearGradient id="nearMtnGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#623bc7" />
              <stop offset="100%" stopColor="#3d1a7a" />
            </linearGradient>
          </defs>
          <path
            fill="url(#nearMtnGrad)"
            d="M0,790
               C30,765 65,775 100,750
               C135,725 170,740 215,710
               C260,680 300,698 350,668
               C400,638 440,658 495,628
               C550,598 592,618 648,590
               C704,562 748,582 808,555
               C868,528 910,550 972,525
               C1034,500 1078,520 1138,498
               C1198,476 1242,495 1302,475
               C1350,458 1395,472 1440,460
               L1440,900 L0,900 Z"
          />
        </svg>
      </div>

      {/* Far treeline */}
      <div ref={el => { layersRef.current[4] = el }} className="absolute inset-0 will-change-transform">
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMax slice" className="w-full h-full">
          <g fill="#160428">
            {Array.from({ length: 48 }).map((_, i) => {
              const x = (i * 30) - 10
              const h = 70 + (i % 5) * 12
              const w = 22 + (i % 3) * 4
              const base = 900
              return (
                <polygon
                  key={i}
                  points={`${x},${base} ${x + w / 2},${base - h} ${x + w},${base}`}
                />
              )
            })}
          </g>
        </svg>
      </div>

      {/* Near treeline — fastest */}
      <div ref={el => { layersRef.current[5] = el }} className="absolute inset-0 will-change-transform">
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMax slice" className="w-full h-full">
          <g fill="#0a0015">
            {Array.from({ length: 36 }).map((_, i) => {
              const x = (i * 40) - 15
              const h = 110 + (i % 4) * 20
              const w = 34 + (i % 3) * 6
              const base = 900
              return (
                <polygon
                  key={i}
                  points={`${x},${base} ${x + w / 2},${base - h} ${x + w},${base}`}
                />
              )
            })}
          </g>
        </svg>
      </div>

      {/* Pink glow pulse behind mountains */}
      <div
        className="absolute bottom-[10%] left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "140%",
          height: "50%",
          background: "radial-gradient(ellipse 55% 70% at 50% 100%, rgba(255,0,150,0.55) 0%, rgba(255,0,150,0.2) 45%, transparent 70%)",
          filter: "blur(60px)",
          animation: "glowPulse 4s ease-in-out infinite",
        }}
      />

      <style>{`
        @keyframes glowPulse {
          0%, 100% { opacity: 0.8; transform: translateX(-50%) scale(1); }
          50% { opacity: 1; transform: translateX(-50%) scale(1.06); }
        }
      `}</style>
    </div>
  )
}
