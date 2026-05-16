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
      title: "Van handtekening tot doorlopende groei.",
      intro:
        "Een strak traject in acht fases waarin we eerst je site bouwen en daarna doorgaan met de marketing-motor die we tijdens de bouw al hebben opgetuigd. Elke twee weken een meeting zodat je precies weet waar we staan en wat er aankomt.",
      items: [
        {
          title: "Kick-off meeting",
          body: "In één meeting nemen we de strategie, sitemap, content-types, Lead Engines en alles wat verder bij Forester OS komt kijken samen door. Op dag één weten we hoeveel sprints we nodig hebben en wat het einddoel is.",
        },
        {
          title: "Marketing plan",
          body: "Op basis van je doelgroep, je merk en wat we tijdens de kick-off bespraken stellen we een marketing-plan op waarin we vastleggen welke boodschap je site moet uitstralen, op welke zoekwoorden we mikken en welke Lead Engines we daarvoor inzetten.",
        },
        {
          title: "Bouwplaats open",
          body: "Wij beginnen met bouwen in drie tot vier sprints van twee weken, samen zo'n zes tot acht weken tot livegang. Aan het einde van elke sprint zie je wat klaar is en wat eraan komt, en kun je nog bijsturen zonder dat het hele traject ontspoort.",
        },
        {
          title: "Lead en Sales Engines erin",
          body: "De Lead Engines en Sales Engines die we tijdens de kick-off hebben afgesproken bouwen we mee in de site, met de juiste vraag-logica, WhatsApp-notificaties en routing naar je CRM. Q schrijft de eerste versie van vragen en uitkomsten in jouw stem.",
        },
        {
          title: "Testen",
          body: "We slopen 'm bijna kapot voordat we 'm aan jou laten zien, op laadtijd, op mobiel, op alle gangbare browsers en op de doorstroming van de Lead Engines. Wat we tegenkomen lossen we direct op.",
        },
        {
          title: "Feedback",
          body: "Jij loopt de hele site door alsof je een nieuwe bezoeker bent, klikt op elke pagina en geeft door waar het schuurt of waar je nog iets anders had verwacht. Wij verwerken al je opmerkingen voordat we 'm online zetten.",
        },
        {
          title: "Live",
          body: "We doen de DNS-flip zonder downtime, zodat je klanten er niets van merken. Daarna krijg je de sleutels en blijft je site elke week door ons onderhouden, terwijl jij elke maand een Momentum-rapport krijgt met de cijfers die er toe doen.",
        },
        {
          title: "Blijven groeien",
          body: "Vanaf de eerste dag dat je site bouwt loopt onze marketing-motor al mee, en die blijft ook na livegang draaien. Wij werken doorlopend aan SEO, content, advertenties en aanpassingen aan je site, zodat je elke maand iets verder komt zonder dat er een nieuw project voor opgetuigd hoeft te worden.",
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
      "Je werkt al hard genoeg, dus pak je kennis in als training, sessie, programma of digitaal product en laat klanten zichzelf leren, boeken en kopen. Wij regelen de winkel, het inplannen, de betaling en de opvolging, zodat jij expert blijft terwijl het platform voor je schaalt.",
    featuresDetailed: [
      {
        title: "Trainingen en cursussen",
        body: "We pakken je expertise in als modules die cursisten in eigen tempo doorlopen, of we plannen klassikale dagen in waarmee je groepen tegelijk meeneemt. Werkt voor IT-trainingen, vakopleidingen, online cursussen en certificeringstrajecten, en de voortgang per cursist is realtime zichtbaar in je CRM.",
      },
      {
        title: "Sessies en boekingen",
        body: "Je verkoopt losse sessies, strippenkaarten of abonnementen, en klanten boeken zelf in je agenda met betaling vooraf en een automatische uitnodiging in hun inbox. Perfect voor coaches, therapeuten en consultants die hun tijd willen schalen zonder dat alle planning op jouw bordje belandt.",
      },
      {
        title: "Digitale producten en downloads",
        body: "Werkboeken, templates, premium guides, audio-bibliotheken of video-bundels maak je één keer en verkoop je oneindig vaak. Na betaling krijgt de klant direct toegang, zonder dat jij er nog iets aan hoeft te doen.",
      },
      {
        title: "Lead scoring in je CRM",
        body: "Wie deed welke module, wie kwam terug voor sessie drie en wie scoorde hoog op de quiz? Sales weet vanaf de eerste klik wie warm is en wat de volgende logische stap is, zonder dat je daar een losse academy-tool naast moet draaien.",
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
      intro: "Geen losse academy-tool die je apart moet onderhouden. We bouwen je verkoopmotor rechtstreeks in op je bestaande platform, in het format dat past bij wat jij wilt verkopen.",
      items: [
        {
          title: "Kick-off meeting",
          body: "In de gezamenlijke kick-off kiezen we ook het format dat bij jouw expertise past, of dat nu een korte training, een meerdaags programma, boekbare sessies of een digitaal product wordt. Ook het prijsmodel en de doelgroep leggen we daar samen vast.",
        },
        {
          title: "Wij tekenen 'm uit",
          body: "We tekenen je leerflow uit op papier: welke modules elkaar opvolgen, welke quizzes erin zitten en welke verkooppagina's daarbij horen. Q levert een eerste versie van content in jouw stem aan, zodat je niet vanaf een wit vel hoeft te beginnen.",
        },
        {
          title: "Wij bouwen 'm voor je",
          body: "Wij bouwen de winkel en koppelen iDEAL, creditcard, factuur of abonnement zodat klanten zichzelf kunnen aanmelden en betalen. Voor sessies koppelen we je agenda, voor digitale producten zetten we de download-flow op en voor trainingen regelen we de toegang per cursist.",
        },
        {
          title: "Jij test en geeft feedback",
          body: "Voordat 't live gaat loop je je eigen verkoopmotor zelf door alsof je een cursist of koper bent, koop je je eigen product en geef je door waar het stroef voelt of waar de uitleg ontbreekt.",
        },
        {
          title: "We passen aan en koppelen aan Forester OS",
          body: "We verwerken je feedback, finetunen modules of prijzen en zorgen dat elke deelnemer of koper automatisch in je CRM landt met de juiste context. Vanaf dat moment kijken we doorlopend mee om aan te passen wat beter kan.",
        },
      ],
    },
  },
  crm: {
    heroLead: "Leads en deals visueel",
    heroHighlight: "door je pijplijn.",
    heroIntro:
      "Eén visueel kanban-overzicht voor je hele team, met leads die binnenkomen via je Lead Engines, deals die je via statussen en taken door je pijplijn duwt, en Q die meedenkt over wat de volgende logische stap is voor elke deal.",
    featuresDetailed: [
      { title: "Drag-and-drop pijplijn", body: "Je verschuift deals met de muis tussen statussen, en je hele team ziet direct waar elke deal staat, wie ermee bezig is en wat er als laatste gebeurde. Geen tabbladen, geen losse spreadsheets en geen 'wie is hier ook alweer mee bezig?'." },
      { title: "Taken per deal", body: "Bij elke deal hangen de bijbehorende taken zoals bellen, offerte sturen of opvolgen, met deadlines, team-toewijzing en notificaties zodat niemand vergeet om de volgende stap te zetten." },
      { title: "Eigen statussen", body: "Werk je met vijf stadia of negen? Je stelt je eigen pijplijn-stadia in met de kleurcodes en automatische acties die bij jouw werk-flow passen, in plaats van dat je je aan een vaste template moet aanpassen." },
      { title: "Suggesties van Q", body: "Q ziet wat er met een deal is gebeurd en stelt voor wat de volgende actie zou moeten zijn, of dat nu het versturen van een opvolg-mail is of gewoon een belletje plegen omdat er al twee weken niets is gebeurd." },
    ],
    relatedSlugs: ["lead-engine", "sales-engine", "ai"],
    faq: [
      { q: "Kunnen meerdere teamleden tegelijk werken?", a: "Ja, op Core werken er tot vijf gebruikers tegelijk in het CRM, en op Growth en Scale is dat onbeperkt. Alles synchroniseert in realtime, taken-notificaties komen direct binnen en je ziet altijd wie wat het laatst heeft aangeraakt." },
      { q: "Kan ik exporteren naar Excel?", a: "Altijd. Je leads, deals, taken en contacten exporteer je in één klik als CSV of Excel-bestand, dus je zit nooit vast aan onze omgeving als je ooit zou willen vertrekken." },
      { q: "Werkt het met onze bestaande CRM?", a: "Op Growth en hoger koppelen we met HubSpot, Pipedrive of Teamleader, zodat je gefaseerd kunt migreren of beide systemen naast elkaar kunt gebruiken zolang dat nog nodig voelt." },
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
      intro: "Geen droge import-export. We tekenen jouw sales-flow uit, koppelen alles aan elkaar en lopen mee tot het CRM precies past bij hoe jouw team werkt.",
      items: [
        {
          title: "Kick-off meeting",
          body: "In de gezamenlijke kick-off bekijken we ook hoe jouw sales-pijplijn eruit moet zien, welke statussen daar logisch bij horen en welke rollen iedereen in het team krijgt, of je nu met vijf of negen stadia werkt en of er onderverdeling per sector nodig is.",
        },
        {
          title: "Uittekenen sales flow",
          body: "We tekenen je sales-flow stap voor stap uit, van eerste contact via offerte naar getekende deal, met de bijbehorende statussen, taken en herinneringen. Je bestaande contacten en deals nemen we daarbij over uit Excel, HubSpot, Pipedrive of waar je ze nu ook hebt staan.",
        },
        {
          title: "Koppelen Engines",
          body: "We koppelen je Lead Engines, Sales Engines en formulieren aan het CRM zodat elke aanvraag automatisch in de juiste pijplijn-stap landt mét alle context. Je hele team krijgt een eigen login met de juiste rechten en meldingen op jullie werkritme.",
        },
        {
          title: "Testen",
          body: "We rollen wat test-leads door de pijplijn om te zien of statussen, automatische taken en notificaties precies doen wat we tijdens het uittekenen hadden bedacht. Wat we tegenkomen passen we direct aan.",
        },
        {
          title: "Feedback verwerken",
          body: "Jij loopt het CRM zelf door, gooit een paar deals door de stadia heen en geeft door waar het schuurt of waar je nog een melding mist. Wij verwerken al je opmerkingen tot het écht jouw werk-flow weerspiegelt.",
        },
        {
          title: "Live",
          body: "Je CRM gaat live, je team kan ermee aan de slag en Q kijkt vanaf dag één mee door deals te signaleren die te lang stilstaan en opvolgingen voor te stellen. Jij houdt de controle, zonder dat je overal achteraan moet zitten.",
        },
      ],
    },
  },
  seo: {
    heroLead: "Wat werkt, wat niet, en",
    heroHighlight: "wat hierna te schrijven.",
    heroIntro:
      "Je ziet in één dashboard welke pagina's groeien, waar je positie zakte of verbeterde en welke concrete content-suggesties Q voor je heeft. Search Console-data, Q's analyses en je ranking-tracking komen samen op één plek, zodat je geen los SEO-bureau aan de zijlijn meer nodig hebt.",
    featuresDetailed: [
      { title: "Search Console-koppeling", body: "Je krijgt echte Google-data te zien, en geen tool die dingen verzint op basis van scrape-werk. Je ziet welke zoekwoorden je nu al vindt, welke pagina's groeien en welke clicks die pagina's krijgen die ze ook werkelijk verdienen." },
      { title: "Rankings dashboard", body: "Op Growth volgen we tot vijftig zoekwoorden met dagelijkse updates, zodat je schommelingen ziet vóórdat ze je klanten kosten. Wat onderaan zakt pakken we op voordat het echt verdwijnt." },
      { title: "Suggesties van Q", body: "Q analyseert je hele content en stelt concreet voor wat er moet gebeuren, zoals dat een pagina een extra sectie over een bepaald onderwerp kan gebruiken of dat een blog nog een interne link mist naar een verwante pagina." },
      { title: "Keyword-tracking met lokale variaties", body: "We volgen niet alleen je hoofdterm maar ook de long-tail rondom je business, inclusief lokale variaties als je in een specifieke regio of stad actief bent en daar gevonden wilt worden." },
    ],
    relatedSlugs: ["ai", "content-publisher", "website"],
    faq: [
      { q: "Vervangt dit een SEO-bureau?", a: "Voor de meeste klanten ja, want wat een bureau wekelijks aan rapportjes stuurt zit hier in het dashboard ingebouwd, met de tools om er direct op te acteren. Voor sterk technische audits werken we daarnaast samen met een gespecialiseerde partner, dus die expertise blijft binnen handbereik als je 'm nodig hebt." },
      { q: "Werkt het ook voor lokale SEO?", a: "Ja, rankings, Google Business-signalen en lokale content-suggesties zitten standaard ingebouwd. Voor regio-specifieke organisaties zoals zorg of zakelijke dienstverlening is lokale SEO vaak het grootste kanaal waar de meeste leads vandaan komen." },
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
      intro: "SEO als ingebouwde laag in Forester OS, niet als losse opdracht aan een bureau. We bouwen de SEO-laag in vijf stappen op en blijven daarna maandelijks bijschaven op wat er echt gebeurt in Search Console.",
      items: [
        {
          title: "Kick-off meeting",
          body: "In de gezamenlijke kick-off koppelen we ook je Search Console en doen we een eerste analyse: welke pagina's groeien, welke zakken en waar laat je nu verkeer liggen aan je concurrenten. Daarmee weten we op dag één waar het laaghangende fruit hangt en waar de uitdagingen zitten.",
        },
        {
          title: "SEO plan",
          body: "Op basis van die eerste analyse, je concurrentie en de markt waarin je actief bent stellen we een SEO-plan op waarin we vastleggen op welke vijfentwintig zoekwoorden we de eerste maanden mikken en welk soort content daarbij hoort om die posities te winnen.",
        },
        {
          title: "SEO verwerken",
          body: "We verwerken de technische SEO door je hele site: snelheid, structured data, interne links, alt-teksten en alle signalen die Google in zijn oordeel meeneemt. Daar waar bestaande pagina's beter kunnen, herschrijven we ze in jouw stem.",
        },
        {
          title: "Content plan",
          body: "Q stelt op basis van het SEO-plan een content-plan voor met topic-clusters die elkaar versterken, en samen met jou bepalen we welke teksten wanneer geschreven en gepubliceerd worden zodat je site organisch blijft groeien.",
        },
        {
          title: "Search Console en constante updates",
          body: "Elke maand zien we in Search Console wat verbeterd is, wat tegenvalt en wat we hierna doen. Wat werkt schalen we op, wat niet werkt parkeren we, en samen blijven we het content-plan elke maand bijschaven op wat de cijfers laten zien.",
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
      { title: "Content schrijven", body: "Q schrijft pagina's, blogs, e-mails en advertentieteksten in jouw stem, omdat hij je hele site kent en zich daarop traint zodra je hem nieuwe content laat zien." },
      { title: "Inzichten samenvatten", body: "Q leest je Search Console, je CRM en je Momentum-data en vertelt je in gewone taal wat er deze maand gebeurde, waar de groei zit en waar het risico ligt." },
      { title: "Opvolgingen voorstellen", body: "Heeft een lead nog niet gereageerd? Q schrijft een passende opvolg-mail die jij goedkeurt voor hij 'm verstuurt, en hij kiest zelf de tijd waarop de mail het meeste kans van slagen heeft." },
      { title: "Q-chat", body: "Vraag Q gewoon iets, zoals 'wat doen we deze week?' of 'welke deal staat al te lang stil?', en hij geeft je een onderbouwd antwoord op basis van de context van je platform." },
    ],
    relatedSlugs: ["seo", "content-publisher", "crm"],
    faq: [
      { q: "Gebruikt Q mijn data om andere klanten te helpen?", a: "Nee, je content, leads en CRM blijven in jouw omgeving. De onderliggende modellen van Q leren niet van jouw specifieke data, we voeren ze alleen tijdens een vraag jouw context mee zodat het antwoord op maat is." },
      { q: "Hoe accuraat is Q?", a: "Voor concept-content, samenvattingen en suggesties bespaart Q je veel tijd, maar het laatste woord is altijd van jou. We bouwen niet op de illusie dat een AI feilloos werkt, dus alles wat Q schrijft of voorstelt komt langs jouw goedkeuring voordat het de deur uitgaat." },
      { q: "Kan ik Q's stem afstellen?", a: "Ja, op Growth kun je per content-type een toon instellen (zakelijk, speels of deskundig bijvoorbeeld) en Q traint zich op jouw bestaande pagina's zodat hij in jouw stem schrijft en niet in die van een algemene chatbot." },
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
  },
  "content-publisher": {
    heroLead: "Content op schema,",
    heroHighlight: "zonder schrijfblok.",
    heroIntro:
      "Met een planning, een vaste stem en een aantal templates publiceert Q op vaste momenten content op je site, zodat jij alleen nog vooraf hoeft goed te keuren. Het ritme komt vanzelf en je content-machine blijft draaien, ook in de weken dat je het te druk hebt om zelf te schrijven.",
    featuresDetailed: [
      { title: "Publicatie-schema", body: "Je bepaalt hoe vaak je wilt publiceren, of dat nu wekelijks, twee-wekelijks of maandelijks wordt, en Q werkt automatisch volgens dat schema. Wil je tussendoor handmatig iets eruit gooien? Dat kan altijd." },
      { title: "Jouw eigen stem", body: "Q leert van je bestaande content hoe jij schrijft en gebruikt diezelfde stem voor elke nieuwe publicatie. Daardoor klinkt het nooit generiek, maar wel herkenbaar als jouw bedrijf." },
      { title: "Template-bibliotheek", body: "We zetten templates klaar voor elk type content dat jij regelmatig publiceert, of het nu cases, tip-blogs, nieuwsupdates of klantverhalen zijn. Q vult de templates in, jij keurt het concept goed voordat het live gaat." },
      { title: "Q als ghostwriter", body: "Geef Q een briefing van drie zinnen en hij schrijft er een heel artikel uit, of laat hem juist vanaf nul beginnen op basis van een topic of een artikel-idee dat door je hoofd schiet." },
    ],
    relatedSlugs: ["ai", "seo", "nieuwsbrieven"],
    faq: [
      { q: "Wordt mijn site nu een Q-spamkanaal?", a: "Nee, jij keurt elke publicatie vooraf goed of stelt een rust-modus in. Q produceert het concept, het ritme bepaal jij volledig, dus er is geen kans dat je site ineens vol massa-content komt te staan." },
      { q: "Wat als Q iets schrijft dat niet klopt?", a: "Dan keur je het simpelweg niet goed. We hebben een revisie-flow waarin je per stuk content kunt aanpassen of opnieuw kunt laten genereren tot het wél klopt, zonder dat je vanaf nul hoeft te beginnen." },
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
      "Je segmenteert op basis van wat er in je CRM staat, schrijft met Q als sparringpartner en verstuurt vanuit je eigen domein. Geen losse Mailchimp-account, geen losse contactenlijst die uit de pas loopt met de rest van je business.",
    featuresDetailed: [
      { title: "Segmenten uit je CRM", body: "Je stuurt alleen aan klanten die in een bepaalde fase, sector of regio passen, en je filtert daarbij live op de data uit je CRM zonder dat je eerst hoeft te exporteren en importeren." },
      { title: "Q als ghostwriter", body: "Vertel Q in een paar zinnen wat je wilt zeggen en hij schrijft de mail voor je in jouw stem. Je past 'm aan tot het klopt, en daarna plant en verstuurt Q 'm op het moment dat jij kiest." },
      { title: "Eigen verzenddomein", body: "We versturen vanaf jouw eigen domein met een goede inbox-reputatie, zodat je mails niet via een Mailchimp-subdomein binnenkomen dat door je ontvangers automatisch als spam wordt herkend." },
      { title: "Analytics inbegrepen", body: "Open-rate, click-rate en conversies zie je direct in het dashboard, en ze zijn gekoppeld aan welke deal er uiteindelijk uit voortkwam, zodat je verder kijkt dan alleen 'iemand klikte ergens op'." },
    ],
    relatedSlugs: ["crm", "ai", "advertenties"],
    faq: [
      { q: "Wat met AVG en double opt-in?", a: "Dat zit standaard ingebakken. Elke ontvanger heeft een afmeld-link, double opt-in is configureerbaar per lijst en de logs van toestemmingen bewaren we automatisch, dus daar hoef je zelf niets aan te doen." },
      { q: "Hoeveel mailings per maand zit erin?", a: "Onbeperkt qua aantal verzendingen. We werken niet met staffel-licenties per contact of per mailing, maar we verwachten wel dat je waarde stuurt en geen ruis, want anders heeft het op de lange termijn geen effect op je inbox-reputatie." },
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
      "Je Google Ads en social-campagnes draaien rechtstreeks vanuit Forester OS, gevoed door wat er in jouw CRM gebeurt. Q schrijft de varianten en het dashboard laat zien welke euro waar uiteindelijk landt, zodat je nooit meer hoeft te raden wat je advertenties opleveren.",
    featuresDetailed: [
      { title: "Google Ads-koppeling", body: "We beheren je campagnes vanuit het Forester OS-dashboard met dezelfde doelgroepen en attributie als je CRM, zodat je nooit meer hoeft te switchen tussen losse Google-tabbladen om te zien hoe het ervoor staat." },
      { title: "Social campagnes", body: "LinkedIn-, Meta- en TikTok-campagnes draaien vanuit één plek, en de doelgroepen baseren we op de segmenten uit je CRM zoals bestaande klanten, warme prospects of een specifieke sector waarop je focust." },
      { title: "Q schrijft je advertenties", body: "Q schrijft advertentie-varianten op basis van je merk en wat je website op dit moment zegt, en draait A/B-tests automatisch terwijl jij alleen nog de winnaar hoeft goed te keuren." },
      { title: "Volledige CRM-attributie", body: "Je ziet precies welke campagne tot welke deal heeft geleid, zodat je iedere geadverteerde euro kunt terughalen tot het bron-kanaal en zelfs tot de specifieke advertentie die het in beweging zette." },
    ],
    relatedSlugs: ["lead-engine", "seo", "ai"],
    faq: [
      { q: "Beheren jullie het mediabudget?", a: "Wij doen de setup, de optimalisatie en de rapportage, terwijl het mediabudget zelf (de betalingen aan Google en Meta) via jouw eigen creditcard of factuur loopt. Dat blijft volledig transparant en wij rekenen daar geen opslag op, dus je weet altijd precies wat naar advertentiebudget gaat en wat naar ons." },
      { q: "Wat als ik nog geen advertentiebudget heb?", a: "Geen probleem, we kunnen al vanaf €25 per maand starten en aan de hand van de CRM-attributie laten zien wat het je oplevert. Op de campagnes die werken schalen we daarna op, zodat je voorzichtig kunt beginnen zonder dat je in één keer een groot bedrag op tafel hoeft te leggen." },
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
