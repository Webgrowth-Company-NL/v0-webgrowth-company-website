import { Hero } from "@/components/hero";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        {/* Spacer to demo how the header reacts on scroll — to be replaced with real sections */}
        <section className="px-5 sm:px-8 py-24 border-t border-[color:var(--color-line)]">
          <div className="mx-auto max-w-7xl">
            <p className="text-[color:var(--color-ink-subtle)] text-sm uppercase tracking-[0.18em]">
              Volgende secties komen hier
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
