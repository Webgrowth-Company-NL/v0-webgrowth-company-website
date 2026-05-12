"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Globe,
  LayoutGrid,
  Magnet,
  Search,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const EASE = "cubic-bezier(0.32,0.72,0,1)";

type Visual = "website" | "leads" | "seo" | "crm" | "ai" | "platform";

type Goal = {
  key: string;
  label: string;
  body: string;
  icon: typeof Globe;
  href: string;
  /** tailwind gradient for the card surface */
  grad: string;
  visual: Visual;
};

const GOALS: Goal[] = [
  {
    key: "website",
    label: "Een nieuwe website",
    body: "Snel, vindbaar en altijd actueel. Pagina's, berichten en eigen contenttypes, zonder los CMS.",
    icon: Globe,
    href: "/forester-os/website",
    grad: "from-[#3f2a8f] via-[#4f2bb0] to-[#5e3bc0]",
    visual: "website",
  },
  {
    key: "leads",
    label: "Meer leads uit mijn site",
    body: "Quickscans, calculators en slimme formulieren die bezoekers omzetten in aanvragen.",
    icon: Magnet,
    href: "/forester-os/lead-engine",
    grad: "from-[#5b34bc] via-[#6d3fd6] to-[#7c3aed]",
    visual: "leads",
  },
  {
    key: "seo",
    label: "Beter gevonden worden",
    body: "Search Console-data, AI-suggesties en rankings in één dashboard. Zonder los SEO-bureau.",
    icon: Search,
    href: "/forester-os/seo",
    grad: "from-[#6a3fd0] via-[#7c3aed] to-[#8b5cf6]",
    visual: "seo",
  },
  {
    key: "crm",
    label: "Klanten slim opvolgen",
    body: "Elke aanvraag in je CRM, automatisch opgevolgd. Eén visuele pijplijn voor je hele team.",
    icon: Users,
    href: "/forester-os/crm",
    grad: "from-[#4f2bb0] via-[#623bc7] to-[#7c5be0]",
    visual: "crm",
  },
  {
    key: "ai",
    label: "Automatisch publiceren met AI",
    body: "Q schrijft pagina's, blogs en updates en publiceert ze op een vast ritme op je site.",
    icon: Sparkles,
    href: "/forester-os/ai",
    grad: "from-[#5e3bc0] via-[#7c3aed] to-[#9333ea]",
    visual: "ai",
  },
  {
    key: "platform",
    label: "Alles op één plek",
    body: "Website, CRM, marketing en AI in één abonnement. Geen losse facturen, geen losse logins.",
    icon: LayoutGrid,
    href: "/forester-os",
    grad: "from-[#3d2a6b] via-[#4f2bb0] to-[#623bc7]",
    visual: "platform",
  },
];

