/**
 * Single source of truth voor placeholder-marketingpagina's: SEO-titels,
 * zichtbare H1's, intro's. Voedt de route-bestanden én app/sitemap.ts.
 */

export type SeoPage = {
  /** Volledige route, bv. "/forester-os/website" */
  path: string;
  /** Laatste path-segment, gebruikt door [slug]-routes. Leeg voor index/standalone. */
  slug?: string;
  /** Zichtbare H1 op de pagina */
  h1: string;
  /** <title>: geoptimaliseerd voor vindbaarheid */
  metaTitle: string;
  /** <meta name="description"> */
  metaDescription: string;
  /** Klein badge-label boven de H1 */
  eyebrow?: string;
  /** Lead-paragraaf onder de H1 (telt mee als content) */
  intro: string;
  /** Roadmap-pagina: toont "Binnenkort beschikbaar" i.p.v. "in opbouw" */
  soon?: boolean;
  /** Uit de index houden (bv. login) */
  noindex?: boolean;
  /** Illustratie-bestand in /public/illustrations (zonder extensie). Default: "growth" */
  illustration?: "growth" | "writing" | "communication" | "not-found";
};

export const FORESTER_PAGES: SeoPage[] = [
  {
    path: "/forester-os/website",
    slug: "website",
    h1: "Website & CMS",
    metaTitle: "Website & CMS in Forester OS: bouw en beheer je site | Webgrowth",
    metaDescription:
      "Een razendsnelle website die je zelf beheert: pagina's, berichten en eigen contenttypes, zonder los CMS of webbouwer.",
    eyebrow: "Forester OS",
    intro:
      "Een razendsnelle website die je zelf beheert: pagina's, berichten en eigen contenttypes, zonder los CMS of webbouwer.",
  },
  {
    path: "/forester-os/lead-engine",
    slug: "lead-engine",
    h1: "Lead Engine",
    metaTitle: "Lead Engine: quick quoters en calculators die leads opleveren | Forester OS",
    metaDescription:
      "Quickscans, prijscalculators en slimme formulieren die bezoekers omzetten in concrete aanvragen, rechtstreeks in je CRM.",
    eyebrow: "Forester OS",
    intro:
      "Quickscans, prijscalculators en slimme formulieren die bezoekers omzetten in concrete aanvragen, rechtstreeks in je CRM.",
  },
  {
    path: "/forester-os/sales-engine",
    slug: "sales-engine",
    h1: "Sales Engine",
    metaTitle: "Sales Engine: AI-trainingen en quizzes voor warme prospects | Forester OS",
    metaDescription:
      "AI-gestuurde trainingen, quizzes en e-learning die prospects opwarmen en kwalificeren voordat je in gesprek gaat.",
    eyebrow: "Forester OS",
    intro:
      "AI-gestuurde trainingen, quizzes en e-learning die prospects opwarmen en kwalificeren voordat je in gesprek gaat.",
  },
  {
    path: "/forester-os/crm",
    slug: "crm",
    h1: "CRM & sales-pijplijn",
    metaTitle: "CRM & sales-pijplijn: leads en deals op één plek | Forester OS",
    metaDescription:
      "Elke lead, taak en deal visueel door je pijplijn. Eén overzicht voor je hele team, automatisch bijgewerkt.",
    eyebrow: "Forester OS",
    intro:
      "Elke lead, taak en deal visueel door je pijplijn. Eén overzicht voor je hele team, automatisch bijgewerkt.",
  },
  {
    path: "/forester-os/seo",
    slug: "seo",
    h1: "SEO & vindbaarheid",
    metaTitle: "SEO & vindbaarheid: Search Console-koppeling en AI-suggesties | Forester OS",
    metaDescription:
      "Search Console-data, AI-suggesties en rankings in één dashboard. Beter gevonden worden zonder los SEO-bureau.",
    eyebrow: "Forester OS",
    intro:
      "Search Console-data, AI-suggesties en rankings in één dashboard. Beter gevonden worden zonder los SEO-bureau.",
  },
  {
    path: "/forester-os/ai",
    slug: "ai",
    illustration: "writing",
    h1: "AI-content met Q",
    metaTitle: "AI-content met Q: teksten en inzichten die meegroeien | Forester OS",
    metaDescription:
      "Q, je AI-assistent, schrijft mee aan pagina's, blogs en rapporten en signaleert wat er moet gebeuren, in mensentaal.",
    eyebrow: "Forester OS",
    intro:
      "Q, je AI-assistent, schrijft mee aan pagina's, blogs en rapporten en signaleert wat er moet gebeuren, in mensentaal.",
  },
  {
    path: "/forester-os/content-publisher",
    slug: "content-publisher",
    illustration: "writing",
    h1: "Automatische content publisher",
    metaTitle: "Automatische content publisher: AI publiceert op schema | Forester OS",
    metaDescription:
      "Laat Q op een vast ritme content schrijven én publiceren op je site, zodat je nooit meer met een lege blog zit.",
    eyebrow: "Forester OS",
    intro:
      "Laat Q op een vast ritme content schrijven én publiceren op je site, zodat je nooit meer met een lege blog zit. Binnenkort onderdeel van Forester OS.",
    soon: true,
  },
  {
    path: "/forester-os/nieuwsbrieven",
    slug: "nieuwsbrieven",
    h1: "Nieuwsbrieven",
    metaTitle: "Nieuwsbrieven vanuit je CRM: e-mailcampagnes in Forester OS | Webgrowth",
    metaDescription:
      "E-mailcampagnes en nieuwsbrieven rechtstreeks vanuit je eigen CRM-data, zonder los e-mailpakket.",
    eyebrow: "Forester OS",
    intro:
      "E-mailcampagnes en nieuwsbrieven rechtstreeks vanuit je eigen CRM-data, zonder los e-mailpakket. Binnenkort onderdeel van Forester OS.",
    soon: true,
  },
];

