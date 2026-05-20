import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FieldLogPostit } from "@/components/field-log-postit";
import { FIELD_LOGS } from "@/lib/field-logs";

export const metadata: Metadata = {
  title: "Field Logs: bevindingen uit de praktijk over websites, leads & AI | Webgrowth",
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
            className="absolute -top-32 right-0 h-[480px] w-[480px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(closest-side, rgba(98,59,199,0.14), rgba(98,59,199,0) 70%)" }}
          />
          <div className="relative mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-14 items-center">
              <div>
                <span className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-bg-elevated)] text-[12.5px] font-medium text-[color:var(--color-ink-muted)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-purple)]" />
                  Field Logs
                </span>
                <h1 className="mt-6 font-[family-name:var(--font-display)] font-bold text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.06] tracking-[-0.02em] text-[color:var(--color-ink-strong)]">
                  Bevindingen uit de praktijk.
                </h1>
                <p className="mt-5 text-[17px] sm:text-[18px] leading-[1.6] text-[color:var(--color-ink-muted)] max-w-2xl">
                  Geen theorie van een bureau, maar wat we deze week écht hebben gebouwd, waar we tegenaan liepen en hoe we het oplosten. Voor websites, vindbaarheid, leads, sales en AI.
                </p>
              </div>
              <div
                aria-hidden
                className="hidden lg:flex items-center justify-center"
              >
                <Image
                  src="/illustrations/digital-writing.svg"
                  alt=""
                  width={520}
                  height={520}
                  className="w-full max-w-[360px] h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 sm:px-8 pb-28 sm:pb-36">
          <div className="mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-7 sm:gap-9">
              {FIELD_LOGS.map((log, i) => (
                <FieldLogPostit key={log.slug} log={log} index={i} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
