import type { Metadata } from "next";
import { KennismakingTextLink } from "@/components/kennismaking-text-link";
import { SectionCta } from "@/components/section-cta";
import { SectionFaq } from "@/components/section-faq";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WaveDivider } from "@/components/wave-divider";
import { GroeiscanEmbed } from "@/components/groeiscan-embed";
import { GroeiscanHero } from "@/components/groeiscan-hero";
import { GroeiscanValue } from "@/components/groeiscan-value";
import { GROEISCAN_FAQS } from "@/lib/groeiscan";

const CREAM = "#faf6f0";
const LAVENDER = "#e9e4f7";
const WHITE = "#ffffff";
const DEEP = "#2c1d5e";

const TITLE =
  "Gratis Groeiscan: hoeveel tijd lekt er weg in jouw bedrijf? | Webgrowth Company";
const DESCRIPTION =
  "Doe de gratis Groeiscan: tien korte vragen over hoe een order bij jou loopt, van aanvraag tot factuur. Je ziet direct wat zoeken, overtypen en nabellen je per jaar kost en waar de meeste winst zit.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/groeiscan" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://webgrowth.company/groeiscan",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const SERVICE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Groeiscan",
  serviceType: "Bedrijfsscan",
  description:
    "Gratis scan van hoe je bedrijf werkt, van aanvraag tot factuur: wat verloren tijd je per jaar kost, je grootste lekken en een eerlijk advies.",
  provider: {
    "@type": "Organization",
    name: "Webgrowth Company",
    url: "https://webgrowth.company",
  },
  areaServed: "NL",
  offers: {
    "@type": "Offer",
    price: 0,
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    url: "https://webgrowth.company/groeiscan",
  },
};

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: GROEISCAN_FAQS.map((f) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSONLD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }}
      />
      <SiteHeader />
      <main className="flex-1">
        <GroeiscanHero />
        <WaveDivider top={CREAM} bottom={LAVENDER} />
        <GroeiscanEmbed />
        <WaveDivider top={LAVENDER} bottom={WHITE} />
        <GroeiscanValue />
        <WaveDivider top={WHITE} bottom={LAVENDER} />
        <SectionFaq
          items={GROEISCAN_FAQS}
          eyebrow="Vragen over de Groeiscan"
          title="Wat klanten vooraf vaak vragen."
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
