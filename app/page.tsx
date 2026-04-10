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
      {/* Forest parallax only shows behind hero section */}
      <ForestParallax />
      <Navigation />
      <main className="relative">
        {/* Hero uses the parallax background */}
        <HeroSection />
        
        {/* All subsequent sections have their own backgrounds */}
        <div className="relative z-10">
          <ProblemSection />
          <PromiseSection />
          <HowItWorksSection />
          <ProofSection />
          <TestimonialsSection />
          <PricingSection />
          <CTASection />
        </div>
      </main>
      <Footer />
    </>
  )
}
