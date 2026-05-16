"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, X } from "lucide-react";
import {
  RIVAL_STACK,
  RIVAL_STACK_TOTAL_MAX,
  RIVAL_STACK_TOTAL_MIN,
  RIVAL_WEBSITE_BUILD_ONE_TIME,
} from "@/lib/pricing";

const EASE = [0.23, 1, 0.32, 1] as const;

const FORESTER_GROWTH_PRICE = 699;

const fmt = (n: number) => `€${n.toLocaleString("nl-NL")}`;

export function PricingComparison() {
  return (
    <section className="relative px-5 sm:px-8 pt-16 sm:pt-24 pb-24 sm:pb-32 bg-white">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: EASE }}
            className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-bg-elevated)] text-[12.5px] font-medium text-[color:var(--color-ink-muted)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-purple)]" />
            Negen tools, één factuur
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
            className="mt-6 font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.07] tracking-[-0.02em] text-[color:var(--color-ink-strong)]"
          >
            Wat je elders aan losse tools zou betalen.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            className="mt-5 text-[16px] sm:text-[17px] leading-[1.6] text-[color:var(--color-ink-muted)]"
          >
            Een typische zakelijke stack: een externe webbouwer, HubSpot, Mailchimp en vijf andere tools. Allemaal apart afgerekend, allemaal apart te onderhouden. Met Forester OS krijg je dezelfde functionaliteit in één abonnement.
          </motion.p>
        </div>

        {/* Comparison grid */}
        <div className="mt-14 grid lg:grid-cols-[1.25fr_1fr] gap-6 lg:gap-8 items-stretch">
          {/* Rival stack */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
            className="rounded-[2rem] border border-[color:var(--color-line)] bg-[color:var(--color-bg)] p-6 sm:p-8 flex flex-col"
          >
            <div className="flex items-center justify-between gap-4 mb-2">
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-ink-subtle)]">
                Negen losse tools
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--color-bg-muted)] px-2.5 py-1 text-[11px] font-semibold text-[color:var(--color-ink-muted)]">
                <X className="h-3 w-3" strokeWidth={2.5} />
                Versnipperd
              </span>
            </div>
            <h3 className="font-[family-name:var(--font-display)] font-bold text-[22px] sm:text-[26px] leading-[1.15] tracking-[-0.01em] text-[color:var(--color-ink-strong)]">
              Een typische zakelijke stack.
            </h3>

            <ul className="mt-6 divide-y divide-[color:var(--color-line)] flex-1">
              {RIVAL_STACK.map((tool) => (
                <li key={tool.category} className="flex items-baseline justify-between gap-3 py-3">
                  <div className="min-w-0">
                    <span className="text-[13.5px] font-semibold text-[color:var(--color-ink)]">{tool.category}</span>
                    <span className="block text-[11.5px] text-[color:var(--color-ink-subtle)] truncate">
                      {tool.name}
                      {tool.note ? ` · ${tool.note}` : ""}
                    </span>
                  </div>
                  <span className="shrink-0 text-[13.5px] font-semibold tabular-nums text-[color:var(--color-ink)]">
                    {tool.oneTime !== undefined ? (
                      <>
                        {fmt(tool.oneTime)}
                        <span className="text-[11px] font-medium text-[color:var(--color-ink-subtle)]"> eenmalig</span>
                      </>
                    ) : (
                      <>
                        {fmt(tool.monthlyMin ?? 0)} - {fmt(tool.monthlyMax ?? 0)}
                        <span className="text-[11px] font-medium text-[color:var(--color-ink-subtle)]"> p/m</span>
                      </>
                    )}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-5 border-t border-[color:var(--color-line-strong)] flex flex-col sm:flex-row items-start sm:items-baseline justify-between gap-2 sm:gap-3">
              <span className="text-[12.5px] font-semibold uppercase tracking-[0.12em] text-[color:var(--color-ink-subtle)]">
                Samen per maand
              </span>
              <div className="text-right">
                <span className="font-[family-name:var(--font-display)] font-bold text-[24px] sm:text-[30px] tabular-nums leading-none tracking-[-0.01em] text-[color:var(--color-ink-strong)]">
                  {fmt(RIVAL_STACK_TOTAL_MIN)} - {fmt(RIVAL_STACK_TOTAL_MAX)}
                  <span className="text-[12px] font-medium text-[color:var(--color-ink-subtle)] ml-1">/ mnd</span>
                </span>
                <span className="block mt-1 text-[12px] text-[color:var(--color-ink-muted)]">
                  Plus eenmalig{" "}
                  <span className="font-semibold tabular-nums text-[color:var(--color-ink)]">
                    {fmt(RIVAL_WEBSITE_BUILD_ONE_TIME)}
                  </span>{" "}
                  voor de website-bouw
                </span>
              </div>
            </div>
          </motion.div>

          {/* Forester OS Growth */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.25 }}
            className="relative rounded-[2rem] p-6 sm:p-8 text-white overflow-hidden flex flex-col bg-gradient-to-br from-[#3f2a8f] via-[#5e3bc0] to-[#7c3aed] shadow-[0_34px_72px_-22px_rgba(98,59,199,0.55)]"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(255,255,255,0.16), rgba(255,255,255,0) 70%)",
              }}
            />

            <div className="flex items-center justify-between gap-4 mb-2">
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/65">
                Forester OS · Growth
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-semibold text-white">
                <Check className="h-3 w-3" strokeWidth={2.75} />
                Alles inclusief
              </span>
            </div>
            <h3 className="font-[family-name:var(--font-display)] font-bold text-[22px] sm:text-[26px] leading-[1.15] tracking-[-0.01em] text-white">
              Eén abonnement vervangt deze hele lijst.
            </h3>

            <ul className="mt-6 space-y-2.5 flex-1">
              {[
                "Websitebouw (geen eenmalige bouwfactuur)",
                "Hosting in Nederland met SSL en back-ups",
                "CRM voor contacten, leads en deals",
                "E-mailtool met segmenten uit je CRM",
                "Security: beveiliging, monitoring en updates",
                "Content schrijven door Q in jouw stem",
                "Wekelijks onderhoud door ons team",
                "Ads-beheer met CRM-attributie",
                "SEO met Search Console en rankings",
              ].map((line) => (
                <li key={line} className="flex items-start gap-2.5 text-[13.5px] leading-[1.5] text-white/90">
                  <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
                    <Check className="h-2.5 w-2.5" strokeWidth={3} />
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-5 border-t border-white/15 flex items-baseline justify-between gap-3">
              <span className="text-[12.5px] font-semibold uppercase tracking-[0.12em] text-white/65">
                Forester OS Growth
              </span>
              <span className="font-[family-name:var(--font-display)] font-bold text-[28px] sm:text-[32px] tabular-nums leading-none tracking-[-0.01em]">
                {fmt(FORESTER_GROWTH_PRICE)}
                <span className="text-[12px] font-medium text-white/70 ml-1">/ mnd</span>
              </span>
            </div>

            <Link
              href="/contact?plan=growth"
              className="btn-press group mt-6 inline-flex items-center justify-between gap-2 pl-5 pr-2 py-2.5 rounded-full bg-white text-[color:var(--color-purple)] text-[14px] font-semibold shadow-[0_8px_22px_-10px_rgba(0,0,0,0.4)]"
            >
              Kies Growth
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--color-purple)]/12 transition-[transform,background-color] duration-200 ease-out group-hover:translate-x-0.5 group-hover:bg-[color:var(--color-purple)]/22">
                <ArrowRight className="h-3.5 w-3.5 text-[color:var(--color-purple)]" strokeWidth={2.5} />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Savings strip */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: EASE, delay: 0.35 }}
          className="mt-10 rounded-2xl border border-[color:var(--color-purple)]/25 bg-[color:var(--color-purple-soft)] px-5 py-5 sm:px-7 sm:py-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8"
        >
          <div className="flex-1">
            <p className="text-[14.5px] sm:text-[15.5px] leading-[1.55] text-[color:var(--color-ink-strong)]">
              Een losse stack komt al snel uit op{" "}
              <span className="font-bold tabular-nums">
                {fmt(RIVAL_STACK_TOTAL_MIN)} tot {fmt(RIVAL_STACK_TOTAL_MAX)} per maand
              </span>
              , bovenop de eenmalige bouw van een nieuwe website. Forester OS Growth doet hetzelfde voor{" "}
              <span className="font-semibold text-[color:var(--color-purple)]">{fmt(FORESTER_GROWTH_PRICE)} per maand</span>,
              zonder losse logins of facturen erbij.
            </p>
          </div>
          <span className="font-[family-name:var(--font-display)] font-bold text-[26px] sm:text-[34px] leading-none tracking-[-0.01em] text-[color:var(--color-purple)] tabular-nums shrink-0">
            {fmt(FORESTER_GROWTH_PRICE)}/mnd
          </span>
        </motion.div>
      </div>
    </section>
  );
}
