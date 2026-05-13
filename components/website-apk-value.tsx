"use client";

import { motion } from "framer-motion";
import {
  Coins,
  Gauge,
  Search,
  ShieldCheck,
  Users,
  Wand2,
  type LucideIcon,
} from "lucide-react";
import { APK_FEATURES, APK_STEPS, type ApkIconKey } from "@/lib/website-apk";

const EASE = [0.23, 1, 0.32, 1] as const;

const ICONS: Record<ApkIconKey, LucideIcon> = {
  gauge: Gauge,
  search: Search,
  users: Users,
  shield: ShieldCheck,
  wand: Wand2,
  coins: Coins,
};

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay } },
});

export function WebsiteApkValue() {
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
            Wat je krijgt
          </motion.span>
          <motion.h2
            variants={fadeUp(0.05)}
            className="mt-6 font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.07] tracking-[-0.02em] text-[color:var(--color-ink-strong)]"
          >
            Geen scorelijstje. Een echt rapport.
          </motion.h2>
          <motion.p
            variants={fadeUp(0.1)}
            className="mt-5 text-[16px] sm:text-[17px] leading-[1.6] text-[color:var(--color-ink-muted)]"
          >
            We checken niet alleen techniek. Op basis van je URL, je antwoorden en een AI-analyse krijg je een eerlijk beeld van wat je site nu doet, wat er beter kan en wat dat zou opleveren.
          </motion.p>
        </motion.div>

        {/* Features grid */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {APK_FEATURES.map((f, i) => {
            const Icon = ICONS[f.icon];
            return (
              <motion.article
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease: EASE, delay: 0.1 + i * 0.06 }}
                className="rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-bg-elevated)] p-6 sm:p-7 shadow-[0_1px_2px_rgba(12,6,18,0.04)] hover:shadow-[0_18px_44px_-22px_rgba(12,6,18,0.18)] hover:border-[color:var(--color-line-strong)] transition-[box-shadow,border-color] duration-300 ease-out"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--color-purple-tint)] text-[color:var(--color-purple)]">
                  <Icon className="h-5 w-5" strokeWidth={2.25} />
                </span>
                <h3 className="mt-5 font-[family-name:var(--font-display)] font-bold text-[18px] sm:text-[19px] leading-[1.25] tracking-[-0.005em] text-[color:var(--color-ink-strong)]">
                  {f.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-[color:var(--color-ink-muted)]">{f.body}</p>
              </motion.article>
            );
          })}
        </div>

        {/* How it works */}
        <div className="mt-24 grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-14 items-start">
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
              Hoe het werkt
            </motion.span>
            <motion.h2
              variants={fadeUp(0.05)}
              className="mt-6 font-[family-name:var(--font-display)] font-bold text-[clamp(1.9rem,4.2vw,3rem)] leading-[1.07] tracking-[-0.02em] text-[color:var(--color-ink-strong)]"
            >
              In drie stappen helder.
            </motion.h2>
            <motion.p
              variants={fadeUp(0.1)}
              className="mt-5 text-[15.5px] leading-[1.6] text-[color:var(--color-ink-muted)]"
            >
              Geen lang traject, geen kennismakingsgesprek vooraf. Je doet de scan, ontvangt het rapport en daarna besluit jij of er een vervolg komt.
            </motion.p>
          </motion.div>

          <ol className="relative flex flex-col">
            {APK_STEPS.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease: EASE, delay: 0.15 + i * 0.1 }}
                className="relative flex gap-5 pb-8 last:pb-0"
              >
                {i < APK_STEPS.length - 1 && (
                  <span aria-hidden className="absolute left-[19px] top-12 bottom-0 w-px bg-[color:var(--color-line)]" />
                )}
                <span className="relative z-10 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-purple)] text-white font-[family-name:var(--font-display)] font-bold text-[15px] shadow-[0_8px_22px_-10px_rgba(98,59,199,0.55)]">
                  {i + 1}
                </span>
                <div className="pt-1.5">
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-[18px] leading-[1.25] tracking-[-0.005em] text-[color:var(--color-ink-strong)]">
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
