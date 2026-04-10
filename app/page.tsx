import { ForestParallax } from "@/components/forest-parallax"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero-section"
import { ProblemSection } from "@/components/sections/problem-section"
import { PromiseSection } from "@/components/sections/promise-section"
import { HowItWorksSection } from "@/components/sections/how-it-works-section"
import { ProofSection } from "@/components/sections/proof-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { CTASection } from "@/components/sections/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <ForestParallax />
      <Navigation />
      <main className="relative">
        <HeroSection />
        <ProblemSection />
        <PromiseSection />
        <HowItWorksSection />
        <ProofSection />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
