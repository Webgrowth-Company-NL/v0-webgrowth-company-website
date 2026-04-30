import { Navigation } from "@/components/navigation"
import { SuccessStoriesSection } from "@/components/sections/success-stories-section"
import { ClientsPortfolio } from "@/components/sections/clients-portfolio"
import { ProofSection } from "@/components/sections/proof-section"
import { CTASection } from "@/components/sections/cta-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Succesverhalen — Klantcases en wat ze opleveren | Webgrowth",
  description: "Wat wij bouwen en wat het oplevert. Concrete klantcases over reserveringssystemen, slimme leadtools en MKB-websites die elke dag werken op Forester OS.",
  alternates: {
    canonical: "https://webgrowth.company/succesverhalen",
  },
}

export default function SuccessStoriesPage() {
  return (
    <div className="bg-[#0d0818] min-h-screen">
      <Navigation />
      <main>
        <SuccessStoriesSection />
        <ClientsPortfolio />
        <ProofSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
