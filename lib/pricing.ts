/**
 * Publieke abonnementsplannen voor /prijzen.
 *
 * Bron: Forester OS (`lib/subscriptions/plans.ts` in het platform-monorepo).
 * Houd ID's gelijk aan het platform (`pro`, `premium`, `scale`); UI-labels zijn
 * vrij. Bestaande klanten houden hun afwijkende prijs in Firestore.
 */

export type PricingPlanId = "pro" | "premium" | "scale";

export type PricingPlan = {
  id: PricingPlanId;
  name: string;
  tagline: string;
  monthlyPrice: number | null; // null = op aanvraag
  ctaLabel: string;
  ctaHref: string;
  popular?: boolean;
  /** Korte propositie onder de prijs */
  pitch: string;
  features: string[];
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "pro",
    name: "Core",
    tagline: "Jij hebt een website nodig. Wij geven je een platform.",
    monthlyPrice: 399,
    ctaLabel: "Start met Core",
    ctaHref: "/contact?plan=core",
    pitch: "Voor groeiende organisaties die af willen van losse tools.",
    features: [
      "Professionele website op maat",
      "Forester OS-toegang voor je hele team",
      "Live dashboard met je belangrijkste metrics",
      "CRM voor contacten, leads en deals",
      "Maandelijks Momentum Report met inzichten",
      "Continu geoptimaliseerd door ons team",
      "2 contactformulieren",
      "2 lead engines (quickscan, calculator, registratie)",
      "Maximaal 25 SEO-keywords gemonitord",
      "Hosting, back-ups, beveiliging en AVG inbegrepen",
    ],
  },
  {
    id: "premium",
    name: "Growth",
    tagline: "Jouw website, jouw tools, jouw automations. Alles verbonden.",
    monthlyPrice: 699,
    popular: true,
    ctaLabel: "Kies Growth",
    ctaHref: "/contact?plan=growth",
    pitch: "Voor teams die marketing op één plek willen draaien.",
    features: [
      "Alles van Core",
      "Koppelingen met externe tools (Pipedrive, HubSpot, Mailchimp, …)",
      "Marketing automations en workflows",
      "Automatische lead-opvolging",
      "E-mailcampagnes vanuit Forester",
      "Priority support",
      "4 contactformulieren",
      "4 lead engines",
      "Maximaal 50 SEO-keywords gemonitord",
      "Q (AI-assistent) met onbeperkt gebruik",
    ],
  },
  {
    id: "scale",
    name: "Scale",
    tagline: "Jij hebt een idee voor een platform of app. Wij bouwen het.",
    monthlyPrice: 999,
    ctaLabel: "Plan een gesprek",
    ctaHref: "/contact?plan=scale",
    pitch: "Voor organisaties met een eigen product of multi-site setup.",
    features: [
      "Custom platform of app op maat",
      "Van scratch gebouwd, Forester OS als basis",
      "Dedicated development-team",
      "Strategisch partnership",
      "Onbeperkte lead engines en formulieren",
    ],
  },
];

/* ── Vergelijking met losse tools (typische zakelijke stack) ───────── */

export type RivalTool = {
  category: string;
  name: string;
  /** Maandelijkse prijsrange in euro's; ontbreekt als de tool alleen eenmalig betaalt. */
  monthlyMin?: number;
  monthlyMax?: number;
  /** Eenmalige bouwkosten (bv. een website-bureau dat eenmalig een site oplevert). */
  oneTime?: number;
  note?: string;
};

/**
 * Realistische marktprijzen voor een zakelijke stack van losse tools.
 * Dezelfde negen categorieën als op de homepage (SectionShift), met dezelfde
 * prijsranges per categorie. Bedragen excl. BTW.
 */
export const RIVAL_STACK: RivalTool[] = [
  { category: "Websitebureau", name: "Externe webbouwer", oneTime: 4000, note: "eenmalige bouw" },
  { category: "Hoster", name: "Aparte hostingpartij", monthlyMin: 15, monthlyMax: 50 },
  { category: "CRM", name: "HubSpot Sales Hub Pro", monthlyMin: 50, monthlyMax: 450, note: "afhankelijk van team" },
  { category: "E-mailtool", name: "Mailchimp Standard", monthlyMin: 20, monthlyMax: 150 },
  { category: "Security", name: "Beveiligings-abonnement", monthlyMin: 15, monthlyMax: 80 },
  { category: "Content-uurtjes", name: "Copywriter of bureau", monthlyMin: 200, monthlyMax: 800 },
  { category: "Onderhoud", name: "Dev-retainer", monthlyMin: 50, monthlyMax: 200 },
  { category: "Ads-beheer", name: "Mediabureau-fee", monthlyMin: 200, monthlyMax: 600, note: "los van mediabudget" },
  { category: "SEO-bureau", name: "SEO-specialist", monthlyMin: 400, monthlyMax: 1500 },
];

