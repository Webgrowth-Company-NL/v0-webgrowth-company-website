"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUp, Globe, MousePointer2, Search, Sparkles, Star, TrendingUp, Users, Zap } from "lucide-react";

const EASE = [0.23, 1, 0.32, 1] as const;
const CYCLE_MS = 6500;

type ViewKey = "website" | "seo" | "crm" | "ai";

const VIEWS: { key: ViewKey; url: string; label: string; short: string; icon: typeof Globe }[] = [
  { key: "website", url: "forester.app/website", label: "Website & CMS", short: "Website", icon: Globe },
  { key: "seo", url: "forester.app/vindbaarheid", label: "Marketing & SEO", short: "SEO", icon: Search },
  { key: "crm", url: "forester.app/crm", label: "CRM & Sales", short: "CRM", icon: Users },
  { key: "ai", url: "forester.app/ai", label: "AI-content met Q", short: "AI", icon: Sparkles },
];

type Stat = { label: string; value: string; delta: string; descriptor: string; trend?: boolean };

/** Floating stat-chips, afgestemd op de actieve view. */
const FLOATING: Record<ViewKey, [Stat, Stat]> = {
  website: [
    { label: "PageSpeed", value: "98", delta: "/100", descriptor: "mobiel", trend: false },
    { label: "Conversie", value: "6,4%", delta: "+1,1pt", descriptor: "vs vorige periode" },
  ],
  seo: [
    { label: "Top-10 posities", value: "47", delta: "+12", descriptor: "deze maand" },
    { label: "Organisch verkeer", value: "+47%", delta: "afgelopen jaar", descriptor: "", trend: false },
  ],
  crm: [
    { label: "Open deals", value: "23", delta: "+5", descriptor: "deze week" },
    { label: "Gewonnen", value: "€18k", delta: "+22%", descriptor: "deze maand" },
  ],
  ai: [
    { label: "Inzichten", value: "12", delta: "+4", descriptor: "deze week" },
    { label: "Tijd bespaard", value: "18u", delta: "/ maand", descriptor: "op content", trend: false },
  ],
};

export function HeroDashboard() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [userPicked, setUserPicked] = useState(false);
  const autoCycle = !reduce && !paused && !userPicked;

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

        {/* View tabs — pick which dashboard you want to see */}
        <div className="flex items-center gap-1 px-2.5 py-2.5 border-b border-[color:var(--color-line)]">
          {VIEWS.map((v, i) => {
            const isActive = i === active;
            return (
              <motion.button
                key={v.key}
                type="button"
                onClick={() => { setActive(i); setUserPicked(true); }}
                aria-pressed={isActive}
                animate={isActive && !reduce ? { scale: [1, 1.06, 1] } : { scale: 1 }}
                transition={{ duration: 0.4, ease: EASE }}
                className={[
                  "flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg px-1.5 py-1.5 text-[11px] font-semibold cursor-pointer",
                  "transition-[background-color,color] duration-200 ease-out",
                  isActive
                    ? "bg-[color:var(--color-purple)] text-white"
                    : "bg-[color:var(--color-bg-muted)]/70 text-[color:var(--color-ink-muted)] hover:bg-[color:var(--color-purple-soft)] hover:text-[color:var(--color-purple)]",
                ].join(" ")}
                style={isActive && !reduce ? { animation: "tab-glow 2.4s ease-in-out infinite" } : undefined}
              >
                <v.icon className="h-3.5 w-3.5 shrink-0" strokeWidth={2.25} />
                {v.short}
              </motion.button>
            );
          })}
        </div>

        {/* Timer bar — runs out → next view (pauses on hover, stops once you pick one) */}
        <div className="h-[3px] bg-[color:var(--color-bg-muted)] overflow-hidden shrink-0">
          {autoCycle && (
            <motion.div
              key={active}
              className="h-full origin-left bg-[color:var(--color-purple)]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: CYCLE_MS / 1000, ease: "linear" }}
              onAnimationComplete={() => setActive((i) => (i + 1) % VIEWS.length)}
            />
          )}
        </div>

        {/* Body — selected view */}
        <div className="relative flex-1 overflow-hidden">
          <AnimatePresence>
            <motion.div
              key={view.key}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="absolute inset-0 px-5 pt-5 pb-5"
            >
              {view.key === "website" && <WebsiteView />}
              {view.key === "seo" && <SeoView reduce={reduce} />}
              {view.key === "crm" && <CrmView />}
              {view.key === "ai" && <AiView />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Floating chips — the stats change with the active view */}
      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: EASE, delay: 1.0 }}
        className="absolute -top-1 left-2 sm:-left-5 z-10"
        style={{ animation: reduce ? undefined : "float-y 7.5s ease-in-out infinite" }}
      >
        <Chip>
          <span className="flex gap-[2px]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-[color:var(--color-amber)] text-[color:var(--color-amber)]" strokeWidth={0} />
            ))}
          </span>
          <span className="text-[12.5px] font-semibold text-[color:var(--color-ink)] tabular-nums">9,4</span>
          <span className="text-[11.5px] text-[color:var(--color-ink-subtle)]">op Google</span>
        </Chip>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: EASE, delay: 1.15 }}
        className="absolute -bottom-3 -right-2 sm:-right-6 z-10"
        style={{ animation: reduce ? undefined : "float-y 8.5s ease-in-out 0.6s infinite" }}
      >
        <AnimatePresence mode="wait">
          <motion.div key={`s0-${view.key}`} initial={{ opacity: 0, y: 10, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8, scale: 0.97 }} transition={{ duration: 0.35, ease: EASE }}>
            <StatChip {...FLOATING[view.key][0]} />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: EASE, delay: 1.3 }}
        className="absolute top-[50%] -translate-y-1/2 -left-5 sm:-left-9 z-10 hidden sm:block"
        style={{ animation: reduce ? undefined : "float-y 10s ease-in-out 1.2s infinite" }}
      >
        <AnimatePresence mode="wait">
          <motion.div key={`s1-${view.key}`} initial={{ opacity: 0, y: 10, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8, scale: 0.97 }} transition={{ duration: 0.35, ease: EASE, delay: 0.05 }}>
            <StatChip {...FLOATING[view.key][1]} />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

