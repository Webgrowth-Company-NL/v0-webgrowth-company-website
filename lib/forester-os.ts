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
  /** Optionele overrides voor de featuresDetailed-sectie (anders fallback: "{module} bestaat uit deze onderdelen."). */
  featuresHeading?: string;
  featuresIntro?: string;
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
      { title: "Eigen content-types", body: "Naast pagina's en blogs richten we je eigen content-structuren in voor bijvoorbeeld cases, vacatures, appartementen of producten, en die beheer je daarna zelf in een handige tabel-weergave waarin je met één klik kunt publiceren." },
      { title: "Live preview", body: "Wijzig een tekst of vervang een foto, druk op preview en zie meteen hoe het op desktop én op mobiel staat, zodat je rustig kunt schuiven tot het klopt voordat je het live zet." },
      { title: "Geen losse hosting", body: "Je krijgt snelle Nederlandse hosting met SSL, dagelijkse back-ups en CDN ingebouwd, zonder aparte rekening of los contract met een hostingpartij." },
      { title: "Wekelijks onderhoud", body: "We updaten, monitoren en testen je site elke week zodat we storingen voor je afvangen voordat ze klanten kosten, in plaats van dat jij ons moet bellen als er iets stuk gaat." },
    ],
    relatedSlugs: ["seo", "lead-engine", "content-publisher"],
    faq: [
      { q: "Werkt mijn bestaande domein?", a: "Ja, we verhuizen je domein zonder downtime en regelen DNS, SSL en e-mail-routing voor je. Tijdens en na de migratie loopt alles gewoon door, dus je klanten merken er niets van." },
      { q: "Is mijn site mobile-first?", a: "Ja, alles wat we bouwen is mobile-first ontworpen en getest op echte toestellen. Voor de meeste klanten komt zo'n zeventig procent van het verkeer via mobiel binnen, en daar bouwen we de hele site op." },
      { q: "Kan ik zelf nieuwe content-types aanmaken?", a: "Nee, dat doen wij voor je. In de kick-off bespreken we welke content-types je bedrijf nodig heeft (denk aan appartementen, auto's, je vloot, vacatures, teamgenoten of een productcatalogus) en wij richten ze in. Wil je er later eentje bij? Schiet 'm in als taak, dan regelen wij dat binnen een sprint." },
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
      title: "Van handtekening tot livegang in maximaal vier sprints.",
      intro:
        "Een strak traject in drie duidelijke fases, met elke twee weken een meeting zodat je precies weet waar we staan en wat er aankomt.",
      items: [
        {
          title: "Kick-off voor het hele traject",
          body: "In één meeting nemen we de strategie, sitemap, content-types, lead engines en alles wat verder bij Forester OS komt kijken door. Op dag één weten we hoeveel sprints we nodig hebben en wat het einddoel is.",
        },
        {
          title: "Wij werken het uit",
          body: "Maximaal vier sprints van twee weken, samen zo'n twee maanden tot livegang. Wij bouwen, Q schrijft de basisteksten in jouw stem, en aan het einde van elke sprint zie je wat klaar is en wat eraan komt.",
        },
        {
          title: "We zetten 'm live",
          body: "We slopen 'm eerst bijna kapot tijdens het testen, fixen wat we vinden en doen daarna de DNS-flip zonder downtime. Daarna krijg je de sleutels en blijft 'ie elke week onderhouden, zodat jij er niet meer naar om hoeft te kijken.",
        },
      ],
    },
  },
  "lead-engine": {
    heroLead: "Bezoekers omzetten in",
    heroHighlight: "echte aanvragen.",
    heroIntro:
      "Quickscans, prijscalculators en slimme formulieren die meer doen dan een e-mail bij je binnenharken. Elke aanvraag landt direct in je CRM mét context, en je krijgt een berichtje op de telefoon.",
    featuresHeading: "De Lead Engines die we in Forester OS hebben.",
    featuresIntro:
      "Eén Lead Engine kan een quickscan zijn, een calculator, een aanmeldformulier of een combinatie daarvan. Wij bouwen 'm op maat voor jouw bedrijf, in jouw stem. Dit zijn de soorten die we het vaakst draaien.",
    featuresDetailed: [
      {
        title: "Quickscan & audit",
        body: "De bezoeker beantwoordt vijf tot tien vragen en krijgt binnen twee minuten een gepersonaliseerd rapport terug. Werkt voor website-audits, ICT-checks, gezondheidsscans en gratis-adviestools. De bezoeker krijgt waarde, jij krijgt context bij de lead.",
      },
      {
        title: "Prijscalculator",
        body: "Pakket, periode, opties en aantallen rekenen live mee. De prospect ziet vooraf wat het ongeveer gaat kosten, en jij krijgt geen 'kunt u een offerte sturen?'-mails meer. Werkt voor abonnementen, IT-support, schoonmaak en alles met meerdere variabelen.",
      },
      {
        title: "Offerte-aanvraag met context",
        body: "Een slim aanvraagformulier waarmee de prospect foto's, traject, lading of dossiergegevens vooraf meestuurt. De offerte rolt vervolgens uit Forester OS in jouw stem, vol context. Werkt voor bouw, transport, logistiek en complexere B2B.",
      },
      {
        title: "Training- en event-inschrijving",
        body: "Cursisten of deelnemers schrijven zichzelf in, betalen vooraf en krijgen automatisch een uitnodiging in hun agenda. Werkt voor IT-trainingen, masterclasses, online cursussen en evenementen, met de voortgang per persoon zichtbaar in je CRM.",
      },
      {
        title: "Demo- of trial-aanvraag",
        body: "Een toegangsformulier dat de prospect direct toegang geeft tot een demo, gratis trial of online tour. Wij signaleren wie warm is en hoever ze zijn gekomen, zodat sales weet wanneer een belletje het verschil maakt.",
      },
      {
        title: "Slim contactformulier",
        body: "Een formulier dat zich aanpast op basis van wat de bezoeker eerder antwoordt, dus korter, relevanter en met een hogere completion-rate dan een statisch lang formulier. De aanvraag landt direct in je CRM met routering naar de juiste collega.",
      },
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
      title: "Van briefing tot eerste lead in een paar weken.",
      intro: "Geen wekenlang gepraat over wat het zou kunnen worden. We bespreken samen het mechanisme, tekenen het uit, bouwen het voor je en koppelen 'm aan Forester OS.",
      items: [
        {
          title: "Kick-off meeting",
          body: "In de gezamenlijke kick-off bespreken we welk soort Lead Engine bij jou past, of het nu een quickscan, prijscalculator, aanmeldformulier of een combinatie daarvan wordt, en welke kwalificatievragen daar logisch bij horen om sales sneller op het juiste spoor te zetten.",
        },
        {
          title: "Wij tekenen 'm uit",
          body: "Op basis van wat we tijdens de kick-off hebben besproken werken wij de Lead Engine uit, met de vragen, de logica, de uitkomsten en de uitnodigende teksten. Q levert de eerste versie aan in jouw stem, zodat je niet vanaf een wit vel begint.",
        },
        {
          title: "Wij bouwen 'm voor je",
          body: "We bouwen de Lead Engine rechtstreeks in Forester OS, met de juiste tagging, WhatsApp-notificaties en routing naar je CRM. Zo komt elke nieuwe aanvraag direct op je telefoon binnen, mét alle context die we eerder hebben uitgevraagd.",
        },
        {
          title: "Jij test en geeft feedback",
          body: "Voordat we 'm live zetten loop je 'm zelf door alsof je een prospect bent, en stuur je ons door wat aanvoelt als kort of houtje-touwtje. Wij verwerken je opmerkingen zodat het eindresultaat klopt met hoe jouw bedrijf zich wil presenteren.",
        },
        {
          title: "We passen aan en koppelen aan Forester OS",
          body: "We verwerken je feedback, finetunen de vragen of het design en koppelen de Lead Engine zo aan Forester OS dat elke aanvraag automatisch in de juiste pijplijn landt. Vanaf dat moment kijken we doorlopend met je mee om vragen of ritme bij te schaven.",
        },
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
          title: "Kick-off voor het hele traject",
          body: "In de gezamenlijke kick-off kiezen we ook het format dat bij jouw expertise past (korte training, meerdaags programma, boekbare sessies of een digitaal product) en bepalen we het prijsmodel en de doelgroep.",
        },
        {
          title: "Wij werken het uit",
          body: "Jij levert de expertise en Q schrijft de basis in jouw stem, terwijl wij de winkel, de betalingen (iDEAL, creditcard, factuur of abonnement) en de automatische toegang bouwen. Voor sessies koppelen we je agenda, voor producten de download-flow.",
        },
        {
          title: "We zetten 'm live",
          body: "We zetten je verkoopmotor voorzichtig live en kijken mee bij de eerste deelnemers of kopers. Op basis van wat we zien stellen we modules of prijzen bij, zodat 'ie elke maand beter loopt.",
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
        {
          title: "Kick-off voor het hele traject",
          body: "In de gezamenlijke kick-off bekijken we ook hoe jouw pijplijn eruit moet zien, welke statussen daar logisch bij horen en welke rollen iedereen in het team krijgt.",
        },
        {
          title: "Wij werken het uit",
          body: "We nemen je bestaande contacten en deals over (uit Excel, HubSpot, Pipedrive of waar dan ook), zetten je pijplijn op met de statussen die jij wilt en geven iedereen een eigen login met de juiste rechten en meldingen.",
        },
        {
          title: "We zetten 'm live",
          body: "De eerste maand kijken we intensief mee en passen statussen of meldingen aan tot 'ie precies bij jouw werkritme past. Daarna signaleert Q deals die te lang stilstaan en stelt hij opvolgingen voor, zodat jij de controle houdt zonder elke dag te hoeven duwen.",
        },
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
      title: "Van eerste analyse tot stijgende rankings.",
      intro: "SEO als ingebouwde laag in Forester OS, niet als losse opdracht aan een bureau. Met maandelijkse aanpassingen op basis van data die echt iets oplevert.",
      items: [
        {
          title: "Kick-off voor het hele traject",
          body: "In de gezamenlijke kick-off koppelen we ook je Search Console en doen we een eerste analyse. Welke pagina's groeien, welke zakken en waar laat je nu verkeer liggen aan je concurrenten.",
        },
        {
          title: "Wij werken het uit",
          body: "Op basis van de analyse en je concurrentie kiezen we 25 tot 50 zoekwoorden om aan te werken, en Q stelt voor welke pagina's eerst gemaakt of herschreven moeten worden, met logische interne links die elkaar versterken.",
        },
        {
          title: "We zetten 'm live",
          body: "Elke maand zie je wat verbeterd is, wat tegenvalt en wat we hierna gaan doen. Wat werkt schalen we op, wat niet werkt parkeren we, zonder rapport om het rapport.",
        },
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
      "Q is de AI-assistent in Forester OS die je site, leads en CRM kent. Hij schrijft content, vat inzichten samen en stelt opvolgingen voor. Eén appje en hij regelt het.",
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
        {
          title: "Kick-off voor het hele traject",
          body: "In de gezamenlijke kick-off laten we Q ook je website, je CRM en je bestaande content lezen. Daar leert hij je merk, je toon en je context van, en aan de hand van een paar voorbeeldzinnen leren we hem hoe jij klinkt.",
        },
        {
          title: "Wij werken het uit",
          body: "We geven Q de eerste concrete taken (een blog schrijven, een aanvraag samenvatten, een opvolg-mail voorstellen) en zetten hem klaar op de plekken waar jij werkt: in het CMS naast de tekst-editor, in het CRM naast elke deal, en in een chat-window voor losse vragen.",
        },
        {
          title: "We zetten 'm live",
          body: "Jij keurt zijn output, wij blijven 'm bijschaven op basis van wat goed gaat en wat soms misgaat. Op die manier wordt Q elke maand een beetje beter, omdat we hem trainen op zijn eigen werk in jouw context.",
        },
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
        {
          title: "Kick-off voor het hele traject",
          body: "In de gezamenlijke kick-off bepalen we ook welke onderwerpen je wilt publiceren, in welke mix (blogs, cases, klantverhalen, updates) en op welk ritme: wekelijks, twee-wekelijks of maandelijks.",
        },
        {
          title: "Wij werken het uit",
          body: "We bouwen herbruikbare templates per content-type zodat elke publicatie consistent voelt, ook als Q ze vult, en zetten de auto-publicaties klaar met een goedkeurmoment vooraf.",
        },
        {
          title: "We zetten 'm live",
          body: "De eerste maand keur jij elke publicatie. Daarna kan een deel automatisch zodra we zien dat de kwaliteit klopt, en Q blijft schrijven terwijl jij keurt wat je wilt keuren.",
        },
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
      intro: "Eerst zorgen we dat je mails überhaupt in de inbox aankomen, daarna kijken we naar de content. Een kanaal dat presteert omdat je vanaf domein-niveau goed staat.",
      items: [
        {
          title: "Kick-off voor het hele traject",
          body: "In de gezamenlijke kick-off richten we ook je verzenddomein in (de technische instellingen die ervoor zorgen dat mails uit jouw naam in de inbox landen en niet in spam).",
        },
        {
          title: "Wij werken het uit",
          body: "Op basis van je CRM definiëren we de eerste segmenten (klanten, prospects, per sector) en bouwen we een huisstijl-template, terwijl we Q afstemmen op de toon die bij e-mailcommunicatie past en die net wat anders mag zijn dan op je site.",
        },
        {
          title: "We zetten 'm live",
          body: "De eerste verzending doen we samen, met content, timing en lijstkeuze. Elke campagne erna genereert leer-data, en Q stelt op basis daarvan verbeteringen voor die de volgende verzending net iets beter laten lopen.",
        },
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
      { q: "Beheren jullie het mediabudget?", a: "Wij doen de setup, optimalisatie en rapportage. Het mediabudget zelf (de betalingen aan Google en Meta) loopt via jouw eigen creditcard of factuur, dus dat blijft volledig transparant en wij rekenen daar geen opslag op." },
      { q: "Wat als ik nog geen advertentiebudget heb?", a: "Geen probleem. We kunnen al vanaf €25 per maand starten en op basis van CRM-attributie laten zien wat het oplevert. Op wat werkt, schalen we op." },
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
        {
          title: "Kick-off voor het hele traject",
          body: "In de gezamenlijke kick-off bekijken we ook je huidige campagnes (of starten we vanaf nul) en bepalen we meetbare doelen, zoals kosten per lead, opbrengst per euro en het aantal leads dat je per maand wilt binnenhalen.",
        },
        {
          title: "Wij werken het uit",
          body: "We koppelen Google, LinkedIn en Meta aan Forester OS inclusief de conversie-tracking via je CRM, en Q schrijft de eerste advertentievarianten op basis van je merk en website. Doelgroepen baseren we op de segmenten uit je eigen CRM.",
        },
        {
          title: "We zetten 'm live",
          body: "We starten met een voorzichtig budget (vanaf €25 per maand is genoeg om te beginnen), leren wat werkt en schalen op wat presteert. Elke maand laten we zien wat elke euro opleverde, terug te halen tot de specifieke advertentie en de deal die eruit kwam.",
        },
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
