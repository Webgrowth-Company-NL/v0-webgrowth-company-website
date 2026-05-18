import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  CreditCard,
  Flame,
  Headphones,
  LogIn,
  MessageCircle,
  Phone,
  Search,
  Sparkles,
  Wrench,
} from "lucide-react";
import { KennismakingButton } from "@/components/kennismaking-button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WaveDivider } from "@/components/wave-divider";

const HERO_PURPLE = "#231653";
const CREAM = "#faf6f0";
const LAVENDER = "#e9e4f7";
const DEEP = "#2c1d5e";

const TITLE = "Helpcentrum: hulp bij Forester OS, je website en je vragen | Webgrowth Company";
const DESCRIPTION =
  "Pak wat bij je vraag past: log in als klant, plan een kennismaking als je oriënteert of bel direct met Martijn voor een snelle vraag. We helpen op werkdagen binnen een paar uur.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/help" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://webgrowth.company/help",
    type: "website",
  },
};

type Topic = {
  icon: typeof Compass;
  label: string;
  body: string;
  href: string;
  cta: string;
};

const TOPICS: Topic[] = [
  {
    icon: Compass,
    label: "Forester OS in het algemeen",
    body: "Wat het is, welke modules er in zitten, waarom we het hebben gebouwd en hoe het alles in één pakket samenbrengt.",
    href: "/forester-os",
    cta: "Bekijk Forester OS",
  },
  {
    icon: CreditCard,
    label: "Prijzen en contracten",
    body: "Wat er in elk pakket zit, hoe het abonnement werkt, of je vastzit aan een lang contract en wat er gebeurt bij vertrek.",
    href: "/prijzen",
    cta: "Bekijk prijzen en FAQ",
  },
  {
    icon: Flame,
    label: "Lead Engines en Quickscans",
    body: "Hoe een Lead Engine werkt, welke soorten we hebben en wat het verschil is tussen een quickscan, calculator en aanmeldformulier.",
    href: "/forester-os/lead-engine",
    cta: "Bekijk Lead Engines",
  },
  {
    icon: Sparkles,
    label: "Q (onze AI-assistent)",
    body: "Hoe Q meeschrijft aan content, SEO-suggesties geeft en deals in je CRM helpt opvolgen, met jouw site als context.",
    href: "/forester-os/ai",
    cta: "Bekijk Q",
  },
  {
    icon: Search,
    label: "Website APK",
    body: "Hoe de gratis scan werkt, wat je in het rapport krijgt en wat je ermee kunt zonder dat we langs hoeven komen.",
    href: "/website-apk",
    cta: "Doe de Website APK",
  },
  {
    icon: Wrench,
    label: "Onderhoud en support",
    body: "Wat priority support inhoudt, hoe we omgaan met urgente issues en wat we doen aan back-ups, beveiliging en uptime.",
    href: "/forester-os/priority-support",
    cta: "Bekijk priority support",
  },
];

