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

export type ForesterFaqItem = { q: string; a: string };

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
