"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { getFeatureLink, PRICING_PLANS, type PricingPlan } from "@/lib/pricing";

const EASE = [0.23, 1, 0.32, 1] as const;

function formatPrice(p: number) {
  return `€${p.toLocaleString("nl-NL")}`;
}

export function PricingPlans() {
  return (
    <section className="relative px-5 sm:px-8 pt-16 sm:pt-20 pb-24 sm:pb-32 bg-[#e9e4f7]">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 lg:gap-7 md:grid-cols-3 items-stretch">
          {PRICING_PLANS.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} index={i} />
          ))}
        </div>

        <p className="mt-10 text-center text-[13px] text-[color:var(--color-ink-subtle)]">
          Alle prijzen excl. BTW. Initiële contractperiode van 12 maanden, daarna maandelijks opzegbaar met 2 maanden opzegtermijn. Onboarding inbegrepen, betaaltermijn 14 dagen.
        </p>
      </div>
    </section>
  );
}

function PlanCard({ plan, index }: { plan: PricingPlan; index: number }) {
  const popular = !!plan.popular;
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: EASE, delay: 0.1 + index * 0.08 }}
      className={[
        "relative flex flex-col rounded-[2rem] p-7 sm:p-8 transition-shadow duration-300 ease-out",
        popular
          ? "bg-[color:var(--color-bg-elevated)] border-2 border-[color:var(--color-purple)]/45 ring-1 ring-[color:var(--color-purple)]/15 shadow-[0_28px_60px_-22px_rgba(98,59,199,0.42)] lg:scale-[1.02]"
          : "bg-[color:var(--color-bg-elevated)] border border-[color:var(--color-line)] shadow-[0_18px_44px_-22px_rgba(12,6,18,0.16)] hover:shadow-[0_24px_56px_-24px_rgba(12,6,18,0.22)]",
      ].join(" ")}
    >
      {popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-[color:var(--color-purple)] text-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] shadow-[0_8px_20px_-8px_rgba(98,59,199,0.6)]">
          <Sparkles className="h-3 w-3" strokeWidth={2.5} />
          Populairst
        </span>
      )}

      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-ink-subtle)]">
        {plan.name}
      </div>
      <p className="mt-2 text-[15px] font-semibold leading-[1.35] text-[color:var(--color-ink-strong)]">
        {plan.tagline}
      </p>

      <div className="mt-6 flex items-baseline gap-1.5">
        {plan.monthlyPrice !== null ? (
          <>
            <span className="font-[family-name:var(--font-display)] font-bold text-[44px] sm:text-[52px] leading-none tracking-[-0.02em] text-[color:var(--color-ink-strong)] tabular-nums">
              {formatPrice(plan.monthlyPrice)}
            </span>
            <span className="text-[14px] text-[color:var(--color-ink-muted)]">/ maand</span>
          </>
        ) : (
          <span className="font-[family-name:var(--font-display)] font-bold text-[34px] sm:text-[40px] leading-none tracking-[-0.02em] text-[color:var(--color-ink-strong)]">
            Op aanvraag
          </span>
        )}
      </div>
      <p className="mt-3 text-[13.5px] leading-[1.55] text-[color:var(--color-ink-muted)]">{plan.pitch}</p>

      <Link
        href={plan.ctaHref}
        className={[
          "btn-press group mt-6 inline-flex items-center justify-between gap-2 pl-5 pr-2 py-2.5 rounded-full text-[14px] font-semibold transition-colors",
          popular
            ? "bg-[color:var(--color-purple)] hover:bg-[color:var(--color-purple-hover)] text-white shadow-[0_2px_4px_rgba(98,59,199,0.28),0_14px_32px_-12px_rgba(98,59,199,0.55)]"
            : "bg-[color:var(--color-ink-strong)] hover:bg-[color:var(--color-purple)] text-white shadow-[0_8px_20px_-10px_rgba(12,6,18,0.4)]",
        ].join(" ")}
      >
        {plan.ctaLabel}
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/18 transition-[transform,background-color] duration-200 ease-out group-hover:translate-x-0.5 group-hover:bg-white/28">
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
        </span>
      </Link>

      <div className="mt-7 h-px bg-[color:var(--color-line)]" />

      <ul className="mt-6 space-y-3 flex-1">
        {plan.features.map((f) => {
          const href = getFeatureLink(f);
          return (
            <li key={f} className="flex items-start gap-2.5 text-[13.5px] leading-[1.5] text-[color:var(--color-ink)]">
              <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-purple-tint)] text-[color:var(--color-purple)]">
                <Check className="h-2.5 w-2.5" strokeWidth={3} />
              </span>
              {href ? (
                <Link
                  href={href}
                  className="text-[color:var(--color-ink)] underline decoration-[color:var(--color-purple)]/35 decoration-1 underline-offset-[3px] hover:decoration-[color:var(--color-purple)] hover:text-[color:var(--color-purple)] transition-colors"
                >
                  {f}
                </Link>
              ) : (
                <span>{f}</span>
              )}
            </li>
          );
        })}
      </ul>
    </motion.article>
  );
}
