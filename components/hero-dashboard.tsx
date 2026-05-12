"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Globe,
  Search,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

const EASE = [0.23, 1, 0.32, 1] as const;
const CYCLE_MS = 4200;

type ViewKey = "leads" | "website" | "seo" | "ai";

const VIEWS: { key: ViewKey; url: string; label: string; icon: typeof Users }[] = [
  { key: "leads", url: "forester.app/leads", label: "CRM & Leads", icon: Users },
  { key: "website", url: "forester.app/website", label: "Website", icon: Globe },
  { key: "seo", url: "forester.app/vindbaarheid", label: "Marketing & SEO", icon: Search },
  { key: "ai", url: "forester.app/ai", label: "AI-content", icon: Sparkles },
];

export function HeroDashboard() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduce || paused) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % VIEWS.length);
    }, CYCLE_MS);
    return () => window.clearInterval(id);
  }, [reduce, paused]);

  const view = VIEWS[active];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
      onHoverStart={() => setPaused(true)}
      onHoverEnd={() => setPaused(false)}
      className="
        absolute inset-0 m-auto
        w-full max-w-[460px]
        p-2 rounded-[2rem]
        bg-gradient-to-br from-white/70 to-[color:var(--color-bg-muted)]/60
        ring-1 ring-[color:var(--color-line)]
        shadow-[0_30px_80px_-30px_rgba(12,6,18,0.18),0_10px_30px_-15px_rgba(98,59,199,0.22)]
      "
    >
      <div className="relative h-full flex flex-col rounded-[calc(2rem-0.5rem)] bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] overflow-hidden">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[color:var(--color-line)]">
          <span className="h-2 w-2 rounded-full bg-[color:var(--color-ink-faint)]" />
          <span className="h-2 w-2 rounded-full bg-[color:var(--color-ink-faint)]" />
          <span className="h-2 w-2 rounded-full bg-[color:var(--color-ink-faint)]" />
          <div className="ml-2 flex-1 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[color:var(--color-bg-muted)]/80 overflow-hidden">
            <view.icon className="h-3 w-3 text-[color:var(--color-ink-subtle)] shrink-0" strokeWidth={2.25} />
            <AnimatePresence mode="wait">
              <motion.span
                key={view.url}
                initial={{ opacity: 0, x: 4 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -4 }}
                transition={{ duration: 0.25, ease: EASE }}
                className="text-[10.5px] font-[family-name:var(--font-mono)] text-[color:var(--color-ink-subtle)] truncate"
              >
                {view.url}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        {/* Body — cycling views */}
        <div className="relative flex-1 overflow-hidden">
          <AnimatePresence>
            <motion.div
              key={view.key}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="absolute inset-0 px-5 pt-5 pb-3"
            >
              {view.key === "leads" && <LeadsView reduce={reduce} />}
              {view.key === "website" && <WebsiteView />}
              {view.key === "seo" && <SeoView />}
              {view.key === "ai" && <AiView reduce={reduce} />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Tab dots + module label */}
        <div className="flex items-center justify-between px-5 py-3 border-t border-[color:var(--color-line)]">
          <span className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[color:var(--color-ink-subtle)]">
            {view.label}
          </span>
          <div className="flex items-center gap-1.5">
            {VIEWS.map((v, i) => (
              <button
                key={v.key}
                onClick={() => setActive(i)}
                aria-label={`Toon ${v.label}`}
                className="group py-1.5"
              >
                <span
                  className={[
                    "block h-1.5 rounded-full transition-all duration-300 ease-out",
                    i === active
                      ? "w-5 bg-[color:var(--color-purple)]"
                      : "w-1.5 bg-[color:var(--color-ink-faint)] group-hover:bg-[color:var(--color-ink-subtle)]",
                  ].join(" ")}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── View 1: Leads ──────────────────────────────── */
function LeadsView({ reduce }: { reduce: boolean | null }) {
  const leads = [
    { name: "Studio Praline", role: "Website APK", time: "2 min", live: true },
    { name: "Architectenbureau Holm", role: "Demo aanvraag", time: "14 min", live: false },
    { name: "Praktijk De Vijver", role: "Contact form", time: "1 uur", live: false },
  ];
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-end justify-between mb-4">
        <div>
          <div className="text-[10.5px] uppercase tracking-[0.16em] text-[color:var(--color-ink-subtle)] font-medium">
            Leads · 30 dagen
          </div>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="font-[family-name:var(--font-display)] text-[28px] font-bold text-[color:var(--color-ink-strong)] tabular-nums leading-none">
              287
            </span>
            <span className="inline-flex items-center gap-1 text-[11.5px] font-semibold text-emerald-600">
              <TrendingUp className="h-3 w-3" strokeWidth={2.5} />
              +47%
            </span>
          </div>
        </div>
        <div className="flex items-end gap-[3px] h-9">
          {[14, 22, 18, 26, 32, 28, 38, 44, 36, 48, 52, 60].map((h, i) => (
            <span
              key={i}
              className="block w-[5px] rounded-[1.5px] bg-[color:var(--color-purple)]/85"
              style={{ height: `${h}%`, opacity: 0.35 + (i / 12) * 0.65 }}
            />
          ))}
        </div>
      </div>
      <div className="text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-ink-subtle)] font-semibold mb-2.5">
        Recente leads
      </div>
      <ul className="space-y-2 flex-1">
        {leads.map((lead, i) => (
          <li
            key={lead.name}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl border border-[color:var(--color-line)] bg-[color:var(--color-bg)]/60"
          >
            <span
              className={[
                "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-[color:var(--color-ink)]",
                i === 0 ? "bg-[color:var(--color-purple-tint)]" : "bg-[color:var(--color-bg-muted)]",
              ].join(" ")}
            >
              {lead.name.split(" ").slice(0, 2).map((w) => w[0]).join("")}
            </span>
            <div className="min-w-0 flex-1">
              <div className="text-[12.5px] font-semibold text-[color:var(--color-ink)] truncate">{lead.name}</div>
              <div className="text-[10.5px] text-[color:var(--color-ink-subtle)] truncate">{lead.role}</div>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              {lead.live && (
                <span className="relative inline-flex h-1.5 w-1.5">
                  <span
                    className="absolute inset-0 rounded-full bg-[color:var(--color-purple)]"
                    style={{ animation: reduce ? undefined : "soft-pulse 1.8s ease-in-out infinite" }}
                  />
                </span>
              )}
              <span className="text-[10.5px] font-[family-name:var(--font-mono)] text-[color:var(--color-ink-subtle)] tabular-nums">
                {lead.time}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ── View 2: Website ────────────────────────────── */
function WebsiteView() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <div className="text-[10.5px] uppercase tracking-[0.16em] text-[color:var(--color-ink-subtle)] font-medium">
          jouwsite.nl · concept
        </div>
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[color:var(--color-purple)] text-white text-[10.5px] font-semibold">
          Publiceren
          <ArrowUpRight className="h-3 w-3" strokeWidth={2.5} />
        </span>
      </div>

      {/* Mini site preview */}
      <div className="flex-1 rounded-xl border border-[color:var(--color-line)] bg-[color:var(--color-bg)]/50 overflow-hidden">
        {/* preview header */}
        <div className="flex items-center justify-between px-3 py-2 border-b border-[color:var(--color-line)] bg-white/60">
          <div className="h-2.5 w-12 rounded-full bg-[color:var(--color-ink-faint)]" />
          <div className="flex gap-2">
            <div className="h-2 w-6 rounded-full bg-[color:var(--color-ink-faint)]" />
            <div className="h-2 w-6 rounded-full bg-[color:var(--color-ink-faint)]" />
            <div className="h-2 w-8 rounded-full bg-[color:var(--color-purple)]/60" />
          </div>
        </div>
        {/* preview hero */}
        <div className="px-4 py-4">
          <div className="h-2 w-16 rounded-full bg-[color:var(--color-purple)]/40 mb-2.5" />
          <div className="h-3.5 w-[80%] rounded bg-[color:var(--color-ink-faint)] mb-1.5" />
          <div className="h-3.5 w-[55%] rounded bg-[color:var(--color-purple)]/35 mb-3" />
          <div className="flex gap-2">
            <div className="h-6 w-20 rounded-full bg-[color:var(--color-purple)]/75" />
            <div className="h-6 w-16 rounded-full border border-[color:var(--color-line-strong)]" />
          </div>
        </div>
        {/* preview 3-col */}
        <div className="px-4 pb-4 grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-lg border border-[color:var(--color-line)] bg-white/70 p-2">
              <div className="h-4 w-4 rounded-md bg-[color:var(--color-purple)]/25 mb-1.5" />
              <div className="h-1.5 w-full rounded bg-[color:var(--color-ink-faint)] mb-1" />
              <div className="h-1.5 w-2/3 rounded bg-[color:var(--color-ink-faint)]" />
            </div>
          ))}
        </div>
      </div>

      {/* edit toolbar */}
      <div className="mt-3 flex items-center gap-1.5">
        {["Hero", "Diensten", "Reviews", "Footer"].map((b, i) => (
          <span
            key={b}
            className={[
              "px-2.5 py-1 rounded-full text-[10.5px] font-medium",
              i === 0
                ? "bg-[color:var(--color-purple-tint)] text-[color:var(--color-purple)]"
                : "border border-[color:var(--color-line)] text-[color:var(--color-ink-subtle)]",
            ].join(" ")}
          >
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── View 3: SEO / vindbaarheid ─────────────────── */
function SeoView() {
  const rows = [
    { kw: "interieurontwerp utrecht", pos: 2, up: 3 },
    { kw: "fysiotherapie de baarsjes", pos: 1, up: 0 },
    { kw: "architect verbouwing offerte", pos: 4, up: 1 },
    { kw: "boekhouder zzp dordrecht", pos: 6, up: 2 },
  ];
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-end justify-between mb-4">
        <div>
          <div className="text-[10.5px] uppercase tracking-[0.16em] text-[color:var(--color-ink-subtle)] font-medium">
            Posities · 90 dagen
          </div>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="font-[family-name:var(--font-display)] text-[28px] font-bold text-[color:var(--color-ink-strong)] tabular-nums leading-none">
              #3,1
            </span>
            <span className="inline-flex items-center gap-1 text-[11.5px] font-semibold text-emerald-600">
              <TrendingUp className="h-3 w-3" strokeWidth={2.5} />
              +1,8 gem.
            </span>
          </div>
        </div>
        {/* trend line going up */}
        <svg viewBox="0 0 80 36" className="h-9 w-20" aria-hidden>
          <polyline
            points="0,32 14,28 26,30 38,20 50,22 62,12 80,6"
            fill="none"
            stroke="var(--color-purple)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.85"
          />
        </svg>
      </div>
      <div className="text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-ink-subtle)] font-semibold mb-2.5">
        Zoekwoorden
      </div>
      <ul className="space-y-2 flex-1">
        {rows.map((r) => (
          <li
            key={r.kw}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl border border-[color:var(--color-line)] bg-[color:var(--color-bg)]/60"
          >
            <span className="inline-flex h-7 min-w-7 px-1.5 items-center justify-center rounded-md bg-[color:var(--color-purple-tint)] text-[11px] font-bold text-[color:var(--color-purple)] tabular-nums shrink-0">
              {r.pos}
            </span>
            <span className="text-[12px] font-medium text-[color:var(--color-ink)] truncate flex-1">{r.kw}</span>
            {r.up > 0 ? (
              <span className="inline-flex items-center gap-0.5 text-[10.5px] font-semibold text-emerald-600 shrink-0">
                <TrendingUp className="h-3 w-3" strokeWidth={2.5} />
                {r.up}
              </span>
            ) : (
              <span className="text-[10.5px] text-[color:var(--color-ink-faint)] shrink-0">–</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ── View 4: AI-content ─────────────────────────── */
function AiView({ reduce }: { reduce: boolean | null }) {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-2 mb-3">
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[color:var(--color-purple-tint)]">
          <Sparkles className="h-3.5 w-3.5 text-[color:var(--color-purple)]" strokeWidth={2.5} />
        </span>
        <span className="text-[12.5px] font-semibold text-[color:var(--color-ink)]">Q schrijft mee</span>
      </div>

      {/* prompt bubble */}
      <div className="self-end max-w-[80%] mb-2.5 px-3 py-2 rounded-2xl rounded-br-md bg-[color:var(--color-bg-muted)] text-[11.5px] text-[color:var(--color-ink)]">
        Schrijf een blog over duurzaam ondernemen voor het MKB
      </div>

      {/* response bubble — generating */}
      <div className="flex-1 max-w-[92%] px-3.5 py-3 rounded-2xl rounded-tl-md border border-[color:var(--color-line)] bg-white">
        <div className="text-[12px] font-semibold text-[color:var(--color-ink)] mb-2">
          Duurzaam ondernemen: 5 stappen die echt iets opleveren
        </div>
        <div className="space-y-1.5">
          <div className="h-1.5 w-full rounded bg-[color:var(--color-ink-faint)]" />
          <div className="h-1.5 w-[92%] rounded bg-[color:var(--color-ink-faint)]" />
          <div className="h-1.5 w-[78%] rounded bg-[color:var(--color-ink-faint)]" />
          <div
            className="h-1.5 w-[40%] rounded bg-gradient-to-r from-[color:var(--color-purple)]/50 to-[color:var(--color-purple)]/10"
            style={{
              backgroundSize: "200% 100%",
              animation: reduce ? undefined : "shimmer 1.6s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[color:var(--color-purple)] text-white text-[10.5px] font-semibold">
          Plaats op site
          <ArrowUpRight className="h-3 w-3" strokeWidth={2.5} />
        </span>
        <span className="px-3 py-1.5 rounded-full border border-[color:var(--color-line)] text-[10.5px] font-medium text-[color:var(--color-ink-subtle)]">
          Herschrijf
        </span>
      </div>
    </div>
  );
}
