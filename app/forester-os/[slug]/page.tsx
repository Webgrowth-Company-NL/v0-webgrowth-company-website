import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ModuleDetailPage } from "@/components/module-detail-page";
import {
  FORESTER_MODULES,
  MODULE_DETAILS,
} from "@/lib/forester-os";

const SITE_URL = "https://webgrowth.company";

export function generateStaticParams() {
  return FORESTER_MODULES.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const m = FORESTER_MODULES.find((x) => x.slug === slug);
  const detail = MODULE_DETAILS[slug];
  if (!m || !detail) return {};
  const title = `${m.label} · Forester OS-module van Webgrowth Company`;
  return {
    title,
    description: detail.metaDescription,
    alternates: { canonical: `/forester-os/${slug}` },
    openGraph: {
      title,
      description: detail.metaDescription,
      url: `${SITE_URL}/forester-os/${slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: detail.metaDescription,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const m = FORESTER_MODULES.find((x) => x.slug === slug);
  const detail = MODULE_DETAILS[slug];
  if (!m || !detail) notFound();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Forester OS — ${m.label}`,
    serviceType: m.label,
    description: detail.metaDescription,
    url: `${SITE_URL}/forester-os/${slug}`,
    provider: {
      "@type": "Organization",
      name: "Webgrowth Company",
      url: SITE_URL,
    },
    isPartOf: {
      "@type": "SoftwareApplication",
      name: "Forester OS",
      url: `${SITE_URL}/forester-os`,
    },
    areaServed: "NL",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: detail.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ModuleDetailPage slug={slug} />
    </>
  );
}