/* ── View: Website (wireframe + cursor die een formulier invult) ── */
const CURSOR_STEPS: { x: number; y: number; click?: boolean }[] = [
  { x: 84, y: 9 },                 // 0 — idle, rechtsboven
  { x: 26, y: 46 },                // 1 — naar veld 1
  { x: 26, y: 46, click: true },   // 2 — klik veld 1 → ingevuld
  { x: 26, y: 58 },                // 3 — naar veld 2
  { x: 26, y: 58, click: true },   // 4 — klik veld 2 → ingevuld
  { x: 26, y: 70 },                // 5 — naar veld 3
  { x: 26, y: 70, click: true },   // 6 — klik veld 3 → ingevuld
  { x: 50, y: 83 },                // 7 — naar verstuurknop
  { x: 50, y: 83, click: true },   // 8 — klik versturen
  { x: 50, y: 83 },                // 9 — vasthouden
];

function FormField({ filled, fillW }: { filled: boolean; fillW: string }) {
  return (
    <div className="relative h-7 rounded-md border border-[color:var(--color-line)] bg-[color:var(--color-bg-muted)]/50 overflow-hidden">
      <span
        className="absolute left-2.5 top-1/2 -translate-y-1/2 h-1.5 rounded bg-[color:var(--color-purple)]/45 transition-[width] duration-500 ease-out"
        style={{ width: filled ? fillW : "0%" }}
      />
    </div>
  );
}

