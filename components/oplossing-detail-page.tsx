"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { animate, motion, useInView, useMotionValue, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, Clock, ShieldCheck, TrendingUp, Zap } from "lucide-react";
import { HeroDashboard } from "@/components/hero-dashboard";
import { KennismakingButton } from "@/components/kennismaking-button";
import { useKennismakingModal } from "@/components/kennismaking-modal-provider";
import { SectionCta } from "@/components/section-cta";
import { SectionFaq } from "@/components/section-faq";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WaveDivider } from "@/components/wave-divider";
import { type ModuleWidgetData } from "@/lib/forester-os";
import { OPLOSSING_DETAILS, type OplossingBundle, type OplossingDetail } from "@/lib/oplossingen";

const CREAM = "#faf6f0";
const LAVENDER = "#e9e4f7";
const WHITE = "#ffffff";
const DEEP = "#2c1d5e";

const EASE = [0.23, 1, 0.32, 1] as const;

const containerStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.08 } },
};

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE, delay } },
});

const GRADIENT_TILE_STYLE = {
  backgroundImage: "linear-gradient(140deg, #ff0096 0%, #8b5cf6 55%, #c4b5fd 100%)",
} as const;

export function OplossingDetailPage({ slug }: { slug: string }) {
  const detail = OPLOSSING_DETAILS[slug];
  const { open: openKennismaking } = useKennismakingModal();
  if (!detail) return null;

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <OplossingHero detail={detail} />
        <WaveDivider top={CREAM} bottom={LAVENDER} />
        <BundleSection bundle={detail.bundle} />
        <WaveDivider top={LAVENDER} bottom={WHITE} />
        <PainsSection pains={detail.pains} />
        <WaveDivider top={WHITE} bottom={LAVENDER} />
        <OplossingStepsSection steps={detail.steps} illustration={detail.illustration} />
        {detail.proofWidget && (
          <>
            <WaveDivider top={LAVENDER} bottom={WHITE} />
            <ProofStatsSection widget={detail.proofWidget} />
            <WaveDivider top={WHITE} bottom={LAVENDER} />
          </>
        )}
        {!detail.proofWidget && <WaveDivider top={LAVENDER} bottom={LAVENDER} height="h-6" />}
        <SectionFaq
          items={detail.faq}
          eyebrow="Veelgestelde vragen"
          title="Wat klanten hierover vragen."
          intro={
            <>
              Andere vraag?{" "}
              <button
                type="button"
                onClick={openKennismaking}
                className="font-semibold text-[color:var(--color-purple)] hover:text-[color:var(--color-purple-hover)] transition-colors underline underline-offset-2"
              >
                Boek een kennismaking
              </button>
              , dan lopen we het samen door.
            </>
          }
        />
        <WaveDivider top={LAVENDER} bottom={DEEP} />
        <SectionCta />
      </main>
      <SiteFooter />
    </>
  );
}

/* ── Hero ────────────────────────────────────────── */

