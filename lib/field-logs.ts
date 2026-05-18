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
        "Vandaag is de nieuwe website van Adalace live gegaan. Met daarin de Quickscan, een wizard die op basis van het adres direct met de BAG van het Kadaster praat en de bezoeker een persoonlijk rapport oplevert. Een lancering om met een goed gevoel naar terug te kijken, dus ik schrijf het maar even op voor het verdampt.",
        "Adalace adviseert organisaties over de verduurzaming en compliance van vastgoed, en wordt gerund door Edwin: een adviseur met passie voor z'n vak en een uitgesproken hekel aan onnodige administratieve trekjes. Toen we begonnen aan z'n nieuwe site was z'n eerste vraag eigenlijk al de complete briefing: 'kunnen we dit zo bouwen dat ik alleen nog de échte adviezen hoef te bespreken, en niet eerst tien basisvragen hoef te stellen?'.",
        "Op een goeie ochtend, koffie in de hand, koppelde het kwartje. (Het is altijd de ochtend en altijd de koffie, voor de duidelijkheid.) De oplossing zat namelijk niet bij ons, maar bij de overheid.",
      ],
      sections: [
        {
          title: "Waar wij vanaf het begin geen zin in hadden",
          paragraphs: [
            "We hadden de Quickscan eenvoudig kunnen bouwen zoals de meeste compliance-tools dat doen: een lange rij vragen waarin de bezoeker bouwjaar, oppervlakte, gebruiksdoel, energielabel en type constructie zelf moet invullen. Maar dat is precies het type wrijving waar wij allergisch voor zijn. Want op dat moment moet je gebruiker als het ware uit z'n bureaustoel kruipen om dingen op te zoeken die 'ie waarschijnlijk niet uit z'n hoofd weet. Of bellen met de gemeente. Of de papieren akte uit een ladekast scharrelen.",
            "Edwin had daar dus zelf ook geen zin in. Hij wilde gewoon van z'n bezoeker één adres en een paar slimme vragen, en dan een gesprek waarin hij over de échte uitdagingen kon praten. Geen tien-basis-vragen-show vooraf.",
          ],
        },
        {
          title: "De oplossing zat bij de overheid",
          paragraphs: [
            "De BAG. De Basisregistratie Adressen en Gebouwen. Een open dataset die door het Kadaster en de Nederlandse gemeentes wordt onderhouden. Voor elk Nederlands adres staan er een paar basisgegevens in: bouwjaar, oppervlakte, gebruiksdoel (woon-, kantoor- of industriefunctie), pandstatus en de geometrie van het gebouw zelf.",
            "Het mooie: 'ie is publiek, gratis op te vragen en betrouwbaar, omdat de data direct uit de officiële gemeente-administratie komt. Geen tussenpartij, geen abonnement, geen vendor lock-in. Gewoon openbare data die wacht tot iemand er iets nuttigs mee doet.",
            "Voor formulieren waarin een bezoeker iets over een pand moet vertellen, is dat een gouden bron. Want waarom zou je je gebruiker dingen laten typen die de overheid al weet? Op het moment dat iemand zijn adres invult, kun je een tweede vraag overslaan. En een derde. En een vierde.",
          ],
        },
        {
          title: "Alleen nog vragen wat we niet uit BAG halen",
          paragraphs: [
            "Aan de basis is de Quickscan een Lead Engine in Forester OS: een wizard met conditionele vragen die zich aanpast aan wat de bezoeker tot nu toe heeft beantwoord. Met de BAG-koppeling werd die conditionele logica ineens veel rijker. Als het bouwjaar uit BAG bekend is, slaan we de bouwjaar-vraag over. Als het gebruiksdoel 'kantoor' zegt, schiet de wizard direct door naar de compliance-vragen die voor kantoren spelen.",
            "We hebben gemeten dat we daarmee gemiddeld zo'n vier tot vijf vragen overslaan per pand. Een Quickscan die op een gemiddeld lang vragen-pad vijf minuten zou kosten, doe je nu in twee. Voor de bezoeker voelt het slim aan, alsof het systeem 'm kent. Wat ook eigenlijk zo is.",
          ],
        },
        {
          title: "En toen, het PDF-rapport",
          paragraphs: [
            "Aan het einde van de scan rolt er een persoonlijk rapport in PDF-vorm uit, met de exacte verplichte keuringen, certificaten en aanbevolen vervolgstappen voor dát specifieke pand. Geen generiek lijstje, maar iets op maat.",
            "Edwin gebruikt dat rapport als startpunt van een offerte-gesprek, zodat hij direct kan inzoomen op wat er voor díe organisatie speelt in plaats van eerst de basisinformatie nog eens door te lopen. De PDF wordt server-side gegenereerd op basis van een template, gevuld met de antwoorden uit de wizard én de BAG-data, en landt direct in z'n persoonlijke inbox plus in z'n CRM. Geen overpennen, geen kopieer-werk.",
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
        "PS — Voor Edwin: respect dat je vanaf het allereerste gesprek over de nieuwe site al wist wat je niét wilde. Dat soort opdrachtgevers maakt het werk leuk.",
      ],
      signature: "Tot morgen, Martijn",
    },
  },
  {
    slug: "vervangingsscan-quickscan-nordflame",
    date: "2026-05-13",
    dateLabel: "Mei 2026",
    tag: "Lead Engines",
    title: "Twee scans, twee bezoekers: hoe we bij NordFlame de Vervangingsscan en Quickscan naast elkaar bouwden",
    excerpt:
      "Een pelletkachel-site moet twee soorten mensen tegelijk bedienen: de bewuste vervanger met Ecodesign 2027 in z'n hoofd, en de oriëntator die nog niet weet welk model bij z'n huis past. Hoe we voor NordFlame twee Lead Engine-scans naast elkaar bouwden, met Aurora-logica die meedenkt over een eventuele warmtepomp.",
    readTime: "7 min",
    body: {
      greeting: "Lief dagboek, woensdag 13 mei 2026",
      intro: [
        "Vandaag ging NordFlame live, het premium pelletkachel-platform waaraan we de afgelopen maanden hebben gebouwd. En zoals dat gaat bij een livegang-dag, was de fles bubbels aan het einde van de middag al ontkurkt voordat we überhaupt hadden gechecked of de form-submits ook bij het juiste mailadres landden. (Spoiler: ze kwamen aan.)",
        "Wat ik vandaag in m'n hoofd heb zitten, is iets dat me al weken bezighield: de twee scans van NordFlame. Want één van de mooiste design-puzzels van het hele project was hoe we twee volledig verschillende type bezoekers tegelijk konden bedienen, zonder ze allebei door hetzelfde formulier-trechtertje te duwen.",
      ],
      sections: [
        {
          title: "Twee soorten bezoekers, geen compromis met één formulier",
          paragraphs: [
            "Iemand die op een premium pelletkachel-site landt, is doorgaans één van twee mensen. De eerste is de bewuste vervanger. Die zit met een open haard of een oude houtkachel die binnenkort de poort uit moet vanwege Ecodesign 2027, en wil weten of een pelletkachel binnen die regelgeving past en of er subsidie mogelijk is. Concrete vraag, concrete urgentie, een redelijke deal-grootte als het matched.",
            "De tweede bezoeker is de oriëntator. Die heeft van de buren over een pelletkachel gehoord, vindt het idee mooi, maar heeft geen flauw idee welk model past bij z'n huis of welke vraag-en-aanbod-zaken meespelen. Verkenner-modus, met een lange koopcyclus.",
            "Beide bezoekers in één algemeen 'neem contact op'-formulier proppen zou doodzonde zijn. De eerste wil een berekening en een subsidie-antwoord, de tweede wil eerst snappen wat 'ie überhaupt aan het bekijken is. Dus splitsten we de boel in twee: de Vervangingsscan voor de eerste, de Quickscan voor de tweede.",
          ],
        },
        {
          title: "De Vervangingsscan: Ecodesign 2027 als rode draad",
          paragraphs: [
            "Ecodesign 2027 is de Europese regelgeving die per 2027 strengere emissie-eisen aan kachels stelt. Veel oudere houtkachels en open haarden vallen daarbuiten en mogen niet meer gestookt worden. Een hoop mensen weten dat wel, maar weten niet wat het concreet voor hen betekent.",
            "De Vervangingsscan is een Lead Engine in Forester OS die exact die vraag oplost. In vier of vijf stappen toetst 'ie wat de bezoeker nu stookt, welk type woning en bouwjaar 'ie heeft, hoe groot de ruimte is en welke wensen er zijn. Het systeem weegt dat tegen Ecodesign 2027 en stelt het NordFlame-model voor dat het beste past, mét een indicatie van het subsidie-recht.",
            "Het rapport komt direct in de mail van de bezoeker, en de lead landt parallel in het CRM met alle context die we al hebben uitgevraagd. Zo komt sales niet aan de telefoon met 'wat heeft u nu staan?', maar met 'ik zie dat u nu een oude houtkachel heeft en dat u in aanmerking lijkt te komen voor de subsidie, laten we kijken welk model bij u past'.",
          ],
        },
        {
          title: "De Quickscan: voor wie nog aan het kijken is",
          paragraphs: [
            "De Quickscan is een lichtere variant voor de oriënterende bezoeker. Geen subsidie-stress, geen regelgevings-tekst, gewoon een vriendelijk paadje om te ontdekken welk model past bij jouw woning. Een paar vragen over m², woningtype, hoeveel uur per dag je wilt stoken en welke esthetiek je aantrekt, en de scan komt met een aanbeveling.",
            "Wat ik mooi vind aan deze tweede flow: 'ie pretendeert niets meer te zijn dan 'ie is. Een ontdek-tool, geen offerte-machine. De bezoeker krijgt een persoonlijk antwoord op een specifiek model met een verhalend stukje over wat dat model bijzonder maakt. Ook hier landt de lead in het CRM, zodat sales een gerichte vervolgactie kan plannen wanneer de bezoeker een paar weken later terug komt.",
          ],
        },
        {
          title: "Aurora als snijpunt: de warmtepomp-vraag in de calculator",
          paragraphs: [
            "NordFlame's vlaggenschip Aurora is een hybride pelletkachel die direct samenwerkt met een warmtepomp. In beide scans rekent het systeem dat letterlijk mee. Op het moment dat een bezoeker aangeeft dat 'ie al een warmtepomp heeft, of er één overweegt, schakelen de scans naar een andere modus en stellen ze Aurora actief voor in plaats van een puur-pellet-model.",
            "Klinkt simpel, maar achter de schermen is dat een tweede logica-pad door de hele wizard. De subsidie-mogelijkheden voor een hybride opstelling zien er anders uit, het kachel-vermogen wordt anders berekend en de installatie-aanbevelingen verschillen. Voor de bezoeker is het echter één vraag: 'heb je een warmtepomp, of denk je erover na?'.",
            "Wat ik vooral mooi vind: het advies dat eruit rolt klopt met de complete energie-strategie van de bezoeker. Niet alleen welke kachel ga je kopen, maar hoe past die in je hele verwarming-plaatje. Premium-positionering werkt het beste als je verder vooruit denkt dan de bezoeker zelf doet.",
          ],
        },
        {
          title: "Wat ik vooral van NordFlame heb geleerd",
          paragraphs: [
            "Premium-positionering werkt ook in scan-tools. Het is verleidelijk om elke scan tot een offerte-machine te maken, met als doel zo veel mogelijk leads zo snel mogelijk te kwalificeren. Maar voor een merk als NordFlame zou dat als hijgerig overkomen. Een scan kan ook een ontdek-moment zijn, een eerste positief contact met de stem en het verhaal van het merk.",
            "En een Lead Engine is geen formulier. Dat is iets wat ik telkens opnieuw aan klanten moet uitleggen. Een formulier is een rijtje vraagvelden om een mailtje te genereren. Een Lead Engine is een wizard die de bezoeker iets oplevert (een rapport, een aanbeveling, een berekening) terwijl jij parallel context binnenkrijgt. Het is een kleine experience, niet een drempel.",
          ],
        },
      ],
      outro: [
        "Wil je het volledige NordFlame-verhaal lezen, met de zes modellen, de Aurora-combinatie en hoe we Fathom Analytics in plaats van Google Analytics hebben gekoppeld, dan staat de hele case klaar. En heb je zelf een product of dienst waar twee soorten bezoekers tegelijk op afkomen, dan loont het bijna altijd om die in twee flows op te splitsen. Ik denk graag mee.",
        "PS — Aurora is voor mij ook de naam van het hybride vlaggenschip dat dit hele project enigszins anders maakte dan een gemiddelde productlancering. Dat zegt iets over de kracht van een mooi gekozen productnaam.",
      ],
      signature: "Tot snel, Martijn",
    },
  },
];

export function fieldLogBySlug(slug: string): FieldLog | undefined {
  return FIELD_LOGS.find((l) => l.slug === slug);
}
