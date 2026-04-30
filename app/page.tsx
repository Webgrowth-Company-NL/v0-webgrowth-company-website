import { Navigation } from "@/components/navigation"
import { HomeV2Hero } from "@/components/sections/home-v2-hero"
import { TrustBar } from "@/components/sections/trust-bar"
import { HomeV2Probleem } from "@/components/sections/home-v2-probleem"
import { HomeV2VoorWie } from "@/components/sections/home-v2-voor-wie"
import { HomeV2QKarakter } from "@/components/sections/home-v2-q-karakter"
import { HomeV2ForesterInActie } from "@/components/sections/home-v2-forester-in-actie"
import { HomeV2RoiPreview } from "@/components/sections/home-v2-roi-preview"
import { HomeV2Stemmen } from "@/components/sections/home-v2-stemmen"
import { HomeV2Cta } from "@/components/sections/home-v2-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="bg-[#0d0818]">
        <HomeV2Hero />
        <TrustBar />
        <HomeV2Probleem />
        <HomeV2VoorWie />
        <HomeV2QKarakter />
        <HomeV2ForesterInActie />
        <HomeV2RoiPreview />
        <HomeV2Stemmen />
        <HomeV2Cta />
      </main>
      <Footer />
    </>
  )
}