function OplossingHero({ detail }: { detail: OplossingDetail }) {
  const split = !!detail.heroView;
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24 px-5 sm:px-8 bg-[color:var(--color-bg)]">
      <div
        aria-hidden
        className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(98,59,199,0.16), rgba(98,59,199,0) 70%)" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-48 -left-40 h-[520px] w-[520px] rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(124,58,237,0.10), rgba(124,58,237,0) 70%)" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
        style={{
          backgroundImage: "radial-gradient(rgba(12,6,18,0.07) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-32 sm:h-40 pointer-events-none bg-gradient-to-b from-transparent to-[color:var(--color-bg)]"
      />

      <div
        className={
          split
            ? "relative mx-auto max-w-6xl grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center"
            : "relative mx-auto max-w-3xl"
        }
      >
        <motion.div
          variants={containerStagger}
          initial="hidden"
          animate="show"
          className={split ? "text-left" : "text-center"}
        >
          <motion.span
            variants={fadeUp(0)}
            className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full border border-[color:var(--color-line)] bg-white text-[12.5px] font-medium text-[color:var(--color-ink-muted)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-purple)]" />
            Oplossing
          </motion.span>

          <motion.h1
            variants={fadeUp(0.14)}
            className={`mt-6 font-[family-name:var(--font-display)] font-bold leading-[1.05] tracking-[-0.022em] text-[color:var(--color-ink-strong)] ${
              split ? "text-[clamp(2.1rem,4.6vw,3.6rem)]" : "text-[clamp(2.3rem,5.3vw,4.2rem)]"
            }`}
          >
            {detail.heroLead}{" "}
            <span
              className="inline bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(110deg, #ff0096 0%, #8b5cf6 50%, #c4b5fd 100%)",
                backgroundSize: "220% 220%",
                animation: "shimmer 7s ease-in-out infinite",
                WebkitBackgroundClip: "text",
              }}
            >
              {detail.heroHighlight}
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp(0.22)}
            className="mt-6 text-[17px] sm:text-[18px] leading-[1.6] text-[color:var(--color-ink-muted)]"
          >
            {detail.heroIntro}
          </motion.p>

          <motion.div
            variants={fadeUp(0.3)}
            className={`mt-9 flex flex-wrap items-center gap-3 ${split ? "justify-start" : "justify-center"}`}
          >
            <Link
              href="/website-apk"
              className="btn-press group inline-flex items-center gap-2 pl-6 pr-2 py-2.5 rounded-full bg-[color:var(--color-purple)] hover:bg-[color:var(--color-purple-hover)] text-white text-[15px] font-semibold shadow-[0_2px_4px_rgba(98,59,199,0.28),0_18px_40px_-12px_rgba(98,59,199,0.55)] hover:shadow-[0_8px_18px_rgba(98,59,199,0.36),0_28px_56px_-12px_rgba(98,59,199,0.78)]"
            >
              Doe de gratis APK
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/18 transition-[transform,background-color] duration-200 ease-out group-hover:translate-x-0.5 group-hover:scale-105 group-hover:bg-white/30">
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </span>
            </Link>
            <KennismakingButton variant="secondary" />
          </motion.div>
        </motion.div>

        {split && detail.heroView && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
            className="relative h-[520px] sm:h-[560px] lg:h-[580px] mx-auto w-full max-w-[480px] lg:max-w-none"
          >
            <HeroDashboard view={detail.heroView} config={detail.heroViewConfig} />
          </motion.div>
        )}
      </div>
    </section>
  );
}

/* ── BundleSection: dé "WOW dit-voor-dit-bedrag"-sectie ────────────── */

