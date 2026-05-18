"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CaseMedia } from "@/components/case-media";
import { CASE_STUDIES, type CaseStudy } from "@/lib/cases";

const EASE = [0.23, 1, 0.32, 1] as const;

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay } },
});

const featured = CASE_STUDIES[0];
const compactCases = CASE_STUDIES.slice(1, 5);

export function SectionCases() {
  return (
    <section className="relative px-5 sm:px-8 pt-16 sm:pt-24 pb-28 sm:pb-40 bg-[color:var(--color-bg)]">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.span variants={fadeUp(0)} className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-bg-elevated)] text-[12.5px] font-medium text-[color:var(--color-ink-muted)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-purple)]" />
            Klantverhalen
          </motion.span>
          <motion.h2 variants={fadeUp(0.05)} className="mt-6 font-[family-name:var(--font-display)] font-bold text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.06] tracking-[-0.02em] text-[color:var(--color-ink-strong)]">
            Wat we voor anderen bouwden.
          </motion.h2>
          <motion.p variants={fadeUp(0.1)} className="mt-5 text-[16px] sm:text-[17.5px] leading-[1.65] text-[color:var(--color-ink-muted)]">
            Hieronder een greep uit de websites die we recent live brachten, van een reserveringssysteem voor een restaurant tot een compliance-wizard voor een verzekeraar.
          </motion.p>
        </motion.div>

        {/* 1 featured left + up to 3 compact right */}
        <div className="mt-14 sm:mt-16 grid lg:grid-cols-[1.35fr_1fr] gap-6 lg:gap-8 items-stretch">
          <FeaturedCaseCard c={featured} />
          <div className="flex flex-col gap-4 sm:gap-5">
            {compactCases.map((c, i) => (
              <CompactCaseCard key={c.slug} c={c} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedCaseCard({ c }: { c: CaseStudy }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
      className="group relative flex flex-col rounded-[2rem] bg-[color:var(--color-bg-elevated)] border border-[color:var(--color-line)] overflow-hidden shadow-[0_18px_44px_-22px_rgba(12,6,18,0.16)] hover:shadow-[0_30px_64px_-24px_rgba(12,6,18,0.24)] transition-shadow duration-300 ease-out"
    >
      <Link href={`/cases/${c.slug}`} className="absolute inset-0 z-10" aria-label={`Lees de case van ${c.client}`} />
      <div className="relative aspect-[16/10] overflow-hidden">
        <CaseMedia c={c} sizes="(max-width: 1024px) 100vw, 640px" className="transition-transform duration-[700ms] ease-out group-hover:scale-[1.04]" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[rgba(12,6,18,0.5)] via-[rgba(12,6,18,0.12)] to-transparent" />
        <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--color-purple)] text-white px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.12em] shadow-[0_8px_20px_-8px_rgba(98,59,199,0.6)]">
            Nieuwste case
          </span>
          {c.liveStatus === "coming-soon" && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-sm text-[color:var(--color-purple)] px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.12em] shadow-[0_8px_20px_-8px_rgba(12,6,18,0.35)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-purple)]" />
            Binnenkort live
          </span>
          )}
        </div>
        <div className="absolute bottom-4 left-4 inline-flex items-center gap-2.5 rounded-full bg-white/95 backdrop-blur-sm pl-1.5 pr-3.5 py-1.5 shadow-[0_8px_24px_-10px_rgba(12,6,18,0.4)]">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[color:var(--color-bg-muted)] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={c.logo} alt="" className="h-5 w-5 object-contain" />
          </span>
          <span className="text-[13px] font-semibold text-[color:var(--color-ink)]">{c.client}</span>
          <span className="text-[11.5px] text-[color:var(--color-ink-subtle)]">{c.sector}</span>
        </div>
      </div>
      <div className="p-6 sm:p-8 flex-1 flex flex-col">
        <h3 className="font-[family-name:var(--font-display)] font-bold text-[19px] sm:text-[24px] leading-[1.2] tracking-[-0.01em] text-[color:var(--color-ink-strong)]">
          {c.headlineLead} <span className="text-[color:var(--color-purple)]">{c.headlineHighlight}</span>
        </h3>
        <p className="mt-3 text-[13.5px] sm:text-[14px] leading-[1.6] text-[color:var(--color-ink-muted)] line-clamp-3">{c.intro}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {c.pillars.map((p) => (
            <span key={p} className="rounded-full bg-[color:var(--color-purple-soft)] px-2.5 py-1 text-[11.5px] font-medium text-[color:var(--color-purple)]">{p}</span>
          ))}
        </div>
        <span className="mt-6 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[color:var(--color-ink)] group-hover:text-[color:var(--color-purple)] transition-colors">
          Lees verder
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover:translate-x-0.5" strokeWidth={2.5} />
        </span>
      </div>
    </motion.article>
  );
}

function CompactCaseCard({ c, index }: { c: CaseStudy; index: number }) {
  const isLogoTile = Boolean(c.thumbBg);
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: EASE, delay: 0.2 + index * 0.08 }}
      className="group relative flex items-center gap-4 rounded-2xl bg-[color:var(--color-bg-elevated)] border border-[color:var(--color-line)] p-3 sm:p-4 shadow-[0_1px_2px_rgba(12,6,18,0.04)] hover:shadow-[0_18px_40px_-22px_rgba(12,6,18,0.18)] hover:border-[color:var(--color-line-strong)] transition-[box-shadow,border-color,transform] duration-300 ease-out hover:-translate-y-[2px]"
    >
      <Link href={`/cases/${c.slug}`} className="absolute inset-0" aria-label={`Lees de case van ${c.client}`} />
      {/* Thumbnail */}
      <div
        className="relative shrink-0 h-24 w-24 sm:h-28 sm:w-28 rounded-xl overflow-hidden"
        style={{ backgroundColor: c.thumbBg ?? "var(--color-bg-muted)" }}
      >
        <Image
          src={isLogoTile ? c.logo : c.img}
          alt={c.imgAlt}
          fill
          sizes="(max-width: 640px) 96px, 112px"
          className={isLogoTile ? "object-contain p-3" : "object-cover transition-transform duration-500 ease-out group-hover:scale-105"}
        />
      </div>
      {/* Copy */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="text-[12.5px] font-semibold text-[color:var(--color-ink)] truncate">{c.client}</span>
          <span className="text-[11px] text-[color:var(--color-ink-subtle)] truncate">{c.sector}</span>
        </div>
        <h3 className="mt-1 font-[family-name:var(--font-display)] font-bold text-[14.5px] sm:text-[15.5px] leading-[1.25] tracking-[-0.005em] text-[color:var(--color-ink-strong)] group-hover:text-[color:var(--color-purple)] transition-colors line-clamp-2">
          {c.headlineLead} <span className="text-[color:var(--color-purple)]">{c.headlineHighlight}</span>
        </h3>
        <span className="mt-2 inline-flex items-center gap-1.5 text-[12px] font-semibold text-[color:var(--color-ink-muted)] group-hover:text-[color:var(--color-purple)] transition-colors">
          Lees verder
          <ArrowRight className="h-3 w-3 transition-transform duration-200 ease-out group-hover:translate-x-0.5" strokeWidth={2.5} />
        </span>
      </div>
    </motion.article>
  );
}
