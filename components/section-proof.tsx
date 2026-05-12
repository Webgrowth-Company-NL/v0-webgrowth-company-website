"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Quote, Star } from "lucide-react";

const EASE = [0.23, 1, 0.32, 1] as const;

const FEATURED = {
  quote:
    "Dankzij Webgrowth Company hebben we nu een website die niet alleen mooi is, maar actief bijdraagt aan onze groei en processen automatiseert.",
  name: "Gil Lont",
  result: "Meer leads via de website, minder handmatig werk",
  img: "/images/testimonials/gil-lont.webp",
};

const SECONDARY = {
  quote:
    "Complexe technische keuzes worden helder gemaakt en snel uitgevoerd, waardoor wij kunnen focussen op marketing en strategie.",
  name: "Linda van der Zwan",
  result: "Focus op strategie in plaats van techniek",
  img: "/images/testimonials/linda-van-der-zwan.jpg",
};

const STATS = [
  { value: "227", label: "tevreden klanten" },
  { value: "9,4", label: "op Google", stars: true },
  { value: "2016", label: "onze eerste klant" },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay } },
});

function ResultTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#c4b5fd]/15 px-3 py-1 text-[11.5px] font-semibold text-[#d6c9fb]">
      <span className="h-1 w-1 rounded-full bg-[#c4b5fd]" />
      {children}
    </span>
  );
}

export function SectionProof() {
  return (
    <section className="relative isolate overflow-hidden px-5 sm:px-8 pt-16 sm:pt-24 pb-28 sm:pb-40 bg-[#2c1d5e] text-white">
      {/* depth */}
      <div aria-hidden className="absolute -top-32 -right-20 h-[520px] w-[520px] rounded-full" style={{ background: "radial-gradient(closest-side, rgba(139,92,246,0.32), rgba(139,92,246,0) 70%)" }} />
      <div aria-hidden className="absolute -bottom-40 -left-24 h-[560px] w-[560px] rounded-full" style={{ background: "radial-gradient(closest-side, rgba(124,58,237,0.22), rgba(124,58,237,0) 70%)" }} />
      <div aria-hidden className="absolute inset-0 pointer-events-none opacity-70 [mask-image:radial-gradient(ellipse_55%_55%_at_50%_30%,black,transparent)]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.span variants={fadeUp(0)} className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full border border-white/15 bg-white/10 text-[12.5px] font-medium text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-[#c4b5fd]" />
            Klanten aan het woord
          </motion.span>
          <motion.h2 variants={fadeUp(0.05)} className="mt-6 font-[family-name:var(--font-display)] font-bold text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.06] tracking-[-0.02em]">
            227 organisaties gingen je voor.
          </motion.h2>
          <motion.p variants={fadeUp(0.1)} className="mt-5 text-[16px] sm:text-[17.5px] leading-[1.65] text-white/70">
            Sinds 2016 bouwen we platforms die niet alleen mooi zijn, maar groei opleveren. Dit is wat dat doet.
          </motion.p>
        </motion.div>

        {/* Quotes + stats */}
        <div className="mt-14 sm:mt-16 grid lg:grid-cols-[1.45fr_1fr] gap-6 lg:gap-7">
          {/* Featured quote */}
          <motion.figure
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
            className="relative rounded-[2rem] bg-white/[0.06] border border-white/10 p-8 sm:p-10 backdrop-blur-sm"
          >
            <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/[0.06]" />
            <Quote className="h-9 w-9 text-[#c4b5fd]/40" strokeWidth={1.5} fill="currentColor" />
            <blockquote className="mt-5 font-[family-name:var(--font-display)] text-[21px] sm:text-[25px] leading-[1.4] text-white">
              {FEATURED.quote}
            </blockquote>
            <figcaption className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-white/10 pt-6">
              <span className="inline-flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={FEATURED.img} alt={FEATURED.name} loading="lazy" className="h-11 w-11 rounded-full object-cover ring-2 ring-white/15" />
                <span className="text-[15px] font-semibold text-white">{FEATURED.name}</span>
              </span>
              <ResultTag>{FEATURED.result}</ResultTag>
            </figcaption>
          </motion.figure>

          {/* Right column */}
          <div className="flex flex-col gap-6 lg:gap-7">
            <motion.figure
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.25 }}
              className="relative rounded-2xl bg-white/[0.06] border border-white/10 p-6 backdrop-blur-sm"
            >
              <Quote className="h-6 w-6 text-[#c4b5fd]/40" strokeWidth={1.5} fill="currentColor" />
              <blockquote className="mt-3 text-[14.5px] leading-relaxed text-white/85">{SECONDARY.quote}</blockquote>
              <figcaption className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="inline-flex items-center gap-2.5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={SECONDARY.img} alt={SECONDARY.name} loading="lazy" className="h-9 w-9 rounded-full object-cover ring-2 ring-white/15" />
                  <span className="text-[13.5px] font-semibold text-white">{SECONDARY.name}</span>
                </span>
                <ResultTag>{SECONDARY.result}</ResultTag>
              </figcaption>
            </motion.figure>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.35 }}
              className="relative rounded-2xl bg-white/[0.06] border border-white/10 p-6 backdrop-blur-sm divide-y divide-white/10"
            >
              {STATS.map((s) => (
                <div key={s.label} className="flex items-center justify-between gap-3 py-3 first:pt-0 last:pb-0">
                  <span className="text-[13px] text-white/65">{s.label}</span>
                  <span className="flex items-center gap-2">
                    {s.stars && (
                      <span className="flex gap-[2px]">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="h-3.5 w-3.5 fill-[color:var(--color-amber)] text-[color:var(--color-amber)]" strokeWidth={0} />
                        ))}
                      </span>
                    )}
                    <span className="font-[family-name:var(--font-display)] text-[22px] font-bold tabular-nums leading-none">{s.value}</span>
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.3 }}
          className="mt-12 sm:mt-14 flex justify-center"
        >
          <Link href="/cases" className="btn-press group inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full bg-white text-[color:var(--color-purple)] text-[14px] font-semibold hover:bg-white shadow-[0_8px_24px_-10px_rgba(12,6,18,0.4)]">
            Lees alle klantverhalen
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[color:var(--color-purple)]/12 transition-transform duration-200 ease-out group-hover:translate-x-0.5">
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
