"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Database,
  FileText,
  Mail,
  Megaphone,
  Palette,
  Search,
  Server,
  Shield,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { KennismakingButton } from "@/components/kennismaking-button";
import { RIVAL_STACK, RIVAL_STACK_TOTAL, type RivalTool } from "@/lib/pricing";

const EASE = [0.23, 1, 0.32, 1] as const;

const FORESTER_GROWTH_PRICE = 699;
const RIVAL_STACK_TOTAL_2Y = RIVAL_STACK_TOTAL * 24;
const FORESTER_GROWTH_TOTAL_2Y = FORESTER_GROWTH_PRICE * 24;
const SAVINGS_MONTHLY = RIVAL_STACK_TOTAL - FORESTER_GROWTH_PRICE;
const SAVINGS_2Y = RIVAL_STACK_TOTAL_2Y - FORESTER_GROWTH_TOTAL_2Y;

const ICONS: Record<RivalTool["icon"], LucideIcon> = {
  palette: Palette,
  server: Server,
  database: Database,
  mail: Mail,
  shield: Shield,
  fileText: FileText,
  wrench: Wrench,
  megaphone: Megaphone,
  search: Search,
};

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
            Dit is hoe een typische zakelijke stack eruitziet als je alles los inkoopt. Negen leveranciers, negen facturen en negen aanspreekpunten, terwijl Forester OS exact dezelfde functionaliteit in één abonnement levert.
          </motion.p>
        </div>

        {/* Rival stack — 9 tiles */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } } }}
          className="mt-14 rounded-[2rem] border border-[color:var(--color-line)] bg-[color:var(--color-bg)] p-6 sm:p-8"
        >
          <div className="flex items-center justify-between gap-4 mb-6">
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-ink-subtle)]">
              Negen losse leveranciers
            </span>
            <span className="text-[11.5px] font-semibold text-[color:var(--color-ink-muted)]">
              Middentier-prijspunt per tool
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {RIVAL_STACK.map((tool) => {
              const Icon = ICONS[tool.icon];
              return (
                <motion.div
                  key={tool.category}
                  variants={{
                    hidden: { opacity: 0, scale: 0.92, y: 8 },
                    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
                  }}
                  className="flex flex-col gap-2.5 rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-bg-elevated)] p-4 sm:p-5"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[color:var(--color-bg-muted)] text-[color:var(--color-ink-subtle)]">
                    <Icon className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <div>
                    <h3 className="text-[13.5px] font-semibold text-[color:var(--color-ink-strong)] leading-tight">
                      {tool.category}
                    </h3>
                    <p className="mt-1 text-[11.5px] leading-[1.45] text-[color:var(--color-ink-subtle)]">
                      {tool.description}
                    </p>
                  </div>
                  <div className="mt-auto pt-2 flex items-baseline justify-between gap-2 border-t border-[color:var(--color-line)]">
                    <span className="text-[10.5px] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-ink-subtle)]">
                      Per maand
                    </span>
                    <span className="font-[family-name:var(--font-display)] font-bold text-[15px] tabular-nums text-[color:var(--color-ink-strong)]">
                      {fmt(tool.monthly)}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-6 pt-5 border-t border-[color:var(--color-line-strong)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <span className="text-[12.5px] font-semibold uppercase tracking-[0.12em] text-[color:var(--color-ink-subtle)]">
              Samen per maand
            </span>
            <div className="flex flex-wrap items-baseline gap-x-6 gap-y-1">
              <span className="font-[family-name:var(--font-display)] font-bold text-[26px] sm:text-[32px] tabular-nums leading-none tracking-[-0.01em] text-[color:var(--color-ink-strong)]">
                {fmt(RIVAL_STACK_TOTAL)}
                <span className="text-[12px] font-medium text-[color:var(--color-ink-subtle)] ml-1">/ mnd</span>
              </span>
              <span className="text-[13px] text-[color:var(--color-ink-muted)]">
                Over twee jaar:{" "}
                <span className="font-bold tabular-nums text-[color:var(--color-ink-strong)]">
                  {fmt(RIVAL_STACK_TOTAL_2Y)}
                </span>
              </span>
            </div>
          </div>
        </motion.div>

        {/* Forester OS tile */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
          className="relative mt-8 rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#3f2a8f] via-[#5e3bc0] to-[#7c3aed] text-white shadow-[0_34px_72px_-22px_rgba(98,59,199,0.55)] p-6 sm:p-8"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full"
            style={{ background: "radial-gradient(closest-side, rgba(255,255,255,0.16), rgba(255,255,255,0) 70%)" }}
          />
          <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/12" />

          <div className="relative grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15">
                  <Image src="/logo-bolt.png" alt="Forester OS" width={26} height={26} className="object-contain" />
                </span>
                <span className="font-[family-name:var(--font-display)] font-bold text-[22px] sm:text-[24px] tracking-[-0.01em]">
                  Forester OS · Growth
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-display)] font-bold text-[22px] sm:text-[28px] leading-[1.15] tracking-[-0.01em]">
                Eén abonnement vervangt deze hele lijst.
              </h3>
              <p className="mt-4 text-[14.5px] sm:text-[15.5px] leading-[1.6] text-white/85 max-w-lg">
                Website, hosting, onderhoud, beveiliging, CRM, e-mailmarketing, SEO-monitoring, Lead Engines, advertentiebeheer en AI-assistent Q. Eén factuur per maand, één login voor je team en één aanspreekpunt dat je dossier kent.
              </p>

              <ul className="mt-6 grid sm:grid-cols-2 gap-x-5 gap-y-2.5">
                {[
                  "Website, hosting en onderhoud",
                  "CRM voor contacten, leads en deals",
                  "E-mailmarketing met automations",
                  "SEO-monitoring met Search Console",
                  "Lead Engines op maat",
                  "Advertentiebeheer met CRM-attributie",
                  "Q · AI-content en publisher",
                  "Priority support van ons team",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2.5 text-[13.5px] leading-[1.45] text-white/90">
                    <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
                      <Check className="h-2.5 w-2.5" strokeWidth={3} />
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-white/[0.08] border border-white/15 backdrop-blur-sm p-6 flex flex-col gap-5">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/65">
                  Wat je betaalt
                </span>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-[family-name:var(--font-display)] font-bold text-[40px] sm:text-[48px] tabular-nums leading-none tracking-[-0.02em]">
                    {fmt(FORESTER_GROWTH_PRICE)}
                  </span>
                  <span className="text-[14px] font-medium text-white/75">/ maand</span>
                </div>
                <p className="mt-3 text-[12.5px] text-white/70 leading-[1.5]">
                  Eén bedrag, geen losse facturen voor hosting of integraties, geen verrassingen achteraf.
                </p>
              </div>

              <div className="rounded-xl bg-white/10 border border-white/15 p-4">
                <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/70">
                  Bespaar ten opzichte van losse tools
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="font-[family-name:var(--font-display)] font-bold text-[24px] tabular-nums leading-none tracking-[-0.01em]">
                    {fmt(SAVINGS_MONTHLY)}
                  </span>
                  <span className="text-[12.5px] font-medium text-white/75">per maand</span>
                </div>
                <div className="mt-1 text-[12px] text-white/70">
                  Over twee jaar:{" "}
                  <span className="font-bold tabular-nums text-white">{fmt(SAVINGS_2Y)}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5">
                <Link
                  href="/contact?plan=growth"
                  className="btn-press group inline-flex items-center gap-2 pl-5 pr-2 py-2.5 rounded-full bg-white text-[color:var(--color-purple)] text-[14px] font-semibold shadow-[0_8px_22px_-10px_rgba(0,0,0,0.4)]"
                >
                  Kies Growth
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--color-purple)]/12 transition-[transform,background-color] duration-200 ease-out group-hover:translate-x-0.5 group-hover:bg-[color:var(--color-purple)]/22">
                    <ArrowRight className="h-3.5 w-3.5 text-[color:var(--color-purple)]" strokeWidth={2.5} />
                  </span>
                </Link>
                <KennismakingButton variant="secondary-on-dark" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
