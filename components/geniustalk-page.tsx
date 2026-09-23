"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Clock, MapPin, Users } from "lucide-react";

import { GeniusTalkRsvp } from "@/components/geniustalk-rsvp";
import { SectionCta } from "@/components/section-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WaveDivider } from "@/components/wave-divider";

const CREAM = "#faf6f0";
const LAVENDER = "#e9e4f7";
const WHITE = "#ffffff";
const DEEP = "#2c1d5e";

const EASE = [0.23, 1, 0.32, 1] as const;

const containerStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.08 } },
};

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE, delay } },
});

export const GENIUSTALK_EVENT = {
  datum: "Donderdag 5 november 2026",
  datumKort: "5 november",
  tijd: "15:00 tot 17:00",
  locatie: "Restaurant Chung, Rotterdam",
  adres: "Noordmolenwerf 171, Rotterdam",
};

/**
 * Aanmeldpagina voor GeniusTalk 26, opgebouwd volgens hetzelfde stramien als de
 * oplossings- en moduledetailpagina's: lichte split-hero, daarna het ritme
 * lavendel, wit en de paarse afsluiter.
 */
export function GeniusTalkPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <GeniusTalkHero />
        <WaveDivider top={CREAM} bottom={LAVENDER} />
        <VerhaalSection />
        <WaveDivider top={LAVENDER} bottom={WHITE} />
        <PraktischSection />
        <WaveDivider top={WHITE} bottom={DEEP} />
        <SectionCta />
      </main>
      <SiteFooter />
    </>
  );
}

/* ── Hero ────────────────────────────────────────── */

function GeniusTalkHero() {
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

      <div className="relative mx-auto max-w-6xl grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
        <motion.div variants={containerStagger} initial="hidden" animate="show" className="text-left">
          <motion.span
            variants={fadeUp(0)}
            className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full border border-[color:var(--color-line)] bg-white text-[12.5px] font-medium text-[color:var(--color-ink-muted)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-purple)]" />
            Vierde editie
            <span className="text-[color:var(--color-ink-faint)]">·</span>
            <span className="font-semibold text-[color:var(--color-ink)]">
              {GENIUSTALK_EVENT.datumKort}, Rotterdam
            </span>
          </motion.span>

          <motion.h1
            variants={fadeUp(0.14)}
            className="mt-6 font-[family-name:var(--font-display)] font-bold leading-[1.05] tracking-[-0.022em] text-[color:var(--color-ink-strong)] text-[clamp(2.1rem,4.6vw,3.6rem)]"
          >
            GeniusTalk 26:{" "}
            <span
              className="inline bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(110deg, #ff0096 0%, #8b5cf6 50%, #c4b5fd 100%)",
                backgroundSize: "220% 220%",
                animation: "shimmer 7s ease-in-out infinite",
                WebkitBackgroundClip: "text",
              }}
            >
              A Year with AI.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp(0.22)}
            className="mt-6 text-[17px] sm:text-[18px] leading-[1.6] text-[color:var(--color-ink-muted)]"
          >
            Een middag over wat er gebeurt als AI niet je speeltje is maar je fundament. Van een doos in de schuur
            tot het systeem waar een heel bedrijf op draait, inclusief de dingen die onderweg niet werkten.
          </motion.p>

          {/* Op desktop staat het formulier ernaast, daar voegt een knop niets toe. */}
          <motion.div variants={fadeUp(0.3)} className="mt-9 lg:hidden">
            <a
              href="#aanmelden"
              className="btn-press group inline-flex items-center gap-2 pl-6 pr-2 py-2.5 rounded-full bg-[color:var(--color-purple)] hover:bg-[color:var(--color-purple-hover)] text-white text-[15px] font-semibold shadow-[0_2px_4px_rgba(98,59,199,0.28),0_18px_40px_-12px_rgba(98,59,199,0.55)] hover:shadow-[0_8px_18px_rgba(98,59,199,0.36),0_28px_56px_-12px_rgba(98,59,199,0.78)]"
            >
              Ja, ik ben erbij
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/18 transition-[transform,background-color] duration-200 ease-out group-hover:translate-x-0.5 group-hover:scale-105 group-hover:bg-white/30">
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </span>
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp(0.36)}
            className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[color:var(--color-line)] pt-7 text-[14.5px] text-[color:var(--color-ink-muted)]"
          >
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-[color:var(--color-purple)]" strokeWidth={2} />
              {GENIUSTALK_EVENT.datum}
            </span>
            <span className="inline-flex items-center gap-2 tabular-nums">
              <Clock className="h-4 w-4 text-[color:var(--color-purple)]" strokeWidth={2} />
              {GENIUSTALK_EVENT.tijd}
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[color:var(--color-purple)]" strokeWidth={2} />
              {GENIUSTALK_EVENT.locatie}
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          id="aanmelden"
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
          className="relative scroll-mt-24 mx-auto w-full max-w-[480px] lg:max-w-none"
        >
          <GeniusTalkRsvp />
        </motion.div>
      </div>
    </section>
  );
}

/* ── Het verhaal ─────────────────────────────────── */

