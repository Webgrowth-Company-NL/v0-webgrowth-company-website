"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Star, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";

const EASE = [0.23, 1, 0.32, 1] as const;

const HEADLINE_LINE1 = "Je nieuwe website.";
const HEADLINE_LINE2 = "Meer groei.";

const containerStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const wordReveal = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: EASE },
  },
};

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay },
  },
});

const cardReveal = (delay = 0) => ({
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: EASE, delay },
  },
});

const chipReveal = (delay = 0) => ({
  hidden: { opacity: 0, y: 12, scale: 0.94 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: EASE, delay },
  },
});

function Words({ text }: { text: string }) {
  return (
    <>
      {text.split(" ").map((w, i, arr) => (
        <motion.span
          key={`${w}-${i}`}
          variants={wordReveal}
          className="inline-block will-change-[transform,opacity,filter]"
        >
          {w}
          {i < arr.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </>
  );
}

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32 px-5 sm:px-8">
      {/* ── Background art — soft purple glows ─── */}
      <div
        aria-hidden
        className="absolute -top-44 -right-44 h-[620px] w-[620px] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(98,59,199,0.18), rgba(98,59,199,0) 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-56 -left-44 h-[620px] w-[620px] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(98,59,199,0.10), rgba(98,59,199,0) 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(12,6,18,0.07) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-20 items-center">
          {/* ── Left: copy ─────────────────────────── */}
          <motion.div
            variants={containerStagger}
            initial="hidden"
            animate="show"
            className="max-w-2xl"
          >
            {/* Eyebrow — purple pulse */}
            <motion.div
              variants={fadeUp(0)}
              className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full
                         border border-[color:var(--color-line)] bg-white
                         text-[12.5px] font-medium text-[color:var(--color-ink-muted)]"
            >
              <span className="relative inline-flex h-1.5 w-1.5">
                <span
                  className="absolute inset-0 rounded-full bg-[color:var(--color-purple)]"
                  style={{ animation: reduce ? undefined : "soft-pulse 2.4s ease-in-out infinite" }}
                />
              </span>
              Premium groeiplatform
              <span className="text-[color:var(--color-ink-faint)]">·</span>
              <span className="text-[color:var(--color-ink)] font-semibold">Sinds 2016</span>
            </motion.div>

            {/* Headline — solid purple op laatste regel */}
            <h1
              className="
                mt-7 font-[family-name:var(--font-display)] font-bold
                text-[clamp(2.6rem,6.2vw,5rem)]
                leading-[1.02] tracking-[-0.025em]
                text-[color:var(--color-ink-strong)]
              "
            >
              <motion.span variants={containerStagger} className="block">
                <Words text={HEADLINE_LINE1} />
              </motion.span>
              <motion.span
                variants={fadeUp(0.45)}
                className="block mt-1 text-[color:var(--color-purple)]"
              >
                {HEADLINE_LINE2}
              </motion.span>
            </h1>

            {/* Subhead — broader audience, geen sector-naming */}
            <motion.p
              variants={fadeUp(0.7)}
              className="
                mt-6 text-[17px] sm:text-[18px] leading-[1.6]
                text-[color:var(--color-ink-muted)] max-w-lg
              "
            >
              Eén abonnement voor groeiende organisaties.
              Website, CRM, marketing en AI op één plek, in plaats van negen losse leveranciers.
            </motion.p>

            {/* CTAs — APK primair (purple), kennismaking secundair */}
            <motion.div variants={fadeUp(0.85)} className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/website-apk"
                className="
                  btn-press group
                  inline-flex items-center gap-2 pl-6 pr-2 py-2
                  rounded-full
                  bg-[color:var(--color-purple)] hover:bg-[color:var(--color-purple-hover)]
                  text-white text-[14.5px] font-semibold
                  shadow-[0_2px_4px_rgba(98,59,199,0.28),0_18px_40px_-12px_rgba(98,59,199,0.6)]
                "
              >
                Doe de gratis website APK
                <span
                  className="
                    inline-flex h-9 w-9 items-center justify-center
                    rounded-full bg-white/18
                    transition-transform duration-200 ease-out
                    group-hover:translate-x-0.5 group-hover:scale-105 group-hover:bg-white/24
                  "
                >
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </span>
              </Link>
              <Link
                href="/contact"
                className="
                  btn-press group
                  inline-flex items-center gap-2 pl-6 pr-2 py-2
                  rounded-full
                  bg-white hover:bg-white
                  border border-[color:var(--color-line-strong)] hover:border-[color:var(--color-ink-faint)]
                  text-[color:var(--color-ink)] text-[14.5px] font-semibold
                  shadow-[0_1px_2px_rgba(12,6,18,0.04)]
                "
              >
                Boek een kennismaking
                <span
                  className="
                    inline-flex h-9 w-9 items-center justify-center
                    rounded-full bg-[color:var(--color-ink-strong)]/6
                    transition-transform duration-200 ease-out
                    group-hover:translate-x-0.5 group-hover:scale-105
                  "
                >
                  <ArrowRight className="h-4 w-4 text-[color:var(--color-ink)]" strokeWidth={2.5} />
                </span>
              </Link>
            </motion.div>

            {/* Trust row */}
            <motion.div
              variants={fadeUp(1.0)}
              className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3"
            >
              <a
                href="https://www.google.com/search?q=Webgrowth+Company+reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 group"
                aria-label="Google reviews: 9,4 van de 10"
              >
                <span className="flex gap-[2px]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-[color:var(--color-amber)] text-[color:var(--color-amber)]"
                      strokeWidth={0}
                    />
                  ))}
                </span>
                <span className="text-[14px] font-semibold text-[color:var(--color-ink)] tabular-nums">
                  9,4
                </span>
                <span className="text-[13px] text-[color:var(--color-ink-muted)] group-hover:text-[color:var(--color-ink)] transition-colors">
                  op Google
                </span>
              </a>

              <div className="hidden sm:block h-4 w-px bg-[color:var(--color-line)]" />

              <div className="inline-flex items-center gap-2 text-[13.5px] text-[color:var(--color-ink-muted)]">
                <span className="font-semibold text-[color:var(--color-ink)] tabular-nums">27</span>
                tevreden klanten
              </div>

              <div className="hidden sm:block h-4 w-px bg-[color:var(--color-line)]" />

              {/* NL vlag — horizontaal rood/wit/blauw */}
              <div className="inline-flex items-center gap-2 text-[13.5px] text-[color:var(--color-ink-muted)]">
                <span
                  className="inline-flex flex-col h-4 w-6 overflow-hidden rounded-[2px] ring-1 ring-[color:var(--color-line)]"
                  aria-label="Nederlandse vlag"
                >
                  <span className="h-1/3 w-full bg-[#AE1C28]" />
                  <span className="h-1/3 w-full bg-white" />
                  <span className="h-1/3 w-full bg-[#21468B]" />
                </span>
                Gebouwd in Nederland
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: Double-Bezel platform-preview ── */}
          <div className="relative h-[520px] sm:h-[560px] lg:h-[580px]">
            <motion.div
              variants={cardReveal(0.35)}
              initial="hidden"
              animate="show"
              className="
                absolute inset-0 m-auto
                w-full max-w-[460px]
                p-2 rounded-[2rem]
                bg-gradient-to-br from-white/70 to-[color:var(--color-bg-muted)]/60
                ring-1 ring-[color:var(--color-line)]
                shadow-[0_30px_80px_-30px_rgba(12,6,18,0.18),0_10px_30px_-15px_rgba(98,59,199,0.22)]
              "
            >
              <div
                className="
                  relative h-full
                  rounded-[calc(2rem-0.5rem)]
                  bg-white
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]
                  overflow-hidden
                "
              >
                {/* Browser-chrome strip */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-[color:var(--color-line)]">
                  <span className="h-2 w-2 rounded-full bg-[color:var(--color-ink-faint)]" />
                  <span className="h-2 w-2 rounded-full bg-[color:var(--color-ink-faint)]" />
                  <span className="h-2 w-2 rounded-full bg-[color:var(--color-ink-faint)]" />
                  <div className="ml-2 flex-1 px-2.5 py-1 rounded-md bg-[color:var(--color-bg-muted)]/80 text-[10.5px] font-[family-name:var(--font-mono)] text-[color:var(--color-ink-subtle)] truncate">
                    forester.app / dashboard
                  </div>
                </div>

                {/* Stats + bar chart */}
                <div className="px-5 pt-5 pb-6">
                  <div className="flex items-end justify-between mb-5">
                    <div>
                      <div className="text-[10.5px] uppercase tracking-[0.16em] text-[color:var(--color-ink-subtle)] font-medium">
                        Leads · 30 dagen
                      </div>
                      <div className="mt-1 flex items-baseline gap-2">
                        <span className="font-[family-name:var(--font-mono)] text-[28px] font-bold text-[color:var(--color-ink-strong)] tabular-nums leading-none">
                          287
                        </span>
                        <span className="inline-flex items-center gap-1 text-[11.5px] font-semibold text-[color:var(--color-purple)]">
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

                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-ink-subtle)] font-semibold">
                      Recente leads
                    </span>
                    <span className="text-[10.5px] text-[color:var(--color-ink-faint)] font-[family-name:var(--font-mono)]">
                      live
                    </span>
                  </div>

                  {/* Broader sector mix — geen advocaten/notarissen/accountants */}
                  <ul className="space-y-2">
                    {[
                      { name: "Studio Praline", role: "Website APK", time: "2 min", live: true },
                      { name: "Architectenbureau Holm", role: "Demo aanvraag", time: "14 min", live: false },
                      { name: "Praktijk De Vijver", role: "Contact form", time: "1 uur", live: false },
                      { name: "Bouwbedrijf Klaverwijk", role: "Website APK", time: "3 uur", live: false },
                    ].map((lead, i) => (
                      <motion.li
                        key={lead.name}
                        variants={chipReveal(0.85 + i * 0.08)}
                        initial="hidden"
                        animate="show"
                        className="
                          flex items-center gap-3
                          px-3 py-2.5 rounded-xl
                          border border-[color:var(--color-line)]
                          bg-[color:var(--color-bg)]/60
                        "
                      >
                        <span
                          className={[
                            "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                            "text-[11px] font-bold text-[color:var(--color-ink)]",
                            i === 0
                              ? "bg-[color:var(--color-purple-tint)]"
                              : "bg-[color:var(--color-bg-muted)]",
                          ].join(" ")}
                        >
                          {lead.name
                            .split(" ")
                            .slice(0, 2)
                            .map((w) => w[0])
                            .join("")}
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="text-[12.5px] font-semibold text-[color:var(--color-ink)] truncate">
                            {lead.name}
                          </div>
                          <div className="text-[10.5px] text-[color:var(--color-ink-subtle)] truncate">
                            {lead.role}
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          {lead.live && (
                            <span className="relative inline-flex h-1.5 w-1.5">
                              <span
                                className="absolute inset-0 rounded-full bg-[color:var(--color-purple)]"
                                style={{
                                  animation: reduce ? undefined : "soft-pulse 1.8s ease-in-out infinite",
                                }}
                              />
                            </span>
                          )}
                          <span className="text-[10.5px] font-[family-name:var(--font-mono)] text-[color:var(--color-ink-subtle)] tabular-nums">
                            {lead.time}
                          </span>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Floating rating chip */}
            <motion.div
              variants={chipReveal(1.2)}
              initial="hidden"
              animate="show"
              className="absolute -top-1 left-2 sm:-left-2 z-10"
              style={{ animation: reduce ? undefined : "float-y 7.5s ease-in-out infinite" }}
            >
              <Chip>
                <span className="flex gap-[2px]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-[color:var(--color-amber)] text-[color:var(--color-amber)]"
                      strokeWidth={0}
                    />
                  ))}
                </span>
                <span className="text-[12.5px] font-semibold text-[color:var(--color-ink)] tabular-nums">9,4</span>
                <span className="text-[11.5px] text-[color:var(--color-ink-subtle)]">op Google</span>
              </Chip>
            </motion.div>

            {/* Floating Leads stat-card — bottom-right */}
            <motion.div
              variants={chipReveal(1.4)}
              initial="hidden"
              animate="show"
              className="absolute -bottom-3 -right-2 sm:-right-6 z-10"
              style={{ animation: reduce ? undefined : "float-y 8.5s ease-in-out 0.6s infinite" }}
            >
              <StatChip
                label="Leads"
                value="4.714"
                delta="+15,3%"
                descriptor="engaged"
              />
            </motion.div>

            {/* Floating Bezoekers stat-card — right-middle (hidden on small) */}
            <motion.div
              variants={chipReveal(1.6)}
              initial="hidden"
              animate="show"
              className="absolute top-[18%] -right-4 sm:-right-8 z-10 hidden sm:block"
              style={{ animation: reduce ? undefined : "float-y 9.2s ease-in-out 1.1s infinite" }}
            >
              <StatChip
                label="Bezoekers"
                value="4.977"
                delta="+11,1%"
                descriptor="vs vorige periode"
              />
            </motion.div>

            {/* Floating Prospects stat-card — left-middle (hidden on small) */}
            <motion.div
              variants={chipReveal(1.8)}
              initial="hidden"
              animate="show"
              className="absolute top-[52%] -left-4 sm:-left-10 z-10 hidden sm:block"
              style={{ animation: reduce ? undefined : "float-y 10s ease-in-out 1.6s infinite" }}
            >
              <StatChip
                label="Prospects"
                value="183"
                delta="+5,8%"
                descriptor="formulier ingevuld"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        inline-flex items-center gap-2
        pl-2 pr-3 py-1.5 rounded-full
        bg-white
        border border-[color:var(--color-line)]
        shadow-[0_1px_2px_rgba(12,6,18,0.04),0_24px_48px_-24px_rgba(12,6,18,0.22)]
      "
    >
      {children}
    </div>
  );
}