export function SolutionSelector() {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    scroller.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section className="relative px-5 sm:px-8 py-28 sm:py-40 border-t border-[color:var(--color-line)]">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="font-[family-name:var(--font-display)] font-bold text-[clamp(1.9rem,4vw,3rem)] leading-[1.08] tracking-[-0.02em] text-[color:var(--color-ink-strong)]">
              Wat wil je bereiken?
            </h2>
            <p className="mt-3.5 text-[16px] sm:text-[17px] leading-[1.6] text-[color:var(--color-ink-muted)]">
              Kies een doel, dan zie je hoe Forester OS je daarbij helpt.
            </p>
          </div>
          {/* Arrows (desktop) */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Vorige"
              className="btn-press inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-line-strong)] bg-white text-[color:var(--color-ink)] hover:border-[color:var(--color-purple)]/40 hover:text-[color:var(--color-purple)] transition-colors"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={2.5} />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Volgende"
              className="btn-press inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-line-strong)] bg-white text-[color:var(--color-ink)] hover:border-[color:var(--color-purple)]/40 hover:text-[color:var(--color-purple)] transition-colors"
            >
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Cards carousel */}
        <div className="relative mt-10 sm:mt-12">
          <div
            ref={scroller}
            className="flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-5 px-5 sm:-mx-8 sm:px-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {GOALS.map((g) => (
              <Link
                key={g.key}
                href={g.href}
                className={[
                  "group relative snap-start shrink-0 w-[270px] sm:w-[300px] h-[400px] sm:h-[440px] rounded-[1.75rem] overflow-hidden",
                  "bg-gradient-to-br", g.grad,
                  "shadow-[0_18px_44px_-20px_rgba(98,59,199,0.4)] hover:shadow-[0_30px_64px_-22px_rgba(98,59,199,0.55)]",
                  "transition-[transform,box-shadow] duration-[450ms] ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1.5",
                ].join(" ")}
                style={{ transitionTimingFunction: EASE }}
              >
                {/* subtle inner highlight */}
                <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-white/12" />

                {/* Copy zone */}
                <div className="relative p-6 pb-4 text-white">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.12em]">
                    <g.icon className="h-3.5 w-3.5" strokeWidth={2.25} />
                    Forester OS
                  </span>
                  <h3 className="mt-4 font-[family-name:var(--font-display)] font-bold text-[22px] sm:text-[24px] leading-[1.12] tracking-[-0.01em]">
                    {g.label}
                  </h3>
                  <p className="mt-2.5 text-[12.5px] leading-snug text-white/75 max-w-[92%]">{g.body}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-white transition-[gap] duration-200 group-hover:gap-2.5">
                    Bekijk
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/18 transition-transform duration-200 ease-out group-hover:translate-x-0.5">
                      <ArrowRight className="h-3 w-3" strokeWidth={2.5} />
                    </span>
                  </span>
                </div>

                {/* Preview peeking from the bottom */}
                <div className="absolute inset-x-5 top-[230px] sm:top-[252px] bottom-[-48px] rounded-t-2xl bg-[color:var(--color-bg-elevated)] shadow-[0_-12px_30px_-12px_rgba(12,6,18,0.28),0_0_0_1px_rgba(12,6,18,0.04)] overflow-hidden transition-transform duration-[450ms] group-hover:-translate-y-3" style={{ transitionTimingFunction: EASE }}>
                  <GoalPreview visual={g.visual} />
                </div>
              </Link>
            ))}
          </div>

          {/* right-edge fade hint */}
          <div aria-hidden className="pointer-events-none absolute right-0 top-0 bottom-4 w-16 sm:w-24 bg-gradient-to-l from-[color:var(--color-bg)] to-transparent" />
        </div>
      </div>
    </section>
  );
}

/* ── Mini-previews (top portion shows, rest clips below the card) ─── */

function PreviewChrome({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-[color:var(--color-line)] shrink-0">
        <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-ink-faint)]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-ink-faint)]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-ink-faint)]" />
        <div className="ml-1.5 flex-1 px-2 py-0.5 rounded bg-[color:var(--color-bg-muted)]/80 text-[9.5px] font-[family-name:var(--font-mono)] text-[color:var(--color-ink-subtle)] truncate">{url}</div>
      </div>
      <div className="p-3 flex-1 overflow-hidden">{children}</div>
    </div>
  );
}

