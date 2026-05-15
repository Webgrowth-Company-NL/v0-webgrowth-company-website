/**
 * Content voor de Forester OS-hub (/forester-os).
 *
 * Houd `slug` gelijk aan de routes onder app/forester-os/[slug] en aan
 * de hrefs in components/header-megas.tsx (PLATFORM_MODULES). Pas alleen
 * de lange beschrijvingen hier aan; de korte desc voor het megamenu staat
 * in header-megas.tsx.
 */

import {
  CalendarClock,
  Flame,
  Globe,
  type LucideIcon,
  Mail,
  Megaphone,
  Search,
  ShoppingBag,
  Sparkles,
  Users,
} from "lucide-react";

export type ForesterModule = {
  slug: string;
  label: string;
  short: string;
  tagline: string;
  body: string;
  features: string[];
  icon: LucideIcon;
};

export const FORESTER_MODULES: ForesterModule[] = [
  {
    slug: "website",
    label: "Website & CMS",
    short: "Website",
    tagline: "Je hele site, beheerbaar van binnenuit",
    body:
      "Pagina's, berichten en eigen content-types beheer je vanuit hetzelfde dashboard waarin ook je CRM en marketing draaien. Hosting, onderhoud en beveiliging zitten erin, geen los CMS-systeem nodig.",
    features: ["Eigen content-types", "Live preview", "Geen losse hosting", "Wekelijks onderhoud"],
    icon: Globe,
  },
  {
    slug: "lead-engine",
    label: "Lead Engine",
    short: "Lead Engine",
    tagline: "Bezoekers omzetten in echte aanvragen",
    body:
      "Quickscans, prijscalculators en slimme formulieren die meer doen dan een e-mail vragen. Elke aanvraag landt direct in je CRM, mét context, en jij krijgt een berichtje op de telefoon.",
    features: ["Quickscan", "Prijscalculator", "Slimme formulieren", "WhatsApp-melding"],
    icon: Flame,
  },
  {
    slug: "sales-engine",
    label: "Sales Engine",
    short: "Sales",
    tagline: "Je expertise als product, niet alleen als uurtarief",
    body:
      "Trainingen, 1-op-1 sessies, programma's of digitale downloads. Alles wat jouw kennis verpakt zodat klanten zelf kunnen leren, boeken en kopen. De winkel, het inplannen, betaling en CRM-opvolging zitten erin.",
    features: ["Trainingen & cursussen", "Sessies & boekingen", "Digitale producten", "Lead scoring + CRM"],
    icon: ShoppingBag,
  },
  {
    slug: "crm",
    label: "CRM & sales-pijplijn",
    short: "CRM",
    tagline: "Leads en deals visueel door je pijplijn",
    body:
      "Eén kanban-overzicht voor je hele team. Leads vanuit je lead engines, deals met statussen en taken, en Q die meedenkt over wat de volgende stap is.",
    features: ["Drag-and-drop pijplijn", "Taken per deal", "Eigen statussen", "Q-suggesties"],
    icon: Users,
  },
  {
    slug: "seo",
    label: "SEO & vindbaarheid",
    short: "SEO",
    tagline: "Search Console-data, AI-suggesties en rankings op één plek",
    body:
      "Welke pagina's groeien, waar je positie zakte of verbeterde, en concrete content-suggesties van Q. Geen los SEO-bureau meer nodig.",
    features: ["Search Console-koppeling", "Rankings dashboard", "Q-suggesties", "Keyword-tracking"],
    icon: Search,
  },
  {
    slug: "ai",
    label: "Q · AI-content",
    short: "Q",
    tagline: "Q schrijft mee aan content, inzichten en taken",
    body:
      "Je AI-assistent kent je site, je leads en je CRM. Q schrijft pagina's, vat inzichten samen en stelt opvolgingen voor in gewone taal. Jij stuurt 'm een appje, hij regelt het.",
    features: ["Content schrijven", "Inzichten samenvatten", "Opvolgingen voorstellen", "Q-chat"],
    icon: Sparkles,
  },
  {
    slug: "content-publisher",
    label: "Content publisher",
    short: "Publisher",
    tagline: "AI publiceert content op je site, op schema",
    body:
      "Een planning, een stem, een aantal templates, en Q publiceert op vaste momenten. Jij keurt vooraf, het ritme van publicaties komt vanzelf.",
    features: ["Publicatie-schema", "Tone-of-voice", "Template-library", "Q als ghostwriter"],
    icon: CalendarClock,
  },
  {
    slug: "nieuwsbrieven",
    label: "Nieuwsbrieven",
    short: "Mail",
    tagline: "E-mailcampagnes vanuit je eigen CRM",
    body:
      "Segmenteer op basis van wat in je CRM staat, schrijf met Q als sparring partner, en stuur vanuit je eigen domein. Geen losse Mailchimp meer.",
    features: ["Segmenten uit CRM", "Q als ghostwriter", "Eigen verzenddomein", "Analytics inbegrepen"],
    icon: Mail,
  },
  {
    slug: "advertenties",
    label: "Advertenties",
    short: "Ads",
    tagline: "Slimme campagnes, gestuurd vanuit je CRM",
    body:
      "Google Ads en social-campagnes draaien vanuit Forester OS, gevoed door wat er in je CRM gebeurt. Q schrijft varianten, het dashboard laat zien welke euro waar landt.",
    features: ["Google Ads-koppeling", "Social campagnes", "Q-ad copy", "CRM-attributie"],
    icon: Megaphone,
  },
];

export type ForesterFlowStep = {
  phase: string;
  title: string;
  body: string;
  modules: string[];
};

