import type { Metadata } from "next";
import { SectionCta } from "@/components/section-cta";
import { SectionFaq } from "@/components/section-faq";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WaveDivider } from "@/components/wave-divider";
import { WebsiteApkEmbed } from "@/components/website-apk-embed";
import { WebsiteApkHero } from "@/components/website-apk-hero";
import { WebsiteApkValue } from "@/components/website-apk-value";
import { APK_FAQS } from "@/lib/website-apk";

const CREAM = "#faf6f0";
const LAVENDER = "#f2effb";
const WHITE = "#ffffff";
const DEEP = "#2c1d5e";

const TITLE =
  "Gratis Website APK — hoe scoort jouw site? | Webgrowth Company";
const DESCRIPTION =
  "Doe de gratis Website APK: vul je URL in, beantwoord zeven korte vragen en ontvang direct een AI-rapport met branche, bezoekersinschatting, lead-definitie en concrete verbeterpunten. Geen account, geen verkoopgesprek.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/website-apk" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://webgrowth.company/website-apk",
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
  name: "Website APK",
  serviceType: "Website-audit",
  description:
    "Gratis AI-analyse van je website: branche, bezoekersinschatting, lead-definitie, technieksignalen en kostenanalyse, met concrete verbeterpunten.",
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
    url: "https://webgrowth.company/website-apk",
  },
};

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: APK_FAQS.map((f) => ({
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
        <WebsiteApkHero />
        <WaveDivider top={CREAM} bottom={LAVENDER} />
        <WebsiteApkEmbed />
        <WaveDivider top={LAVENDER} bottom={WHITE} />
        <WebsiteApkValue />
        <WaveDivider top={WHITE} bottom={LAVENDER} />
        <SectionFaq
          items={APK_FAQS}
          eyebrow="Vragen over de APK"
          title="Wat klanten vooraf vaak vragen."
          intro={
            <>
              Andere vraag?{" "}
              <a
                href="/contact"
                className="font-semibold text-[color:var(--color-purple)] hover:text-[color:var(--color-purple-hover)] transition-colors underline underline-offset-2"
              >
                Boek een kennismaking
              </a>
              , dan rekenen we het samen door.
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
