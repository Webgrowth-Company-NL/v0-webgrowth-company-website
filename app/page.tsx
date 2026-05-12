import { Hero } from "@/components/hero";
import { SectionProof } from "@/components/section-proof";
import { SectionShift } from "@/components/section-shift";
import { SiteHeader } from "@/components/site-header";
import { SolutionSelector } from "@/components/solution-selector";
import { WaveDivider } from "@/components/wave-divider";

const CREAM = "#faf6f0";
const LAVENDER = "#f2effb";
const WHITE = "#ffffff";
const DEEP = "#2c1d5e";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <WaveDivider top={CREAM} bottom={LAVENDER} />
        <SolutionSelector />
        <WaveDivider top={LAVENDER} bottom={WHITE} />
        <SectionShift />
        <WaveDivider top={WHITE} bottom={DEEP} />
        <SectionProof />
      </main>
    </>
  );
}
