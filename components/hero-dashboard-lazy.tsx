"use client";

import dynamic from "next/dynamic";

/**
 * Lazy wrapper voor de zware HeroDashboard-component (~1300 regels, framer-motion
 * animaties, view-cycling). Door 'm via next/dynamic met ssr=false te laden,
 * zit deze JS niet in de critical path en hoeft de LCP-meting op mobiel niet
 * te wachten op het parsen ervan. Zichtbaar effect is verwaarloosbaar omdat
 * het dashboard sowieso pas animeert wanneer 'ie in viewport komt.
 */
export const HeroDashboardLazy = dynamic(
  () => import("@/components/hero-dashboard").then((m) => m.HeroDashboard),
  {
    ssr: false,
    loading: () => (
      <div
        aria-hidden
        className="absolute inset-0 m-auto w-full max-w-[460px] rounded-[2rem] bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-sm ring-1 ring-white/15"
      />
    ),
  },
);
