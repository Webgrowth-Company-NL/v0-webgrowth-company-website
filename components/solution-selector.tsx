"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Globe,
  LayoutGrid,
  Magnet,
  Search,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

const EASE = [0.23, 1, 0.32, 1] as const;

type Goal = {
  key: string;
  tab: string;
  icon: typeof Globe;
  headline: string;
  body: string;
  cta: { label: string; href: string };
  visual: "website" | "leads" | "seo" | "crm" | "ai" | "platform";
};

const GOALS: Goal[] = [
  {
    key: "website",
    tab: "Een nieuwe website",
    icon: Globe,
    headline: "Een website die je zelf in de hand hebt",
    body: "Razendsnel, vindbaar en altijd actueel. Beheer pagina's, berichten en eigen contenttypes zonder webbouwer of los CMS.",
    cta: { label: "Bekijk Website & CMS", href: "/forester-os/website" },
    visual: "website",
  },
  {
    key: "leads",
    tab: "Meer leads uit mijn site",
    icon: Magnet,
    headline: "Van bezoeker naar concrete aanvraag",
    body: "Quickscans, prijscalculators en slimme formulieren die anonieme bezoekers omzetten in leads, rechtstreeks in je CRM.",
    cta: { label: "Bekijk de Lead Engine", href: "/forester-os/lead-engine" },
    visual: "leads",
  },
  {
    key: "seo",
    tab: "Beter gevonden worden",
    icon: Search,
    headline: "Klim in Google, zonder los SEO-bureau",
    body: "Search Console-data, AI-suggesties en rankings in één dashboard. Je ziet precies wat er moet gebeuren, in mensentaal.",
    cta: { label: "Bekijk SEO & vindbaarheid", href: "/forester-os/seo" },
    visual: "seo",
  },
  {
    key: "crm",
    tab: "Klanten slim opvolgen",
    icon: Users,
    headline: "Geen lead meer kwijt, geen taak vergeten",
    body: "Elke aanvraag landt in je CRM en wordt automatisch opgevolgd. Eén visuele pijplijn voor je hele team.",
    cta: { label: "Bekijk CRM & sales-pijplijn", href: "/forester-os/crm" },
    visual: "crm",
  },
  {
    key: "ai",
    tab: "Automatisch publiceren met AI",
    icon: Sparkles,
    headline: "Laat AI je content schrijven én plaatsen",
    body: "Q schrijft pagina's, blogs en updates en publiceert ze op een vast ritme op je site. Nooit meer een lege blog.",
    cta: { label: "Bekijk AI-content met Q", href: "/forester-os/ai" },
    visual: "ai",
  },
  {
    key: "platform",
    tab: "Alles op één plek",
    icon: LayoutGrid,
    headline: "Negen leveranciers, één login",
    body: "Website, CRM, marketing en AI in één abonnement. Geen losse facturen, geen losse logins, geen losse silo's.",
    cta: { label: "Ontdek Forester OS", href: "/forester-os" },
    visual: "platform",
  },
];