function StatChip({
  label,
  value,
  delta,
  descriptor,
}: {
  label: string;
  value: string;
  delta: string;
  descriptor: string;
}) {
  return (
    <div
      className="
        relative
        flex flex-col gap-1.5
        min-w-[152px] pl-3.5 pr-9 py-3
        rounded-2xl bg-white
        border border-[color:var(--color-line)]
        shadow-[0_1px_2px_rgba(12,6,18,0.04),0_24px_56px_-24px_rgba(12,6,18,0.22)]
      "
    >
      {/* Lightning bolt corner */}
      <span
        className="
          absolute top-2.5 right-2.5
          inline-flex h-6 w-6 items-center justify-center
          rounded-full bg-[color:var(--color-purple-tint)]
        "
      >
        <Zap
          className="h-3 w-3 text-[color:var(--color-purple)]"
          strokeWidth={2.5}
          fill="currentColor"
        />
      </span>

      <span className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[color:var(--color-ink-subtle)]">
        {label}
      </span>
      <span className="font-[family-name:var(--font-display)] text-[26px] font-bold text-[color:var(--color-ink-strong)] tabular-nums leading-none">
        {value}
      </span>
      <span className="inline-flex items-center gap-1 text-[10.5px]">
        <TrendingUp className="h-3 w-3 text-emerald-600" strokeWidth={2.5} />
        <span className="font-semibold text-emerald-600 tabular-nums">{delta}</span>
        <span className="text-[color:var(--color-ink-subtle)] truncate">{descriptor}</span>
      </span>
    </div>
  );
}
