import { Navigation } from "@/components/navigation"
import { HowItWorksSection } from "@/components/sections/how-it-works-section"
import { CTASection } from "@/components/sections/cta-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Hoe het werkt | Forester OS",
  description: "Van nul naar groei in vier stappen. Ontdek hoe Q je website blijft optimaliseren.",
}

export default function HowItWorksPage() {
  return (
    <div className="bg-[#0d0015] min-h-screen">
      <Navigation />
      <main className="pt-20">
        <HowItWorksSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
