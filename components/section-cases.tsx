"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const EASE = [0.23, 1, 0.32, 1] as const;

const CASES = [
  {
    client: "Tornado Rent",
    sector: "Infra & bouw",
    headlineLead: "Een reserveringssysteem",
    headlineHighlight: "dat écht voor B2B-verhuur werkt.",
    pillars: ["Live prijscalculator", "WhatsApp-meldingen", "100% SEO Proof"],
    img: "/images/clients/tornado-rent-hero.jpg",
    imgAlt: "VAC-EX grondzuigmachine van Tornado Rent op trailer",
    logo: "/images/clients/tornado-rent.png",
    liveUrl: "https://tornado.rent",
    liveLabel: "tornado.rent",
  },
  {
    client: "Adalace",
    sector: "Compliance-software",
    headlineLead: "Een Quickscan",
    headlineHighlight: "die compliance concreet maakt.",
    pillars: ["5-stappen wizard", "BAG- & Kadaster-koppeling", "PDF-rapport op maat"],
    img: "/images/clients/adalace-hero.jpg",
    imgAlt: "Schoolgebouw, beheerd via Adalace",
    logo: "/images/clients/adalace.png",
    liveUrl: "https://adalace.webgrowth.company",
    liveLabel: "adalace.webgrowth.company",
  },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay } },
});

export function SectionCases() {
  return (
    <section className="relative px-5 sm:px-8 pt-16 sm:pt-24 pb-28 sm:pb-40 bg-[color:var(--color-bg)]">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.span variants={fadeUp(0)} className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-bg-elevated)] text-[12.5px] font-medium text-[color:var(--color-ink-muted)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-purple)]" />
            Klantverhalen
          </motion.span>
          <motion.h2 variants={fadeUp(0.05)} className="mt-6 font-[family-name:var(--font-display)] font-bold text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.06] tracking-[-0.02em] text-[color:var(--color-ink-strong)]">
            Wat we voor anderen bouwden.
          </motion.h2>
          <motion.p variants={fadeUp(0.1)} className="mt-5 text-[16px] sm:text-[17.5px] leading-[1.65] text-[color:var(--color-ink-muted)]">
            Een greep uit de platforms die we recent opleverden — van reserveringssysteem tot compliance-wizard.
          </motion.p>
        </motion.div>

        {/* Case cards */}
        <div className="mt-14 sm:mt-16 grid lg:grid-cols-2 gap-6 lg:gap-8">
          {CASES.map((c, i) => (
            <motion.article
              key={c.client}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.15 + i * 0.1 }}
              className="group relative rounded-[2rem] bg-[color:var(--color-bg-elevated)] border border-[color:var(--color-line)] overflow-hidden shadow-[0_18px_44px_-22px_rgba(12,6,18,0.16)] hover:shadow-[0_30px_64px_-24px_rgba(12,6,18,0.24)] transition-shadow duration-300 ease-out"
            >
              {/* image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={c.img}
                  alt={c.imgAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover transition-transform duration-[700ms] ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[rgba(12,6,18,0.5)] via-[rgba(12,6,18,0.12)] to-transparent" />
                <div className="absolute bottom-4 left-4 inline-flex items-center gap-2.5 rounded-full bg-white/95 backdrop-blur-sm pl-1.5 pr-3.5 py-1.5 shadow-[0_8px_24px_-10px_rgba(12,6,18,0.4)]">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[color:var(--color-bg-muted)] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={c.logo} alt="" className="h-5 w-5 object-contain" />
                  </span>
                  <span className="text-[13px] font-semibold text-[color:var(--color-ink)]">{c.client}</span>
                  <span className="text-[11.5px] text-[color:var(--color-ink-subtle)]">{c.sector}</span>
                </div>
              </div>
              {/* body */}
              <div className="p-6 sm:p-8">
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[19px] sm:text-[22px] leading-[1.22] tracking-[-0.01em] text-[color:var(--color-ink-strong)]">
                  {c.headlineLead} <span className="text-[color:var(--color-purple)]">{c.headlineHighlight}</span>
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.pillars.map((p) => (
                    <span key={p} className="rounded-full bg-[color:var(--color-purple-soft)] px-2.5 py-1 text-[11.5px] font-medium text-[color:var(--color-purple)]">{p}</span>
                  ))}
                </div>
                <a
                  href={c.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[color:var(--color-ink)] hover:text-[color:var(--color-purple)] transition-colors group/link"
                >
                  Bekijk live: {c.liveLabel}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" strokeWidth={2.5} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