export const FORESTER_FLOW: ForesterFlowStep[] = [
  {
    phase: "01",
    title: "Gevonden worden",
    body:
      "Snelle pagina's, geoptimaliseerde content en de Search Console-koppeling die laat zien wat werkt. Q stelt de volgende blog voor, de Content Publisher zet 'm op schema live en advertenties zorgen voor extra duw waar dat nodig is.",
    modules: ["website", "seo", "content-publisher", "advertenties"],
  },
  {
    phase: "02",
    title: "In een aanvraag",
    body:
      "Een quickscan, een calculator of een slim formulier dat verder gaat dan 'neem contact op'. De bezoeker krijgt iets terug, jij krijgt een lead met context in je CRM.",
    modules: ["lead-engine"],
  },
  {
    phase: "03",
    title: "Opgevolgd",
    body:
      "Q vat de aanvraag samen, stelt de volgende stap voor en maakt de taak voor je team aan. Je hele pijplijn schuift visueel door tot de deal staat.",
    modules: ["ai", "crm"],
  },
  {
    phase: "04",
    title: "Vastgehouden",
    body:
      "Segmenten in je CRM voeden je nieuwsbrieven en sales-trainingen. Bestaande klanten blijven warm, prospects warmen zichzelf op. Geen losse tools nodig.",
    modules: ["nieuwsbrieven", "sales-engine"],
  },
];

/* ── Detail-pagina content per module (gebruikt op /forester-os/[slug]) ───────────── */

/** Optionele, module-specifieke visual widget die tussen hero en features wordt getoond. */
export type ModuleWidgetData =
  | { kind: "pagespeed"; metrics: { label: string; score: number }[] }
  | {
      kind: "hero-dashboard";
      view?:
        | "website"
        | "seo"
        | "crm"
        | "ai"
        | "lead-engine"
        | "sales-engine"
        | "content-publisher"
        | "nieuwsbrieven"
        | "advertenties";
      eyebrow?: string;
      title?: string;
      intro?: string;
    }
  | {
      kind: "stats-cards";
      eyebrow: string;
      title: string;
      intro: string;
      cards: {
        label: string;
        prefix?: string;
        value: number;
        decimals?: number;
        suffix?: string;
        delta?: string;
        descriptor?: string;
        viz: "gauge" | "bars" | "spark" | "bolt";
        trend?: boolean;
      }[];
    };

/** Stappenplan voor 'Zo werkt het voor de klant' — optioneel per module. */
export type ProcessStep = { title: string; body: string };

export type ForesterModuleDetail = {
  /** Eerste deel van de hero-H1 (gewone tekst) */
  heroLead: string;
  /** Tweede deel van de hero-H1 (gradient-shimmer accent) */
  heroHighlight: string;
  /** Subkop onder de H1 (2-3 zinnen) */
  heroIntro: string;
  /** Uitgewerkte features: titel + 1-2 zinnen */
  featuresDetailed: { title: string; body: string }[];
  /** Slugs van modules die hier nauw mee samenwerken (2-3 stuks) */
  relatedSlugs: string[];
  /** Module-specifieke FAQ */
  faq: ForesterFaqItem[];
  /** SEO meta description, ~150-160 chars */
  metaDescription: string;
  /** Optionele showcase-widgets — sluiten aan op wat deze module concreet oplevert. Volgorde = volgorde op de pagina. */
  widgets?: ModuleWidgetData[];
  /** Optioneel stappenplan: 'zo werkt het voor de klant', 4-6 stappen. */
  steps?: { eyebrow: string; title: string; intro: string; items: ProcessStep[] };
};

export type ForesterFaqItem = { q: string; a: string };

