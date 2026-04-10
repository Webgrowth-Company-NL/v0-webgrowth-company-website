import { Navigation } from "@/components/navigation"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { ProofSection } from "@/components/sections/proof-section"
import { CTASection } from "@/components/sections/cta-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Succesverhalen | Forester OS",
  description: "Ontdek wat onze klanten zeggen over hun groei met Forester OS.",
}

export default function SuccessStoriesPage() {
  return (
    <div className="bg-[#0d0015] min-h-screen">
      <Navigation />
      <main className="pt-20">
        <TestimonialsSection />
        <ProofSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
