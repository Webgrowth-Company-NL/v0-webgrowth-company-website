"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const EASE = [0.23, 1, 0.32, 1] as const;

const containerStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.08 } },
};

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE, delay } },
});

export function ForesterOsHero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24 px-5 sm:px-8 bg-[color:var(--color-bg)]">
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
          Forester OS
          <span className="text-[color:var(--color-ink-faint)]">·</span>
          <span className="text-[color:var(--color-ink)] font-semibold">Acht modules, één login</span>
        </motion.span>

        <motion.h1
          variants={fadeUp(0.1)}
          className="mt-7 font-[family-name:var(--font-display)] font-bold text-[clamp(2.3rem,5.3vw,4.2rem)] leading-[1.05] tracking-[-0.022em] text-[color:var(--color-ink-strong)]"
        >
          Het platform achter{" "}
          <span
            className="inline-block bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(110deg, #ff0096 0%, #8b5cf6 50%, #c4b5fd 100%)",
              backgroundSize: "220% 220%",
              animation: "shimmer 7s ease-in-out infinite",
              WebkitBackgroundClip: "text",
            }}
          >
            jouw groei.
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp(0.2)}
          className="mt-6 text-[17px] sm:text-[18px] leading-[1.6] text-[color:var(--color-ink-muted)]"
        >
          Forester OS is ons eigen groeiplatform: je website, CRM, marketing en AI delen één database, één tone-of-voice en één login. Geen aparte facturen, geen integratielijm, geen losse aanspreekpunten.
        </motion.p>

        <motion.div
          variants={fadeUp(0.3)}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href="/website-apk"
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
            Doe de gratis APK
            <span
              className="
                inline-flex h-9 w-9 items-center justify-center
                rounded-full bg-white/18
                transition-[transform,background-color] duration-200 ease-out
                group-hover:translate-x-0.5 group-hover:scale-105 group-hover:bg-white/30
              "
            >
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </span>
          </Link>
          <Link
            href="/prijzen"
            className="
              btn-press group
              inline-flex items-center gap-2 pl-6 pr-2 py-2.5
              rounded-full
              bg-white hover:bg-[color:var(--color-purple-soft)]
              border border-[color:var(--color-line-strong)] hover:border-[color:var(--color-purple)]/35
              text-[color:var(--color-ink)] hover:text-[color:var(--color-purple)] text-[15px] font-semibold
              shadow-[0_1px_2px_rgba(12,6,18,0.04)]
              hover:shadow-[0_10px_24px_-10px_rgba(98,59,199,0.3)]
            "
          >
            Bekijk de prijzen
            <span
              className="
                inline-flex h-9 w-9 items-center justify-center
                rounded-full bg-[color:var(--color-ink-strong)]/6
                transition-[transform,background-color] duration-200 ease-out
                group-hover:translate-x-0.5 group-hover:scale-105 group-hover:bg-[color:var(--color-purple)]/15
              "
            >
              <ArrowRight className="h-4 w-4 text-[color:var(--color-ink)] transition-colors duration-200 ease-out group-hover:text-[color:var(--color-purple)]" strokeWidth={2.5} />
            </span>
          </Link>
        </motion.div>

        <motion.div
          variants={fadeUp(0.4)}
          className="mt-9 inline-flex items-center gap-2 text-[13px] text-[color:var(--color-ink-muted)]"
        >
          <Sparkles className="h-3.5 w-3.5 text-[color:var(--color-purple)]" strokeWidth={2.5} />
          Sinds 2024 ons fundament, draait nu bij <span className="font-semibold text-[color:var(--color-ink)]">227 klanten</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