export const OPLOSSING_PAGES: SeoPage[] = [
  {
    path: "/oplossingen/meer-leads",
    slug: "meer-leads",
    h1: "Meer leads uit je website",
    metaTitle: "Meer leads uit je website: tools die bezoekers omzetten | Webgrowth",
    metaDescription:
      "Quickscans, calculators en slimme formulieren die van anonieme bezoekers concrete aanvragen maken.",
    eyebrow: "Oplossingen",
    intro:
      "Quickscans, calculators en slimme formulieren die van anonieme bezoekers concrete aanvragen maken, rechtstreeks in je CRM.",
  },
  {
    path: "/oplossingen/vindbaarheid",
    slug: "vindbaarheid",
    h1: "Beter gevonden worden",
    metaTitle: "Beter gevonden worden: SEO zonder los bureau | Webgrowth Company",
    metaDescription:
      "Search Console-inzichten, AI-suggesties en content die je rankings laat klimmen, allemaal in je groeiplatform.",
    eyebrow: "Oplossingen",
    intro:
      "Search Console-inzichten, AI-suggesties en content die je rankings laat klimmen, allemaal in je groeiplatform.",
  },
  {
    path: "/oplossingen/opvolging",
    slug: "opvolging",
    h1: "Klanten slim opvolgen",
    metaTitle: "Klanten slim opvolgen: één CRM voor je sales-pijplijn | Webgrowth",
    metaDescription:
      "Geen lead meer kwijt: elke aanvraag landt in je CRM en wordt automatisch opgevolgd door je hele team.",
    eyebrow: "Oplossingen",
    intro:
      "Geen lead meer kwijt: elke aanvraag landt in je CRM en wordt automatisch opgevolgd door je hele team.",
  },
  {
    path: "/oplossingen/ai-publiceren",
    slug: "ai-publiceren",
    h1: "Sneller publiceren met AI",
    metaTitle: "Sneller publiceren met AI: content live in minuten | Webgrowth",
    metaDescription:
      "Laat Q je pagina's, blogs en updates schrijven en zet ze met één klik live op je site.",
    eyebrow: "Oplossingen",
    intro:
      "Laat Q je pagina's, blogs en updates schrijven en zet ze met één klik live op je site.",
  },
  {
    path: "/oplossingen/zakelijke-dienstverlening",
    slug: "zakelijke-dienstverlening",
    h1: "Groeiplatform voor zakelijke dienstverleners",
    metaTitle: "Groeiplatform voor advocaten, notarissen en accountants | Webgrowth",
    metaDescription:
      "Website, CRM, marketing en Q in één abonnement, afgestemd op kantoren in de zakelijke dienstverlening.",
    eyebrow: "Oplossingen",
    intro:
      "Website, CRM, marketing en Q in één abonnement, afgestemd op advocaten-, notaris- en accountantskantoren.",
  },
  {
    path: "/oplossingen/creatief-design",
    slug: "creatief-design",
    h1: "Groeiplatform voor creatieve bureaus en studio's",
    metaTitle: "Groeiplatform voor creatieve bureaus en designstudio's | Webgrowth",
    metaDescription:
      "Een platform dat je portfolio, je leads en je marketing samenbrengt, zodat je je tijd aan creatief werk besteedt.",
    eyebrow: "Oplossingen",
    intro:
      "Een platform dat je portfolio, je leads en je marketing samenbrengt, zodat je je tijd aan creatief werk besteedt.",
  },
  {
    path: "/oplossingen/bouw-techniek",
    slug: "bouw-techniek",
    h1: "Groeiplatform voor bouw- en technische bedrijven",
    metaTitle: "Groeiplatform voor bouw, installatie en technische bedrijven | Webgrowth",
    metaDescription:
      "Offerteaanvragen, projecten en klantcommunicatie op één plek, met tools die concrete leads opleveren.",
    eyebrow: "Oplossingen",
    intro:
      "Offerteaanvragen, projecten en klantcommunicatie op één plek, met tools die concrete leads opleveren.",
  },
  {
    path: "/oplossingen/transport",
    slug: "transport",
    h1: "Groeiplatform voor transport en logistiek",
    metaTitle: "Groeiplatform voor transport en logistiek | Webgrowth Company",
    metaDescription:
      "Aanvraagformulieren mét traject en lading, een CRM voor klanten en ritten, en Q-AI voor offerte-concepten. Voor transport, logistiek en koeriers.",
    eyebrow: "Oplossingen",
    intro:
      "Aanvraagformulieren mét traject en lading, een CRM voor klanten en ritten, en Q-AI voor offerte-concepten. Voor transport, logistiek en koeriers.",
  },
  {
    path: "/oplossingen/mkb",
    slug: "mkb",
    h1: "Groeiplatform voor het MKB",
    metaTitle: "Groeiplatform voor het MKB: website, CRM en marketing in één | Webgrowth",
    metaDescription:
      "Negen losse leveranciers vervangen door één abonnement: alles wat je MKB-bedrijf nodig heeft om te groeien.",
    eyebrow: "Oplossingen",
    intro:
      "Negen losse leveranciers vervangen door één abonnement: alles wat je MKB-bedrijf nodig heeft om te groeien.",
  },
];

