"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FORESTER_MODULES, type ForesterModule } from "@/lib/forester-os";

const EASE = [0.23, 1, 0.32, 1] as const;

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay } },
});

export function ForesterOsModules() {
  return (
    <section className="relative px-5 sm:px-8 pt-16 sm:pt-24 pb-24 sm:pb-32 bg-[#e9e4f7]">
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
            Acht modules
          </motion.span>
          <motion.h2
            variants={fadeUp(0.05)}
            className="mt-6 font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.07] tracking-[-0.02em] text-[color:var(--color-ink-strong)]"
          >
            Acht modules die elkaar versterken.
          </motion.h2>
          <motion.p
            variants={fadeUp(0.1)}
            className="mt-5 text-[16px] sm:text-[17px] leading-[1.6] text-[color:var(--color-ink-muted)]"
          >
            Geen versnipperde stack. Elke module deelt dezelfde data en dezelfde tone-of-voice (Q), zodat een bezoeker, lead of klant overal hetzelfde voelt.
          </motion.p>
        </motion.div>

        {/* Module grid */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {FORESTER_MODULES.map((m, i) => (
            <ModuleCard key={m.slug} module={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ModuleCard({ module: m, index }: { module: ForesterModule; index: number }) {
  const Icon = m.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: EASE, delay: 0.1 + index * 0.05 }}
      className="group relative flex flex-col rounded-2xl bg-[color:var(--color-bg-elevated)] border border-[color:var(--color-line)] p-6 sm:p-7 shadow-[0_1px_2px_rgba(12,6,18,0.04)] hover:shadow-[0_18px_44px_-22px_rgba(12,6,18,0.18)] hover:border-[color:var(--color-line-strong)] hover:-translate-y-[2px] transition-[box-shadow,border-color,transform] duration-300 ease-out"
    >
      <Link
        href={`/forester-os/${m.slug}`}
        className="absolute inset-0 z-10"
        aria-label={`Bekijk ${m.label}`}
      />

      <span
        className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-[0_14px_28px_-10px_rgba(98,59,199,0.55),0_2px_4px_rgba(98,59,199,0.18)] transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-[1.04]"
        style={{ backgroundImage: "linear-gradient(140deg, #ff0096 0%, #8b5cf6 55%, #c4b5fd 100%)" }}
      >
        {/* glass-like top highlight + inner ring for premium-icon-tile feel */}
        <span aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/30 via-white/0 to-white/0" />
        <span aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20" />
        <Icon className="relative h-6 w-6 drop-shadow-[0_1px_2px_rgba(12,6,18,0.25)]" strokeWidth={2} />
      </span>

      <h3 className="mt-5 font-[family-name:var(--font-display)] font-bold text-[18px] sm:text-[19px] leading-[1.25] tracking-[-0.005em] text-[color:var(--color-ink-strong)]">
        {m.label}
      </h3>
      <p className="mt-1 text-[12.5px] font-semibold text-[color:var(--color-purple)]">{m.tagline}</p>

      <p className="mt-3 text-[13.5px] leading-[1.6] text-[color:var(--color-ink-muted)] flex-1">{m.body}</p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {m.features.slice(0, 3).map((f) => (
          <span
            key={f}
            className="rounded-full bg-[color:var(--color-purple-soft)] px-2 py-0.5 text-[10.5px] font-medium text-[color:var(--color-purple)]"
          >
            {f}
          </span>
        ))}
      </div>

      <span className="relative z-20 mt-5 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[color:var(--color-ink)] group-hover:text-[color:var(--color-purple)] transition-colors">
        Bekijk module
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover:translate-x-0.5" strokeWidth={2.5} />
      </span>
    </motion.article>
  );
}
