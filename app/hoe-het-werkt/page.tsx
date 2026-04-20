import { Navigation } from "@/components/navigation"
import { ProcessSection } from "@/components/sections/process-section"
import { ProofSection } from "@/components/sections/proof-section"
import { CTASection } from "@/components/sections/cta-section"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hoe het werkt — Website laten maken in 6 tot 8 weken | Webgrowth",
  description: "Van eerste gesprek tot een website die groeit. Kick-off, drie sprints van twee weken, test, livegang en daarna elke maand beter. Zo werkt Webgrowth.",
  alternates: {
    canonical: "https://webgrowth.company/hoe-het-werkt",
  },
}

export default function HowItWorksPage() {
  return (
    <div className="bg-[#0d0818] min-h-screen">
      <Navigation />
      <main className="pt-20">
        <ProcessSection />
        <ProofSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
