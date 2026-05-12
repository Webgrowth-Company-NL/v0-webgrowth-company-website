import { Hero } from "@/components/hero";
import { SectionShift } from "@/components/section-shift";
import { SiteHeader } from "@/components/site-header";
import { SolutionSelector } from "@/components/solution-selector";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <SolutionSelector />
        <SectionShift />
      </main>
    </>
  );
}
