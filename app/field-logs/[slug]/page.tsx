import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FIELD_LOGS, fieldLogBySlug } from "@/lib/field-logs";
import { KennismakingButton } from "@/components/kennismaking-button";
import { KennismakingTextLink } from "@/components/kennismaking-text-link";
import { linkifyText } from "@/lib/internal-links";

export function generateStaticParams() {
  return FIELD_LOGS.map((l) => ({ slug: l.slug }));
}

function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  return text.slice(0, max - 1).trimEnd() + "…";
}

function wordCount(l: ReturnType<typeof fieldLogBySlug>): number {
  if (!l?.body) return 0;
  const parts: string[] = [];
  l.body.intro.forEach((p) => parts.push(p));
  l.body.sections.forEach((s) => {
    if (s.title) parts.push(s.title);
    s.paragraphs.forEach((p) => parts.push(p));
  });
  l.body.outro.forEach((p) => parts.push(p));
  return parts.join(" ").split(/\s+/).filter(Boolean).length;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const l = fieldLogBySlug(slug);
  if (!l) return { title: "Field log niet gevonden | Webgrowth" };

  const seoTitle = `${l.metaTitle ?? l.title} | Webgrowth`;
  const seoDescription = truncate(l.metaDescription ?? l.excerpt, 158);
  const url = `https://webgrowth.company/field-logs/${slug}`;
  const ogUrl = `${url}/opengraph-image`;

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: l.keywords,
    alternates: { canonical: `/field-logs/${slug}` },
    authors: [{ name: "Martijn Duin", url: "https://webgrowth.company/over" }],
    creator: "Martijn Duin",
    publisher: "Webgrowth Company",
    category: l.tag,
    openGraph: {
      type: "article",
      locale: "nl_NL",
      siteName: "Webgrowth Company",
      url,
      title: l.metaTitle ?? l.title,
      description: seoDescription,
      publishedTime: l.date,
      modifiedTime: l.dateModified ?? l.date,
      authors: ["Martijn Duin"],
      section: l.tag,
      tags: l.keywords,
      images: [{ url: ogUrl, width: 1200, height: 630, alt: l.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: l.metaTitle ?? l.title,
      description: seoDescription,
      images: [ogUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const l = fieldLogBySlug(slug);
  if (!l) notFound();

  const url = `https://webgrowth.company/field-logs/${l.slug}`;
  const ogUrl = `${url}/opengraph-image`;
  const wc = wordCount(l);
  const seoDescription = truncate(l.metaDescription ?? l.excerpt, 158);

  const blogPostingLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: l.metaTitle ?? l.title,
    alternativeHeadline: l.title,
    name: l.title,
    description: seoDescription,
    abstract: l.excerpt,
    image: { "@type": "ImageObject", url: ogUrl, width: 1200, height: 630 },
    datePublished: l.date,
    dateModified: l.dateModified ?? l.date,
    inLanguage: "nl-NL",
    isAccessibleForFree: true,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    articleSection: l.tag,
    keywords: l.keywords?.join(", "),
    wordCount: wc || undefined,
    timeRequired: l.readTime ? `PT${parseInt(l.readTime, 10) || 5}M` : undefined,
    author: {
      "@type": "Person",
      "@id": "https://webgrowth.company/over#martijn",
      name: "Martijn Duin",
      url: "https://webgrowth.company/over",
      jobTitle: "Founder",
      worksFor: { "@type": "Organization", name: "Webgrowth Company", url: "https://webgrowth.company" },
      sameAs: ["https://www.linkedin.com/in/martijnduin/"],
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://webgrowth.company#organization",
      name: "Webgrowth Company",
      url: "https://webgrowth.company",
      logo: {
        "@type": "ImageObject",
        url: "https://webgrowth.company/logo.png",
        width: 512,
        height: 512,
      },
    },
    about: l.about?.map((a) => ({
      "@type": "Thing",
      name: a.name,
      ...(a.sameAs ? { sameAs: a.sameAs } : {}),
    })),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "[data-speakable]"],
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://webgrowth.company" },
      { "@type": "ListItem", position: 2, name: "Field Logs", item: "https://webgrowth.company/field-logs" },
      { "@type": "ListItem", position: 3, name: l.title, item: url },
    ],
  };

  const jsonLd = [blogPostingLd, breadcrumbLd];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader />
      <main className="flex-1">
        <article className="relative px-5 sm:px-8 pt-32 sm:pt-40 pb-16 sm:pb-20 bg-[#faf6f0]">
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
            style={{
              backgroundImage:
                "radial-gradient(rgba(98,59,199,0.06) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />

          <div className="relative mx-auto max-w-2xl">
            <Link href="/field-logs" className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[color:var(--color-ink-muted)] hover:text-[color:var(--color-purple)] transition-colors mb-7">
              <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2.5} />
              Alle field logs
            </Link>
            <div className="flex flex-wrap items-center gap-2.5 text-[12px] mb-4">
              <span className="rounded-full bg-[color:var(--color-purple-soft)] px-2.5 py-1 font-semibold text-[color:var(--color-purple)]">{l.tag}</span>
              <span className="text-[color:var(--color-ink-subtle)]">{l.dateLabel}</span>
              <span className="text-[color:var(--color-ink-faint)]">·</span>
              <span className="text-[color:var(--color-ink-subtle)]">{l.readTime}</span>
            </div>
            <h1 className="font-[family-name:var(--font-display)] font-bold text-[clamp(1.9rem,4.4vw,3.2rem)] leading-[1.1] tracking-[-0.02em] text-[color:var(--color-ink-strong)]">{l.title}</h1>
            <p data-speakable className="mt-5 text-[18px] sm:text-[19px] leading-[1.6] text-[color:var(--color-ink-muted)]">{l.excerpt}</p>

            {l.body ? (
              <div
                className="mt-12 relative rounded-[1.5rem] bg-white border border-[color:var(--color-line)] pl-10 pr-6 sm:pl-16 sm:pr-10 pt-8 pb-8 shadow-[0_28px_64px_-30px_rgba(98,59,199,0.18)] overflow-hidden"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to bottom, transparent 0, transparent 31px, rgba(98,59,199,0.18) 31px, rgba(98,59,199,0.18) 32px)",
                  backgroundSize: "100% 32px",
                  backgroundPosition: "0 0",
                }}
              >
                {/* Rode dagboek-marge links, zoals op echt schoolschrift */}
                <span
                  aria-hidden
                  className="absolute inset-y-0 left-6 sm:left-10 w-px bg-[#d94a64]/55"
                />
                {/* Twee 'gaatjes' bovenaan voor het ringband-effect */}
                <span
                  aria-hidden
                  className="absolute top-7 left-2 sm:left-4 h-2 w-2 rounded-full bg-[color:var(--color-bg)] ring-1 ring-[color:var(--color-line)]"
                />
                <span
                  aria-hidden
                  className="absolute bottom-7 left-2 sm:left-4 h-2 w-2 rounded-full bg-[color:var(--color-bg)] ring-1 ring-[color:var(--color-line)]"
                />

                {/* Alles in deze container houdt zich aan een 32px baseline-grid: line-height 32px, marges in veelvouden van 32px. */}
                <div
                  className="relative text-[15.5px] text-[color:var(--color-ink)]"
                  style={{ lineHeight: "32px" }}
                >
                  {l.body.greeting && (
                    <p
                      className="font-[family-name:var(--font-display)] italic text-[color:var(--color-purple)]"
                      style={{ marginBottom: "32px" }}
                    >
                      {l.body.greeting}
                    </p>
                  )}

                  {l.body.intro.map((p, i) => (
                    <p key={`intro-${i}`} style={{ marginBottom: "32px" }}>
                      {linkifyText(p)}
                    </p>
                  ))}

                  {l.body.sections.map((s, i) => (
                    <section key={`sec-${i}`}>
                      <div
                        className="flex items-center gap-3 text-[color:var(--color-purple)]/30"
                        style={{ marginBottom: "32px", height: "32px" }}
                      >
                        <span className="h-px flex-1 bg-[color:var(--color-purple)]/15" />
                        <span className="text-[13px] tracking-[0.4em] font-semibold">∗ ∗ ∗</span>
                        <span className="h-px flex-1 bg-[color:var(--color-purple)]/15" />
                      </div>
                      {s.title && (
                        <h2
                          className="font-[family-name:var(--font-display)] italic font-semibold text-[color:var(--color-ink-strong)] text-[15.5px]"
                          style={{ marginBottom: "32px", lineHeight: "32px" }}
                        >
                          {s.title}
                        </h2>
                      )}
                      {s.paragraphs.map((p, j) => (
                        <p key={`sec-${i}-p-${j}`} style={{ marginBottom: "32px" }}>
                          {linkifyText(p)}
                        </p>
                      ))}
                    </section>
                  ))}

                  {l.body.outro.length > 0 && (
                    <div>
                      <div
                        className="flex items-center gap-3 text-[color:var(--color-purple)]/30"
                        style={{ marginBottom: "32px", height: "32px" }}
                      >
                        <span className="h-px flex-1 bg-[color:var(--color-purple)]/15" />
                        <span className="text-[13px] tracking-[0.4em] font-semibold">∗ ∗ ∗</span>
                        <span className="h-px flex-1 bg-[color:var(--color-purple)]/15" />
                      </div>
                      {l.body.outro.map((p, i) => (
                        <p key={`outro-${i}`} style={{ marginBottom: "32px" }}>
                          {linkifyText(p)}
                        </p>
                      ))}
                    </div>
                  )}

                  {l.body.signature && (
                    <p className="font-[family-name:var(--font-display)] italic text-[color:var(--color-purple)]">
                      {l.body.signature}
                    </p>
                  )}
                </div>
              </div>
            ) : (
              <div className="mt-10 rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-bg-muted)]/40 p-7 sm:p-9 text-center">
                <p className="text-[14.5px] leading-relaxed text-[color:var(--color-ink-muted)]">
                  Het volledige artikel verschijnt binnenkort. Wil je hier niet op wachten? <KennismakingTextLink>Plan een kennismaking</KennismakingTextLink> en we vertellen je er alles over.
                </p>
              </div>
            )}
          </div>
        </article>

        <section className="px-5 sm:px-8 pb-28 sm:pb-36">
          <div className="mx-auto max-w-3xl rounded-[2rem] bg-gradient-to-br from-[#3f2a8f] via-[#5e3bc0] to-[#7c3aed] p-8 sm:p-10 text-center text-white shadow-[0_30px_64px_-22px_rgba(98,59,199,0.5)]">
            <h2 className="font-[family-name:var(--font-display)] font-bold text-[clamp(1.5rem,3.2vw,2.2rem)] leading-[1.12]">Zelf groeien met Forester OS?</h2>
            <p className="mt-3 text-[15px] text-white/75 max-w-md mx-auto">Doe de gratis website APK of plan een kennismaking. We denken graag mee.</p>
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
