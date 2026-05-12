import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FIELD_LOGS } from "@/lib/field-logs";

export const metadata: Metadata = {
  title: "Field Logs — bevindingen uit de praktijk over websites, leads & AI | Webgrowth",
  description:
    "De Webgrowth-blog: wat we bouwden, wat we leerden en wat het opleverde. Praktische inzichten over websites, vindbaarheid, leads en AI voor groeiende organisaties.",
  alternates: { canonical: "/field-logs" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Webgrowth Field Logs",
  description: "Bevindingen uit de praktijk over websites, vindbaarheid, leads en AI.",
  url: "https://webgrowth.company/field-logs",
  publisher: { "@type": "Organization", name: "Webgrowth Company", url: "https://webgrowth.company" },
  blogPost: FIELD_LOGS.map((l) => ({
    "@type": "BlogPosting",
    headline: l.title,
    description: l.excerpt,
    datePublished: l.date,
    url: `https://webgrowth.company/field-logs/${l.slug}`,
  })),
};

export default function FieldLogsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader />
      <main className="flex-1">
        <section className="relative px-5 sm:px-8 pt-32 sm:pt-40 pb-12 sm:pb-16">
          <div
            aria-hidden
            className="absolute -top-32 right-0 h-[480px] w-[480px] rounded-full"
            style={{ background: "radial-gradient(closest-side, rgba(98,59,199,0.14), rgba(98,59,199,0) 70%)" }}
          />
          <div className="relative mx-auto max-w-4xl">
            <span className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-bg-elevated)] text-[12.5px] font-medium text-[color:var(--color-ink-muted)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-purple)]" />
              Field Logs
            </span>
            <h1 className="mt-6 font-[family-name:var(--font-display)] font-bold text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.06] tracking-[-0.02em] text-[color:var(--color-ink-strong)]">
              Bevindingen uit de praktijk.
            </h1>
            <p className="mt-5 text-[17px] sm:text-[18px] leading-[1.6] text-[color:var(--color-ink-muted)] max-w-2xl">
              Geen theorie van een bureau. Wat we bouwden, wat we leerden en wat het opleverde, voor websites, vindbaarheid, leads en AI.
            </p>
          </div>
        </section>

        <section className="px-5 sm:px-8 pb-28 sm:pb-36">
          <div className="mx-auto max-w-4xl flex flex-col gap-4">
            {FIELD_LOGS.map((log) => (
              <Link
                key={log.slug}
                href={`/field-logs/${log.slug}`}
                className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 rounded-2xl bg-[color:var(--color-bg-elevated)] border border-[color:var(--color-line)] p-5 sm:p-6 hover:border-[color:var(--color-line-strong)] hover:shadow-[0_18px_44px_-22px_rgba(12,6,18,0.16)] transition-[box-shadow,border-color] duration-300 ease-out"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2.5 text-[11.5px]">
                    <span className="rounded-full bg-[color:var(--color-purple-soft)] px-2.5 py-1 font-semibold text-[color:var(--color-purple)]">{log.tag}</span>
                    <span className="text-[color:var(--color-ink-subtle)]">{log.dateLabel}</span>
                    <span className="text-[color:var(--color-ink-faint)]">·</span>
                    <span className="text-[color:var(--color-ink-subtle)]">{log.readTime}</span>
                  </div>
                  <h2 className="mt-2.5 font-[family-name:var(--font-display)] font-bold text-[18px] sm:text-[20px] leading-[1.25] tracking-[-0.005em] text-[color:var(--color-ink-strong)] group-hover:text-[color:var(--color-purple)] transition-colors">
                    {log.title}
                  </h2>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-[color:var(--color-ink-muted)]">{log.excerpt}</p>
                </div>
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-bg-muted)] text-[color:var(--color-ink-subtle)] group-hover:bg-[color:var(--color-purple)] group-hover:text-white transition-colors">
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
