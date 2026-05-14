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
    tagline: "Prospects opwarmen op de automatische piloot",
    body:
      "AI-trainingen, quizzes en kennisproducten die prospects verleiden waarde te krijgen voordat ze met je praten. Vanaf het eerste klikje warmer.",
    features: ["AI-trainingen", "Quizzes", "Lead scoring", "CRM-integratie"],
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
  },
  "sales-engine": {
    heroLead: "Prospects opwarmen",
    heroHighlight: "voor jij belt.",
    heroIntro:
      "AI-trainingen, quizzes en kennisproducten die prospects verleiden waarde te krijgen voordat ze met je praten. Vanaf het eerste klikje warmer, beter geïnformeerd en met een hogere koopintentie.",
    featuresDetailed: [
      { title: "AI-trainingen", body: "Korte interactieve trainingen die je expertise overdragen. Prospect leert iets, jij krijgt een gekwalificeerde lead met context." },
      { title: "Quizzes", body: "Een persoonlijkheidstest, een kennischeck of een sector-benchmark. Resultaat in ruil voor contactgegevens, hoge engagement." },
      { title: "Lead scoring", body: "Niet elke aanvraag is gelijk. Op basis van gedrag en antwoorden rangschikken we wie als eerste benaderd moet worden." },
      { title: "CRM-integratie", body: "Wat een prospect leerde, las en bekeek komt automatisch in z'n CRM-record. Sales weet vanaf minuut één wat er speelt." },
    ],
    relatedSlugs: ["lead-engine", "ai", "crm"],
    faq: [
      { q: "Voor wie is dit nuttig?", a: "Voor diensten waar prospects veel willen weten voordat ze tekenen: advocaten, consultants, software, onderwijs. Een training of quiz vervangt deels het eerste gesprek." },
      { q: "Maken jullie de content?", a: "We helpen de structuur en het concept op te zetten. Q kan de basis schrijven; jij voegt je expertise toe. Zo blijft het herkenbaar jouw stem." },
    ],
    metaDescription:
      "Forester OS Sales Engine: AI-trainingen, quizzes en kennisproducten die prospects opwarmen voordat sales belt. Hogere koopintentie, betere kwalificatie.",
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
    a: "Het platform draait op Next.js en wordt continu door ons doorontwikkeld. Q (de AI-laag) krijgt elke maand nieuwe vaardigheden. Onze klanten krijgen die updates automatisch, zonder migratiekosten.",
  },
];