export const INDEX_PAGES: SeoPage[] = [
  {
    path: "/forester-os",
    h1: "Forester OS",
    metaTitle: "Forester OS: het AI-groeiplatform van Webgrowth Company",
    metaDescription:
      "Eén platform voor je website, CRM, marketing en Q. Negen losse leveranciers, samengebracht tot één login.",
    eyebrow: "Het platform",
    intro:
      "Eén platform voor je website, CRM, marketing en Q. Negen losse leveranciers, samengebracht tot één login.",
  },
  {
    path: "/oplossingen",
    h1: "Oplossingen",
    metaTitle: "Oplossingen: groeien naar doel of naar sector | Webgrowth Company",
    metaDescription:
      "Of je nu meer leads wilt, beter gevonden wilt worden of een platform zoekt dat past bij jouw sector: hier begin je.",
    eyebrow: "Oplossingen",
    intro:
      "Of je nu meer leads wilt, beter gevonden wilt worden of een platform zoekt dat past bij jouw sector: hier begin je.",
  },
];

export const STANDALONE_PAGES: SeoPage[] = [
  {
    path: "/website-apk",
    h1: "De gratis Website APK",
    metaTitle: "Gratis Website APK: hoe scoort jouw website? | Webgrowth Company",
    metaDescription:
      "In een paar minuten zie je hoe jouw website scoort op snelheid, vindbaarheid en conversie, met concrete verbeterpunten.",
    eyebrow: "Gratis scan",
    intro:
      "In een paar minuten zie je hoe jouw website scoort op snelheid, vindbaarheid en conversie, met concrete verbeterpunten.",
  },
  {
    path: "/cases",
    h1: "Klantverhalen",
    metaTitle: "Klantverhalen: wat we voor anderen bouwden | Webgrowth Company",
    metaDescription:
      "Echte voorbeelden van bedrijven die met ons hun website, marketing en groei op orde brachten.",
    eyebrow: "Cases",
    intro:
      "Hier vind je echte voorbeelden van bedrijven die met ons hun website, marketing en groei op orde hebben gebracht, plus wat dat ze opleverde in cijfers en in dagelijks gemak.",
  },
  {
    path: "/over",
    h1: "Over Webgrowth Company",
    metaTitle: "Over Webgrowth Company: wie we zijn sinds 2016",
    metaDescription:
      "Sinds 2016 bouwen we aan één groeiplatform voor ondernemers. Dit is wie we zijn en waar we voor staan.",
    eyebrow: "Over ons",
    intro:
      "Sinds 2016 bouwen we aan één groeiplatform voor ondernemers. Dit is wie we zijn en waar we voor staan.",
  },
  {
    path: "/help",
    h1: "Helpcentrum",
    metaTitle: "Helpcentrum: antwoorden en handleidingen | Webgrowth Company",
    metaDescription:
      "Antwoorden op veelgestelde vragen en stap-voor-stap uitleg over alles wat er in jouw Forester OS-omgeving zit.",
    eyebrow: "Help",
    intro:
      "Hier vind je antwoorden op veelgestelde vragen en stap-voor-stap uitleg over alles wat er in jouw Forester OS-omgeving zit. Kom je er niet uit? Bel of app gewoon Martijn, dan zoeken we het samen uit.",
  },
  {
    path: "/contact",
    illustration: "communication",
    h1: "Neem contact op",
    metaTitle: "Contact: boek een kennismaking met Webgrowth Company",
    metaDescription:
      "Heb je een vraag of wil je even sparren over jouw groei? Boek een vrijblijvende kennismaking, we denken graag mee.",
    eyebrow: "Contact",
    intro:
      "Heb je een vraag of wil je even sparren over jouw groei? Boek een vrijblijvende kennismaking, dan kijken we samen waar Forester OS jou bij kan helpen en waar we beter geen tijd in steken.",
  },
  {
    path: "/prijzen",
    h1: "Prijzen",
    metaTitle: "Prijzen: één abonnement voor het hele platform | Webgrowth Company",
    metaDescription:
      "Eén helder abonnement voor je website, CRM, marketing en AI-assistent Q, vanaf €399 per maand. Geen negen losse facturen meer, geen verrassingen achteraf.",
    eyebrow: "Prijzen",
    intro:
      "Eén helder abonnement voor je website, CRM, marketing en AI-assistent Q, vanaf €399 per maand. Geen negen losse facturen meer, geen verrassingen achteraf.",
  },
  {
    path: "/inloggen",
    h1: "Inloggen",
    metaTitle: "Inloggen op Forester OS | Webgrowth Company",
    metaDescription:
      "Log in op je Forester OS-omgeving en beheer vanuit één scherm je website, je leads, je CRM en je marketing.",
    eyebrow: "Inloggen",
    intro:
      "Log in op je Forester OS-omgeving en beheer vanuit één scherm je website, je leads, je CRM en je marketing.",
    noindex: true,
  },
];

export const ALL_PAGES: SeoPage[] = [
  ...INDEX_PAGES,
  ...FORESTER_PAGES,
  ...OPLOSSING_PAGES,
  ...STANDALONE_PAGES,
];

export function pageBySlug(pages: SeoPage[], slug: string): SeoPage | undefined {
  return pages.find((p) => p.slug === slug);
}

export function pageByPath(path: string): SeoPage | undefined {
  return ALL_PAGES.find((p) => p.path === path);
}
