import { Navigation } from "@/components/navigation"
import { PricingSection } from "@/components/sections/pricing-section"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Prijzen — Website laten maken voor MKB | Webgrowth",
  description: "Core vanaf €399/maand, Growth vanaf €699/maand. Altijd inclusief Forester OS, Q en maandelijkse optimalisaties. Geen verborgen kosten, minimale looptijd 1 jaar.",
  alternates: {
    canonical: "https://webgrowth.company/prijzen",
  },
  openGraph: {
    title: "Prijzen — Website laten maken voor MKB | Webgrowth",
    description: "Drie pakketten, één systeem. Altijd inclusief Forester OS en maandelijkse optimalisaties.",
    type: "website",
    locale: "nl_NL",
    siteName: "Webgrowth",
  },
}

export default function PricingPage() {
  return (
    <div className="bg-[#0d0818] min-h-screen">
      <Navigation />
      <main className="pt-20">
        <PricingSection />
      </main>
      <Footer />
    </div>
  )
}