function VerhaalSection() {
  return (
    <section className="relative px-5 sm:px-8 pt-16 sm:pt-24 pb-20 sm:pb-28 bg-[#e9e4f7]">
      <div className="mx-auto max-w-5xl">
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
            De rode draad
          </motion.span>
          <motion.h2
            variants={fadeUp(0.05)}
            className="mt-5 font-[family-name:var(--font-display)] font-bold text-[clamp(1.9rem,4.2vw,3rem)] leading-[1.07] tracking-[-0.015em] text-[color:var(--color-ink-strong)]"
          >
            Van doos 14 naar een heel bedrijf.
          </motion.h2>
        </motion.div>

        {/* Zelfde tekst staat in lib/geniustalk/config.ts in het platform.
            Die repo kan hier niet uit importeren, dus bij een wijziging beide bijwerken. */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
          className="mx-auto mt-12 max-w-[68ch] space-y-5"
        >
          <motion.p variants={fadeUp(0)} className="text-[18px] leading-[1.62] text-[color:var(--color-ink)]">
            Het begon in een schuur. Dozen vol spullen, en niemand die nog wist wat waarin zat. Dus plakten we er
            nummers op, fotografeerden we de inhoud, en lieten we AI uitzoeken wat er nou eigenlijk in doos 14 lag.
          </motion.p>
          <motion.p
            variants={fadeUp(0.05)}
            className="text-[16.5px] leading-[1.7] text-[color:var(--color-ink-muted)]"
          >
            Dat kleine hulpje bleek op dezelfde bouwstenen te draaien als de systemen die we nu bouwen. Een jaar
            later gaan er complete bedrijven doorheen: offerte, ontwerp, akkoord, productie, transport, factuur.
            Niet in tien losse tools, maar in één systeem.
          </motion.p>
          <motion.p
            variants={fadeUp(0.1)}
            className="text-[16.5px] leading-[1.7] text-[color:var(--color-ink-muted)]"
          >
            Op 5 november, bij Restaurant Chung in Rotterdam, laten we zien hoe je van het een bij het ander komt.
            Inclusief de dingen die onderweg niet werkten.
          </motion.p>
        </motion.div>

        {/* Het bruggetje: dezelfde tafel, negen jaar eerder. Zelfde foto en
            bijschrift als GENIUSTALK_TOEN in lib/geniustalk/config.ts. */}
        <motion.figure
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: EASE, delay: 0.12 }}
          className="mx-auto mt-14 max-w-4xl"
        >
          <div className="overflow-hidden rounded-[2rem] border border-[color:var(--color-line)] bg-white shadow-[0_30px_80px_-30px_rgba(98,59,199,0.35),0_10px_30px_-15px_rgba(98,59,199,0.18)]">
            <Image
              src="/images/geniustalk-2017.jpg"
              alt="Deelnemers in gesprek aan tafel tijdens de GeniusTalk van januari 2017"
              width={1600}
              height={1066}
              sizes="(min-width: 1024px) 880px, 100vw"
              className="h-auto w-full"
            />
            <figcaption className="px-6 py-5 text-[14.5px] leading-[1.6] text-[color:var(--color-ink-subtle)]">
              GeniusTalk, januari 2017. Toen ging het over websites. Negen jaar later zitten we weer aan tafel, en
              gaat het over het systeem waar een heel bedrijf op draait.
            </figcaption>
          </div>
        </motion.figure>
      </div>
    </section>
  );
}

/* ── Praktisch ───────────────────────────────────── */

const PRAKTISCH = [
  {
    icon: Users,
    titel: "Voor wie het is",
    body:
      "Een kleine groep ondernemers, en dit is de vierde editie. Geen zaal vol en geen verkooppraatje. Je hoeft geen klant van ons te zijn om erbij te zijn.",
  },
  {
    icon: CalendarDays,
    titel: "Wanneer",
    body: `${GENIUSTALK_EVENT.datum}, van ${GENIUSTALK_EVENT.tijd}. Je krijgt na je aanmelding een agenda-uitnodiging, dus wijzigingen zie je vanzelf.`,
  },
  {
    icon: MapPin,
    titel: "Waar",
    body: `${GENIUSTALK_EVENT.locatie}. Het adres is ${GENIUSTALK_EVENT.adres}, op loopafstand van het centrum.`,
  },
];

function PraktischSection() {
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
            className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full border border-[color:var(--color-line)] bg-white text-[12.5px] font-medium text-[color:var(--color-ink-muted)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-purple)]" />
            Praktisch
          </motion.span>
          <motion.h2
            variants={fadeUp(0.05)}
            className="mt-6 font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.07] tracking-[-0.02em] text-[color:var(--color-ink-strong)]"
          >
            Wat je verder moet weten.
          </motion.h2>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-3 gap-5 sm:gap-6">
          {PRAKTISCH.map((p, i) => (
            <motion.article
              key={p.titel}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: EASE, delay: 0.1 + i * 0.06 }}
              className="rounded-2xl bg-[color:var(--color-bg-elevated)] border border-[color:var(--color-line)] p-6 sm:p-7 shadow-[0_1px_2px_rgba(12,6,18,0.04)]"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--color-purple-tint)]">
                <p.icon className="h-5 w-5 text-[color:var(--color-purple)]" strokeWidth={2.25} />
              </span>
              <h3 className="mt-5 font-[family-name:var(--font-display)] font-bold text-[19px] sm:text-[20px] leading-[1.2] tracking-[-0.005em] text-[color:var(--color-ink-strong)]">
                {p.titel}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.6] text-[color:var(--color-ink-muted)]">{p.body}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: EASE, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="#aanmelden"
            className="btn-press group inline-flex items-center gap-2 pl-6 pr-2 py-2.5 rounded-full bg-[color:var(--color-purple)] hover:bg-[color:var(--color-purple-hover)] text-white text-[15px] font-semibold shadow-[0_2px_4px_rgba(98,59,199,0.28),0_18px_40px_-12px_rgba(98,59,199,0.55)] hover:shadow-[0_8px_18px_rgba(98,59,199,0.36),0_28px_56px_-12px_rgba(98,59,199,0.78)]"
          >
            Ja, ik ben erbij
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/18 transition-[transform,background-color] duration-200 ease-out group-hover:translate-x-0.5 group-hover:scale-105 group-hover:bg-white/30">
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
