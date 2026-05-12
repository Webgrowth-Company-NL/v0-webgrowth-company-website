import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import type { SeoPage } from "@/lib/pages";

export function PlaceholderPage({
  page,
  homeHref = "/",
  homeLabel = "Terug naar home",
  badgeText,
}: {
  page: SeoPage;
  homeHref?: string;
  homeLabel?: string;
  badgeText?: string;
}) {
  const illustration = page.illustration ?? "growth";
  const badge = badgeText ?? (page.soon ? "Binnenkort beschikbaar" : "Deze pagina is in opbouw");

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="relative isolate overflow-hidden px-5 sm:px-8 pt-36 pb-28 sm:pt-40 sm:pb-32">
          <div
            aria-hidden
            className="absolute -top-40 right-0 h-[540px] w-[540px] rounded-full"
            style={{ background: "radial-gradient(closest-side, rgba(98,59,199,0.16), rgba(98,59,199,0) 70%)" }}
          />
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_70%)]"
            style={{ backgroundImage: "radial-gradient(rgba(12,6,18,0.07) 1px, transparent 1px)", backgroundSize: "26px 26px" }}
          />

          <div className="relative mx-auto max-w-5xl grid lg:grid-cols-[1fr_0.82fr] gap-12 lg:gap-16 items-center">
            {/* Copy */}
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[color:var(--color-line)] bg-white text-[12px] font-medium text-[color:var(--color-ink-muted)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-purple)]" />
                {badge}
                {page.eyebrow && (
                  <>
                    <span className="text-[color:var(--color-ink-faint)]">·</span>
                    <span className="text-[color:var(--color-ink)] font-semibold">{page.eyebrow}</span>
                  </>
                )}
              </span>

              <h1 className="mt-7 font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.05] tracking-[-0.02em] text-[color:var(--color-ink-strong)]">
                {page.h1}
              </h1>

              <p className="mt-5 text-[17px] leading-[1.6] text-[color:var(--color-ink-muted)] max-w-md mx-auto lg:mx-0">
                {page.intro}
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <Link
                  href="/website-apk"
                  className="btn-press group inline-flex items-center gap-2 pl-6 pr-2 py-2 rounded-full bg-[color:var(--color-purple)] hover:bg-[color:var(--color-purple-hover)] text-white text-[14.5px] font-semibold shadow-[0_2px_4px_rgba(98,59,199,0.28),0_18px_40px_-12px_rgba(98,59,199,0.55)] hover:shadow-[0_8px_18px_rgba(98,59,199,0.36),0_28px_56px_-12px_rgba(98,59,199,0.78)]"
                >
                  Doe de gratis website APK
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/18 transition-[transform,background-color] duration-200 ease-out group-hover:translate-x-0.5 group-hover:bg-white/30">
                    <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                </Link>
                <Link
                  href={homeHref}
                  className="btn-press group inline-flex items-center gap-2 pl-2 pr-6 py-2 rounded-full bg-white hover:bg-[color:var(--color-purple-soft)] border border-[color:var(--color-line-strong)] hover:border-[color:var(--color-purple)]/35 text-[color:var(--color-ink)] hover:text-[color:var(--color-purple)] text-[14.5px] font-semibold shadow-[0_1px_2px_rgba(12,6,18,0.04)] hover:shadow-[0_10px_24px_-10px_rgba(98,59,199,0.3)]"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--color-ink-strong)]/6 transition-[transform,background-color] duration-200 ease-out group-hover:-translate-x-0.5 group-hover:bg-[color:var(--color-purple)]/15">
                    <ArrowLeft className="h-4 w-4 transition-colors duration-200 ease-out group-hover:text-[color:var(--color-purple)]" strokeWidth={2.5} />
                  </span>
                  {homeLabel}
                </Link>
              </div>
            </div>

            {/* Illustration */}
            <div className="order-first lg:order-last flex justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/illustrations/${illustration}.svg`}
                alt=""
                aria-hidden
                loading="lazy"
                className="w-full max-w-[300px] sm:max-w-[380px] lg:max-w-[420px] h-auto select-none pointer-events-none drop-shadow-[0_30px_60px_-30px_rgba(98,59,199,0.35)]"
              />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
