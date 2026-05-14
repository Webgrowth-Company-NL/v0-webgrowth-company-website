"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, Star } from "lucide-react";
import { SectionCta } from "@/components/section-cta";
import { SectionFaq } from "@/components/section-faq";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WaveDivider } from "@/components/wave-divider";
import {
  FORESTER_MODULES,
  MODULE_DETAILS,
  type ForesterModule,
} from "@/lib/forester-os";

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

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <ModuleHero module={m} detail={detail} />
        <WaveDivider top={CREAM} bottom={LAVENDER} />
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
}: {
  module: ForesterModule;
  detail: (typeof MODULE_DETAILS)[string];
}) {
  const Icon = m.icon;
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
          <span className="text-[color:var(--color-ink)] font-semibold">{m.label}</span>
        </motion.span>

        <motion.div
          variants={fadeUp(0.06)}
          className="mt-7 flex items-center justify-center"
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
          className="mt-6 font-[family-name:var(--font-display)] font-bold text-[clamp(2.3rem,5.3vw,4.2rem)] leading-[1.05] tracking-[-0.022em] text-[color:var(--color-ink-strong)]"
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
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
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
            href="/prijzen"
            className="btn-press group inline-flex items-center gap-2 pl-6 pr-2 py-2.5 rounded-full bg-white hover:bg-[color:var(--color-purple-soft)] border border-[color:var(--color-line-strong)] hover:border-[color:var(--color-purple)]/35 text-[color:var(--color-ink)] hover:text-[color:var(--color-purple)] text-[15px] font-semibold shadow-[0_1px_2px_rgba(12,6,18,0.04)] hover:shadow-[0_10px_24px_-10px_rgba(98,59,199,0.3)]"
          >
            Bekijk de prijzen
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
