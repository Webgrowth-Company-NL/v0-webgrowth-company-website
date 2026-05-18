import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone, Star } from "lucide-react";
import { KennismakingButton } from "@/components/kennismaking-button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WaveDivider } from "@/components/wave-divider";

const HERO_PURPLE = "#231653";
const CREAM = "#faf6f0";

const TITLE = "Contact: bel, mail of plan een kennismaking | Webgrowth Company";
const DESCRIPTION =
  "Geen tussenlagen, geen account-manager-route. Bel of mail Martijn direct, of plan een kennismaking in. We reageren op werkdagen binnen een paar uur.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://webgrowth.company/contact",
    type: "website",
  },
};

const CONTACT_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Webgrowth Company",
  url: "https://webgrowth.company",
  email: "martijn@webgrowth.company",
  telephone: "+31 76 204 5010",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ceresstraat 13",
    addressLocality: "Breda",
    addressCountry: "NL",
  },
  vatID: "NL001363277B13",
  taxID: "64809536",
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(CONTACT_JSONLD) }}
      />
      <SiteHeader dark />
      <main className="flex-1">
        {/* ───────────────────────── Hero ───────────────────────── */}
        <section
          className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32 px-5 sm:px-8 text-white"
          style={{ backgroundColor: HERO_PURPLE }}
        >
          <div
            aria-hidden
            className="absolute -top-48 -right-48 h-[680px] w-[680px] rounded-full"
            style={{ background: "radial-gradient(closest-side, rgba(139,92,246,0.42), rgba(139,92,246,0) 70%)" }}
          />
          <div
            aria-hidden
            className="absolute -bottom-60 -left-48 h-[680px] w-[680px] rounded-full"
            style={{ background: "radial-gradient(closest-side, rgba(124,58,237,0.30), rgba(124,58,237,0) 70%)" }}
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
              Contact
              <span className="text-white/35">·</span>
              <span className="text-white font-semibold">Werkdagen 9-17</span>
            </span>
            <h1 className="mt-7 font-[family-name:var(--font-display)] font-bold text-[clamp(2.3rem,5.3vw,4.2rem)] leading-[1.05] tracking-[-0.022em] text-white">
              Mail, bel of plan{" "}
              <span
                className="inline bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(110deg, #ff0096 0%, #8b5cf6 50%, #c4b5fd 100%)",
                  WebkitBackgroundClip: "text",
                }}
              >
                een kennismaking.
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[17px] sm:text-[18px] leading-[1.65] text-white/70">
              Geen tussenlagen, geen account-manager-route, geen ticketsysteem dat een handtekening van drie mensen nodig heeft. Je belt of mailt Martijn direct, of je plant via de site een kennismaking. We reageren op werkdagen binnen een paar uur.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <KennismakingButton variant="secondary-on-dark" />
              <a
                href="tel:+31762045010"
                className="inline-flex items-center gap-2 text-[14.5px] font-semibold text-white/75 hover:text-white transition-colors"
              >
                Direct bellen
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </section>

        <WaveDivider top={HERO_PURPLE} bottom={CREAM} />

        {/* ───────────────────────── Drie manieren ───────────────────────── */}
        <section className="relative px-5 sm:px-8 pt-16 sm:pt-24 pb-16 sm:pb-20 bg-[#faf6f0]">
          <div className="mx-auto max-w-5xl">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full border border-[color:var(--color-line)] bg-white text-[12.5px] font-medium text-[color:var(--color-ink-muted)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-purple)]" />
                Drie manieren om in contact te komen
              </span>
              <h2 className="mt-6 font-[family-name:var(--font-display)] font-bold text-[clamp(1.9rem,4.4vw,3rem)] leading-[1.08] tracking-[-0.02em] text-[color:var(--color-ink-strong)]">
                Pak wat het beste bij je past.
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-5 sm:gap-6">
              {/* Bellen of WhatsApp */}
              <div className="group rounded-3xl border border-[color:var(--color-line)] bg-white p-7 transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_44px_-22px_rgba(98,59,199,0.22)] hover:border-[color:var(--color-purple)]/35">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--color-purple-tint)]">
                    <Phone className="h-5 w-5 text-[color:var(--color-purple)]" strokeWidth={2.25} />
                  </span>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--color-purple-tint)]">
                    <MessageCircle className="h-5 w-5 text-[color:var(--color-purple)]" strokeWidth={2.25} />
                  </span>
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-display)] font-bold text-[18px] text-[color:var(--color-ink-strong)]">
                  Bel of WhatsApp met Martijn
                </h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-[color:var(--color-ink-muted)]">
                  Geen keuzemenu, geen tussenstap. Werkdagen tussen 9 en 17 uur nemen we zelf op, en op WhatsApp lezen we ook 's avonds nog even mee als 't dringend is.
                </p>
                <div className="mt-5 flex flex-col gap-2">
                  <a
                    href="tel:+31762045010"
                    className="inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-[14.5px] font-semibold text-[color:var(--color-purple)] hover:text-[color:var(--color-purple-hover)] transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5" strokeWidth={2.5} />
                    076 204 5010
                  </a>
                  <a
                    href="https://wa.me/31762045010"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-[14.5px] font-semibold text-[color:var(--color-purple)] hover:text-[color:var(--color-purple-hover)] transition-colors"
                  >
                    <MessageCircle className="h-3.5 w-3.5" strokeWidth={2.5} />
                    WhatsApp 076 204 5010
                  </a>
                </div>
              </div>

              {/* Mailen */}
              <a
                href="mailto:martijn@webgrowth.company"
                className="group rounded-3xl border border-[color:var(--color-line)] bg-white p-7 transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_44px_-22px_rgba(98,59,199,0.22)] hover:border-[color:var(--color-purple)]/35"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--color-purple-tint)]">
                  <Mail className="h-5 w-5 text-[color:var(--color-purple)]" strokeWidth={2.25} />
                </span>
                <h3 className="mt-5 font-[family-name:var(--font-display)] font-bold text-[18px] text-[color:var(--color-ink-strong)]">
                  Mail voor langere verhalen
                </h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-[color:var(--color-ink-muted)]">
                  Heb je documenten, screenshots of een hele context-dump? Mail. Op werkdagen reageren we binnen een paar uur, soms sneller.
                </p>
                <p className="mt-4 font-[family-name:var(--font-mono)] text-[14px] font-semibold text-[color:var(--color-purple)] break-all">
                  martijn@webgrowth.company
                </p>
              </a>

              {/* Kennismaking */}
              <div className="group rounded-3xl border border-[color:var(--color-purple)]/35 bg-[color:var(--color-purple-soft)] p-7 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_22px_52px_-22px_rgba(98,59,199,0.35)]">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--color-purple)] text-white">
                  <Star className="h-5 w-5" strokeWidth={2.25} fill="currentColor" />
                </span>
                <h3 className="mt-5 font-[family-name:var(--font-display)] font-bold text-[18px] text-[color:var(--color-ink-strong)]">
                  Liever even doorpraten?
                </h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-[color:var(--color-ink-muted)]">
                  Plan een kennismaking van 30 minuten via de site. We bespreken waar je bedrijf staat, wat je wilt en of Forester OS daarbij past. Vrijblijvend, geen pitch.
                </p>
                <div className="mt-5">
                  <KennismakingButton variant="primary" label="Plan een kennismaking" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────── Bedrijfsinfo ───────────────────────── */}
        <section className="px-5 sm:px-8 pb-24 sm:pb-32 bg-[#faf6f0]">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-[2rem] bg-white border border-[color:var(--color-line)] p-7 sm:p-10">
              <div className="grid sm:grid-cols-2 gap-8 sm:gap-12">
                {/* Adres */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="h-4 w-4 text-[color:var(--color-purple)]" strokeWidth={2.25} />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--color-ink-subtle)]">
                      Bezoek- en postadres
                    </span>
                  </div>
                  <p className="text-[15px] leading-[1.6] text-[color:var(--color-ink-strong)]">
                    <strong>Webgrowth Company</strong><br />
                    Ceresstraat 13<br />
                    Breda
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Ceresstraat+13+Breda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[color:var(--color-purple)] hover:text-[color:var(--color-purple-hover)] transition-colors"
                  >
                    Open in Google Maps
                    <ArrowRight className="h-3 w-3" strokeWidth={2.5} />
                  </a>
                </div>

                {/* Bedrijfsgegevens */}
                <div>
                  <div className="mb-3">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--color-ink-subtle)]">
                      Bedrijfsgegevens
                    </span>
                  </div>
                  <p className="text-[14px] leading-[1.7] text-[color:var(--color-ink)]">
                    <span className="font-semibold">KvK</span> 64809536<br />
                    <span className="font-semibold">BTW</span> NL001363277B13
                  </p>
                  <p className="mt-3 text-[12.5px] text-[color:var(--color-ink-muted)]">
                    Gevestigd in Nederland, hosting in Nederland.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-8 text-center text-[14px] leading-[1.6] text-[color:var(--color-ink-muted)] max-w-2xl mx-auto">
              Liever eerst kijken wat we voor anderen bouwden? Bekijk de{" "}
              <Link href="/cases" className="font-semibold text-[color:var(--color-purple)] hover:text-[color:var(--color-purple-hover)] underline underline-offset-2 transition-colors">
                klantverhalen
              </Link>{" "}
              of doe de{" "}
              <Link href="/website-apk" className="font-semibold text-[color:var(--color-purple)] hover:text-[color:var(--color-purple-hover)] underline underline-offset-2 transition-colors">
                gratis website APK
              </Link>{" "}
              voordat je belt.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
