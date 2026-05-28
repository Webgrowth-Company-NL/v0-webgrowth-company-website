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
  /** Laatste-update-datum (ISO). Voor SEO/AI-search; fallback = date. */
  dateModified?: string;
  /** Leesbare datum, bv. "Augustus 2025" */
  dateLabel: string;
  /** Onderwerp-tag, bv. "SEO", "Automatisering" */
  tag: string;
  title: string;
  excerpt: string;
  readTime: string;
  /** SEO-titel ≤60 chars (zonder " | Webgrowth Field Logs"-suffix). Fallback = title. */
  metaTitle?: string;
  /** SEO meta-description, ≤155 chars. Fallback = excerpt (vaak te lang voor SERP). */
  metaDescription?: string;
  /** Zoektermen die Google en AI-search aan dit log koppelen. */
  keywords?: string[];
  /** Entiteiten waar het log over gaat (voor AI Overviews / schema.org about). */
  about?: Array<{ name: string; sameAs?: string }>;
  /** Volledige body. Logs zonder body tonen alleen titel + excerpt + 'binnenkort'-blok. */
  body?: FieldLogBody;
};

export const FIELD_LOGS: FieldLog[] = [
  {
    slug: "balude-ai-training-sales-engine",
    date: "2026-05-26",
    dateLabel: "Mei 2026",
    tag: "Sales Engines",
    title: "Balude's betaalde AI-training: een Sales Engine die geen zaal en geen agenda nodig heeft",
    excerpt:
      "Sinds 13 mei verkoopt Remco van Balude z'n eerste online AI-training. Geen Teachable, geen Coursebox, geen LMS-abonnement van honderd euro per maand. Wel een Sales Engine in Forester OS, met dertig vragen die deels door een taalmodel worden nagekeken en een certificaat dat direct in de mail valt. Een notitie over wat er gebeurt als je expertise digitaal wil verzilveren zonder dat je agenda erbij in de weg gaat zitten.",
    metaTitle: "Balude AI-training: Sales Engine in Forester OS",
    metaDescription:
      "Hoe Balude z'n betaalde AI-training online verkoopt via een Sales Engine in Forester OS: Mollie-checkout, Gemini-grading, magic-link en A4-certificaat.",
    keywords: [
      "Balude AI-training",
      "Sales Engine",
      "Forester OS",
      "betaalde online cursus",
      "AI-training advocaten",
      "AI-training accountants",
      "Gemini AI-grading",
      "Mollie cursus checkout",
    ],
    about: [
      { name: "Balude", sameAs: "https://balude.com" },
      { name: "Mollie", sameAs: "https://www.mollie.com" },
      { name: "Google Gemini", sameAs: "https://deepmind.google/technologies/gemini/" },
      { name: "Forester OS" },
    ],
    readTime: "7 min",
    body: {
      greeting: "Lief dagboek, dinsdag 26 mei 2026",
      intro: [
        "Twee weken geleden, op 13 mei, ging de AI-training van Balude live. Vandaag pas zit ik er voor het eerst rustig achterover bij om op te schrijven wat we eigenlijk gebouwd hebben. Want in de hectiek van een livegang ben je vooral bezig met checken of de betaling doorkomt, of de mails op de juiste mailservers aankomen, of het certificaat de juiste naam draagt. De vraag wat dit ding in onze platform-architectuur betekent, schoof ik door naar later. Vandaag is later.",
        "De training zelf is een mooi product. Remco geeft al jaren AI-advies aan advocatenkantoren, accountants en MKB-management, en die vraag werd elke maand groter, terwijl z'n agenda dat niet werd. Iedereen die in een gereguleerde sector werkt, wil z'n team aan een gemeenschappelijke basis krijgen: wat mag wel, wat mag niet, hoe prompt je zonder een cliëntdossier in een publiek model te kieperen. Dat is geen vraag die zich leent voor één-op-één-workshops als je het op enige schaal wilt doen.",
        "Dus zochten we een manier om z'n expertise digitaal in een doosje te stoppen. En het bijzondere is: het is de eerste keer dat we een Sales Engine bouwen die volledig zonder agenda werkt. Geen datum-keuze, geen zaalcapaciteit, geen reisafstand, geen menselijke instructeur die op een ochtend in Utrecht moet staan. Pure software die een product levert, een toets afneemt en een certificaat genereert.",
      ],
      sections: [
        {
          title: "Het andere uiteinde van het Sales Engine-spectrum",
          paragraphs: [
            "Een paar weken geleden schreef ik over de Training enrollment van Pink Elephant, die qua techniek óók een Sales Engine is, maar met een heel andere fysieke realiteit erachter. Pink verkoopt klassikale trainingen met datums, zalen, instructeurs en koffieautomaten. Hun engine kiest een datum, telt deelnemers tegen zaalcapaciteit, en regelt vier mogelijke betaalvarianten. De wrijving die we daar wegnemen, zit aan de inschrijfkant, niet aan de leverkant. Het product zelf is fysiek en wordt door mensen geleverd.",
            "Balude's AI-training zit aan het andere uiteinde van dat spectrum. Hier is het product óók de software. De engine verkoopt de training, levert hem en certificeert de afronding, allemaal in dezelfde keten zonder dat er iemand fysiek iets moet doen. Klant betaalt 's avonds om half elf via iDEAL, krijgt direct een welkomstmail, doorloopt de training in dertig minuten, beantwoordt de eindtoets, en heeft het certificaat in de mail voor middernacht. Geen wachtlijst, geen datumvoorkeur, geen instructeur die in z'n agenda moet kijken.",
            "Dat zet onze Sales Engines op een spectrum van helemaal-mens-aan-de-andere-kant tot helemaal-software-aan-de-andere-kant. Pink zit op de menselijke pool, Balude op de softwarepool, en daartussen passen straks alle varianten waar het sales-team van een MKB nog wel moet bevestigen of inplannen maar geen offerte meer hoeft te bouwen. Dat hele midden hebben we nu in zicht, en dat voelt als een platform dat z'n vorm begint te vinden.",
            "Voor de volledigheid: Balude is hiermee ook officieel de allereerste klant op het nieuwe Sales Engine-pattern in Forester OS. We hadden 't lang in onze tekentekeningen staan, en hij is dus letterlijk degene die ons ertoe heeft aangezet om 't ook werkelijk te bouwen.",
          ],
        },
        {
          title: "De toets die zichzelf nakijkt",
          paragraphs: [
            "Het stuk van de training waar ik me het meest aan heb verkneukeld is de toets aan het eind. Dertig vragen verdeeld over vier praktijkthema's: veilig delen van gegevens, effectief prompten, hallucinaties herkennen en algemeen begrip van wat een taalmodel feitelijk is. Een deel meerkeuze, een fors deel open. Want voor een training over verantwoord AI-gebruik werkt een binaire goed-of-fout-vraag niet altijd. Nuance is hier het halve verhaal.",
            "Die open vragen laten we beoordelen door Gemini 2.5 Flash, server-side, zodat de score niet vanuit de browser te manipuleren is. Niet met een simpele woord-match, maar met een gestructureerde prompt die per vraag de rubric kent: wat moet er minimaal in het antwoord staan, welke nuances mogen ontbreken, wat is een rode vlag die op verkeerd begrip wijst. Het model krijgt de modelantwoorden als referentie mee, scoort het antwoord op die rubric, en geeft de cursist een korte motivatie te zien. Geen blackbox-cijfer, wel een feedback-zin waar je iets aan hebt.",
            "Het werd pas goed nadat we de prompt een paar iteraties hadden gestrest met antwoorden van uiteenlopende strengheid. Een te scherp model wijst slim geformuleerde antwoorden af omdat ze niet letterlijk genoeg de termen herhalen. Een te mild model laat een slap antwoord door. We hebben de prompt zo lang aangepast tot Remco zelf zei: ja, dit lijkt op hoe ik 't zou doen. Dat moment, waarop een mens en het model op een set toets-antwoorden hetzelfde oordeel geven, voelde als een mijlpaaltje. Het is overigens precies het soort meta-grapje waar je in een AI-training niet onderuit kunt: de toets over verantwoord AI-gebruik wordt zelf door AI nagekeken, en de cursist krijgt te zien waarom.",
            "Wie slaagt, krijgt een persoonlijk A4 PDF-certificaat met uniek nummer in Balude's huisstijl, direct in de mailbox. Geen plaatje uit een template, maar een echt document dat je kunt printen, ophangen of als bewijs van naleving in een dossier kunt stoppen. Dat detail bleek voor de juridische en accountancy-doelgroep belangrijker dan we vooraf hadden ingeschat.",
          ],
        },
        {
          title: "Twee Firestore-valkuilen die ons even stilzetten",
          paragraphs: [
            "In de eerste week na de livegang liepen we tegen twee silent fails aan die zo typisch Firestore zijn dat ik ze maar even opschrijf voor de volgende keer. De eerste was een order waarbij de organisatie-context undefined was. Firestore weigert documenten met undefined velden te schrijven, maar geeft daar geen duidelijke melding op terug. Resultaat: een order die in onze backend leek door te lopen maar nooit aankwam in het CRM-overzicht. We hebben 'm gevonden via de Mollie-webhook-log, waar de payment wel netjes als succesvol stond.",
            "De tweede was een geneste array bij volume-orders. Voor een team van veertig advocaten houd je de deelnemers bij in een array. Maar als die deelnemers zelf weer een sub-array hebben (bijvoorbeeld een lijstje gekochte modules), weigert Firestore vanaf een bepaald nestingsniveau om dat netjes weg te schrijven. Opgelost door de structuur plat te slaan voor we wegschrijven.",
            "Allebei opgespoord, allebei gefixt, en sinds die fixes loopt de hele keten van eerste klik tot certificaat in de inbox stabiel. Beide valkuilen staan nu op een interne checklist voor de volgende Sales Engine die we uitrollen, want ze gaan niet alleen over Balude. Elke order-flow die in Firestore landt zal vroeg of laat tegen één van die twee aanlopen.",
          ],
        },
        {
          title: "De volume-staffel maakt het verhaal pas écht interessant",
          paragraphs: [
            "Een individueel ticket kost normaal 79 euro, in de introductieperiode 59 euro. Maar het echte sales-mechaniek zit in de staffel. Vanaf 25 deelnemers zakt de prijs naar 49 euro per persoon, vanaf 100 deelnemers naar 39 euro. Dat zijn de tarieven waarmee een advocaten- of accountantskantoor z'n hele team in één keer mee laat doen. Eén centrale link, één factuur, één afronding van een AVG-discussie die anders nog maanden door blijft borrelen.",
            "Voor Remco werkt dat businessmodel ineens heel anders dan een losse cursus. Hij hoeft per kantoor maar één gesprek te voeren, en de checkout doet de rest. Wie veertig licenties wil heeft binnen vier minuten z'n bestelling rond, krijgt z'n centrale dashboard, en deelt de plekken toe aan medewerkers. Iedere deelnemer een eigen account, eigen voortgang, eigen certificaat op naam. De manager ziet wie afgerond heeft en wie nog moet beginnen. Geen Excel-export, geen losse rapportages, alles in dezelfde omgeving.",
            "Wat ik mooi vind aan die hele opzet: het businessmodel werkt zonder dat het op een marketplace of platform-as-a-service moet draaien. Geen 25% commissie aan Udemy, geen 30 euro per maand aan Teachable, geen tussenhandelaar die de relatie met de klant overneemt. Remco verkoopt onder z'n eigen merk, op z'n eigen domein, met z'n eigen klantenrelatie. Forester OS is de motor, maar Balude blijft de leverancier. Dat onderscheid is voor onze MKB-doelgroep belangrijker dan het op het eerste oog lijkt.",
          ],
        },
        {
          title: "Waar deze Sales Engine straks naartoe gaat",
          paragraphs: [
            "Het mooiste van deze opzet is dat we eigenlijk net een sjabloon hebben gebouwd. De magic-link-toegang na betaling, de Gemini-beoordeelde toets, het centrale dashboard voor teambeheer, de Mollie-checkout, het A4 PDF-certificaat per mail: allemaal componenten die nu klaar staan en die we voor een volgende cursus opnieuw kunnen samenstellen.",
            "Remco heeft al een gevorderde variant in z'n hoofd, een AI-training specifiek voor juridische teams die dieper ingaat op tucht- en aansprakelijkheidsvraagstukken. Dat is straks geen tweede build, dat is een nieuwe Sales Engine op dezelfde infrastructuur met andere vragen, andere rubric en een ander certificaat. Hetzelfde geldt voor andere klanten die met een trainingsproduct zitten en niet weten hoe ze het zonder LMS-abonnement online moeten zetten. We hebben ze nu iets te laten zien dat werkt.",
            "Voor Forester OS als platform betekent het ook iets. We hadden al de Lead Engines, met de Quickscans en Quick Quotes die een gesprek opleveren. We hebben nu twee duidelijke smaken Sales Engines: de menselijke (Pink's Training enrollment, met datum en zaal) en de pure software (Balude's AI-training, zonder agenda). Daartussen zit straks ruimte voor alles wat een MKB digitaal kan verkopen, van consultancy-uren tot abonnementen tot complete licentiemodellen. Eén keer goed bouwen, op heel veel plekken verzilveren.",
          ],
        },
      ],
      outro: [
        "Wil je het hele Balude-verhaal lezen, met de wisseling van consulting naar productized expertise en hoe Remco z'n positionering opnieuw heeft scherpgesteld, dan komt die case er nog aan. En zit je zelf op zo'n moment dat je expertise begint te dichtslibben in één-op-één-gesprekken, dan kan een eigen digitale cursus of certificering een uitweg zijn. Niet voor iedereen, niet altijd, maar als de vraag zich herhaalt en je doelgroep ervoor wil betalen, is het tegenwoordig minder werk dan je denkt om 't goed op te zetten. Loop er gerust eens met mij doorheen.",
        "PS, Remco, dat je in een paar weken tijd je positionering van advies naar product hebt durven kantelen, mét z'n eigen prijspunt en z'n eigen merkbeeld, vind ik typerend voor hoe jij in je vak staat. Mooi werk om aan mee te bouwen.",
      ],
      signature: "Tot snel, Martijn",
    },
  },
  {
    slug: "training-enrollment-sales-engine-pink-elephant",
    date: "2026-05-20",
    dateLabel: "Mei 2026",
    tag: "Sales Engines",
    title: "De Training enrollment van Pink Elephant zit verkeerd ingedeeld in Forester OS, en dat zegt iets",
    excerpt:
      "Op de Pink-trainingpagina's staat een Sales Engine: een inschrijfflow die in twee minuten een datum kiest, bedrijfsgegevens invult en met iDeal of kaart afrekent. In Forester OS staat-ie nog onder Lead Engines, maar het ding produceert directe omzet, geen gesprekken. Een notitie over waarom een engine die je geld oplevert iets anders is dan een engine die je een gesprek oplevert.",
    metaTitle: "Pink Elephant training-inschrijving: Sales Engine",
    metaDescription:
      "Pink Elephant's training-inschrijving in twee minuten van datum tot betaling. Waarom een Sales Engine fundamenteel anders is dan een Lead Engine.",
    keywords: [
      "Pink Elephant",
      "training inschrijven",
      "Sales Engine",
      "Lead Engine verschil",
      "Forester OS",
      "ITSM training",
      "iDeal training betalen",
      "WorldPay UK",
    ],
    about: [
      { name: "Pink Elephant", sameAs: "https://www.pinkelephant.co.uk" },
      { name: "Mollie", sameAs: "https://www.mollie.com" },
      { name: "WorldPay", sameAs: "https://www.worldpay.com" },
      { name: "Forester OS" },
    ],
    readTime: "7 min",
    body: {
      greeting: "Lief dagboek, woensdag 20 mei 2026",
      intro: [
        "Volgende week gaat Pink Elephant live op pinkelephant.co.uk. We zitten in de laatste loodjes-fase: redirects controleren, popups uit het oude WordPress weghalen, mu-plugins testen. Maar tussendoor zat ik vanmiddag in de Forester-config van Pink een nieuwsbrief-template aan te passen, en mijn oog viel op iets dat me al een week of twee dwars zit.",
        "Pink's Training enrollment staat in onze interface onder Lead Engines. Naast hun Tech Quick Quote, hun IT-Support Quick Quote, hun E-Learning demo en hun contactformulier. Logische plek, want het is dezelfde technologie: een wizardje op de WordPress-pagina dat een formulier opbouwt en aan onze backend hangt. Maar als ik kijk wat dat ding feitelijk doet, hoort 'ie daar helemaal niet.",
        "Het genereert namelijk geen leads. Het genereert omzet. En dat verschil is groter dan een classificatie-detail.",
      ],
      sections: [
        {
          title: "Het winkelwagentje dat nooit echt werkte",
          paragraphs: [
            "Trainingen verkopen via een klassieke WooCommerce-winkelwagen is een dans van compromissen. Trainingen hebben datums, en datums zijn lastig als variant van een product. Trainingen hebben zaalcapaciteit, en voorraad-per-datum is iets waar een gemiddelde e-commerce-plugin van begint te bibberen. Trainingen worden zakelijk geboekt, vaak voor drie of vier collega's tegelijk, en een winkelwagen-UX die je laat klikken op 'voeg toe aan winkelwagen' en je dan naar een aparte checkout-pagina stuurt, is ontworpen voor één consument met één boek.",
            "Het oude scenario bij dit type opdrachtgever is bijna altijd hetzelfde: een training-pagina met een datum-dropdown, een knop 'inschrijven', een redirect naar een winkelwagen-pagina die al niet meer dezelfde branding heeft, een checkout waar de bezoeker een hele rits velden tegenkomt die voor B2C-aankopen zijn bedacht (geen factuuradres, geen BTW-nummer, geen kostenplaats), en aan het eind een betaalmodule die misschien wel met iDeal werkt maar niet met de manier waarop een bedrijfs-administratie wíl betalen. Cart-abandonment is hier geen marketing-buzzword. Het is een meetbare deuk in de omzet.",
            "Pink had die deuk dus ook. En het is precies het soort wrijving waar Forester voor bedoeld is om weg te halen.",
          ],
        },
        {
          title: "Alles in één flow op de course-pagina zelf",
          paragraphs: [
            "Wat we gebouwd hebben is geen winkelwagen, geen aparte checkout en zelfs niet echt een 'formulier' in de klassieke zin. Het is een multi-step enrollment die rechtstreeks op de course-pagina zelf draait. De bezoeker leest het verhaal van de training, scrollt naar beneden, en de inschrijving start daar. Geen redirect, geen contextverlies, geen 'wacht, naar welke pagina ben ik nu eigenlijk?'.",
            "Onder de motorkap pakt de engine de huidige WordPress-pagina als bron (course-CPT), leest de ACF-repeater 'dates' uit voor de beschikbare data, en bouwt daar zelf de keuze-opties uit op. Pink's content-team zet dus simpelweg een nieuwe trainingsdatum in de CPT en de inschrijfflow weet het. Geen koppeling te configureren, geen synchronisatie te onderhouden.",
            "Daarna komt het zakelijke deel: aantal deelnemers (tot vier per inschrijving, want bedrijfs-trios en kwartetten zijn de norm), bedrijfsgegevens, telefoonnummer, en pas dan de betaalstap. Per datum kan de engine maximaal 20 inschrijvingen ontvangen voordat de optie automatisch verdwijnt, dus de zaal kan niet overboeken. En als laatste rolt de bezoeker langs drie betaalroutes: factuur (voor de boekhoudingen die per se zo willen), Mollie voor iDeal en EU-creditcards, en Worldpay voor de UK-betalingen die op pinkelephant.co.uk straks binnenstromen.",
            "Heel dat ding, van inhoudelijk-trainingsverhaal tot betalingsbevestiging, blijft op de course-pagina. De bezoeker switcht niet één keer van context.",
          ],
        },
        {
          title: "Waarom dit feitelijk een Sales Engine is",
          paragraphs: [
            "En hier komt de notitie waar dit dagboek-stukje eigenlijk over gaat. Een Lead Engine eindigt met een lead. Iemand vult een wizard in, jij krijgt context, en daarna start het mens-naar-mens-gesprek. De wizard heeft 't gesprek beter, sneller en gerichter gemaakt, maar het is nog steeds een vervolg-stap waar een sales-collega bij betrokken is. Onze Quick Quote-engines werken zo. De E-Learning demo werkt zo. Het contactformulier werkt zo.",
            "Een Sales Engine eindigt niet met een lead. Die eindigt met een order. Iemand klikt op 'inschrijven', kiest een datum, vult de bedrijfsgegevens, betaalt direct, en is klaar. Geen telefoontje meer nodig. Geen offerte. Geen handmatige factuur. De training is geboekt, het geld staat klaar, en in het CRM van Pink staat alleen nog een bevestigde deelnemer.",
            "Dat is geen Lead Engine met een betaalknopje. Dat is iets fundamenteel anders, omdat de uitkomst geld is, geen gesprek. En in onze interface staat 't dus op de verkeerde plek.",
          ],
        },
        {
          title: "Wat dat betekent voor de mensen die ermee werken",
          paragraphs: [
            "Het verschil zit niet alleen in semantiek. Een Lead Engine en een Sales Engine vragen om totaal andere metrics. Bij een Lead Engine wil je weten: hoeveel gesprekken levert dit op, wat is de gespreks-naar-deal conversie, wat is de gemiddelde deal-waarde van wat eruit volgt. Bij een Sales Engine wil je weten: hoeveel orders per week, gemiddelde ordergrootte, omzet per maand, no-show-rate. Compleet andere dashboards, compleet andere vervolgvragen.",
            "Voor het Pink-team is het verschil ook praktisch. Op een Lead Engine moet sales een telefoontje plegen na elke binnenkomende submission, want anders blijft de lead in z'n eentje af te koelen liggen. Op de Training enrollment hoeft sales niets te doen. De deelnemer staat al in het systeem, de factuur is al verstuurd of de betaling al binnen, de mail met praktische info is al uit. Het sales-team kan zich richten op de échte advisory-trainingen-conversaties, de Tech-QQ-leads, de IT-support-vragen. Dingen waar een mens nog wezenlijk waarde toevoegt.",
          ],
        },
        {
          title: "Forester-werk voor mezelf voor binnenkort",
          paragraphs: [
            "De observatie is op zichzelf alleen iets, als er ook iets uit voortkomt. Dus de to-do voor Forester OS is helder: Sales Engines moet een eigen categorie worden in onze interface, naast Lead Engines. Met andere standaard-metrics (omzet, ordergrootte, doorlooptijd van wizard tot betaling), andere notificatie-templates (transactioneel, niet sales-opvolging) en een aparte filter in het CRM-overzicht waarmee je orders apart kunt bekijken van leads.",
            "Het is een kleine UI-verschuiving met een grote conceptuele winst, want het maakt voor onze klanten direct duidelijk welk type wrijving Forester OS uit hun proces haalt. Een Lead Engine pakt de wrijving uit het kennismakingsmoment. Een Sales Engine pakt de wrijving uit het transactiemoment. Dat is een ander verhaal richting de markt, en het is een veel scherper verhaal als beide concepten naast elkaar staan.",
            "Geen idee wanneer ik 't bouw, maar ik denk dat-ie er voor de zomer staat. Het is precies het soort kleine herindeling dat je productinterface jaren beter laat aanvoelen.",
          ],
        },
      ],
      outro: [
        "Wil je het hele Pink Elephant-verhaal lezen, met de overgang van de oude pinkelephant.co.uk naar de nieuwe Webgrowth-stack, dan staat de case klaar. En heb je zelf een product of dienst waar je nu in een winkelwagen-trechter zit te wurmen terwijl het eigenlijk een directe enrollment of inschrijving moet zijn, dan loont 't gegarandeerd om die flow van de grond af opnieuw na te denken. Een winkelwagen is niet altijd het antwoord, soms is het juist het probleem.",
        "PS, Janne, jij weet als geen ander hoe het is om grip te houden op een complex order-proces. Eerst bij Roll Group, nu bij Pink. Doorzetter, scherp en accuraat. Mooi om met je samen te werken.",
      ],
      signature: "Tot snel, Martijn",
    },
  },
  {
    slug: "bag-integratie-quickscan-adalace",
    date: "2026-05-18",
    dateLabel: "Mei 2026",
    tag: "Maatwerk & integraties",
    title: "BAG-integratie in de Quickscan van Adalace: één adres als startpunt voor je hele intake",
    excerpt:
      "Adres invullen en de wizard weet al bouwjaar, oppervlakte en gebruiksdoel. Hoe we voor Adalace de BAG van het Kadaster koppelden aan een Quickscan-Lead Engine, en wat een kleine API-integratie voor het MKB betekent.",
    metaTitle: "BAG-koppeling in Adalace Quickscan: adres als intake",
    metaDescription:
      "Hoe we de BAG van het Kadaster koppelden aan Adalace's Quickscan-Lead Engine: één adres, en bouwjaar, oppervlakte en gebruiksdoel zijn al bekend.",
    keywords: [
      "BAG-integratie",
      "Kadaster API",
      "Adalace",
      "Quickscan Lead Engine",
      "BAG koppeling website",
      "intake automatiseren",
      "Forester OS",
      "MKB integratie",
    ],
    about: [
      { name: "Adalace", sameAs: "https://adalace.nl" },
      {
        name: "Basisregistratie Adressen en Gebouwen",
        sameAs: "https://www.kadaster.nl/zakelijk/registraties/basisregistraties/bag",
      },
      { name: "Kadaster", sameAs: "https://www.kadaster.nl" },
      { name: "Forester OS" },
    ],
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
    metaTitle: "NordFlame: Vervangingsscan en Quickscan op één site",
    metaDescription:
      "Twee soorten bezoekers, twee Lead Engines. Hoe we voor NordFlame een Vervangingsscan (Ecodesign 2027) en Quickscan naast elkaar lieten draaien.",
    keywords: [
      "NordFlame",
      "pelletkachel vervangen",
      "Ecodesign 2027",
      "Vervangingsscan",
      "Quickscan pelletkachel",
      "Lead Engine",
      "Aurora warmtepomp",
      "Forester OS",
    ],
    about: [
      { name: "NordFlame", sameAs: "https://www.nordflame.nl" },
      { name: "Ecodesign 2027" },
      { name: "Aurora warmtepomp" },
      { name: "Forester OS" },
    ],
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
