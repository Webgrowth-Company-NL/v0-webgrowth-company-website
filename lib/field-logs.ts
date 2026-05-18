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
      greeting: "Lief dagboek, maandag 18 mei 2026",
      intro: [
        "Vandaag een mooie verbouwing afgerond bij Adalace. En ik zit daar nog steeds een beetje van na te genieten met m'n koffie in de hand, dus we gaan er even voor zitten.",
        "Even ter context: Adalace is in mijn hoofd vooral Edwin. Edwin werkt vanuit z'n auto, want dat is z'n kantoor. Z'n laptop op de passagiersstoel, telefoon in de cup holder, en als jij hem een vraag stuurt is hij binnen tien minuten ergens onderweg met een antwoord. Daar wil je dingen voor bouwen.",
        "We hadden voor 'm al een Quickscan-wizard staan op Forester OS. Slim, mooi, werkte. Maar een paar weken geleden kwam Edwin terug met de feedback die je eigenlijk al maanden zag aankomen. 'Mensen haken alsnog af', zei hij. 'Bij de eerste vragen.'",
        "Tsja. En hij had gelijk.",
      ],
      sections: [
        {
          title: "Het probleem dat we niet eerder durfden te zien",
          paragraphs: [
            "Want het gekke was: op het moment dat een bezoeker zijn pand moest beschrijven, moest 'ie als het ware uit z'n bureaustoel kruipen om bouwjaar, oppervlakte en gebruiksdoel op te zoeken. Of bellen met de gemeente. Of de papieren akte uit een ladekast scharrelen. En dat is precies het type wrijving waar wij allergisch voor zijn.",
            "Edwin's verzoek was simpel. 'Kunnen we dit zo maken dat ik alleen nog de échte adviezen hoef te bespreken, en niet eerst tien basisvragen hoef te stellen?' Een vraag die makkelijk klinkt, maar waar je een nachtje of drie over moet liggen voordat er een idee komt.",
            "Op een goeie ochtend, koffie in de hand, koppelde het kwartje. (Het is altijd de ochtend en altijd de koffie, voor de duidelijkheid.)",
          ],
        },
        {
          title: "De oplossing zat bij de overheid",
          paragraphs: [
            "De BAG. De Basisregistratie Adressen en Gebouwen. Een open dataset die door het Kadaster en de Nederlandse gemeentes wordt onderhouden. Voor elk Nederlands adres staan er een paar basisgegevens in: bouwjaar, oppervlakte, gebruiksdoel (woon-, kantoor- of industriefunctie), pandstatus en de geometrie van het gebouw zelf.",
            "En het mooie: het is publiek, gratis op te vragen en betrouwbaar, omdat 'ie direct uit de officiële gemeente-administratie komt. Geen tussenpartij, geen abonnement, geen vendor lock-in. Gewoon openbare data die wacht tot iemand er iets nuttigs mee doet.",
            "Voor formulieren waarin een bezoeker iets over een pand moet vertellen, is dat een gouden bron. Want waarom zou je je gebruiker dingen laten typen die de overheid al weet? Op het moment dat iemand zijn adres invult, kun je een tweede vraag overslaan. En een derde. En een vierde.",
          ],
        },
        {
          title: "Alleen nog vragen wat we niet uit BAG halen",
          paragraphs: [
            "Aan de basis is de Quickscan een Lead Engine in Forester OS: een wizard met conditionele vragen die zich aanpast aan wat de bezoeker tot nu toe heeft beantwoord. Met de BAG-koppeling werd die conditionele logica ineens veel rijker. Als het bouwjaar uit BAG bekend is, slaan we de bouwjaar-vraag over. Als het gebruiksdoel 'kantoor' zegt, schiet de wizard direct door naar de compliance-vragen die voor kantoren spelen.",
            "We hebben gemeten dat we daarmee gemiddeld zo'n vier tot vijf vragen overslaan per pand. Een Quickscan die voorheen vijf minuten kostte, doe je nu in twee. Voor de bezoeker voelt het slim aan, alsof het systeem 'm kent. Wat ook eigenlijk zo is.",
          ],
        },
        {
          title: "En toen, het PDF-rapport",
          paragraphs: [
            "Aan het einde van de scan rolt er een persoonlijk rapport in PDF-vorm uit, met de exacte verplichte keuringen, certificaten en aanbevolen vervolgstappen voor dát specifieke pand. Geen generiek lijstje, maar iets op maat.",
            "Edwin gebruikt dat rapport als startpunt van een offerte-gesprek, zodat hij niet meer aan tafel hoeft te beginnen met 'wat is uw bouwjaar?'. (Iets dat hij in alle eerlijkheid liever ook nooit had hoeven vragen.) De PDF wordt server-side gegenereerd op basis van een template, gevuld met de antwoorden uit de wizard én de BAG-data, en landt direct in z'n persoonlijke inbox plus in z'n CRM.",
          ],
        },
        {
          title: "Waarom dit verhaal niet over Adalace gaat",
          paragraphs: [
            "Het is een verhaal over Adalace, maar eigenlijk over hoe slim het MKB kan worden als je open data gewoon durft te gebruiken. De BAG is geen exotische enterprise-koppeling, geen dure API met user-licenties, geen sci-fi-techniek. Het is een paar honderd regels code en een postcode-veld dat luistert.",
            "Maar de uitkomst voelt voor de bezoeker alsof 'ie iets bijzonders meemaakt. En dat is precies waar Forester OS over gaat: slimme automatiseringen die voor het klein-MKB toegankelijk zijn, zonder dat je een corporate prijskaartje aan je nek hangt.",
          ],
        },
      ],
      outro: [
        "Wil je het hele verhaal van Adalace lezen, dan kan dat bij de case. En heb je zelf een wizard of Quickscan in je hoofd waarin overheids- of API-data automatisch zou kunnen invullen, dan zoek je iemand om mee te sparren. Bij dezen.",
        "PS — Voor Edwin: het is gelukt. En jij mag wat mij betreft altijd op je passagiersstoel blijven werken. Wij regelen de rest.",
      ],
      signature: "Tot morgen, Martijn",
    },
  },
];

export function fieldLogBySlug(slug: string): FieldLog | undefined {
  return FIELD_LOGS.find((l) => l.slug === slug);
}
