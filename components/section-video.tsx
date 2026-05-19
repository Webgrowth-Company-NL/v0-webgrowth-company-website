"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";

const EASE = [0.23, 1, 0.32, 1] as const;

/**
 * Loom-embed laadt pas na een klik, zodat het Loom-script niet meteen op
 * pagelife het kritieke pad belast. De aspect-ratio (1000/651) komt
 * letterlijk uit de embed-code die Loom genereert.
 *
 * Thumbnail-GIF van Loom toont een preview-clip; loading=lazy zorgt dat
 * de GIF pas geladen wordt zodra de sectie in de buurt van viewport komt.
 */
const LOOM_EMBED_ID = "6003917f612844eda54a257777a41cd1";
const LOOM_THUMBNAIL =
  "https://cdn.loom.com/sessions/thumbnails/6003917f612844eda54a257777a41cd1-d2c6b7edb33d640c-full-play.gif";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay } },
});

export function SectionVideo() {
  const [playing, setPlaying] = useState(false);

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
          <motion.span
            variants={fadeUp(0)}
            className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-bg)] text-[12.5px] font-medium text-[color:var(--color-ink-muted)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-purple)]" />
            In het kort
          </motion.span>
          <motion.h2
            variants={fadeUp(0.05)}
            className="mt-6 font-[family-name:var(--font-display)] font-bold text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.06] tracking-[-0.02em] text-[color:var(--color-ink-strong)]"
          >
            Liever even uitgelegd?
          </motion.h2>
          <motion.p
            variants={fadeUp(0.1)}
            className="mt-5 text-[16px] sm:text-[17.5px] leading-[1.65] text-[color:var(--color-ink-muted)]"
          >
            In twee minuten laat Martijn zien hoe Forester OS werkt, in gewone woorden en zonder jargon of powerpoint-glamour.
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
          <div
            className="group relative rounded-[2rem] overflow-hidden shadow-[0_30px_72px_-26px_rgba(98,59,199,0.45)] ring-1 ring-[color:var(--color-line)]"
            style={{ aspectRatio: "1000 / 651" }}
          >
            {playing ? (
              <iframe
                src={`https://www.loom.com/embed/${LOOM_EMBED_ID}?autoplay=1&hideEmbedTopBar=true`}
                title="Webgrowth Company uitleg-video"
                allow="autoplay; fullscreen"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            ) : (
              <>
                {/* Loom preview-GIF als thumbnail. Plain <img> (geen Next/Image)
                    om de GIF-animatie intact te houden en geen extra
                    remotePatterns-config te hoeven onderhouden. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={LOOM_THUMBNAIL}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                {/* dark overlay for legibility */}
                <span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-[rgba(12,6,18,0.55)] via-[rgba(12,6,18,0.18)] to-[rgba(12,6,18,0.25)]"
                />
                {/* bolt watermark */}
                <span aria-hidden className="absolute top-5 left-6 inline-flex h-8 w-8 items-center justify-center opacity-90">
                  <Image src="/logo-bolt.png" alt="" width={26} height={26} className="object-contain" />
                </span>
                {/* play button */}
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  aria-label="Speel video af"
                  className="btn-press absolute inset-0 flex items-center justify-center"
                >
                  <span className="inline-flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-white text-[color:var(--color-purple)] shadow-[0_18px_44px_-12px_rgba(12,6,18,0.5)] transition-transform duration-200 ease-out group-hover:scale-105">
                    <Play className="h-6 w-6 sm:h-7 sm:w-7 translate-x-0.5" strokeWidth={2.5} fill="currentColor" />
                  </span>
                </button>
                {/* label */}
                <span className="absolute bottom-5 left-6 inline-flex items-center gap-2 rounded-full bg-white/12 backdrop-blur-sm px-3 py-1.5 text-[12px] font-medium text-white">
                  ± 2 min · Martijn legt het uit
                </span>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
