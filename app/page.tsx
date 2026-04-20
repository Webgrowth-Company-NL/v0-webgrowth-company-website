import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero-section"
import { ProblemSection } from "@/components/sections/problem-section"
import { SystemSection } from "@/components/sections/system-section"
import { ComparisonSection } from "@/components/sections/comparison-section"
import { HowItWorksSection } from "@/components/sections/how-it-works-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { FaqSection } from "@/components/sections/faq-section"
import { FieldLogsSection } from "@/components/sections/field-logs-section"
import { CTASection } from "@/components/sections/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSection />
        <ComparisonSection />
        <HowItWorksSection />
        <SystemSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <FieldLogsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
