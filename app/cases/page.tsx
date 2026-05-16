import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { KennismakingButton } from "@/components/kennismaking-button";
import { SectionCta } from "@/components/section-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WaveDivider } from "@/components/wave-divider";
import { CASE_STUDIES } from "@/lib/cases";

const CREAM = "#faf6f0";
const LAVENDER = "#e9e4f7";
const DEEP = "#2c1d5e";

const TITLE = "Klantverhalen: wat we voor anderen bouwden | Webgrowth Company";
const DESCRIPTION =
  "Echte voorbeelden van bedrijven die met ons hun website, marketing en groei op orde brachten. Van een corporate platform tot een leesclub-site, dit is wat we recent live brachten.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/cases" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://webgrowth.company/cases",
    type: "website",
  },
};

export default function CasesPage() {
  const [featured, ...rest] = CASE_STUDIES;

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative isolate overflow-hidden pt-32 pb-12 sm:pt-40 sm:pb-16 px-5 sm:px-8 bg-[color:var(--color-bg)]">
          <div
            aria-hidden
            className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full"
            style={{ background: "radial-gradient(closest-side, rgba(98,59,199,0.16), rgba(98,59,199,0) 70%)" }}
          />
          <div
            aria-hidden
            className="absolute -bottom-48 -left-40 h-[520px] w-[520px] rounded-full"
            style={{ background: "radial-gradient(closest-side, rgba(124,58,237,0.10), rgba(124,58,237,0) 70%)" }}
          />
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
            style={{ backgroundImage: "radial-gradient(rgba(12,6,18,0.07) 1px, transparent 1px)", backgroundSize: "26px 26px" }}
          />

          <div className="relative mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full border border-[color:var(--color-line)] bg-white text-[12.5px] font-medium text-[color:var(--color-ink-muted)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-purple)]" />
              Klantverhalen
              <span className="text-[color:var(--color-ink-faint)]">·</span>
              <span className="text-[color:var(--color-ink)] font-semibold">{CASE_STUDIES.length} recente projecten</span>
            </span>

            <h1 className="mt-7 font-[family-name:var(--font-display)] font-bold text-[clamp(2.3rem,5.3vw,4.2rem)] leading-[1.05] tracking-[-0.022em] text-[color:var(--color-ink-strong)]">
              Wat we voor anderen{" "}
              <span
                className="inline bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(110deg, #ff0096 0%, #8b5cf6 50%, #c4b5fd 100%)",
                  WebkitBackgroundClip: "text",
                }}
              >
                bouwden.
              </span>
            </h1>

            <p className="mt-6 text-[17px] sm:text-[18px] leading-[1.65] text-[color:var(--color-ink-muted)] max-w-2xl mx-auto">
              Hier vind je een greep uit de websites die we recent live hebben gebracht, van een corporate logistiek-site met een eigen volumecalculator tot een leesclub-site met een interactieve locatiekaart. Elke case zit anders in elkaar, maar de aanpak is hetzelfde: bouwen op Forester OS, alles in één pakket.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <KennismakingButton variant="secondary" />
              <Link
                href="/forester-os"
                className="inline-flex items-center gap-2 text-[14.5px] font-semibold text-[color:var(--color-ink-muted)] hover:text-[color:var(--color-purple)] transition-colors"
              >
                Bekijk Forester OS
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </section>

        {/* Cases grid */}
        <section className="relative px-5 sm:px-8 pb-28 sm:pb-36 bg-[color:var(--color-bg)]">
          <div className="mx-auto max-w-6xl">
            {/* Featured first */}
            {featured && (
              <article className="group relative flex flex-col rounded-[2rem] bg-[color:var(--color-bg-elevated)] border border-[color:var(--color-line)] overflow-hidden shadow-[0_18px_44px_-22px_rgba(12,6,18,0.16)] hover:shadow-[0_30px_64px_-24px_rgba(12,6,18,0.24)] transition-shadow duration-300 ease-out">
                <Link href={`/cases/${featured.slug}`} className="absolute inset-0 z-10" aria-label={`Lees de case van ${featured.client}`} />
                <div className="grid lg:grid-cols-[1.1fr_1fr]">
                  <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                    <Image
                      src={featured.img}
                      alt={featured.imgAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 720px"
                      className="object-cover transition-transform duration-[700ms] ease-out group-hover:scale-[1.04]"
                      style={{ objectPosition: featured.imgPosition ?? "center" }}
                      priority
                    />
                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[rgba(12,6,18,0.45)] via-[rgba(12,6,18,0.1)] to-transparent" />
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-[color:var(--color-purple)] text-white px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.12em] shadow-[0_8px_20px_-8px_rgba(98,59,199,0.6)]">
                      Nieuwste case
                    </div>
                  </div>
                  <div className="p-7 sm:p-9 flex flex-col">
                    <div className="inline-flex items-center gap-2.5 mb-5">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--color-bg-muted)] overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={featured.logo} alt="" className="h-6 w-6 object-contain" />
                      </span>
                      <span className="text-[14px] font-semibold text-[color:var(--color-ink)]">{featured.client}</span>
                      <span className="text-[12px] text-[color:var(--color-ink-subtle)]">
                        {featured.sector} · {featured.location}
                      </span>
                    </div>
                    <h2 className="font-[family-name:var(--font-display)] font-bold text-[clamp(1.6rem,2.8vw,2.2rem)] leading-[1.15] tracking-[-0.01em] text-[color:var(--color-ink-strong)]">
                      {featured.headlineLead}{" "}
                      <span className="text-[color:var(--color-purple)]">{featured.headlineHighlight}</span>
                    </h2>
                    <p className="mt-4 text-[15px] leading-[1.65] text-[color:var(--color-ink-muted)]">
                      {featured.intro}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {featured.pillars.map((p) => (
                        <span key={p} className="rounded-full bg-[color:var(--color-purple-soft)] px-2.5 py-1 text-[11.5px] font-medium text-[color:var(--color-purple)]">
                          {p}
                        </span>
                      ))}
                    </div>
                    <span className="mt-7 inline-flex items-center gap-2 text-[14px] font-semibold text-[color:var(--color-ink)] group-hover:text-[color:var(--color-purple)] transition-colors">
                      Lees de hele case
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover:translate-x-0.5" strokeWidth={2.5} />
                    </span>
                  </div>
                </div>
              </article>
            )}

            {/* Rest in 2-col grid */}
            {rest.length > 0 && (
              <div className="mt-7 grid sm:grid-cols-2 gap-6 sm:gap-7">
                {rest.map((c) => (
                  <article
                    key={c.slug}
                    className="group relative flex flex-col rounded-[2rem] bg-[color:var(--color-bg-elevated)] border border-[color:var(--color-line)] overflow-hidden shadow-[0_18px_44px_-22px_rgba(12,6,18,0.16)] hover:shadow-[0_30px_64px_-24px_rgba(12,6,18,0.24)] transition-shadow duration-300 ease-out"
                  >
                    <Link href={`/cases/${c.slug}`} className="absolute inset-0 z-10" aria-label={`Lees de case van ${c.client}`} />
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={c.img}
                        alt={c.imgAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 500px"
                        className="object-cover transition-transform duration-[700ms] ease-out group-hover:scale-[1.04]"
                        style={{ objectPosition: c.imgPosition ?? "center" }}
                      />
                      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[rgba(12,6,18,0.45)] via-[rgba(12,6,18,0.1)] to-transparent" />
                      <div className="absolute bottom-4 left-4 inline-flex items-center gap-2.5 rounded-full bg-white/95 backdrop-blur-sm pl-1.5 pr-3.5 py-1.5 shadow-[0_8px_24px_-10px_rgba(12,6,18,0.4)]">
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[color:var(--color-bg-muted)] overflow-hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={c.logo} alt="" className="h-5 w-5 object-contain" />
                        </span>
                        <span className="text-[13px] font-semibold text-[color:var(--color-ink)]">{c.client}</span>
                        <span className="text-[11.5px] text-[color:var(--color-ink-subtle)]">{c.sector}</span>
                      </div>
                    </div>
                    <div className="p-6 sm:p-7 flex-1 flex flex-col">
                      <h2 className="font-[family-name:var(--font-display)] font-bold text-[19px] sm:text-[22px] leading-[1.2] tracking-[-0.01em] text-[color:var(--color-ink-strong)]">
                        {c.headlineLead} <span className="text-[color:var(--color-purple)]">{c.headlineHighlight}</span>
                      </h2>
                      <p className="mt-3 text-[14px] leading-[1.6] text-[color:var(--color-ink-muted)] line-clamp-3">
                        {c.intro}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {c.pillars.map((p) => (
                          <span key={p} className="rounded-full bg-[color:var(--color-purple-soft)] px-2.5 py-1 text-[11.5px] font-medium text-[color:var(--color-purple)]">
                            {p}
                          </span>
                        ))}
                      </div>
                      <span className="mt-6 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[color:var(--color-ink)] group-hover:text-[color:var(--color-purple)] transition-colors">
                        Lees verder
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover:translate-x-0.5" strokeWidth={2.5} />
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        <WaveDivider top={CREAM} bottom={LAVENDER} />
        <section className="bg-[#e9e4f7] py-16 sm:py-20 px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-[family-name:var(--font-display)] font-bold text-[clamp(1.8rem,4vw,2.6rem)] leading-[1.1] tracking-[-0.01em] text-[color:var(--color-ink-strong)]">
              Wil je ook zo'n verhaal?
            </h2>
            <p className="mt-4 text-[16px] leading-[1.6] text-[color:var(--color-ink-muted)] max-w-xl mx-auto">
              Plan een kennismaking, dan kijken we samen of jouw situatie past bij Forester OS en wat we voor je zouden kunnen bouwen.
            </p>
            <div className="mt-7 flex justify-center">
              <KennismakingButton variant="primary" />
            </div>
          </div>
        </section>
        <WaveDivider top={LAVENDER} bottom={DEEP} />
        <SectionCta />
      </main>
      <SiteFooter />
    </>
  );
}
