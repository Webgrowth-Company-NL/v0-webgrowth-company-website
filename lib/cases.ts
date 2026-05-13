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
    slug: "mol-logistics",
    client: "MOL Logistics",
    sector: "Logistiek & transport",
    location: "Tilburg",
    headlineLead: "Een corporate platform voor",
    headlineHighlight: "internationaal transport.",
    intro:
      "MOL Logistics is een internationale forwarder met vestigingen door heel Europa. We bouwden de corporate site opnieuw: een vacaturecentrum, een eigen volumecalculator die operationeel samenwerkt met het forwarding-team, en een lichte content-laag waarmee het marketing-team templates zelf beheert.",
    pillars: ["Vacaturecentrum", "Volumecalculator", "Beheerbare templates"],
    features: [
      { label: "Vacaturecentrum", body: "Vacatures als eigen content-type, met sjabloon-pagina's voor cultuur, sollicitatieproces en gerelateerde rollen." },
      { label: "Volumecalculator", body: "Een tool waarmee klanten zelf inschatten hoeveel pallets, kuubs en gewicht hun zending wordt." },
      { label: "Beheerbare templates", body: "Het marketing-team beheert teksten, hero's en cases zelf via een lichte content-laag, zonder developer." },
    ],
    img: "/images/clients/mol-logistics-hero.jpg",
    imgAlt: "MOL Logistics warehouse in Tilburg met heftrucks en containers",
    logo: "/images/clients/mol-logistics.png",
    liveUrl: "https://mol-logistics.eu",
    liveLabel: "mol-logistics.eu",
    metaTitle: "Case MOL Logistics: corporate site met volumecalculator | Webgrowth",
    metaDescription:
      "Hoe we voor MOL Logistics een corporate site bouwden met een vacaturecentrum, een eigen volumecalculator en beheerbare templates voor het marketing-team.",
  },
  {
    slug: "pink-elephant",
    client: "Pink Elephant",
    sector: "IT-consultancy & ITSM",
    location: "Vught",
    headlineLead: "Een ITSM-platform met",
    headlineHighlight: "vijf lead engines.",
    intro:
      "Pink Elephant is een internationale ITSM-consultancy. We bouwden hun website opnieuw met vijf actieve lead engines, een module per dienst en E-Learning, plus een complete rebrand naar pinkelephant.co.uk. Inclusief 744 redirects vanaf de oude domeinen, AI-content suggesties en een lichte CMS-laag waarin het marketing-team zelf beheert.",
    pillars: ["5 lead engines", "Internationale rebrand", "744 redirects"],
    features: [
      { label: "Vijf lead engines", body: "Technology QuickQuote, IT-Support QuickQuote, training-aanmelding, E-Learning demo en het contactformulier, elk met eigen routing en CRM-koppeling." },
      { label: "Internationale rebrand", body: "Begeleiding bij de migratie naar pinkelephant.co.uk: meta's, taal-switches, hreflang en een consistente tone-of-voice." },
      { label: "744 redirects", body: "Alle oude URL's van pinkelephant.co.uk en pinkelephant.nl naar de nieuwe structuur, met bewaakte 200's en zero traffic-verlies." },
    ],
    img: "/images/clients/pink-elephant-hero.webp",
    imgAlt: "Trainingssessie van Pink Elephant met deelnemers achter laptops",
    logo: "/images/clients/pink-elephant.png",
    liveUrl: "https://pinkelephant.co.uk",
    liveLabel: "pinkelephant.co.uk",
    metaTitle: "Case Pink Elephant: ITSM-platform met vijf lead engines | Webgrowth",
    metaDescription:
      "Hoe we voor Pink Elephant een internationaal ITSM-platform bouwden met vijf lead engines, een rebrand naar pinkelephant.co.uk en 744 redirects zonder traffic-verlies.",
  },
  {
    slug: "nordflame",
    client: "NordFlame",
    sector: "Premium verwarming",
    location: "Online",
    headlineLead: "Een premium kachelplatform met",
    headlineHighlight: "twee scan-tools.",
    intro:
      "NordFlame zet premium pelletkachels en hybride pellet+warmtepomp-systemen op de kaart, met Ecodesign 2027 als context. We bouwden de hele site in Next.js met catalogus, twee scan-tools (vervangingsscan + quickscan), Firebase als ruggengraat en een design dat luxe communiceert zonder vol bling te zijn.",
    pillars: ["Vervangingsscan", "Hybride catalogus", "Ecodesign 2027"],
    features: [
      { label: "Vervangingsscan", body: "Een meerstaps lead-flow die in kaart brengt welke kachel jouw oude systeem het beste vervangt, mét rapport." },
      { label: "Hybride catalogus", body: "Productpagina's voor de hybride pellet+warmtepomp-oplossing, inclusief filters en specs per model." },
      { label: "Ecodesign 2027", body: "Een eigen pagina die de aankomende regelgeving uitlegt en NordFlame als oplossing positioneert." },
    ],
    img: "/images/clients/nordflame-hero.png",
    imgAlt: "NordFlame premium pelletkachel-platform",
    logo: "/images/clients/nordflame.png",
    liveUrl: "https://nordflame.nl",
    liveLabel: "nordflame.nl",
    metaTitle: "Case NordFlame: premium kachelplatform met scan-tools | Webgrowth",
    metaDescription:
      "Hoe we voor NordFlame een premium platform bouwden voor pelletkachels en hybride warmtepomp-oplossingen, met een vervangingsscan en quickscan als lead-engines.",
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
    liveUrl: "https://adalace.nl",
    liveLabel: "adalace.nl",
    metaTitle: "Case Adalace: Quickscan-wizard voor vastgoed-compliance | Webgrowth",
    metaDescription:
      "Hoe we voor Adalace de Quickscan bouwden: een vijf-stappen wizard met BAG-koppeling en een PDF-rapport op maat voor vastgoedbeheerders.",
  },
  {
    slug: "de-samenleesclub",
    client: "De Samenleesclub",
    sector: "Cultuur & community",
    location: "Heel Nederland",
    headlineLead: "Een leesclub-platform met",
    headlineHighlight: "een locatiekaart.",
    intro:
      "De Samenleesclub organiseert begeleide samenleessessies door heel Nederland. We bouwden de website met een eigen content-laag voor locaties (Leaflet-kaart die de zalen toont), een aanmeldflow per sessie en SEO-templates per locatie zodat lokale zoekopdrachten een eigen pagina krijgen.",
    pillars: ["Leaflet-locatiekaart", "Aanmeldflow per sessie", "SEO per locatie"],
    features: [
      { label: "Locatiekaart", body: "Een interactieve kaart met alle samenleessessies in Nederland, gegroepeerd per regio en aanklikbaar naar de detailpagina." },
      { label: "Aanmeldflow", body: "Bezoekers melden zich direct aan voor een sessie, de organisator krijgt een melding en de plek staat in het CRM." },
      { label: "SEO per locatie", body: "Elke vestiging heeft een eigen pagina met meta-templates, zodat 'samenlezen in [stad]' lokaal vindbaar is." },
    ],
    img: "/images/clients/samenleesclub-hero.jpg",
    imgAlt: "Mensen die samen lezen tijdens een sessie van De Samenleesclub",
    logo: "/images/clients/samenleesclub.png",
    liveUrl: "https://desamenleesclub.nl",
    liveLabel: "desamenleesclub.nl",
    metaTitle: "Case De Samenleesclub: platform met locatiekaart en aanmeldflow | Webgrowth",
    metaDescription:
      "Hoe we voor De Samenleesclub een platform bouwden met een interactieve locatiekaart, aanmeldflow per sessie en SEO-templates per locatie.",
  },
];

export function caseBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