function GoalPreview({ visual }: { visual: Visual }) {
  if (visual === "website") {
    return (
      <PreviewChrome url="jouwsite.nl / concept">
        <div className="rounded-lg border border-[color:var(--color-line)] bg-[color:var(--color-bg)]/50 overflow-hidden">
          <div className="flex items-center justify-between px-2.5 py-1.5 border-b border-[color:var(--color-line)] bg-white/60">
            <div className="h-2 w-9 rounded-full bg-[color:var(--color-ink-faint)]" />
            <div className="flex gap-1.5">
              <div className="h-1.5 w-5 rounded-full bg-[color:var(--color-ink-faint)]" />
              <div className="h-1.5 w-6 rounded-full bg-[color:var(--color-purple)]/55" />
            </div>
          </div>
          <div className="px-3 py-3">
            <div className="h-1.5 w-12 rounded-full bg-[color:var(--color-purple)]/40 mb-2" />
            <div className="h-3 w-[78%] rounded bg-[color:var(--color-ink-faint)] mb-1.5" />
            <div className="h-3 w-[52%] rounded bg-[color:var(--color-purple)]/35 mb-2.5" />
            <div className="flex gap-2">
              <div className="h-5 w-16 rounded-full bg-[color:var(--color-purple)]/75" />
              <div className="h-5 w-12 rounded-full border border-[color:var(--color-line-strong)]" />
            </div>
          </div>
        </div>
        <div className="mt-2.5 flex items-center gap-1.5">
          {["Hero", "Diensten", "Footer"].map((b, i) => (
            <span key={b} className={["px-2 py-0.5 rounded-full text-[9.5px] font-medium", i === 0 ? "bg-[color:var(--color-purple-tint)] text-[color:var(--color-purple)]" : "border border-[color:var(--color-line)] text-[color:var(--color-ink-subtle)]"].join(" ")}>{b}</span>
          ))}
        </div>
      </PreviewChrome>
    );
  }

  if (visual === "leads") {
    return (
      <PreviewChrome url="forester.app / lead-engine">
        <div className="rounded-lg border border-[color:var(--color-line)] bg-[color:var(--color-bg)]/50 p-2.5 mb-2.5">
          <div className="h-1.5 w-14 rounded-full bg-[color:var(--color-purple)]/40 mb-2" />
          <div className="space-y-1.5">
            <div className="h-5 rounded border border-[color:var(--color-line-strong)] bg-white" />
            <div className="flex items-center gap-1.5">
              <div className="h-5 flex-1 rounded border border-[color:var(--color-line-strong)] bg-white" />
              <div className="h-5 w-16 rounded bg-[color:var(--color-purple)]" />
            </div>
          </div>
        </div>
        <ul className="space-y-1.5">
          {[{ n: "Studio Praline", live: true }, { n: "Bureau Klaverwijk" }].map((l, i) => (
            <li key={l.n} className="flex items-center gap-2 px-2 py-1.5 rounded-lg border border-[color:var(--color-line)] bg-[color:var(--color-bg)]/60">
              <span className={["inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[8.5px] font-bold text-[color:var(--color-ink)]", i === 0 ? "bg-[color:var(--color-purple-tint)]" : "bg-[color:var(--color-bg-muted)]"].join(" ")}>{l.n.split(" ").slice(0, 2).map((w) => w[0]).join("")}</span>
              <span className="text-[10.5px] font-semibold text-[color:var(--color-ink)] truncate flex-1">{l.n}</span>
              {l.live && <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-purple)]" />}
            </li>
          ))}
        </ul>
      </PreviewChrome>
    );
  }

  if (visual === "seo") {
    return (
      <PreviewChrome url="forester.app / vindbaarheid">
        <div className="flex items-end justify-between mb-2.5">
          <div>
            <div className="text-[9px] uppercase tracking-[0.14em] text-[color:var(--color-ink-subtle)] font-medium">Gem. positie</div>
            <div className="mt-0.5 flex items-baseline gap-1.5">
              <span className="font-[family-name:var(--font-display)] text-[22px] font-bold text-[color:var(--color-ink-strong)] tabular-nums leading-none">#3,1</span>
              <span className="inline-flex items-center gap-0.5 text-[10px] font-semibold text-emerald-600"><TrendingUp className="h-2.5 w-2.5" strokeWidth={2.5} />+1,8</span>
            </div>
          </div>
          <svg viewBox="0 0 70 30" className="h-7 w-16" aria-hidden>
            <polyline points="0,26 12,22 22,24 32,16 44,18 54,9 70,4" fill="none" stroke="var(--color-purple)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
          </svg>
        </div>
        <ul className="space-y-1.5">
          {[{ kw: "interieurontwerp utrecht", p: 2, up: 3 }, { kw: "architect verbouwing", p: 4, up: 1 }, { kw: "boekhouder zzp", p: 6, up: 2 }].map((r) => (
            <li key={r.kw} className="flex items-center gap-2 px-2 py-1.5 rounded-lg border border-[color:var(--color-line)] bg-[color:var(--color-bg)]/60">
              <span className="inline-flex h-5 min-w-5 px-1 items-center justify-center rounded bg-[color:var(--color-purple-tint)] text-[9.5px] font-bold text-[color:var(--color-purple)] tabular-nums shrink-0">{r.p}</span>
              <span className="text-[10px] font-medium text-[color:var(--color-ink)] truncate flex-1">{r.kw}</span>
              <span className="inline-flex items-center gap-0.5 text-[9.5px] font-semibold text-emerald-600 shrink-0"><TrendingUp className="h-2.5 w-2.5" strokeWidth={2.5} />{r.up}</span>
            </li>
          ))}
        </ul>
      </PreviewChrome>
    );
  }

  if (visual === "crm") {
    const cols = [{ t: "Nieuw", n: 2 }, { t: "In gesprek", n: 1 }, { t: "Voorstel", n: 2 }];
    return (
      <PreviewChrome url="forester.app / crm">
        <div className="grid grid-cols-3 gap-1.5">
          {cols.map((c, ci) => (
            <div key={c.t} className="rounded-lg border border-[color:var(--color-line)] bg-[color:var(--color-bg)]/50 p-1.5">
              <div className="flex items-center justify-between px-0.5 mb-1.5">
                <span className="text-[8px] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-ink-subtle)]">{c.t}</span>
                <span className="text-[8px] font-[family-name:var(--font-mono)] text-[color:var(--color-ink-faint)]">{c.n}</span>
              </div>
              <div className="space-y-1.5">
                {Array.from({ length: c.n }).map((_, i) => (
                  <div key={i} className="rounded border border-[color:var(--color-line)] bg-white p-1.5">
                    <div className="flex items-center gap-1 mb-1">
                      <span className={["inline-flex h-3.5 w-3.5 rounded-full", ci === 0 && i === 0 ? "bg-[color:var(--color-purple)]/60" : "bg-[color:var(--color-bg-muted)]"].join(" ")} />
                      <div className="h-1 flex-1 rounded bg-[color:var(--color-ink-faint)]" />
                    </div>
                    <div className="h-1 w-2/3 rounded bg-[color:var(--color-ink-faint)]" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-2.5 flex items-center gap-1.5">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[color:var(--color-purple-tint)] text-[9.5px] font-semibold text-[color:var(--color-purple)]"><Users className="h-2.5 w-2.5" strokeWidth={2.5} />4 teamleden</span>
          <span className="px-2 py-0.5 rounded-full border border-[color:var(--color-line)] text-[9.5px] font-medium text-[color:var(--color-ink-subtle)]">7 taken</span>
        </div>
      </PreviewChrome>
    );
  }

  if (visual === "ai") {
    return (
      <PreviewChrome url="forester.app / ai">
        <div className="flex items-center gap-1.5 mb-2">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--color-purple-tint)]"><Sparkles className="h-3 w-3 text-[color:var(--color-purple)]" strokeWidth={2.5} /></span>
          <span className="text-[11px] font-semibold text-[color:var(--color-ink)]">Q schrijft mee</span>
        </div>
        <div className="ml-auto w-fit max-w-[85%] mb-1.5 px-2.5 py-1.5 rounded-xl rounded-br-sm bg-[color:var(--color-bg-muted)] text-[10px] text-[color:var(--color-ink)] leading-snug">Schrijf een blog over duurzaam ondernemen</div>
        <div className="max-w-[92%] px-2.5 py-2 rounded-xl rounded-tl-sm border border-[color:var(--color-line)] bg-white">
          <div className="text-[10.5px] font-semibold text-[color:var(--color-ink)] mb-1.5 leading-snug">Duurzaam ondernemen: 5 stappen</div>
          <div className="space-y-1">
            <div className="h-1 w-full rounded bg-[color:var(--color-ink-faint)]" />
            <div className="h-1 w-[88%] rounded bg-[color:var(--color-ink-faint)]" />
            <div className="h-1 w-[42%] rounded bg-[color:var(--color-purple)]/40" />
          </div>
        </div>
        <div className="mt-2 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[color:var(--color-purple)] text-white text-[9.5px] font-semibold">Ingepland: di 09:00</div>
      </PreviewChrome>
    );
  }

  // platform
  const modules = ["Website", "CRM", "SEO", "Lead Engine", "AI-content", "Rapporten"];
  return (
    <PreviewChrome url="forester.app / dashboard">
      <div className="grid grid-cols-3 gap-1.5 mb-2.5">
        {modules.map((m, i) => (
          <div key={m} className="rounded-lg border border-[color:var(--color-line)] bg-[color:var(--color-bg)]/50 p-1.5">
            <div className="h-4 w-4 rounded mb-1" style={{ background: `rgba(98,59,199,${0.7 - i * 0.07})` }} />
            <div className="text-[8.5px] font-semibold text-[color:var(--color-ink)] leading-tight">{m}</div>
          </div>
        ))}
      </div>
      <div className="rounded-lg border border-[color:var(--color-line)] bg-white p-2">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[8.5px] uppercase tracking-[0.12em] text-[color:var(--color-ink-subtle)] font-semibold">Eén overzicht</span>
          <Zap className="h-2.5 w-2.5 text-[color:var(--color-purple)]" strokeWidth={2.5} fill="currentColor" />
        </div>
        <div className="flex items-end gap-[2px] h-6">{[22, 30, 26, 38, 46, 40, 54, 62, 52, 68].map((h, i) => (
          <span key={i} className="block w-1 rounded-[1px] bg-[color:var(--color-purple)]/80" style={{ height: `${h}%`, opacity: 0.4 + (i / 10) * 0.6 }} />
        ))}</div>
      </div>
    </PreviewChrome>
  );
}
