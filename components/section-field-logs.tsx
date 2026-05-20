"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FieldLogPostit } from "@/components/field-log-postit";
import { FIELD_LOGS } from "@/lib/field-logs";

const EASE = [0.23, 1, 0.32, 1] as const;
const LATEST = FIELD_LOGS.slice(0, 2);

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay } },
});

export function SectionFieldLogs() {
  return (
    <section className="relative px-5 sm:px-8 pt-16 sm:pt-24 pb-28 sm:pb-40 bg-[color:var(--color-bg)]">
      <div className="mx-auto max-w-6xl">
        {/* Heading + link */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
        >
          <div className="max-w-2xl">
            <motion.span variants={fadeUp(0)} className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-bg-elevated)] text-[12.5px] font-medium text-[color:var(--color-ink-muted)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-purple)]" />
              Field Logs
            </motion.span>
            <motion.h2 variants={fadeUp(0.05)} className="mt-6 font-[family-name:var(--font-display)] font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.06] tracking-[-0.02em] text-[color:var(--color-ink-strong)]">
              Bevindingen uit de praktijk.
            </motion.h2>
            <motion.p variants={fadeUp(0.1)} className="mt-4 text-[16px] sm:text-[17px] leading-[1.6] text-[color:var(--color-ink-muted)]">
              In plaats van theorie uit een marketingblog vertellen we wat we deze week écht hebben gebouwd, waar we tegenaan liepen en hoe we het oplosten. Meestal met een korreltje zout en hier en daar wat humor.
            </motion.p>
          </div>
          <motion.div variants={fadeUp(0.15)} className="shrink-0">
            <Link href="/field-logs" className="btn-press group inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full bg-[color:var(--color-bg-elevated)] border border-[color:var(--color-line-strong)] hover:border-[color:var(--color-purple)]/40 text-[color:var(--color-ink)] hover:text-[color:var(--color-purple)] text-[13.5px] font-semibold transition-colors">
              Alle field logs
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[color:var(--color-bg-muted)] transition-transform duration-200 ease-out group-hover:translate-x-0.5">
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Latest 2 als lijntjes-notes + illustration tile als 3e cell */}
        <div className="mt-12 sm:mt-14 grid md:grid-cols-3 gap-6 sm:gap-7 items-start">
          {LATEST.map((log, i) => (
            <motion.div
              key={log.slug}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, ease: EASE, delay: 0.15 + i * 0.08 }}
              className="will-change-[transform,opacity]"
            >
              <FieldLogPostit log={log} index={i} />
            </motion.div>
          ))}

          {/* Digital Writing illustration in the third slot — no card chrome */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, ease: EASE, delay: 0.31 }}
            className="relative flex items-center justify-center min-h-[280px]"
            aria-hidden
          >
            <Image
              src="/illustrations/digital-writing.svg"
              alt=""
              width={520}
              height={520}
              className="w-full max-w-[340px] h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
