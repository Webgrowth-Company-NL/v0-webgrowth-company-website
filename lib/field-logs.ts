/**
 * Field Logs - de Webgrowth-blog: bevindingen uit de praktijk, "lief dagboek"-stijl.
 * Content geport uit de v0-marketingsite. Body's volgen later; voorlopig dienen
 * titel + excerpt als content (genoeg voor een echte, indexeerbare pagina).
 */
export type FieldLogSection = {
  title?: string;
  paragraphs: string[];
};

export type FieldLogBody = {
  /** Aanhef, bv. "Lief dagboek, 18 mei 2026" */
  greeting?: string;
  /** Intro-paragrafen vóór de tussenkopjes */
  intro: string[];
  /** Genummerde of getitelde tussen-secties */
  sections: FieldLogSection[];
  /** Afsluiter-paragrafen */
  outro: string[];
  /** Handtekening, bv. "Martijn Duin" */
  signature?: string;
};

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
  /** Volledige body. Logs zonder body tonen alleen titel + excerpt + 'binnenkort'-blok. */
  body?: FieldLogBody;
};

export const FIELD_LOGS: FieldLog[] = [
  {
    slug: "bag-integratie-quickscan-adalace",
    date: "2026-05-18",
    dateLabel: "Mei 2026",
    tag: "Maatwerk & integraties",
    title: "BAG-integratie in de Quickscan van Adalace: één adres als startpunt voor je hele intake",
    excerpt:
      "Adres invullen en de wizard weet al bouwjaar, oppervlakte en gebruiksdoel. Hoe we voor Adalace de BAG van het Kadaster koppelden aan een Quickscan-Lead Engine, en wat een kleine API-integratie voor het MKB betekent.",
    readTime: "8 min",
    body: {
      greeting: "Lief dagboek, 18 mei 2026",
      intro: [
        "Vandaag een mooie technische verbouwing afgerond. We hadden voor Adalace al een Quickscan-wizard gebouwd op Forester OS, met een paar slimme vragen waar je in een paar minuten doorheen liep. Maar Edwin, de adviseur van Adalace, kwam terug met feedback die je eigenlijk al maanden zag aankomen: 'mensen haken alsnog af bij de eerste vragen'. En hij had gelijk. Op het moment dat een bezoeker zijn pand moest beschrijven, moest 'ie als het ware nog naast z'n PC kruipen om bouwjaar, oppervlakte en gebruiksdoel op te zoeken. Dat is precies het type wrijving waar wij allergisch voor zijn.",
        "Dus hebben we de BAG erbij gepakt. De Basisregistratie Adressen en Gebouwen, de overheidsdatabase waarin van letterlijk elk Nederlands pand de basisgegevens staan vastgelegd. En vandaag zit die koppeling live in de Quickscan van Adalace. Eén adres invullen, en de wizard weet de rest.",
      ],
      sections: [
        {
          title: "De vraag van Adalace: één adres als startpunt",
          paragraphs: [
            "Adalace adviseert organisaties over de verduurzaming en compliance van vastgoed. Voordat een adviseur überhaupt iets zinnigs kan zeggen over een pand, moet er een berg basisinformatie op tafel komen: bouwjaar, gebruiksdoel, oppervlakte, energielabel en type constructie. En dat zijn precies de dingen die de meeste pand-eigenaren niet uit hun hoofd weten.",
            "Edwin's vraag was concreet: 'Kunnen we dit zo maken dat ik alleen nog de échte adviezen hoef te bespreken, en niet eerst tien basisvragen hoef te stellen?'. Op een goeie ochtend met koffie kwam het idee los. De overheid weet die basis al, de bezoeker hoeft het alleen maar door te geven via z'n postcode + huisnummer.",
          ],
        },
        {
          title: "Wat de BAG eigenlijk is, en waarom je 'm wilt gebruiken",
          paragraphs: [
            "De BAG is een open dataset die door het Kadaster en de Nederlandse gemeentes wordt onderhouden. Voor elk Nederlands adres zijn een paar basisgegevens beschikbaar: bouwjaar, oppervlakte, gebruiksdoel (woon-, kantoor- of industriefunctie), pandstatus en de geometrie van het gebouw. De data is publiek, gratis op te vragen en betrouwbaar omdat 'ie direct uit de officiële gemeente-administratie komt.",
            "Voor formulieren waarin een bezoeker iets over een pand moet vertellen is dat een gouden bron. Want waarom zou je je gebruiker dingen laten typen die de overheid al weet? Op het moment dat iemand zijn adres invult, kun je een tweede vraag overslaan, een derde vraag overslaan en doorgaan met wat er écht toe doet voor het advies.",
          ],
        },
        {
          title: "Slimme vraagvolgorde: alleen vragen wat we nog niet weten",
          paragraphs: [
            "Aan de basis is de Quickscan een Lead Engine in Forester OS: een wizard met conditionele vragen die zich aanpast aan wat de bezoeker tot nu toe heeft beantwoord. Met de BAG-koppeling werd die conditionele logica zoveel rijker. Als het bouwjaar uit BAG bekend is, slaan we de bouwjaar-vraag over. Als het gebruiksdoel 'kantoor' zegt, schiet de wizard direct door naar de compliance-vragen die voor kantoren spelen.",
            "We hebben gemeten dat we daarmee gemiddeld zo'n vier tot vijf vragen kunnen overslaan per pand. Een Quickscan die voorheen vijf minuten kostte, doe je nu in twee. En voor de bezoeker voelt het slim aan, want het systeem 'kent' z'n pand al, in plaats van dat 'ie het allemaal opnieuw moet uitleggen.",
          ],
        },
        {
          title: "PDF-rapport op maat als afsluiter van de scan",
          paragraphs: [
            "Aan het einde van de Quickscan rolt er een persoonlijk rapport in PDF-vorm uit, met de exacte verplichte keuringen, certificaten en aanbevolen vervolgstappen voor dat specifieke pand. Dat rapport gebruikt Edwin direct als startpunt van een offerte-gesprek, zodat hij niet meer aan tafel hoeft te beginnen met 'wat is uw bouwjaar?'.",
            "De PDF wordt server-side gegenereerd op basis van een template, gevuld met de antwoorden uit de wizard én de BAG-data. Dezelfde mail komt direct in z'n persoonlijke inbox en parallel in z'n CRM, zodat 'ie niets hoeft over te tikken voordat 'ie de bezoeker kan terugbellen.",
          ],
        },
        {
          title: "Wat dit voor het MKB betekent",
          paragraphs: [
            "Een BAG-koppeling is een typische 'kleine integratie met grote impact'. Voor de bezoeker valt er een halve berg uitzoekwerk weg, voor Adalace landt er een lead met scherpe context in plaats van een mailtje 'wilt u meer informatie?'. En het is volledig in onze hand, want het draait via Forester OS in plaats van via een derde-partij-formulier-tool met eigen API-limieten en eigen rekening.",
            "Wat ik vooral mooi vind: dit is geen sci-fi-techniek of dure enterprise-koppeling. De BAG is open data, een API-call van ons systeem naar het Kadaster, en de logica past in een paar honderd regels code. Maar de uitkomst voelt voor de bezoeker alsof 'ie iets bijzonders meemaakt. Dat is precies waar Forester OS over gaat: slimme automatiseringen die voor het klein-MKB toegankelijk zijn.",
          ],
        },
      ],
      outro: [
        "Voor wie nieuwsgierig is naar hoe Adalace dit in z'n geheel heeft staan, lees de hele case. En heb je zelf een wizard of Quickscan op het oog waarin overheids- of API-data automatisch zou kunnen invullen, dan zoek je iemand om mee te sparren. Bij dezen.",
      ],
      signature: "Martijn Duin",
    },
  },
  {
    slug: "webshop-bouwen-voor-mkb",
    date: "2025-08-18",
    dateLabel: "Augustus 2025",
    tag: "E-commerce",
    title: "E-commerce op Forester OS voor het MKB",
    excerpt:
      "Waarom we e-commerce bouwen op Forester OS: sneller, beter vindbaar en volledig geautomatiseerd, zonder afhankelijkheid van losse tools.",
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
    title: "Maatwerk-reisplatform voor The Africa Experience",
    excerpt:
      "Hoe we de reiswebsite van The Africa Experience opnieuw opbouwden op Forester OS: typed datamodellen voor bestemmingen en activiteiten, razendsnelle pagina's en een directe Pipedrive-koppeling.",
    readTime: "6 min",
  },
  {
    slug: "offertes-automatisch-via-pipedrive",
    date: "2025-06-09",
    dateLabel: "Juni 2025",
    tag: "Automatisering",
    title: "Van websiteformulier naar kant-en-klare offerte in Pipedrive",
    excerpt:
      "Hoe we een offerteflow bouwden in Forester OS zonder Zapier: directe Pipedrive-koppeling en automatische prijsberekening. Van 25 minuten naar 3 minuten per aanvraag.",
    readTime: "6 min",
  },
  {
    slug: "vloot-en-projecten-verbinden-voor-roll-group",
    date: "2025-06-02",
    dateLabel: "Juni 2025",
    tag: "Maatwerk",
    title: "Vloot en projecten slim koppelen voor Roll Group",
    excerpt:
      "Hoe we op Forester OS een maatwerk-platform bouwden met typed relaties tussen vloot en projecten. Razendsnelle pagina's en directe content-updates zonder CMS-overhead.",
    readTime: "5 min",
  },
  {
    slug: "dynamische-content-met-typescript",
    date: "2025-05-26",
    dateLabel: "Mei 2025",
    tag: "Onder de motorkap",
    title: "Hoe Forester OS dynamische content beheert met TypeScript",
    excerpt:
      "Hoe TypeScript-arrays in Forester OS dynamische content beheren: consistente structuur, hergebruik tussen pagina's en een beheerpaneel dat Q actief bijhoudt.",
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
