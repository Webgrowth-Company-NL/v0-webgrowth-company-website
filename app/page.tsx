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
      {/* Fixed parallax background — visible through hero + problem section */}
      <ForestParallax />
      <Navigation />
      <main className="relative">
        {/* Hero: transparent, floats over parallax */}
        <HeroSection />

        {/* Problem section: transparent, content cards float over parallax */}
        <ProblemSection />

        {/* Gradient bridge: parallax fades out, solid bg fades in */}
        <div
          style={{
            height: "200px",
            background: "linear-gradient(to bottom, transparent 0%, #05000f 100%)",
            marginTop: "-1px",
          }}
        />

        {/* All further sections on solid dark background */}
        <div style={{ background: "#05000f" }}>
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
