"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { HeroDashboard } from "@/components/hero-dashboard";

const EASE = [0.23, 1, 0.32, 1] as const;

const HEADLINE_LINE1 = "Eén abonnement, negen tools minder.";
const HEADLINE_LINE2 = "Meer groei.";

const containerStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const wordReveal = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: EASE },
  },
};

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay },
  },
});

function Words({ text }: { text: string }) {
  return (
    <>
      {text.split(" ").map((w, i, arr) => (
        <motion.span
          key={`${w}-${i}`}
          variants={wordReveal}
          className="inline-block will-change-[transform,opacity,filter]"
        >
          {w}
          {i < arr.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </>
  );
}

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32 px-5 sm:px-8">
      {/* ── Background art - soft purple glows ─── */}
      <div
        aria-hidden
        className="absolute -top-44 -right-44 h-[620px] w-[620px] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(98,59,199,0.18), rgba(98,59,199,0) 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-56 -left-44 h-[620px] w-[620px] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(98,59,199,0.10), rgba(98,59,199,0) 70%)",
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
      {/* fade decorations to pure bg at the bottom edge so the wave-divider connects seamlessly */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40 sm:h-52 pointer-events-none bg-gradient-to-b from-transparent to-[color:var(--color-bg)]"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-20 items-center">
          {/* ── Left: copy ─────────────────────────── */}
          <motion.div
            variants={containerStagger}
            initial="hidden"
            animate="show"
            className="max-w-2xl"
          >
            <motion.div
              variants={fadeUp(0)}
              className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full
                         border border-[color:var(--color-line)] bg-white
                         text-[12.5px] font-medium text-[color:var(--color-ink-muted)]"
            >
              <span className="relative inline-flex h-1.5 w-1.5">
                <span
                  className="absolute inset-0 rounded-full bg-[color:var(--color-purple)]"
                  style={{ animation: reduce ? undefined : "soft-pulse 2.4s ease-in-out infinite" }}
                />
              </span>
              Premium groeiplatform
              <span className="text-[color:var(--color-ink-faint)]">·</span>
              <span className="text-[color:var(--color-ink)] font-semibold">Sinds 2016</span>
            </motion.div>

            {/* Headline */}
            <h1
              className="
                mt-7 font-[family-name:var(--font-display)] font-bold
                text-[clamp(2.6rem,6.2vw,5rem)]
                leading-[1.02] tracking-[-0.025em]
                text-[color:var(--color-ink-strong)]
              "
            >
              <motion.span variants={containerStagger} className="block">
                <Words text={HEADLINE_LINE1} />
              </motion.span>
              <motion.span variants={fadeUp(0.5)} className="block mt-1">
                <span
                  className="inline-block bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(110deg, #4d2da3 0%, #623bc7 35%, #8b5cf6 65%, #c4b5fd 100%)",
                    backgroundSize: "220% 220%",
                    animation: reduce ? undefined : "shimmer 7s ease-in-out infinite",
                    WebkitBackgroundClip: "text",
                  }}
                >
                  {HEADLINE_LINE2}
                </span>
              </motion.span>
            </h1>

            {/* Subhead */}
            <motion.p
              variants={fadeUp(0.7)}
              className="
                mt-6 text-[17px] sm:text-[18px] leading-[1.6]
                text-[color:var(--color-ink-muted)] max-w-lg
              "
            >
              Eén abonnement voor groeiende organisaties.
              Website, CRM, marketing en AI op één plek, in plaats van negen losse leveranciers.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp(0.85)} className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/website-apk"
                className="
                  btn-press group
                  inline-flex items-center gap-2 pl-6 pr-2 py-2
                  rounded-full
                  bg-[color:var(--color-purple)] hover:bg-[color:var(--color-purple-hover)]
                  text-white text-[14.5px] font-semibold
                  shadow-[0_2px_4px_rgba(98,59,199,0.28),0_18px_40px_-12px_rgba(98,59,199,0.55)]
                  hover:shadow-[0_8px_18px_rgba(98,59,199,0.36),0_28px_56px_-12px_rgba(98,59,199,0.78)]
                "
              >
                Doe de gratis website APK
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
                href="/contact"
                className="
                  btn-press group
                  inline-flex items-center gap-2 pl-6 pr-2 py-2
                  rounded-full
                  bg-white hover:bg-[color:var(--color-purple-soft)]
                  border border-[color:var(--color-line-strong)] hover:border-[color:var(--color-purple)]/35
                  text-[color:var(--color-ink)] hover:text-[color:var(--color-purple)] text-[14.5px] font-semibold
                  shadow-[0_1px_2px_rgba(12,6,18,0.04)]
                  hover:shadow-[0_10px_24px_-10px_rgba(98,59,199,0.3)]
                "
              >
                Boek een kennismaking
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

            {/* Trust row */}
            <motion.div
              variants={fadeUp(1.0)}
              className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3"
            >
              <a
                href="https://www.google.com/search?q=Webgrowth+Company+reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 group"
                aria-label="Google reviews: 9,4 van de 10"
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
                <span className="text-[14px] font-semibold text-[color:var(--color-ink)] tabular-nums">9,4</span>
                <span className="text-[13px] text-[color:var(--color-ink-muted)] group-hover:text-[color:var(--color-ink)] transition-colors">
                  op Google
                </span>
              </a>

              <div className="hidden sm:block h-4 w-px bg-[color:var(--color-line)]" />

              <div className="inline-flex items-center gap-2 text-[13.5px] text-[color:var(--color-ink-muted)]">
                <span className="font-semibold text-[color:var(--color-ink)] tabular-nums">227</span>
                tevreden klanten
              </div>

              <div className="hidden sm:block h-4 w-px bg-[color:var(--color-line)]" />

              {/* NL vlag - horizontaal rood/wit/blauw */}
              <div className="inline-flex items-center gap-2 text-[13.5px] text-[color:var(--color-ink-muted)]">
                <span
                  className="inline-flex flex-col h-4 w-6 overflow-hidden rounded-[2px] ring-1 ring-[color:var(--color-line)]"
                  aria-label="Nederlandse vlag"
                >
                  <span className="h-1/3 w-full bg-[#AE1C28]" />
                  <span className="h-1/3 w-full bg-white" />
                  <span className="h-1/3 w-full bg-[#21468B]" />
                </span>
                Gebouwd in Nederland
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: cycling dashboard (with its own view-dependent floating chips) ── */}
          <div className="relative h-[520px] sm:h-[560px] lg:h-[580px]">
            <HeroDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}

