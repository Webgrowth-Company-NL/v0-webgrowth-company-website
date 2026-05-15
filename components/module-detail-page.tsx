"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { animate, motion, useInView, useMotionValue, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, Gauge as GaugeIcon, Star, TrendingUp, Zap } from "lucide-react";
import { HeroDashboard } from "@/components/hero-dashboard";
import { SectionCta } from "@/components/section-cta";
import { SectionFaq } from "@/components/section-faq";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WaveDivider } from "@/components/wave-divider";
import {
  FORESTER_MODULES,
  MODULE_DETAILS,
  type ForesterModule,
  type ModuleWidgetData,
} from "@/lib/forester-os";

const STEPS_ILLUSTRATIONS: Record<string, string> = {
  website: "/illustrations/digital-writing.svg",
  "lead-engine": "/illustrations/digital-inspiration.svg",
  "sales-engine": "/illustrations/biz-finance.svg",
  crm: "/illustrations/communication.svg",
  seo: "/illustrations/business-growth.svg",
  ai: "/illustrations/innovation-ideas.svg",
  "content-publisher": "/illustrations/take-on-the-project.svg",
  nieuwsbrieven: "/illustrations/multitasking.svg",
  advertenties: "/illustrations/growth.svg",
};

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
  backgroundImage:
    "linear-gradient(140deg, #ff0096 0%, #8b5cf6 55%, #c4b5fd 100%)",
} as const;

