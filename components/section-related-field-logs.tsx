"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FieldLogPostit } from "@/components/field-log-postit";
import { FIELD_LOGS } from "@/lib/field-logs";

const EASE = [0.23, 1, 0.32, 1] as const;

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay } },
});

/**
 * Toont gerelateerde field logs voor een Forester-module als notitieblaadjes,
 * met de digital-writing illustratie als visueel anker. Rendert niets zodra
 * de relatedFieldLogs-array leeg of ongedefinieerd is.
 */
export function SectionRelatedFieldLogs({
  slugs,
  moduleLabel,
}: {
  slugs?: string[];
  moduleLabel: string;
}) {
  const logs = (slugs ?? [])
    .map((slug) => FIELD_LOGS.find((l) => l.slug === slug))
    .filter((l): l is (typeof FIELD_LOGS)[number] => Boolean(l));

  if (logs.length === 0) return null;

  return (
    <section className="relative px-5 sm:px-8 pt-16 sm:pt-24 pb-20 sm:pb-28 bg-[color:var(--color-bg)]">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="max-w-2xl"
        >
          <motion.span
            variants={fadeUp(0)}
            className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-bg-elevated)] text-[12.5px] font-medium text-[color:var(--color-ink-muted)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-purple)]" />
            Uit de praktijk
          </motion.span>
          <motion.h2
            variants={fadeUp(0.05)}
            className="mt-6 font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,4.4vw,3rem)] leading-[1.08] tracking-[-0.02em] text-[color:var(--color-ink-strong)]"
          >
            Hoe wij {moduleLabel.toLowerCase()} inzetten bij echte klanten.
          </motion.h2>
          <motion.p
            variants={fadeUp(0.1)}
            className="mt-4 text-[15.5px] sm:text-[16.5px] leading-[1.65] text-[color:var(--color-ink-muted)]"
          >
            Geen feature-lijst maar de echte beslissingen: waarom we het zo bouwden, wat de klant ermee oploste, wat we onderweg geleerd hebben.
          </motion.p>
        </motion.div>

        <div className="mt-10 sm:mt-12 grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-center">
          {/* Post-its */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            className="flex flex-col gap-5 sm:gap-6"
          >
            {logs.map((log, i) => (
              <motion.div
                key={log.slug}
                variants={fadeUp(0.05 + i * 0.05)}
                className="will-change-[transform,opacity]"
              >
                <FieldLogPostit log={log} index={i} />
              </motion.div>
            ))}

            <motion.div variants={fadeUp(0.05 + logs.length * 0.05)}>
              <Link
                href="/field-logs"
                className="btn-press group inline-flex items-center gap-2 pl-5 pr-2 py-2 mt-2 rounded-full bg-[color:var(--color-bg-elevated)] border border-[color:var(--color-line-strong)] hover:border-[color:var(--color-purple)]/40 text-[color:var(--color-ink)] hover:text-[color:var(--color-purple)] text-[13.5px] font-semibold transition-colors"
              >
                Alle field logs
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[color:var(--color-bg-muted)] transition-transform duration-200 ease-out group-hover:translate-x-0.5">
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
            className="relative flex items-center justify-center min-h-[300px] lg:min-h-[420px] order-first lg:order-last"
            aria-hidden
          >
            <Image
              src="/illustrations/digital-writing.svg"
              alt=""
              width={520}
              height={520}
              className="w-full max-w-[300px] lg:max-w-[380px] h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
