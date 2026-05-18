import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CasePage } from "@/components/case-page";
import { CASE_STUDIES, caseBySlug } from "@/lib/cases";

const SITE_URL = "https://webgrowth.company";

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = caseBySlug(slug);
  if (!c) return {};
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: { canonical: `/cases/${slug}` },
    openGraph: {
      title: c.metaTitle,
      description: c.metaDescription,
      url: `${SITE_URL}/cases/${slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: c.metaTitle,
      description: c.metaDescription,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = caseBySlug(slug);
  if (!c) notFound();

  /* JSON-LD Article: helpt Google de case begrijpen als verhaalvorm,
     met de hero-afbeelding, de klantnaam als 'about' en de gemapte
     pillars als 'keywords'. */
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${c.headlineLead} ${c.headlineHighlight}`,
    description: c.metaDescription,
    image: `${SITE_URL}${c.img}`,
    url: `${SITE_URL}/cases/${slug}`,
    about: {
      "@type": "Organization",
      name: c.client,
      url: c.liveUrl,
    },
    keywords: c.pillars.join(", "),
    author: { "@type": "Organization", name: "Webgrowth Company" },
    publisher: {
      "@type": "Organization",
      name: "Webgrowth Company",
      url: SITE_URL,
    },
    mainEntityOfPage: `${SITE_URL}/cases/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <CasePage study={c} />
    </>
  );
}
