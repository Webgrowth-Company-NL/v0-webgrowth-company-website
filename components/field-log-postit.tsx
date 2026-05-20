"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { FieldLog } from "@/lib/field-logs";

/**
 * Field log getoond als notitieblaadje met lijntjes-papier. De achtergrond is
 * twee gestapelde gradients: een verticale rose-marge-lijn op 40px en
 * horizontale paars-lichte regels op pitch 28px. Alle tekst in de card
 * gebruikt line-height 28px zodat de regels netjes tussen de lijntjes vallen
 * en het echt aanvoelt als handgeschreven notitie.
 *
 * Een lichte tilt per index geeft het verzameld-notitieblok-gevoel; bij hover
 * draait de card recht en tilt 'm een tikje omhoog.
 */

const TILT = [
  "rotate-[-0.85deg]",
  "rotate-[0.6deg]",
  "rotate-[-0.45deg]",
  "rotate-[0.9deg]",
];

const LINED_PAPER: React.CSSProperties = {
  backgroundColor: "#fefcf6",
  backgroundImage: [
    // Verticale roze marge-lijn op 40px (subtiel)
    "linear-gradient(to right, transparent 0, transparent 40px, rgba(255,0,150,0.28) 40px, rgba(255,0,150,0.28) 41px, transparent 41px)",
    // Horizontale paars-tinted lijntjes op pitch 28px
    "repeating-linear-gradient(to bottom, transparent 0, transparent 27px, rgba(98,59,199,0.18) 27px, rgba(98,59,199,0.18) 28px)",
  ].join(", "),
};

export function FieldLogPostit({ log, index = 0 }: { log: FieldLog; index?: number }) {
  const tilt = TILT[index % TILT.length];
  return (
    <article
      className={`group relative flex flex-col rounded-[6px] pl-12 pr-5 pt-5 pb-5 sm:pl-14 sm:pr-6 sm:pt-6 sm:pb-6 ring-1 ring-[rgba(12,6,18,0.06)] shadow-[0_8px_22px_-12px_rgba(12,6,18,0.18),0_2px_6px_-2px_rgba(12,6,18,0.08)] transition-[transform,box-shadow] duration-300 ease-out ${tilt} hover:rotate-0 hover:-translate-y-0.5 hover:shadow-[0_22px_46px_-18px_rgba(12,6,18,0.25),0_4px_10px_-2px_rgba(12,6,18,0.1)]`}
      style={LINED_PAPER}
    >
      <Link
        href={`/field-logs/${log.slug}`}
        className="absolute inset-0 rounded-[6px]"
        aria-label={log.title}
      />
      <div className="flex flex-wrap items-center gap-2 text-[11.5px] leading-[28px]">
        <span className="rounded-full bg-[color:var(--color-purple-soft)] px-2.5 py-0.5 font-semibold text-[color:var(--color-purple)]">
          {log.tag}
        </span>
        <span className="text-[color:var(--color-ink-muted)]">{log.dateLabel}</span>
        <span className="text-[color:var(--color-ink-faint)]">·</span>
        <span className="text-[color:var(--color-ink-muted)]">{log.readTime}</span>
      </div>
      <h3 className="font-[family-name:var(--font-display)] font-bold text-[16.5px] sm:text-[17.5px] leading-[28px] tracking-[-0.005em] text-[color:var(--color-ink-strong)] group-hover:text-[color:var(--color-purple)] transition-colors">
        {log.title}
      </h3>
      <p className="text-[13.5px] leading-[28px] text-[color:var(--color-ink-muted)] flex-1">
        {log.excerpt}
      </p>
      <span className="inline-flex items-center gap-1.5 text-[12.5px] leading-[28px] font-semibold text-[color:var(--color-ink)] group-hover:text-[color:var(--color-purple)] transition-colors">
        Lees verder
        <ArrowRight
          className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
          strokeWidth={2.5}
        />
      </span>
    </article>
  );
}
