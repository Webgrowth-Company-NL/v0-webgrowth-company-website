import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WebsiteScanFlow } from "@/components/website-scan-flow"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gratis Website APK — Wat kan beter aan jouw site? | Webgrowth",
  description:
    "Tien minuten, een persoonlijk rapport. We analyseren je website, scoren waar je staat en vertellen je wat het waard is om aan te pakken. Gratis en vrijblijvend.",
  keywords: [
    "gratis website APK",
    "website check",
    "website laten beoordelen",
    "website audit MKB",
    "wat kan beter aan mijn website",
  ],
  alternates: {
    canonical: "https://webgrowth.company/website-apk",
  },
  openGraph: {
    title: "Gratis Website APK — Wat kan beter aan jouw site?",
    description:
      "Tien minuten, een persoonlijk rapport. Geen verkoopgesprek, gewoon een eerlijke analyse.",
    type: "website",
    locale: "nl_NL",
    siteName: "Webgrowth",
    url: "https://webgrowth.company/website-apk",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gratis Website APK — Wat kan beter aan jouw site?",
    description: "Tien minuten, een persoonlijk rapport. Gratis en vrijblijvend.",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Gratis Website APK",
  serviceType: "Website audit",
  provider: {
    "@type": "Organization",
    name: "Webgrowth Company",
    url: "https://webgrowth.company",
  },
  areaServed: { "@type": "Country", name: "Nederland" },
  description:
    "Een eerlijke analyse van jouw website. Wij beoordelen waar je staat en geven concrete aanbevelingen voor wat het waard is om aan te pakken.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
  },
  url: "https://webgrowth.company/website-apk",
}

export default function WebsiteAPKPage() {
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
        <h1 className="sr-only">Gratis Website APK — eerlijke website-analyse door Webgrowth</h1>
        <div className="relative z-10">
          <WebsiteScanFlow />
        </div>
      </main>
      <Footer />
    </div>
  )
}
