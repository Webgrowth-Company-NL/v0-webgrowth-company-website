import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, MapPin, FileSearch, FileCheck2, Database, Building2, Users } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://webgrowth.company"),
  title: "Adalace: een Quickscan die compliance concreet maakt voor vastgoedbeheer | Webgrowth",
  description: "Hoe wij voor Adalace een slimme Quickscan bouwden die in vijf stappen aan elke beheerder laat zien welke keuringen en certificaten verplicht zijn. Met automatische BAG-koppeling en een persoonlijk PDF-rapport.",
  keywords: ["Adalace Quickscan", "compliance vastgoedbeheer", "lead generation tool MKB", "BAG koppeling Kadaster", "PDF rapport generator", "facility management software"],
  openGraph: {
    title: "Adalace: een Quickscan die compliance concreet maakt",
    description: "Slimme wizard die in vijf stappen aan elke beheerder laat zien welke keuringen verplicht zijn. Met BAG-koppeling en persoonlijk PDF-rapport.",
    type: "article",
    locale: "nl_NL",
    siteName: "Webgrowth",
    url: "https://webgrowth.company/succesverhalen/adalace",
    images: [
      {
        url: "/images/clients/adalace/hero.jpg",
        width: 2560,
        height: 1707,
        alt: "Basisschoolgebouw met veilige leeromgeving, beheerd via Adalace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adalace: een Quickscan die compliance concreet maakt",
    description: "Slimme wizard met BAG-koppeling en persoonlijk PDF-rapport.",
    images: ["/images/clients/adalace/hero.jpg"],
  },
  alternates: {
    canonical: "https://webgrowth.company/succesverhalen/adalace",
  },
}

const client = {
  name: "Adalace",
  product: "Compliance SaaS voor vastgoedbeheer",
  sector: "Facility management",
  doelgroep: "Scholen, kinderopvang, zorg en sport",
  url: "https://adalace.webgrowth.company",
  stack: "WordPress + Forester OS",
  livegang: "2025",
}

const pillars = [
  {
    icon: FileSearch,
    title: "Slimme Quickscan",
    desc: "Vijf-stappen wizard die per gebouw de verplichte keuringen en certificaten op een rij zet.",
  },
  {
    icon: Database,
    title: "BAG-data ingebakken",
    desc: "De gebruiker typt alleen het adres. Bouwjaar, oppervlakte en gebruiksdoel halen wij automatisch op.",
  },
  {
    icon: FileCheck2,
    title: "Persoonlijk PDF-rapport",
    desc: "Aan het einde ontvangt de bezoeker een rapport op maat. Een sterke ruil voor zijn contactgegevens.",
  },
]

const wizardSteps = [
  { label: "Adres", desc: "Met autocomplete" },
  { label: "Functie", desc: "Soort gebouw" },
  { label: "Triggers", desc: "Bijzonderheden" },
  { label: "Installaties", desc: "5 ja/nee vragen" },
  { label: "Resultaat", desc: "Persoonlijke lijst" },
]

const sections: { heading: string; paragraphs: string[] }[] = [
  {
    heading: "De uitdaging: compliance is abstract, en daarom wordt het uitgesteld",
    paragraphs: [
      "Adalace is een SaaS die vastgoedbeheerders helpt om hun keuringsdocumenten en certificaten op orde te krijgen. De doelgroep zijn facility managers in basisscholen, kinderopvang, zorginstellingen en sportaccommodaties. Mensen die elke dag verantwoordelijk zijn voor een gebouw vol kinderen, patiënten of sporters, en die ondertussen ook moeten zorgen dat de stookinstallatie, de personenlift en de automatische deur op tijd zijn gekeurd.",
      "Het probleem in deze markt is niet onwetendheid, het is overweldiging. Wettelijke eisen verschillen per gebouwtype, per oppervlakte, per bouwjaar en per aanwezige installatie. Een facility manager weet dat er iets moet, maar weet niet precies wat er voor zijn specifieke pand geldt. En zolang het abstract blijft, blijft het op de stapel liggen.",
      "Adalace kwam bij ons met een vraag die zich concreet liet vertalen. Maak van die abstracte plicht iets tastbaars. Zorg dat een bezoeker binnen een paar minuten ziet wat er voor zijn pand geldt, zonder een offerte op te vragen of een gesprek in te plannen. Dan komen ze vanzelf terug om het werkelijk op te lossen.",
    ],
  },
  {
    heading: "De Quickscan: vijf stappen naar duidelijkheid",
    paragraphs: [
      "Wij hebben geen contactformulier gebouwd, maar een wizard die de bezoeker stap voor stap door de juiste vragen leidt. Elke stap voelt licht, omdat we alleen vragen wat we niet zelf kunnen achterhalen. Stap één is het adres, met autocomplete tijdens het typen. Stap twee is de functie van het gebouw als die niet eenduidig uit de overheidsdata komt. Stap drie zijn een paar specifieke triggers, zoals kinderopvang of een monumentenstatus. Stap vier zijn vijf simpele ja-of-nee vragen over installaties (stookinstallatie boven 100 kW, koeling boven 12 kW, automatische deuren, zonnepanelen, personenlift).",
      "En dan stap vijf: een persoonlijk overzicht van alle elementen en documenten die voor dit specifieke pand verplicht zijn. Geen algemene checklist, maar een lijst die past bij dit gebouw, deze functie en deze installaties. De bezoeker ziet meteen wat er gevraagd wordt, en wat hij dus aan Adalace zou moeten uitbesteden.",
      "Door de wizard-vorm voelt het niet als een formulier, maar als een tool. Bezoekers die anders zouden afhaken bij de eerste vraag, blijven hangen omdat elke stap kort is en omdat ze gaandeweg waarde voelen.",
    ],
  },
  {
    heading: "Het systeem doet het voorwerk via overheidsdata",
    paragraphs: [
      "De grote slimmigheid zit in wat de gebruiker niet hoeft in te vullen. Zodra hij een adres kiest, halen wij automatisch alle relevante metadata op. Bouwjaar, oppervlakte en het officiële gebruiksdoel uit de Basisregistratie Adressen en Gebouwen (BAG) en uit de gegevens van het Kadaster. Dat is de bron die de overheid zelf gebruikt om vastgoed te identificeren, dus de data klopt en is up-to-date.",
      "Voor de bezoeker betekent dat een wizard die aanvoelt alsof hij hem kent. Adres invullen, en hop, het systeem weet al dat het een schoolgebouw is uit 1978 van 4.200 vierkante meter. De bezoeker hoeft alleen nog te bevestigen of hij in de juiste richting wordt geduwd.",
      "Achter de schermen vraagt het systeem twee bronnen tegelijk aan, vergelijkt de antwoorden en kiest de meest betrouwbare. Mocht een van de bronnen even niet bereikbaar zijn, dan vangt de andere het op. De bezoeker merkt daar niets van. Het werkt gewoon.",
    ],
  },
  {
    heading: "Een persoonlijk rapport als bedankje voor de aanvraag",
    paragraphs: [
      "Aan het einde van de Quickscan staat de bezoeker voor een keuze. Hij ziet de samenvatting op het scherm, en kan voor het volledige rapport zijn naam, e-mail en bedrijfsnaam invullen. Direct daarna ontvangt hij een PDF met alle verplichte elementen voor zijn pand, in een nette opmaak die hij intern kan delen of doorsturen naar collega's.",
      "Voor Adalace is dit goud waard. Niet de bezoeker die op contact klikt, maar de bezoeker die door de Quickscan is gegaan, blijkt later de meest waardevolle lead. Hij heeft tien minuten geïnvesteerd in concrete vragen, hij heeft zijn pand bekeken en hij heeft een rapport ontvangen waarin hij ziet wat er allemaal nog moet gebeuren. Op het moment dat Adalace contact opneemt, weet de bezoeker al wat hij wil.",
      "Het PDF-rapport zelf is volledig op maat. Logo, kleuren en opmaak van Adalace, de pandgegevens van deze specifieke aanvraag, de exacte lijst met verplichte documenten. Daarmee fungeert het rapport ook als een visitekaartje. De facility manager deelt het intern, collega's zien Adalace, en de naamsbekendheid groeit zonder extra advertentiebudget.",
    ],
  },
  {
    heading: "Vier doelgroepen, één Quickscan, vier opvolgflows",
    paragraphs: [
      "Adalace bedient vier groepen tegelijk: basisscholen, kinderopvang, zorginstellingen en sportaccommodaties. Elk met eigen wettelijke kaders en eigen taal. Wij hebben de Quickscan zo opgebouwd dat hij automatisch de juiste regels toepast op basis van het gebouwtype dat uit de BAG-data komt. De facility manager merkt daar niets van. Hij krijgt gewoon de antwoorden die voor zijn situatie kloppen.",
      "Achter de schermen koppelen we de uitkomst van de Quickscan ook aan de juiste doelgroeppagina van de marketingsite. Een schoolbeheerder krijgt een vervolgmail die over scholen gaat, een sportclub-beheerder krijgt iets dat past bij sportaccommodaties. Geen generieke nieuwsbrief, maar opvolging die voelt alsof Adalace echt naar zijn situatie heeft gekeken.",
      "Alles draait op Forester OS, ons platform op basis van Next.js en Firebase. De Quickscan is een tool die we kunnen embedden in de live WordPress-site van Adalace, maar ook in elke toekomstige variant. Toen Adalace besloot om de marketingsite te vernieuwen, konden we de Quickscan zonder aanpassingen meenemen. Geen migratie, geen risico op verlies van leads tijdens de overgang.",
    ],
  },
  {
    heading: "Wat dit voor jouw bedrijf betekent",
    paragraphs: [
      "Een Quickscan is geen plug-and-play widget. Het is een tool die aansluit op jouw vakgebied, jouw doelgroep en jouw vragen. Maar het concept is breed toepasbaar. Overal waar een bezoeker een complex onderwerp niet helemaal kan overzien en jij het wel kunt vertalen naar een persoonlijk antwoord, werkt deze aanpak.",
      "Denk aan een installateur die per pand kan voorrekenen welke warmtepomp-oplossing past. Aan een verzekeraar die per situatie een polisadvies kan tonen. Aan een aannemer die per renovatieproject een richtprijs kan geven. Telkens hetzelfde patroon: de bezoeker krijgt waarde in ruil voor zijn aandacht, en jij krijgt een lead die al bijna klant is.",
      "Wil je weten hoe dat er voor jouw bedrijf uit zou kunnen zien? We kijken graag mee. Geen verkoopgesprek vooraf, gewoon een eerlijke verkenning van wat jouw doelgroep zoekt en hoe wij dat in een tool kunnen vangen.",
    ],
  },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Adalace: een Quickscan die compliance concreet maakt voor vastgoedbeheer",
  description: "Case study over de Adalace Quickscan, een vijf-stappen wizard die compliance-eisen voor vastgoed vertaalt naar een persoonlijk PDF-rapport. Met BAG- en Kadaster-koppeling.",
  datePublished: "2026-04-30",
  url: "https://webgrowth.company/succesverhalen/adalace",
  image: "https://webgrowth.company/images/clients/adalace/hero.jpg",
  about: {
    "@type": "Organization",
    name: "Adalace",
    url: "https://adalace.webgrowth.company",
  },
  author: {
    "@type": "Organization",
    name: "Webgrowth Company",
    url: "https://webgrowth.company",
  },
  publisher: {
    "@type": "Organization",
    name: "Webgrowth",
    url: "https://webgrowth.company",
  },
}

export default function AdalaceCase() {
  return (
    <div className="bg-[#0d0818] min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Navigation />

      <main>
        {/* Header */}
        <section className="relative pt-36 pb-0 px-5 sm:px-8 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#623bc7]/10 blur-[150px] pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <Link
              href="/succesverhalen"
              className="inline-flex items-center gap-2 text-white/55 hover:text-white text-sm mb-8 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Alle succesverhalen
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase">
                Klantcase: {client.name}
              </span>
              <span className="text-white/20 text-xs" aria-hidden>·</span>
              <span className="text-white/55 text-xs">{client.sector}</span>
              <span className="text-white/20 text-xs" aria-hidden>·</span>
              <span className="text-white/55 text-xs">{client.doelgroep}</span>
            </div>

            <h1 className="font-[family-name:var(--font-gottak)] text-[clamp(2rem,5vw,3.5rem)] font-black text-white leading-[1.06] tracking-tight mb-6">
              Een Quickscan die{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                compliance concreet maakt.
              </span>
            </h1>

            <p className="text-white/70 text-lg leading-relaxed mb-10">
              Adalace helpt vastgoedbeheerders hun keuringen en certificaten op orde te krijgen. Wij bouwden de Quickscan: een vijf-stappen wizard die in een paar minuten laat zien wat er voor jouw specifieke pand verplicht is. Met automatische BAG-koppeling en een persoonlijk PDF-rapport als afsluiter.
            </p>
          </div>
        </section>

        {/* Hero image */}
        <div className="px-5 sm:px-8 mb-14">
          <div className="max-w-4xl mx-auto relative h-72 md:h-[460px] rounded-2xl overflow-hidden border border-white/8">
            <Image
              src="/images/clients/adalace/hero.jpg"
              alt="Basisschoolgebouw met veilige leeromgeving, beheerd via Adalace"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 1024px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0818]/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
              <div className="bg-white rounded-2xl p-2 shadow-lg">
                <Image
                  src="/images/clients/adalace/logo.png"
                  alt="Adalace logo"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain rounded-lg"
                />
              </div>
              <a
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs font-semibold px-3.5 py-2 rounded-full hover:bg-white/15 transition-colors"
              >
                Bekijk live: adalace.webgrowth.company
                <span aria-hidden>↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Klant-info card */}
        <div className="px-5 sm:px-8 mb-12">
          <div className="max-w-3xl mx-auto rounded-2xl border border-white/8 p-6" style={{ background: "rgba(255,255,255,0.03)" }}>
            <p className="text-white/55 text-xs font-semibold tracking-widest uppercase mb-4">Over de klant</p>
            <dl className="grid grid-cols-2 sm:grid-cols-4 gap-5">
              <div>
                <dt className="text-white/40 text-xs mb-1">Product</dt>
                <dd className="text-white text-sm font-medium">{client.product}</dd>
              </div>
              <div>
                <dt className="text-white/40 text-xs mb-1">Doelgroep</dt>
                <dd className="text-white text-sm font-medium">{client.doelgroep}</dd>
              </div>
              <div>
                <dt className="text-white/40 text-xs mb-1">Stack</dt>
                <dd className="text-white text-sm font-medium">{client.stack}</dd>
              </div>
              <div>
                <dt className="text-white/40 text-xs mb-1">Live sinds</dt>
                <dd className="text-white text-sm font-medium">{client.livegang}</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Drie pijlers */}
        <div className="px-5 sm:px-8 mb-16">
          <div className="max-w-3xl mx-auto">
            <p className="text-white/55 text-xs font-semibold tracking-widest uppercase mb-5">Wat wij hebben gebouwd</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {pillars.map((p, i) => {
                const Icon = p.icon
                return (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/8 p-5"
                    style={{ background: "rgba(255,255,255,0.03)" }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#ff0096]/15 border border-[#ff0096]/25 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-[#ff0096]" strokeWidth={2} />
                    </div>
                    <p className="text-white font-semibold text-sm mb-1.5">{p.title}</p>
                    <p className="text-white/55 text-xs leading-relaxed">{p.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Goud-waard: 5-stappen wizard */}
        <div className="px-5 sm:px-8 mb-20">
          <div className="max-w-3xl mx-auto rounded-2xl border border-[#ff0096]/20 p-7 md:p-9" style={{ background: "linear-gradient(135deg, rgba(255,0,150,0.05) 0%, rgba(98,59,199,0.05) 100%)" }}>
            <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-3">Goud-waard onderdeel</p>
            <h3 className="font-[family-name:var(--font-gottak)] text-2xl font-black text-white mb-2 leading-tight">
              De Quickscan-wizard in vijf stappen
            </h3>
            <p className="text-white/65 text-sm leading-relaxed mb-7">
              Korte stappen, lichte vragen. De bezoeker hoeft alleen te weten waar zijn pand staat, de rest doen wij.
            </p>

            <ol className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {wizardSteps.map((s, i) => (
                <li
                  key={i}
                  className="rounded-xl border border-white/10 p-4 flex flex-col items-start gap-2"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  <div className="w-7 h-7 rounded-full bg-[#ff0096] text-white text-xs font-black flex items-center justify-center">
                    {i + 1}
                  </div>
                  <p className="text-white text-sm font-semibold leading-snug">{s.label}</p>
                  <p className="text-white/55 text-xs leading-relaxed">{s.desc}</p>
                </li>
              ))}
            </ol>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { icon: MapPin, text: "Adres-autocomplete via Google Places" },
                { icon: Building2, text: "Bouwjaar en functie uit BAG en Kadaster" },
                { icon: Users, text: "Lead direct in Forester OS dashboard" },
              ].map((f, i) => {
                const Icon = f.icon
                return (
                  <div key={i} className="flex items-start gap-2.5">
                    <Icon className="w-4 h-4 text-[#a78bfa] mt-0.5 shrink-0" strokeWidth={2} />
                    <span className="text-white/70 text-xs leading-relaxed">{f.text}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Article */}
        <article className="px-5 sm:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-10 mb-14">
              {sections.map((section, i) => (
                <section key={i}>
                  <h2 className="font-[family-name:var(--font-gottak)] text-xl md:text-2xl font-black text-white mb-4 leading-snug">
                    {section.heading}
                  </h2>
                  <div className="space-y-4">
                    {section.paragraphs.map((p, j) => (
                      <p key={j} className="text-white/70 text-base leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* CTA */}
            <div
              className="rounded-2xl border border-[#ff0096]/20 p-7 mb-14"
              style={{ background: "rgba(255,0,150,0.05)" }}
            >
              <p className="text-white font-semibold text-base mb-2">Wil jij ook een tool die leads kwalificeert terwijl ze invullen?</p>
              <p className="text-white/60 text-sm mb-5 leading-relaxed">
                Wij kijken naar jouw doelgroep en bouwen een Quickscan die voor jouw vakgebied werkt. Concreter dan een formulier, lichter dan een offertegesprek.
              </p>
              <Link
                href="/momentum-scan"
                className="inline-flex items-center gap-2 bg-[#ff0096] hover:bg-[#e6007f] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-200"
              >
                Plan een vrijblijvend gesprek
              </Link>
            </div>

            {/* Back */}
            <div className="pb-24 border-t border-white/8 pt-8">
              <Link
                href="/succesverhalen"
                className="inline-flex items-center gap-2 text-[#a78bfa] text-sm font-semibold hover:text-white transition-colors duration-200"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Terug naar alle succesverhalen
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
