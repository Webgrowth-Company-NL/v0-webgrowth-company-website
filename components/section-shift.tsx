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
  { icon: Palette, label: "Websitebureau", cost: "€150 - €500 p/m" },
  { icon: Server, label: "Hoster", cost: "€15 - €50 p/m" },
  { icon: Database, label: "HubSpot", cost: "€50 - €450 p/m" },
  { icon: Mail, label: "E-mailtool", cost: "€20 - €150 p/m" },
  { icon: Shield, label: "Security", cost: "€15 - €80 p/m" },
  { icon: FileText, label: "Content-uurtjes", cost: "€200 - €800 p/m" },
  { icon: Wrench, label: "Onderhoud", cost: "€50 - €200 p/m" },
  { icon: Lock, label: "AVG-module", cost: "€10 - €50 p/m" },
  { icon: Search, label: "SEO-bureau", cost: "€400 - €1.500 p/m" },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay } },
});

export function SectionShift() {
  return (
    <section className="relative isolate overflow-hidden px-5 sm:px-8 pt-16 sm:pt-24 pb-28 sm:pb-40 bg-[color:var(--color-bg-elevated)]">
      {/* High-tech backdrop: faint dot grid + a soft purple field */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-70 [mask-image:radial-gradient(ellipse_60%_60%_at_70%_40%,black,transparent)]"
        style={{ backgroundImage: "radial-gradient(rgba(98,59,199,0.10) 1px, transparent 1px)", backgroundSize: "30px 30px" }}
      />
      <div
        aria-hidden
        className="absolute -top-32 right-[-10%] h-[560px] w-[560px] rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(98,59,199,0.14), rgba(98,59,199,0) 70%)" }}
      />

      <div className="relative mx-auto max-w-6xl">
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
            className="mt-6 font-[family-name:var(--font-display)] font-bold text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.06] tracking-[-0.02em] text-[color:var(--color-ink-strong)]"
          >
            Je betaalt nu <span className="text-[color:var(--color-purple)]">negen rekeningen.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp(0.1)}
            className="mt-5 text-[16px] sm:text-[17.5px] leading-[1.65] text-[color:var(--color-ink-muted)]"
          >
            Elke maand komen er rekeningen binnen voor je site, je CRM, je mailtool en je SEO. En geen van die tools praat met elkaar, dus de data blijft hangen waar je 'm niet nodig hebt.
          </motion.p>
        </motion.div>

        {/* 9 vs 1 */}
        <div className="mt-16 sm:mt-20 grid lg:grid-cols-[1.35fr_auto_1fr] gap-12 lg:gap-10 items-center">
          {/* 9 vendors */}
          <div>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } } }}
              className="relative rounded-[1.75rem] border border-[color:var(--color-line)] bg-[color:var(--color-bg)]/70 p-6 sm:p-8"
            >
              <div className="absolute -top-3 left-6 rounded-full bg-[color:var(--color-bg-elevated)] border border-[color:var(--color-line)] px-3 py-1">
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-ink-subtle)]">9 leveranciers</span>
              </div>
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {VENDORS.map((v) => (
                  <motion.div
                    key={v.label}
                    variants={{ hidden: { opacity: 0, scale: 0.9, y: 8 }, show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: EASE } } }}
                    className="group relative z-0 hover:z-30 flex flex-col items-center gap-2.5 rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-bg-elevated)] px-3 py-5 sm:py-6 transition-[transform,border-color,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:border-[color:var(--color-line-strong)] hover:shadow-[0_12px_28px_-14px_rgba(12,6,18,0.2)]"
                  >
                    <v.icon className="h-6 w-6 text-[color:var(--color-ink-subtle)] transition-colors duration-200 group-hover:text-[color:var(--color-ink-muted)]" strokeWidth={2} />
                    <span className="text-[12.5px] font-medium text-[color:var(--color-ink-muted)] text-center leading-tight">{v.label}</span>
                    {/* tooltip: monthly cost */}
                    <span
                      role="tooltip"
                      className="pointer-events-none absolute top-full left-1/2 z-20 mt-2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-[color:var(--color-ink-strong)] px-2.5 py-1.5 text-[11px] font-semibold text-white opacity-0 translate-y-1 shadow-[0_10px_24px_-8px_rgba(12,6,18,0.4)] transition-[opacity,transform] duration-150 ease-out group-hover:opacity-100 group-hover:translate-y-0"
                    >
                      <span className="absolute -top-1 left-1/2 -translate-x-1/2 h-2 w-2 rotate-45 rounded-[1px] bg-[color:var(--color-ink-strong)]" />
                      {v.cost}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.3 }}
              className="mt-5 flex justify-center"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-bg)] px-3.5 py-1.5 text-[12.5px] text-[color:var(--color-ink-muted)]">
                Samen al snel <span className="font-semibold text-[color:var(--color-ink)] tabular-nums">€1.000 - €4.000+</span> per maand
              </span>
            </motion.div>
          </div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.45 }}
            className="flex lg:flex-col items-center justify-center gap-2"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--color-ink-subtle)] hidden lg:block">wordt</span>
            <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--color-purple)] text-white shadow-[0_12px_30px_-8px_rgba(98,59,199,0.6)]">
              <span aria-hidden className="absolute inset-0 rounded-full ring-4 ring-[color:var(--color-purple)]/15" />
              <ArrowRight className="h-5 w-5 rotate-90 lg:rotate-0" strokeWidth={2.5} />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--color-ink-subtle)] lg:hidden">wordt</span>
          </motion.div>

          {/* 1 platform - bold */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.5 }}
            className="relative rounded-[2rem] bg-gradient-to-br from-[#3f2a8f] via-[#5e3bc0] to-[#7c3aed] p-7 sm:p-9 text-white shadow-[0_34px_72px_-22px_rgba(98,59,199,0.55)]"
          >
            <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/12" />
            <span aria-hidden className="pointer-events-none absolute -top-20 -right-16 h-52 w-52 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -top-3 left-8 rounded-full bg-[color:var(--color-bg-elevated)] px-3 py-1 shadow-[0_8px_20px_-8px_rgba(12,6,18,0.25)]">
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-purple)]">1 platform</span>
            </div>
            <div className="relative flex items-center gap-3 mt-2 mb-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
                <Image src="/logo-bolt.png" alt="Forester OS" width={26} height={26} className="object-contain" />
              </span>
              <span className="font-[family-name:var(--font-display)] text-[20px] font-bold">Forester OS</span>
            </div>
            <ul className="relative space-y-3.5">
              {["Eén abonnement, één factuur", "Eén login voor je hele team", "Data die wél met elkaar praat", "Website, CRM, marketing en AI-assistent Q inbegrepen"].map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-[14px] leading-snug text-white/90">
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20 mt-px">
                    <Check className="h-2.5 w-2.5" strokeWidth={3} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <div className="relative mt-7 flex items-baseline gap-1.5">
              <span className="text-[13px] text-white/70">vanaf</span>
              <span className="font-[family-name:var(--font-display)] text-[30px] font-bold tabular-nums leading-none">€399</span>
              <span className="text-[13px] text-white/70">per maand</span>
            </div>
            <Link
              href="/forester-os"
              className="btn-press group relative mt-6 inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full bg-[color:var(--color-bg-elevated)] text-[color:var(--color-purple)] text-[13.5px] font-semibold hover:bg-white shadow-[0_8px_20px_-10px_rgba(12,6,18,0.3)]"
            >
              Bekijk Forester OS
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[color:var(--color-purple)]/12 transition-transform duration-200 ease-out group-hover:translate-x-0.5">
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
