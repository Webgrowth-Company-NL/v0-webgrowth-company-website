import type { ReactNode } from "react";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WaveDivider } from "@/components/wave-divider";

const HERO_PURPLE = "#231653";
const CREAM = "#faf6f0";
const DEEP = "#2c1d5e";

/**
 * De schil voor privacy, cookies en voorwaarden.
 *
 * Eén component omdat deze drie pagina's alleen in tekst verschillen. De opzet
 * is bewust rustiger dan de rest van de site: wie hier komt zoekt een antwoord,
 * geen beleving.
 */
export function LegalPage({
  eyebrow,
  title,
  intro,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <SiteHeader dark />
      <main className="flex-1">
        <section
          className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24 px-5 sm:px-8 text-white"
          style={{ backgroundColor: HERO_PURPLE }}
        >
          <div
            aria-hidden
            className="absolute -top-48 -right-48 h-[680px] w-[680px] rounded-full"
            style={{ background: "radial-gradient(closest-side, rgba(139,92,246,0.42), rgba(139,92,246,0) 70%)" }}
          />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
            style={{ background: `linear-gradient(to bottom, transparent, ${HERO_PURPLE})` }}
          />
          <div className="relative mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full border border-white/15 bg-white/[0.07] backdrop-blur-sm text-[12.5px] font-medium text-white/75">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-lavender)]" />
              {eyebrow}
            </span>
            <h1 className="mt-7 font-[family-name:var(--font-display)] font-bold text-[clamp(2.1rem,4.6vw,3.4rem)] leading-[1.06] tracking-[-0.022em] text-white">
              {title}
            </h1>
            <p className="mt-5 text-[16px] sm:text-[17px] leading-[1.65] text-white/75">{intro}</p>
            <p className="mt-6 text-[13px] text-white/50">Laatst bijgewerkt op {updated}</p>
          </div>
        </section>

        <section className="px-5 sm:px-8 py-16 sm:py-20" style={{ backgroundColor: CREAM }}>
          <div
            className={[
              "mx-auto max-w-3xl",
              "[&_h2]:font-[family-name:var(--font-display)] [&_h2]:font-bold",
              "[&_h2]:text-[clamp(1.3rem,2.6vw,1.7rem)] [&_h2]:leading-[1.2] [&_h2]:tracking-[-0.015em]",
              "[&_h2]:text-[color:var(--color-ink-strong)] [&_h2]:mt-12 [&_h2]:mb-4 [&_h2:first-child]:mt-0",
              "[&_h3]:font-semibold [&_h3]:text-[16px] [&_h3]:text-[color:var(--color-ink-strong)] [&_h3]:mt-7 [&_h3]:mb-2",
              "[&_p]:text-[15.5px] [&_p]:leading-[1.7] [&_p]:text-[color:var(--color-ink-muted)] [&_p]:mb-4",
              "[&_ul]:mb-4 [&_ul]:space-y-2",
              "[&_li]:text-[15.5px] [&_li]:leading-[1.7] [&_li]:text-[color:var(--color-ink-muted)]",
              "[&_li]:pl-5 [&_li]:relative",
              "[&_li]:before:content-[''] [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[0.62em]",
              "[&_li]:before:h-1.5 [&_li]:before:w-1.5 [&_li]:before:rounded-full",
              "[&_li]:before:bg-[color:var(--color-purple)]/45",
              "[&_a]:text-[color:var(--color-purple)] [&_a]:font-medium [&_a]:underline [&_a]:underline-offset-2",
              "[&_strong]:text-[color:var(--color-ink-strong)] [&_strong]:font-semibold",
            ].join(" ")}
          >
            {children}

            <div className="mt-14 rounded-2xl border border-[color:var(--color-line)] bg-white p-6">
              <h2 className="!mt-0 !mb-2 font-[family-name:var(--font-display)] font-bold text-[17px] text-[color:var(--color-ink-strong)]">
                Een vraag hierover?
              </h2>
              <p className="!mb-0 text-[14.5px] leading-[1.65] text-[color:var(--color-ink-muted)]">
                Mail{" "}
                <a href="mailto:martijn@webgrowth.company" className="text-[color:var(--color-purple)] font-medium underline underline-offset-2">
                  martijn@webgrowth.company
                </a>{" "}
                of ga naar <Link href="/contact" className="text-[color:var(--color-purple)] font-medium underline underline-offset-2">contact</Link>. Je krijgt op werkdagen binnen een paar uur antwoord.
              </p>
            </div>
          </div>
        </section>

        <WaveDivider top={CREAM} bottom={DEEP} />
      </main>
      <SiteFooter />
    </>
  );
}
