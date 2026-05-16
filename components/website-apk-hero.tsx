"use client";

import { motion } from "framer-motion";
import { ArrowDown, Star } from "lucide-react";
import Link from "next/link";

const EASE = [0.23, 1, 0.32, 1] as const;

const containerStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.08 } },
};

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE, delay } },
});

export function WebsiteApkHero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-12 sm:pt-40 sm:pb-16 px-5 sm:px-8 bg-[color:var(--color-bg)]">
      {/* Soft glows */}
      <div
        aria-hidden
        className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(98,59,199,0.16), rgba(98,59,199,0) 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-48 -left-40 h-[520px] w-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(124,58,237,0.10), rgba(124,58,237,0) 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(12,6,18,0.07) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      {/* fade decorations to the cream surface at the bottom edge so the wave-divider connects seamlessly to the lavender below */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-32 sm:h-40 pointer-events-none bg-gradient-to-b from-transparent to-[color:var(--color-bg)]"
      />

      <motion.div
        variants={containerStagger}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-3xl text-center"
      >
        <motion.span
          variants={fadeUp(0)}
          className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full border border-[color:var(--color-line)] bg-white text-[12.5px] font-medium text-[color:var(--color-ink-muted)]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-purple)]" />
          Website APK
          <span className="text-[color:var(--color-ink-faint)]">·</span>
          <span className="text-[color:var(--color-ink)] font-semibold">Gratis · 2 minuten</span>
        </motion.span>

        <motion.h1
          variants={fadeUp(0.1)}
          className="mt-7 font-[family-name:var(--font-display)] font-bold text-[clamp(2.4rem,5.6vw,4.4rem)] leading-[1.04] tracking-[-0.022em] text-[color:var(--color-ink-strong)]"
        >
          Hoe scoort jouw website{" "}
          <span
            className="inline bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(110deg, #ff0096 0%, #8b5cf6 50%, #c4b5fd 100%)",
              backgroundSize: "220% 220%",
              animation: "shimmer 7s ease-in-out infinite",
              WebkitBackgroundClip: "text",
            }}
          >
            écht?
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp(0.2)}
          className="mt-6 text-[17px] sm:text-[18px] leading-[1.6] text-[color:var(--color-ink-muted)]"
        >
          Vul je URL in, beantwoord zeven korte vragen en je krijgt direct een rapport: branche, bezoekersinschatting, lead-definitie, technieksignalen en een eerlijke kostenanalyse. Geen account, geen verkoopgesprek.
        </motion.p>

        <motion.div
          variants={fadeUp(0.3)}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href="#scan"
            className="
              btn-press group
              inline-flex items-center gap-2 pl-6 pr-2 py-2.5
              rounded-full
              bg-[color:var(--color-purple)] hover:bg-[color:var(--color-purple-hover)]
              text-white text-[15px] font-semibold
              shadow-[0_2px_4px_rgba(98,59,199,0.28),0_18px_40px_-12px_rgba(98,59,199,0.55)]
              hover:shadow-[0_8px_18px_rgba(98,59,199,0.36),0_28px_56px_-12px_rgba(98,59,199,0.78)]
            "
          >
            Start de gratis scan
            <span
              className="
                inline-flex h-9 w-9 items-center justify-center
                rounded-full bg-white/18
                transition-[transform,background-color] duration-200 ease-out
                group-hover:translate-y-0.5 group-hover:bg-white/30
              "
            >
              <ArrowDown className="h-4 w-4" strokeWidth={2.5} />
            </span>
          </Link>
        </motion.div>

        <motion.div
          variants={fadeUp(0.4)}
          className="mt-8 inline-flex items-center gap-2"
        >
          <span className="flex gap-[2px]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-[color:var(--color-amber)] text-[color:var(--color-amber)]"
                strokeWidth={0}
              />
            ))}
          </span>
          <span className="text-[14px] font-semibold text-[color:var(--color-ink)] tabular-nums">5,0</span>
          <span className="text-[13px] text-[color:var(--color-ink-muted)]">·</span>
          <span className="text-[13px] text-[color:var(--color-ink-muted)]">
            <span className="font-semibold text-[color:var(--color-ink)]">227</span> tevreden klanten
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