function WebsiteView() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (reduce) { setStep(8); return; }
    setStep(0);
    const id = window.setInterval(() => setStep((s) => (s + 1) % CURSOR_STEPS.length), 650);
    return () => window.clearInterval(id);
  }, [reduce]);

  const pos = CURSOR_STEPS[step];
  const f1 = step >= 2;
  const f2 = step >= 4;
  const f3 = step >= 6;
  const submitted = step >= 8;

  return (
    <div className="relative h-full overflow-hidden">
      {/* faux page header */}
      <div className="flex items-center justify-between rounded-md border border-[color:var(--color-line)] bg-[color:var(--color-bg)]/50 px-2.5 py-1.5">
        <span className="h-2 w-9 rounded bg-[color:var(--color-ink-faint)]" />
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-6 rounded bg-[color:var(--color-ink-faint)]/60" />
          <span className="h-1.5 w-6 rounded bg-[color:var(--color-ink-faint)]/60" />
          <span className="h-3 w-10 rounded bg-[color:var(--color-purple)]/25" />
        </span>
      </div>

      {/* faux hero copy */}
      <div className="mt-2.5 space-y-1.5">
        <span className="block h-2.5 w-3/5 rounded bg-[color:var(--color-ink-faint)]" />
        <span className="block h-2.5 w-2/5 rounded bg-[color:var(--color-ink-faint)]" />
        <span className="block h-1.5 w-4/5 rounded bg-[color:var(--color-ink-faint)]/55" />
      </div>

      {/* the form the cursor fills in */}
      <div className="mt-3 rounded-lg border border-dashed border-[color:var(--color-purple)]/40 bg-white p-3 shadow-[0_10px_24px_-16px_rgba(98,59,199,0.3)]">
        <div className="mb-2.5 text-[11px] font-semibold text-[color:var(--color-ink)]">Vraag een offerte aan</div>
        <div className="space-y-2">
          <FormField filled={f1} fillW="58%" />
          <FormField filled={f2} fillW="72%" />
          <FormField filled={f3} fillW="44%" />
          <div
            className={[
              "h-7 rounded-md flex items-center justify-center text-[10.5px] font-semibold transition-colors duration-300",
              submitted ? "bg-emerald-600 text-white" : "bg-[color:var(--color-purple)] text-white",
            ].join(" ")}
          >
            {submitted ? "✓ Verzonden, we nemen contact op" : "Verstuur aanvraag"}
          </div>
        </div>
      </div>

      {/* the moving cursor + click pulse */}
      <div
        className="pointer-events-none absolute z-20"
        style={{
          left: `${pos.x}%`,
          top: `${pos.y}%`,
          transition: reduce ? undefined : "left 520ms cubic-bezier(0.23,1,0.32,1), top 520ms cubic-bezier(0.23,1,0.32,1)",
        }}
      >
        {pos.click && !reduce && (
          <motion.span
            key={step}
            className="absolute -left-1 -top-1 h-7 w-7 rounded-full bg-[color:var(--color-purple)]/30"
            initial={{ scale: 0.4, opacity: 0.6 }}
            animate={{ scale: 2.3, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        )}
        <MousePointer2 className="h-4 w-4 -translate-x-px -translate-y-px fill-[color:var(--color-ink-strong)] text-white drop-shadow-[0_2px_4px_rgba(12,6,18,0.25)]" strokeWidth={1.5} />
      </div>
    </div>
  );
}

/* ── View: SEO (ranking-klim animatie) ───────────── */
function SeoView({ reduce }: { reduce: boolean | null }) {
  const [ourPos, setOurPos] = useState(3);
  useEffect(() => {
    if (reduce) { setOurPos(0); return; }
    setOurPos(3);
    let n = 3;
    const id = window.setInterval(() => {
      n -= 1;
      setOurPos(n);
      if (n <= 0) window.clearInterval(id);
    }, 1400);
    return () => window.clearInterval(id);
  }, [reduce]);

  const others = [
    { id: "a", site: "websitebureau-x.nl" },
    { id: "b", site: "marketingbureau-y.nl" },
    { id: "c", site: "agency-zwart.nl" },
    { id: "d", site: "designstudio-w.nl" },
  ];
  const rows: { id: string; site?: string; ours: boolean }[] = [];
  let oi = 0;
  for (let slot = 0; slot < 5; slot++) {
    if (slot === ourPos) rows.push({ id: "ours", ours: true });
    else { rows.push({ id: others[oi].id, site: others[oi].site, ours: false }); oi++; }
  }

  return (
    <div className="h-full flex flex-col">
      <div className="mb-3.5">
        <div className="text-[10.5px] uppercase tracking-[0.16em] text-[color:var(--color-ink-subtle)] font-medium">Positie in Google · &ldquo;website laten maken&rdquo;</div>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="font-[family-name:var(--font-display)] text-[24px] font-bold text-[color:var(--color-ink-strong)] tabular-nums leading-none">#{ourPos + 1}</span>
          <span className="inline-flex items-center gap-0.5 text-[11.5px] font-semibold text-emerald-600">
            <TrendingUp className="h-3 w-3" strokeWidth={2.5} />
            {ourPos === 0 ? "staat bovenaan" : "klimt naar #1"}
          </span>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-1.5">
        {rows.map((r, i) => (
          <motion.div
            layout
            key={r.id}
            transition={{ duration: 0.5, ease: EASE }}
            className={[
              "flex items-center gap-2.5 rounded-xl px-3 py-2",
              r.ours ? "border border-[color:var(--color-purple)]/40 bg-[color:var(--color-purple-soft)]" : "border border-[color:var(--color-line)] bg-[color:var(--color-bg)]/50",
            ].join(" ")}
          >
            <span className={["inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-[10px] font-bold tabular-nums", r.ours ? "bg-[color:var(--color-purple)] text-white" : "bg-[color:var(--color-bg-muted)] text-[color:var(--color-ink-subtle)]"].join(" ")}>{i + 1}</span>
            <div className="min-w-0 flex-1">
              {r.ours ? (
                <div className="flex items-center gap-1.5">
                  <span className="text-[12px] font-semibold text-[color:var(--color-purple)] truncate">jouwsite.nl</span>
                  <span className="inline-flex items-center gap-0.5 text-[9.5px] font-bold text-[color:var(--color-purple)]"><ArrowUp className="h-2.5 w-2.5" strokeWidth={3} />stijgt</span>
                </div>
              ) : (
                <span className="text-[11.5px] text-[color:var(--color-ink-subtle)] truncate">{r.site}</span>
              )}
              <div className={["mt-1 h-1.5 rounded", r.ours ? "w-3/4 bg-[color:var(--color-purple)]/35" : "w-2/3 bg-[color:var(--color-ink-faint)]"].join(" ")} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ── View: CRM (kanban / sales-pijplijn) ─────────── */
function CrmView() {
  const columns: { title: string; n: number; items: { name: string; value: string; hot?: boolean }[] }[] = [
    { title: "Nieuw", n: 2, items: [{ name: "Studio Praline", value: "€2,4k", hot: true }, { name: "Bureau Klaverwijk", value: "€5,1k" }] },
    { title: "In gesprek", n: 1, items: [{ name: "Architectenbureau Holm", value: "€8,0k" }] },
    { title: "Voorstel", n: 2, items: [{ name: "Praktijk De Vijver", value: "€3,7k" }, { name: "Atelier Mooij", value: "€1,9k" }] },
  ];
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <div className="text-[10.5px] uppercase tracking-[0.16em] text-[color:var(--color-ink-subtle)] font-medium">Sales-pijplijn</div>
        <span className="text-[10px] font-[family-name:var(--font-mono)] text-[color:var(--color-ink-faint)]">5 deals · €21k open</span>
      </div>
      <div className="flex-1 grid grid-cols-3 gap-2">
        {columns.map((c, ci) => (
          <div key={c.title} className="rounded-xl border border-[color:var(--color-line)] bg-[color:var(--color-bg)]/50 p-2 flex flex-col">
            <div className="flex items-center justify-between px-1 mb-2">
              <span className="text-[9.5px] font-semibold uppercase tracking-[0.06em] text-[color:var(--color-ink-subtle)]">{c.title}</span>
              <span className="text-[9.5px] font-[family-name:var(--font-mono)] text-[color:var(--color-ink-faint)]">{c.n}</span>
            </div>
            <div className="space-y-2">
              {c.items.map((it, i) => (
                <div key={it.name} className="rounded-lg border border-[color:var(--color-line)] bg-white p-2 shadow-[0_4px_12px_-8px_rgba(12,6,18,0.12)]">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className={["inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[8.5px] font-bold text-[color:var(--color-ink)]", ci === 0 && i === 0 ? "bg-[color:var(--color-purple-tint)]" : "bg-[color:var(--color-bg-muted)]"].join(" ")}>{it.name.split(" ").slice(0, 2).map((w) => w[0]).join("")}</span>
                    <span className="text-[10px] font-semibold text-[color:var(--color-ink)] truncate">{it.name}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[9.5px] font-[family-name:var(--font-mono)] text-[color:var(--color-ink-subtle)] tabular-nums">{it.value}</span>
                    {it.hot && <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-purple)]" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-1.5 text-[10px]">
        <span className="inline-flex items-center gap-1 rounded-full bg-[color:var(--color-purple-tint)] px-2 py-0.5 font-semibold text-[color:var(--color-purple)]"><Users className="h-2.5 w-2.5" strokeWidth={2.5} />4 teamleden</span>
        <span className="rounded-full border border-[color:var(--color-line)] px-2 py-0.5 text-[color:var(--color-ink-subtle)]">7 open taken</span>
      </div>
    </div>
  );
}

/* ── View: AI (Q Insights, zoals op het Forester-dashboard) ── */
function AiView() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-2.5 mb-3.5">
        <span className="relative inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full overflow-hidden ring-2 ring-[color:var(--color-purple)]/25">
          <Image src="/images/q-insights.jpg" alt="Q" width={36} height={36} className="object-cover" />
        </span>
        <div className="leading-tight">
          <div className="text-[9.5px] font-bold uppercase tracking-[0.16em] text-[color:var(--color-purple)]">Inzicht van Q</div>
          <div className="text-[12px] font-semibold text-[color:var(--color-ink)]">Je AI-assistent</div>
        </div>
      </div>
      <div className="flex-1 rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-bg)]/50 p-4 flex flex-col">
        <p className="text-[13px] leading-relaxed text-[color:var(--color-ink)]">
          Je blogpagina trok deze maand <span className="font-semibold text-[color:var(--color-purple)]">3× meer bezoekers</span>, maar bijna niemand klikt door naar je contactpagina. Zal ik een opvallendere knop voorstellen?
        </p>
        <div className="mt-auto pt-4 flex items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-[color:var(--color-purple)] px-3 py-1.5 text-[11px] font-semibold text-white">Ja, doe maar</span>
          <span className="rounded-full border border-[color:var(--color-line)] px-3 py-1.5 text-[11px] font-medium text-[color:var(--color-ink-subtle)]">Later</span>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-1.5 text-[10px] text-[color:var(--color-ink-subtle)]">
        <Sparkles className="h-3 w-3 text-[color:var(--color-purple)]" strokeWidth={2.5} />
        <span>Op basis van bezoekersdata · afgelopen 30 dagen</span>
      </div>
    </div>
  );
}

/* ── Floating chip primitives ────────────────────── */
function Chip({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full bg-white border border-[color:var(--color-line)] shadow-[0_1px_2px_rgba(12,6,18,0.04),0_24px_48px_-24px_rgba(12,6,18,0.22)]">
      {children}
    </div>
  );
}

function StatChip({ label, value, delta, descriptor, trend = true }: Stat) {
  return (
    <div className="relative flex flex-col gap-1.5 min-w-[150px] pl-3.5 pr-9 py-3 rounded-2xl bg-white border border-[color:var(--color-line)] shadow-[0_1px_2px_rgba(12,6,18,0.04),0_24px_56px_-24px_rgba(12,6,18,0.22)]">
      <span className="absolute top-2.5 right-2.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[color:var(--color-purple-tint)]">
        <Zap className="h-3 w-3 text-[color:var(--color-purple)]" strokeWidth={2.5} fill="currentColor" />
      </span>
      <span className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[color:var(--color-ink-subtle)]">{label}</span>
      <span className="font-[family-name:var(--font-display)] text-[26px] font-bold text-[color:var(--color-ink-strong)] tabular-nums leading-none">{value}</span>
      {trend ? (
        <span className="inline-flex items-center gap-1 text-[10.5px]">
          <TrendingUp className="h-3 w-3 text-emerald-600" strokeWidth={2.5} />
          <span className="font-semibold text-emerald-600 tabular-nums">{delta}</span>
          {descriptor && <span className="text-[color:var(--color-ink-subtle)] truncate">{descriptor}</span>}
        </span>
      ) : (
        <span className="inline-flex items-center gap-1 text-[10.5px] text-[color:var(--color-ink-subtle)]">
          <span className="font-semibold text-[color:var(--color-ink-muted)] tabular-nums">{delta}</span>
          {descriptor && <span className="truncate">{descriptor}</span>}
        </span>
      )}
    </div>
  );
}