export function ModuleDetailPage({ slug }: { slug: string }) {
  const m = FORESTER_MODULES.find((x) => x.slug === slug);
  const detail = MODULE_DETAILS[slug];
  if (!m || !detail) return null;
  const related = (detail.relatedSlugs ?? [])
    .map((slug) => FORESTER_MODULES.find((mod) => mod.slug === slug))
    .filter((x): x is ForesterModule => !!x);

  const heroWidget = detail.widgets?.find(
    (w): w is Extract<ModuleWidgetData, { kind: "hero-dashboard" }> =>
      w.kind === "hero-dashboard",
  );
  const sectionWidgets = (detail.widgets ?? []).filter(
    (w) => w.kind !== "hero-dashboard",
  );
  const hasSectionWidgets = sectionWidgets.length > 0;
  const hasSteps = !!detail.steps;

  // Section rhythm:
  //   hero (cream)
  //   [if widgets] → lavender PSI
  //   [if steps]   → white steps
  //   features (lavender) → related (white) → faq (lavender) → cta (deep)
  // The wave directly above features depends on what comes before it.
  const colorBeforeFeatures = hasSteps ? WHITE : hasSectionWidgets ? LAVENDER : CREAM;

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <ModuleHero module={m} detail={detail} heroWidget={heroWidget} />
        {hasSectionWidgets && (
          <>
            <WaveDivider top={CREAM} bottom={LAVENDER} />
            {sectionWidgets.map((w, i) => (
              <ModuleWidgetSection key={`${w.kind}-${i}`} widget={w} />
            ))}
          </>
        )}
        {hasSteps && (
          <>
            <WaveDivider
              top={hasSectionWidgets ? LAVENDER : CREAM}
              bottom={WHITE}
            />
            <ModuleStepsSection
              steps={detail.steps!}
              illustration={STEPS_ILLUSTRATIONS[slug]}
            />
          </>
        )}
        {colorBeforeFeatures !== LAVENDER && (
          <WaveDivider top={colorBeforeFeatures} bottom={LAVENDER} />
        )}
        <ModuleFeatures module={m} detail={detail} />
        <WaveDivider top={LAVENDER} bottom={WHITE} />
        <ModuleRelated current={m} related={related} />
        <WaveDivider top={WHITE} bottom={LAVENDER} />
        <SectionFaq
          items={detail.faq}
          eyebrow={`Vragen over ${m.label}`}
          title={`Wat klanten over ${m.label} vragen.`}
          intro={
            <>
              Andere vraag?{" "}
              <a
                href="/contact"
                className="font-semibold text-[color:var(--color-purple)] hover:text-[color:var(--color-purple-hover)] transition-colors underline underline-offset-2"
              >
                Boek een kennismaking
              </a>
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

function ModuleHero({
  module: m,
  detail,
  heroWidget,
}: {
  module: ForesterModule;
  detail: (typeof MODULE_DETAILS)[string];
  heroWidget?: Extract<ModuleWidgetData, { kind: "hero-dashboard" }>;
}) {
  const Icon = m.icon;
  const split = !!heroWidget;
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
          Forester OS
          <span className="text-[color:var(--color-ink-faint)]">·</span>
          <span className="text-[color:var(--color-ink)] font-semibold">{m.label}</span>
        </motion.span>

        <motion.div
          variants={fadeUp(0.06)}
          className={`mt-7 flex items-center ${split ? "justify-start" : "justify-center"}`}
        >
          <span
            className="relative inline-flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-[0_18px_36px_-10px_rgba(98,59,199,0.55),0_2px_4px_rgba(98,59,199,0.18)]"
            style={GRADIENT_TILE_STYLE}
          >
            <span aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/30 via-white/0 to-white/0" />
            <span aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20" />
            <Icon className="relative h-7 w-7 drop-shadow-[0_1px_2px_rgba(12,6,18,0.25)]" strokeWidth={2} />
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp(0.14)}
          className={`mt-6 font-[family-name:var(--font-display)] font-bold leading-[1.05] tracking-[-0.022em] text-[color:var(--color-ink-strong)] ${
            split
              ? "text-[clamp(2.1rem,4.6vw,3.6rem)]"
              : "text-[clamp(2.3rem,5.3vw,4.2rem)]"
          }`}
        >
          {detail.heroLead}{" "}
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
          <Link
            href="/contact"
            className="btn-press group inline-flex items-center gap-2 pl-6 pr-2 py-2.5 rounded-full bg-white hover:bg-[color:var(--color-purple-soft)] border border-[color:var(--color-line-strong)] hover:border-[color:var(--color-purple)]/35 text-[color:var(--color-ink)] hover:text-[color:var(--color-purple)] text-[15px] font-semibold shadow-[0_1px_2px_rgba(12,6,18,0.04)] hover:shadow-[0_10px_24px_-10px_rgba(98,59,199,0.3)]"
          >
            Boek een kennismaking
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--color-ink-strong)]/6 transition-[transform,background-color] duration-200 ease-out group-hover:translate-x-0.5 group-hover:scale-105 group-hover:bg-[color:var(--color-purple)]/15">
              <ArrowRight className="h-4 w-4 text-[color:var(--color-ink)] transition-colors duration-200 ease-out group-hover:text-[color:var(--color-purple)]" strokeWidth={2.5} />
            </span>
          </Link>
        </motion.div>

        <motion.div
          variants={fadeUp(0.38)}
          className="mt-8 inline-flex items-center gap-2"
        >
          <span className="flex gap-[2px]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-[color:var(--color-amber)] text-[color:var(--color-amber)]" strokeWidth={0} />
            ))}
          </span>
          <span className="text-[14px] font-semibold text-[color:var(--color-ink)] tabular-nums">9,4</span>
          <span className="text-[13px] text-[color:var(--color-ink-muted)]">·</span>
          <span className="text-[13px] text-[color:var(--color-ink-muted)]">
            <span className="font-semibold text-[color:var(--color-ink)]">227</span> tevreden klanten
          </span>
        </motion.div>
        </motion.div>

        {split && heroWidget && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
            className="relative h-[520px] sm:h-[560px] lg:h-[580px] mx-auto w-full max-w-[480px] lg:max-w-none"
          >
            <HeroDashboard view={heroWidget.view} />
          </motion.div>
        )}
      </div>
    </section>
  );
}

/* ── Features detailed ───────────────────────────── */

