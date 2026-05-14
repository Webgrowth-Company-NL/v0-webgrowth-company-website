"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EASE = [0.23, 1, 0.32, 1] as const;

export function SectionCta() {
  return (
    <section className="relative isolate overflow-hidden px-5 sm:px-8 pt-20 sm:pt-28 pb-20 sm:pb-28 bg-[#2c1d5e] text-white">
      <div aria-hidden className="absolute -top-32 left-1/4 h-[560px] w-[560px] rounded-full" style={{ background: "radial-gradient(closest-side, rgba(139,92,246,0.36), rgba(139,92,246,0) 70%)" }} />
      <div aria-hidden className="absolute -bottom-40 right-1/4 h-[600px] w-[600px] rounded-full" style={{ background: "radial-gradient(closest-side, rgba(124,58,237,0.26), rgba(124,58,237,0) 70%)" }} />
      <div aria-hidden className="absolute inset-0 pointer-events-none opacity-70 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black,transparent)]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
      {/* fade decorations to the deep-purple surface at the top edge so the wave-divider connects seamlessly from lavender above */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-32 sm:h-40 pointer-events-none bg-gradient-to-b from-[#2c1d5e] to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: EASE }}
        className="relative mx-auto max-w-3xl text-center"
      >
        <span className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full border border-white/15 bg-white/10 text-[12.5px] font-medium text-white/80">
          <span className="h-1.5 w-1.5 rounded-full bg-[#c4b5fd]" />
          Klaar om te groeien?
        </span>
        <h2 className="mt-6 font-[family-name:var(--font-display)] font-bold text-[clamp(2.4rem,5.5vw,4.2rem)] leading-[1.04] tracking-[-0.02em]">
          Eén abonnement, negen tools minder.{" "}
          <span className="text-[#c4b5fd]">Meer groei.</span>
        </h2>
        <p className="mt-5 text-[16px] sm:text-[18px] leading-[1.6] text-white/75 max-w-lg mx-auto">
          Doe de gratis website APK en zie wat er beter kan, of plan meteen een kennismaking.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/website-apk"
            className="btn-press group inline-flex items-center gap-2 pl-6 pr-2 py-2.5 rounded-full bg-white text-[color:var(--color-purple)] text-[15px] font-semibold shadow-[0_10px_30px_-10px_rgba(12,6,18,0.5)]"
          >
            Doe de gratis website APK
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--color-purple)]/12 transition-transform duration-200 ease-out group-hover:translate-x-0.5">
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </span>
          </Link>
          <Link
            href="/contact"
            className="btn-press inline-flex items-center px-6 py-3 rounded-full border border-white/25 hover:border-white/45 hover:bg-white/5 text-white text-[15px] font-semibold transition-colors"
          >
            Boek een kennismaking
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