export function SolutionSelector() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const goal = GOALS[active];

  return (
    <section className="relative px-5 sm:px-8 py-28 sm:py-40 border-t border-[color:var(--color-line)]">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full border border-[color:var(--color-line)] bg-white text-[12.5px] font-medium text-[color:var(--color-ink-muted)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-purple)]" />
            Begin bij je doel
          </span>
          <h2 className="mt-5 font-[family-name:var(--font-display)] font-bold text-[clamp(1.9rem,4vw,3rem)] leading-[1.08] tracking-[-0.02em] text-[color:var(--color-ink-strong)]">
            Wat wil je bereiken?
          </h2>
          <p className="mt-4 text-[16px] sm:text-[17px] leading-[1.6] text-[color:var(--color-ink-muted)]">
            Kies een doel, dan zie je hoe Forester OS je daarbij helpt.
          </p>
        </div>

        {/* Selector cards */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {GOALS.map((g, i) => {
            const isActive = i === active;
            return (
              <button
                key={g.key}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                className={[
                  "btn-press group relative flex flex-col items-start gap-3 p-4 rounded-2xl border text-left",
                  isActive
                    ? "border-[color:var(--color-purple)] bg-[color:var(--color-purple-soft)] shadow-[0_14px_34px_-12px_rgba(98,59,199,0.45)]"
                    : "border-[color:var(--color-line-strong)] bg-white hover:border-[color:var(--color-purple)]/40 hover:bg-[color:var(--color-purple-soft)]/50 shadow-[0_1px_2px_rgba(12,6,18,0.04)]",
                ].join(" ")}
              >
                <span
                  className={[
                    "inline-flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-200 ease-out",
                    isActive ? "bg-[color:var(--color-purple)]" : "bg-[color:var(--color-purple-tint)] group-hover:bg-[color:var(--color-purple)]/20",
                  ].join(" ")}
                >
                  <g.icon className={isActive ? "h-[18px] w-[18px] text-white" : "h-[18px] w-[18px] text-[color:var(--color-purple)]"} strokeWidth={2.25} />
                </span>
                <span
                  className={[
                    "text-[13.5px] font-semibold leading-snug transition-colors duration-200 ease-out",
                    isActive ? "text-[color:var(--color-ink-strong)]" : "text-[color:var(--color-ink)] group-hover:text-[color:var(--color-purple)]",
                  ].join(" ")}
                >
                  {g.tab}
                </span>
              </button>
            );
          })}
        </div>

        {/* Panel */}
        <div className="mt-14 sm:mt-18 grid lg:grid-cols-[0.82fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Copy */}
          <div className="relative min-h-[180px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`copy-${goal.key}`}
                initial={{ opacity: 0, y: reduce ? 0 : 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reduce ? 0 : -8 }}
                transition={{ duration: 0.32, ease: EASE }}
              >
                <div className="inline-flex items-center gap-2.5 mb-4">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[color:var(--color-purple-tint)]">
                    <goal.icon className="h-4 w-4 text-[color:var(--color-purple)]" strokeWidth={2.25} />
                  </span>
                  <span className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-ink-subtle)]">
                    {goal.tab}
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[clamp(1.5rem,2.6vw,2.2rem)] leading-[1.12] tracking-[-0.015em] text-[color:var(--color-ink-strong)]">
                  {goal.headline}
                </h3>
                <p className="mt-3.5 text-[16px] leading-[1.6] text-[color:var(--color-ink-muted)] max-w-md">
                  {goal.body}
                </p>
                <Link
                  href={goal.cta.href}
                  className="btn-press group mt-6 inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full bg-[color:var(--color-purple)] hover:bg-[color:var(--color-purple-hover)] text-white text-[14px] font-semibold shadow-[0_2px_4px_rgba(98,59,199,0.28),0_14px_32px_-12px_rgba(98,59,199,0.55)] hover:shadow-[0_6px_14px_rgba(98,59,199,0.34),0_22px_46px_-12px_rgba(98,59,199,0.75)]"
                >
                  {goal.cta.label}
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/18 transition-[transform,background-color] duration-200 ease-out group-hover:translate-x-0.5 group-hover:bg-white/30">
                    <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Visual */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={`vis-${goal.key}`}
                initial={{ opacity: 0, y: reduce ? 0 : 16, scale: reduce ? 1 : 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: reduce ? 0 : -10, scale: reduce ? 1 : 0.99 }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                <GoalVisual visual={goal.visual} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Visuals ─────────────────────────────────────── */

function Frame({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div className="p-2 rounded-[1.75rem] bg-gradient-to-br from-white/70 to-[color:var(--color-bg-muted)]/60 ring-1 ring-[color:var(--color-line)] shadow-[0_30px_80px_-30px_rgba(12,6,18,0.18),0_10px_30px_-15px_rgba(98,59,199,0.18)]">
      <div className="rounded-[calc(1.75rem-0.5rem)] bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[color:var(--color-line)]">
          <span className="h-2 w-2 rounded-full bg-[color:var(--color-ink-faint)]" />
          <span className="h-2 w-2 rounded-full bg-[color:var(--color-ink-faint)]" />
          <span className="h-2 w-2 rounded-full bg-[color:var(--color-ink-faint)]" />
          <div className="ml-2 flex-1 px-2.5 py-1 rounded-md bg-[color:var(--color-bg-muted)]/80 text-[10.5px] font-[family-name:var(--font-mono)] text-[color:var(--color-ink-subtle)] truncate">
            {url}
          </div>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}

const bar = (h: number, i: number, n = 12) => (
  <span key={i} className="block w-[5px] rounded-[1.5px] bg-[color:var(--color-purple)]/85" style={{ height: `${h}%`, opacity: 0.35 + (i / n) * 0.65 }} />
);

function GoalVisual({ visual }: { visual: Goal["visual"] }) {
  if (visual === "website") {
    return (
      <Frame url="jouwsite.nl / concept">
        <div className="rounded-xl border border-[color:var(--color-line)] bg-[color:var(--color-bg)]/50 overflow-hidden">
          <div className="flex items-center justify-between px-3 py-2 border-b border-[color:var(--color-line)] bg-white/60">
            <div className="h-2.5 w-12 rounded-full bg-[color:var(--color-ink-faint)]" />
            <div className="flex gap-2">
              <div className="h-2 w-6 rounded-full bg-[color:var(--color-ink-faint)]" />
              <div className="h-2 w-6 rounded-full bg-[color:var(--color-ink-faint)]" />
              <div className="h-2 w-8 rounded-full bg-[color:var(--color-purple)]/60" />
            </div>
          </div>
          <div className="px-4 py-4">
            <div className="h-2 w-16 rounded-full bg-[color:var(--color-purple)]/40 mb-2.5" />
            <div className="h-3.5 w-[80%] rounded bg-[color:var(--color-ink-faint)] mb-1.5" />
            <div className="h-3.5 w-[55%] rounded bg-[color:var(--color-purple)]/35 mb-3" />
            <div className="flex gap-2">
              <div className="h-6 w-20 rounded-full bg-[color:var(--color-purple)]/75" />
              <div className="h-6 w-16 rounded-full border border-[color:var(--color-line-strong)]" />
            </div>
          </div>
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
        <div className="mt-3 flex items-center gap-1.5">
          {["Hero", "Diensten", "Reviews", "Footer"].map((b, i) => (
            <span key={b} className={["px-2.5 py-1 rounded-full text-[10.5px] font-medium", i === 0 ? "bg-[color:var(--color-purple-tint)] text-[color:var(--color-purple)]" : "border border-[color:var(--color-line)] text-[color:var(--color-ink-subtle)]"].join(" ")}>{b}</span>
          ))}
        </div>
      </Frame>
    );
  }

  if (visual === "leads") {
    return (
      <Frame url="forester.app / lead-engine">
        <div className="rounded-xl border border-[color:var(--color-line)] bg-[color:var(--color-bg)]/50 p-3.5 mb-3">
          <div className="h-2 w-20 rounded-full bg-[color:var(--color-purple)]/40 mb-2.5" />
          <div className="space-y-2">
            <div className="h-7 rounded-md border border-[color:var(--color-line-strong)] bg-white" />
            <div className="h-7 rounded-md border border-[color:var(--color-line-strong)] bg-white" />
            <div className="flex items-center gap-2">
              <div className="h-7 flex-1 rounded-md border border-[color:var(--color-line-strong)] bg-white" />
              <div className="h-7 w-24 rounded-md bg-[color:var(--color-purple)]" />
            </div>
          </div>
        </div>
        <div className="text-[10.5px] uppercase tracking-[0.16em] text-[color:var(--color-ink-subtle)] font-semibold mb-2">Nieuwe leads</div>
        <ul className="space-y-2">
          {[
            { n: "Studio Praline", t: "zojuist", live: true },
            { n: "Architectenbureau Holm", t: "8 min" },
            { n: "Praktijk De Vijver", t: "26 min" },
          ].map((l, i) => (
            <li key={l.n} className="flex items-center gap-3 px-3 py-2.5 rounded-xl border border-[color:var(--color-line)] bg-[color:var(--color-bg)]/60">
              <span className={["inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10.5px] font-bold text-[color:var(--color-ink)]", i === 0 ? "bg-[color:var(--color-purple-tint)]" : "bg-[color:var(--color-bg-muted)]"].join(" ")}>{l.n.split(" ").slice(0, 2).map((w) => w[0]).join("")}</span>
              <span className="text-[12px] font-semibold text-[color:var(--color-ink)] truncate flex-1">{l.n}</span>
              {l.live && <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-purple)]" />}
              <span className="text-[10.5px] font-[family-name:var(--font-mono)] text-[color:var(--color-ink-subtle)]">{l.t}</span>
            </li>
          ))}
        </ul>
      </Frame>
    );
  }

  if (visual === "seo") {
    return (
      <Frame url="forester.app / vindbaarheid">
        <div className="flex items-end justify-between mb-4">
          <div>
            <div className="text-[10.5px] uppercase tracking-[0.16em] text-[color:var(--color-ink-subtle)] font-medium">Gem. positie · 90 dagen</div>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="font-[family-name:var(--font-display)] text-[28px] font-bold text-[color:var(--color-ink-strong)] tabular-nums leading-none">#3,1</span>
              <span className="inline-flex items-center gap-1 text-[11.5px] font-semibold text-emerald-600"><TrendingUp className="h-3 w-3" strokeWidth={2.5} />+1,8</span>
            </div>
          </div>
          <svg viewBox="0 0 80 36" className="h-9 w-20" aria-hidden>
            <polyline points="0,32 14,28 26,30 38,20 50,22 62,12 80,6" fill="none" stroke="var(--color-purple)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
          </svg>
        </div>
        <div className="text-[10.5px] uppercase tracking-[0.16em] text-[color:var(--color-ink-subtle)] font-semibold mb-2">Zoekwoorden</div>
        <ul className="space-y-2">
          {[
            { kw: "interieurontwerp utrecht", p: 2, up: 3 },
            { kw: "fysiotherapie de baarsjes", p: 1, up: 0 },
            { kw: "architect verbouwing offerte", p: 4, up: 1 },
            { kw: "boekhouder zzp dordrecht", p: 6, up: 2 },
          ].map((r) => (
            <li key={r.kw} className="flex items-center gap-3 px-3 py-2.5 rounded-xl border border-[color:var(--color-line)] bg-[color:var(--color-bg)]/60">
              <span className="inline-flex h-7 min-w-7 px-1.5 items-center justify-center rounded-md bg-[color:var(--color-purple-tint)] text-[11px] font-bold text-[color:var(--color-purple)] tabular-nums shrink-0">{r.p}</span>
              <span className="text-[12px] font-medium text-[color:var(--color-ink)] truncate flex-1">{r.kw}</span>
              {r.up > 0 ? <span className="inline-flex items-center gap-0.5 text-[10.5px] font-semibold text-emerald-600 shrink-0"><TrendingUp className="h-3 w-3" strokeWidth={2.5} />{r.up}</span> : <span className="text-[10.5px] text-[color:var(--color-ink-faint)] shrink-0">–</span>}
            </li>
          ))}
        </ul>
      </Frame>
    );
  }

  if (visual === "crm") {
    const cols = [
      { t: "Nieuw", items: ["Studio Praline", "Bureau Klaverwijk"] },
      { t: "In gesprek", items: ["Architectenbureau Holm"] },
      { t: "Voorstel", items: ["Praktijk De Vijver", "Atelier Mooij"] },
    ];
    return (
      <Frame url="forester.app / crm">
        <div className="grid grid-cols-3 gap-2.5">
          {cols.map((c, ci) => (
            <div key={c.t} className="rounded-xl border border-[color:var(--color-line)] bg-[color:var(--color-bg)]/50 p-2">
              <div className="flex items-center justify-between px-1 mb-2">
                <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-ink-subtle)]">{c.t}</span>
                <span className="text-[10px] font-[family-name:var(--font-mono)] text-[color:var(--color-ink-faint)]">{c.items.length}</span>
              </div>
              <div className="space-y-2">
                {c.items.map((it, i) => (
                  <div key={it} className="rounded-lg border border-[color:var(--color-line)] bg-white p-2 shadow-[0_4px_12px_-8px_rgba(12,6,18,0.12)]">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <span className={["inline-flex h-5 w-5 items-center justify-center rounded-full text-[8.5px] font-bold text-[color:var(--color-ink)]", ci === 0 && i === 0 ? "bg-[color:var(--color-purple-tint)]" : "bg-[color:var(--color-bg-muted)]"].join(" ")}>{it.split(" ").slice(0, 2).map((w) => w[0]).join("")}</span>
                      <div className="h-1.5 flex-1 rounded bg-[color:var(--color-ink-faint)]" />
                    </div>
                    <div className="h-1.5 w-2/3 rounded bg-[color:var(--color-ink-faint)]" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[color:var(--color-purple-tint)] text-[10.5px] font-semibold text-[color:var(--color-purple)]"><Users className="h-3 w-3" strokeWidth={2.5} />4 teamleden</span>
          <span className="px-2.5 py-1 rounded-full border border-[color:var(--color-line)] text-[10.5px] font-medium text-[color:var(--color-ink-subtle)]">7 open taken</span>
        </div>
      </Frame>
    );
  }

  if (visual === "ai") {
    return (
      <Frame url="forester.app / ai">
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[color:var(--color-purple-tint)]"><Sparkles className="h-3.5 w-3.5 text-[color:var(--color-purple)]" strokeWidth={2.5} /></span>
          <span className="text-[12.5px] font-semibold text-[color:var(--color-ink)]">Q schrijft mee</span>
        </div>
        <div className="self-end ml-auto max-w-[80%] mb-2.5 px-3 py-2 rounded-2xl rounded-br-md bg-[color:var(--color-bg-muted)] text-[11.5px] text-[color:var(--color-ink)]">
          Schrijf een blog over duurzaam ondernemen en publiceer 'm aanstaande dinsdag
        </div>
        <div className="max-w-[92%] px-3.5 py-3 rounded-2xl rounded-tl-md border border-[color:var(--color-line)] bg-white">
          <div className="text-[12px] font-semibold text-[color:var(--color-ink)] mb-2">Duurzaam ondernemen: 5 stappen die echt iets opleveren</div>
          <div className="space-y-1.5">
            <div className="h-1.5 w-full rounded bg-[color:var(--color-ink-faint)]" />
            <div className="h-1.5 w-[92%] rounded bg-[color:var(--color-ink-faint)]" />
            <div className="h-1.5 w-[78%] rounded bg-[color:var(--color-ink-faint)]" />
            <div className="h-1.5 w-[40%] rounded bg-[color:var(--color-purple)]/40" />
          </div>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[color:var(--color-purple)] text-white text-[10.5px] font-semibold">Ingepland: di 09:00</span>
          <span className="px-3 py-1.5 rounded-full border border-[color:var(--color-line)] text-[10.5px] font-medium text-[color:var(--color-ink-subtle)]">Herschrijf</span>
        </div>
      </Frame>
    );
  }

  // platform
  const modules = [
    { l: "Website", c: "bg-[color:var(--color-purple)]/70" },
    { l: "CRM", c: "bg-[color:var(--color-purple)]/55" },
    { l: "SEO", c: "bg-[color:var(--color-purple)]/45" },
    { l: "Lead Engine", c: "bg-[color:var(--color-purple)]/60" },
    { l: "AI-content", c: "bg-[color:var(--color-purple)]/50" },
    { l: "Rapportages", c: "bg-[color:var(--color-purple)]/40" },
  ];
  return (
    <Frame url="forester.app / dashboard">
      <div className="grid grid-cols-3 gap-2.5 mb-3.5">
        {modules.map((m) => (
          <div key={m.l} className="rounded-xl border border-[color:var(--color-line)] bg-[color:var(--color-bg)]/50 p-3">
            <div className={`h-6 w-6 rounded-lg ${m.c} mb-2`} />
            <div className="text-[11px] font-semibold text-[color:var(--color-ink)] leading-tight">{m.l}</div>
            <div className="mt-1 h-1.5 w-2/3 rounded bg-[color:var(--color-ink-faint)]" />
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-[color:var(--color-line)] bg-white p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10.5px] uppercase tracking-[0.16em] text-[color:var(--color-ink-subtle)] font-semibold">Eén overzicht</span>
          <span className="text-[10.5px] font-[family-name:var(--font-mono)] text-[color:var(--color-ink-faint)]">live</span>
        </div>
        <div className="flex items-end gap-[3px] h-8">{[24, 32, 28, 40, 48, 42, 56, 64, 54, 70, 76, 84].map((h, i) => bar(h, i))}</div>
      </div>
    </Frame>
  );
}
