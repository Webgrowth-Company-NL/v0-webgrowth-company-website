import type { Metadata } from "next";
import { KennismakingTextLink } from "@/components/kennismaking-text-link";
import { PricingHero } from "@/components/pricing-hero";
import { PricingPlans } from "@/components/pricing-plans";
import { PricingComparison } from "@/components/pricing-comparison";
import { SectionCta } from "@/components/section-cta";
import { SectionFaq } from "@/components/section-faq";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WaveDivider } from "@/components/wave-divider";
import { PRICING_FAQS, PRICING_PLANS } from "@/lib/pricing";

const CREAM = "#faf6f0";
const LAVENDER = "#e9e4f7";
const WHITE = "#ffffff";
const DEEP = "#2c1d5e";

const TITLE =
  "Prijzen — Eén abonnement vanaf €399 per maand | Webgrowth Company";
const DESCRIPTION =
  "Eén platform voor je website, CRM, marketing en AI-assistent Q vanaf €399 per maand. Drie pakketten (Core, Growth, Scale), maandelijks opzegbaar en alles inclusief. Bespaar ten opzichte van losse tools.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/prijzen" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://webgrowth.company/prijzen",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const PRODUCT_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Forester OS",
  description:
    "AI-groeiplatform van Webgrowth Company met website, CRM, marketing en AI in één Nederlands abonnement.",
  brand: { "@type": "Brand", name: "Webgrowth Company" },
  url: "https://webgrowth.company/prijzen",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "EUR",
    lowPrice: Math.min(
      ...PRICING_PLANS.filter((p) => p.monthlyPrice !== null).map(
        (p) => p.monthlyPrice as number,
      ),
    ),
    highPrice: Math.max(
      ...PRICING_PLANS.filter((p) => p.monthlyPrice !== null).map(
        (p) => p.monthlyPrice as number,
      ),
    ),
    offerCount: PRICING_PLANS.length,
    offers: PRICING_PLANS.map((p) => ({
      "@type": "Offer",
      name: `${p.name}`,
      description: p.tagline,
      price: p.monthlyPrice ?? undefined,
      priceCurrency: "EUR",
      priceSpecification:
        p.monthlyPrice !== null
          ? {
              "@type": "UnitPriceSpecification",
              price: p.monthlyPrice,
              priceCurrency: "EUR",
              unitText: "maand",
            }
          : undefined,
      url: `https://webgrowth.company${p.ctaHref}`,
    })),
  },
};

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PRICING_FAQS.map((f) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PRODUCT_JSONLD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }}
      />
      <SiteHeader />
      <main className="flex-1">
        <PricingHero />
        <WaveDivider top={CREAM} bottom={LAVENDER} />
        <PricingPlans />
        <WaveDivider top={LAVENDER} bottom={WHITE} />
        <PricingComparison />
        <WaveDivider top={WHITE} bottom={LAVENDER} />
        <SectionFaq
          items={PRICING_FAQS}
          eyebrow="Vragen over de prijs"
          title="Wat klanten vaak vragen over de prijs."
          intro={
            <>
              Andere vraag? <KennismakingTextLink />, dan rekenen we het samen door.
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
