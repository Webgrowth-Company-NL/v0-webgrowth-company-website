import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { KennismakingButton } from "@/components/kennismaking-button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import type { CaseStudy } from "@/lib/cases";

export function CasePage({ study }: { study: CaseStudy }) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* intro */}
        <section className="relative px-5 sm:px-8 pt-32 sm:pt-40 pb-12 sm:pb-16">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/cases"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[color:var(--color-ink-muted)] hover:text-[color:var(--color-purple)] transition-colors mb-7"
            >
              <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2.5} />
              Alle klantverhalen
            </Link>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mb-5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[color:var(--color-bg-muted)] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={study.logo} alt="" className="h-6 w-6 object-contain" />
              </span>
              <span className="text-[14px] font-semibold text-[color:var(--color-ink)]">{study.client}</span>
              <span className="text-[13px] text-[color:var(--color-ink-subtle)]">{study.sector} · {study.location}</span>
            </div>
            <h1 className="font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.08] tracking-[-0.02em] text-[color:var(--color-ink-strong)]">
              {study.headlineLead} <span className="text-[color:var(--color-purple)]">{study.headlineHighlight}</span>
            </h1>
            <p className="mt-5 text-[17px] sm:text-[18px] leading-[1.65] text-[color:var(--color-ink-muted)] max-w-2xl">{study.intro}</p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press group inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full bg-[color:var(--color-purple)] hover:bg-[color:var(--color-purple-hover)] text-white text-[14px] font-semibold shadow-[0_2px_4px_rgba(98,59,199,0.28),0_14px_32px_-12px_rgba(98,59,199,0.55)] hover:shadow-[0_6px_14px_rgba(98,59,199,0.34),0_22px_46px_-12px_rgba(98,59,199,0.75)]"
              >
                Bekijk de live site
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/18 transition-transform duration-200 ease-out group-hover:translate-x-0.5">
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
              </a>
              <span className="text-[13px] text-[color:var(--color-ink-subtle)] font-[family-name:var(--font-mono)]">{study.liveLabel}</span>
            </div>
          </div>
        </section>

        {/* hero image */}
        <section className="px-5 sm:px-8 pb-14 sm:pb-20">
          <div className="mx-auto max-w-5xl">
            <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden border border-[color:var(--color-line)] shadow-[0_28px_64px_-26px_rgba(12,6,18,0.22)]">
              <Image src={study.img} alt={study.imgAlt} fill sizes="(max-width: 1024px) 100vw, 1024px" className="object-cover" style={{ objectPosition: study.imgPosition ?? "center" }} priority />
            </div>
          </div>
        </section>

        {/* features */}
        <section className="px-5 sm:px-8 pb-16 sm:pb-20">
          <div className="mx-auto max-w-5xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-purple)]">
                Wat we bouwden
              </span>
              <span className="h-px flex-1 bg-[color:var(--color-line)]" />
            </div>
            <div className="grid sm:grid-cols-3 gap-5 sm:gap-6">
              {study.features.map((f) => (
                <div key={f.label} className="rounded-2xl bg-[color:var(--color-bg-elevated)] border border-[color:var(--color-line)] p-6 shadow-[0_1px_2px_rgba(12,6,18,0.04)]">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[color:var(--color-purple-tint)] mb-3.5">
                    <Check className="h-4 w-4 text-[color:var(--color-purple)]" strokeWidth={3} />
                  </span>
                  <h3 className="text-[15px] font-semibold text-[color:var(--color-ink)] mb-1.5">{f.label}</h3>
                  <p className="text-[13.5px] leading-relaxed text-[color:var(--color-ink-muted)]">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* challenge */}
        {study.challenge && (
          <section className="px-5 sm:px-8 pb-16 sm:pb-20">
            <div className="mx-auto max-w-3xl">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-purple)]">
                  De uitdaging
                </span>
                <span className="h-px flex-1 bg-[color:var(--color-line)]" />
              </div>
              <h2 className="font-[family-name:var(--font-display)] font-bold text-[clamp(1.7rem,3.5vw,2.6rem)] leading-[1.15] tracking-[-0.01em] text-[color:var(--color-ink-strong)]">
                {study.challenge.title}
              </h2>
              <p className="mt-5 text-[16px] sm:text-[17px] leading-[1.7] text-[color:var(--color-ink-muted)]">
                {study.challenge.body}
              </p>
            </div>
          </section>
        )}

        {/* solution */}
        {study.solution && study.solution.length > 0 && (
          <section className="px-5 sm:px-8 pb-16 sm:pb-20 bg-[color:var(--color-bg)]">
            <div className="mx-auto max-w-3xl pt-16 sm:pt-20">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-purple)]">
                  Onze aanpak
                </span>
                <span className="h-px flex-1 bg-[color:var(--color-line)]" />
              </div>
              <h2 className="font-[family-name:var(--font-display)] font-bold text-[clamp(1.7rem,3.5vw,2.6rem)] leading-[1.15] tracking-[-0.01em] text-[color:var(--color-ink-strong)] mb-10">
                Hoe we het hebben opgelost.
              </h2>
              <div className="space-y-10">
                {study.solution.map((section, i) => (
                  <article key={section.title} className="relative pl-12 sm:pl-14">
                    <span className="absolute left-0 top-0 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--color-purple)] text-white font-[family-name:var(--font-display)] font-bold text-[14px] tabular-nums shadow-[0_8px_22px_-10px_rgba(98,59,199,0.55)]">
                      {i + 1}
                    </span>
                    <h3 className="font-[family-name:var(--font-display)] font-bold text-[19px] sm:text-[22px] leading-[1.25] tracking-[-0.005em] text-[color:var(--color-ink-strong)]">
                      {section.title}
                    </h3>
                    <p className="mt-3 text-[15px] sm:text-[16px] leading-[1.7] text-[color:var(--color-ink-muted)]">
                      {section.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* results */}
        {study.results && study.results.length > 0 && (
          <section className="px-5 sm:px-8 pb-16 sm:pb-20">
            <div className="mx-auto max-w-5xl">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-purple)]">
                  Wat het opleverde
                </span>
                <span className="h-px flex-1 bg-[color:var(--color-line)]" />
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                {study.results.map((r) => (
                  <div key={r.label} className="rounded-2xl bg-[color:var(--color-bg-elevated)] border border-[color:var(--color-line)] p-5 sm:p-6 shadow-[0_1px_2px_rgba(12,6,18,0.04)]">
                    <div className="font-[family-name:var(--font-display)] font-bold text-[28px] sm:text-[32px] leading-none tracking-[-0.01em] text-[color:var(--color-purple)]">
                      {r.value}
                    </div>
                    <div className="mt-3 text-[14px] font-semibold text-[color:var(--color-ink-strong)]">
                      {r.label}
                    </div>
                    {r.descriptor && (
                      <div className="mt-1 text-[12.5px] leading-[1.5] text-[color:var(--color-ink-muted)]">
                        {r.descriptor}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* quote */}
        {study.quote && (
          <section className="px-5 sm:px-8 pb-16 sm:pb-20">
            <div className="mx-auto max-w-3xl rounded-[2rem] bg-[color:var(--color-purple-soft)] border border-[color:var(--color-purple)]/20 p-8 sm:p-10">
              <p className="font-[family-name:var(--font-display)] text-[19px] sm:text-[22px] leading-[1.45] text-[color:var(--color-ink-strong)] italic">
                &ldquo;{study.quote.text}&rdquo;
              </p>
              <footer className="mt-6 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--color-purple)] text-white text-[13px] font-bold">
                  {study.quote.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </span>
                <div>
                  <div className="text-[13.5px] font-semibold text-[color:var(--color-ink)]">
                    {study.quote.name}
                  </div>
                  {study.quote.role && (
                    <div className="text-[12px] text-[color:var(--color-ink-subtle)]">{study.quote.role}</div>
                  )}
                </div>
              </footer>
            </div>
          </section>
        )}

        {/* closing CTA */}
        <section className="px-5 sm:px-8 pb-28 sm:pb-36">
          <div className="mx-auto max-w-5xl rounded-[2rem] bg-gradient-to-br from-[#3f2a8f] via-[#5e3bc0] to-[#7c3aed] p-9 sm:p-12 text-center text-white shadow-[0_34px_72px_-22px_rgba(98,59,199,0.5)]">
            <h2 className="font-[family-name:var(--font-display)] font-bold text-[clamp(1.6rem,3.5vw,2.4rem)] leading-[1.12] tracking-[-0.01em]">Zoiets voor jou?</h2>
            <p className="mt-3 text-[15px] sm:text-[16px] text-white/75 max-w-md mx-auto">Doe de gratis website APK of plan een kennismaking. We denken graag mee.</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link href="/website-apk" className="btn-press group inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full bg-white text-[color:var(--color-purple)] text-[14px] font-semibold shadow-[0_8px_24px_-10px_rgba(12,6,18,0.4)]">
                Doe de gratis website APK
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[color:var(--color-purple)]/12 transition-transform duration-200 ease-out group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
              </Link>
              <KennismakingButton variant="inline" />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
