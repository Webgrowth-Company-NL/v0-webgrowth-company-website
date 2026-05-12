"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const EASE = [0.23, 1, 0.32, 1] as const;

/**
 * TODO: vervang door de echte video-URL (Firebase Storage).
 * Voorlopig de video uit de Hydroroof-offerte; later de definitieve uitleg-video.
 * Optioneel POSTER: een thumbnail-afbeelding in /public/ (anders toont 'ie de placeholder).
 */
const VIDEO_SRC = "";
const VIDEO_POSTER = "";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay } },
});

export function SectionVideo() {
  const [playing, setPlaying] = useState(false);
  const canPlay = VIDEO_SRC.length > 0;

  return (
    <section className="relative px-5 sm:px-8 pt-16 sm:pt-24 pb-28 sm:pb-40 bg-[color:var(--color-bg-elevated)]">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.span variants={fadeUp(0)} className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-bg)] text-[12.5px] font-medium text-[color:var(--color-ink-muted)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-purple)]" />
            In het kort
          </motion.span>
          <motion.h2 variants={fadeUp(0.05)} className="mt-6 font-[family-name:var(--font-display)] font-bold text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.06] tracking-[-0.02em] text-[color:var(--color-ink-strong)]">
            Liever even uitgelegd?
          </motion.h2>
          <motion.p variants={fadeUp(0.1)} className="mt-5 text-[16px] sm:text-[17.5px] leading-[1.65] text-[color:var(--color-ink-muted)]">
            In een paar minuten laat Martijn zien hoe Forester OS werkt en wat het voor jouw bedrijf betekent.
          </motion.p>
        </motion.div>

        {/* Video frame */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
          className="mt-12 sm:mt-14"
        >
          <div className="group relative aspect-video rounded-[2rem] overflow-hidden shadow-[0_30px_72px_-26px_rgba(98,59,199,0.45)] ring-1 ring-[color:var(--color-line)]">
            {canPlay && playing ? (
              // eslint-disable-next-line jsx-a11y/media-has-caption
              <video src={VIDEO_SRC} poster={VIDEO_POSTER || undefined} controls autoPlay playsInline className="h-full w-full object-cover bg-black" />
            ) : (
              <>
                {/* poster or placeholder */}
                {VIDEO_POSTER ? (
                  <Image src={VIDEO_POSTER} alt="" fill sizes="(max-width:1024px) 100vw, 896px" className="object-cover" />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2c1d5e] via-[#3a2570] to-[#5e3bc0]">
                    <span aria-hidden className="absolute -top-24 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
                    <span aria-hidden className="absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-[#7c3aed]/30 blur-3xl" />
                    <span aria-hidden className="absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
                  </div>
                )}
                {/* dark overlay for legibility */}
                <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-[rgba(12,6,18,0.45)] via-transparent to-[rgba(12,6,18,0.12)]" />
                {/* bolt watermark */}
                <span aria-hidden className="absolute top-5 left-6 inline-flex h-8 w-8 items-center justify-center opacity-90">
                  <Image src="/logo-bolt.png" alt="" width={26} height={26} className="object-contain" />
                </span>
                {/* play button */}
                <button
                  type="button"
                  onClick={() => canPlay && setPlaying(true)}
                  aria-label={canPlay ? "Speel video af" : "Video volgt binnenkort"}
                  className="btn-press absolute inset-0 flex items-center justify-center"
                >
                  <span className="inline-flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-white text-[color:var(--color-purple)] shadow-[0_18px_44px_-12px_rgba(12,6,18,0.5)] transition-transform duration-200 ease-out group-hover:scale-105">
                    <Play className="h-6 w-6 sm:h-7 sm:w-7 translate-x-0.5" strokeWidth={2.5} fill="currentColor" />
                  </span>
                </button>
                {/* label */}
                <span className="absolute bottom-5 left-6 inline-flex items-center gap-2 rounded-full bg-white/12 backdrop-blur-sm px-3 py-1.5 text-[12px] font-medium text-white">
                  {canPlay ? "± 2 min · Martijn legt het uit" : "Video volgt binnenkort"}
                </span>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
