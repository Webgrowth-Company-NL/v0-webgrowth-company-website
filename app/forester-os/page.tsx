import type { Metadata } from "next";
import { ForesterOsFlow } from "@/components/forester-os-flow";
import { ForesterOsHero } from "@/components/forester-os-hero";
import { ForesterOsIncluded } from "@/components/forester-os-included";
import { ForesterOsModules } from "@/components/forester-os-modules";
import { SectionCta } from "@/components/section-cta";
import { SectionFaq } from "@/components/section-faq";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WaveDivider } from "@/components/wave-divider";
import { FORESTER_FAQS } from "@/lib/forester-os";

const CREAM = "#faf6f0";
const LAVENDER = "#e9e4f7";
const WHITE = "#ffffff";
const DEEP = "#2c1d5e";

const TITLE =
  "Forester OS — het AI-groeiplatform van Webgrowth Company";
const DESCRIPTION =
  "Acht modules in één platform: website, CRM, lead engines, SEO, AI-content met Q, content publisher, nieuwsbrieven en sales engine. Eén login, één database, één Nederlandse partij die het beheert.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/forester-os" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://webgrowth.company/forester-os",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const SOFTWARE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Forester OS",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Growth platform",
  operatingSystem: "Web",
  url: "https://webgrowth.company/forester-os",
  description:
    "AI-groeiplatform met website, CRM, marketing en AI in één Nederlands abonnement.",
  publisher: {
    "@type": "Organization",
    name: "Webgrowth Company",
    url: "https://webgrowth.company",
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "EUR",
    lowPrice: 399,
    highPrice: 999,
    offerCount: 3,
    url: "https://webgrowth.company/prijzen",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    ratingCount: "227",
  },
};

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FORESTER_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SOFTWARE_JSONLD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }}
      />
      <SiteHeader />
      <main className="flex-1">
        <ForesterOsHero />
        <WaveDivider top={CREAM} bottom={LAVENDER} />
        <ForesterOsModules />
        <WaveDivider top={LAVENDER} bottom={DEEP} />
        <ForesterOsFlow />
        <WaveDivider top={DEEP} bottom={CREAM} />
        <ForesterOsIncluded />
        <WaveDivider top={CREAM} bottom={LAVENDER} />
        <SectionFaq
          items={FORESTER_FAQS}
          eyebrow="Vragen over het platform"
          title="Wat klanten over Forester OS vragen."
          intro={
            <>
              Andere vraag?{" "}
              <a
                href="/contact"
                className="font-semibold text-[color:var(--color-purple)] hover:text-[color:var(--color-purple-hover)] transition-colors underline underline-offset-2"
              >
                Boek een kennismaking
              </a>
              , dan lopen we het samen door.
            </>
          }
        />
        <WaveDivider top={LAVENDER} bottom={DEEP} />
        <SectionCta />
      </main>
      <SiteFooter />
    </>
  );
}
