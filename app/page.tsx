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
        {/* Parallax driver: tall scroll container — GSAP triggers against this */}
        <div id="parallax-driver" style={{ height: "320vh", position: "relative" }}>
          {/* Layer 1: Hero — fades out en schaalt op */}
          <div style={{ position: "sticky", top: 0, height: "100vh" }}>
            <HeroSection />
          </div>
          {/* Layer 2: Problem section — faded in op dezelfde positie */}
          <div
            id="problem-overlay"
            style={{
              position: "sticky",
              top: 0,
              height: "100vh",
              marginTop: "-100vh",
              opacity: 0,
              pointerEvents: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <ProblemSection />
          </div>
        </div>

        {/* Gradient bridge: parallax fades out, solid bg fades in */}

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