function ModuleFeatures({
  module: m,
  detail,
}: {
  module: ForesterModule;
  detail: (typeof MODULE_DETAILS)[string];
}) {
  return (
    <section className="relative px-5 sm:px-8 pt-16 sm:pt-24 pb-24 sm:pb-32 bg-[#e9e4f7]">
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
            Wat zit erbij
          </motion.span>
          <motion.h2
            variants={fadeUp(0.05)}
            className="mt-6 font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.07] tracking-[-0.02em] text-[color:var(--color-ink-strong)]"
          >
            {m.label} bestaat uit deze onderdelen.
          </motion.h2>
          <motion.p
            variants={fadeUp(0.1)}
            className="mt-5 text-[16px] sm:text-[17px] leading-[1.6] text-[color:var(--color-ink-muted)]"
          >
            Niet één black-box-knop, maar concrete onderdelen die elk een werkbaar stuk werk doen.
          </motion.p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 gap-5 sm:gap-6">
          {detail.featuresDetailed.map((f, i) => (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: EASE, delay: 0.1 + i * 0.06 }}
              className="rounded-2xl bg-[color:var(--color-bg-elevated)] border border-[color:var(--color-line)] p-6 sm:p-7 shadow-[0_1px_2px_rgba(12,6,18,0.04)]"
            >
              <span
                className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-[0_10px_22px_-8px_rgba(98,59,199,0.55),0_2px_3px_rgba(98,59,199,0.18)]"
                style={GRADIENT_TILE_STYLE}
              >
                <span aria-hidden className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-b from-white/30 via-white/0 to-white/0" />
                <span aria-hidden className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/20" />
                <Check className="relative h-5 w-5 drop-shadow-[0_1px_2px_rgba(12,6,18,0.25)]" strokeWidth={2.5} />
              </span>
              <h3 className="mt-5 font-[family-name:var(--font-display)] font-bold text-[19px] sm:text-[20px] leading-[1.2] tracking-[-0.005em] text-[color:var(--color-ink-strong)]">
                {f.title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.6] text-[color:var(--color-ink-muted)]">{f.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Related modules ─────────────────────────────── */

function ModuleRelated({
  current,
  related,
}: {
  current: ForesterModule;
  related: ForesterModule[];
}) {
  if (related.length === 0) return null;
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
            Werkt samen met
          </motion.span>
          <motion.h2
            variants={fadeUp(0.05)}
            className="mt-6 font-[family-name:var(--font-display)] font-bold text-[clamp(1.9rem,4.2vw,3rem)] leading-[1.07] tracking-[-0.02em] text-[color:var(--color-ink-strong)]"
          >
            Modules die {current.label} versterken.
          </motion.h2>
          <motion.p
            variants={fadeUp(0.1)}
            className="mt-5 text-[15.5px] sm:text-[16.5px] leading-[1.6] text-[color:var(--color-ink-muted)]"
          >
            Forester OS is geen losse stack. Deze modules delen dezelfde data als {current.label} en geven hem extra hefboom.
          </motion.p>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {related.map((rel, i) => {
            const RelIcon = rel.icon;
            return (
              <motion.article
                key={rel.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.1 + i * 0.06 }}
                className="group relative flex items-center gap-4 rounded-2xl bg-[color:var(--color-bg-elevated)] border border-[color:var(--color-line)] p-5 shadow-[0_1px_2px_rgba(12,6,18,0.04)] hover:shadow-[0_18px_40px_-22px_rgba(12,6,18,0.18)] hover:border-[color:var(--color-line-strong)] hover:-translate-y-[2px] transition-[box-shadow,border-color,transform] duration-300 ease-out"
              >
                <Link
                  href={`/forester-os/${rel.slug}`}
                  className="absolute inset-0"
                  aria-label={`Bekijk ${rel.label}`}
                />
                <span
                  className="relative inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white shadow-[0_10px_20px_-8px_rgba(98,59,199,0.5)]"
                  style={GRADIENT_TILE_STYLE}
                >
                  <span aria-hidden className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-b from-white/30 via-white/0 to-white/0" />
                  <span aria-hidden className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/20" />
                  <RelIcon className="relative h-5 w-5" strokeWidth={2} />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-[15.5px] leading-[1.25] text-[color:var(--color-ink-strong)] group-hover:text-[color:var(--color-purple)] transition-colors">
                    {rel.label}
                  </h3>
                  <p className="mt-1 text-[12.5px] leading-snug text-[color:var(--color-ink-muted)] line-clamp-2">{rel.tagline}</p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-[color:var(--color-ink-subtle)] group-hover:text-[color:var(--color-purple)] transition-[transform,color] duration-200 ease-out group-hover:translate-x-0.5" strokeWidth={2.5} />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── PageSpeed-widget ─────────────────────────────── */

function ModuleWidgetSection({ widget }: { widget: ModuleWidgetData }) {
  if (widget.kind === "pagespeed") {
    return <PageSpeedSection metrics={widget.metrics} />;
  }
  if (widget.kind === "stats-cards") {
    return <StatsCardsSection widget={widget} />;
  }
  return null;
}

type StatsCardsWidget = Extract<ModuleWidgetData, { kind: "stats-cards" }>;

function StatsCardsSection({ widget }: { widget: StatsCardsWidget }) {
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
      {(delta || descriptor) && (
        trend ? (
          <span className="inline-flex items-center gap-1.5 text-[13px]">
            {delta && (
              <>
                <TrendingUp className="h-3.5 w-3.5 text-emerald-600" strokeWidth={2.5} />
                <span className="font-semibold text-emerald-600 tabular-nums">{delta}</span>
              </>
            )}
            {descriptor && (
              <span className="text-[color:var(--color-ink-muted)]">{descriptor}</span>
            )}
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-[13px] text-[color:var(--color-ink-muted)]">
            {delta && <span className="font-semibold text-[color:var(--color-ink)] tabular-nums">{delta}</span>}
            {descriptor && <span>{descriptor}</span>}
          </span>
        )
      )}
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

  const text = decimals > 0
    ? display.toFixed(decimals).replace(".", ",")
    : Math.round(display).toLocaleString("nl-NL");
  return <span ref={ref}>{text}</span>;
}

function PageSpeedSection({ metrics }: { metrics: { label: string; score: number }[] }) {
  return (
    <section className="relative px-5 sm:px-8 pt-16 sm:pt-24 pb-20 sm:pb-28 bg-[#e9e4f7]">
      <div className="mx-auto max-w-4xl">
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
            <GaugeIcon className="h-3.5 w-3.5 text-[color:var(--color-purple)]" strokeWidth={2.25} />
            Google PageSpeed Insights
          </motion.span>
          <motion.h2
            variants={fadeUp(0.05)}
            className="mt-5 font-[family-name:var(--font-display)] font-bold text-[clamp(1.7rem,3.8vw,2.6rem)] leading-[1.1] tracking-[-0.015em] text-[color:var(--color-ink-strong)]"
          >
            Elke nieuwe site, opgeleverd met topscores.
          </motion.h2>
          <motion.p
            variants={fadeUp(0.1)}
            className="mt-4 text-[15px] sm:text-[16px] leading-[1.6] text-[color:var(--color-ink-muted)]"
          >
            Snelheid, toegankelijkheid, best practices en SEO, vier signalen waarop Google websites afrekent. We meten ze vóór livegang en monitoren ze maandelijks.
          </motion.p>
        </motion.div>

        {/* Gedeelde gradient-defs voor alle gauges */}
        <svg width="0" height="0" aria-hidden className="absolute">
          <defs>
            <linearGradient id="psi-gauge-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff0096" />
              <stop offset="55%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#c4b5fd" />
            </linearGradient>
          </defs>
        </svg>

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {metrics.map((m, i) => (
            <PageSpeedGauge key={m.label} label={m.label} score={m.score} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PageSpeedGauge({ label, score, delay }: { label: string; score: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState<number>(reduce ? score : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, score, {
      duration: 1.2,
      ease: [0.23, 1, 0.32, 1],
      delay: delay + 0.15,
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, score, delay, reduce]);

  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - score / 100);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: EASE, delay }}
      className="flex flex-col items-center"
    >
      <div className="relative h-28 w-28 sm:h-32 sm:w-32">
        <svg viewBox="0 0 120 120" className="absolute inset-0 w-full h-full -rotate-90">
          <circle cx="60" cy="60" r={radius} stroke="rgba(98,59,199,0.12)" strokeWidth="9" fill="none" />
          <motion.circle
            cx="60"
            cy="60"
            r={radius}
            stroke="url(#psi-gauge-gradient)"
            strokeWidth="9"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={inView ? { strokeDashoffset: offset } : {}}
            transition={{ duration: 1.2, ease: EASE, delay: delay + 0.15 }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-[family-name:var(--font-display)] font-bold text-[34px] sm:text-[40px] leading-none tabular-nums text-[color:var(--color-ink-strong)]">
            {Math.round(display)}
          </span>
        </div>
      </div>
      <span className="mt-3 text-[11px] sm:text-[11.5px] font-semibold uppercase tracking-[0.14em] text-[color:var(--color-ink-muted)]">{label}</span>
    </motion.div>
  );
}

/* ── Stappenplan: zo werkt het voor de klant ──────── */

function ModuleStepsSection({
  steps,
  illustration,
}: {
  steps: NonNullable<(typeof MODULE_DETAILS)[string]["steps"]>;
  illustration?: string;
}) {
  return (
    <section className="relative px-5 sm:px-8 pt-16 sm:pt-24 pb-24 sm:pb-32 bg-white">
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
              className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-bg-elevated)] text-[12.5px] font-medium text-[color:var(--color-ink-muted)]"
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
