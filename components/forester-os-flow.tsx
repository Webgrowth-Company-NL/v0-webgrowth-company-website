"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { RefreshCw } from "lucide-react";
import { FORESTER_FLOW, FORESTER_MODULES } from "@/lib/forester-os";

const EASE = [0.23, 1, 0.32, 1] as const;

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay } },
});

/** Plaats per fase in het 2×2-rooster op lg+ (kloksgewijs: TL → TR → BR → BL). */
const CYCLE_POSITION: Record<number, string> = {
  0: "lg:col-start-1 lg:row-start-1",
  1: "lg:col-start-2 lg:row-start-1",
  2: "lg:col-start-2 lg:row-start-2",
  3: "lg:col-start-1 lg:row-start-2",
};

function moduleLabel(slug: string) {
  return FORESTER_MODULES.find((m) => m.slug === slug)?.short ?? slug;
}

export function ForesterOsFlow() {
  const reduce = useReducedMotion();
  return (
    <section className="relative px-5 sm:px-8 pt-16 sm:pt-24 pb-24 sm:pb-32 bg-white">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.span
            variants={fadeUp(0)}
            className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-bg-elevated)] text-[12.5px] font-medium text-[color:var(--color-ink-muted)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-purple)]" />
            Eén cyclus
          </motion.span>
          <motion.h2
            variants={fadeUp(0.05)}
            className="mt-6 font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.07] tracking-[-0.02em] text-[color:var(--color-ink-strong)]"
          >
            Van bezoek tot vaste klant. En weer terug.
          </motion.h2>
          <motion.p
            variants={fadeUp(0.1)}
            className="mt-5 text-[16px] sm:text-[17px] leading-[1.6] text-[color:var(--color-ink-muted)]"
          >
            Eén database, één tone-of-voice, één login. Vaste klanten brengen nieuwe bezoekers. Forester OS houdt de cyclus voor je draaiend, zodat groei zichzelf voedt.
          </motion.p>
        </motion.div>

        {/* Cycle layout: 2x2 kaarten kloksgewijs op lg, verticale stack op mobile, met centrale hub en getekende krommen */}
        <div className="relative mt-14 mx-auto max-w-4xl">
          {/* Hand-drawn curved arrows — only on lg+ */}
          <svg
            aria-hidden
            viewBox="0 0 132 100"
            preserveAspectRatio="none"
            className="hidden lg:block absolute inset-0 w-full h-full z-[1] pointer-events-none overflow-visible"
            fill="none"
          >
            <defs>
              <filter id="cycle-rough" x="-3%" y="-3%" width="106%" height="106%">
                <feTurbulence type="fractalNoise" baseFrequency="0.045" numOctaves="2" seed="7" result="turb" />
                <feDisplacementMap in="SourceGraphic" in2="turb" scale="0.9" />
              </filter>
              <marker
                id="cycle-arrowhead"
                viewBox="0 0 12 12"
                refX="10"
                refY="6"
                markerWidth="4.5"
                markerHeight="4.5"
                orient="auto"
              >
                <path d="M 0 0 L 12 6 L 0 12 L 3 6 Z" fill="#623bc7" />
              </marker>
            </defs>
            <g
              stroke="#623bc7"
              strokeOpacity="0.78"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0.5"
              filter="url(#cycle-rough)"
            >
              {/* 01 → 02 (top): curves up between the two top cards */}
              <path d="M 53 18.5 Q 66 7 79 18.5" markerEnd="url(#cycle-arrowhead)" />
              {/* 02 → 03 (right): curves right between the two right cards */}
              <path d="M 105.5 37 Q 124 50 105.5 63" markerEnd="url(#cycle-arrowhead)" />
              {/* 03 → 04 (bottom): curves down between the two bottom cards */}
              <path d="M 79 81.5 Q 66 93 53 81.5" markerEnd="url(#cycle-arrowhead)" />
              {/* 04 → 01 (left, the loop-back): curves left between the two left cards */}
              <path d="M 26.5 63 Q 8 50 26.5 37" markerEnd="url(#cycle-arrowhead)" />
            </g>
          </svg>

          {/* Center hub — alleen op lg+ */}
          <div
            aria-hidden
            className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 items-center justify-center"
          >
            <div
              className="relative h-28 w-28 rounded-full flex items-center justify-center shadow-[0_24px_44px_-10px_rgba(98,59,199,0.55),0_3px_6px_rgba(98,59,199,0.18)]"
              style={{ backgroundImage: "linear-gradient(140deg, #ff0096 0%, #8b5cf6 55%, #c4b5fd 100%)" }}
            >
              <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/30 via-transparent to-transparent" />
              <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/25" />
              <div className="relative h-[68px] w-[68px] rounded-full bg-white flex items-center justify-center shadow-[inset_0_1px_2px_rgba(12,6,18,0.06)]">
                <Image src="/logo-bolt.png" alt="" width={36} height={36} className="object-contain" />
              </div>
              {/* Continu draaiende accent-arc */}
              {!reduce && (
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 22, ease: "linear", repeat: Infinity }}
                  className="absolute -inset-[10px] rounded-full pointer-events-none"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent 0deg, transparent 320deg, rgba(98,59,199,0.65) 345deg, rgba(255,0,150,0.55) 358deg, transparent 360deg)",
                    WebkitMaskImage:
                      "radial-gradient(closest-side, transparent 76%, black 78%, black 100%)",
                    maskImage:
                      "radial-gradient(closest-side, transparent 76%, black 78%, black 100%)",
                  }}
                />
              )}
            </div>
          </div>

          {/* 4 fase-kaarten */}
          <div className="relative z-[2] grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-x-[180px] lg:gap-y-[180px]">
            {FORESTER_FLOW.map((step, i) => (
              <motion.article
                key={step.phase}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, ease: EASE, delay: 0.15 + i * 0.08 }}
                className={[
                  "relative rounded-2xl bg-[color:var(--color-bg)] border border-[color:var(--color-line)] p-6 sm:p-7 shadow-[0_1px_2px_rgba(12,6,18,0.04)]",
                  CYCLE_POSITION[i],
                ].join(" ")}
              >
                <div className="flex items-center justify-between">
                  <span className="font-[family-name:var(--font-mono)] text-[11px] font-semibold text-[color:var(--color-ink-subtle)] tabular-nums">
                    {step.phase}
                  </span>
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[color:var(--color-purple)] text-white text-[11px] font-bold tabular-nums">
                    {i + 1}
                  </span>
                </div>

                <h3 className="mt-4 font-[family-name:var(--font-display)] font-bold text-[19px] sm:text-[20px] leading-[1.2] tracking-[-0.005em] text-[color:var(--color-ink-strong)]">
                  {step.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-[1.6] text-[color:var(--color-ink-muted)]">{step.body}</p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {step.modules.map((slug) => (
                    <span
                      key={slug}
                      className="rounded-full bg-[color:var(--color-purple-tint)] px-2 py-0.5 text-[10.5px] font-semibold text-[color:var(--color-purple)]"
                    >
                      {moduleLabel(slug)}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>

          {/* Mobile loop-back-indicator */}
          <div className="lg:hidden mt-10 flex flex-col items-center gap-2 text-center">
            <RefreshCw className="h-5 w-5 text-[color:var(--color-purple)]" strokeWidth={2.25} />
            <p className="text-[12.5px] text-[color:var(--color-ink-muted)] max-w-[260px]">
              En weer terug naar gevonden worden, vaste klanten brengen nieuwe bezoekers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
