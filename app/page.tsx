import { Hero } from "@/components/hero";
import { SectionCases } from "@/components/section-cases";
import { SectionCta } from "@/components/section-cta";
import { SectionFaq } from "@/components/section-faq";
import { SectionFieldLogs } from "@/components/section-field-logs";
import { SectionProof } from "@/components/section-proof";
import { SectionShift } from "@/components/section-shift";
import { SectionVideo } from "@/components/section-video";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SolutionSelector } from "@/components/solution-selector";
import { WaveDivider } from "@/components/wave-divider";
import { FAQS } from "@/lib/faq";

const CREAM = "#faf6f0";
const LAVENDER = "#e9e4f7";
const WHITE = "#ffffff";
const DEEP = "#2c1d5e";
const HERO_PURPLE = "#231653"; // keep in sync with components/hero.tsx

const SITE_URL = "https://webgrowth.company";

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Webgrowth Company",
  legalName: "Webgrowth Company",
  url: SITE_URL,
  logo: `${SITE_URL}/logo-bolt.png`,
  description:
    "AI-groeiplatform met website, CRM, marketing en AI in één abonnement, in plaats van negen losse leveranciers.",
  foundingDate: "2016",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ceresstraat 13",
    addressLocality: "Breda",
    addressCountry: "NL",
  },
  vatID: "NL001363277B13",
  taxID: "64809536",
  sameAs: ["https://www.linkedin.com/company/webgrowth-company"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "9.4",
    bestRating: "10",
    ratingCount: "227",
  },
};

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const WEBSITE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Webgrowth Company",
  url: SITE_URL,
  inLanguage: "nl-NL",
  publisher: { "@type": "Organization", name: "Webgrowth Company" },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_JSONLD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }}
      />
      <SiteHeader dark />
      <main className="flex-1">
        <Hero />
        <WaveDivider top={HERO_PURPLE} bottom={LAVENDER} />
        <SolutionSelector />
        <WaveDivider top={LAVENDER} bottom={WHITE} />
        <SectionShift />
        <WaveDivider top={WHITE} bottom={DEEP} />
        <SectionProof />
        <WaveDivider top={DEEP} bottom={CREAM} />
        <SectionCases />
        <WaveDivider top={CREAM} bottom={WHITE} />
        <SectionVideo />
        <WaveDivider top={WHITE} bottom={CREAM} />
        <SectionFieldLogs />
        <WaveDivider top={CREAM} bottom={LAVENDER} />
        <SectionFaq />
        <WaveDivider top={LAVENDER} bottom={DEEP} />
        <SectionCta />
      </main>
      <SiteFooter />
    </>
  );
}
