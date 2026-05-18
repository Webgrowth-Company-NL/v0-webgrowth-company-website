export type CaseFeature = { label: string; body: string };
export type CaseSection = { title: string; body: string };
export type CaseResult = { value: string; label: string; descriptor?: string };
export type CaseQuote = { text: string; name: string; role?: string };
export type PsiMetric = { label: string; before: number; after: number };

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
  /** CSS object-position waarde voor 16/10-crops. Default 'center'. */
  imgPosition?: string;
  logo: string;
  /** Optional tile background for the compact-card logo treatment. If unset, the card uses `img` as a photo. */
  thumbBg?: string;
  liveUrl: string;
  liveLabel: string;
  metaTitle: string;
  metaDescription: string;
  /** Uitgewerkte probleemstelling die de klant had voor we begonnen. */
  challenge?: { title: string; body: string };
  /** Hoe we het hebben aangepakt, in deelhoofdstukken (3-5 stuks). */
  solution?: CaseSection[];
  /** Meetbare resultaten in cijfers en feiten. */
  results?: CaseResult[];
  /** PageSpeed Insights voor/na-vergelijking (op /100). */
  psiComparison?: PsiMetric[];
  /** Optionele klantquote. */
  quote?: CaseQuote;
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
    imgPosition: "center 60%",
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
    headlineLead: "Een ITSM-site die hoger scoort,",
    headlineHighlight: "sneller laadt en zelf leads vangt.",
    intro:
      "Pink Elephant is een internationale ITSM-consultancy met tientallen jaren ervaring in IT-support, trainingen en E-Learning. We hebben hun site opnieuw opgebouwd in Forester OS, vijf Lead Engines op maat gemaakt en 744 redirects ingericht voor de domein-migratie naar pinkelephant.co.uk. Onderweg hebben we van een trage WordPress-omgeving (Prestaties 42) een razendsnel platform gemaakt waar Google nu 99 voor geeft.",
    pillars: ["5 Lead Engines", "42 → 99 PageSpeed", "744 redirects"],
    features: [
      { label: "Vijf Lead Engines", body: "Technology QuickQuote, IT-Support QuickQuote, training-aanmelding, E-Learning demo en het slim contactformulier, elk met eigen routing en CRM-koppeling." },
      { label: "PageSpeed van 42 naar 99", body: "Snellere hosting, geoptimaliseerde assets en moderne web-tech onder de motorkap brachten de PSI-prestatie van 42 naar 99, met scores van 100 op toegankelijkheid en praktische tips." },
      { label: "744 redirects", body: "Alle oude URL's van pinkelephant.co.uk en pinkelephant.nl naar de nieuwe structuur, met bewaakte 200's en zonder traffic-verlies na de domein-switch." },
    ],
    img: "/images/clients/pink-elephant-hero.webp",
    imgAlt: "Trainingssessie van Pink Elephant met deelnemers achter laptops",
    imgPosition: "center 25%",
    logo: "/images/clients/pink-elephant.png",
    liveUrl: "https://pinkelephant.co.uk",
    liveLabel: "pinkelephant.co.uk",
    metaTitle: "Case Pink Elephant: ITSM-site met vijf Lead Engines + PSI 99 | Webgrowth",
    metaDescription:
      "Hoe we voor Pink Elephant een ITSM-site opnieuw opbouwden in Forester OS: vijf Lead Engines, 744 redirects voor de domein-migratie en PSI-prestaties van 42 naar 99.",
    challenge: {
      title: "Een site die mooi was maar niet meer presteerde",
      body:
        "Pink Elephant heeft decennia ervaring in ITSM, IT-support, trainingen en E-Learning, met een dienstenpakket dat over de jaren is gegroeid. De bestaande site was alleen niet meegegroeid met die complexiteit: zwaar, traag, met gedateerde formulieren en losse landingspagina's. PageSpeed scoorde een magere 42 op mobiel, leads kwamen binnen via een mailadres in plaats van via een goede flow, en het marketing-team moest voor elke kleine aanpassing een developer bellen. Daarbovenop stond er ook nog een domein-migratie op stapel naar het internationale pinkelephant.co.uk, zonder dat de SEO-posities die in jaren waren opgebouwd verloren mochten gaan.",
    },
    solution: [
      {
        title: "Vijf Lead Engines voor vijf manieren waarop een aanvraag binnenkomt",
        body:
          "Voor elke kerndienst van Pink Elephant hebben we een eigen Lead Engine op maat gemaakt, gebouwd op de Lead Engine-module van Forester OS. De Technology QuickQuote rekent live door op basis van licenties, looptijd en day-rate. De IT-Support QuickQuote stelt slimme vragen over teamgrootte en complexiteit. Daarnaast draaien de training-inschrijving, de E-Learning demo-aanvraag en een slim contactformulier, allemaal met de aanvraag direct in het CRM en een WhatsApp-notificatie op de telefoon van de juiste accountmanager.",
      },
      {
        title: "Een module per dienst, in het CMS van Forester OS",
        body:
          "Met de eigen content-types van de Website-module hebben we een herhaalbaar template per dienst gebouwd: dezelfde structuur van probleem, aanpak, klantcases, FAQ en bijbehorende Lead Engine. Het marketing-team rolt nieuwe diensten en cases zelf uit in dezelfde stijl, zonder dat er een developer aan te pas hoeft te komen. Wat in andere systemen een meerwerk-factuur kostte, is hier een routine-handeling geworden.",
      },
      {
        title: "Van PageSpeed 42 naar 99 zonder concessies aan design",
        body:
          "Door de migratie naar Forester OS kregen we toegang tot moderne web-tech onder de motorkap: snellere hosting, geoptimaliseerde assets, server-side rendering en uitgekiend laden van afbeeldingen. Het resultaat is een PSI-score die op alle dimensies de 99 of 100 raakt, terwijl het visuele resultaat juist rijker is geworden dan op de oude site.",
      },
      {
        title: "Domein-migratie met 744 redirects en Search Console-monitoring",
        body:
          "Van de oude pinkelephant.co.uk en pinkelephant.nl naar de nieuwe structuur hebben we 744 redirects ingericht, gebouwd in een CSV, getest in staging en bewaakt rond de switch. Tijdens en na de domein-flip hielden we Search Console intensief in de gaten om te zien of er pagina's tussen wal en schip dreigden te vallen, zodat we direct konden bijschaven voordat een ranking-positie verloren ging.",
      },
      {
        title: "Q schrijft mee aan content op basis van Search Console-data",
        body:
          "Q, onze AI-assistent in Forester OS, kijkt continu naar wat Search Console laat zien en stelt voor welke pagina's nog content missen, welke zoekvragen onbeantwoord blijven en welke onderwerpen ranking-kansen bieden. Het marketing-team van Pink Elephant krijgt die suggesties in begrijpelijke taal aangeleverd en kan ze met één klik laten uitwerken tot een eerste concept.",
      },
    ],
    psiComparison: [
      { label: "Prestaties", before: 42, after: 99 },
      { label: "Toegankelijkheid", before: 75, after: 100 },
      { label: "Praktische tips", before: 77, after: 100 },
      { label: "SEO", before: 92, after: 92 },
    ],
    results: [
      { value: "5", label: "Lead Engines actief", descriptor: "elk met eigen routing en CRM-koppeling" },
      { value: "744", label: "Redirects bewaakt", descriptor: "domein-migratie zonder traffic-verlies" },
      { value: "Zelfbeheer", label: "Marketing-team aan zet", descriptor: "nieuwe pagina's en cases live zonder developer" },
      { value: "+57", label: "PageSpeed-punten", descriptor: "van Prestaties 42 naar 99 op mobiel" },
    ],
  },
  {
    slug: "nordflame",
    client: "NordFlame",
    sector: "Premium verwarming",
    location: "Online",
    headlineLead: "Een premium kachelplatform met",
    headlineHighlight: "twee scan-tools.",
    intro:
      "NordFlame zet premium pelletkachels en hybride pellet+warmtepomp-systemen op de kaart, met Ecodesign 2027 als context. We bouwden een razendsnelle site met catalogus, twee scan-tools (vervangingsscan + quickscan), Firebase als ruggengraat en een design dat luxe communiceert zonder vol bling te zijn.",
    pillars: ["Vervangingsscan", "Hybride catalogus", "Ecodesign 2027"],
    features: [
      { label: "Vervangingsscan", body: "Een meerstaps lead-flow die in kaart brengt welke kachel jouw oude systeem het beste vervangt, mét rapport." },
      { label: "Hybride catalogus", body: "Productpagina's voor de hybride pellet+warmtepomp-oplossing, inclusief filters en specs per model." },
      { label: "Ecodesign 2027", body: "Een eigen pagina die de aankomende regelgeving uitlegt en NordFlame als oplossing positioneert." },
    ],
    img: "/images/clients/nordflame-hero.png",
    imgAlt: "NordFlame premium pelletkachel-platform",
    imgPosition: "left center",
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
    imgPosition: "center 65%",
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
    imgPosition: "center 30%",
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