export const RIVAL_STACK_TOTAL_MIN = RIVAL_STACK.reduce(
  (sum, t) => sum + (t.monthlyMin ?? 0),
  0,
);
export const RIVAL_STACK_TOTAL_MAX = RIVAL_STACK.reduce(
  (sum, t) => sum + (t.monthlyMax ?? 0),
  0,
);
export const RIVAL_WEBSITE_BUILD_ONE_TIME = 4000;


/* ── FAQ specifiek voor de prijzen-pagina ──────────────────────────── */

export type PricingFaqItem = { q: string; a: string };

export const PRICING_FAQS: PricingFaqItem[] = [
  {
    q: "Zit ik vast aan een lang contract?",
    a: "Je start met een initiële contractperiode (standaard 12 maanden, zodat we de site goed kunnen opbouwen). Daarna is het abonnement maandelijks opzegbaar met 2 maanden opzegtermijn. Je content en data blijven van jou, bij vertrek krijg je een complete export.",
  },
  {
    q: "Wat zit er allemaal in de prijs?",
    a: "Website, hosting in Nederland, wekelijks onderhoud, beveiliging, dagelijkse back-ups, SSL, AVG-maatregelen, CRM, je gekozen lead engines, SEO-monitoring, het maandelijkse Momentum Report en doorlopende optimalisatie door ons team. Geen losse facturen voor hosting, integraties of softwarelicenties.",
  },
  {
    q: "Ben ik eigenaar van de website?",
    a: "Voor 100%. De code en content zijn van jou, geen wurgcontract. Wil je na je contract weg, dan krijg je een schone back-up van je content en data, en blijft je domein gewoon in eigen beheer. Geen vendor lock-in.",
  },
  {
    q: "Wat gebeurt er met onze data en Lead Engines als we vertrekken?",
    a: "Bij vertrek krijg je een complete export van je content, leads en CRM-data. Van onze custom Lead Engines krijg je daarnaast een volledige blauwdruk en documentatie, zodat je nieuwe ontwikkelteam ze één-op-één kan herbouwen op een eigen stack. Geen vendor lock-in.",
  },
  {
    q: "Wat als ik over een jaar meer leads of een tweede site nodig heb?",
    a: "Dan groei je mee naar Growth of Scale. We rekenen alleen het prijsverschil bij, geen migratiekosten of setup-fees. Zakt je behoefte, dan kun je terug naar een lager pakket.",
  },
  {
    q: "Krijg ik een eigen ontwerp of is het een template?",
    a: "Een eigen ontwerp, op basis van je merk en je doel. Geen template-werk: we bouwen op Forester OS als platform-fundament, met een design dat alleen van jou is.",
  },
  {
    q: "Is er een setup-fee?",
    a: "Nooit. Geen opstartkosten, geen setup-fee, ook niet voor Scale-projecten. Het maandbedrag is wat het is, inclusief migratie en onboarding. Wat we afspreken staat vooraf op papier.",
  },
  {
    q: "Hoe snel sta ik live?",
    a: "Voor een nieuwe site werken we met 3 tot 4 sprints van 2 weken (zo'n 6 tot 8 weken van krabbel tot livegang), inclusief kickoff, twee-wekelijkse meetings en testronde. Kleinere projecten of een losse Lead Engine kunnen sneller. We werken in vaste sprints, dus je weet elke twee weken precies wat klaar is.",
  },
  {
    q: "Hoe betrouwbaar is de hosting?",
    a: "De afgelopen jaren 99,99% uptime. Hollandsche hosting op snelle servers in Nederland, met SSL, dagelijkse back-ups en monitoring. We gaan eerder uit voor een biertje dan dat onze servers eruit liggen.",
  },
  {
    q: "Hoe bereik ik jullie als er iets is?",
    a: "App of bel Martijn (oprichter) tijdens kantoortijden op 076 204 5010. Geen keuzemenu's, geen ticket-loket. Daarnaast schiet je elke aanpassing in als taak via Forester OS, dan staan ze direct in onze pijplijn.",
  },
  {
    q: "Wat is de betalingstermijn?",
    a: "De facturen kennen een betalingstermijn van 14 dagen. Bij Jaarlijks krijg je een korting; bij Maandelijks loopt de incasso of betaling rond de eerste van de maand.",
  },
  {
    q: "Is mijn data veilig en AVG-proof?",
    a: "Ja. Hosting in de EU (Nederland), dagelijkse back-ups, SSL, en privacy- en cookie-compliance zit ingebakken in Forester OS. We verzamelen alleen wat nodig is om je site beter te laten presteren en verkopen nooit data aan derden. Stop je met Forester OS, dan blijft je data van jou en wordt 'm na de overdracht uit onze systemen verwijderd, tenzij anders afgesproken.",
  },
];