export const MODULE_DETAILS: Record<string, ForesterModuleDetail> = {
  website: {
    heroLead: "Een website die jij zelf",
    heroHighlight: "in de hand houdt.",
    heroIntro:
      "Pagina's, berichten en eigen content-types beheer je in hetzelfde dashboard waar ook je CRM, SEO en marketing draaien. Hosting, beveiliging en onderhoud zitten erin, geen los CMS-systeem nodig.",
    featuresDetailed: [
      { title: "Eigen content-types", body: "Naast pagina's en blogs maak je je eigen structuren aan: cases, vacatures, gebouwen, producten. Beheer ze in een tabel-view, publiceer met één klik." },
      { title: "Live preview", body: "Wijzig een tekst of foto, druk op preview, zie meteen hoe het op desktop én mobile staat. Pas aan tot het klopt, dan live." },
      { title: "Geen losse hosting", body: "Snelle Nederlandse hosting met SSL, dagelijkse back-ups en CDN. Geen aparte rekening, geen los contract met een hostingpartij." },
      { title: "Wekelijks onderhoud", body: "We updaten, monitoren en testen elke week. Storingen vangen we voor je af, niet andersom." },
    ],
    relatedSlugs: ["seo", "lead-engine", "content-publisher"],
    faq: [
      { q: "Werkt mijn bestaande domein?", a: "Ja. We verhuizen je domein zonder downtime en regelen DNS, SSL en e-mail-routing. Tijdens en na de migratie loopt alles door." },
      { q: "Is mijn site mobile-first?", a: "Ja. Alles wat we bouwen is mobile-first ontworpen en getest op echte toestellen. Voor de meeste klanten komt 70% van het verkeer mobiel binnen, daar bouwen we op." },
      { q: "Kan ik zelf nieuwe content-types maken?", a: "Op Core en hoger maken we de content-types samen met jou op basis van wat je bedrijf nodig heeft. Aanvullingen later? Schiet 'm in als taak, wij regelen het binnen een sprint." },
    ],
    metaDescription:
      "Forester OS Website & CMS: pagina's, berichten en eigen content-types beheren vanuit één dashboard, met hosting, beveiliging en wekelijks onderhoud inbegrepen.",
    widgets: [
      {
        kind: "pagespeed",
        metrics: [
          { label: "Snelheid", score: 98 },
          { label: "Toegankelijkheid", score: 100 },
          { label: "Best practices", score: 100 },
          { label: "SEO", score: 100 },
        ],
      },
      {
        kind: "hero-dashboard",
        view: "website",
      },
    ],
    steps: {
      eyebrow: "Zo werkt het",
      title: "Van handtekening tot livegang in acht sprints.",
      intro:
        "Geen vage trajecten. Een strak proces in vijf duidelijke stappen, met elke twee weken een meeting zodat je precies weet waar we staan.",
      items: [
        {
          title: "Kickoff & sitemap",
          body: "Eerste meeting: strategie bepalen, sitemap uittekenen. Op dag één weten we hoeveel sprints we nodig hebben en wat het einddoel is.",
        },
        {
          title: "Wij bouwen, jij krijgt elke twee weken updates",
          body: "Acht sprints van twee weken. Aan het einde van elke sprint zie je wat er staat, wat we hierna doen en waar we tegenaan lopen.",
        },
        {
          title: "Content samen",
          body: "Q schrijft basisteksten in jouw stem, jij levert het echte beeldmateriaal. Teamwork zonder dat we wachten op elkaar.",
        },
        {
          title: "Testen en live",
          body: "We slopen 'm bijna kapot, fixen wat we vinden, doen de DNS-flip. Geen verrassingen, geen downtime, geen zorgen.",
        },
        {
          title: "Forester OS in jouw handen",
          body: "Je krijgt de sleutels van je commandocentrum. Maandelijkse Momentum-rapporten, wekelijks onderhoud en vragen direct bij Martijn.",
        },
      ],
    },
  },
  "lead-engine": {
    heroLead: "Bezoekers omzetten in",
    heroHighlight: "echte aanvragen.",
    heroIntro:
      "Quickscans, prijscalculators en slimme formulieren die meer doen dan e-mail vragen. Elke aanvraag landt direct in je CRM mét context, en je krijgt een berichtje op de telefoon.",
    featuresDetailed: [
      { title: "Quickscan", body: "Een vragenlijst van 5-10 stappen die in 2 minuten een concreet rapport oplevert. De bezoeker krijgt waarde, jij krijgt context bij de lead." },
      { title: "Prijscalculator", body: "Pakket, periode en opties live doorrekenen. De prospect ziet vooraf wat het kost, jij krijgt geen 'kunt u een offerte sturen?'-mail meer." },
      { title: "Slimme formulieren", body: "Vragen verschijnen op basis van wat de bezoeker eerder antwoordde. Korter, relevanter, hogere completion-rate dan een statisch lang formulier." },
      { title: "WhatsApp-melding", body: "Lead binnen, seintje op je telefoon. Reageer in de eerste minuut en je wint de deal vaker dan met een mail die je morgen pas ziet." },
    ],
    relatedSlugs: ["crm", "ai", "advertenties"],
    faq: [
      { q: "Werken Lead Engines ook voor B2B?", a: "Juist voor B2B. Quickscans en calculators kwalificeren prospects vóór het gesprek, zodat sales tijd steekt in mensen die er serieus over nadenken." },
      { q: "Hoeveel Lead Engines mag ik draaien?", a: "Op Core 2 contactformulieren en 2 lead engines, op Growth 4 + 4, op Scale onbeperkt. Een lead engine is bijvoorbeeld een quickscan, een evenement-registratie of een calculator." },
      { q: "Kan ik bestaande aanvragen importeren?", a: "Ja. Bij de onboarding nemen we je bestaande lead-bron(nen) over en mappen ze naar Forester OS. Geen data kwijt, geen handmatig overpennen." },
    ],
    metaDescription:
      "Forester OS Lead Engine: quickscans, prijscalculators en slimme formulieren die bezoekers omzetten in gekwalificeerde aanvragen, direct in je CRM met WhatsApp-melding.",
    widgets: [
      { kind: "hero-dashboard", view: "lead-engine" },
      {
        kind: "stats-cards",
        eyebrow: "Wat een Lead Engine oplevert",
        title: "Meer aanvragen, beter gekwalificeerd.",
        intro: "Een gemiddelde Lead Engine bij onze klanten in het tweede kwartaal van het eerste jaar live.",
        cards: [
          { label: "Aanvragen", value: 47, delta: "+22%", descriptor: "deze maand", viz: "spark" },
          { label: "Conversie", value: 6.4, decimals: 1, suffix: "%", delta: "+1,2pt", descriptor: "vs vorige periode", viz: "bars" },
          { label: "Gem. waarde", prefix: "€", value: 3.8, decimals: 1, suffix: "k", delta: "+€420", descriptor: "per lead", viz: "gauge" },
        ],
      },
    ],
    steps: {
      eyebrow: "Zo werkt het",
      title: "Van briefing tot eerste lead in 4 tot 6 weken.",
      intro: "Geen wekenlang gepraat over waar het over zou kunnen gaan. We bepalen samen het mechanisme, bouwen het, en zetten 'm voorzichtig live.",
      items: [
        { title: "Briefing", body: "We bepalen welk type lead je wilt vangen (calculator, quickscan, kennistest, training) en wat je belangrijkste kwalificatievragen zijn." },
        { title: "Concept & content", body: "Q schrijft de eerste versie van vragen en uitkomsten. Jij stuurt bij tot het in jouw stem klinkt en bij je dienstverlening past." },
        { title: "Bouw in Forester OS", body: "Wij bouwen het mechanisme rechtstreeks in Forester OS, met de juiste vraag-logica, tagging en WhatsApp-notificaties. Leads landen direct in je eigen CRM, geen koppeling of export nodig." },
        { title: "Soft launch + meten", body: "We zetten de engine eerst zachtjes live zodat we conversie en kwalificatie kunnen meten voor we 'm breed promoten." },
        { title: "Doorlopend optimaliseren", body: "We monitoren de funnel en passen vragen of UI aan op basis van wat we zien — geen losse CRO-opdracht meer." },
      ],
    },
  },
  "sales-engine": {
    heroLead: "Schaal je expertise,",
    heroHighlight: "niet je uurtarief.",
    heroIntro:
      "Je werkt al hard genoeg. Pak je kennis in als training, sessie, programma of digitaal product, en laat klanten zichzelf leren, boeken en kopen. Wij regelen de winkel, het inplannen, de betaling en de opvolging. Jij blijft expert, het platform schaalt.",
    featuresDetailed: [
      {
        title: "Trainingen & cursussen",
        body: "Pak je expertise in als modules die cursisten in eigen tempo doorlopen, of plan klassikale dagen in. Werkt voor IT-trainingen, vakopleidingen, online cursussen en certificeringstrajecten. Voortgang per cursist zichtbaar in je CRM.",
      },
      {
        title: "Sessies & boekingen",
        body: "Verkoop losse sessies, strippenkaarten of abonnementen. Klanten boeken zelf in je agenda, betalen vooraf en krijgen automatisch een uitnodiging. Voor coaches, therapeuten, en consultants die hun tijd willen schalen.",
      },
      {
        title: "Digitale producten & downloads",
        body: "Werkboeken, templates, premium guides, audio-bibliotheken of video-bundels. Eén keer maken, oneindig vaak verkopen. Na betaling krijgt de klant direct toegang, zonder dat jij iets hoeft te doen.",
      },
      {
        title: "Lead scoring + CRM",
        body: "Wie deed welke module, kwam terug voor sessie drie, scoorde wat op de quiz? Sales weet vanaf de eerste klik wie warm is, en wat de volgende logische stap is. Geen losse academy-tool met losse data.",
      },
    ],
    relatedSlugs: ["lead-engine", "ai", "crm"],
    faq: [
      {
        q: "Voor wie is dit eigenlijk?",
        a: "Voor iedereen die kennis verkoopt en niet meer uren wil draaien. We zien dit werken bij IT-trainers, therapeuten en coaches met audio-sessies, advocaten met whitepapers, accountants met mini-cursussen, en consultants met paid masterclasses. Als jouw expertise verpakbaar is, is dit relevant.",
      },
      {
        q: "Wordt mijn premium dienstverlening dan niet gekannibaliseerd?",
        a: "In de praktijk juist andersom. Een training of paid programma filtert wie serieus is, en wie zo'n product koopt komt vaak warm binnen voor je hoogwaardiger diensten. Het is een opwarmlaag, geen vervanging.",
      },
      {
        q: "Maken jullie de content?",
        a: "We helpen de structuur opzetten en Q schrijft basis-modules in jouw tone-of-voice. Jij voegt de expertise, voorbeelden en cases toe. Zo blijft het echt jouw verhaal, niet een generieke training.",
      },
      {
        q: "Hoe verhoudt dit zich tot een academy-tool zoals Thinkific of Teachable?",
        a: "Die zijn los van je CRM, marketing en website. Hier verkoopt je platform alles vanuit hetzelfde dashboard met dezelfde klantdata. Een deelnemer is meteen een lead, een lead die een module doet schuift door in je pijplijn.",
      },
    ],
    metaDescription:
      "Forester OS Sales Engine: pak je expertise in als training, sessie of digitaal product. Verkoop zonder dat jij elke deal zelf moet sluiten, met CRM, agenda en lead scoring ingebouwd.",
    widgets: [
      { kind: "hero-dashboard", view: "sales-engine" },
      {
        kind: "stats-cards",
        eyebrow: "Wat het oplevert",
        title: "Klanten warmer, omzet hoger, jij niet aan tafel.",
        intro: "Gemiddelde performance bij klanten die hun expertise verpakten als training, sessie of digitaal product, gemeten in het eerste jaar na livegang.",
        cards: [
          { label: "Deelnemers", value: 152, delta: "+38", descriptor: "deze maand", viz: "spark" },
          { label: "Maandomzet", prefix: "€", value: 12.4, decimals: 1, suffix: "k", delta: "+28%", descriptor: "vs handmatige verkoop", viz: "bars" },
          { label: "Doorzet naar sales", value: 42, delta: "+15", descriptor: "warme vervolg-leads", viz: "gauge" },
        ],
      },
    ],
    steps: {
      eyebrow: "Zo werkt het",
      title: "Van expertise tot draaiende verkoopmotor.",
      intro: "Geen losse academy-tool die je los moet onderhouden. We bouwen je verkoopmotor in op je bestaande platform, in het format dat past bij wat jij wilt verkopen.",
      items: [
        {
          title: "Strategie & format",
          body: "Samen kiezen we het format: korte training, meerdaags programma, boekbare sessies, of digitaal product. We bepalen het prijsmodel (eenmalig, abonnement, strippenkaart) en de doelgroep.",
        },
        {
          title: "Content samen met Q",
          body: "Jij levert de expertise, Q structureert en schrijft de basis in jouw stem. Quizzes, vragen en herkenningspunten genereren we mee. Jij keurt en finetunet tot het in jouw woorden klinkt.",
        },
        {
          title: "Bouw, betaling & toegang",
          body: "Wij bouwen de winkel, koppelen de betaling (iDEAL, creditcard, factuur of abonnement) en regelen automatische toegang. Voor sessies koppelen we je agenda, voor producten de download-flow.",
        },
        {
          title: "Lead scoring in CRM",
          body: "Elke deelnemer of koper landt in je CRM met context: welke module deed hij, hoe scoorde hij, welke vragen liet hij liggen? Sales weet meteen wie warm is voor het vervolg.",
        },
        {
          title: "Live + bijschaven",
          body: "We zetten 'm voorzichtig live, kijken naar de eerste 50 deelnemers en passen modules of pricing aan op basis van echte data. Geen 'set and forget'.",
        },
      ],
    },
  },
  crm: {
    heroLead: "Leads en deals visueel",
    heroHighlight: "door je pijplijn.",
    heroIntro:
      "Eén kanban-overzicht voor je hele team. Leads vanuit je lead engines, deals met statussen en taken, en Q die meedenkt over wat de volgende stap is.",
    featuresDetailed: [
      { title: "Drag-and-drop pijplijn", body: "Verschuif deals tussen statussen met je muis. Iedereen ziet meteen waar elke deal staat en wie ermee bezig is." },
      { title: "Taken per deal", body: "Bij elke deal hangen taken: bellen, offerte sturen, opvolgen. Met deadlines, team-toewijzing en notificaties." },
      { title: "Eigen statussen", body: "Werk jij met 5 stappen of 9? Stel je eigen pijplijn-stadia in, kleurcodes en automations." },
      { title: "Q-suggesties", body: "Q ziet wat er met de deal gebeurde en stelt voor wat de volgende actie is. Soms een mail, soms gewoon 'bel ze eens'." },
    ],
    relatedSlugs: ["lead-engine", "sales-engine", "ai"],
    faq: [
      { q: "Kunnen meerdere teamleden tegelijk werken?", a: "Ja. Op Core tot 5 gebruikers, op Growth en Scale onbeperkt. Realtime sync, taken-notificaties, en je ziet wie wat heeft aangeraakt." },
      { q: "Kan ik exporteren naar Excel?", a: "Altijd. Leads, deals, taken en contacten exporteren als CSV of Excel. Geen vendor lock-in." },
      { q: "Werkt het met onze bestaande CRM?", a: "Op Growth en hoger koppelen we met HubSpot, Pipedrive of Teamleader. Dan kun je gefaseerd migreren of beide naast elkaar gebruiken." },
    ],
    metaDescription:
      "Forester OS CRM & sales-pijplijn: drag-and-drop kanban met leads, deals, taken en Q-suggesties. Eén overzicht voor je hele team, geen losse CRM-licentie.",
    widgets: [
      { kind: "hero-dashboard", view: "crm" },
      {
        kind: "stats-cards",
        eyebrow: "Pijplijn op één plek",
        title: "Het CRM ziet wat er beweegt.",
        intro: "Live cijfers uit de pijplijn van een klant in de zakelijke dienstverlening, één maand na livegang.",
        cards: [
          { label: "Open deals", prefix: "€", value: 127, suffix: "k", delta: "+€18k", descriptor: "deze maand", viz: "spark" },
          { label: "Conversie", value: 24, suffix: "%", delta: "+3pt", descriptor: "lead → klant", viz: "gauge" },
          { label: "Doorlooptijd", value: 18, suffix: " dagen", delta: "-4 dagen", descriptor: "snellere deals", viz: "bars", trend: false },
        ],
      },
    ],
    steps: {
      eyebrow: "Zo werkt het",
      title: "Van eerste lead tot vaste pijplijn.",
      intro: "Geen droge import-export. We zetten jouw pijplijn op, lopen mee tijdens de eerste maand en passen aan wat nodig is.",
      items: [
        { title: "Migratie & opzet", body: "We nemen je bestaande contacten en deals over (uit Excel, HubSpot, Pipedrive of waar dan ook) en mappen ze naar Forester OS." },
        { title: "Eigen statussen", body: "Samen tekenen we jouw pijplijn-stadia. Werk je met 5 of 9 stappen, met onderverdeling per sector? Jouw keuze, niet onze template." },
        { title: "Team & rollen", body: "Iedereen krijgt een eigen login met de juiste rechten. Met meldingen, taken en notificaties op jouw werkritme." },
        { title: "Eerste 30 dagen", body: "We kijken mee tijdens de eerste maand, doen wekelijks een sync en passen statussen of automations aan tot 'ie precies werkt." },
        { title: "Doorlopend", body: "Q kijkt mee, signaleert deals die te lang stilstaan en stelt opvolgingen voor. Jij houdt de controle." },
      ],
    },
  },
  seo: {
    heroLead: "Wat werkt, wat niet, en",
    heroHighlight: "wat hierna te schrijven.",
    heroIntro:
      "Welke pagina's groeien, waar je positie zakte of verbeterde, en concrete content-suggesties van Q. Search Console-data, AI-analyse en rankings in één dashboard, geen los SEO-bureau nodig.",
    featuresDetailed: [
      { title: "Search Console-koppeling", body: "Echte Google-data, niet een tool die dingen verzint. Welke keywords je vindt, welke pagina's groeien, welke clicks krijgen wat ze verdienen." },
      { title: "Rankings dashboard", body: "Tot 50 keywords gevolgd op Growth, met dagelijkse updates. Zie schommelingen voordat ze klanten kosten." },
      { title: "Q-suggesties", body: "Q analyseert je content en suggereert: deze pagina kan een sectie over X gebruiken, deze blog mist een interne link naar Y." },
      { title: "Keyword-tracking", body: "Niet alleen je hoofdterm, ook de long-tail rondom je business. Inclusief lokale variaties als je in een specifieke regio actief bent." },
    ],
    relatedSlugs: ["ai", "content-publisher", "website"],
    faq: [
      { q: "Vervangt dit een SEO-bureau?", a: "Voor de meeste klanten: ja. Wat een bureau wekelijks aan rapportjes stuurt zit hier ingebouwd, plus de tools om er op te acteren. Voor sterk technische audits werken we met een gespecialiseerde partner samen." },
      { q: "Werkt het ook voor lokale SEO?", a: "Ja. Rankings, Google Business-signalen en lokale content-suggesties zitten erin. Voor regio-specifieke organisaties (zorg, dienstverlening) is dit vaak het grootste kanaal." },
    ],
    metaDescription:
      "Forester OS SEO & vindbaarheid: Search Console-data, ranking-tracking en AI-content-suggesties in één dashboard, geen los SEO-bureau meer nodig.",
    widgets: [
      { kind: "hero-dashboard", view: "seo" },
      {
        kind: "stats-cards",
        eyebrow: "Search Console, live",
        title: "Wat de SEO-laag in een jaar oplevert.",
        intro: "Cijfers van een klant in zakelijke dienstverlening, 12 maanden na livegang met Forester OS.",
        cards: [
          { label: "Top-10 posities", value: 47, delta: "+12", descriptor: "deze maand", viz: "bars" },
          { label: "Organisch verkeer", prefix: "+", value: 47, suffix: "%", delta: "afgelopen jaar", descriptor: "vs jaar ervoor", viz: "spark", trend: false },
          { label: "Featured snippets", value: 8, delta: "+3", descriptor: "rich results in zoekresultaat", viz: "gauge" },
        ],
      },
    ],
    steps: {
      eyebrow: "Zo werkt het",
      title: "Van eerste audit tot stijgende rankings.",
      intro: "SEO als ingebouwde laag, niet als losse opdracht. Met maandelijkse data-driven aanpassingen die echt iets opleveren.",
      items: [
        { title: "Audit", body: "We koppelen je Search Console en doen een diepe analyse: welke pagina's groeien, welke zakken, waar laat je verkeer liggen." },
        { title: "Strategie", body: "Op basis van de audit + concurrentie kiezen we 25-50 keywords om aan te werken. Long-tail, lokaal, brand of categorie, afhankelijk van waar de groei zit." },
        { title: "Content-plan", body: "Q stelt voor wat eerst gemaakt of herschreven moet worden, met topic-clusters en interne links die elkaar versterken." },
        { title: "Maandelijkse rapportage", body: "Elke maand laten we zien wat verbeterd is, wat tegenvalt en wat we hierna doen. Geen rapport om het rapport." },
        { title: "Bijschaven op data", body: "Wat werkt schalen we op, wat niet werkt parkeren we. Geen droge SEO-best-practices, maar wat in jouw markt landt." },
      ],
    },
  },
  ai: {
    heroLead: "Q, je AI-assistent",
    heroHighlight: "die je site kent.",
    heroIntro:
      "Q kent je site, je leads en je CRM. Hij schrijft pagina's, vat inzichten samen en stelt opvolgingen voor in gewone taal. Jij stuurt 'm een appje, hij regelt het.",
    featuresDetailed: [
      { title: "Content schrijven", body: "Pagina's, blogs, e-mails en advertentieteksten in jouw stem, omdat Q je hele site kent en daarop traint." },
      { title: "Inzichten samenvatten", body: "Q leest je Search Console, CRM- en Momentum-data en zegt: dit is wat er deze maand gebeurde, hier zit groei, hier zit risico." },
      { title: "Opvolgingen voorstellen", body: "Lead niet gereageerd? Q schrijft een passende follow-up mail. Jij keurt 'm, hij stuurt 'm. Of laat 'm de optimale tijd kiezen om te versturen." },
      { title: "Q-chat", body: "Vraag Q gewoon iets, zoals 'wat doen we deze week?'. Hij kent de context van je platform en geeft een onderbouwd antwoord." },
    ],
    relatedSlugs: ["seo", "content-publisher", "crm"],
    faq: [
      { q: "Gebruikt Q mijn data om andere klanten te helpen?", a: "Nee. Je content, leads en CRM blijven in jouw omgeving. Q's onderliggende modellen leren niet van jouw specifieke data; ze worden alleen geprompt met jouw context." },
      { q: "Hoe accuraat is Q?", a: "Voor concept-content, samenvattingen en suggesties bespaart Q veel tijd. Het laatste woord is altijd van jou. We bouwen niet op de illusie dat een AI feilloos is." },
      { q: "Kan ik Q's stem afstellen?", a: "Ja. Op Growth kun je per content-type een tone-of-voice instellen (zakelijk, speels, deskundig) en Q traint zich op jouw bestaande pagina's." },
    ],
    metaDescription:
      "Q is de AI-assistent in Forester OS die je site, leads en CRM kent. Schrijft content, vat inzichten samen en stelt opvolgingen voor — een appje, hij regelt het.",
    widgets: [
      { kind: "hero-dashboard", view: "ai" },
      {
        kind: "stats-cards",
        eyebrow: "Q in actie",
        title: "Wat Q in een maand wegneemt.",
        intro: "Gemiddelde inzet van Q bij klanten op het Growth-pakket, gemeten over de laatste 30 dagen.",
        cards: [
          { label: "Q-acties", value: 412, delta: "+38%", descriptor: "vs vorige maand", viz: "spark" },
          { label: "Tijd bespaard", value: 24, suffix: " uur", delta: "+9 uur", descriptor: "deze week", viz: "bars" },
          { label: "Content gegenereerd", value: 47, delta: "+12", descriptor: "stuks deze maand", viz: "gauge" },
        ],
      },
    ],
    steps: {
      eyebrow: "Zo werkt het",
      title: "Van eerste setup tot dagelijkse assistent.",
      intro: "Q is geen knop die je aanzet. Hij leert je merk en je context, en wordt elke week beter doordat we zijn output bijschaven.",
      items: [
        { title: "Onboarding", body: "We laten Q je website, CRM en bestaande content lezen. Daar leert hij je merk, je tone en je context van." },
        { title: "Tone-of-voice afstemmen", body: "Aan de hand van een paar voorbeeldzinnen leren we Q hoe jij klinkt. Direct of warm, deskundig of toegankelijk, zoals jij wilt." },
        { title: "Eerste taken", body: "We laten Q meelopen op concrete dingen: een blog schrijven, een aanvraag samenvatten, een opvolg-mail voorstellen. Jij keurt elke output." },
        { title: "Integreren in workflow", body: "Q komt op de plekken waar jij werkt: in het CMS naast de tekst-editor, in het CRM naast elke deal, in een chat-window voor losse vragen." },
        { title: "Bijschaven", body: "Wat goed werkt automatiseren we, wat soms misgaat passen we aan. Q wordt elke maand beter doordat we hem trainen op zijn eigen output." },
      ],
    },
  },
  "content-publisher": {
    heroLead: "Content op schema,",
    heroHighlight: "zonder schrijfblok.",
    heroIntro:
      "Een planning, een stem, een aantal templates en Q publiceert op vaste momenten. Jij keurt vooraf, het ritme van publicaties komt vanzelf en je content-machine blijft draaien.",
    featuresDetailed: [
      { title: "Publicatie-schema", body: "Bepaal hoe vaak: wekelijks, twee-wekelijks, maandelijks. Met Q automatisch volgens schema, of handmatig naar keuze." },
      { title: "Tone-of-voice", body: "Q schrijft in jouw stem, geleerd uit je bestaande content. Niet generiek, wel herkenbaar." },
      { title: "Template-library", body: "Type-content (case study, tip-blog, nieuwsupdate, klantverhaal) als templates. Q vult ze in, jij keurt het concept." },
      { title: "Q als ghostwriter", body: "Jij geeft de brief in 3 zinnen, Q schrijft het hele verhaal. Of laat Q van scratch beginnen op basis van een topic of een artikel-idee." },
    ],
    relatedSlugs: ["ai", "seo", "nieuwsbrieven"],
    faq: [
      { q: "Wordt mijn site nu een Q-spamkanaal?", a: "Nee. Jij keurt elke publicatie vooraf of stelt een rust-modus in. Q produceert concept, het ritme bepaal jij. Geen massa-publishing." },
      { q: "Wat als Q iets schrijft dat niet klopt?", a: "Dan keur je het niet goed. We hebben een revisie-flow waarin je per stuk content kunt aanpassen of opnieuw genereren tot het klopt." },
    ],
    metaDescription:
      "Forester OS Content Publisher: AI publiceert blogs en content op je site, op schema, in jouw tone-of-voice. Templates, planning, jij keurt het concept goed.",
    widgets: [
      { kind: "hero-dashboard", view: "content-publisher" },
      {
        kind: "stats-cards",
        eyebrow: "Wat het oplevert",
        title: "Een vol publicatieschema, zonder stress.",
        intro: "Gemiddelde inzet bij klanten die de Publisher een kwartaal aan het draaien hebben.",
        cards: [
          { label: "Ingepland", value: 24, delta: "+6", descriptor: "deze maand", viz: "bars" },
          { label: "Gepubliceerd", value: 18, delta: "+4", descriptor: "geautomatiseerd", viz: "spark" },
          { label: "Engagement", prefix: "+", value: 34, suffix: "%", delta: "vs handmatig", descriptor: "tijdperk", viz: "gauge", trend: false },
        ],
      },
    ],
    steps: {
      eyebrow: "Zo werkt het",
      title: "Van strategie tot publicatie op de auto-piloot.",
      intro: "Eerst handmatig, dan automatisch. We bouwen de motor op, jij houdt regie over wat erin gaat.",
      items: [
        { title: "Content-strategie", body: "Welke onderwerpen, hoe vaak, welk type? We bepalen het ritme en de mix (blogs, cases, updates) op basis van wat jouw doelgroep zoekt." },
        { title: "Templates opzetten", body: "We bouwen herbruikbare templates per content-type. Zo voelt elke publicatie consistent, ook als Q ze vult." },
        { title: "Schema instellen", body: "Wekelijks, twee-wekelijks of maandelijks — jij kiest. We zetten de auto-publicaties klaar met een goedkeurmoment vooraf." },
        { title: "Eerste maand handmatig", body: "De eerste maand keuren jullie elke publicatie. Daarna kan een deel automatisch, als we zien dat de kwaliteit klopt." },
        { title: "Doorlopend", body: "Q blijft schrijven, jij blijft keuren wat je wilt keuren. Geen schrijfblok meer, geen achterstand in content." },
      ],
    },
  },
  nieuwsbrieven: {
    heroLead: "E-mailcampagnes",
    heroHighlight: "vanuit je eigen CRM.",
    heroIntro:
      "Segmenteer op basis van wat in je CRM staat, schrijf met Q als sparringpartner, en stuur vanuit je eigen domein. Geen losse Mailchimp-account, geen losse contactenlijst.",
    featuresDetailed: [
      { title: "Segmenten uit CRM", body: "Stuur alleen aan klanten in een bepaalde fase, sector of regio. Filter live op CRM-data zonder ze te exporteren." },
      { title: "Q als ghostwriter", body: "Vertel Q wat je wilt zeggen, hij schrijft de mail. Aanpassen tot het past, dan plannen en versturen." },
      { title: "Eigen verzenddomein", body: "Vanuit jouw domein, met goede inbox-reputatie. Niet via een mailchimp-subdomein dat als spam aanvoelt." },
      { title: "Analytics inbegrepen", body: "Open-rate, click-rate, conversies. Direct gekoppeld aan welke deal er door komt, niet alleen 'iemand klikte'." },
    ],
    relatedSlugs: ["crm", "ai", "advertenties"],
    faq: [
      { q: "Wat met AVG en double opt-in?", a: "Standaard ingebakken. Elke ontvanger heeft een afmeld-link, double-opt-in is configureerbaar per lijst, en logs van toestemming bewaren we automatisch." },
      { q: "Hoeveel mailings per maand zit erin?", a: "Onbeperkt qua aantal. We werken niet met staffel-licenties per contact of per mailing. Wel verwachten we dat je waarde stuurt, niet ruis." },
    ],
    metaDescription:
      "Forester OS Nieuwsbrieven: e-mailcampagnes vanuit je eigen CRM, segmenten op live data, eigen verzenddomein, analytics gekoppeld aan deals. Geen losse Mailchimp.",
    widgets: [
      { kind: "hero-dashboard", view: "nieuwsbrieven" },
      {
        kind: "stats-cards",
        eyebrow: "Inbox-prestatie",
        title: "Cijfers die je leverancier niet laat zien.",
        intro: "Gemiddelde performance van een nieuwsbrief bij klanten, dankzij eigen verzenddomein en segmenten uit CRM.",
        cards: [
          { label: "Open rate", value: 38, suffix: "%", delta: "+6pt", descriptor: "vs branche-gemiddelde", viz: "gauge" },
          { label: "Click rate", value: 8.4, decimals: 1, suffix: "%", delta: "+1,8pt", descriptor: "doorgeklikt", viz: "bars" },
          { label: "Abonnees", value: 1247, delta: "+82", descriptor: "deze maand", viz: "spark" },
        ],
      },
    ],
    steps: {
      eyebrow: "Zo werkt het",
      title: "Van eerste lijst tot maandelijkse campagnes.",
      intro: "Inbox-deliverability eerst, content tweede. Een kanaal dat presteert omdat je vanaf domein-niveau goed staat.",
      items: [
        { title: "Domein-setup", body: "We richten je verzenddomein in (SPF, DKIM, DMARC) zodat mails uit jouw naam in de inbox landen, niet in spam." },
        { title: "Eerste segmenten", body: "Op basis van je CRM definiëren we de eerste lijsten: klanten, prospects, sector A vs B." },
        { title: "Templates & stem", body: "We maken een huisstijl-template en stellen Q af op de tone die past bij e-mailcommunicatie (anders dan op je site)." },
        { title: "Eerste campagne", body: "We doen de eerste verzending samen: content, timing, lijstkeuze. Daarna zie je de resultaten direct in het dashboard." },
        { title: "Doorlopend", body: "Elke campagne genereert leer-data. Q leert van wat werkt en stelt verbeteringen voor de volgende keer voor." },
      ],
    },
  },
  advertenties: {
    heroLead: "Adverteren",
    heroHighlight: "met je eigen data.",
    heroIntro:
      "Google Ads en social-campagnes draaien vanuit Forester OS, gevoed door wat er in je CRM gebeurt. Q schrijft varianten, het dashboard laat zien welke euro waar landt.",
    featuresDetailed: [
      { title: "Google Ads-koppeling", body: "Beheer campagnes vanuit het Forester OS-dashboard, met dezelfde audiences en attributie als je CRM. Geen losse Google-tabblad meer." },
      { title: "Social campagnes", body: "LinkedIn-, Meta- en TikTok-campagnes vanuit één plek. Doelgroepen op basis van CRM-segmenten (klanten, prospects, sectoren)." },
      { title: "Q-ad copy", body: "Q schrijft ad-varianten op basis van je merk en wat je website nu zegt. A/B-tests op de automaat, jij keurt de winnaar." },
      { title: "CRM-attributie", body: "Welke campagne leidde tot welke deal? Iedere euro terug te halen tot bron-kanaal en specifieke advertentie." },
    ],
    relatedSlugs: ["lead-engine", "seo", "ai"],
    faq: [
      { q: "Beheren jullie het mediabudget?", a: "Wij doen de setup, optimalisatie en rapportage. Het mediabudget zelf (Google/Meta-betalingen) loopt via jouw eigen creditcard of factuur — transparant en geen mark-up." },
      { q: "Wat als ik nog geen advertentiebudget heb?", a: "Geen probleem. We kunnen vanaf €250/mnd starten en op basis van CRM-attributie laten zien wat het oplevert. Schalen op wat werkt." },
    ],
    metaDescription:
      "Forester OS Advertenties: Google Ads en social-campagnes vanuit je eigen platform, met CRM-attributie, Q-ad copy en transparant beheer zonder mediabudget-mark-up.",
    widgets: [
      { kind: "hero-dashboard", view: "advertenties" },
      {
        kind: "stats-cards",
        eyebrow: "Wat campagnes opleveren",
        title: "Iedere euro terug te halen tot bron.",
        intro: "Gemiddelde campagne-performance bij een klant op het Growth-pakket, met CRM-attributie ingeschakeld.",
        cards: [
          { label: "Besteed", prefix: "€", value: 2.4, decimals: 1, suffix: "k", descriptor: "deze maand", viz: "bars", trend: false },
          { label: "Leads", value: 47, delta: "+18", descriptor: "via campagnes", viz: "spark" },
          { label: "Cost per lead", prefix: "€", value: 51, delta: "-€12", descriptor: "vs vorige periode", viz: "gauge" },
        ],
      },
    ],
    steps: {
      eyebrow: "Zo werkt het",
      title: "Van account-koppeling tot eerste opbrengst.",
      intro: "We starten klein en schalen op wat werkt. Met volle attributie tot in je CRM, zodat je iedere euro kunt terughalen.",
      items: [
        { title: "Audit & doelen", body: "We bekijken je huidige campagnes (of starten vanaf nul) en bepalen meetbare doelen: cost per lead, ROAS, leads per maand." },
        { title: "Setup & koppeling", body: "Google Ads, LinkedIn en/of Meta worden gekoppeld aan Forester OS, inclusief conversie-tracking via je CRM." },
        { title: "Creatives & doelgroepen", body: "Q schrijft eerste advertentievarianten op basis van je merk en website. Doelgroepen baseren we op CRM-segmenten." },
        { title: "Live + leren", body: "We zetten campagnes live met voorzichtig budget, leren wat werkt en schalen op wat presteert. Geen 'set and forget'." },
        { title: "Maandelijkse rapportage", body: "Elke maand laten we zien wat elke euro opleverde, terug te halen tot specifieke advertentie en deal." },
      ],
    },
  },
};

