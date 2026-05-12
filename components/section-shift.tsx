"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Database,
  FileText,
  Lock,
  Mail,
  Palette,
  Search,
  Server,
  Shield,
  Wrench,
} from "lucide-react";

const EASE = [0.23, 1, 0.32, 1] as const;

const VENDORS = [
  { icon: Palette, label: "Websitebureau" },
  { icon: Server, label: "Hoster" },
  { icon: Database, label: "HubSpot" },
  { icon: Mail, label: "E-mailtool" },
  { icon: Shield, label: "Security" },
  { icon: FileText, label: "Content-uurtjes" },
  { icon: Wrench, label: "Onderhoud" },
  { icon: Lock, label: "AVG-module" },
  { icon: Search, label: "SEO-bureau" },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay } },
});

export function SectionShift() {
  return (
    <section className="relative px-5 sm:px-8 py-24 sm:py-32 bg-[color:var(--color-bg-elevated)] border-y border-[color:var(--color-line)]">
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
            className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-bg)] text-[12.5px] font-medium text-[color:var(--color-ink-muted)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-purple)]" />
            Het probleem
          </motion.span>
          <motion.h2
            variants={fadeUp(0.05)}
            className="mt-5 font-[family-name:var(--font-display)] font-bold text-[clamp(1.9rem,4.4vw,3.2rem)] leading-[1.07] tracking-[-0.02em] text-[color:var(--color-ink-strong)]"
          >
            Je betaalt nu <span className="text-[color:var(--color-purple)]">negen rekeningen.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp(0.1)}
            className="mt-4 text-[16px] sm:text-[17px] leading-[1.6] text-[color:var(--color-ink-muted)]"
          >
            Elke maand weer. Elk voor iets anders. Zonder dat ze met elkaar praten.
          </motion.p>
        </motion.div>

        {/* 9 vs 1 */}
        <div className="mt-14 grid lg:grid-cols-[1.35fr_auto_1fr] gap-8 lg:gap-7 items-center">
          {/* 9 vendors */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } } }}
            className="relative rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-bg)]/60 p-5 sm:p-6"
          >
            <div className="absolute -top-3 left-5 rounded-full bg-[color:var(--color-bg-elevated)] border border-[color:var(--color-line)] px-3 py-1">
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-ink-subtle)]">
                9 leveranciers
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
              {VENDORS.map((v) => (
                <motion.div
                  key={v.label}
                  variants={{ hidden: { opacity: 0, scale: 0.9, y: 8 }, show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: EASE } } }}
                  className="flex flex-col items-center gap-2 rounded-xl border border-[color:var(--color-line)] bg-[color:var(--color-bg-elevated)] px-3 py-4"
                >
                  <v.icon className="h-5 w-5 text-[color:var(--color-ink-subtle)]" strokeWidth={2} />
                  <span className="text-[11.5px] font-medium text-[color:var(--color-ink-muted)] text-center leading-tight">{v.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.45 }}
            className="flex lg:flex-col items-center justify-center gap-2"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-ink-subtle)] hidden lg:block">wordt</span>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--color-purple)] text-white shadow-[0_12px_30px_-10px_rgba(98,59,199,0.55)]">
              <ArrowRight className="h-5 w-5 rotate-90 lg:rotate-0" strokeWidth={2.5} />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-ink-subtle)] lg:hidden">wordt</span>
          </motion.div>

          {/* 1 platform */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.5 }}
            className="relative rounded-2xl border border-[color:var(--color-purple)]/30 bg-[color:var(--color-purple-soft)] p-6 shadow-[0_24px_56px_-24px_rgba(98,59,199,0.4)]"
          >
            <div className="absolute -top-3 left-6 rounded-full bg-[color:var(--color-purple)] px-3 py-1">
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white">1 platform</span>
            </div>
            <div className="flex items-center gap-3 mt-1.5 mb-4">
              <span className="inline-flex h-9 w-9 items-center justify-center">
                <Image src="/logo-bolt.png" alt="Forester OS" width={36} height={36} className="object-contain" />
              </span>
              <span className="font-[family-name:var(--font-display)] text-[18px] font-bold text-[color:var(--color-ink-strong)]">Forester OS</span>
            </div>
            <ul className="space-y-2.5">
              {["Eén abonnement, één factuur", "Eén login voor je hele team", "Data die wél met elkaar praat", "Website, CRM, marketing en AI inbegrepen"].map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-[13.5px] text-[color:var(--color-ink)] leading-snug">
                  <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-purple)] text-white mt-0.5">
                    <Check className="h-2.5 w-2.5" strokeWidth={3} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <Link
              href="/forester-os"
              className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[color:var(--color-purple)] hover:text-[color:var(--color-purple-hover)] transition-colors group"
            >
              Bekijk Forester OS
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover:translate-x-0.5" strokeWidth={2.5} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
