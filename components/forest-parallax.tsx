"use client"

import { useEffect, useRef } from "react"

export function ForestParallax() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let cleanup: (() => void) | undefined

    Promise.all([
      import("gsap"),
      import("gsap/ScrollTrigger"),
    ]).then(([{ default: gsap }, { ScrollTrigger }]) => {
      gsap.registerPlugin(ScrollTrigger)

      const ctx = gsap.context(() => {
        const ease = "none"
        const scrub = 2.5

        // ── Mountain layers — each moves a bit faster than the one behind it ──
        gsap.to("#fp-mtn-1", {
          y: -50, ease,
          scrollTrigger: { trigger: "body", start: "top top", end: "+=2200", scrub },
        })
        gsap.to("#fp-mtn-2", {
          y: -110, ease,
          scrollTrigger: { trigger: "body", start: "top top", end: "+=2200", scrub },
        })
        gsap.to("#fp-mtn-3", {
          y: -190, ease,
          scrollTrigger: { trigger: "body", start: "top top", end: "+=2200", scrub },
        })
        gsap.to("#fp-trees-far", {
          y: -270, ease,
          scrollTrigger: { trigger: "body", start: "top top", end: "+=2200", scrub },
        })
        gsap.to("#fp-trees-near", {
          y: -430, ease,
          scrollTrigger: { trigger: "body", start: "top top", end: "+=2200", scrub },
        })

        // ── Glow pulses slightly dimmer as scroll deepens ──
        gsap.to("#fp-glow", {
          opacity: 0.4, ease,
          scrollTrigger: { trigger: "body", start: "top top", end: "+=1800", scrub: 1 },
        })

        // ── Bird: flies from left to right during hero→problem transition ──
        gsap.fromTo(
          "#fp-bird",
          { x: -180, y: 520, rotate: 8 },
          {
            x: () => window.innerWidth + 180,
            y: 280,
            rotate: -4,
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: "body",
              start: "350px top",
              end: "1050px top",
              scrub: 3,
            },
          }
        )

        // ── Wing flap — runs continuously, independent of scroll ──
        gsap.to("#fp-wing-left", {
          scaleY: -0.4,
          transformOrigin: "right center",
          repeat: -1,
          yoyo: true,
          duration: 0.45,
          ease: "power1.inOut",
        })
        gsap.to("#fp-wing-right", {
          scaleY: -0.4,
          transformOrigin: "left center",
          repeat: -1,
          yoyo: true,
          duration: 0.45,
          ease: "power1.inOut",
          delay: 0.22,
        })

      }, containerRef)

      cleanup = () => ctx.revert()
    })

    return () => cleanup?.()
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10"
      style={{ background: "#05000f" }}
    >
      {/* ── Main SVG — all parallax layers live here ── */}
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMax slice"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        <defs>
          {/* Sky: pink glow at horizon, deep purple above */}
          <radialGradient id="fp-sky" cx="50%" cy="96%" r="88%">
            <stop offset="0%"   stopColor="#ff0096" stopOpacity="0.92" />
            <stop offset="16%"  stopColor="#c01870" stopOpacity="0.72" />
            <stop offset="38%"  stopColor="#7a44d4" stopOpacity="0.60" />
            <stop offset="62%"  stopColor="#2d0d52" stopOpacity="0.92" />
            <stop offset="100%" stopColor="#05000f"  stopOpacity="1"    />
          </radialGradient>

          <linearGradient id="fp-mtn1-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#1c063a" />
            <stop offset="100%" stopColor="#0e0120" />
          </linearGradient>
          <linearGradient id="fp-mtn2-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#3b1680" />
            <stop offset="100%" stopColor="#1e0a50" />
          </linearGradient>
          <linearGradient id="fp-mtn3-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#6c3fd4" />
            <stop offset="100%" stopColor="#3e1e96" />
          </linearGradient>
        </defs>

        {/* Sky base */}
        <rect width="1440" height="900" fill="url(#fp-sky)" />

        {/* ── Layer 1: Distant mountains ── */}
        <g id="fp-mtn-1">
          <path
            fill="url(#fp-mtn1-fill)"
            d="
              M0,730
              C 60,700 90,660 140,620
              C 185,585 210,605 255,572
              C 305,536 330,555 380,518
              C 430,482 458,500 508,465
              C 558,430 585,448 638,412
              C 688,378 715,396 768,362
              C 818,330 848,348 900,318
              C 952,287 980,304 1032,276
              C 1085,248 1112,263 1165,238
              C 1218,213 1248,226 1305,205
              C 1358,186 1400,193 1440,188
              L1440,900 L0,900 Z
            "
          />
        </g>

        {/* ── Layer 2: Mid mountains ── */}
        <g id="fp-mtn-2">
          <path
            fill="url(#fp-mtn2-fill)"
            d="
              M0,768
              C 55,735 80,715 128,680
              C 172,648 196,665 242,632
              C 290,598 315,614 365,580
              C 412,548 438,563 488,530
              C 538,497 562,512 615,480
              C 665,448 692,463 742,432
              C 792,400 820,415 875,385
              C 928,355 955,370 1008,342
              C 1060,314 1088,327 1142,302
              C 1195,278 1222,289 1278,268
              C 1332,248 1362,257 1415,240
              L1440,235 L1440,900 L0,900 Z
            "
          />
        </g>

        {/* ── Layer 3: Near mountains (purple) ── */}
        <g id="fp-mtn-3">
          <path
            fill="url(#fp-mtn3-fill)"
            d="
              M0,815
              C 45,792 65,778 105,756
              C 142,736 162,745 202,723
              C 245,700 265,710 308,687
              C 352,664 372,674 418,651
              C 464,628 487,640 535,617
              C 582,594 605,607 655,584
              C 702,562 728,575 778,553
              C 825,532 850,545 902,524
              C 950,503 975,516 1025,497
              C 1075,478 1098,490 1150,473
              C 1200,456 1225,467 1278,452
              C 1328,437 1355,447 1405,434
              L1440,428 L1440,900 L0,900 Z
            "
          />
        </g>

        {/* ── Layer 4: Far treeline ── */}
        <g id="fp-trees-far">
          {Array.from({ length: 52 }).map((_, i) => {
            const x = i * 28 - 6
            const heights = [72, 90, 65, 84, 102, 70, 87, 96, 62, 80, 108, 76]
            const h = heights[i % heights.length]
            const w = 20 + (i % 4) * 4
            return (
              <polygon
                key={i}
                points={`${x},900 ${x + w / 2},${900 - h} ${x + w},900`}
                fill="#100020"
              />
            )
          })}
        </g>

        {/* ── Layer 5: Near treeline (fastest) ── */}
        <g id="fp-trees-near">
          {Array.from({ length: 38 }).map((_, i) => {
            const x = i * 38 - 10
            const heights = [132, 158, 118, 148, 170, 138, 162, 122, 145, 178, 130, 160]
            const h = heights[i % heights.length]
            const w = 30 + (i % 5) * 6
            return (
              <polygon
                key={i}
                points={`${x},900 ${x + w / 2},${900 - h} ${x + w},900`}
                fill="#060010"
              />
            )
          })}
        </g>

        {/* ── Bird / Eagle ── */}
        <g id="fp-bird" style={{ transform: "translate(-180px, 520px)" }}>
          {/* Body */}
          <ellipse cx="0" cy="0" rx="18" ry="6" fill="white" fillOpacity="0.88" />
          {/* Head */}
          <ellipse cx="16" cy="-3" rx="7" ry="5" fill="white" fillOpacity="0.88" />
          {/* Beak */}
          <path d="M22,-3 L30,-1 L22,0 Z" fill="#ff0096" />
          {/* Tail */}
          <path d="M-18,0 L-32,-4 L-28,4 Z" fill="white" fillOpacity="0.75" />
          {/* Left wing */}
          <g id="fp-wing-left">
            <path
              d="M-5,-4 C-20,-22 -45,-26 -68,-18 C-45,-14 -22,-8 -5,-4 Z"
              fill="white"
              fillOpacity="0.85"
            />
          </g>
          {/* Right wing */}
          <g id="fp-wing-right">
            <path
              d="M5,-4 C20,-22 45,-26 68,-18 C45,-14 22,-8 5,-4 Z"
              fill="white"
              fillOpacity="0.85"
            />
          </g>
        </g>
      </svg>

      {/* ── Pink horizon glow — separate div for blur perf ── */}
      <div
        id="fp-glow"
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "150%",
          height: "52%",
          background:
            "radial-gradient(ellipse 52% 65% at 50% 100%, rgba(255,0,150,0.52) 0%, rgba(190,0,110,0.18) 44%, transparent 70%)",
          filter: "blur(72px)",
          animation: "fp-pulse 5.5s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      <style>{`
        @keyframes fp-pulse {
          0%, 100% { opacity: 0.82; transform: translateX(-50%) scale(1); }
          50%       { opacity: 1;   transform: translateX(-50%) scale(1.09); }
        }
      `}</style>
    </div>
  )
}
