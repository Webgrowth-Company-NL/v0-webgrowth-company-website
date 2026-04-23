import { Navigation } from "@/components/navigation"
import { HubspotAlternatiefSection } from "@/components/sections/hubspot-alternatief-section"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "HubSpot alternatief Nederland — Alles inclusief vanaf €399/maand | Webgrowth",
  description:
    "Je betaalt nu voor negen leveranciers. Wij leveren het als één abonnement. Website, CRM, marketing automation, hosting, onderhoud en AI in één platform. Reken uit wat je bespaart.",
  alternates: {
    canonical: "https://webgrowth.company/hubspot-alternatief",
  },
  openGraph: {
    title: "HubSpot alternatief Nederland — Forester OS",
    description:
      "Één platform in plaats van negen leveranciers. Website, CRM, marketing en AI vanaf €399 per maand.",
    type: "website",
    locale: "nl_NL",
    siteName: "Webgrowth",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Forester OS, HubSpot alternatief voor Nederlandse kantoren",
  serviceType: "All-in-one groeiplatform met website, CRM, marketing automation en AI",
  description:
    "Eén abonnement dat website, CRM, marketing automation, hosting, onderhoud, content en AI vervangt. Nederlandstalig, vanaf €399 per maand, alles inbegrepen.",
  areaServed: {
    "@type": "Country",
    name: "Nederland",
  },
  provider: {
    "@type": "Organization",
    name: "Webgrowth Company",
    url: "https://webgrowth.company",
    telephone: "+31762045010",
    email: "martijn@webgrowth.company",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ceresstraat 13",
      postalCode: "4811 CA",
      addressLocality: "Breda",
      addressCountry: "NL",
    },
  },
  offers: [
    {
      "@type": "Offer",
      name: "Core",
      description: "Website, CRM en dashboard in één, voor kleine kantoren en ZZP.",
      price: "399",
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "399",
        priceCurrency: "EUR",
        unitCode: "MON",
        billingIncrement: 1,
      },
      url: "https://webgrowth.company/prijzen",
    },
    {
      "@type": "Offer",
      name: "Growth",
      description:
        "Plus marketing automation, lead-opvolging en e-mailcampagnes voor actieve kantoren.",
      price: "699",
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "699",
        priceCurrency: "EUR",
        unitCode: "MON",
        billingIncrement: 1,
      },
      url: "https://webgrowth.company/prijzen",
    },
    {
      "@type": "Offer",
      name: "Scale",
      description: "Plus custom cliënt-portaal of app, voor grotere kantoren.",
      price: "999",
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "999",
        priceCurrency: "EUR",
        unitCode: "MON",
        billingIncrement: 1,
      },
      url: "https://webgrowth.company/prijzen",
    },
  ],
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Waarom is Forester OS een HubSpot alternatief?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Forester OS combineert website, CRM, marketing automation, hosting en AI in één Nederlandstalig platform voor een vast maandbedrag. Waar HubSpot per gebruiker factureert en aanvullende tools nodig heeft voor website en hosting, dekt Forester OS de volledige stack vanaf €399 per maand.",
      },
    },
    {
      "@type": "Question",
      name: "Hoeveel bespaar ik met Forester OS versus HubSpot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Een kantoor van 5 medewerkers met HubSpot Marketing Professional plus website, hosting, onderhoud en content geeft jaarlijks ongeveer €27.420 uit. Met Forester OS Growth kost dezelfde stack €8.388 per jaar. Dat is 69% besparing.",
      },
    },
    {
      "@type": "Question",
      name: "Voor wie is Forester OS geschikt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Forester OS is gebouwd voor Nederlandse kantoren met 1 tot 50 medewerkers, met focus op advocaten, notarissen, accountants, fiscalisten en zakelijke dienstverleners. Drie pakketten (Core, Growth, Scale) dekken ZZP tot grotere kantoren met een eigen cliënt-portaal.",
      },
    },
    {
      "@type": "Question",
      name: "Zit onderhoud, hosting en security in het abonnement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Hosting, SSL, backups, updates, security monitoring, performance en AVG-compliance zitten standaard in elk Forester OS abonnement. Je betaalt geen losse facturen voor deze componenten en hoeft geen WordPress plugins te onderhouden.",
      },
    },
  ],
}

export default function HubspotAlternatiefPage() {
  return (
    <div className="bg-[#0d0818] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navigation />
      <main className="pt-20">
        <HubspotAlternatiefSection />
      </main>
      <Footer />
    </div>
  )
}
