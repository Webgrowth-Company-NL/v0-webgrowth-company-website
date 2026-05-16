"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { HeroDashboard } from "@/components/hero-dashboard";
import { KennismakingButton } from "@/components/kennismaking-button";

const EASE = [0.23, 1, 0.32, 1] as const;

/** Deep purple hero surface — keep in sync with the first <WaveDivider top=…> in app/page.tsx */
const HERO_PURPLE = "#231653";

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
  const words = text.split(" ");
  return (
    <>
      {words.map((w, i) => (
        <Fragment key={`${w}-${i}`}>
          <motion.span
            variants={wordReveal}
            className="inline-block will-change-[transform,opacity,filter]"
          >
            {w}
          </motion.span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </>
  );
}

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32 px-5 sm:px-8 text-white"
      style={{ backgroundColor: HERO_PURPLE }}
    >
      {/* ── Background art - violet glows on deep purple ─── */}
      <div
        aria-hidden
        className="absolute -top-48 -right-48 h-[680px] w-[680px] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(139,92,246,0.42), rgba(139,92,246,0) 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-60 -left-48 h-[680px] w-[680px] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(124,58,237,0.30), rgba(124,58,237,0) 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute top-1/3 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,0,150,0.12), rgba(255,0,150,0) 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-70 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      {/* fade decorations to the solid surface at the bottom edge so the wave-divider connects seamlessly */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40 sm:h-52 pointer-events-none"
        style={{ background: `linear-gradient(to bottom, transparent, ${HERO_PURPLE})` }}
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
                         border border-white/15 bg-white/[0.07] backdrop-blur-sm
                         text-[12.5px] font-medium text-white/75"
            >
              <span className="relative inline-flex h-1.5 w-1.5">
                <span
                  className="absolute inset-0 rounded-full bg-[color:var(--color-lavender)]"
                  style={{ animation: reduce ? undefined : "soft-pulse 2.4s ease-in-out infinite" }}
                />
              </span>
              Premium groeiplatform
              <span className="text-white/35">·</span>
              <span className="text-white font-semibold">Sinds 2016</span>
            </motion.div>

            {/* Headline */}
            <h1
              className="
                mt-7 font-[family-name:var(--font-display)] font-bold
                text-[clamp(2.3rem,5.3vw,4.2rem)]
                leading-[1.05] tracking-[-0.022em]
                text-white
              "
            >
              <motion.span variants={containerStagger} className="block">
                <Words text={HEADLINE_LINE1} />
              </motion.span>
              <motion.span variants={fadeUp(0.5)} className="block mt-1">
                <span
                  className="inline bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(110deg, #ff0096 0%, #8b5cf6 50%, #c4b5fd 100%)",
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
                text-white/65 max-w-lg
              "
            >
              Eén platform brengt je website, CRM, marketing en AI-assistent Q samen,
              en wij houden het voor je draaiende zonder dat er voor elk uurtje een factuur
              achteraan komt. Zo kun jij je gewoon bezighouden met je klanten.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp(0.85)} className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/website-apk"
                className="
                  btn-press group
                  inline-flex items-center gap-2 pl-6 pr-2 py-2
                  rounded-full
                  bg-white hover:bg-white/90
                  text-[color:var(--color-purple)] text-[14.5px] font-semibold
                  shadow-[0_2px_4px_rgba(0,0,0,0.18),0_18px_44px_-12px_rgba(0,0,0,0.45)]
                  hover:shadow-[0_8px_18px_rgba(0,0,0,0.22),0_28px_60px_-12px_rgba(0,0,0,0.55)]
                "
              >
                Doe de gratis website APK
                <span
                  className="
                    inline-flex h-9 w-9 items-center justify-center
                    rounded-full bg-[color:var(--color-purple)]/12
                    transition-[transform,background-color] duration-200 ease-out
                    group-hover:translate-x-0.5 group-hover:scale-105 group-hover:bg-[color:var(--color-purple)]/20
                  "
                >
                  <ArrowRight className="h-4 w-4 text-[color:var(--color-purple)]" strokeWidth={2.5} />
                </span>
              </Link>
              <KennismakingButton variant="secondary-on-dark" />
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
                <span className="text-[14px] font-semibold text-white tabular-nums">9,4</span>
                <span className="text-[13px] text-white/55 group-hover:text-white/80 transition-colors">
                  op Google
                </span>
              </a>

              <div className="hidden sm:block h-4 w-px bg-white/15" />

              <div className="inline-flex items-center gap-2 text-[13.5px] text-white/65">
                <span className="font-semibold text-white tabular-nums">227</span>
                tevreden klanten
              </div>

              <div className="hidden sm:block h-4 w-px bg-white/15" />

              {/* NL vlag - horizontaal rood/wit/blauw */}
              <div className="inline-flex items-center gap-2 text-[13.5px] text-white/65">
                <span
                  className="inline-flex flex-col h-4 w-6 overflow-hidden rounded-[2px] ring-1 ring-white/20"
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
