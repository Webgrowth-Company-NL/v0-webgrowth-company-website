/**
 * Content voor de oplossingen-hub (/oplossingen/[slug]).
 *
 * Per slug: hero-copy, herkenbare pains, welke Forester OS-modules dit oplossen,
 * stappenplan, FAQ, plus optionele widgets en illustratie. Slug komt overeen
 * met OPLOSSING_PAGES in lib/pages.ts.
 */

import type { ModuleWidgetData } from "./forester-os";

export type OplossingPain = { title: string; body: string };
export type OplossingFaqItem = { q: string; a: string };
export type OplossingStep = { title: string; body: string };

export type HeroDashboardView =
  | "website"
  | "seo"
  | "crm"
  | "ai"
  | "lead-engine"
  | "sales-engine"
  | "content-publisher"
  | "nieuwsbrieven"
  | "advertenties";

/** De bundle-card die het "WOW dit-voor-dit-bedrag" doet. Prominent ná de hero. */
export type OplossingBundle = {
  /** Bundle-naam, bv. "Het Lead-pakket" */
  name: string;
  /** Eyebrow boven de bundle */
  eyebrow: string;
  /** Korte propositie (1-2 zinnen) */
  pitch: string;
  /** 5-7 concrete deliverables ('alles wat erin zit') */
  includes: string[];
  /** Maandprijs in euro's (excl. BTW) */
  monthlyPrice: number;
  /** Timing-belofte, bv. "Live in 4-6 weken" */
  timing: string;
  /** CTA label op de hoofdknop */
  ctaLabel: string;
  /** CTA href */
  ctaHref: string;
  /** Trust-strip onder de prijs (geruststelling) */
  trustLine?: string;
  /** Welk Forester OS-abonnement de basis is (linkt naar /prijzen) */
  basedOnPlan: "Core" | "Growth" | "Scale";
};

export type OplossingDetail = {
  /** Eerste deel van de hero-H1, outcome-gericht (resultaat, niet feature) */
  heroLead: string;
  /** Tweede deel van de hero-H1 (gradient-shimmer accent) */
  heroHighlight: string;
  /** Subkop onder de H1 */
  heroIntro: string;
  /** Welke single-view we in de hero-widget tonen */
  heroView?: HeroDashboardView;
  /** Bundle met prijs + scope: dé wow-sectie ná de hero */
  bundle: OplossingBundle;
  /** 3-4 herkenbare pains uit de doelgroep */
  pains: OplossingPain[];
  /** Forester OS-modules die hier samenwerken (informatief, geen aparte sectie) */
  moduleSlugs: string[];
  /** Section-proof: stats-cards widget */
  proofWidget?: Extract<ModuleWidgetData, { kind: "stats-cards" }>;
  /** Stappenplan voor 'zo bouwen we het op' */
  steps: { eyebrow: string; title: string; intro: string; items: OplossingStep[] };
  /** FAQ */
  faq: OplossingFaqItem[];
  /** SEO meta description */
  metaDescription: string;
  /** Illustratie (pad in /public/illustrations), blonde mannetje */
  illustration?: string;
};

