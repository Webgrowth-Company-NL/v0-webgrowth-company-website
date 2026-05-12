"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, animate, motion, useMotionValue, useReducedMotion } from "framer-motion";
import { ArrowUp, Globe, MousePointer2, Search, Send, Sparkles, Star, TrendingUp, Users, Zap } from "lucide-react";

const EASE = [0.23, 1, 0.32, 1] as const;
const CYCLE_MS = 6500;

type ViewKey = "website" | "seo" | "crm" | "ai";

const VIEWS: { key: ViewKey; url: string; label: string; short: string; icon: typeof Globe }[] = [
  { key: "website", url: "forester.app/website", label: "Website & CMS", short: "Website", icon: Globe },
  { key: "seo", url: "forester.app/vindbaarheid", label: "Marketing & SEO", short: "SEO", icon: Search },
  { key: "crm", url: "forester.app/crm", label: "CRM & Sales", short: "CRM", icon: Users },
  { key: "ai", url: "forester.app/q", label: "Q, je AI-assistent", short: "Q", icon: Sparkles },
];

type StatViz = "gauge" | "bars" | "spark" | "bolt";
type Stat = {
  label: string;
  prefix?: string;
  num: number;
  decimals?: number;
  suffix?: string;
  delta: string;
  descriptor: string;
  trend?: boolean;
  viz: StatViz;
};

