/**
 * Content voor de oplossingen-hub (/oplossingen/[slug]).
 *
 * Per slug: hero-copy, herkenbare pains, welke Forester OS-modules dit oplossen,
 * stappenplan, FAQ, plus optionele widgets en illustratie. Slug komt overeen
 * met OPLOSSING_PAGES in lib/pages.ts.
 */

import type { HeroDashboardConfig } from "@/components/hero-dashboard";
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
  /** Doelgroep-specifieke content voor de hero-widget (bv. kozijnen-quickscan voor bouw) */
  heroViewConfig?: HeroDashboardConfig;
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
    heroViewConfig: {
      crm: {
        label: "Dossier-pijplijn",
        meta: "5 dossiers · €127k open",
        columns: [
          { title: "Intake", statics: [["Familie van Doorn", "€4,8k"], ["Aanvraag Klaver BV", "€2,5k"]] },
          { title: "Lopend", statics: [["Beerens NV", "€12k"]] },
          { title: "Afgerond", statics: [["Estate van Hees", "€8,5k"]] },
        ],
        movingCard: { name: "Overname Holtsma", value: "€18k" },
        wonLabel: "afgerond",
      },
    },
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

  vindbaarheid: {
    heroLead: "Beter gevonden,",
    heroHighlight: "zonder los SEO-bureau.",
    heroIntro:
      "Search Console-data, AI-suggesties en ranking-tracking in één dashboard. Q zegt welke pagina je het eerst moet aanpakken, jij houdt het bij. Geen losse rapporten, geen losse contracten.",
    heroView: "seo",
    bundle: {
      name: "Het SEO-pakket",
      eyebrow: "Wat je krijgt, voor één maandprijs",
      pitch:
        "Search Console, AI-suggesties, rankings en content publiceren in één abonnement. Geen los SEO-bureau, geen handmatige rapportages, geen vergeten optimalisaties.",
      includes: [
        "Razendsnelle website met technische SEO ingebouwd",
        "Search Console-koppeling met live data in je dashboard",
        "Q-AI suggesties voor pagina's en content-optimalisaties",
        "Tot 25 keywords met dagelijkse ranking-monitoring",
        "Maandelijks Momentum Report met SEO-actiepunten",
        "Hosting, SSL en back-ups inbegrepen",
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
        title: "SEO-bureau stuurt rapporten, geen acties",
        body: "Elke maand komt er een PDF met grafieken die je niet leest. Wat je daarna concreet moet doen blijft onduidelijk, en de volgende rapportage zegt vrijwel hetzelfde.",
      },
      {
        title: "Je weet niet welke pagina als eerste aandacht nodig heeft",
        body: "Sommige pagina's bijna in de top-3, andere zakken al maanden. Geen overzicht in welke quick-wins en welke onderhoud nodig hebben, dus het blijft staan.",
      },
      {
        title: "Concurrenten klimmen, jouw posities zakken",
        body: "Je merkt het pas als het verkeer al weg is. Geen alerts, geen vroege signalen, alleen jaarcijfers waar je niets meer aan kunt veranderen.",
      },
      {
        title: "Content schrijven kost tijd die er niet is",
        body: "SEO vraagt om publiceren, maar wie schrijft die zes blogs per maand? Externe copywriters voelen niet als jouw stem en zijn duur.",
      },
    ],
    moduleSlugs: ["seo", "ai", "content-publisher", "website"],
    proofWidget: {
      kind: "stats-cards",
      eyebrow: "Wat de SEO-laag doet",
      title: "Search Console, live, met acties.",
      intro: "Cijfers van een klant in zakelijke dienstverlening, 12 maanden na livegang met Forester OS.",
      cards: [
        { label: "Top-10 posities", value: 47, delta: "+12", descriptor: "deze maand", viz: "bars" },
        { label: "Organisch verkeer", prefix: "+", value: 47, suffix: "%", delta: "afgelopen jaar", descriptor: "vs jaar ervoor", viz: "spark", trend: false },
        { label: "Featured snippets", value: 8, delta: "+3", descriptor: "rich results", viz: "gauge" },
      ],
    },
    steps: {
      eyebrow: "Zo werkt het",
      title: "Van eerste audit tot stijgende rankings.",
      intro:
        "SEO als ingebouwde laag, niet als losse opdracht. Maandelijkse data-driven aanpassingen die echt iets opleveren.",
      items: [
        {
          title: "Audit & nulmeting",
          body: "We koppelen je Search Console en doen een diepe analyse: welke pagina's groeien, welke zakken, waar laat je verkeer liggen.",
        },
        {
          title: "Keyword-strategie",
          body: "Op basis van audit en concurrentie kiezen we 25 keywords om aan te werken: long-tail, lokaal, brand of categorie, afhankelijk van waar de groei zit.",
        },
        {
          title: "Content-plan met Q",
          body: "Q stelt voor wat eerst gemaakt of herschreven moet worden, met topic-clusters en interne links die elkaar versterken. Jij keurt.",
        },
        {
          title: "Maandelijkse optimalisatie",
          body: "Elke maand laten we zien wat verbeterd is, wat tegenviel en wat we hierna doen. Geen rapport om het rapport.",
        },
        {
          title: "Doorlopend monitoren",
          body: "Wat werkt schalen we op, wat niet werkt parkeren we. Geen droge SEO-best-practices, maar wat in jouw markt landt.",
        },
      ],
    },
    faq: [
      {
        q: "Vervangt dit een SEO-bureau?",
        a: "Voor de meeste klanten: ja. Wat een bureau wekelijks aan rapportjes stuurt zit hier ingebouwd, plus de tools om er op te acteren. Voor sterk technische audits werken we met een gespecialiseerde partner samen.",
      },
      {
        q: "Werkt het ook voor lokale SEO?",
        a: "Ja. Rankings, Google Business-signalen en lokale content-suggesties zitten erin. Voor regio-specifieke organisaties (zorg, dienstverlening) is dit vaak het grootste kanaal.",
      },
      {
        q: "Hoe lang duurt het tot ik resultaat zie?",
        a: "Eerste verbeteringen zien we vaak binnen 6 tot 12 weken (technische optimalisaties en content-updates). Substantiële ranking-stijgingen kosten 3 tot 6 maanden, afhankelijk van de markt.",
      },
    ],
    metaDescription:
      "Beter gevonden worden zonder los SEO-bureau: Search Console-data, AI-suggesties en ranking-tracking in één dashboard. Q zegt wat als eerste aandacht nodig heeft.",
    illustration: "/illustrations/business-growth.svg",
  },

  opvolging: {
    heroLead: "Geen lead meer kwijt,",
    heroHighlight: "geen deal vergeten.",
    heroIntro:
      "Eén kanban-pijplijn voor je hele team. Leads vanuit je site, deals met taken en statussen, Q die meedenkt over de volgende stap. Geen losse CRM-licenties, geen synchronisatie-ellende.",
    heroView: "crm",
    bundle: {
      name: "Het Pijplijn-pakket",
      eyebrow: "Wat je krijgt, voor één maandprijs",
      pitch:
        "CRM, taken, automatische opvolging en Q-AI in één platform. Junior krijgt context, senior houdt overzicht, geen deals die tussen wal en schip vallen.",
      includes: [
        "CRM met onbeperkt aantal contacten en deals",
        "Drag-and-drop pijplijn met eigen statussen",
        "Taken per deal met team-toewijzing en deadlines",
        "Q-AI voor opvolg-suggesties en deal-samenvattingen",
        "WhatsApp-meldingen bij nieuwe leads",
        "Maandelijks Momentum Report met pijplijn-cijfers",
        "Hosting, AVG en data-export inbegrepen",
      ],
      monthlyPrice: 399,
      timing: "Live in 3 tot 5 weken",
      ctaLabel: "Boek een kennismaking",
      ctaHref: "/contact?plan=core",
      trustLine: "Maandelijks opzegbaar na 6 maanden. CSV-export altijd mogelijk.",
      basedOnPlan: "Core",
    },
    pains: [
      {
        title: "Leads vergeten in mailboxen",
        body: "Iedereen kijkt op zijn eigen tijd, niemand weet of de lead al beantwoord is. Twee dagen later belt de prospect zelf, en die is dan al bij de concurrent.",
      },
      {
        title: "Iedereen werkt in een ander Excel-bestand",
        body: "Sales heeft een lijst, marketing een andere, finance een derde. Bij elke vraag begint het vissen naar 'de juiste versie'.",
      },
      {
        title: "Niemand weet wat de volgende stap is",
        body: "Een deal staat al weken op 'in gesprek' zonder duidelijke vervolgactie. Geen taken, geen reminders, geen gesprek over wie wat doet.",
      },
      {
        title: "Sales-rapportage moet handmatig samengesteld",
        body: "Voor de directie-meeting kost het een halve maandagochtend om de cijfers bij elkaar te knopen. En dan klopt het soms nog niet.",
      },
    ],
    moduleSlugs: ["crm", "lead-engine", "ai", "nieuwsbrieven"],
    proofWidget: {
      kind: "stats-cards",
      eyebrow: "Pijplijn op één plek",
      title: "Het CRM ziet wat er beweegt.",
      intro: "Live cijfers uit een pijplijn van een klant in de zakelijke dienstverlening, één maand na livegang.",
      cards: [
        { label: "Open deals", prefix: "€", value: 127, suffix: "k", delta: "+€18k", descriptor: "deze maand", viz: "spark" },
        { label: "Conversie", value: 24, suffix: "%", delta: "+3pt", descriptor: "lead → klant", viz: "gauge" },
        { label: "Doorlooptijd", value: 18, suffix: " dagen", delta: "-4 dagen", descriptor: "snellere deals", viz: "bars", trend: false },
      ],
    },
    steps: {
      eyebrow: "Zo werkt het",
      title: "Van eerste lead tot vaste pijplijn.",
      intro:
        "Geen droge import-export. We zetten jouw pijplijn op, lopen mee tijdens de eerste maand en passen aan wat nodig is.",
      items: [
        {
          title: "Migratie & opzet",
          body: "We nemen je bestaande contacten en deals over (uit Excel, HubSpot, Pipedrive of waar dan ook) en mappen ze naar Forester OS.",
        },
        {
          title: "Eigen statussen",
          body: "Samen tekenen we jouw pijplijn-stadia. Werk je met 5 of 9 stappen, met onderverdeling per sector? Jouw keuze, niet onze template.",
        },
        {
          title: "Team & rollen",
          body: "Iedereen krijgt een eigen login met de juiste rechten. Met meldingen, taken en notificaties op jouw werkritme.",
        },
        {
          title: "Eerste 30 dagen",
          body: "We kijken mee tijdens de eerste maand, doen wekelijks een sync en passen statussen of automations aan tot 'ie precies werkt.",
        },
        {
          title: "Doorlopend met Q",
          body: "Q kijkt mee, signaleert deals die te lang stilstaan en stelt opvolgingen voor. Jij houdt de controle.",
        },
      ],
    },
    faq: [
      {
        q: "Kunnen meerdere teamleden tegelijk werken?",
        a: "Ja. Op Core tot 5 gebruikers, op Growth en Scale onbeperkt. Realtime sync, taken-notificaties, en je ziet wie wat heeft aangeraakt.",
      },
      {
        q: "Werkt het met onze bestaande CRM (HubSpot, Pipedrive)?",
        a: "Op Growth en hoger koppelen we ermee, zodat je gefaseerd kunt migreren of beide naast elkaar gebruikt. Op Core werken we vanaf dag één in het Forester OS-CRM.",
      },
      {
        q: "Kan ik exporteren naar Excel?",
        a: "Altijd. Leads, deals, taken en contacten exporteren als CSV of Excel. Geen vendor lock-in.",
      },
      {
        q: "Wat met AVG en klantdata?",
        a: "Forester OS draait op Nederlandse hosting met versleutelde back-ups. Klantgegevens blijven binnen jouw omgeving en gaan niet naar derden.",
      },
    ],
    metaDescription:
      "Geen lead meer kwijt: één kanban-pijplijn voor je hele team, taken per deal, Q-AI voor opvolg-suggesties en WhatsApp-meldingen bij nieuwe aanvragen.",
    illustration: "/illustrations/communication.svg",
  },

  "ai-publiceren": {
    heroLead: "Content op schema,",
    heroHighlight: "zonder schrijfblok.",
    heroIntro:
      "Q schrijft mee aan blogs, cases en nieuwsupdates in jouw stem. Jij keurt vooraf, Q publiceert. Een vol publicatieschema zonder dat je elke maandagochtend met een leeg scherm zit.",
    heroView: "content-publisher",
    bundle: {
      name: "Het Content-pakket",
      eyebrow: "Wat je krijgt, voor één maandprijs",
      pitch:
        "AI-aangedreven content-engine voor je site: templates, schema, Q als ghostwriter en automatische publicatie. Jij keurt, Q schrijft, je site groeit.",
      includes: [
        "Website met content-types voor blogs, cases en updates",
        "Q-AI schrijft basis-content in jouw tone-of-voice",
        "Template-library voor consistente publicaties",
        "Publicatie-schema (wekelijks, twee-wekelijks of maandelijks)",
        "Goedkeur-flow voordat content live gaat",
        "Tot 25 SEO-keywords met live data",
        "Maandelijks Momentum Report met content-prestaties",
      ],
      monthlyPrice: 399,
      timing: "Live in 4 tot 6 weken",
      ctaLabel: "Boek een kennismaking",
      ctaHref: "/contact?plan=core",
      trustLine: "Maandelijks opzegbaar na 6 maanden. Jij keurt elke publicatie.",
      basedOnPlan: "Core",
    },
    pains: [
      {
        title: "Geen tijd om wekelijks te schrijven",
        body: "Je weet dat publicatie-ritme helpt voor SEO en autoriteit, maar er ligt elke week ander werk op je bord. De blog blijft staan.",
      },
      {
        title: "Externe copywriters voelen niet als jouw stem",
        body: "Je hebt het geprobeerd: agency of freelancer. De teksten missen de nuance van jouw vak. Bewerken kost meer tijd dan zelf schrijven.",
      },
      {
        title: "Site staat al zes maanden zonder nieuw bericht",
        body: "Bezoekers zien een blog met '2025'-datums. Het signaal is: bedrijf is niet actief. Concurrenten publiceren wel.",
      },
      {
        title: "Concurrenten publiceren wel, jij niet",
        body: "In Google zie je dezelfde concurrenten in alle long-tail keywords opduiken. Niet omdat ze beter zijn, maar omdat ze publiceren.",
      },
    ],
    moduleSlugs: ["content-publisher", "ai", "seo", "website"],
    proofWidget: {
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
    steps: {
      eyebrow: "Zo werkt het",
      title: "Van strategie tot publicatie op de auto-piloot.",
      intro:
        "Eerst handmatig, dan automatisch. We bouwen de motor op, jij houdt regie over wat erin gaat.",
      items: [
        {
          title: "Content-strategie",
          body: "Welke onderwerpen, hoe vaak, welk type? We bepalen het ritme en de mix (blogs, cases, updates) op basis van wat jouw doelgroep zoekt.",
        },
        {
          title: "Tone-of-voice afstemmen",
          body: "We laten Q je bestaande site lezen en stemmen 'm af op jouw stem. Een paar voorbeeldteksten en Q schrijft herkenbaar.",
        },
        {
          title: "Templates opzetten",
          body: "We bouwen herbruikbare templates per content-type. Zo voelt elke publicatie consistent, ook als Q ze vult.",
        },
        {
          title: "Schema instellen",
          body: "Wekelijks, twee-wekelijks of maandelijks, jij kiest. We zetten de auto-publicaties klaar met een goedkeurmoment vooraf.",
        },
        {
          title: "Doorlopend met Q",
          body: "Q blijft schrijven, jij blijft keuren wat je wilt keuren. Geen schrijfblok meer, geen achterstand in content.",
        },
      ],
    },
    faq: [
      {
        q: "Wordt mijn site een Q-spamkanaal?",
        a: "Nee. Jij keurt elke publicatie vooraf of stelt een rust-modus in. Q produceert concept, het ritme bepaal jij. Geen massa-publishing.",
      },
      {
        q: "Wat als Q iets schrijft dat niet klopt?",
        a: "Dan keur je het niet goed. We hebben een revisie-flow waarin je per stuk content kunt aanpassen of opnieuw genereren tot het klopt.",
      },
      {
        q: "Kan ik handmatige posts blijven plaatsen?",
        a: "Ja. Q is een extra paar handen, niet een vervanger. Veel klanten gebruiken Q voor de basis en schrijven gastblogs of cases zelf.",
      },
    ],
    metaDescription:
      "AI publiceert content op je site, op schema, in jouw tone-of-voice. Templates, planning, Q als ghostwriter, jij keurt elk concept vooraf.",
    illustration: "/illustrations/take-on-the-project.svg",
  },

  "creatief-design": {
    heroLead: "Tijd terug voor",
    heroHighlight: "creatief werk.",
    heroIntro:
      "Eén platform voor je portfolio, je leads en je projecten. Je bureau werkt aan de creatieve klus, niet aan losse tools en bijhorende admin. Geen vijf logins meer voor één klant-traject.",
    heroView: "crm",
    heroViewConfig: {
      crm: {
        label: "Project-pijplijn",
        meta: "5 projecten · €34k open",
        columns: [
          { title: "Brief", statics: [["Klaverlaan brochure", "€3,4k"], ["Hex herhuisstijl", "€7,5k"]] },
          { title: "Concept", statics: [["Kasterop campagne", "€9k"]] },
          { title: "Oplevering", statics: [["Roomers Hotel rebrand", "€6,2k"]] },
        ],
        movingCard: { name: "Studio Polderdijk website", value: "€8,5k" },
        wonLabel: "opgeleverd",
      },
    },
    bundle: {
      name: "Het Studio-pakket",
      eyebrow: "Wat je krijgt, voor één maandprijs",
      pitch:
        "Een portfolio-site die snel laadt, een lead-flow die warme aanvragen binnenhaalt en een CRM dat je projecten managet. Voor designers, ontwerpers en creatieve bureaus die hun tijd terug willen.",
      includes: [
        "Razendsnelle portfolio-website met project-pagina's",
        "2 lead engines (intake-formulier, prijscalculator)",
        "CRM met project-pijplijn en team-rollen",
        "Q-AI voor intake-samenvattingen en proposal-concepten",
        "Tot 25 SEO-keywords met Search Console-data",
        "Maandelijks Momentum Report",
        "Hosting, back-ups en AVG inbegrepen",
      ],
      monthlyPrice: 399,
      timing: "Live in 4 tot 6 weken",
      ctaLabel: "Boek een kennismaking",
      ctaHref: "/contact?plan=core",
      trustLine: "Maandelijks opzegbaar na 6 maanden. Je werk blijft van jou.",
      basedOnPlan: "Core",
    },
    pains: [
      {
        title: "Portfolio in Squarespace, leads in Excel, facturen in Moneybird",
        body: "Voor elke nieuwe klant log je drie keer in. Op tab één plak je een proposal, op tab twee houd je status bij, op tab drie maak je een factuur. Synchroniseren doe je zelf.",
      },
      {
        title: "Intake-gesprekken vertellen elke keer hetzelfde verhaal",
        body: "Welke doelgroep, welk budget, welke timing, welke voorkeuren. Het hele eerste gesprek gaat aan vragen die op een formulier hadden gekund.",
      },
      {
        title: "Geen tijd om de eigen site te updaten",
        body: "Je bouwt sites voor anderen, maar de jouwe staat al maanden zonder nieuwe case. Cobbler's children.",
      },
      {
        title: "Klant verwacht een snelle reactie, jij was aan het ontwerpen",
        body: "Drie uur focus-werk, dan check je je inbox: vijf berichten, twee urgent. Vlot reageren is óók een baan.",
      },
    ],
    moduleSlugs: ["website", "lead-engine", "crm", "ai"],
    proofWidget: {
      kind: "stats-cards",
      eyebrow: "Wat de Studio-aanpak oplevert",
      title: "Meer creatieve uren, minder admin-uren.",
      intro: "Gemiddelde inzet bij creatieve klanten op het Core-pakket, gemeten in het eerste jaar na livegang.",
      cards: [
        { label: "Nieuwe aanvragen", value: 12, delta: "+4 deze maand", descriptor: "via intake-flow", viz: "spark" },
        { label: "Briefing-doorzet", value: 56, suffix: "%", delta: "+14pt", descriptor: "aanvraag → offerte", viz: "gauge" },
        { label: "Tijd bespaard", value: 8, suffix: " uur", delta: "+8 uur", descriptor: "per week op admin", viz: "bars", trend: false },
      ],
    },
    steps: {
      eyebrow: "Zo werkt het",
      title: "Van versplinterde stack naar één studio-OS.",
      intro:
        "We faseren in waar je nu staat. Je hoeft niet alles tegelijk om te zetten, we beginnen met portfolio en leads en bouwen door.",
      items: [
        {
          title: "Portfolio migratie",
          body: "Je bestaande cases en projecten verhuizen we naar Forester OS. Snellere pagina's, betere SEO, beheerbaar zonder code.",
        },
        {
          title: "Intake-flow opzetten",
          body: "Een slim intake-formulier dat de juiste vragen stelt: doelgroep, budget, timing, stijl-voorkeuren. Klant levert vooraf, jij begint warm.",
        },
        {
          title: "CRM voor projecten",
          body: "Projecten lopen door dezelfde pijplijn als leads. Status, taken, deadlines, alles op één plek.",
        },
        {
          title: "Q voor briefings",
          body: "Q vat intakes samen, schrijft eerste proposal-concepten en helpt bij follow-up mails. Jij keurt en stuurt.",
        },
        {
          title: "Doorlopend met momentum",
          body: "Maandelijks Momentum Report laat zien wat aanvragen oplevert en waar de funnel lekt. Bijsturen op data, niet op gevoel.",
        },
      ],
    },
    faq: [
      {
        q: "Werkt dit voor freelancers én bureaus?",
        a: "Beide. Solo-ontwerpers zitten vaak op Core, bureaus met 3+ mensen schalen naar Growth voor team-rollen en marketing automations.",
      },
      {
        q: "Kan ik mijn bestaande Behance of Dribbble-portfolio blijven gebruiken?",
        a: "Ja, we koppelen ze waar dat zinvol is. Maar je hoofd-portfolio op je eigen domein heeft betere SEO-waarde en geeft je meer controle over de presentatie.",
      },
      {
        q: "Is de site mobile-first?",
        a: "Altijd. Veel creatieve doelgroepen kijken eerst op telefoon (Instagram-tab, mailtjes onderweg). Mobile-first is basis, geen optie.",
      },
      {
        q: "Hoe zit het met IP en mijn werk?",
        a: "Alles wat je publiceert blijft van jou. Wij hebben geen rechten op je portfolio of klantwerk. Exporteren naar PDF, CSV of statische HTML kan altijd.",
      },
    ],
    metaDescription:
      "Eén platform voor creatieve bureaus en designstudio's: portfolio, leads en projecten in één abonnement. Minder admin, meer tijd voor creatief werk.",
    illustration: "/illustrations/innovation-ideas.svg",
  },

  "bouw-techniek": {
    heroLead: "Offerte-aanvragen waar je",
    heroHighlight: "echt iets aan hebt.",
    heroIntro:
      "Quickscans en prijscalculators die offertes opleveren mét context (foto's, afmetingen, budget) in plaats van 'kunt u een prijsindicatie sturen?'. Plus een CRM dat je projecten en planning bij elkaar houdt.",
    heroView: "lead-engine",
    heroViewConfig: {
      leadEngine: {
        title: "Quickscan kozijnen",
        questions: [
          { q: "Type kozijn?", options: ["Kunststof", "Hout", "Aluminium", "Mix"], pick: 0 },
          { q: "Aantal kozijnen?", options: ["1-3", "4-8", "9-15", "15+"], pick: 1 },
          { q: "Indicatie planning?", options: ["Asap", "1-3 mnd", "3-6 mnd", "Verkennen"], pick: 1 },
        ],
        successText: "Aanvraag in CRM, mét foto's en specs",
        successSub: "WhatsApp verstuurd naar je telefoon",
      },
    },
    bundle: {
      name: "Het Bouw-pakket",
      eyebrow: "Wat je krijgt, voor één maandprijs",
      pitch:
        "Een site die offertes oplevert mét context, een CRM dat je planning bewaakt en automatische opvolging zodat geen aanvraag verloren gaat. Voor aannemers, installateurs en technische bedrijven.",
      includes: [
        "Vindbare website voor je dienstverlening",
        "Prijscalculator + offerteformulier met foto-upload",
        "CRM met projecten, planning en taken",
        "Q-AI voor offerte-concepten op basis van aanvraag",
        "WhatsApp-melding bij nieuwe aanvraag",
        "Tot 25 SEO-keywords (lokaal of categorie)",
        "Hosting, back-ups en AVG inbegrepen",
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
        title: "Aanvragen zonder foto's, zonder afmetingen, zonder budget",
        body: "Iemand mailt 'wat kost een dakkapel?'. Je belt terug, krijgt het antwoord twee dagen later. Tijd weg, klant ondertussen bij iemand anders.",
      },
      {
        title: "Planning leeft in Excel, agenda's en post-its",
        body: "Wie zit volgende week waar? Hangt van wie je vraagt. Klanten bellen voor een afspraak en jij moet drie plekken checken.",
      },
      {
        title: "Drie offertes per dag schrijven kost een halve werkdag",
        body: "Elke offerte vanaf nul: rekenen, formuleren, doorsturen. Veel zelfde patronen, weinig automatisering.",
      },
      {
        title: "Klant belt over een offerte van drie weken geleden",
        body: "Je weet niet meer welke offerte, welke prijzen, welke condities. Terugzoeken in je mailbox kost minuten per gesprek.",
      },
    ],
    moduleSlugs: ["website", "lead-engine", "crm", "ai"],
    proofWidget: {
      kind: "stats-cards",
      eyebrow: "Wat het oplevert",
      title: "Snellere offertes, hogere conversie.",
      intro: "Cijfers van een installatiebedrijf in Zuid-Holland, 6 maanden na livegang met Forester OS.",
      cards: [
        { label: "Aanvragen", value: 32, delta: "+8 deze maand", descriptor: "via calculator", viz: "spark" },
        { label: "Offerte-tijd", value: 12, suffix: " min", delta: "-28 min", descriptor: "vs handmatig", viz: "bars", trend: false },
        { label: "Offerte-conversie", value: 38, suffix: "%", delta: "+9pt", descriptor: "aanvraag → opdracht", viz: "gauge" },
      ],
    },
    steps: {
      eyebrow: "Zo werkt het",
      title: "Van inkomende mail naar gestructureerde offerte.",
      intro:
        "We bouwen een calculator die de juiste vragen stelt en een CRM dat je projecten bewaakt. Live in 4 tot 6 weken, jij wint tijd vanaf de eerste maand.",
      items: [
        {
          title: "Kick-off meeting",
          body: "We brengen je bestaande offerte-flow in kaart: welke informatie heb je écht nodig en wat vraag je nu te laat?",
        },
        {
          title: "Calculator + offerteformulier",
          body: "We bouwen een lead-flow met foto-upload, afmetingen-velden, budget-indicatie en eventueel beschikbare data. Klant levert vooraf.",
        },
        {
          title: "CRM met projecten",
          body: "Aanvragen landen direct in je CRM met alle context. Eigen statussen voor jouw werk-flow (intake, calc, akkoord, gepland, uitgevoerd).",
        },
        {
          title: "Q als offerte-assistent",
          body: "Q schrijft eerste offerte-concepten op basis van de intake. Jij past prijzen en condities aan, stuurt door.",
        },
        {
          title: "Doorlopend optimaliseren",
          body: "We monitoren waar de funnel lekt: aanvragen die niet door komen, offertes die niet getekend worden. Bijsturen op data.",
        },
      ],
    },
    faq: [
      {
        q: "Werkt de calculator ook voor maatwerk?",
        a: "Ja, we bouwen 'm modulair. Veel maatwerk-vragen kunnen alsnog gestructureerd uitgevraagd worden (omvang, materiaal, urgentie), het laatste deel doe je in een persoonlijk gesprek.",
      },
      {
        q: "Kan ik foto's van klantsituaties ontvangen?",
        a: "Standaard. Upload zit ingebouwd in elk offerteformulier. Foto's komen mee in de CRM-record bij de aanvraag.",
      },
      {
        q: "Hoe zit het met klantcommunicatie via WhatsApp?",
        a: "We geven jou een melding via WhatsApp bij nieuwe aanvragen (op je telefoon). Klanten communiceren standaard via e-mail; WhatsApp-klantcommunicatie zit op Growth.",
      },
    ],
    metaDescription:
      "Offerte-aanvragen mét context voor bouw, installatie en techniek: prijscalculator met foto-upload, CRM met projecten en Q-AI voor offerte-concepten.",
    illustration: "/illustrations/digital-inspiration.svg",
  },

  "zorg-praktijk": {
    heroLead: "Een wachtlijst zonder",
    heroHighlight: "wachtkamer-administratie.",
    heroIntro:
      "Soepele aanmeldingen, online intake-formulieren en automatische bevestigingen. Je site doet het voorwerk, jouw uren gaan naar de behandeling. Voor praktijken, therapeuten en behandelaars.",
    heroView: "lead-engine",
    heroViewConfig: {
      leadEngine: {
        title: "Online intake-formulier",
        questions: [
          { q: "Waar wil je mee aan de slag?", options: ["Stress", "Slaap", "Relatie", "Anders"], pick: 1 },
          { q: "Eerste keer bij ons?", options: ["Ja", "Lang geleden", "Regelmatig", "Verwezen"], pick: 0 },
          { q: "Voorkeursdag?", options: ["Ma/Di", "Wo/Do", "Vrijdag", "Maakt niet uit"], pick: 2 },
        ],
        successText: "Aanmelding in CRM, agenda-link verstuurd",
        successSub: "Cliënt boekt zelf, AVG-geborgd",
      },
    },
    bundle: {
      name: "Het Praktijk-pakket",
      eyebrow: "Wat je krijgt, voor één maandprijs",
      pitch:
        "Een vindbare site, online intake-formulieren en boekbare afspraken in één pakket. Jouw tijd gaat naar cliënten, niet naar telefoon en agenda.",
      includes: [
        "Snelle, vindbare website voor je praktijk",
        "Intake-formulier dat anamnese al voorbereidt",
        "Online afspraak-boeking met agenda-koppeling",
        "CRM met cliënten, afspraken en notities",
        "Q-AI voor intake-samenvattingen",
        "Tot 25 SEO-keywords (lokaal of categorie)",
        "AVG-conform, Nederlandse hosting",
      ],
      monthlyPrice: 399,
      timing: "Live in 4 tot 6 weken",
      ctaLabel: "Boek een kennismaking",
      ctaHref: "/contact?plan=core",
      trustLine: "Maandelijks opzegbaar na 6 maanden. AVG en beroepscode geborgd.",
      basedOnPlan: "Core",
    },
    pains: [
      {
        title: "Telefoon afnemen tussen behandelingen door",
        body: "Tien minuten pauze tussen cliënten gaat op aan terugbellen, agenda's afstemmen en een paar afzeggingen. Geen pauze.",
      },
      {
        title: "Intake-formulier op papier, weer overpennen in dossier",
        body: "Dubbel werk: cliënt vult een vragenlijst in, jij typt dezelfde gegevens over in het dossier. Foutgevoelig én tijdrovend.",
      },
      {
        title: "Geen idee hoe nieuwe cliënten je vinden",
        body: "Mond-tot-mond werkt, maar je weet niet welk kanaal voor wie. Geen overzicht in welke verwijzers de meeste cliënten brengen.",
      },
      {
        title: "No-shows omdat herinneringen vergeten worden",
        body: "Soms vergeet iemand het, soms is het niet meer relevant, soms is het 'gewoon vergeten'. Per no-show een gat van een halfuur.",
      },
    ],
    moduleSlugs: ["website", "lead-engine", "crm", "ai"],
    proofWidget: {
      kind: "stats-cards",
      eyebrow: "Wat het oplevert",
      title: "Minder telefoon, meer cliënt-tijd.",
      intro: "Cijfers van een praktijk in Noord-Holland, 6 maanden na livegang met Forester OS.",
      cards: [
        { label: "Nieuwe aanmeldingen", value: 14, delta: "+3 deze maand", descriptor: "via intake", viz: "spark" },
        { label: "No-show rate", value: 4, suffix: "%", delta: "-7pt", descriptor: "door reminders", viz: "gauge", trend: false },
        { label: "Tijd bespaard", value: 6, suffix: " uur", delta: "+6 uur", descriptor: "per week aan telefoon", viz: "bars", trend: false },
      ],
    },
    steps: {
      eyebrow: "Zo werkt het",
      title: "Van overvolle telefoon naar soepele aanmelding.",
      intro:
        "We bouwen de aanmeld-flow die jouw praktijk past, met aandacht voor AVG en beroepscode. Jij blijft de behandelaar, het platform vangt de admin.",
      items: [
        {
          title: "Praktijk-audit",
          body: "We brengen je huidige flow in kaart: telefoon, e-mail, contactformulier, papieren intake. Waar zit de meeste tijd?",
        },
        {
          title: "Intake-flow + agenda",
          body: "Online intake-formulier dat anamnese al uitvraagt. Boekbare afspraken met je eigen agenda gekoppeld. Bevestiging en reminders automatisch.",
        },
        {
          title: "CRM voor dossiers",
          body: "Cliënten, afspraken en notities op één plek. Niet ter vervanging van EPD-systemen, wel als praktijk-CRM met de admin-laag.",
        },
        {
          title: "Q voor samenvattingen",
          body: "Q vat intake-formulieren samen tot een eerste anamnese-versie. Je leest sneller, jij vult aan tijdens het eerste gesprek.",
        },
        {
          title: "Doorlopend met momentum",
          body: "Maandelijks Momentum Report laat zien hoeveel aanmeldingen, vanuit welk kanaal, met welke conversie. Zo zie je waar te investeren.",
        },
      ],
    },
    faq: [
      {
        q: "Is dit AVG-proof voor medische gegevens?",
        a: "Forester OS draait op Nederlandse hosting met versleutelde back-ups en AVG-conform datamodel. Voor specifieke medische dossiervorming koppelen we vaak met een EPD-systeem; intake en planning werken in Forester OS.",
      },
      {
        q: "Kan ik mijn agenda (Google, Outlook) koppelen?",
        a: "Ja. Tweezijdige sync zodat afspraken in beide agenda's verschijnen, zonder dubbele boekingen.",
      },
      {
        q: "Werkt het voor solo én groepspraktijken?",
        a: "Beide. Solo werkt prima op Core, groepspraktijken met 3+ behandelaars schalen vaak naar Growth voor team-agenda's en rapportage per behandelaar.",
      },
    ],
    metaDescription:
      "Soepele aanmeldingen voor zorgpraktijken: online intake, agenda-koppeling, automatische reminders en CRM. AVG-conform, Nederlandse hosting, jouw tijd terug.",
    illustration: "/illustrations/communication.svg",
  },

  mkb: {
    heroLead: "Negen tools minder,",
    heroHighlight: "één maandfactuur.",
    heroIntro:
      "Website, CRM, marketing en AI in één abonnement voor het MKB. Geen losse leveranciers, geen losse contracten, geen synchronisatie-ellende. Eén login voor het hele team.",
    heroView: "crm",
    bundle: {
      name: "Het MKB-pakket",
      eyebrow: "Wat je krijgt, voor één maandprijs",
      pitch:
        "Een platform dat alles doet wat een groeiend MKB-bedrijf nodig heeft: website, leads, CRM, marketing en AI. Eén leverancier, één login, één maandfactuur.",
      includes: [
        "Razendsnelle website op Forester OS",
        "2 lead engines (offerteformulier, calculator of quickscan)",
        "CRM voor leads, klanten en deals",
        "Q-AI als extra paar handen voor mails en samenvattingen",
        "Tot 25 SEO-keywords met live data",
        "Maandelijks Momentum Report",
        "Hosting, SSL, AVG en wekelijks onderhoud inbegrepen",
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
        title: "Vijf leveranciers, vijf facturen, vijf logins",
        body: "Website-bouwer, hostingpartij, marketingbureau, CRM-licentie, mail-tool. Vijf contactpersonen, vijf factuur-momenten, vijf tabs.",
      },
      {
        title: "Niemand kan een rapport opstellen",
        body: "Data zit overal: in de website-analytics, in de CRM, in de mailtool, in Excel. De directie-meeting begint met een uur 'cijfers verzamelen'.",
      },
      {
        title: "Geen tijd om uit te zoeken welke tool wat doet",
        body: "Je weet niet of je voor SEO een nieuwe leverancier moet zoeken of dat het in je bestaande pakket zit. Hetzelfde geldt voor lead-tools, automations, AI.",
      },
      {
        title: "Marketingbureau vraagt budget zonder rendement-cijfers",
        body: "Maand na maand betaal je voor 'campagnes', maar of het iets oplevert wordt afgemeten aan rapportages die jij niet kunt verifiëren.",
      },
    ],
    moduleSlugs: ["website", "lead-engine", "crm", "ai"],
    proofWidget: {
      kind: "stats-cards",
      eyebrow: "Wat een MKB-bedrijf terugziet",
      title: "Minder facturen, meer overzicht.",
      intro: "Gemiddelde inzet bij MKB-klanten op het Core-pakket, gemeten in het eerste jaar na livegang.",
      cards: [
        { label: "Bespaard per maand", prefix: "€", value: 1.4, decimals: 1, suffix: "k", descriptor: "vs losse tools", viz: "bars", trend: false },
        { label: "Aanvragen", value: 28, delta: "+9 deze maand", descriptor: "via lead engines", viz: "spark" },
        { label: "Tijd bespaard", value: 12, suffix: " uur", delta: "+12 uur", descriptor: "per week op admin", viz: "gauge", trend: false },
      ],
    },
    steps: {
      eyebrow: "Zo werkt het",
      title: "Van versplinterde stack naar één MKB-platform.",
      intro:
        "We migreren gefaseerd zodat je business niet stil hoeft te liggen. Eerst website en CRM, daarna leads en marketing.",
      items: [
        {
          title: "Audit huidige stack",
          body: "We brengen al je losse leveranciers en kosten in kaart. Vaak vinden we 3-5 contracten die overlappen of onnodig zijn.",
        },
        {
          title: "Website + leadflow opzet",
          body: "Snelle nieuwe site met lead-engines op Forester OS. Je oude site loopt door tot we klaar zijn voor de switch.",
        },
        {
          title: "CRM-migratie",
          body: "Bestaande klanten en deals nemen we over, met dezelfde statussen en eigen velden. Niemand merkt onderbreking.",
        },
        {
          title: "Q in workflow",
          body: "Q komt op de plekken waar jij werkt: in mail, in CRM, in content. Eerste maand keurt jouw team alles, daarna automatiseren we wat consistent goed gaat.",
        },
        {
          title: "Maandelijkse momentum",
          body: "Elke maand één meeting waarin we kijken wat groeit, wat stilstaat en wat de volgende prioriteit is. Eén rapport, één leverancier.",
        },
      ],
    },
    faq: [
      {
        q: "Werkt dit voor familiebedrijven?",
        a: "Juist. Familiebedrijven hebben vaak een historisch gegroeide stack met leveranciers waar 'de zoon ook bij betrokken is geweest'. Eén leverancier maakt opvolging veel simpeler.",
      },
      {
        q: "Kunnen meerdere teamleden tegelijk werken?",
        a: "Op Core tot 5 gebruikers, op Growth en Scale onbeperkt. Realtime sync, eigen rechten per rol, taken-notificaties.",
      },
      {
        q: "Wat als ik nu al een website heb?",
        a: "Migratie zit in het traject. We nemen content, structuur en redirects mee. Geen SEO-schade, geen downtime.",
      },
      {
        q: "Wat zit er ECHT in voor €399/mnd?",
        a: "Website, CRM, 2 lead engines, Q-AI basis, 25 SEO-keywords, Momentum Report, hosting, back-ups en wekelijks onderhoud. Eén factuur. Geen setup-fee. Scaling naar Growth (€699) of Scale (€999) als je harder groeit.",
      },
    ],
    metaDescription:
      "Eén groeiplatform voor het MKB: website, CRM, leads, marketing en AI in één abonnement. Negen losse leveranciers vervangen, één maandfactuur.",
    illustration: "/illustrations/business-growth.svg",
  },
};
