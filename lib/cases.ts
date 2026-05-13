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
  /** Optional tile background for the compact-card logo treatment. If unset, the card uses `img` as a photo. */
  thumbBg?: string;
  liveUrl: string;
  liveLabel: string;
  metaTitle: string;
  metaDescription: string;
};

export const CASE_STUDIES: CaseStudy[] = [
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
    slug: "mind-movement",
    client: "Mind Movement",
    sector: "Mentaal welzijn",
    location: "Online",
    headlineLead: "Een audio-bibliotheek voor",
    headlineHighlight: "rust, slaap en focus.",
    intro:
      "Mind Movement helpt mensen met dagelijkse mindfulness en mentaal welzijn. We bouwden de 22-paginas tellende website plus een eigen audio-CMS waarmee programma's voor slaap en angst publicatie-klaar worden gezet. Firebase als ruggengraat, een design dat tot rust noodt.",
    pillars: ["Audio-bibliotheek", "Eigen CMS", "Firebase-stack"],
    features: [
      { label: "Audio-bibliotheek", body: "Programma's voor slaap, angst en focus, met theorie- en praktijk-tracks per dag." },
      { label: "Eigen CMS", body: "Het team van Mind Movement zet zelf programma's en pagina's live, zonder developer." },
      { label: "Firebase-stack", body: "Firestore voor content, Cloud Functions voor de zwaardere mechaniek, alles realtime." },
    ],
    img: "/images/clients/mind-movement.png",
    imgAlt: "Mind Movement logo",
    logo: "/images/clients/mind-movement.png",
    thumbBg: "#ece8fa",
    liveUrl: "https://mindmovement.app",
    liveLabel: "mindmovement.app",
    metaTitle: "Case Mind Movement: audio-bibliotheek met eigen CMS | Webgrowth",
    metaDescription:
      "Hoe we voor Mind Movement een rustige audio-bibliotheek met eigen CMS bouwden, gestaffeld via slaap- en angstprogramma's op een Firebase-stack.",
  },
  {
    slug: "mol-logistics",
    client: "MOL Logistics",
    sector: "Logistiek & transport",
    location: "Nederland",
    headlineLead: "Een corporate site met",
    headlineHighlight: "een eigen volumecalculator.",
    intro:
      "MOL Logistics is een internationale transporteur. We herbouwden de corporate website met een lichte ACF-laag voor flexibele templates, een vacaturecentrum en een volumecalculator die operationeel samenwerkt met het forwarding-team.",
    pillars: ["Vacaturecentrum", "Volumecalculator", "ACF templates"],
    features: [
      { label: "Vacaturecentrum", body: "Vacatures als CPT, met sjabloon-paginas voor cultuur, sollicitatieproces en gerelateerde rollen." },
      { label: "Volumecalculator", body: "Een tool waarmee klanten zelf inschatten hoeveel pallets, kuubs en gewicht hun zending wordt." },
      { label: "ACF-templates", body: "Het marketing-team beheert teksten, hero's en cases zelf via Custom Fields, geen Breakdance-editor nodig." },
    ],
    img: "/images/clients/mol-logistics.png",
    imgAlt: "MOL Logistics logo",
    logo: "/images/clients/mol-logistics.png",
    thumbBg: "#e8eef7",
    liveUrl: "https://mol-logistics.nl",
    liveLabel: "mol-logistics.nl",
    metaTitle: "Case MOL Logistics: corporate site met volumecalculator | Webgrowth",
    metaDescription:
      "Hoe we voor MOL Logistics een corporate WordPress-site bouwden met ACF-templates, een vacaturecentrum en een eigen volumecalculator.",
  },
  {
    slug: "the-africa-experience",
    client: "The Africa Experience",
    sector: "Reizen & safari",
    location: "Online",
    headlineLead: "Een reisplatform voor",
    headlineHighlight: "Afrika op maat.",
    intro:
      "The Africa Experience stelt op maat gemaakte Afrika-reizen samen. We bouwden hun reisplatform met een beheerbare catalogus van bestemmingen, lodges en activiteiten, plus een offerteflow die direct in de CRM-pijplijn van het reisteam landt.",
    pillars: ["Reiscatalogus", "Offerteflow", "CRM-integratie"],
    features: [
      { label: "Reiscatalogus", body: "Bestemmingen, lodges en activiteiten als CPT's, met sjabloon-pagina's voor elk land en park." },
      { label: "Offerteflow", body: "Een meerstaps formulier waarin reizigers reis, lodge en activiteiten samenstellen voordat ze offerte aanvragen." },
      { label: "CRM-integratie", body: "Elke aanvraag landt direct in de pijplijn van het reisteam, met alle reisdetails als gestructureerde notitie." },
    ],
    img: "/images/clients/the-africa-experience.png",
    imgAlt: "The Africa Experience logo",
    logo: "/images/clients/the-africa-experience.png",
    thumbBg: "#fdf2dc",
    liveUrl: "https://theafricaexperience.com",
    liveLabel: "theafricaexperience.com",
    metaTitle: "Case The Africa Experience: platform voor reizen op maat | Webgrowth",
    metaDescription:
      "Hoe we voor The Africa Experience een reisplatform bouwden met een beheerbare catalogus van bestemmingen, lodges en activiteiten plus een offerteflow.",
  },
];

export function caseBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
