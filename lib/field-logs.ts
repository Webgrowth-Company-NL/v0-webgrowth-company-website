/**
 * Field Logs - de Webgrowth-blog: bevindingen uit de praktijk, "lief dagboek"-stijl.
 * Content geport uit de v0-marketingsite. Body's volgen later; voorlopig dienen
 * titel + excerpt als content (genoeg voor een echte, indexeerbare pagina).
 */
export type FieldLog = {
  slug: string;
  /** ISO-datum, voor sortering + <time> */
  date: string;
  /** Leesbare datum, bv. "Augustus 2025" */
  dateLabel: string;
  /** Onderwerp-tag, bv. "SEO", "Automatisering" */
  tag: string;
  title: string;
  excerpt: string;
  readTime: string;
};

export const FIELD_LOGS: FieldLog[] = [
  {
    slug: "webshop-bouwen-voor-mkb",
    date: "2025-08-18",
    dateLabel: "Augustus 2025",
    tag: "E-commerce",
    title: "E-commerce op Forester OS: waarom we WooCommerce achter ons lieten",
    excerpt:
      "Waarom we e-commerce bouwen op Forester OS in Next.js in plaats van WooCommerce. Sneller, beter vindbaar en volledig geautomatiseerd voor het MKB.",
    readTime: "7 min",
  },
  {
    slug: "magic-link-voor-makkelijker-inloggen",
    date: "2025-07-22",
    dateLabel: "Juli 2025",
    tag: "Automatisering",
    title: "Magic Link: wachtwoorden de deur uit bij Pitch Academy",
    excerpt:
      "Klanten vergaten hun wachtwoord en haakten af voor ze de offerte hadden gezien. We losten het op met een magic link. Minder wrijving, meer opens.",
    readTime: "5 min",
  },
  {
    slug: "mobiel-menu-voor-meer-reserveringen",
    date: "2025-07-14",
    dateLabel: "Juli 2025",
    tag: "Conversie",
    title: "Hoe een vast mobiel menu 30% meer reserveringen opleverde",
    excerpt:
      "Restaurant Chung had een mooie website, maar mobiele bezoekers haalden zelden de reserveerknop. Een vaste navigatiebalk onderaan het scherm veranderde dat.",
    readTime: "4 min",
  },
  {
    slug: "bolt-meer-inzichten-voor-je-website",
    date: "2025-07-08",
    dateLabel: "Juli 2025",
    tag: "Analytics",
    title: "Bolt krijgt drie nieuwe metrics: zo gebruik je ze",
    excerpt:
      "Paginadiepte, bezoekduur en verkeersbronnen zijn nu beschikbaar in Bolt. Wat die cijfers betekenen en hoe je ze gebruikt om je website te verbeteren.",
    readTime: "4 min",
  },
  {
    slug: "reiswebsite-voor-the-africa-experience",
    date: "2025-06-23",
    dateLabel: "Juni 2025",
    tag: "Maatwerk",
    title: "Next.js maatwerk voor The Africa Experience",
    excerpt:
      "Hoe we de reiswebsite van The Africa Experience migreerden van WordPress naar Forester OS in Next.js: TypeScript-datamodellen, statische generatie en een directe Pipedrive-koppeling.",
    readTime: "6 min",
  },
  {
    slug: "offertes-automatisch-via-pipedrive",
    date: "2025-06-09",
    dateLabel: "Juni 2025",
    tag: "Automatisering",
    title: "Van websiteformulier naar kant-en-klare offerte in Pipedrive",
    excerpt:
      "Hoe we een offerteflow bouwden in Forester OS zonder Zapier: Next.js API-route, directe Pipedrive-API en automatische prijsberekening. Van 25 minuten naar 3 minuten per aanvraag.",
    readTime: "6 min",
  },
  {
    slug: "vloot-en-projecten-verbinden-voor-roll-group",
    date: "2025-06-02",
    dateLabel: "Juni 2025",
    tag: "Maatwerk",
    title: "Vloot en projecten slim koppelen voor Roll Group",
    excerpt:
      "Hoe we op Forester OS een Next.js-platform bouwden met TypeScript-relaties tussen vloot en projecten. Statische generatie, ISR en geen WordPress-overhead.",
    readTime: "5 min",
  },
  {
    slug: "dynamische-content-zonder-acf-repeater",
    date: "2025-05-26",
    dateLabel: "Mei 2025",
    tag: "Onder de motorkap",
    title: "Van ACF Repeater naar TypeScript: hoe Forester OS dynamische content beheert",
    excerpt:
      "Wat TypeScript-arrays in Forester OS beter doen dan ACF Repeater in WordPress: consistente structuur, hergebruik en een beheerpaneel dat Q actief bijhoudt.",
    readTime: "5 min",
  },
  {
    slug: "laadtijd-website-verbeteren",
    date: "2025-04-01",
    dateLabel: "April 2025",
    tag: "Performance",
    title: "Hoe we de laadtijd van klantwebsites met 40% verbeterden",
    excerpt:
      "Een trage website kost je klanten. We laten zien welke technische ingrepen het meeste verschil maken, en wat dit concreet opleverde in conversies.",
    readTime: "8 min",
  },
  {
    slug: "automatische-contentoptimalisatie",
    date: "2025-03-01",
    dateLabel: "Maart 2025",
    tag: "SEO",
    title: "Automatische contentoptimalisatie: wat werkt en wat niet",
    excerpt:
      "We trainden Q om automatisch SEO-kansen te spotten op klantwebsites. Hier is wat we leerden, waar het werkte en waar het nog schuurt.",
    readTime: "7 min",
  },
  {
    slug: "van-0-naar-1000-bezoekers-in-30-dagen",
    date: "2025-02-01",
    dateLabel: "Februari 2025",
    tag: "Vindbaarheid",
    title: "Van 0 naar 1.000 bezoekers in 30 dagen",
    excerpt:
      "Hoe een lokale MKB-ondernemer zijn online vindbaarheid transformeerde. Inclusief de exacte stappen, tijdlijn en resultaten.",
    readTime: "6 min",
  },
];

export function fieldLogBySlug(slug: string): FieldLog | undefined {
  return FIELD_LOGS.find((l) => l.slug === slug);
}