export const OPLOSSING_DETAILS: Record<string, OplossingDetail> = {
  "meer-leads": {
    heroLead: "Meer aanvragen,",
    heroHighlight: "minder lege mailboxen.",
    heroIntro:
      "Over 4 tot 6 weken staat er een leadflow op je eigen site die anonieme bezoekers omzet in concrete aanvragen, mét context en een seintje op je telefoon. Geen los marketingbureau, geen losse leadgen-tool, geen handmatige opvolging.",
    heroView: "lead-engine",
    bundle: {
      name: "Het Lead-pakket",
      eyebrow: "Wat je krijgt, voor één maandprijs",
      pitch:
        "Alles wat je nodig hebt om bezoekers om te zetten in concrete aanvragen, in één abonnement. Hosting, CMS, CRM, marketing en AI: één login, één factuur, één team dat meedraait.",
      includes: [
        "Razendsnelle website op Forester OS",
        "2 lead engines (quickscan, calculator of slim formulier)",
        "CRM met taken, statussen en WhatsApp-notificaties",
        "Q, je AI-assistent voor opvolg-mails en lead-samenvattingen",
        "Maandelijks Momentum Report met conversiecijfers",
        "Hosting, SSL, dagelijkse back-ups en AVG-compliance",
        "Continu doorontwikkeld door ons team",
      ],
      monthlyPrice: 399,
      timing: "Live in 4 tot 6 weken",
      ctaLabel: "Boek een kennismaking",
      ctaHref: "/contact?plan=core",
      trustLine: "Maandelijks opzegbaar na 6 maanden. Geen setup-fee.",
      basedOnPlan: "Core",
    },
    pains: [
      {
        title: "Bezoekers vertrekken zonder spoor",
        body: "70% van wie op je site komt klikt op niets, mailt niets en belt niet. Advertentiebudget gaat verloren aan mensen waar je nooit meer iets van hoort.",
      },
      {
        title: "Aanvragen zonder context",
        body: "Een 'kunt u een offerte sturen?' zegt je niets over wat de klant zoekt of waar hij in zijn keuze zit. Sales gaat blind in en verspilt tijd op de verkeerde gesprekken.",
      },
      {
        title: "Sales reageert te traag",
        body: "Een lead die langer dan 5 minuten op een reactie wacht, is in de meeste markten al voor de helft verloren. Mailbox checken om 17:00 is geen acquisitiestrategie.",
      },
      {
        title: "Onduidelijk wat wat oplevert",
        body: "Je weet dat Google Ads geld kost en SEO verkeer trekt, maar of die euro's leiden tot deals blijft een gok. Geen attributie, geen leerlijn.",
      },
    ],
    moduleSlugs: ["lead-engine", "crm", "ai", "advertenties"],
    proofWidget: {
      kind: "stats-cards",
      eyebrow: "Wat de Lead Engine oplevert",
      title: "Meer aanvragen, beter gekwalificeerd.",
      intro: "Gemiddelde performance van een Lead Engine bij klanten in het tweede kwartaal na livegang.",
      cards: [
        { label: "Aanvragen", value: 47, delta: "+22%", descriptor: "deze maand", viz: "spark" },
        { label: "Conversie", value: 6.4, decimals: 1, suffix: "%", delta: "+1,2pt", descriptor: "vs vorige periode", viz: "bars" },
        { label: "Gem. waarde", prefix: "€", value: 3.8, decimals: 1, suffix: "k", delta: "+€420", descriptor: "per lead", viz: "gauge" },
      ],
    },
    steps: {
      eyebrow: "Zo bouwen we het op",
      title: "Van probleem tot draaiende leadflow.",
      intro:
        "We beginnen klein, meten echt en schalen op wat werkt. Geen wekenlang strategisch zwabberen, gewoon iets dat leads oplevert en dat we kunnen verbeteren.",
      items: [
        {
          title: "Strategie & kwalificatie",
          body: "We bepalen welk lead-mechanisme past (quickscan, calculator, training of slim formulier) en welke kwalificatievragen sales écht nodig heeft om sneller te kunnen werken.",
        },
        {
          title: "Bouw in Forester OS",
          body: "We zetten 'm op binnen je eigen platform, met de juiste tagging, WhatsApp-notificaties en CRM-routing. Geen losse tools, geen koppelingen die ooit breken.",
        },
        {
          title: "Soft launch & meten",
          body: "Eerst rustig live met klein budget om conversie en lead-kwaliteit te meten voordat we 'm breed promoten. Eerste 50 leads zijn een leerset, geen rampscenario.",
        },
        {
          title: "Opschalen wat werkt",
          body: "Op basis van echte data passen we vragen, copy en pricing aan tot de funnel staat. Dan komen advertenties en SEO erbij om volume te brengen.",
        },
        {
          title: "Doorlopend optimaliseren",
          body: "Q signaleert leads die afkoelen, sales krijgt wekelijks een overzicht van kansen, jij stuurt bij waar nodig. Geen losse rapportages, alles in één dashboard.",
        },
      ],
    },
    faq: [
      {
        q: "Hoe snel staat zo'n lead engine live?",
        a: "Een eerste versie kan binnen 4 weken (twee sprints) live. Daarna optimaliseren we 'm op basis van de eerste echte aanvragen, niet op basis van wat we vooraf denken.",
      },
      {
        q: "Werkt dit ook voor B2B?",
        a: "Juist voor B2B. Hoe technischer of duurder je dienstverlening, hoe waardevoller een kwalificatie-stap is voordat sales aan tafel zit. Quickscans en calculators schalen mee.",
      },
      {
        q: "Kan ik meerdere lead engines naast elkaar draaien?",
        a: "Ja. Op Core 2 contactformulieren en 2 lead engines, op Growth 4 + 4, op Scale onbeperkt. Denk aan een quickscan voor IT-trajecten, een prijscalculator voor pakketten en een kennistest voor opleidingen.",
      },
      {
        q: "Wat als ik nog geen CRM heb?",
        a: "Forester OS heeft een eigen CRM ingebouwd. Aanvragen landen er direct in, met de juiste tags en context. Geen losse migratie, geen losse licentie.",
      },
    ],
    metaDescription:
      "Meer leads uit je website: quickscans, calculators en slimme formulieren die bezoekers omzetten in concrete aanvragen, direct in je CRM met context en WhatsApp-melding.",
    illustration: "/illustrations/digital-inspiration.svg",
  },

  "zakelijke-dienstverlening": {
    heroLead: "Acquisitie die niet afhangt van",
    heroHighlight: "het netwerk van één partner.",
    heroIntro:
      "Eén platform voor je hele kantoor: website, CRM, marketing en AI in één abonnement. Junior en senior werken in dezelfde flow, jij krijgt één factuur per maand. Afgestemd op advocaten, notarissen en accountants.",
    heroView: "crm",
    bundle: {
      name: "Het Kantoor-pakket",
      eyebrow: "Wat je krijgt, voor één maandprijs",
      pitch:
        "Een groeiplatform voor je kantoor: vindbare site, kwalificerende leadflow, gedeeld CRM en Q-AI als extra paar handen voor dossier-opvolging. Geen losse leveranciers, geen losse contracten.",
      includes: [
        "Snelle, vindbare website met juridische tone-of-voice",
        "2 lead engines (quickscan, kennistest of calculator)",
        "CRM met dossier-pijplijn voor het hele kantoor",
        "Q-AI voor opvolg-mails en lead-samenvattingen",
        "Tot 25 SEO-keywords met live Search Console-data",
        "Maandelijks Momentum Report met conversiecijfers",
        "Hosting, SSL, back-ups en AVG-compliance",
      ],
      monthlyPrice: 399,
      timing: "Live in 6 tot 8 weken, inclusief migratie",
      ctaLabel: "Plan een kennismaking",
      ctaHref: "/contact?plan=core",
      trustLine: "Maandelijks opzegbaar na 6 maanden. Migratie inbegrepen.",
      basedOnPlan: "Core",
    },
    pains: [
      {
        title: "Acquisitie hangt aan persoonlijke netwerken",
        body: "Wanneer een partner het kantoor verlaat ben je 6 maanden bezig om het netwerk weer op te bouwen. Eén klant minder is altijd zichtbaar in de cijfers.",
      },
      {
        title: "Marketing zit verspreid over 5 leveranciers",
        body: "Website-bouwer, hosting, SEO-bureau, mail-platform, copywriter. Vijf facturen, vijf logins, vijf 'eerst even afstemmen'-momenten voor elke kleine wijziging.",
      },
      {
        title: "Junior collega's krijgen geen warme leads",
        body: "Senior partners hebben hun netwerk, junior advocaten en accountants moeten zelf acquireren. Hoge churn op young professionals is het gevolg.",
      },
      {
        title: "Admin en compliance eten declarabele uren",
        body: "Per dossier 30 minuten admin: intake, AVG-check, documenten verzamelen, archiveren. Niet leuk en niet declarabel, en het stapelt zich op.",
      },
    ],
    moduleSlugs: ["website", "lead-engine", "crm", "ai"],
    proofWidget: {
      kind: "stats-cards",
      eyebrow: "Wat een kantoor terugziet",
      title: "Pijplijn gevuld, sneller gereageerd, minder admin.",
      intro: "Cijfers van een advocatenkantoor in de Drechtsteden, gemeten 9 maanden na livegang met Forester OS.",
      cards: [
        { label: "Nieuwe aanvragen", value: 18, delta: "+5 deze maand", descriptor: "via site én CRM", viz: "spark" },
        { label: "Intake-doorzet", value: 64, suffix: "%", delta: "+12pt", descriptor: "aanvraag → klant", viz: "gauge" },
        { label: "Tijd tot reactie", value: 4, suffix: " min", delta: "-22 min", descriptor: "vs alleen e-mail", viz: "bars" },
      ],
    },
    steps: {
      eyebrow: "Zo werkt het",
      title: "Van losse leveranciers naar één groeiplatform.",
      intro:
        "Geen big-bang migratie, geen 'eerst alles stoppen, dan iets nieuws beginnen'. We faseren in waar je nu staat en bouwen het kantoor stap voor stap om.",
      items: [
        {
          title: "Audit & GTM-strategie",
          body: "We brengen je huidige inkomende leadflow in kaart en bepalen waar de grootste lekken zitten: vindbaarheid, opvolging of acquisitie. Geen aanname, wel cijfers.",
        },
        {
          title: "Website + kennisproducten op Forester OS",
          body: "Snelle, vindbare site met je expertise vertaald in quickscans, kennistests of paid programma's. Warme leads in plaats van koud-acquireren.",
        },
        {
          title: "CRM voor het hele kantoor",
          body: "Eén pijplijn waar dossiers, deals en taken doorlopen. Junior krijgt context bij elke lead, senior houdt overzicht zonder elke keer te moeten vragen.",
        },
        {
          title: "Q als kantoor-AI",
          body: "Q kent je site, je dossiers en je tone-of-voice. Schrijft eerste-versie-mails, vat aanvragen samen en suggereert opvolging. Jij keurt, Q stuurt.",
        },
        {
          title: "Maandelijkse momentum-meeting",
          body: "Eén keer per maand: cijfers, wat groeit, wat blijft achter, wat is de volgende prioriteit. Geen losse rapporten, geen losse facturen, één overzicht.",
        },
      ],
    },
    faq: [
      {
        q: "Werkt dit voor advocaten, notarissen én accountants?",
        a: "Ja. We hebben uitvoeringen voor elk type kantoor (mediation, fiscaal advies, akte-opstelling, audit). De basis is hetzelfde: vindbare site, kwalificerende leadflow, gedeeld CRM en Q-AI als extra paar handen.",
      },
      {
        q: "Hoe zit het met AVG en beroepsgeheim?",
        a: "Forester OS draait op Nederlandse hosting met versleutelde back-ups. Klantgegevens blijven binnen jouw omgeving en gaan niet naar derden. Q's onderliggende modellen worden niet getraind op jouw specifieke dossiers.",
      },
      {
        q: "Kan ik mijn bestaande website-bouwer behouden?",
        a: "Beter niet. Het hele punt van Forester OS is dat je met één login en één leverancier werkt, geen losse koppelingen die telkens kapot gaan. Migratie van je bestaande site is in onze onboarding inbegrepen.",
      },
      {
        q: "Wat als ik al een CRM gebruik (HubSpot, Pipedrive, Teamleader)?",
        a: "Op Growth en hoger koppelen we ermee zodat je gefaseerd kunt migreren of beide naast elkaar kunt gebruiken. Op Core werk je vanaf dag één in het Forester OS-CRM, dat is in de meeste gevallen de simpelste route.",
      },
    ],
    metaDescription:
      "Groeiplatform voor advocaten, notarissen en accountants: website, CRM, marketing en AI in één abonnement. Eén login, één factuur, één team dat meedraait.",
    illustration: "/illustrations/biz-finance.svg",
  },
};
