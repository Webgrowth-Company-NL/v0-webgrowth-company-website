"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Magnet,
  Palette,
  Search,
  Sparkles,
  Truck,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { SectionCta } from "@/components/section-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WaveDivider } from "@/components/wave-divider";

const CREAM = "#faf6f0";
const LAVENDER = "#e9e4f7";
const WHITE = "#ffffff";
const DEEP = "#2c1d5e";

const EASE = [0.23, 1, 0.32, 1] as const;

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay } },
});

const GRADIENT_TILE_STYLE = {
  backgroundImage: "linear-gradient(140deg, #ff0096 0%, #8b5cf6 55%, #c4b5fd 100%)",
} as const;

type DoelTile = { href: string; label: string; desc: string; icon: LucideIcon };
type SectorTile = { href: string; label: string; desc: string; icon: LucideIcon };

const DOEL_TILES: DoelTile[] = [
  {
    href: "/oplossingen/meer-leads",
    label: "Meer leads uit je site",
    desc: "Quickscans, calculators en slimme formulieren die anonieme bezoekers omzetten in concrete aanvragen.",
    icon: Magnet,
  },
  {
    href: "/oplossingen/vindbaarheid",
    label: "Beter gevonden worden",
    desc: "Search Console-data en AI-suggesties die laten zien welke pagina je het eerst moet aanpakken.",
    icon: Search,
  },
  {
    href: "/oplossingen/opvolging",
    label: "Klanten slim opvolgen",
    desc: "Eén kanban-pijplijn voor je hele team, met taken, statussen en Q die meedenkt.",
    icon: Users,
  },
  {
    href: "/oplossingen/ai-publiceren",
    label: "Sneller publiceren met AI",
    desc: "Q schrijft in jouw stem, jij keurt vooraf, publicatie-schema loopt door.",
    icon: Sparkles,
  },
];

const SECTOR_TILES: SectorTile[] = [
  {
    href: "/oplossingen/zakelijke-dienstverlening",
    label: "Zakelijke dienstverlening",
    desc: "Voor advocaten, notarissen en accountants. Acquisitie die niet afhangt van één partner.",
    icon: Briefcase,
  },
  {
    href: "/oplossingen/creatief-design",
    label: "Creatief & design",
    desc: "Voor designers en bureaus die hun tijd terug willen voor creatief werk.",
    icon: Palette,
  },
  {
    href: "/oplossingen/bouw-techniek",
    label: "Bouw & techniek",
    desc: "Voor aannemers en installateurs. Offerte-aanvragen mét context (foto, afmetingen, budget).",
    icon: Wrench,
  },
  {
    href: "/oplossingen/transport",
    label: "Transport & logistiek",
    desc: "Voor transportbedrijven en koeriers. Offerteaanvragen mét traject en lading, CRM voor ritten.",
    icon: Truck,
  },
  {
    href: "/oplossingen/mkb",
    label: "MKB algemeen",
    desc: "Voor MKB-bedrijven die negen losse tools willen vervangen door één maandfactuur.",
    icon: Building2,
  },
];

export function OplossingenHubPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HubHero />
        <WaveDivider top={CREAM} bottom={LAVENDER} />
        <DoelSection />
        <WaveDivider top={LAVENDER} bottom={WHITE} />
        <SectorSection />
        <WaveDivider top={WHITE} bottom={DEEP} />
        <SectionCta />
      </main>
      <SiteFooter />
    </>
  );
}

/* ── Hero ─────────────────────────────────────────── */

