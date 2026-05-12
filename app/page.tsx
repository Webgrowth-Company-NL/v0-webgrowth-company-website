import { Hero } from "@/components/hero";
import { SectionCases } from "@/components/section-cases";
import { SectionCta } from "@/components/section-cta";
import { SectionFaq } from "@/components/section-faq";
import { SectionFieldLogs } from "@/components/section-field-logs";
import { SectionProof } from "@/components/section-proof";
import { SectionShift } from "@/components/section-shift";
import { SectionVideo } from "@/components/section-video";
import { SiteFooter } from "@/components/site-footer";
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
        <WaveDivider top={DEEP} bottom={CREAM} />
        <SectionCases />
        <WaveDivider top={CREAM} bottom={WHITE} />
        <SectionVideo />
        <WaveDivider top={WHITE} bottom={CREAM} />
        <SectionFieldLogs />
        <WaveDivider top={CREAM} bottom={LAVENDER} />
        <SectionFaq />
        <WaveDivider top={LAVENDER} bottom={DEEP} />
        <SectionCta />
      </main>
      <SiteFooter />
    </>
  );
}
