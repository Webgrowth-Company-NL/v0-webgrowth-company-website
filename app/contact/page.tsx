import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CtaButton } from "@/components/ui/cta-button"
import { MapsEmbedConsent } from "@/components/maps-embed-consent"
import Image from "next/image"
import { Mail, MapPin, Phone, Star } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact — Even kennismaken met Webgrowth | Breda",
  description:
    "Plan een kennismaking, bel ons of kom langs op de Ceresstraat in Breda. In het monumentale Drie Hoefijzers-pand. Geen verkooppraatje, eerlijk advies.",
  keywords: [
    "contact Webgrowth Company",
    "webdesign bureau Breda",
    "afspraak websitebureau",
    "Forester OS demo",
    "Ceresstraat 13 Breda",
    "Drie Hoefijzers Breda",
  ],
  alternates: {
    canonical: "https://webgrowth.company/contact",
  },
  openGraph: {
    title: "Contact — Even kennismaken met Webgrowth",
    description:
      "Plan een kennismaking, bel ons of kom langs op de Ceresstraat in Breda. In het monumentale Drie Hoefijzers-pand.",
    type: "website",
    locale: "nl_NL",
    siteName: "Webgrowth",
    url: "https://webgrowth.company/contact",
    images: [
      {
        url: "/images/kantoor/drie-hoefijzers.jpg",
        width: 1200,
        height: 630,
        alt: "Het Drie Hoefijzers-pand aan de Ceresstraat in Breda, kantoor van Webgrowth Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Even kennismaken met Webgrowth",
    description:
      "Plan een kennismaking of kom langs in het Drie Hoefijzers-pand in Breda.",
    images: ["/images/kantoor/drie-hoefijzers.jpg"],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact — Webgrowth Company",
  url: "https://webgrowth.company/contact",
  description:
    "Plan een kennismaking, bel ons of kom langs op de Ceresstraat in Breda.",
  mainEntity: {
    "@type": "Organization",
    "@id": "https://webgrowth.company/#organization",
    name: "Webgrowth Company",
    url: "https://webgrowth.company",
    email: "martijn@webgrowth.company",
    telephone: "+31762045010",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ceresstraat 13",
      addressLocality: "Breda",
      postalCode: "4811 CA",
      addressCountry: "NL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.5946,
      longitude: 4.7858,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: "+31762045010",
        email: "martijn@webgrowth.company",
        availableLanguage: ["Dutch", "English"],
        areaServed: "NL",
      },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  },
}

const contactCards = [
  {
    icon: Phone,
    label: "Bellen",
    value: "076 204 5010",
    href: "tel:+31762045010",
    sub: "Maandag tot vrijdag, 9 tot 17 uur",
  },
  {
    icon: Mail,
    label: "Mailen",
    value: "martijn@webgrowth.company",
    href: "mailto:martijn@webgrowth.company",
    sub: "Antwoord meestal binnen één werkdag",
  },
  {
    icon: MapPin,
    label: "Langskomen",
    value: "Ceresstraat 13, Breda",
    href: "https://www.google.com/maps/dir/?api=1&destination=Ceresstraat+13+Breda",
    external: true,
    sub: "Op afspraak, koffie staat klaar",
  },
]

// Google Maps embed met directe zoekopdracht naar het bedrijf, niet alleen het adres.
// Toont de Webgrowth Company Business Profile-pin met reviews en foto's.
const mapsEmbedSrc =
  "https://maps.google.com/maps?q=Webgrowth+Company%2C+Ceresstraat+13%2C+Breda&t=&z=15&ie=UTF8&iwloc=B&output=embed"

const mapsLinkOut =
  "https://www.google.com/maps/place/Webgrowth+Company/@51.5946,4.7858,17z"

export default function ContactPage() {
  return (
    <div className="bg-[#0d0818] min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-16 px-5 sm:px-8 overflow-hidden">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-[#623bc7]/10 blur-[180px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#ff0096]/8 blur-[140px] pointer-events-none" />
          <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_1fr] gap-12 items-center">
            <div>
              <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-5">
                Contact
              </p>
              <h1 className="font-[family-name:var(--font-gottak)] text-[clamp(2.6rem,7vw,5.4rem)] font-black leading-[1.02] tracking-tight mb-6">
                <span
                  style={{
                    background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Even kennismaken.
                </span>
              </h1>
              <p className="text-white/65 text-lg md:text-xl leading-relaxed max-w-xl mb-8">
                Dertig minuten met Martijn. Wij luisteren waar je staat, jij hoort waar Forester OS verschil maakt en je krijgt eerlijk advies, ook als dat niet bij ons uitkomt.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <CtaButton href="/contact" variant="primary">
                  Boek een kennismaking
                </CtaButton>
                <CtaButton href="/website-apk" variant="secondary">
                  Doe eerst de gratis APK
                </CtaButton>
              </div>
              <div className="mt-6 flex items-center gap-2 text-white/55 text-xs">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-semibold text-white">9.4/10</span>
                <span>· gewaardeerd door klanten van Webgrowth</span>
              </div>
            </div>

            {/* Kantoorfoto */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10">
                <Image
                  src="/images/kantoor/drie-hoefijzers.jpg"
                  alt="Het monumentale Drie Hoefijzers-pand aan de Ceresstraat in Breda, waar Webgrowth Company gevestigd is"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0818]/85 via-[#0d0818]/30 to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-[#ff0096] text-[10px] font-semibold tracking-widest uppercase mb-2">
                    HQ in Breda
                  </p>
                  <p className="font-[family-name:var(--font-gottak)] text-2xl md:text-3xl font-black text-white leading-tight mb-1">
                    Ceresstraat 13
                  </p>
                  <p className="text-white/75 text-sm">
                    In het monumentale Drie Hoefijzers-pand
                  </p>
                </div>
              </div>
              <p className="text-white/35 text-[10px] mt-3 text-right">
                Foto: G.Lanting · Wikimedia Commons · CC BY-SA 4.0
              </p>
            </div>
          </div>
        </section>

        {/* Contact-kaarten */}
        <section className="px-5 sm:px-8 py-10">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-4">
            {contactCards.map((card) => {
              const Icon = card.icon
              const inner = (
                <div
                  className="rounded-2xl border border-white/10 p-7 h-full transition-all duration-200 hover:border-white/25"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <div className="w-11 h-11 rounded-xl bg-[#ff0096]/15 border border-[#ff0096]/25 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-[#ff0096]" strokeWidth={2} />
                  </div>
                  <p className="text-white/55 text-xs font-semibold tracking-widest uppercase mb-2">
                    {card.label}
                  </p>
                  <p className="font-[family-name:var(--font-gottak)] text-xl md:text-2xl font-black text-white leading-tight mb-2">
                    {card.value}
                  </p>
                  <p className="text-white/55 text-sm leading-relaxed">{card.sub}</p>
                </div>
              )
              if (card.external) {
                return (
                  <a
                    key={card.label}
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    {inner}
                  </a>
                )
              }
              return (
                <a key={card.label} href={card.href} className="block h-full">
                  {inner}
                </a>
              )
            })}
          </div>
        </section>

        {/* Pand-verhaal + Maps */}
        <section className="px-5 sm:px-8 py-12">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-12 items-stretch">
            <div>
              <p className="text-[#a78bfa] text-xs font-semibold tracking-widest uppercase mb-4">
                Hier zit ons kantoor
              </p>
              <h2 className="font-[family-name:var(--font-gottak)] text-[clamp(2rem,4vw,3rem)] font-black text-white leading-[1.06] tracking-tight mb-5">
                Op een steenworp van het centrum van Breda.
              </h2>
              <p className="text-white/65 text-base md:text-lg leading-relaxed mb-4">
                Sinds september 2025 zitten we weer in het centrum van Breda. In het monumentale pand waar vroeger de Drie Hoefijzers-brouwerij gevestigd was, op vijf minuten lopen van Station Breda.
              </p>
              <p className="text-white/65 text-base md:text-lg leading-relaxed mb-6">
                Werkruimte voor het hele Webgrowth-team. Je bent welkom op afspraak, koffie staat klaar.
              </p>
              <a
                href={mapsLinkOut}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#a78bfa] hover:text-white text-sm font-semibold transition-colors"
              >
                Open in Google Maps <span aria-hidden>↗</span>
              </a>
            </div>

            <div className="rounded-3xl border border-white/10 overflow-hidden" style={{ background: "rgba(255,255,255,0.03)" }}>
              <div className="aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[420px] w-full">
                <MapsEmbedConsent
                  src={mapsEmbedSrc}
                  title="Webgrowth Company op Ceresstraat 13, Breda"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Eind-CTA */}
        <section className="px-5 sm:px-8 py-20">
          <div className="max-w-7xl mx-auto">
            <div
              className="rounded-3xl border border-[#ff0096]/25 p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,0,150,0.08) 0%, rgba(98,59,199,0.08) 100%)",
              }}
            >
              <div>
                <p className="font-[family-name:var(--font-gottak)] text-white text-3xl md:text-4xl font-black leading-tight mb-2">
                  Klaar voor het eerste gesprek?
                </p>
                <p className="text-white/65 text-base md:text-lg leading-relaxed max-w-xl">
                  Dertig minuten kennismaken, gratis en online. Je beslist daarna of je een vervolgstap wil.
                </p>
              </div>
              <div className="shrink-0">
                <CtaButton href="/contact" variant="primary">
                  Plan kennismaking
                </CtaButton>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
