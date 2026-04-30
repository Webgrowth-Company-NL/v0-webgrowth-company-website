import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WebsiteScanFlow } from "@/components/website-scan-flow"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Momentum Scan — Waar staat jouw website? | Webgrowth",
  description:
    "Een korte scan van jouw site. Profiel, kansen en een eerste indicatie van wat je kunt winnen. Gratis, vrijblijvend, in tien minuten.",
  keywords: [
    "gratis website scan",
    "Momentum Scan",
    "website analyse MKB",
    "website beoordeling",
    "wat kan beter aan mijn website",
  ],
  alternates: {
    canonical: "https://webgrowth.company/momentum-scan",
  },
  openGraph: {
    title: "Momentum Scan — Waar staat jouw website?",
    description:
      "Een korte scan met persoonlijk profiel als uitkomst. Gratis, vrijblijvend, in tien minuten.",
    type: "website",
    locale: "nl_NL",
    siteName: "Webgrowth",
    url: "https://webgrowth.company/momentum-scan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Momentum Scan — Waar staat jouw website?",
    description: "Een korte scan met persoonlijk profiel. Gratis en vrijblijvend.",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Momentum Scan",
  serviceType: "Website assessment",
  provider: {
    "@type": "Organization",
    name: "Webgrowth Company",
    url: "https://webgrowth.company",
  },
  areaServed: { "@type": "Country", name: "Nederland" },
  description:
    "Een korte scan van jouw website. In tien minuten ontvang je een persoonlijk profiel met sterke punten, kansen en een eerste indicatie van wat je kunt winnen.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
  },
  url: "https://webgrowth.company/momentum-scan",
}

export default function MomentumScanPage() {
  return (
    <div className="bg-[#0d0818] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <main className="relative pt-32 pb-32 px-5 sm:px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-[#623bc7]/10 blur-[180px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#ff0096]/8 blur-[140px] pointer-events-none" />
        <h1 className="sr-only">Momentum Scan — gratis website-analyse door Webgrowth</h1>
        <div className="relative z-10">
          <WebsiteScanFlow />
        </div>
      </main>
      <Footer />
    </div>
  )
}
