export type CaseFeature = {
  label: string
  body: string
}

export type Case = {
  slug: string
  client: string
  sector: string
  location: string
  titleLead: string
  titleHighlight: string
  intro: string
  pillars: string[]
  features: CaseFeature[]
  img: string
  imgAlt: string
  logo: string
  logoIsIcon: boolean
  liveUrl: string
  liveLabel: string
}

export const cases: Case[] = [
  {
    slug: "tornado-rent",
    client: "Tornado Rent",
    sector: "Infra en bouw",
    location: "Rhoon",
    titleLead: "Een reserveringssysteem",
    titleHighlight: "dat écht voor B2B verhuur werkt.",
    intro:
      "Tornado Rent verhuurt grondzuigmachines aan aannemers en infrabedrijven. Wij bouwden een website met een live prijscalculator, een slimme datumkiezer en WhatsApp-meldingen naar de eigenaar zodra er een aanvraag binnenkomt. Plus 100% SEO Proof opgeleverd, klaar voor Google vanaf dag één.",
    pillars: ["Reserveringssysteem", "Snel op mobiel", "Klaar voor Google"],
    features: [
      {
        label: "Live prijsberekening",
        body: "Pakket, periode en transport. Alles wordt live doorgerekend terwijl de klant invult.",
      },
      {
        label: "WhatsApp bij Marcel",
        body: "Zodra er een aanvraag binnenkomt, krijgt hij een berichtje. Geen mailbox die overstroomt.",
      },
      {
        label: "100% SEO Proof",
        body: "Metadata, structured data en prijscatalogus correct ingericht. Vindbaar vanaf de livegang.",
      },
    ],
    img: "/images/clients/tornado-rent/hero.jpg",
    imgAlt: "VAC-EX grondzuigmachine van Tornado Rent op trailer",
    logo: "/images/clients/tornado-rent/favicon.png",
    logoIsIcon: true,
    liveUrl: "https://tornado.rent",
    liveLabel: "tornado.rent",
  },
  {
    slug: "adalace",
    client: "Adalace",
    sector: "Compliance SaaS",
    location: "Vastgoedbeheer",
    titleLead: "Een Quickscan",
    titleHighlight: "die compliance concreet maakt.",
    intro:
      "Adalace helpt vastgoedbeheerders hun keuringen en certificaten op orde te krijgen. Wij bouwden de Quickscan: een vijf-stappen wizard die in een paar minuten laat zien wat er voor jouw pand verplicht is. Met automatische BAG-koppeling en een persoonlijk PDF-rapport als afsluiter.",
    pillars: ["Quickscan-wizard", "BAG-data ingebakken", "PDF-rapport op maat"],
    features: [
      {
        label: "Vijf-stappen wizard",
        body: "Adres, functie, triggers, installaties, resultaat. Lichte vragen, concrete uitkomst.",
      },
      {
        label: "BAG en Kadaster",
        body: "Bouwjaar, oppervlakte en gebruiksdoel komen automatisch uit overheidsdata.",
      },
      {
        label: "PDF op maat",
        body: "Aan het einde een rapport met de exacte lijst voor dit specifieke pand.",
      },
    ],
    img: "/images/clients/adalace/hero.jpg",
    imgAlt: "Basisschoolgebouw met veilige leeromgeving, beheerd via Adalace",
    logo: "/images/clients/adalace/logo.png",
    logoIsIcon: false,
    liveUrl: "https://adalace.webgrowth.company",
    liveLabel: "adalace.webgrowth.company",
  },
]