function BundleSection({ bundle }: { bundle: OplossingBundle }) {
  return (
    <section className="relative px-5 sm:px-8 pt-16 sm:pt-24 pb-20 sm:pb-28 bg-[#e9e4f7]">
      <div className="mx-auto max-w-5xl">
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
            {bundle.eyebrow}
          </motion.span>
          <motion.h2
            variants={fadeUp(0.05)}
            className="mt-5 font-[family-name:var(--font-display)] font-bold text-[clamp(1.9rem,4.2vw,3rem)] leading-[1.07] tracking-[-0.015em] text-[color:var(--color-ink-strong)]"
          >
            {bundle.name}
          </motion.h2>
          <motion.p
            variants={fadeUp(0.1)}
            className="mt-4 text-[15.5px] sm:text-[16.5px] leading-[1.6] text-[color:var(--color-ink-muted)]"
          >
            {bundle.pitch}
          </motion.p>
        </motion.div>

        {/* The card itself: deliverables left, price + CTA right */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: EASE, delay: 0.18 }}
          className="relative mt-12 rounded-[2rem] bg-white border border-[color:var(--color-line)] overflow-hidden shadow-[0_30px_80px_-30px_rgba(98,59,199,0.35),0_10px_30px_-15px_rgba(98,59,199,0.18)]"
        >
          {/* Top gradient accent */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-1"
            style={{ backgroundImage: "linear-gradient(90deg, #ff0096 0%, #8b5cf6 55%, #c4b5fd 100%)" }}
          />

          <div className="grid md:grid-cols-[1.35fr_1fr] gap-0">
            {/* Left: deliverables */}
            <div className="p-7 sm:p-9 md:p-10 md:border-r border-[color:var(--color-line)]">
              <div className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-[color:var(--color-purple)]">
                Wat zit erin
              </div>
              <ul className="mt-5 space-y-3">
                {bundle.includes.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, ease: EASE, delay: 0.25 + i * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <span
                      className="relative inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-white shadow-[0_6px_14px_-6px_rgba(98,59,199,0.5)]"
                      style={GRADIENT_TILE_STYLE}
                    >
                      <span aria-hidden className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-b from-white/30 via-white/0 to-white/0" />
                      <span aria-hidden className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-white/20" />
                      <Check className="relative h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-[14.5px] leading-snug text-[color:var(--color-ink)]">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Right: price + CTA */}
            <div className="bg-gradient-to-br from-[color:var(--color-purple-soft)]/45 to-white p-7 sm:p-9 md:p-10 flex flex-col justify-between gap-6">
              <div>
                <div className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-[color:var(--color-purple)]">
                  Prijs
                </div>
                <div className="mt-3 flex items-baseline gap-1.5">
                  <span className="text-[15px] font-medium text-[color:var(--color-ink-muted)]">
                    Vanaf
                  </span>
                  <span className="font-[family-name:var(--font-display)] font-bold text-[clamp(2.6rem,5vw,3.4rem)] leading-none tabular-nums text-[color:var(--color-ink-strong)]">
                    €{bundle.monthlyPrice}
                  </span>
                  <span className="text-[14px] font-medium text-[color:var(--color-ink-muted)]">
                    / maand
                  </span>
                </div>
                <p className="mt-2 text-[12.5px] text-[color:var(--color-ink-subtle)]">
                  Excl. BTW. Op basis van{" "}
                  <Link href="/prijzen" className="underline underline-offset-2 hover:text-[color:var(--color-purple)] transition-colors font-medium text-[color:var(--color-ink-muted)]">
                    {bundle.basedOnPlan}
                  </Link>
                  -abonnement. Schaalt mee naar Growth en Scale.
                </p>

                <div className="mt-5 flex items-center gap-2 text-[13px] font-semibold text-[color:var(--color-ink)]">
                  <Clock className="h-4 w-4 text-[color:var(--color-purple)]" strokeWidth={2.25} />
                  {bundle.timing}
                </div>
              </div>

              <div>
                <KennismakingButton variant="full" label={bundle.ctaLabel} />
                {bundle.trustLine && (
                  <div className="mt-3 flex items-center gap-1.5 text-[12px] text-[color:var(--color-ink-muted)]">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" strokeWidth={2.25} />
                    {bundle.trustLine}
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Pains: 'wat blijft er liggen' ───────────────── */

function PainsSection({ pains }: { pains: OplossingDetail["pains"] }) {
  return (
    <section className="relative px-5 sm:px-8 pt-16 sm:pt-24 pb-24 sm:pb-32 bg-white">
      <div className="mx-auto max-w-6xl">
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
            Klinkt herkenbaar
          </motion.span>
          <motion.h2
            variants={fadeUp(0.05)}
            className="mt-6 font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.07] tracking-[-0.02em] text-[color:var(--color-ink-strong)]"
          >
            Waar je waarschijnlijk tegenaan loopt.
          </motion.h2>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 gap-5 sm:gap-6">
          {pains.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: EASE, delay: 0.1 + i * 0.06 }}
              className="rounded-2xl bg-[color:var(--color-bg-elevated)] border border-[color:var(--color-line)] p-6 sm:p-7 shadow-[0_1px_2px_rgba(12,6,18,0.04)]"
            >
              <h3 className="font-[family-name:var(--font-display)] font-bold text-[19px] sm:text-[20px] leading-[1.2] tracking-[-0.005em] text-[color:var(--color-ink-strong)]">
                {p.title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.6] text-[color:var(--color-ink-muted)]">{p.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Proof: stats-cards (kopie van module-detail-page) ───── */

type StatsCardsWidget = Extract<ModuleWidgetData, { kind: "stats-cards" }>;

function ProofStatsSection({ widget }: { widget: StatsCardsWidget }) {
  return (
    <section className="relative px-5 sm:px-8 pt-16 sm:pt-24 pb-20 sm:pb-28 bg-white">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.span
            variants={fadeUp(0)}
            className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full border border-[color:var(--color-line)] bg-white text-[12.5px] font-medium text-[color:var(--color-ink-muted)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-purple)]" />
            {widget.eyebrow}
          </motion.span>
          <motion.h2
            variants={fadeUp(0.05)}
            className="mt-5 font-[family-name:var(--font-display)] font-bold text-[clamp(1.7rem,3.8vw,2.6rem)] leading-[1.1] tracking-[-0.015em] text-[color:var(--color-ink-strong)]"
          >
            {widget.title}
          </motion.h2>
          <motion.p
            variants={fadeUp(0.1)}
            className="mt-4 text-[15px] sm:text-[16px] leading-[1.6] text-[color:var(--color-ink-muted)]"
          >
            {widget.intro}
          </motion.p>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-3 gap-5 sm:gap-6">
          {widget.cards.map((card, i) => (
            <StatCard key={card.label} {...card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  label,
  prefix,
  value,
  decimals = 0,
  suffix,
  delta,
  descriptor,
  viz,
  trend = true,
  index,
}: StatsCardsWidget["cards"][number] & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: EASE, delay: 0.1 + index * 0.07 }}
      className="relative flex flex-col gap-2 rounded-2xl bg-[color:var(--color-bg-elevated)] border border-[color:var(--color-line)] p-6 sm:p-7 shadow-[0_1px_2px_rgba(12,6,18,0.04),0_18px_44px_-28px_rgba(12,6,18,0.16)]"
    >
      <span className="absolute top-5 right-5 inline-flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-[0_10px_22px_-8px_rgba(98,59,199,0.55)]" style={GRADIENT_TILE_STYLE}>
        <span aria-hidden className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-b from-white/30 via-white/0 to-white/0" />
        <span aria-hidden className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/20" />
        <StatCardViz viz={viz} value={value} />
      </span>
      <span className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-[color:var(--color-ink-muted)] pr-14">
        {label}
      </span>
      <span className="font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,4vw,2.6rem)] leading-none tabular-nums text-[color:var(--color-ink-strong)]">
        {prefix}
        <AnimatedStatNumber value={value} decimals={decimals} />
        {suffix}
      </span>
      {(delta || descriptor) && (trend ? (
        <span className="inline-flex items-center gap-1.5 text-[13px]">
          {delta && (
            <>
              <TrendingUp className="h-3.5 w-3.5 text-emerald-600" strokeWidth={2.5} />
              <span className="font-semibold text-emerald-600 tabular-nums">{delta}</span>
            </>
          )}
          {descriptor && <span className="text-[color:var(--color-ink-muted)]">{descriptor}</span>}
        </span>
      ) : (
        <span className="inline-flex items-center gap-1.5 text-[13px] text-[color:var(--color-ink-muted)]">
          {delta && <span className="font-semibold text-[color:var(--color-ink)] tabular-nums">{delta}</span>}
          {descriptor && <span>{descriptor}</span>}
        </span>
      ))}
    </motion.div>
  );
}

function StatCardViz({ viz, value }: { viz: "gauge" | "bars" | "spark" | "bolt"; value: number }) {
  if (viz === "gauge") return <SCGauge value={Math.min(100, value)} />;
  if (viz === "bars") return <SCBars />;
  if (viz === "spark") return <SCSpark />;
  return <Zap className="h-5 w-5 drop-shadow-[0_1px_2px_rgba(12,6,18,0.25)]" strokeWidth={2.5} fill="currentColor" />;
}

function SCGauge({ value }: { value: number }) {
  const reduce = useReducedMotion();
  const p = Math.max(0, Math.min(1, value / 100));
  return (
    <svg viewBox="0 0 24 16" className="h-5 w-6" fill="none">
      <path d="M3 14 A 9 9 0 0 1 21 14" stroke="rgba(255,255,255,0.3)" strokeWidth="2.4" strokeLinecap="round" />
      <motion.path
        d="M3 14 A 9 9 0 0 1 21 14"
        stroke="white"
        strokeWidth="2.4"
        strokeLinecap="round"
        initial={reduce ? false : { pathLength: 0 }}
        whileInView={{ pathLength: p }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1, ease: EASE, delay: 0.25 }}
      />
      <circle cx="12" cy="14" r="1.6" fill="white" />
    </svg>
  );
}

function SCBars() {
  const reduce = useReducedMotion();
  const hs = [4.5, 7.5, 6, 11];
  return (
    <svg viewBox="0 0 16 13" className="h-4 w-5" fill="white">
      {hs.map((h, i) => (
        <motion.rect
          key={i}
          x={i * 4 + 0.6}
          width="2.6"
          rx="1"
          initial={reduce ? false : { height: 0, y: 12 }}
          whileInView={{ height: h, y: 12 - h }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: EASE, delay: 0.25 + i * 0.09 }}
        />
      ))}
    </svg>
  );
}

function SCSpark() {
  const reduce = useReducedMotion();
  return (
    <svg viewBox="0 0 20 13" className="h-4 w-5" fill="none">
      <motion.path
        d="M1.5 11 L6 7.5 L10 9.5 L14 3.5 L18.5 1.8"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={reduce ? false : { pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.85, ease: EASE, delay: 0.3 }}
      />
      <motion.circle
        cx="18.5"
        cy="1.8"
        r="1.9"
        fill="white"
        initial={reduce ? false : { scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.3, ease: EASE, delay: 1.05 }}
      />
    </svg>
  );
}

function AnimatedStatNumber({ value, decimals = 0 }: { value: number; decimals?: number }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const mv = useMotionValue(reduce ? value : 0);
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView || reduce) {
      if (reduce) setDisplay(value);
      return;
    }
    mv.set(0);
    const controls = animate(mv, value, {
      duration: 1.2,
      ease: [0.23, 1, 0.32, 1],
      delay: 0.25,
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value, reduce]);

  const text = decimals > 0 ? display.toFixed(decimals).replace(".", ",") : Math.round(display).toLocaleString("nl-NL");
  return <span ref={ref}>{text}</span>;
}

/* ── Stappenplan met blonde mannetje ──────────────── */

function OplossingStepsSection({
  steps,
  illustration,
}: {
  steps: OplossingDetail["steps"];
  illustration?: string;
}) {
  return (
    <section className="relative px-5 sm:px-8 pt-16 sm:pt-24 pb-24 sm:pb-32 bg-[#e9e4f7]">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-14 items-start">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.span
              variants={fadeUp(0)}
              className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full border border-[color:var(--color-line)] bg-white text-[12.5px] font-medium text-[color:var(--color-ink-muted)]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-purple)]" />
              {steps.eyebrow}
            </motion.span>

            {illustration && (
              <motion.div
                variants={fadeUp(0.05)}
                className="mt-6 relative flex items-center justify-center lg:justify-start"
                aria-hidden
              >
                <Image
                  src={illustration}
                  alt=""
                  width={520}
                  height={520}
                  className="w-full max-w-[260px] lg:max-w-[280px] h-auto"
                />
              </motion.div>
            )}

            <motion.h2
              variants={fadeUp(0.1)}
              className="mt-6 font-[family-name:var(--font-display)] font-bold text-[clamp(1.9rem,4.2vw,3rem)] leading-[1.07] tracking-[-0.02em] text-[color:var(--color-ink-strong)]"
            >
              {steps.title}
            </motion.h2>
            <motion.p
              variants={fadeUp(0.15)}
              className="mt-5 text-[15.5px] leading-[1.6] text-[color:var(--color-ink-muted)]"
            >
              {steps.intro}
            </motion.p>
          </motion.div>

          <ol className="relative flex flex-col">
            {steps.items.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, ease: EASE, delay: 0.15 + i * 0.08 }}
                className="relative flex gap-5 pb-8 last:pb-0"
              >
                {i < steps.items.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute left-[19px] top-12 bottom-0 w-px bg-[color:var(--color-line)]"
                  />
                )}
                <span
                  className="relative z-10 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white font-[family-name:var(--font-display)] font-bold text-[14px] shadow-[0_10px_22px_-8px_rgba(98,59,199,0.55)]"
                  style={GRADIENT_TILE_STYLE}
                >
                  <span aria-hidden className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/30 via-white/0 to-white/0" />
                  <span aria-hidden className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/20" />
                  <span className="relative tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                </span>
                <div className="pt-1.5">
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-[18px] sm:text-[19px] leading-[1.25] tracking-[-0.005em] text-[color:var(--color-ink-strong)]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-[1.6] text-[color:var(--color-ink-muted)]">{step.body}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
