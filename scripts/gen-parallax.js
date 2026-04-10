// Generator script: reads HTML.html, extracts CodePen SVG paths, writes forest-parallax.tsx
const fs = require("fs");
const path = require("path");

const html = fs.readFileSync("C:/Users/MartijnDuin/Downloads/HTML.html", "utf8");

function getPathD(id) {
  // Try id first then d
  let m = html.match(new RegExp('<path[^>]*id=["\']' + id + '["\'][^>]*d=["\']([^"\']+)["\']', 's'));
  if (m) return m[1];
  m = html.match(new RegExp('<path[^>]*d=["\']([^"\']+)["\'][^>]*id=["\']' + id + '["\']', 's'));
  if (m) return m[1];
  // Try inside a group <g id="..."><path d="
  const gIdx = html.indexOf('id="' + id + '"');
  if (gIdx !== -1) {
    const section = html.substring(gIdx, gIdx + 5000);
    const dm = section.match(/<path[^>]*\bd=["\']([^"\']+)["\'][^>]*>/s);
    if (dm) return dm[1];
  }
  return null;
}

function getPolygonPoints(id) {
  const m = html.match(new RegExp('<polygon[^>]*id=["\']' + id + '["\'][^>]*points=["\']([^"\']+)["\']', 's'));
  if (m) return m[1];
  const m2 = html.match(new RegExp('<polygon[^>]*points=["\']([^"\']+)["\'][^>]*id=["\']' + id + '["\']', 's'));
  if (m2) return m2[1];
  return null;
}

// Extract bird d from the path with id="bird"
function getBirdPath() {
  const m = html.match(/id=["']bird["'][^\n]*\n\s*d=["']([^"']+)["']/s);
  if (m) return m[1];
  // Try: path element, then next line has d=
  const idx = html.indexOf('id="bird"');
  const section = html.substring(idx - 500, idx + 2000);
  const dm = section.match(/\bd=["']([^"']{50,})["']/);
  if (dm) return dm[1];
  return null;
}

const D = {
  h11: getPathD('h1-1'),
  h12: getPathD('h1-2'),
  h13: getPathD('h1-3'),
  h14: getPathD('h1-4'),
  h15: getPathD('h1-5'),
  h16: getPathD('h1-6'),
  h17: getPathD('h1-7'),
  h18: getPathD('h1-8'),
  h19: getPathD('h1-9'),
  h21: getPathD('h2-1'),
  h22: getPathD('h2-2'),
  h23: getPathD('h2-3'),
  h24: getPathD('h2-4'),
  h25: getPathD('h2-5'),
  h26: getPathD('h2-6'),
  h31: getPathD('h3-1'),
  h32: getPathD('h3-2'),
  h33: getPathD('h3-3'),
  h34: getPathD('h3-4'),
  h35poly: getPolygonPoints('h3-5'),
  bird: getBirdPath(),
};

// Report missing
for (const [k, v] of Object.entries(D)) {
  if (!v) console.warn('MISSING:', k);
  else console.log('OK:', k, v.length, 'chars');
}

// Escape for use inside a JS string (double-quoted) — just escape backslashes and double quotes
function esc(s) {
  return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
}

const tsxContent = `"use client"

import { useEffect } from "react"

// ── CodePen paths (isladjan/pen/abdyPBw) — brand-adapted ──────────────────────
// All d/points strings extracted verbatim from the original SVG
const D = {
  h11: "${esc(D.h11)}",
  h12: "${esc(D.h12)}",
  h13: "${esc(D.h13)}",
  h14: "${esc(D.h14)}",
  h15: "${esc(D.h15)}",
  h16: "${esc(D.h16)}",
  h17: "${esc(D.h17)}",
  h18: "${esc(D.h18)}",
  h19: "${esc(D.h19)}",
  h21: "${esc(D.h21)}",
  h22: "${esc(D.h22)}",
  h23: "${esc(D.h23)}",
  h24: "${esc(D.h24)}",
  h25: "${esc(D.h25)}",
  h26: "${esc(D.h26)}",
  h31: "${esc(D.h31)}",
  h32: "${esc(D.h32)}",
  h33: "${esc(D.h33)}",
  h34: "${esc(D.h34)}",
  h35poly: "${esc(D.h35poly)}",
  bird: "${esc(D.bird)}",
}

export function ForestParallax() {
  useEffect(() => {
    let cleanup: (() => void) | undefined

    Promise.all([
      import("gsap"),
      import("gsap/ScrollTrigger"),
    ]).then(([{ default: gsap }, { ScrollTrigger }]) => {
      gsap.registerPlugin(ScrollTrigger)

      const speed = 100
      const driver = document.querySelector("#parallax-driver")
      if (!driver) return

      gsap.set("#fp-h2-1", { opacity: 0 })
      gsap.set("#fp-bg-grad", { attr: { cy: "-50" } })

      // ── SCENE 1: initial hills sink as you scroll ──────────────────────────
      const scene1 = gsap.timeline()
      ScrollTrigger.create({
        animation: scene1,
        trigger: "#parallax-driver",
        start: "top top",
        end: "45% bottom",
        scrub: 3,
      })
      scene1.to("#fp-h1-1", { y: 3 * speed, x: 1 * speed, scale: 0.9, ease: "power1.in" }, 0)
      scene1.to("#fp-h1-2", { y: 2.6 * speed, x: -0.6 * speed, ease: "power1.in" }, 0)
      scene1.to("#fp-h1-3", { y: 1.7 * speed, x: 1.2 * speed }, 0.03)
      scene1.to("#fp-h1-4", { y: 3 * speed, x: 1 * speed }, 0.03)
      scene1.to("#fp-h1-5", { y: 2 * speed, x: 1 * speed }, 0.03)
      scene1.to("#fp-h1-6", { y: 2.3 * speed, x: -2.5 * speed }, 0)
      scene1.to("#fp-h1-7", { y: 5 * speed, x: 1.6 * speed }, 0)
      scene1.to("#fp-h1-8", { y: 3.5 * speed, x: 0.2 * speed }, 0)
      scene1.to("#fp-h1-9", { y: 3.5 * speed, x: -0.2 * speed }, 0)

      // ── BIRD: flies across mid-scroll ──────────────────────────────────────
      gsap.fromTo(
        "#fp-bird",
        { opacity: 1 },
        {
          y: -250,
          x: 800,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#parallax-driver",
            start: "15% top",
            end: "60% bottom",
            scrub: 4,
            onEnter: () => gsap.to("#fp-bird", { scaleX: 1, rotation: 0 }),
            onLeave: () => gsap.to("#fp-bird", { scaleX: -1, rotation: -15 }),
          },
        }
      )

      // ── SUN / SKY: gradient rises ──────────────────────────────────────────
      const sun = gsap.timeline()
      ScrollTrigger.create({
        animation: sun,
        trigger: "#parallax-driver",
        start: "1% top",
        end: "80% bottom",
        scrub: 2,
      })
      sun.fromTo("#fp-bg-grad", { attr: { cy: "-50" } }, { attr: { cy: "330" } }, 0)

      // ── SCENE 2: new hills rise from below ────────────────────────────────
      const scene2 = gsap.timeline()
      ScrollTrigger.create({
        animation: scene2,
        trigger: "#parallax-driver",
        start: "15% top",
        end: "40% bottom",
        scrub: 3,
      })
      scene2.fromTo("#fp-h2-1", { y: 500, opacity: 0 }, { y: 0, opacity: 1 }, 0)
      scene2.fromTo("#fp-h2-2", { y: 500 }, { y: 0 }, 0.1)
      scene2.fromTo("#fp-h2-3", { y: 700 }, { y: 0 }, 0.1)
      scene2.fromTo("#fp-h2-4", { y: 700 }, { y: 0 }, 0.2)
      scene2.fromTo("#fp-h2-5", { y: 800 }, { y: 0 }, 0.3)
      scene2.fromTo("#fp-h2-6", { y: 900 }, { y: 0 }, 0.3)

      cleanup = () => {
        ScrollTrigger.getAll().forEach(t => t.kill())
        gsap.killTweensOf("*")
      }
    })

    return () => cleanup?.()
  }, [])

  return (
    <div className="fixed inset-0 -z-10" style={{ background: "#05000f" }}>
      <svg
        viewBox="0 0 750 500"
        preserveAspectRatio="xMidYMax slice"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* ── Sky gradient — radial, brand-adapted (warm → pink/purple) ── */}
          <radialGradient id="fp-bg-grad" cx="50%" cy="-50" r="120%" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="#ff0096" stopOpacity="0.95" />
            <stop offset="18%"  stopColor="#c01870" stopOpacity="0.80" />
            <stop offset="40%"  stopColor="#7a44d4" stopOpacity="0.70" />
            <stop offset="65%"  stopColor="#2d0d52" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#05000f"  stopOpacity="1"   />
          </radialGradient>

          {/* ── Scene 1 hill gradients (grad1=nearest, grad9=farthest) ── */}
          <linearGradient id="fp-grad1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#623bc7" />
            <stop offset="100%" stopColor="#3e1e96" />
          </linearGradient>
          <linearGradient id="fp-grad2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7a44d4" />
            <stop offset="100%" stopColor="#4a28a8" />
          </linearGradient>
          <linearGradient id="fp-grad3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5c35b8" />
            <stop offset="100%" stopColor="#381a90" />
          </linearGradient>
          <linearGradient id="fp-grad4" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4d2ea8" />
            <stop offset="100%" stopColor="#2e1478" />
          </linearGradient>
          <linearGradient id="fp-grad5" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3e2290" />
            <stop offset="100%" stopColor="#220d60" />
          </linearGradient>
          <linearGradient id="fp-grad6" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#311878" />
            <stop offset="100%" stopColor="#1a0850" />
          </linearGradient>
          <linearGradient id="fp-grad7" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#261265" />
            <stop offset="100%" stopColor="#120540" />
          </linearGradient>
          <linearGradient id="fp-grad8" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1c0850" />
            <stop offset="100%" stopColor="#0c0230" />
          </linearGradient>
          <linearGradient id="fp-grad9" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#130538" />
            <stop offset="100%" stopColor="#080020" />
          </linearGradient>

          {/* ── Scene 2 gradients ── */}
          <linearGradient id="fp-lg4" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ff0096" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#623bc7" stopOpacity="0.85" />
          </linearGradient>
          <linearGradient id="fp-lg5" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#623bc7" />
            <stop offset="100%" stopColor="#3e1e96" />
          </linearGradient>
          <linearGradient id="fp-lg6" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7a44d4" />
            <stop offset="100%" stopColor="#4a28a8" />
          </linearGradient>
          <linearGradient id="fp-lg7" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8855e0" />
            <stop offset="100%" stopColor="#5530b8" />
          </linearGradient>
          <linearGradient id="fp-lg8" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9966ee" />
            <stop offset="100%" stopColor="#6640c8" />
          </linearGradient>

          {/* ── Scene 3 gradients ── */}
          <linearGradient id="fp-lin1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ff0096" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#05000f" />
          </linearGradient>
          <linearGradient id="fp-lin2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#623bc7" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#05000f" />
          </linearGradient>
          <linearGradient id="fp-lin3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7a44d4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#05000f" />
          </linearGradient>
          <linearGradient id="fp-lin4" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#623bc7" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#05000f" />
          </linearGradient>
        </defs>

        {/* ── Sky background ── */}
        <rect width="750" height="500" fill="url(#fp-bg-grad)" />

        {/* ── Scene 3 (stays fixed, always visible) ── */}
        <g id="fp-h3-1">
          <path d={D.h31} fill="url(#fp-lin1)" />
        </g>
        <path id="fp-h3-2" d={D.h32} fill="url(#fp-lin2)" />
        <path id="fp-h3-3" d={D.h33} fill="url(#fp-lin3)" />
        <path id="fp-h3-4" d={D.h34} fill="url(#fp-lin4)" />
        <polygon id="fp-h3-5" points={D.h35poly} fill="url(#fp-lin4)" />

        {/* ── Scene 2 (rises on scroll) ── */}
        <path id="fp-h2-1" d={D.h21} fill="url(#fp-lg4)" />
        <path id="fp-h2-2" d={D.h22} fill="url(#fp-lg5)" />
        <path id="fp-h2-3" d={D.h23} fill="url(#fp-lg6)" />
        <path id="fp-h2-4" d={D.h24} fill="url(#fp-lg7)" />
        <path id="fp-h2-5" d={D.h25} fill="url(#fp-lg8)" />
        <path id="fp-h2-6" d={D.h26} fill="url(#fp-lg8)" />

        {/* ── Scene 1 (sinks on scroll) ── */}
        <path id="fp-h1-1" d={D.h11} fill="url(#fp-grad9)" />
        <path id="fp-h1-2" d={D.h12} fill="url(#fp-grad8)" />
        <path id="fp-h1-3" d={D.h13} fill="url(#fp-grad7)" />
        <path id="fp-h1-4" d={D.h14} fill="url(#fp-grad6)" />
        <path id="fp-h1-5" d={D.h15} fill="url(#fp-grad5)" />
        <path id="fp-h1-6" d={D.h16} fill="url(#fp-grad4)" />
        <path id="fp-h1-7" d={D.h17} fill="url(#fp-grad3)" />
        <path id="fp-h1-8" d={D.h18} fill="url(#fp-grad2)" />
        <path id="fp-h1-9" d={D.h19} fill="url(#fp-grad1)" />

        {/* ── Bird ── */}
        <path id="fp-bird" d={D.bird} style={{ opacity: 0 }} fill="#ffffff" fillOpacity="0.9" />
      </svg>
    </div>
  )
}
`;

const outPath = path.join(__dirname, "../components/forest-parallax.tsx");
fs.writeFileSync(outPath, tsxContent, "utf8");
console.log("Written:", outPath, tsxContent.length, "bytes");
