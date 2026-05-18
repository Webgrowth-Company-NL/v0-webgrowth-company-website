"use client";

import { motion } from "framer-motion";
import { BarChart3, FileBarChart, Server, Settings2 } from "lucide-react";

const EASE = [0.23, 1, 0.32, 1] as const;

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay } },
});

type Included = {
  icon: typeof FileBarChart;
  title: string;
  body: string;
};

const INCLUDED: Included[] = [
  {
    icon: FileBarChart,
    title: "Momentum Report met inzichten",
    body: "Elke maand krijg je een persoonlijk rapport waarin we doorlopen wat je site heeft gedaan, welke leads zijn binnengekomen, welke pagina's groeien en wat we komende sprint oppakken. Geen onbegrijpelijke Google Analytics-export, maar een verhaal dat je in vijf minuten doorleest en waar je iets aan hebt.",
  },
  {
    icon: BarChart3,
    title: "Live dashboard met je metrics",
    body: "Zodra je inlogt bij Forester OS zie je in één scherm hoe je site het doet: bezoekers, leads, kosten per kanaal, SEO-posities en wat er die week bewogen is. Geen rondscrollen door losse tools, alles op één plek en altijd up to date.",
  },
  {
    icon: Settings2,
    title: "Continu geoptimaliseerd door ons team",
    body: "Je site staat na livegang niet stil. Wij blijven aan knoppen draaien op snelheid, copy, conversie en techniek zonder dat je daar een meerwerk-factuur voor krijgt. Wat we tegenkomen op je site, lossen we direct op.",
  },
  {
    icon: Server,
    title: "Hosting, back-ups, beveiliging en AVG",
    body: "Snelle hosting in Nederland met SSL, dagelijkse back-ups, monitoring tegen aanvallen en privacy- en cookie-compliance zit ingebakken. Geen losse contracten met hostingpartijen of security-bureaus, het zit allemaal in je abonnement.",
  },
];

export function ForesterOsIncluded() {
  return (
    <section id="inbegrepen" className="relative px-5 sm:px-8 pt-16 sm:pt-24 pb-28 sm:pb-36 bg-[#faf6f0] scroll-mt-24">
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
            className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full border border-[color:var(--color-line)] bg-white text-[12.5px] font-medium text-[color:var(--color-ink-muted)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-purple)]" />
            In elk pakket inbegrepen
          </motion.span>
          <motion.h2
            variants={fadeUp(0.05)}
            className="mt-6 font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,4.6vw,3.2rem)] leading-[1.08] tracking-[-0.02em] text-[color:var(--color-ink-strong)]"
          >
            En dit zit er ook nog standaard bij.
          </motion.h2>
          <motion.p
            variants={fadeUp(0.1)}
            className="mt-5 text-[16px] sm:text-[17px] leading-[1.65] text-[color:var(--color-ink-muted)]"
          >
            Niet alleen de zichtbare modules, maar ook het werk eromheen dat een site én bedrijf scherp houdt. In elk pakket inbegrepen, geen losse uurtjes.
          </motion.p>
        </motion.div>

        <div className="mt-12 sm:mt-14 grid sm:grid-cols-2 gap-5 sm:gap-6">
          {INCLUDED.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: EASE, delay: 0.1 + i * 0.06 }}
              className="rounded-3xl bg-white border border-[color:var(--color-line)] p-6 sm:p-7 shadow-[0_1px_2px_rgba(12,6,18,0.04)] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_44px_-22px_rgba(12,6,18,0.18)]"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--color-purple-tint)]">
                <item.icon className="h-5 w-5 text-[color:var(--color-purple)]" strokeWidth={2.25} />
              </span>
              <h3 className="mt-5 font-[family-name:var(--font-display)] font-bold text-[18px] sm:text-[19px] tracking-[-0.01em] text-[color:var(--color-ink-strong)]">
                {item.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-[1.7] text-[color:var(--color-ink-muted)]">
                {item.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