function HubHero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24 px-5 sm:px-8 bg-[color:var(--color-bg)]">
      <div
        aria-hidden
        className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(98,59,199,0.16), rgba(98,59,199,0) 70%)" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-48 -left-40 h-[520px] w-[520px] rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(124,58,237,0.10), rgba(124,58,237,0) 70%)" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
        style={{
          backgroundImage: "radial-gradient(rgba(12,6,18,0.07) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-32 sm:h-40 pointer-events-none bg-gradient-to-b from-transparent to-[color:var(--color-bg)]"
      />

      <motion.div
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } } }}
        className="relative mx-auto max-w-3xl text-center"
      >
        <motion.span
          variants={fadeUp(0)}
          className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full border border-[color:var(--color-line)] bg-white text-[12.5px] font-medium text-[color:var(--color-ink-muted)]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-purple)]" />
          Oplossingen
        </motion.span>

        <motion.h1
          variants={fadeUp(0.1)}
          className="mt-6 font-[family-name:var(--font-display)] font-bold text-[clamp(2.3rem,5.3vw,4.2rem)] leading-[1.05] tracking-[-0.022em] text-[color:var(--color-ink-strong)]"
        >
          Welk groeivraagstuk speelt er{" "}
          <span
            className="inline-block bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(110deg, #ff0096 0%, #8b5cf6 50%, #c4b5fd 100%)",
              backgroundSize: "220% 220%",
              animation: "shimmer 7s ease-in-out infinite",
              WebkitBackgroundClip: "text",
            }}
          >
            in jouw business?
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp(0.18)}
          className="mt-6 text-[17px] sm:text-[18px] leading-[1.6] text-[color:var(--color-ink-muted)]"
        >
          Of je nu meer aanvragen wilt, beter gevonden wilt worden of je hele kantoor wilt herstructureren — er is een Forester OS-pakket voor. Vanaf €399 per maand, één login, één factuur, één team dat meedraait.
        </motion.p>

        <motion.div
          variants={fadeUp(0.26)}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href="/website-apk"
            className="btn-press group inline-flex items-center gap-2 pl-6 pr-2 py-2.5 rounded-full bg-[color:var(--color-purple)] hover:bg-[color:var(--color-purple-hover)] text-white text-[15px] font-semibold shadow-[0_2px_4px_rgba(98,59,199,0.28),0_18px_40px_-12px_rgba(98,59,199,0.55)] hover:shadow-[0_8px_18px_rgba(98,59,199,0.36),0_28px_56px_-12px_rgba(98,59,199,0.78)]"
          >
            Doe de gratis APK
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/18 transition-[transform,background-color] duration-200 ease-out group-hover:translate-x-0.5 group-hover:scale-105 group-hover:bg-white/30">
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </span>
          </Link>
          <Link
            href="/contact"
            className="btn-press group inline-flex items-center gap-2 pl-6 pr-2 py-2.5 rounded-full bg-white hover:bg-[color:var(--color-purple-soft)] border border-[color:var(--color-line-strong)] hover:border-[color:var(--color-purple)]/35 text-[color:var(--color-ink)] hover:text-[color:var(--color-purple)] text-[15px] font-semibold shadow-[0_1px_2px_rgba(12,6,18,0.04)] hover:shadow-[0_10px_24px_-10px_rgba(98,59,199,0.3)]"
          >
            Boek een kennismaking
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--color-ink-strong)]/6 transition-[transform,background-color] duration-200 ease-out group-hover:translate-x-0.5 group-hover:scale-105 group-hover:bg-[color:var(--color-purple)]/15">
              <ArrowRight className="h-4 w-4 text-[color:var(--color-ink)] transition-colors duration-200 ease-out group-hover:text-[color:var(--color-purple)]" strokeWidth={2.5} />
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ── Per groeidoel (4 cards) ─────────────────────── */

