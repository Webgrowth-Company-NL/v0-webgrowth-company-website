import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Calculator, MessageCircle, Gauge, Search, Database } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://webgrowth.company"),
  title: "Tornado Rent: een reserveringssysteem dat werkt voor B2B verhuur | Webgrowth",
  description: "Hoe wij voor Tornado Rent een live prijscalculator, datumselectie, WhatsApp-notificaties en een 100% SEO Proof fundering bouwden in Next.js. Een eerlijk verhaal over de techniek achter een MKB-website die wel converteert.",
  keywords: ["reserveringssysteem laten bouwen", "B2B prijscalculator Next.js", "case study Tornado Rent", "WhatsApp lead notificaties", "Firestore CMS website", "snelle MKB website"],
  openGraph: {
    title: "Tornado Rent: een reserveringssysteem dat werkt voor B2B verhuur",
    description: "Live prijscalculator, datumselectie, WhatsApp-notificaties en een 100% SEO Proof fundering. De techniek achter de Tornado Rent website.",
    type: "article",
    locale: "nl_NL",
    siteName: "Webgrowth",
    url: "https://webgrowth.company/succesverhalen/tornado-rent",
    images: [
      {
        url: "/images/clients/tornado-rent/hero.jpg",
        width: 1800,
        height: 1200,
        alt: "VAC-EX grondzuigmachine van Tornado Rent op trailer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tornado Rent: een reserveringssysteem dat werkt",
    description: "Live prijscalculator, WhatsApp-notificaties en 100% SEO Proof. De techniek achter Tornado Rent.",
    images: ["/images/clients/tornado-rent/hero.jpg"],
  },
  alternates: {
    canonical: "https://webgrowth.company/succesverhalen/tornado-rent",
  },
}

const client = {
  name: "Tornado Rent",
  product: "VAC-EX grondzuigverhuur",
  sector: "Infra en bouw",
  location: "Rhoon",
  serviceArea: "Nederland en België",
  url: "https://tornado.rent",
  stack: "Next.js 16 + Firestore",
  livegang: "2025",
}

const pillars = [
  {
    icon: Calendar,
    title: "Reserveringssysteem",
    desc: "Live prijsberekening, slimme datumkiezer en een WhatsApp-melding bij Marcel zodra er een aanvraag binnenkomt.",
  },
  {
    icon: Gauge,
    title: "Snel op mobiel",
    desc: "Foto's worden automatisch licht gemaakt, content wordt vooraf klaargezet. De Google snelheidstest scoort in het groen.",
  },
  {
    icon: Search,
    title: "Klaar voor Google",
    desc: "Google snapt direct welk bedrijf dit is, wat ze verhuren, waar ze zitten en wat het kost. Vanaf dag één.",
  },
]

const sections: { heading: string; paragraphs: string[] }[] = [
  {
    heading: "De uitdaging: een verhuurproces dat normaal alleen via de telefoon ging",
    paragraphs: [
      "Tornado Rent verhuurt VAC-EX grondzuigmachines voor schadevrij graven rondom kabels, leidingen en boomwortels. Het is een nichemarkt waarin technische precisie telt. Aannemers en infrabedrijven willen weten welke machine geschikt is, voor hoe lang ze die nodig hebben en wat de totale kosten zijn inclusief transport. Voorheen ging dat allemaal via de telefoon. Marcel beantwoordde dezelfde vragen, deed dezelfde rekensommen en mailde dezelfde prijsindicaties. Tijd die hij beter aan zijn klanten kon besteden.",
      "Het doel was duidelijk. De website moest het verhuurproces grotendeels zelf afhandelen. Een aannemer moet zonder tussenkomst van Marcel een reservering kunnen plaatsen, met de juiste machine, de juiste periode en een correcte prijsindicatie. En die aanvraag moet niet ergens in een mailbox verdwijnen. Marcel moet binnen seconden weten dat er een lead binnen is.",
      "Daar bovenop moest de site vanaf dag één goed scoren in Google. Want in een niche zoals deze begint elke klantreis met een zoekopdracht. Wie niet vindbaar is, bestaat niet.",
    ],
  },
  {
    heading: "Het reserveringssysteem: het hart van de site",
    paragraphs: [
      "Wij hebben geen standaard contactformulier gebouwd, maar een echte reserveringsflow. De bezoeker kiest een pakket: losse machine, complete set of bemande complete set. Daarna selecteert hij de specifieke machine, netjes gegroepeerd per categorie. En vervolgens kiest hij een startdatum en retourdatum in een Nederlandse kalender.",
      "Hier zit de eerste slimmigheid. Zodra iemand een startdatum kiest, vult het systeem automatisch een retourdatum één week later in. De minimale huurperiode is een week, dus dat is bijna altijd het goede startpunt. De gebruiker hoeft alleen aan te passen als hij langer wil. Datums die te dichtbij liggen, zijn niet aanklikbaar, want we moeten transport en logistiek nog kunnen plannen.",
      "En terwijl iemand invult, ziet hij meteen de totale prijs. Aantal weken keer weekprijs, plus transport als hij dat aankruist (twee keer 285 euro voor heen en terug). Op desktop schuift een prijskaart mee terwijl je doorscrolt. Op mobiel verschijnt er onderaan een vaste balk met het totaal en een aanvraagknop. De bezoeker weet altijd waar hij aan toe is, geen verrassingen.",
    ],
  },
  {
    heading: "Een WhatsApp-melding bij Marcel binnen seconden",
    paragraphs: [
      "Zodra de aanvraag wordt verstuurd, gebeurt er achter de schermen van alles tegelijk. De aanvraag wordt opgeslagen in het Forester OS dashboard, met alle gegevens netjes bij elkaar. Naam, bedrijf, gekozen machine, periode, transport en het totaalbedrag. Marcel kan op elk moment terugkijken wat er is binnengekomen.",
      "En dan de echte goudmijn. Marcel krijgt direct een WhatsApp-melding op zijn telefoon met de volledige aanvraag. Hij ziet binnen seconden dat er een nieuwe reservering is en kan direct reageren via een kanaal waar zijn doelgroep ook op zit. Geen mail die tussen nieuwsbrieven verdwijnt, geen systeem dat hij eerst moet openen. Gewoon een berichtje, zoals hij dat ook met klanten doet.",
      "Mocht de WhatsApp-koppeling om wat voor reden ook even niet werken, dan blijft de aanvraag gewoon staan in het dashboard. De klant krijgt zijn bevestiging, Marcel ziet het bij zijn volgende check. Niets gaat verloren.",
    ],
  },
  {
    heading: "Snel op mobiel, ook met 4G",
    paragraphs: [
      "Een trage website kost je leads. Daar zijn we vanaf het begin streng op. Foto's worden automatisch in moderne, lichtere formaten geleverd, zodat ze sneller laden zonder kwaliteitsverlies. De grote foto bovenaan krijgt voorrang en staat meteen in beeld, andere foto's worden pas geladen wanneer je ze tegenkomt tijdens het scrollen.",
      "Content wordt vooraf klaargezet en op een snelle plek opgeslagen, zodat de pagina razendsnel verschijnt. Past Marcel een prijs aan of voegt hij een machine toe? Dan is dat binnen een minuut zichtbaar voor bezoekers. Geen wachttijd, geen tussenkomst van een developer.",
      "Het resultaat: de Google PageSpeed-test, dé manier waarop Google de snelheid van een website meet, kleurt van begin af aan groen. Niet omdat we de site achteraf hebben opgeknapt, maar omdat de basis vanaf dag één klopt.",
    ],
  },
  {
    heading: "Klaar voor Google: vindbaar in een technische niche",
    paragraphs: [
      "In een markt zoals grondzuigverhuur tellen de exacte zoektermen. Aannemers zoeken op grondzuigmachine huren, op schadevrij graven of op VAC-EX. Wij hebben de site zo opgebouwd dat Google in één oogopslag begrijpt waar Tornado Rent over gaat: een verhuurbedrijf voor grondzuigmachines, gevestigd in Rhoon, actief in Nederland en België, met drie pakketten en duidelijke prijzen.",
      "Die informatie hebben we niet alleen op de pagina gezet voor bezoekers, maar ook in een formaat dat Google direct kan lezen. Adres, telefoon, werkgebied en zelfs de prijscatalogus staan onzichtbaar in de code, gekoppeld aan wat er zichtbaar op de site staat. Past Marcel een prijs aan? Dan klopt het in beide plekken tegelijk. Want Google houdt niet van inconsistenties.",
      "Dat is wat wij 100% SEO Proof noemen. Niet de belofte dat je morgen bovenaan staat, want dat hangt van veel meer factoren af. Wel de zekerheid dat alle signalen die Google gebruikt om jouw site te beoordelen, vanaf dag één correct staan. Klaar om gevonden te worden, en klaar om dat te blijven.",
    ],
  },
  {
    heading: "Geen WordPress-gedoe achter de schermen",
    paragraphs: [
      "Wat Tornado Rent vooral oplevert, is rust achter de schermen. Geen WordPress-installatie die elke maand om beveiligingsupdates vraagt. Geen plugins die met elkaar conflicteren, geen thema dat na een update zomaar kapot gaat, geen losse SEO-plugin die het verschil maakt tussen wel of niet vindbaar.",
      "Marcel logt in op het Forester OS dashboard, past aan wat hij wil aanpassen, en het staat live. Geen training nodig, het werkt zoals hij verwacht. Wij houden de techniek up-to-date op de achtergrond, zonder dat hij daar iets van merkt. Zo hoort een website voor het MKB te werken.",
      "Wil je weten of jouw bedrijf hetzelfde verdient? We kijken graag mee. Geen verkoopgesprek vooraf, gewoon een eerlijke beoordeling van wat er kan op basis van jouw situatie.",
    ],
  },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Tornado Rent: een reserveringssysteem dat werkt voor B2B verhuur",
  description: "Hoe Webgrowth voor Tornado Rent een live prijscalculator, datumselectie, WhatsApp-notificaties en een 100% SEO Proof fundering bouwde in Next.js.",
  datePublished: "2026-04-30",
  url: "https://webgrowth.company/succesverhalen/tornado-rent",
  image: "https://webgrowth.company/images/clients/tornado-rent/hero.jpg",
  about: {
    "@type": "Organization",
    name: "Tornado Rent B.V.",
    url: "https://tornado.rent",
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

export default function TornadoRentCase() {
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
              <span className="text-white/55 text-xs">{client.location}</span>
            </div>

            <h1 className="font-[family-name:var(--font-gottak)] text-[clamp(2rem,5vw,3.5rem)] font-black text-white leading-[1.06] tracking-tight mb-6">
              Een reserveringssysteem dat{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #ff0096 0%, #623bc7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                écht voor B2B verhuur werkt.
              </span>
            </h1>

            <p className="text-white/70 text-lg leading-relaxed mb-10">
              Tornado Rent verhuurt grondzuigmachines aan aannemers en infrabedrijven. Wij bouwden een website met een live prijscalculator, datumkiezer, WhatsApp-notificaties naar de eigenaar en een 100% SEO Proof fundering. Geen formulier dat in een mailbox verdwijnt, maar een verhuurflow die werkt.
            </p>
          </div>
        </section>

        {/* Hero image */}
        <div className="px-5 sm:px-8 mb-14">
          <div className="max-w-4xl mx-auto relative h-72 md:h-[460px] rounded-2xl overflow-hidden border border-white/8">
            <Image
              src="/images/clients/tornado-rent/hero.jpg"
              alt="VAC-EX grondzuigmachine van Tornado Rent op trailer achter bedrijfswagen"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 1024px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0818]/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
              <div className="bg-white rounded-2xl p-2 shadow-lg">
                <Image
                  src="/images/clients/tornado-rent/favicon.png"
                  alt="Tornado Rent logo"
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
                Bekijk live: tornado.rent
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
                <dt className="text-white/40 text-xs mb-1">Werkgebied</dt>
                <dd className="text-white text-sm font-medium">{client.serviceArea}</dd>
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

        {/* Reserveringssysteem feature-block */}
        <div className="px-5 sm:px-8 mb-20">
          <div className="max-w-3xl mx-auto rounded-2xl border border-[#ff0096]/20 overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(255,0,150,0.05) 0%, rgba(98,59,199,0.05) 100%)" }}>
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto md:min-h-[300px]">
                <Image
                  src="/images/clients/tornado-rent/machine.jpg"
                  alt="T-VAC 2 grondzuigmachine in actie"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-7 flex flex-col justify-center">
                <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-3">Goud-waard onderdeel</p>
                <h3 className="font-[family-name:var(--font-gottak)] text-2xl font-black text-white mb-4 leading-tight">
                  Live prijs, slimme datums, WhatsApp naar Marcel
                </h3>
                <ul className="space-y-2.5">
                  {[
                    { icon: Calculator, text: "Prijs wordt live berekend tijdens het invullen" },
                    { icon: Calendar, text: "Datumkiezer in het Nederlands, met slimme defaults" },
                    { icon: MessageCircle, text: "WhatsApp-melding bij Marcel binnen seconden" },
                    { icon: Database, text: "Aanvraag wordt direct opgeslagen in het Forester OS dashboard" },
                  ].map((f, i) => {
                    const Icon = f.icon
                    return (
                      <li key={i} className="flex items-start gap-2.5">
                        <Icon className="w-4 h-4 text-[#a78bfa] mt-0.5 shrink-0" strokeWidth={2} />
                        <span className="text-white/75 text-sm leading-relaxed">{f.text}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
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
              <p className="text-white font-semibold text-base mb-2">Wil jij ook een website die het werk doet?</p>
              <p className="text-white/60 text-sm mb-5 leading-relaxed">
                Wij kijken naar jouw verhuur of dienstverleningsproces en bouwen er een flow omheen die jou tijd bespaart en leads oplevert.
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