export const FORESTER_FAQS: ForesterFaqItem[] = [
  {
    q: "Waarom een eigen platform en niet losse tools?",
    a: "Omdat losse tools niet weten van elkaars bestaan. Je CRM weet niet dat iemand een quickscan deed; je nieuwsbrief weet niet welke deals open staan. Forester OS deelt één database, één tone-of-voice (Q) en één login. Geen integratielijm, geen export-import.",
  },
  {
    q: "Kan ik losse modules aan- of uitzetten?",
    a: "Ja. Niet elke organisatie heeft alles tegelijk nodig. Op Core start je met de basis (website, CRM, lead engines), op Growth komt automation en e-mail erbij. Modules die je niet gebruikt zitten gewoon uit, geen onnodige UI.",
  },
  {
    q: "Wat is het verschil met HubSpot of Salesforce?",
    a: "HubSpot en Salesforce zijn losse SaaS-platforms voor je marketing/sales. Wij leveren het volledige platform inclusief je website, hosting en het onderhoud erbij. Geen per-user-licentie, geen losse facturen voor hosting, integraties of CMS-licenties.",
  },
  {
    q: "Wie zit er achter Forester OS?",
    a: "Webgrowth Company. We bouwen sinds 2016 platforms voor groeiende organisaties en hebben Forester OS sinds 2024 als ons eigen fundament. Inmiddels draait het bij 227 klanten in Nederland, met een 9,4 op Google.",
  },
  {
    q: "Werkt Forester OS ook met onze bestaande tools?",
    a: "Op Growth en hoger koppelen we met je bestaande CRM, boekhouding, mailplatform of planning, zodat je geen data dubbel hoeft in te voeren. We doen wat helpt, niet wat ons uitkomt.",
  },
  {
    q: "Is Forester OS toekomstvast?",
    a: "Het platform wordt continu door ons doorontwikkeld en draait op moderne web-tech die elke nieuwe site razendsnel maakt. Q (de AI-laag) krijgt elke maand nieuwe vaardigheden. Onze klanten krijgen die updates automatisch, zonder migratiekosten.",
  },
];