function DoelSection() {
  return (
    <section className="relative px-5 sm:px-8 pt-16 sm:pt-24 pb-24 sm:pb-32 bg-[#e9e4f7]">
      <div className="mx-auto max-w-6xl">
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
            Per groeidoel
          </motion.span>
          <motion.h2
            variants={fadeUp(0.05)}
            className="mt-6 font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.07] tracking-[-0.02em] text-[color:var(--color-ink-strong)]"
          >
            Wat wil je laten groeien?
          </motion.h2>
          <motion.p
            variants={fadeUp(0.1)}
            className="mt-5 text-[16px] sm:text-[17px] leading-[1.6] text-[color:var(--color-ink-muted)]"
          >
            Vier veelvoorkomende vraagstukken. Klik door voor het pakket dat erbij hoort, inclusief prijs, scope en stappenplan.
          </motion.p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 gap-5 sm:gap-6">
          {DOEL_TILES.map((tile, i) => (
            <DoelCard key={tile.href} tile={tile} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DoelCard({ tile, index }: { tile: DoelTile; index: number }) {
  const Icon = tile.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: EASE, delay: 0.1 + index * 0.06 }}
      className="group relative flex flex-col rounded-2xl bg-[color:var(--color-bg-elevated)] border border-[color:var(--color-line)] p-6 sm:p-7 shadow-[0_1px_2px_rgba(12,6,18,0.04)] hover:shadow-[0_18px_44px_-22px_rgba(12,6,18,0.18)] hover:border-[color:var(--color-line-strong)] hover:-translate-y-[2px] transition-[box-shadow,border-color,transform] duration-300 ease-out"
    >
      <Link href={tile.href} className="absolute inset-0 z-10" aria-label={`Bekijk ${tile.label}`} />
      <span
        className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-[0_14px_28px_-10px_rgba(98,59,199,0.55),0_2px_4px_rgba(98,59,199,0.18)] transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-[1.04]"
        style={GRADIENT_TILE_STYLE}
      >
        <span aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/30 via-white/0 to-white/0" />
        <span aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20" />
        <Icon className="relative h-6 w-6 drop-shadow-[0_1px_2px_rgba(12,6,18,0.25)]" strokeWidth={2} />
      </span>

      <h3 className="mt-5 font-[family-name:var(--font-display)] font-bold text-[19px] sm:text-[20px] leading-[1.25] tracking-[-0.005em] text-[color:var(--color-ink-strong)]">
        {tile.label}
      </h3>
      <p className="mt-2 text-[14px] leading-[1.6] text-[color:var(--color-ink-muted)] flex-1">{tile.desc}</p>

      <span className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[color:var(--color-ink)] group-hover:text-[color:var(--color-purple)] transition-colors">
        Bekijk pakket
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover:translate-x-0.5" strokeWidth={2.5} />
      </span>
    </motion.article>
  );
}

/* ── Per branche (5 cards) ───────────────────────── */

function SectorSection() {
  return (
    <section className="relative px-5 sm:px-8 pt-16 sm:pt-24 pb-24 sm:pb-32 bg-white">
      <div className="mx-auto max-w-6xl">
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
            Per branche
          </motion.span>
          <motion.h2
            variants={fadeUp(0.05)}
            className="mt-6 font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.07] tracking-[-0.02em] text-[color:var(--color-ink-strong)]"
          >
            Pakket afgestemd op jouw vakgebied.
          </motion.h2>
          <motion.p
            variants={fadeUp(0.1)}
            className="mt-5 text-[16px] sm:text-[17px] leading-[1.6] text-[color:var(--color-ink-muted)]"
          >
            Vijf branche-specifieke pakketten. Zelfde Forester OS-basis, maar met intake, terminologie en flows die bij jouw werk passen.
          </motion.p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {SECTOR_TILES.map((tile, i) => (
            <SectorCard key={tile.href} tile={tile} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SectorCard({ tile, index }: { tile: SectorTile; index: number }) {
  const Icon = tile.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: EASE, delay: 0.1 + index * 0.06 }}
      className="group relative flex items-start gap-4 rounded-2xl bg-[color:var(--color-bg-elevated)] border border-[color:var(--color-line)] p-5 sm:p-6 shadow-[0_1px_2px_rgba(12,6,18,0.04)] hover:shadow-[0_18px_40px_-22px_rgba(12,6,18,0.18)] hover:border-[color:var(--color-line-strong)] hover:-translate-y-[2px] transition-[box-shadow,border-color,transform] duration-300 ease-out"
    >
      <Link href={tile.href} className="absolute inset-0 z-10" aria-label={`Bekijk ${tile.label}`} />
      <span
        className="relative inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white shadow-[0_10px_22px_-8px_rgba(98,59,199,0.55)]"
        style={GRADIENT_TILE_STYLE}
      >
        <span aria-hidden className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-b from-white/30 via-white/0 to-white/0" />
        <span aria-hidden className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/20" />
        <Icon className="relative h-5 w-5" strokeWidth={2} />
      </span>
      <div className="min-w-0 flex-1">
        <h3 className="font-[family-name:var(--font-display)] font-bold text-[16.5px] sm:text-[17px] leading-[1.25] tracking-[-0.005em] text-[color:var(--color-ink-strong)] group-hover:text-[color:var(--color-purple)] transition-colors">
          {tile.label}
        </h3>
        <p className="mt-1.5 text-[13px] leading-[1.55] text-[color:var(--color-ink-muted)]">{tile.desc}</p>
        <span className="mt-3 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[color:var(--color-ink)] group-hover:text-[color:var(--color-purple)] transition-colors">
          Bekijk pakket
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover:translate-x-0.5" strokeWidth={2.5} />
        </span>
      </div>
    </motion.article>
  );
}
