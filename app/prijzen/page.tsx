import { Navigation } from "@/components/navigation"
import { PricingSection } from "@/components/sections/pricing-section"
import { CTASection } from "@/components/sections/cta-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Prijzen | Forester OS",
  description: "Eén systeem. Drie niveaus. Kies het plan dat bij jouw bedrijf past.",
}

export default function PricingPage() {
  return (
    <div className="bg-[#0d0015] min-h-screen">
      <Navigation />
      <main className="pt-20">
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