export default function HelpPage() {
  return (
    <>
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
              Helpcentrum
            </span>
            <h1 className="mt-7 font-[family-name:var(--font-display)] font-bold text-[clamp(2.3rem,5.3vw,4.2rem)] leading-[1.05] tracking-[-0.022em] text-white">
              Hoe kunnen we{" "}
              <span
                className="inline bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(110deg, #ff0096 0%, #8b5cf6 50%, #c4b5fd 100%)",
                  WebkitBackgroundClip: "text",
                }}
              >
                helpen?
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[17px] sm:text-[18px] leading-[1.65] text-white/70">
              Pak wat bij je vraag past. Als bestaande klant log je in bij Forester OS en schiet je een taak in. Als je oriënteert plan je een kennismaking, en voor een snelle vraag pak je gewoon de telefoon.
            </p>
          </div>
        </section>

        <WaveDivider top={HERO_PURPLE} bottom={CREAM} />

        {/* ───────────────────────── Drie routes naar hulp ───────────────────────── */}
        <section className="relative px-5 sm:px-8 pt-16 sm:pt-24 pb-16 sm:pb-20 bg-[#faf6f0]">
          <div className="mx-auto max-w-5xl">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full border border-[color:var(--color-line)] bg-white text-[12.5px] font-medium text-[color:var(--color-ink-muted)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-purple)]" />
                Drie routes naar hulp
              </span>
              <h2 className="mt-6 font-[family-name:var(--font-display)] font-bold text-[clamp(1.9rem,4.4vw,3rem)] leading-[1.08] tracking-[-0.02em] text-[color:var(--color-ink-strong)]">
                Pak wat bij je vraag past.
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-5 sm:gap-6">
              {/* Klant */}
              <a
                href="https://app.webgrowth.company/"
                className="group rounded-3xl border border-[color:var(--color-line)] bg-white p-7 transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_44px_-22px_rgba(98,59,199,0.22)] hover:border-[color:var(--color-purple)]/35"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--color-purple-tint)]">
                  <LogIn className="h-5 w-5 text-[color:var(--color-purple)]" strokeWidth={2.25} />
                </span>
                <h3 className="mt-5 font-[family-name:var(--font-display)] font-bold text-[18px] text-[color:var(--color-ink-strong)]">
                  Ik ben al klant
                </h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-[color:var(--color-ink-muted)]">
                  Log in bij Forester OS en schiet een taak in. Aanpassingen aan je site, vragen over je CRM of een nieuwe Lead Engine: het komt direct in onze pijplijn terecht.
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[color:var(--color-purple)] group-hover:gap-2 transition-all">
                  Naar Forester OS
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
              </a>

              {/* Orientator */}
              <div className="group rounded-3xl border border-[color:var(--color-purple)]/35 bg-[color:var(--color-purple-soft)] p-7 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_22px_52px_-22px_rgba(98,59,199,0.35)]">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--color-purple)] text-white">
                  <Compass className="h-5 w-5" strokeWidth={2.25} />
                </span>
                <h3 className="mt-5 font-[family-name:var(--font-display)] font-bold text-[18px] text-[color:var(--color-ink-strong)]">
                  Ik oriënteer me
                </h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-[color:var(--color-ink-muted)]">
                  Plan een kennismaking van 30 minuten. We bespreken waar je staat, wat je wilt en of Forester OS daarbij past. Vrijblijvend, geen pitch.
                </p>
                <div className="mt-5">
                  <KennismakingButton variant="primary" label="Plan een kennismaking" />
                </div>
              </div>

              {/* Snelle vraag */}
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
                  Ik heb een snelle vraag
                </h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-[color:var(--color-ink-muted)]">
                  Bel of WhatsApp Martijn direct. Op werkdagen tussen 9 en 17 uur nemen we zelf op, daarbuiten lezen we op WhatsApp ook 's avonds nog mee.
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
            </div>
          </div>
        </section>

        {/* ───────────────────────── Onderwerpen / veelgestelde vragen ───────────────────────── */}
        <section className="px-5 sm:px-8 pt-8 pb-24 sm:pb-32 bg-[#faf6f0]">
          <div className="mx-auto max-w-5xl">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full border border-[color:var(--color-line)] bg-white text-[12.5px] font-medium text-[color:var(--color-ink-muted)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-purple)]" />
                Veelgestelde vragen per onderwerp
              </span>
              <h2 className="mt-6 font-[family-name:var(--font-display)] font-bold text-[clamp(1.7rem,3.8vw,2.6rem)] leading-[1.1] tracking-[-0.02em] text-[color:var(--color-ink-strong)]">
                Misschien staat je antwoord hier.
              </h2>
              <p className="mt-5 text-[15px] leading-[1.65] text-[color:var(--color-ink-muted)]">
                We hebben FAQ's verspreid over de site, telkens op de pagina waar de vraag thuishoort. Hieronder de directe routes per onderwerp.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {TOPICS.map((t) => (
                <Link
                  key={t.href}
                  href={t.href}
                  className="group rounded-2xl border border-[color:var(--color-line)] bg-white p-6 transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_44px_-22px_rgba(12,6,18,0.16)] hover:border-[color:var(--color-line-strong)]"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[color:var(--color-purple-tint)]">
                    <t.icon className="h-4.5 w-4.5 text-[color:var(--color-purple)]" strokeWidth={2.25} />
                  </span>
                  <h3 className="mt-4 font-[family-name:var(--font-display)] font-bold text-[16.5px] text-[color:var(--color-ink-strong)] group-hover:text-[color:var(--color-purple)] transition-colors">
                    {t.label}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-[1.6] text-[color:var(--color-ink-muted)]">
                    {t.body}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[color:var(--color-purple)]">
                    {t.cta}
                    <ArrowRight className="h-3 w-3 transition-transform duration-200 ease-out group-hover:translate-x-0.5" strokeWidth={2.5} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <WaveDivider top={CREAM} bottom={LAVENDER} />

        {/* ───────────────────────── Niets gevonden? ───────────────────────── */}
        <section className="px-5 sm:px-8 py-16 sm:py-20 bg-[#e9e4f7]">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[color:var(--color-purple)] mb-5">
              <Headphones className="h-5 w-5" strokeWidth={2.25} />
            </span>
            <h2 className="font-[family-name:var(--font-display)] font-bold text-[clamp(1.7rem,3.5vw,2.4rem)] leading-[1.12] tracking-[-0.01em] text-[color:var(--color-ink-strong)]">
              Niets gevonden? Schiet 'm in.
            </h2>
            <p className="mt-4 text-[15px] sm:text-[16px] leading-[1.65] text-[color:var(--color-ink-muted)] max-w-xl mx-auto">
              Geen antwoord gevonden of liever even sparren? Plan een kennismaking, bel direct of stuur 'n WhatsApp. We pakken het op werkdagen binnen een paar uur op.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <KennismakingButton variant="primary" />
              <Link
                href="/contact"
                className="btn-press inline-flex items-center px-5 py-2.5 rounded-full border border-[color:var(--color-line-strong)] hover:border-[color:var(--color-purple)]/35 text-[color:var(--color-ink)] hover:text-[color:var(--color-purple)] text-[14px] font-semibold transition-colors"
              >
                Naar contact
              </Link>
            </div>
          </div>
        </section>

        <WaveDivider top={LAVENDER} bottom={DEEP} />
      </main>
      <SiteFooter />
    </>
  );
}
