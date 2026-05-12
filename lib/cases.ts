export type CaseFeature = { label: string; body: string };

export type CaseStudy = {
  slug: string;
  client: string;
  sector: string;
  location: string;
  headlineLead: string;
  headlineHighlight: string;
  intro: string;
  pillars: string[];
  features: CaseFeature[];
  img: string;
  imgAlt: string;
  logo: string;
  liveUrl: string;
  liveLabel: string;
  metaTitle: string;
  metaDescription: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "tornado-rent",
    client: "Tornado Rent",
    sector: "Infra & bouw",
    location: "Rhoon",
    headlineLead: "Een reserveringssysteem",
    headlineHighlight: "dat écht voor B2B-verhuur werkt.",
    intro:
      "Tornado Rent verhuurt grondzuigmachines aan aannemers en infrabedrijven. We bouwden een website met een live prijscalculator, een slimme datumkiezer en WhatsApp-meldingen naar de eigenaar zodra er een aanvraag binnenkomt. Plus 100% SEO Proof opgeleverd, klaar voor Google vanaf dag één.",
    pillars: ["Live prijscalculator", "WhatsApp-meldingen", "100% SEO Proof"],
    features: [
      { label: "Live prijsberekening", body: "Pakket, periode en transport. Alles wordt live doorgerekend terwijl de klant invult." },
      { label: "WhatsApp bij Marcel", body: "Zodra er een aanvraag binnenkomt, krijgt hij een berichtje. Geen mailbox die overstroomt." },
      { label: "100% SEO Proof", body: "Metadata, structured data en prijscatalogus correct ingericht. Vindbaar vanaf de livegang." },
    ],
    img: "/images/clients/tornado-rent-hero.jpg",
    imgAlt: "VAC-EX grondzuigmachine van Tornado Rent op trailer",
    logo: "/images/clients/tornado-rent.png",
    liveUrl: "https://tornado.rent",
    liveLabel: "tornado.rent",
    metaTitle: "Case Tornado Rent: reserveringssysteem voor B2B-verhuur | Webgrowth",
    metaDescription:
      "Hoe we voor Tornado Rent een website bouwden met live prijscalculator, slimme datumkiezer en WhatsApp-meldingen, 100% SEO Proof opgeleverd.",
  },
  {
    slug: "adalace",
    client: "Adalace",
    sector: "Compliance-software",
    location: "Vastgoedbeheer",
    headlineLead: "Een Quickscan",
    headlineHighlight: "die compliance concreet maakt.",
    intro:
      "Adalace helpt vastgoedbeheerders hun keuringen en certificaten op orde te krijgen. We bouwden de Quickscan: een vijf-stappen wizard die in een paar minuten laat zien wat er voor jouw pand verplicht is. Met automatische BAG-koppeling en een persoonlijk PDF-rapport als afsluiter.",
    pillars: ["5-stappen wizard", "BAG- & Kadaster-koppeling", "PDF-rapport op maat"],
    features: [
      { label: "Vijf-stappen wizard", body: "Adres, functie, triggers, installaties, resultaat. Lichte vragen, concrete uitkomst." },
      { label: "BAG en Kadaster", body: "Bouwjaar, oppervlakte en gebruiksdoel komen automatisch uit overheidsdata." },
      { label: "PDF op maat", body: "Aan het einde een rapport met de exacte lijst voor dit specifieke pand." },
    ],
    img: "/images/clients/adalace-hero.jpg",
    imgAlt: "Schoolgebouw met veilige leeromgeving, beheerd via Adalace",
    logo: "/images/clients/adalace.png",
    liveUrl: "https://adalace.webgrowth.company",
    liveLabel: "adalace.webgrowth.company",
    metaTitle: "Case Adalace: Quickscan-wizard voor vastgoed-compliance | Webgrowth",
    metaDescription:
      "Hoe we voor Adalace de Quickscan bouwden: een vijf-stappen wizard met BAG-koppeling en een PDF-rapport op maat voor vastgoedbeheerders.",
  },
];

export function caseBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
