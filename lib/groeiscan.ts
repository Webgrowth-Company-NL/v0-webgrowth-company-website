/**
 * Content voor de Groeiscan-pagina (/groeiscan). Vervangt de Website APK (6-11-2026).
 *
 * De scan zelf draait in Forester OS en wordt hier ingelijfd via een iframe-embed:
 *   https://app.webgrowth.company/groeiscan/embed
 * De embed stuurt zijn hoogte naar de parent via postMessage:
 *   { type: "groeiscan-height", height: <px> }
 * en meldt een ingevulde scan met { type: "groeiscan-submitted" }.
 */

// Lokaal kun je de scan van een eigen Forester-server inlijsten met NEXT_PUBLIC_GROEISCAN_EMBED_URL.
export const GROEISCAN_EMBED_URL =
  process.env.NEXT_PUBLIC_GROEISCAN_EMBED_URL ||
  "https://app.webgrowth.company/groeiscan/embed?leadEngine=groeiscan&ownerWebsiteId=C1PlnFQIFM1iEhrrwGfy";

export type GroeiscanIconKey = "coins" | "chef" | "search" | "compass" | "factory" | "user";

export type GroeiscanFeature = { title: string; body: string; icon: GroeiscanIconKey };

/** Wat je in de uitslag krijgt. */
export const GROEISCAN_FEATURES: GroeiscanFeature[] = [
  {
    title: "Wat het je kost, in euro's",
    body: "Hoeveel uur er per week naar zoeken, overtypen en nabellen gaat, en wat dat je per jaar kost. Met jouw eigen uurtarief.",
    icon: "coins",
  },
  {
    title: "Je keukenprofiel",
    body: "Losse ingrediënten, recepten met handwerk ertussen, of klaar voor een kookboek: één platform dat je hele keten draait.",
    icon: "chef",
  },
  {
    title: "Je drie grootste lekken",
    body: "Waar de meeste tijd en fouten zitten. Van afspraken in iemands hoofd tot een offerte met de prijs van vorig jaar.",
    icon: "search",
  },
  {
    title: "Een eerlijk advies",
    body: "Welke stap nu het meeste oplevert. Soms is dat een eigen platform, soms gewoon je data op één plek.",
    icon: "compass",
  },
  {
    title: "Voorbeelden uit de praktijk",
    body: "Hoe Bosscher International van offerte tot levering in één systeem werkt, en wat dat scheelt.",
    icon: "factory",
  },
  {
    title: "Ook voor eenpitters",
    body: "Het gaat niet om hoe groot je bent, maar om hoe je werkt. Ook alleen kun je veel uren kwijtraken tussen de stappen.",
    icon: "user",
  },
];

export type GroeiscanStep = { title: string; body: string };

export const GROEISCAN_STEPS: GroeiscanStep[] = [
  {
    title: "Vertel hoe je werkt",
    body: "Tien korte vragen over je bedrijf, je stappen van aanvraag tot factuur en je systemen. Klikken, geen typwerk.",
  },
  {
    title: "Zie wat het kost",
    body: "Je ziet meteen hoeveel tijd er weglekt, wat dat per jaar kost en waar de meeste winst zit.",
  },
  {
    title: "Kies je vervolgstap",
    body: "De uitslag staat ook in je mailbox. Wil je verder praten, dan plan je zelf een kennismaking.",
  },
];

export type GroeiscanFaqItem = { q: string; a: string };

export const GROEISCAN_FAQS: GroeiscanFaqItem[] = [
  {
    q: "Wat kost de Groeiscan?",
    a: "Niets. De Groeiscan is gratis, zonder account en zonder creditcard.",
  },
  {
    q: "Hoelang duurt het?",
    a: "Ongeveer drie minuten. Tien korte vragen en je gegevens om de uitslag naar te sturen.",
  },
  {
    q: "Hoe komen jullie aan dat bedrag?",
    a: "Uren per week die verloren gaan aan zoeken, overtypen en nabellen, keer 46 werkweken, keer het uurtarief dat je zelf kiest. Het is een inschatting op basis van je antwoorden, geen offerte.",
  },
  {
    q: "Is dit alleen voor grote bedrijven?",
    a: "Nee. Het gaat om efficiëntie, niet om grootte. Ook een eenpitter met veel stappen tussen aanvraag en factuur kan veel tijd terugwinnen.",
  },
  {
    q: "Wat gebeurt er met mijn gegevens?",
    a: "We gebruiken ze om je uitslag te sturen en eventueel een keer contact op te nemen. We verkopen geen data, en je kunt je gegevens altijd laten verwijderen. Zie de privacyverklaring.",
  },
  {
    q: "Krijg ik daarna een verkoper aan de telefoon?",
    a: "Alleen als je dat wilt. Je plant zelf een kennismaking, of je reageert op de mail met je uitslag.",
  },
];
