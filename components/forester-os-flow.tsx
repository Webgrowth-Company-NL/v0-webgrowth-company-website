"use client";

import { motion } from "framer-motion";
import { FORESTER_FLOW, FORESTER_MODULES } from "@/lib/forester-os";

const EASE = [0.23, 1, 0.32, 1] as const;

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay } },
});

function moduleLabel(slug: string) {
  return FORESTER_MODULES.find((m) => m.slug === slug)?.short ?? slug;
}

export function ForesterOsFlow() {
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
            Eén stroom
          </motion.span>
          <motion.h2
            variants={fadeUp(0.05)}
            className="mt-6 font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.07] tracking-[-0.02em] text-[color:var(--color-ink-strong)]"
          >
            Van bezoek tot vaste klant.
          </motion.h2>
          <motion.p
            variants={fadeUp(0.1)}
            className="mt-5 text-[16px] sm:text-[17px] leading-[1.6] text-[color:var(--color-ink-muted)]"
          >
            Eén database, één tone-of-voice, één login. Zo werken de modules samen door je hele funnel, in plaats van elk op een eigen eiland.
          </motion.p>
        </motion.div>

        {/* Flow steps */}
        <div className="mt-14 grid gap-5 sm:gap-6 lg:grid-cols-4">
          {FORESTER_FLOW.map((step, i) => (
            <motion.article
              key={step.phase}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, ease: EASE, delay: 0.15 + i * 0.08 }}
              className="relative rounded-2xl bg-[color:var(--color-bg)] border border-[color:var(--color-line)] p-6 sm:p-7 shadow-[0_1px_2px_rgba(12,6,18,0.04)]"
            >
              {/* Connector line on lg+ */}
              {i < FORESTER_FLOW.length - 1 && (
                <span
                  aria-hidden
                  className="hidden lg:block absolute top-9 -right-[14px] z-10 h-px w-7 bg-gradient-to-r from-[color:var(--color-purple)]/45 to-[color:var(--color-purple)]/0"
                />
              )}

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
      </div>
    </section>
  );
}