/** Floating stat-chips, afgestemd op de actieve view. Cijfer telt op + de mini-viz speelt af bij elke wissel. */
const FLOATING: Record<ViewKey, [Stat, Stat]> = {
  website: [
    { label: "PageSpeed", num: 98, delta: "/100", descriptor: "mobiel", trend: false, viz: "gauge" },
    { label: "Conversie", num: 6.4, decimals: 1, suffix: "%", delta: "+1,1pt", descriptor: "vs vorige periode", viz: "bars" },
  ],
  seo: [
    { label: "Top-10 posities", num: 47, delta: "+12", descriptor: "deze maand", viz: "bars" },
    { label: "Organisch verkeer", prefix: "+", num: 47, suffix: "%", delta: "afgelopen jaar", descriptor: "", trend: false, viz: "spark" },
  ],
  crm: [
    { label: "Open deals", num: 23, delta: "+5", descriptor: "deze week", viz: "bars" },
    { label: "Gewonnen", prefix: "€", num: 18, suffix: "k", delta: "+22%", descriptor: "deze maand", viz: "spark" },
  ],
  ai: [
    { label: "Reactietijd", num: 2, suffix: " min", delta: "gemiddeld", descriptor: "", trend: false, viz: "bolt" },
    { label: "Tijd bespaard", num: 14, suffix: "u", delta: "/ maand", descriptor: "vs los regelen", trend: false, viz: "spark" },
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
              {view.key === "ai" && <QView />}
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
        className="absolute -top-5 -right-2 sm:-right-10 z-10"
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
        className="absolute -bottom-5 -left-3 sm:-left-10 z-10 hidden sm:block"
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

/* ── View: Website (het formulier vult zich, de cursor zakt naar de verzendknop en klikt — één keer) ── */
const WEB_FORM: { label: string; value: string; area?: boolean }[] = [
  { label: "Naam", value: "Mireille Bakker" },
  { label: "E-mailadres", value: "hallo@buronord.nl" },
  { label: "Waar kunnen we je mee helpen?", value: "Nieuwe website graag", area: true },
];
const WEB_CURSOR_IDLE = { x: 76, y: 14 };
const WEB_F = { idle: 4, pause: 6, reach: 6, click: 1, hold: 16 };
const WEB_FILL = WEB_FORM.reduce((a, f) => a + f.value.length, 0);
const WEB_TOTAL = WEB_F.idle + WEB_FILL + WEB_F.pause + WEB_F.reach + WEB_F.click + WEB_F.hold;

type WebState = { typed: number[]; caretField: number | null; atButton: boolean; submitted: boolean; click: boolean };

function webStateFor(frame: number): WebState {
  let f = frame;
  const typed = [0, 0, 0];
  const base: WebState = { typed, caretField: null, atButton: false, submitted: false, click: false };
  if (f < WEB_F.idle) return base;
  f -= WEB_F.idle;
  for (let i = 0; i < WEB_FORM.length; i++) {
    const len = WEB_FORM[i].value.length;
    if (f < len) { typed[i] = f + 1; return { ...base, caretField: i }; }
    f -= len;
    typed[i] = len;
  }
  if (f < WEB_F.pause) return { ...base };
  f -= WEB_F.pause;
  if (f < WEB_F.reach) return { ...base, atButton: true };
  f -= WEB_F.reach;
  if (f < WEB_F.click) return { ...base, atButton: true, submitted: true, click: true };
  return { ...base, atButton: true, submitted: true };
}

function WebsiteView() {
  const reduce = useReducedMotion();
  const [frame, setFrame] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const [btnPos, setBtnPos] = useState({ x: 50, y: 60 });

  useEffect(() => {
    const measure = () => {
      const root = rootRef.current;
      const btn = btnRef.current;
      if (!root || !btn) return;
      const r = root.getBoundingClientRect();
      const b = btn.getBoundingClientRect();
      if (!r.width || !r.height) return;
      setBtnPos({
        x: ((b.left + b.width / 2 - r.left) / r.width) * 100,
        y: ((b.top + b.height / 2 - r.top) / r.height) * 100,
      });
    };
    measure();
    const t = window.setTimeout(measure, 350);
    window.addEventListener("resize", measure);
    return () => { window.clearTimeout(t); window.removeEventListener("resize", measure); };
  }, []);

  useEffect(() => {
    if (reduce) { setFrame(WEB_TOTAL - WEB_F.hold); return; }
    setFrame(0);
    const id = window.setInterval(() => {
      setFrame((s) => {
        if (s >= WEB_TOTAL - 1) { window.clearInterval(id); return s; } // klaar na het versturen — geen herhaling
        return s + 1;
      });
    }, 70);
    return () => window.clearInterval(id);
  }, [reduce]);

  const st = reduce ? webStateFor(WEB_TOTAL - WEB_F.hold) : webStateFor(frame);
  const cursor = st.atButton ? btnPos : WEB_CURSOR_IDLE;

  return (
    <div ref={rootRef} className="relative h-full overflow-hidden">
      {/* faux page chrome */}
      <div className="flex items-center justify-between rounded-md border border-[color:var(--color-line)] bg-[color:var(--color-bg)]/50 px-2.5 py-1.5">
        <span className="h-1.5 w-8 rounded bg-[color:var(--color-ink-faint)]" />
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-5 rounded bg-[color:var(--color-ink-faint)]/60" />
          <span className="h-1.5 w-5 rounded bg-[color:var(--color-ink-faint)]/60" />
          <span className="h-3 w-9 rounded bg-[color:var(--color-purple)]/25" />
        </span>
      </div>
      <div className="mt-2 space-y-1.5">
        <span className="block h-2 w-3/5 rounded bg-[color:var(--color-ink-faint)]" />
        <span className="block h-1.5 w-5/6 rounded bg-[color:var(--color-ink-faint)]/55" />
      </div>

      {/* the contact form */}
      <div className="mt-3 rounded-lg border border-dashed border-[color:var(--color-purple)]/40 bg-white p-3 shadow-[0_10px_24px_-16px_rgba(98,59,199,0.3)]">
        <div className="mb-2.5 text-[11px] font-semibold text-[color:var(--color-ink)]">Vraag een offerte aan</div>
        <div className="space-y-2.5">
          {WEB_FORM.map((field, i) => (
            <div key={field.label}>
              <div className="mb-0.5 text-[8px] font-medium uppercase tracking-[0.1em] text-[color:var(--color-ink-subtle)]">{field.label}</div>
              <div
                className={[
                  "rounded-md border border-[color:var(--color-line)] bg-[color:var(--color-bg-muted)]/40 px-2 text-[10px] text-[color:var(--color-ink)]",
                  field.area ? "h-10 py-1 leading-snug" : "h-7 flex items-center",
                ].join(" ")}
              >
                <span className="break-words">{field.value.slice(0, st.typed[i])}</span>
                {st.caretField === i && !reduce && (
                  <span className="ml-px inline-block h-3 w-px align-middle bg-[color:var(--color-purple)]" style={{ animation: "soft-pulse 1s ease-in-out infinite" }} />
                )}
              </div>
            </div>
          ))}
          <div
            ref={btnRef}
            className={[
              "h-7 rounded-md flex items-center justify-center text-[10px] font-semibold transition-colors duration-300",
              st.submitted ? "bg-emerald-600 text-white" : "bg-[color:var(--color-purple)] text-white",
            ].join(" ")}
          >
            {st.submitted ? "✓ Verzonden, we nemen contact op" : "Verstuur aanvraag"}
          </div>
        </div>
      </div>

      {/* cursor — sits top-right, then glides down to the send button and clicks once */}
      <div
        className="pointer-events-none absolute z-20"
        style={{
          left: `${cursor.x}%`,
          top: `${cursor.y}%`,
          transition: reduce ? undefined : "left 600ms cubic-bezier(0.23,1,0.32,1), top 600ms cubic-bezier(0.23,1,0.32,1)",
        }}
      >
        {st.click && !reduce && (
          <motion.span
            className="absolute -left-1 -top-1 h-7 w-7 rounded-full bg-[color:var(--color-purple)]/30"
            initial={{ scale: 0.4, opacity: 0.6 }}
            animate={{ scale: 2.4, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        )}
        <MousePointer2 className="h-4 w-4 fill-[color:var(--color-ink-strong)] text-white drop-shadow-[0_2px_4px_rgba(12,6,18,0.25)]" strokeWidth={1.5} />
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

/* ── View: CRM (kanban — de cursor sleept een deal naar 'Gewonnen', dan confetti; speelt één keer) ── */
const CRM_COLS: { title: string; statics: [string, string][] }[] = [
  { title: "Nieuw", statics: [["Bureau Klaverwijk", "€5,1k"], ["Atelier Mooij", "€1,9k"]] },
  { title: "In gesprek", statics: [["Architectenbureau Holm", "€8,0k"]] },
  { title: "Gewonnen", statics: [["Praktijk De Vijver", "€3,7k"]] },
];
/* delay (ms) in elke stage vóór doorschuiven; stage 7 = eindstand (geen loop) */
const CRM_DELAYS = [650, 600, 320, 800, 600, 320, 800];
const CRM_CURSOR_IDLE = { x: 78, y: 82 };
const CRM_CONFETTI_HEX = ["#8b5cf6", "#623bc7", "#c4b5fd"];

function crmInitials(name: string) {
  return name.split(" ").slice(0, 2).map((w) => w[0]).join("");
}

function CrmCard({ name, value, moving, lifted, won }: { name: string; value: string; moving?: boolean; lifted?: boolean; won?: boolean }) {
  return (
    <div
      className={[
        "rounded-lg border bg-white p-2",
        moving
          ? won
            ? "border-emerald-500/50 shadow-[0_10px_24px_-10px_rgba(16,185,129,0.4)]"
            : lifted
              ? "border-[color:var(--color-purple)]/55 ring-1 ring-[color:var(--color-purple)]/20 shadow-[0_20px_32px_-10px_rgba(98,59,199,0.5)]"
              : "border-[color:var(--color-purple)]/45 ring-1 ring-[color:var(--color-purple)]/15 shadow-[0_10px_24px_-10px_rgba(98,59,199,0.4)]"
          : "border-[color:var(--color-line)] shadow-[0_4px_12px_-8px_rgba(12,6,18,0.12)]",
      ].join(" ")}
    >
      <div className="flex items-center gap-1.5 mb-1.5">
        <span
          className={[
            "inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[8.5px] font-bold",
            moving ? "bg-[color:var(--color-purple-tint)] text-[color:var(--color-purple)]" : "bg-[color:var(--color-bg-muted)] text-[color:var(--color-ink)]",
          ].join(" ")}
        >
          {crmInitials(name)}
        </span>
        <span className="text-[10px] font-semibold text-[color:var(--color-ink)] truncate">{name}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-[9.5px] font-[family-name:var(--font-mono)] text-[color:var(--color-ink-subtle)] tabular-nums">{value}</span>
        {moving && won ? (
          <span className="inline-flex items-center gap-0.5 text-[8.5px] font-bold text-emerald-600"><ArrowUp className="h-2.5 w-2.5 rotate-45" strokeWidth={3} />gewonnen</span>
        ) : moving ? (
          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-purple)]" />
        ) : null}
      </div>
    </div>
  );
}

function CrmConfetti({ origin }: { origin: { x: number; y: number } }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-30 overflow-hidden">
      {Array.from({ length: 22 }).map((_, i) => {
        const dx = (Math.random() - 0.5) * 220;
        const dy = -30 - Math.random() * 140;
        const rot = (Math.random() - 0.5) * 640;
        return (
          <motion.span
            key={i}
            className="absolute h-1.5 w-1.5 rounded-[1px]"
            style={{ left: `${origin.x}%`, top: `${origin.y}%`, background: CRM_CONFETTI_HEX[i % 3] }}
            initial={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
            animate={{ x: dx, y: [0, dy, dy + 110], opacity: [1, 1, 0], rotate: rot }}
            transition={{ duration: 1.15, ease: "easeOut" }}
          />
        );
      })}
    </div>
  );
}

function CrmView() {
  const reduce = useReducedMotion();
  const [stage, setStage] = useState(0); // 0..7 — speelt één keer en stopt op 7
  const rootRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const colRefs = useRef<(HTMLDivElement | null)[]>([null, null, null]);
  const [colTargets, setColTargets] = useState([
    { x: 17, y: 17 },
    { x: 50, y: 17 },
    { x: 83, y: 17 },
  ]);

  useEffect(() => {
    const measure = () => {
      const root = rootRef.current;
      if (!root) return;
      const r = root.getBoundingClientRect();
      if (!r.width || !r.height) return;
      let cy = 17;
      const card = cardRef.current;
      if (card) {
        const c = card.getBoundingClientRect();
        if (c.height) cy = ((c.top + c.height / 2 - r.top) / r.height) * 100;
      }
      setColTargets(
        colRefs.current.map((el, i) => {
          if (!el) return { x: [17, 50, 83][i], y: cy };
          const cr = el.getBoundingClientRect();
          return { x: ((cr.left + cr.width / 2 - r.left) / r.width) * 100, y: cy };
        }),
      );
    };
    measure();
    const t = window.setTimeout(measure, 350);
    window.addEventListener("resize", measure);
    return () => { window.clearTimeout(t); window.removeEventListener("resize", measure); };
  }, []);

  useEffect(() => {
    if (reduce) { setStage(7); return; }
    setStage(0);
    let i = 0;
    const timers: number[] = [];
    const advance = () => {
      if (i >= CRM_DELAYS.length) return; // stage 7 bereikt → stoppen
      const t = window.setTimeout(() => {
        i += 1;
        setStage(i);
        advance();
      }, CRM_DELAYS[i]);
      timers.push(t);
    };
    advance();
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, [reduce]);

  const cardCol = stage <= 2 ? 0 : stage <= 5 ? 1 : 2;
  const lifted = !reduce && (stage === 2 || stage === 3 || stage === 5 || stage === 6);
  const won = stage >= 7;
  const grabbing = stage === 2 || stage === 5;
  const cursor = stage === 0 ? CRM_CURSOR_IDLE : colTargets[cardCol];

  return (
    <div ref={rootRef} className="relative h-full flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <div className="text-[10.5px] uppercase tracking-[0.16em] text-[color:var(--color-ink-subtle)] font-medium">Sales-pijplijn</div>
        <span className="text-[10px] font-[family-name:var(--font-mono)] text-[color:var(--color-ink-faint)]">5 deals · €21k open</span>
      </div>
      <div className="flex-1 grid grid-cols-3 gap-2">
        {CRM_COLS.map((c, ci) => {
          const count = c.statics.length + (cardCol === ci ? 1 : 0);
          return (
            <div
              key={c.title}
              ref={(el) => { colRefs.current[ci] = el; }}
              className={["rounded-xl border bg-[color:var(--color-bg)]/50 p-2 flex flex-col transition-colors duration-300", cardCol === ci ? "border-[color:var(--color-purple)]/30 bg-[color:var(--color-purple-soft)]" : "border-[color:var(--color-line)]"].join(" ")}
            >
              <div className="flex items-center justify-between px-1 mb-2">
                <span className="text-[9.5px] font-semibold uppercase tracking-[0.06em] text-[color:var(--color-ink-subtle)]">{c.title}</span>
                <span className="text-[9.5px] font-[family-name:var(--font-mono)] text-[color:var(--color-ink-faint)]">{count}</span>
              </div>
              <div className="space-y-2">
                {cardCol === ci && (
                  <motion.div ref={cardRef} layoutId="crm-deal" transition={{ duration: 0.6, ease: EASE }} className="relative z-10">
                    <motion.div
                      animate={{
                        scale: reduce ? 1 : lifted ? 1.06 : won ? [1, 1.08, 1] : 1,
                        rotate: reduce ? 0 : lifted ? -3 : 0,
                      }}
                      transition={{ duration: lifted ? 0.18 : 0.4, ease: EASE }}
                      style={{ transformOrigin: "50% 50%" }}
                    >
                      <CrmCard name="Bureau Veldhuis" value="€2,4k" moving lifted={lifted} won={won} />
                    </motion.div>
                  </motion.div>
                )}
                {c.statics.map(([name, value]) => (
                  <CrmCard key={name} name={name} value={value} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-3 flex items-center gap-1.5 text-[10px]">
        <span className="inline-flex items-center gap-1 rounded-full bg-[color:var(--color-purple-tint)] px-2 py-0.5 font-semibold text-[color:var(--color-purple)]"><Users className="h-2.5 w-2.5" strokeWidth={2.5} />4 teamleden</span>
        <span className="rounded-full border border-[color:var(--color-line)] px-2 py-0.5 text-[color:var(--color-ink-subtle)]">7 open taken</span>
      </div>

      {/* cursor that picks up & drags the deal — moves in sync with the card's column hop */}
      {!reduce && (
        <div
          className="pointer-events-none absolute z-20"
          style={{
            left: `${cursor.x}%`,
            top: `${cursor.y}%`,
            transition: "left 600ms cubic-bezier(0.23,1,0.32,1), top 600ms cubic-bezier(0.23,1,0.32,1)",
          }}
        >
          {grabbing && (
            <motion.span
              key={stage}
              className="absolute -left-1 -top-1 h-7 w-7 rounded-full bg-[color:var(--color-purple)]/30"
              initial={{ scale: 0.4, opacity: 0.6 }}
              animate={{ scale: 2.3, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          )}
          <MousePointer2 className="h-4 w-4 fill-[color:var(--color-ink-strong)] text-white drop-shadow-[0_2px_4px_rgba(12,6,18,0.25)]" strokeWidth={1.5} />
        </div>
      )}

      {won && !reduce && <CrmConfetti origin={colTargets[2]} />}
    </div>
  );
}

/* ── View: Q (de assistent — jij stuurt een appje, Q regelt het) ── */
const Q_THREAD: { from: "you" | "q"; text: string }[] = [
  { from: "you", text: "Kun je de openingstijden op de contactpagina aanpassen? Volgende week dinsdag zijn we dicht." },
  { from: "q", text: "Geregeld. Dinsdag staat nu op gesloten, en de structured data heb ik ook bijgewerkt zodat Google het meteen overneemt." },
  { from: "you", text: "Wauw, dat was snel 👍" },
  { from: "q", text: "Altijd. Laat maar weten als er meer is." },
];

function QView() {
  const reduce = useReducedMotion();
  return (
    <div className="h-full flex flex-col">
      {/* header */}
      <div className="flex items-center gap-2.5 mb-3 shrink-0">
        <span className="relative inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full overflow-hidden ring-2 ring-[color:var(--color-purple)]/25">
          <Image src="/images/q-insights.jpg" alt="Q" width={32} height={32} className="object-cover" />
        </span>
        <div className="leading-tight">
          <div className="text-[12px] font-semibold text-[color:var(--color-ink)]">Q</div>
          <div className="flex items-center gap-1 text-[10px] text-[color:var(--color-ink-subtle)]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />Online · reageert meteen
          </div>
        </div>
        <Sparkles className="ml-auto h-3.5 w-3.5 text-[color:var(--color-purple)]" strokeWidth={2.25} />
      </div>

      {/* thread */}
      <div className="flex-1 overflow-hidden rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-bg)]/40 p-3 flex flex-col justify-end gap-2.5">
        {Q_THREAD.map((m, i) => (
          <motion.div
            key={i}
            initial={reduce ? false : { opacity: 0, y: 10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.32, ease: EASE, delay: 0.2 + i * 0.55 }}
            className={`flex ${m.from === "you" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={[
                "max-w-[84%] px-3 py-2 text-[11px] leading-relaxed",
                m.from === "you"
                  ? "rounded-2xl rounded-br-sm bg-[color:var(--color-purple)] text-white shadow-[0_8px_20px_-12px_rgba(98,59,199,0.5)]"
                  : "rounded-2xl rounded-bl-sm bg-white border border-[color:var(--color-line)] text-[color:var(--color-ink)]",
              ].join(" ")}
            >
              {m.text}
            </div>
          </motion.div>
        ))}
      </div>

      {/* input strip */}
      <div className="mt-3 flex items-center gap-2 shrink-0">
        <div className="flex-1 rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-bg-muted)]/60 px-3 py-1.5 text-[10.5px] text-[color:var(--color-ink-subtle)]">Stuur Q een appje…</div>
        <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-purple)] text-white">
          <Send className="h-3.5 w-3.5" strokeWidth={2.25} />
        </span>
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

/* Mini-visualisaties voor de stat-chips — spelen één keer af bij (her)mount. */
function MiniGauge({ value }: { value: number }) {
  const reduce = useReducedMotion();
  const p = Math.max(0, Math.min(1, value / 100));
  return (
    <svg viewBox="0 0 24 16" className="h-4 w-5 text-[color:var(--color-purple)]" fill="none">
      <path d="M2.5 14.5 A 9.5 9.5 0 0 1 21.5 14.5" stroke="currentColor" strokeOpacity="0.16" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M2.5 14.5 A 9.5 9.5 0 0 1 21.5 14.5" stroke="currentColor" strokeOpacity="0.22" strokeWidth="2.6" strokeLinecap="round" strokeDasharray="0.6 4.2" />
      <motion.path
        d="M2.5 14.5 A 9.5 9.5 0 0 1 21.5 14.5"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        initial={reduce ? false : { pathLength: 0 }}
        animate={{ pathLength: reduce ? p : [0, Math.min(1, p * 1.1), p] }}
        transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1], delay: 0.12, times: [0, 0.72, 1] }}
      />
      <circle cx="12" cy="14.5" r="1.7" fill="currentColor" />
    </svg>
  );
}

function MiniBars() {
  const reduce = useReducedMotion();
  const hs = [4.5, 7.5, 6, 11];
  return (
    <svg viewBox="0 0 16 13" className="h-3.5 w-4 text-[color:var(--color-purple)]" fill="currentColor">
      {hs.map((h, i) => (
        <motion.rect
          key={i}
          x={i * 4 + 0.6}
          width="2.6"
          rx="1"
          initial={reduce ? false : { height: 0, y: 12 }}
          animate={{ height: h, y: 12 - h }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.2 + i * 0.09 }}
        />
      ))}
    </svg>
  );
}

function MiniSpark() {
  const reduce = useReducedMotion();
  return (
    <svg viewBox="0 0 20 13" className="h-3.5 w-5 text-[color:var(--color-purple)]" fill="none">
      <motion.path
        d="M1.5 11 L6 7.5 L10 9.5 L14 3.5 L18.5 1.8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={reduce ? false : { pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.85, ease: EASE, delay: 0.18 }}
      />
      <motion.circle
        cx="18.5"
        cy="1.8"
        r="1.9"
        fill="currentColor"
        initial={reduce ? false : { scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, ease: EASE, delay: 0.95 }}
      />
    </svg>
  );
}

function StatVizIcon({ viz, num }: { viz: StatViz; num: number }) {
  if (viz === "gauge") return <MiniGauge value={num} />;
  if (viz === "bars") return <MiniBars />;
  if (viz === "spark") return <MiniSpark />;
  return (
    <motion.span
      initial={{ scale: 0.6, rotate: -25 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
    >
      <Zap className="h-3.5 w-3.5 text-[color:var(--color-purple)]" strokeWidth={2.5} fill="currentColor" />
    </motion.span>
  );
}

/** Telt soepel op naar het doelgetal bij (her)mount — knipoog naar de Emil-motion-skill. */
function AnimatedNumber({ value, decimals = 0 }: { value: number; decimals?: number }) {
  const reduce = useReducedMotion();
  const mv = useMotionValue(reduce ? value : 0);
  const [display, setDisplay] = useState(value);
  useEffect(() => {
    if (reduce) { setDisplay(value); return; }
    mv.set(0);
    const controls = animate(mv, value, {
      duration: 1,
      ease: [0.23, 1, 0.32, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, decimals, reduce]);
  const text = decimals > 0 ? display.toFixed(decimals).replace(".", ",") : Math.round(display).toString();
  return <>{text}</>;
}

function StatChip({ label, prefix, num, decimals = 0, suffix, delta, descriptor, trend = true, viz }: Stat) {
  return (
    <div className="relative flex flex-col gap-1.5 min-w-[152px] pl-3.5 pr-11 py-3 rounded-2xl bg-white border border-[color:var(--color-line)] shadow-[0_1px_2px_rgba(12,6,18,0.04),0_24px_56px_-24px_rgba(12,6,18,0.22)]">
      <motion.span
        className="absolute top-2.5 right-2.5 inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[color:var(--color-purple-tint)] overflow-hidden"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: EASE }}
      >
        <StatVizIcon viz={viz} num={num} />
      </motion.span>
      <span className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[color:var(--color-ink-subtle)]">{label}</span>
      <span className="font-[family-name:var(--font-display)] text-[26px] font-bold text-[color:var(--color-ink-strong)] tabular-nums leading-none">
        {prefix}<AnimatedNumber value={num} decimals={decimals} />{suffix}
      </span>
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
