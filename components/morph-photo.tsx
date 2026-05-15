"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Zap } from "lucide-react";

const FRAMES = [
  {
    src: "/images/about/martijn-1997.jpg",
    alt: "Martijn als kind achter een Panasonic-monitor, 1997",
    label: "Martijn, 1997",
    sub: "Daar begon het.",
    priority: true,
  },
  {
    src: "/images/about/martijn-portret.jpg",
    alt: "Martijn Duin, founder van Webgrowth Company",
    label: "Martijn, nu",
    sub: "Founder & Q in de praktijk.",
    priority: false,
  },
] as const;

const CYCLE_MS = 4600;
const FLASH_LEAD_MS = 580;
const EASE = [0.23, 1, 0.32, 1] as const;

export function MorphPhoto() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [flashing, setFlashing] = useState(false);

  useEffect(() => {
    if (reduce) return;
    // Eenmalige transformatie: 1997 → nu. Stop zodra het laatste frame is bereikt.
    if (index >= FRAMES.length - 1) return;
    const flashTimer = setTimeout(() => setFlashing(true), CYCLE_MS - FLASH_LEAD_MS);
    const swapTimer = setTimeout(() => {
      setIndex((i) => Math.min(i + 1, FRAMES.length - 1));
      setFlashing(false);
    }, CYCLE_MS);
    return () => {
      clearTimeout(flashTimer);
      clearTimeout(swapTimer);
    };
  }, [index, reduce]);

  // Reduced motion: toon alleen het meest recente portret, geen animatie.
  if (reduce) {
    const f = FRAMES[1];
    return (
      <FrameCard>
        <Image
          src={f.src}
          alt={f.alt}
          fill
          sizes="(max-width: 1024px) 80vw, 380px"
          className="object-cover"
          priority
        />
        <CardChrome label={f.label} sub={f.sub} />
      </FrameCard>
    );
  }

  const frame = FRAMES[index];

  return (
    <FrameCard>
      <span
        aria-hidden
        className="pointer-events-none absolute -top-12 -right-8 h-72 w-72 rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(196,181,253,0.40), rgba(196,181,253,0) 70%)" }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-12 -left-8 h-72 w-72 rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(255,0,150,0.22), rgba(255,0,150,0) 70%)" }}
      />

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={`frame-${index}`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.55, ease: EASE }}
          className="absolute inset-0"
        >
          <Image
            src={frame.src}
            alt={frame.alt}
            fill
            sizes="(max-width: 1024px) 80vw, 380px"
            className="object-cover"
            priority={frame.priority}
          />
        </motion.div>
      </AnimatePresence>

      {/* Bliksem-flash radial overlay */}
      <AnimatePresence>
        {flashing && (
          <motion.div
            key="flash"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.35, 0.8, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.58, times: [0, 0.15, 0.4, 0.65, 1] }}
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at center, rgba(255,255,255,0.95) 0%, rgba(196,181,253,0.6) 35%, rgba(139,92,246,0) 75%)",
              mixBlendMode: "screen",
            }}
          />
        )}
      </AnimatePresence>

      {/* Bliksem SVG */}
      <AnimatePresence>
        {flashing && (
          <motion.svg
            key="bolt"
            viewBox="0 0 100 200"
            initial={{ opacity: 0, scale: 0.55, rotate: -10 }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0.55, 1, 1.08, 0.9],
              rotate: [-10, 0, 5, 2],
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: EASE }}
            className="absolute inset-0 m-auto h-[78%] w-auto pointer-events-none drop-shadow-[0_0_24px_rgba(196,181,253,0.7)]"
            aria-hidden
          >
            <defs>
              <linearGradient id="bolt-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="55%" stopColor="#c4b5fd" />
                <stop offset="100%" stopColor="#ff0096" />
              </linearGradient>
            </defs>
            <polygon
              points="58,4 28,104 52,104 36,196 80,80 56,80 78,4"
              fill="url(#bolt-grad)"
              stroke="rgba(255,255,255,0.9)"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
          </motion.svg>
        )}
      </AnimatePresence>

      <CardChrome label={frame.label} sub={frame.sub} animateCaption captionKey={index} />
    </FrameCard>
  );
}

/* ────────────────────────────────────────────────────────────
   Wrappers
   ──────────────────────────────────────────────────────────── */

function FrameCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative aspect-[4/5] w-full max-w-[380px] rounded-[2rem] overflow-hidden border border-white/15 bg-white/[0.06] backdrop-blur-sm shadow-[0_30px_72px_-22px_rgba(12,6,18,0.6)]">
      {children}
      <span aria-hidden className="absolute inset-0 pointer-events-none rounded-[2rem] ring-1 ring-inset ring-white/12" />
    </div>
  );
}

function CardChrome({
  label,
  sub,
  animateCaption,
  captionKey,
}: {
  label: string;
  sub: string;
  animateCaption?: boolean;
  captionKey?: number | string;
}) {
  return (
    <>
      {/* Bolt indicator linksboven */}
      <span className="absolute top-3 left-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/14 backdrop-blur-sm border border-white/18 z-10">
        <Zap className="h-3.5 w-3.5 text-[#c4b5fd]" strokeWidth={2.25} fill="currentColor" />
      </span>

      {/* Caption onderaan */}
      <div className="absolute inset-x-0 bottom-0 px-4 py-3 bg-gradient-to-t from-[rgba(12,6,18,0.75)] via-[rgba(12,6,18,0.25)] to-transparent z-10">
        {animateCaption ? (
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`cap-${captionKey}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              <div className="text-[13px] font-semibold text-white">{label}</div>
              <div className="text-[11.5px] text-white/65">{sub}</div>
            </motion.div>
          </AnimatePresence>
        ) : (
          <>
            <div className="text-[13px] font-semibold text-white">{label}</div>
            <div className="text-[11.5px] text-white/65">{sub}</div>
          </>
        )}
      </div>
    </>
  );
}
