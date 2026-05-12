import { Hero } from "@/components/hero";
import { SiteHeader } from "@/components/site-header";
import { SolutionSelector } from "@/components/solution-selector";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <SolutionSelector />
      </main>
    </>
  );
}
