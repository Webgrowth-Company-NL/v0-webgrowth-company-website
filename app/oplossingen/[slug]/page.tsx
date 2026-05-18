import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OplossingDetailPage } from "@/components/oplossing-detail-page";
import { PlaceholderPage } from "@/components/placeholder-page";
import { OPLOSSING_PAGES, pageBySlug } from "@/lib/pages";
import { OPLOSSING_DETAILS } from "@/lib/oplossingen";

const SITE_URL = "https://webgrowth.company";

export function generateStaticParams() {
  return OPLOSSING_PAGES.map((p) => ({ slug: p.slug! }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = pageBySlug(OPLOSSING_PAGES, slug);
  if (!page) return {};
  const detail = OPLOSSING_DETAILS[slug];
  const description = detail?.metaDescription ?? page.metaDescription;
  return {
    title: page.metaTitle,
    description,
    alternates: { canonical: page.path },
    openGraph: {
      title: page.metaTitle,
      description,
      url: `${SITE_URL}${page.path}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pageBySlug(OPLOSSING_PAGES, slug);
  if (!page) notFound();

  const detail = OPLOSSING_DETAILS[slug];

  /* JSON-LD Service-schema voor oplossingspagina's met detail-data,
     zodat Google snapt dat dit een dienst-aanbod is binnen Forester OS. */
  const serviceJsonLd = detail
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        name: page.h1,
        description: detail.metaDescription ?? page.metaDescription,
        url: `${SITE_URL}${page.path}`,
        serviceType: "Webgrowth Company-oplossing",
        provider: {
          "@type": "Organization",
          name: "Webgrowth Company",
          url: SITE_URL,
        },
        areaServed: "NL",
        isPartOf: {
          "@type": "SoftwareApplication",
          name: "Forester OS",
          url: `${SITE_URL}/forester-os`,
        },
      }
    : null;

  // Volledig uitgewerkte oplossingspagina als er detail-data is, anders placeholder
  if (detail) {
    return (
      <>
        {serviceJsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
          />
        )}
        <OplossingDetailPage slug={slug} />
      </>
    );
  }
  return <PlaceholderPage page={page} />;
}
