/**
 * Content voor de Website APK-pagina (/website-apk).
 *
 * De scan zelf draait in Forester OS en wordt hier ingelijfd via een iframe-embed:
 *   https://app.webgrowth.company/website-scan/embed?theme=forester
 * De embed stuurt zijn hoogte naar de parent via postMessage:
 *   { type: "website-scan-height", height: <px> }
 */

export const APK_EMBED_URL =
  "https://app.webgrowth.company/website-scan/embed?theme=forester&leadEngine=website-apk&ownerWebsiteId=C1PlnFQIFM1iEhrrwGfy&fathomSiteId=XDEYWMOV";

export type ApkFeature = { title: string; body: string; icon: ApkIconKey };

export type ApkIconKey =
  | "gauge"
  | "search"
  | "users"
  | "shield"
  | "wand"
  | "coins";

/** Wat je in het rapport krijgt. */
export const APK_FEATURES: ApkFeature[] = [
  {
    title: "Een AI-analyse van je site",
    body: "Wat je site nu daadwerkelijk uitstraalt, voor wie en in welke branche. In gewone taal opgeschreven, geen jargon.",
    icon: "wand",
  },
  {
    title: "Inschatting van je bezoekersaantal",
    body: "Op basis van je branche en techniek geven we een realistische range van wat er nu per maand binnenkomt aan bezoek, en wat haalbaar is.",
    icon: "users",
  },
  {
    title: "Wat een lead voor jou betekent",
    body: "We definiëren wat een lead concreet is voor jouw business, en hoeveel prospects per maand passend zijn bij je branche.",
    icon: "search",
  },
  {
    title: "Snelheid, techniek en vindbaarheid",
    body: "Welke technologie je nu gebruikt, en hoe die scoort op laadtijd, mobiel en de signalen die Google meeneemt in het oordeel.",
    icon: "gauge",
  },
  {
    title: "Een eerlijke kostenanalyse",
    body: "We rekenen uit wat je nu vermoedelijk jaarlijks kwijt bent aan bouw, hosting, onderhoud, updates en losse aanpassingen.",
    icon: "coins",
  },
  {
    title: "Veiligheid en AVG-signalen",
    body: "Wat je site lekt aan derden, of cookies AVG-proof zijn, en wat een redelijke baseline voor een zakelijke site is.",
    icon: "shield",
  },
];

export type ApkStep = { title: string; body: string };

export const APK_STEPS: ApkStep[] = [
  {
    title: "Vul je URL in",
    body: "Eén veld. Geen account, geen creditcard. We checken meteen of de site bereikbaar is en starten de AI-analyse in de achtergrond.",
  },
  {
    title: "Beantwoord zeven vragen",
    body: "Hoe makkelijk is het nu om iets te wijzigen? Liggen er campagnes op de plank? Wat moet je site komend jaar vooral doen? Korte multiple-choice, klaar in twee minuten.",
  },
  {
    title: "Ontvang je rapport",
    body: "Direct in je scherm én per e-mail. Met je profiel, een eerlijke analyse en concrete verbeterpunten. Geen verkoopgesprek tenzij je daarom vraagt.",
  },
];

export type ApkFaqItem = { q: string; a: string };

export const APK_FAQS: ApkFaqItem[] = [
  {
    q: "Wat kost de APK?",
    a: "Niets. De Website APK is gratis. Geen account, geen creditcard, geen vervolggesprek tenzij je daar zelf om vraagt.",
  },
  {
    q: "Hoelang duurt het?",
    a: "Twee tot drie minuten. Een veld voor je URL, zeven korte multiple-choice vragen, en je gegevens om het rapport naar te sturen. De AI-analyse loopt in de achtergrond mee.",
  },
  {
    q: "Wat gebeurt er met mijn gegevens?",
    a: "Je e-mailadres gebruiken we alleen om het rapport te sturen en eventueel een keer terug te koppelen. We verkopen geen data, en je kunt je gegevens altijd laten verwijderen. Zie de privacyverklaring voor details.",
  },
  {
    q: "Kijken jullie ook naar mijn data zelf?",
    a: "We analyseren de openbaar zichtbare kant van je site (HTML, content, techniek-signalen). We loggen niet in en kijken niet in je back-end of CRM. Wil je een diepere analyse, dan plannen we een gesprek.",
  },
  {
    q: "Krijg ik daarna een verkoper aan de telefoon?",
    a: "Nee. Het rapport is het rapport. Pas als je zelf reageert op de mail of een gesprek inplant, nemen we contact op. We mailen niet door als je dat niet wilt.",
  },
  {
    q: "Werkt het ook voor mijn webshop?",
    a: "Ja. De analyse herkent webshops en geeft passende inzichten over branche, bezoek en conversie. Voor diepe technische webshop-audits is een aparte sessie handiger; dat regelen we los.",
  },
];
