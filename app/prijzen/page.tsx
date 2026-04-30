import { Navigation } from "@/components/navigation"
import { PricingSection } from "@/components/sections/pricing-section"
import { PlanComparison } from "@/components/sections/plan-comparison"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Prijzen — Website laten maken voor MKB | Webgrowth",
  description:
    "Core vanaf €399/maand, Growth vanaf €699/maand, Scale vanaf €999/maand. Altijd inclusief Forester OS, Q en maandelijkse optimalisaties. Geen verborgen kosten, minimale looptijd 1 jaar.",
  keywords: [
    "website abonnement MKB",
    "website laten maken prijzen",
    "Forester OS prijzen",
    "Pipedrive alternatief abonnement",
    "all-in website pakket",
  ],
  alternates: {
    canonical: "https://webgrowth.company/prijzen",
  },
  openGraph: {
    title: "Prijzen — Website laten maken voor MKB | Webgrowth",
    description: "Drie pakketten, één systeem. Altijd inclusief Forester OS en maandelijkse optimalisaties.",
    type: "website",
    locale: "nl_NL",
    siteName: "Webgrowth",
    url: "https://webgrowth.company/prijzen",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prijzen — Website laten maken voor MKB | Webgrowth",
    description: "Drie pakketten, één systeem. Vanaf €399 per maand.",
  },
}

const PLAN_DATA = [
  {
    name: "Core",
    description:
      "Een uitzonderlijk goede website plus Forester OS dashboard, CRM en maandelijkse optimalisaties.",
    price: "399",
  },
  {
    name: "Growth",
    description:
      "Alles van Core, plus marketing automations, koppelingen met externe tools en automatische lead-opvolging.",
    price: "699",
  },
  {
    name: "Scale",
    description:
      "Custom platform of app op Forester OS. Voor wie zijn hele losse stack wil vervangen door één systeem.",
    price: "999",
  },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Forester OS website-abonnement",
  serviceType: "Website-as-a-Service",
  provider: {
    "@type": "Organization",
    "@id": "https://webgrowth.company/#organization",
    name: "Webgrowth Company",
    url: "https://webgrowth.company",
  },
  areaServed: { "@type": "Country", name: "Nederland" },
  description:
    "Drie abonnementen voor een website plus Forester OS dashboard, CRM en maandelijkse optimalisaties: Core, Growth en Scale.",
  url: "https://webgrowth.company/prijzen",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Forester OS Pakketten",
    itemListElement: PLAN_DATA.map((plan) => ({
      "@type": "Offer",
      name: plan.name,
      description: plan.description,
      price: plan.price,
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: plan.price,
        priceCurrency: "EUR",
        unitCode: "MON",
        billingIncrement: 1,
      },
      availability: "https://schema.org/InStock",
      url: `https://webgrowth.company/prijzen#${plan.name.toLowerCase()}`,
    })),
  },
}

export default function PricingPage() {
  return (
    <div className="bg-[#0d0818] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <main className="pt-20">
        <PricingSection />
        <PlanComparison />
      </main>
      <Footer />
    </div>
  )
}
