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
      "Multi-site, multi-brand of multi-vestiging",
      "SLA met response-tijden",
      "Eigen accountmanager",
    ],
  },
];

/* ── Vergelijking met losse tools (typische zakelijke stack) ───────── */

export type RivalTool = {
  category: string;
  name: string;
  monthly: number;
  note?: string;
};

/**
 * Realistische marktprijzen voor een zakelijke stack van losse tools.
 * Bedragen excl. BTW, gemiddelde middentier. Vrij conservatief gekozen.
 */
export const RIVAL_STACK: RivalTool[] = [
  { category: "Website + hosting + onderhoud", name: "WordPress dev-retainer", monthly: 250, note: "doorlopend onderhoud" },
  { category: "CRM", name: "HubSpot Sales Hub Pro", monthly: 450, note: "5 gebruikers" },
  { category: "E-mailmarketing", name: "Mailchimp Standard", monthly: 90, note: "10k contacten" },
  { category: "SEO-tools", name: "Ahrefs Lite", monthly: 99 },
  { category: "Marketing automation", name: "ActiveCampaign Pro", monthly: 179 },
  { category: "Formulieren & quizzes", name: "Typeform Pro", monthly: 75 },
  { category: "Live chat", name: "Intercom Starter", monthly: 74 },
  { category: "Reviews", name: "Trustpilot Standard", monthly: 175 },
  { category: "AI-content", name: "Jasper Boss", monthly: 69 },
];

export const RIVAL_STACK_TOTAL = RIVAL_STACK.reduce((sum, t) => sum + t.monthly, 0);

/* ── FAQ specifiek voor de prijzen-pagina ──────────────────────────── */

export type PricingFaqItem = { q: string; a: string };

export const PRICING_FAQS: PricingFaqItem[] = [
  {
    q: "Zit ik vast aan een lang contract?",
    a: "Nee. Na de initiële periode is je abonnement maandelijks opzegbaar. Je content en data blijven van jou; bij vertrek krijg je een export. We willen dat je blijft omdat het werkt, niet omdat het moet.",
  },
  {
    q: "Wat zit er allemaal in de prijs?",
    a: "Website, hosting, onderhoud, beveiliging, back-ups, AVG-compliance, CRM, je gekozen lead engines, SEO-monitoring, het Momentum Report en doorlopende optimalisatie door ons team. Geen losse facturen voor hosting of CMS-licenties.",
  },
  {
    q: "Wat als ik over een jaar veel meer leads krijg?",
    a: "Dan groei je mee naar Growth of Scale. We rekenen alleen het verschil bij; we sturen geen migratiekosten of setup-fees. Zakt je behoefte? Ook prima, je kunt teruggaan naar een lager pakket.",
  },
  {
    q: "Krijg ik echt een eigen ontwerp of is het een template?",
    a: "Een eigen ontwerp, op basis van je merk en doel. We gebruiken Forester OS als platform, niet als template-machine. Je website lijkt op niemand anders.",
  },
  {
    q: "Is er een setup-fee?",
    a: "Voor Core en Growth niet, mits we starten met een standaard onboarding. Voor Scale-projecten (custom platforms) maken we vooraf een vaste-prijs offerte.",
  },
  {
    q: "Is mijn data veilig en AVG-proof?",
    a: "Ja. Hosting in de EU, dagelijkse back-ups, en privacy- en cookie-compliance zit ingebakken, dus geen losse AVG-module nodig.",
  },
];
