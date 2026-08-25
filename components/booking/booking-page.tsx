import { Check } from "lucide-react";
import { BookingFlow } from "@/components/booking/booking-flow";
import type { BookingTypeId } from "@/components/booking/meeting-types";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const HERO_PURPLE = "#231653";

/**
 * Paginaschil voor de afspraak-links die we naar klanten sturen (kick-off,
 * sprint meeting). Compacte paarse kop, daaronder de boekingsflow als kaart.
 */
export function BookingPage({
  type,
  eyebrow,
  titleLead,
  titleAccent,
  intro,
  bullets,
}: {
  type: BookingTypeId;
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  intro: string;
  bullets: string[];
}) {
  return (
    <>
      <SiteHeader dark />
      <main className="flex-1">
        <section
          className="relative isolate overflow-hidden pt-32 pb-40 sm:pt-40 sm:pb-52 px-5 sm:px-8 text-white"
          style={{ backgroundColor: HERO_PURPLE }}
        >
          <div
            aria-hidden
            className="absolute -top-48 -right-48 h-[680px] w-[680px] rounded-full"
            style={{ background: "radial-gradient(closest-side, rgba(139,92,246,0.42), rgba(139,92,246,0) 70%)" }}
          />
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none opacity-70 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "26px 26px",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-40 sm:h-52 pointer-events-none"
            style={{ background: `linear-gradient(to bottom, transparent, ${HERO_PURPLE})` }}
          />

          <div className="relative mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full border border-white/15 bg-white/[0.07] backdrop-blur-sm text-[12.5px] font-medium text-white/75">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-lavender)]" />
              {eyebrow}
            </span>
            <h1 className="mt-7 font-[family-name:var(--font-display)] font-bold text-[clamp(2.1rem,4.6vw,3.4rem)] leading-[1.07] tracking-[-0.022em] text-white">
              {titleLead}{" "}
              <span
                className="inline bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(110deg, #ff0096 0%, #8b5cf6 50%, #c4b5fd 100%)" }}
              >
                {titleAccent}
              </span>
            </h1>
            <p className="mt-6 text-[16.5px] sm:text-[17.5px] leading-[1.6] text-white/72 max-w-2xl mx-auto">
              {intro}
            </p>
            {bullets.length > 0 && (
              <ul className="mt-8 flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-x-6 gap-y-2.5">
                {bullets.map((b) => (
                  <li key={b} className="inline-flex items-center gap-2 text-[14px] text-white/80">
                    <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/12">
                      <Check className="h-3 w-3 text-[color:var(--color-lavender)]" strokeWidth={3} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        {/* Booker, half over de hero heen */}
        <section className="relative px-5 sm:px-8 pb-24 sm:pb-32 -mt-28 sm:-mt-36">
          <div className="relative mx-auto max-w-3xl">
            <BookingFlow type={type} chrome="inline" />
            <p className="mt-6 text-center text-[13.5px] text-[color:var(--color-ink-subtle)]">
              Komt er niets uit dat past? Mail{" "}
              <a
                href="mailto:martijn@webgrowth.company"
                className="font-semibold text-[color:var(--color-purple)] underline underline-offset-2"
              >
                martijn@webgrowth.company
              </a>{" "}
              of bel 076 204 5010.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
