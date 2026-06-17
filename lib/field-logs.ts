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
    slug: "forester-ads-google-ads-zonder-jargon",
    date: "2026-06-08",
    dateModified: "2026-06-08",
    dateLabel: "Juni 2026",
    tag: "Advertenties",
    title: "Forester Ads: hoe je Google Ads bruikbaar maakt voor iemand die er doodsbang voor is",
    excerpt:
      "Forester ving bezoekers al op met Lead Engines en liet ze afrekenen met Sales Engines, maar al die tijd ging het over mensen die er al wáren. Met de Ads-feature pakken we eindelijk de bovenkant van de trechter. Het lastigste was niet de Google Ads API, maar de vraag hoe je een heel vakgebied terugbrengt tot één woord: Advertentie. Een notitie over waarom we van Performance Max naar Google Search zijn omgeslagen, een budget dat niet kan ontsporen, en een funnel die je van euro tot aanvraag volgt.",
    metaTitle: "Forester Ads: Google Ads zonder jargon",
    metaDescription:
      "Hoe Forester OS Google Ads behapbaar maakt zonder SEA-kennis: één Advertentie in plaats van een campagne, Google Search als default en een funnel die spend tot prospect volgt.",
    keywords: [
      "Google Ads MKB",
      "Forester OS",
      "Google Search advertenties",
      "Performance Max",
      "adverteren zonder SEA-kennis",
      "Google Ads advocaten",
      "Google Ads accountants",
      "ads-funnel",
      "advertentie maken zonder bureau",
    ],
    about: [
      { name: "Google Ads", sameAs: "https://ads.google.com" },
      { name: "Performance Max" },
      { name: "Claude", sameAs: "https://www.anthropic.com/claude" },
      { name: "Anthropic", sameAs: "https://www.anthropic.com" },
      { name: "Google Gemini", sameAs: "https://deepmind.google/technologies/gemini/" },
      { name: "Forester OS" },
    ],
    readTime: "8 min",
    body: {
      greeting: "Lief dagboek, maandag 8 juni 2026",
      intro: [
        "Tweede maandag van juni, koffie binnen handbereik, en de Ads-feature van Forester draait nu een paar weken écht. De eerste advertenties staan live in echte Google Ads-accounts, met echt budget, echte vertoningen en inmiddels de eerste echte cijfers. En precies die cijfers hebben ons de afgelopen week iets geleerd dat de feature op een belangrijk punt heeft omgegooid. Tijd dus om rustig op te schrijven waar we staan, want in de bouwhectiek zelf kom je daar nooit aan toe.",
        "Want als ik er met wat afstand naar kijk, zie ik dat we een gat hebben gedicht waar ik lang overheen heb gekeken. Forester kon een bezoeker altijd al opvangen met een Lead Engine, een Quickscan of Quick Quote die iemand iets oplevert en ons parallel context geeft. En sinds kort kan Forester die bezoeker ook direct laten afrekenen met een Sales Engine. Maar allebei die dingen gaan ervan uit dat de bezoeker er al is. De vraag hoe iemand überhaupt op de site komt, lieten we stilzwijgend aan de klant zelf over.",
        "En het lastigste aan deze hele feature was niet de techniek achter Google Ads, hoe taai die ook is. Het lastigste was de vraag waar ik wekenlang op heb zitten broeden: hoe maak je Google Ads bruikbaar voor iemand die er doodsbang voor is.",
      ],
      sections: [
        {
          title: "De bovenkant van de trechter die we steeds oversloegen",
          paragraphs: [
            "Forester begon met Lead Engines, slimme vragenlijstjes die een bezoeker iets opleveren (een rapport, een aanbeveling, een berekening) en ons ondertussen vertellen wie er langskwam en waar 'ie mee zit. Daarna kwamen de Sales Engines, die niet eindigen met een gesprek maar met een order. Twee mooie stukken machine, maar ze hebben allebei hetzelfde blinde vlekje: ze beginnen pas te werken als er iemand op de pagina staat.",
            "En precies dáár zit bij onze doelgroep het grootste gat. Advocaten, notarissen, accountants en hun teams hebben vaak een prima site met een prima Lead Engine erop, en dan komt er domweg te weinig volk langs. De trechter is keurig gebouwd, maar er valt bovenin bijna niks in. Een conversie-machine zonder verkeer is een hele nette etalage in een straat waar niemand loopt.",
            "Ons antwoord op 'hoe kom ik aan bezoekers' was tot nu toe een schouderophaal richting SEO, het geduldige werk om op eigen kracht hoger in Google te komen, of richting een advertentiebureau, dat duur is en waarbij je de grip op je eigen cijfers kwijtraakt. Geen van beide past bij wat Forester wil zijn. Dus bouwden we de bovenkant van die trechter er zelf bij, in dezelfde omgeving als de rest.",
          ],
        },
        {
          title: "Eén woord in plaats van een heel vakgebied",
          paragraphs: [
            "De grootste ontwerp-knoop is dat Google Ads geen knop is maar een vakgebied. Campagnes, advertentiegroepen, asset groups, biedstrategieën, zoekwoorden, match-types, CPC, CPM, ROAS. Voor iemand die daar z'n brood niet mee verdient is dat een muur van jargon waar 'ie het liefst met een grote boog omheen loopt. En terecht, want elk van die knoppen kan je geld kosten als je 'm verkeerd zet.",
            "Onze keuze was om die hele muur weg te hakken en er één woord van over te houden: Advertentie. Niet campagne, niet advertentiegroep, niet asset group. Je maakt in Forester een Advertentie, en wat daarachter precies aan Google-machinerie draait, krijgt de gebruiker simpelweg nooit te zien.",
            "In de eerste weken draaide daarachter standaard één Performance Max-campagne, Google's volautomatische variant die zelf zoekwoorden, bieden en plaatsingen kiest. Op papier ideaal voor onze doelgroep. In de praktijk zagen we iets anders. PMax kocht vooral goedkope ruis: klikken van vier tienden van een cent, duizenden vertoningen, en aan het eind van de rit nul aanvragen. Een net cijfer in het dashboard dat onderaan de streep niks opleverde.",
            "Dus hebben we de motor omgedraaid. Een nieuwe Advertentie draait sinds deze maand standaard op Google Search, de gewone tekstadvertenties die bovenaan verschijnen als iemand letterlijk intypt wat 'ie zoekt. Dat is duurder per klik, maar je betaalt voor iemand met een vraag in z'n hoofd in plaats van voor een willekeurige scroll. En dat verschil zien we nu live terug: van de mensen die via Search op een scan binnenkomen, start een flink deel daadwerkelijk de funnel. Performance Max is niet weg, maar verhuisd naar een knop Geavanceerd, voor wie 'm bewust wil aanzetten. De default is nu de variant die mensen trekt die écht zoeken.",
            "Het is dezelfde moeder-proof-filosofie als de rest van Forester. We verbergen de complexiteit niet door 'm weg te laten, maar door 'm achter een handvol slimme defaults en wat eigen rekenwerk te parkeren. De gebruiker neemt de beslissingen die ertoe doen, de machine doet de rest.",
          ],
        },
        {
          title: "Vijf vragen, geen muur van knoppen",
          paragraphs: [
            "Een Advertentie bouw je in vijf stappen, en alle vijf zijn ze in gewone taal gesteld. Welke pagina wil je promoten. Wat bied je aan. Voor wie is het. Wat mag het per maand kosten. En tot slot: wanneer is het geslaagd, een ingevuld formulier, een telefoontje of een mail. Dat is de hele flow. Geen tabblad met dertig instellingen, geen veld waarvan je je afvraagt of je het wel goed invult.",
            "Wat de gebruiker niet ziet, is dat er tussen die vragen door een hoop wordt geschreven op basis van wat 'ie heeft ingevuld. De zoekwoorden en de advertentieteksten laten we door Claude bedenken, het taalmodel waar we ook de rest van onze teksten mee maken, omdat dat in onze tests simpelweg de scherpste, meest menselijke zoekzinnen oplevert. Zet iemand de geavanceerde variant aan, dan verzorgt Google's eigen AI, Gemini, de teksten bij de beelden. En het beeld zelf hoeft niemand aan te leveren: het systeem pakt dat automatisch van de eigen website, het deel-plaatje en het app-icoontje, en snijdt het zelf bij naar de vierkante en liggende formaten die Google vraagt. De gebruiker hoeft dus geen advertentietekst te verzinnen, geen zoekwoorden te bedenken en geen plaatjes te zoeken. Dat doet de motor.",
            "En het meten of een advertentie ook echt iets oplevert, juist het stukje waar de meeste zelf-geknutselde Google Ads-accounts stilletjes op stuklopen, gebeurt vanzelf. Google plakt een onzichtbaar herkenningslabel aan iedereen die via een advertentie binnenkomt, en dat vangen wij meteen op. Vult zo iemand daarna het aanvraagformulier op de site in, dan weet het systeem zelf dat die aanvraag uit een advertentie kwam en telt 'm mee. Geen meetcode die je ergens op je site moet plakken, geen technisch gedoe waarvan je achteraf nooit zeker weet of het wel heeft gewerkt.",
          ],
        },
        {
          title: "Het budget dat niet kan ontsporen",
          paragraphs: [
            "De grootste angst bij Google Ads, zeker bij wie er niet dagelijks in zit, is dat het ding 's nachts ongemerkt je hele bankrekening leegtrekt. Dat is geen irrationele angst, het gebeurt mensen echt. Dus bouwden we daar een harde grens omheen.",
            "Per website stel je één totaal-maandbudget in. Daarbinnen mag je meerdere advertenties hebben, bijvoorbeeld één per regio, één per dienst of één per landingspagina. Maar de budget-sliders van die losse advertenties kunnen samen nooit boven dat totaal uitkomen, het systeem laat het domweg niet toe. Pauzeer of verwijder je een advertentie, dan komt dat budget weer vrij voor de rest.",
            "Het is een kleine technische ingreep met een groot psychologisch effect. De gebruiker weet dat het nooit meer kan worden dan het bedrag dat 'ie zelf heeft ingesteld, en dat is nu precies de zekerheid die iemand nodig heeft om überhaupt te dúrven beginnen met adverteren. Veiligheid is hier geen feature, het is de voorwaarde om de stap te zetten.",
          ],
        },
        {
          title: "De slimme start die na tien dagen weer gas terugneemt",
          paragraphs: [
            "Er zit nog een tweede knop in dat budget-verhaal, en die hebben we er net bij gebouwd. Een gloednieuwe advertentie heeft een probleem dat niks met geld te maken heeft maar er wel op lijkt: Google weet in het begin nog niks. Het algoritme moet eerst leren wie er klikt, wie er converteert en wie alleen maar langs scrolt, en met een krap dagbudget duurt dat leren tergend lang.",
            "Dus geven we elke nieuwe advertentie een aanloop. De eerste tien dagen draait 'ie op een wat ruimer dagbudget, zodat Google in korte tijd genoeg signaal binnenkrijgt om te snappen wie de moeite waard is. Daarna zakt de advertentie helemaal vanzelf terug naar het vaste dagbudget dat bij je maandbedrag hoort. De gebruiker hoeft daar niks voor te doen en niks van te weten, het gebeurt onder water.",
            "En het mooie is dat het keurig binnen die harde maandgrens van net blijft. De aanloop verbruikt wat meer aan het begin van de maand en wat minder aan het eind, maar het totaal dat je hebt ingesteld blijft het plafond. Je betaalt dus niet meer, je betaalt het alleen slimmer: vooraan wat extra om Google snel te laten leren, daarna rustig op kruissnelheid. Veiligheid en een vliegende start hoeven elkaar niet te bijten.",
          ],
        },
        {
          title: "De trechter die zichzelf eindelijk dichtmaakt",
          paragraphs: [
            "Het stuk waar ik het meest tevreden over ben is niet het aanmaken van een advertentie, maar wat je daarna ziet. Sinds eind mei krijgt elke advertentielink automatisch een onzichtbaar herkomst-label mee, en hetzelfde doen we met de links in de nieuwsbrieven. Daardoor kunnen we voor het eerst de hele keten in één scherm laten zien.",
            "Bovenin de trechter: hoe vaak je advertentie is getoond en hoe vaak erop is geklikt, die cijfers halen we rechtstreeks bij Google op. Daaronder de bezoekers die via een advertentie binnenkwamen en niet meteen weer wegklikten. En onderin de échte aanvragen: de mensen die daadwerkelijk een formulier hebben ingevuld en die we aan dat herkomst-label herkennen als afkomstig uit een advertentie. Die onderste, belangrijkste laag houdt Forester zelf bij, in plaats van het over te laten aan een los meetpakket.",
            "Dat is de heilige graal voor een MKB-ondernemer. Niet 'we zijn zo vaak getoond', maar 'deze advertentie heeft me deze week drie ingevulde aanvragen opgeleverd, en dit is wat het me heeft gekost'. De uitgaven bovenaan, een echte aanvraag onderaan, en alles ertussen zichtbaar op één plek. Geen los Google-scherm naast een los meetscherm naast een export uit je klantsysteem, maar één verhaal van euro tot aanvraag.",
            "En anders dan een paar weken geleden is dit nu geen belofte meer maar een meting. De keten is rond: van de eerste keer dat je advertentie verschijnt tot de ingevulde aanvraag zien we het in hetzelfde scherm gebeuren, live. De eerste klanten kunnen nu al teruglezen wat een advertentie deze week aan kliks heeft gekost en hoeveel echte aanvragen daar onderaan uitrolden. Dat is het moment waarop adverteren ophoudt een gok te zijn en een rekensom wordt.",
          ],
        },
      ],
      outro: [
        "Wil je het naadje van de Ads-feature weten, of zit je zelf met een prima site waar simpelweg te weinig volk op afkomt, dan is dit precies het gesprek dat ik graag voer. Adverteren hoeft geen vakgebied te zijn dat je noodgedwongen uitbesteedt of jarenlang vermijdt. Soms is het een kwestie van de juiste vijf vragen en een budget dat niet kan ontsporen.",
        "PS, voor iedereen die Google Ads tot nu toe heeft weggewuifd als te ingewikkeld of als iets voor een bureau: dat was je goed recht, want het wás ingewikkeld. Het hele punt van deze feature is dat dat excuus nu vervalt. En dat vind ik bijna nog het mooiste eraan.",
      ],
      signature: "Tot snel, Martijn",
    },
  },
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
  {
    slug: "commitment-ladder-mind-movement",
    date: "2026-06-16",
    dateModified: "2026-06-16",
    dateLabel: "Juni 2026",
    tag: "App & platform",
    title: "De commitment-ladder van Mind Movement: één digitaal systeem dat je van gratis app tot retraite begeleidt",
    excerpt:
      "De meeste websites willen één ding van je: koop nu, of vul dit in. Maar rust verkoop je niet met één grote knop. Voor Mind Movement maakten we daarom geen verkooptrechter, maar een ladder. Onderaan een gratis app, daarboven groepslessen, persoonlijke gesprekken en tot slot een paar dagen op retraite. Je stapt erop waar je wilt en klimt in je eigen tempo. We maakten de app, de website én een plek waar Gil zelf alles aanpast, en ze werken allemaal samen.",
    metaTitle: "Mind Movement: app, site en CMS rond één ladder",
    metaDescription:
      "Hoe we voor Mind Movement de app, website en een eigen CMS bouwden rond één commitment-ladder: van gratis app tot retraite, alles op één gedeelde Firebase.",
    keywords: [
      "Mind Movement",
      "mentale wellness app",
      "Calmfulness",
      "commitment-ladder",
      "mindfulness app Nederland",
      "NSDR Nederlands",
      "retraite boeken",
      "wellness platform bouwen",
      "app site en CMS op één Firebase",
    ],
    about: [
      { name: "Mind Movement", sameAs: "https://mindmovementapp.nl" },
      { name: "Calmfulness" },
      { name: "Mollie", sameAs: "https://www.mollie.com" },
      { name: "Firebase", sameAs: "https://firebase.google.com" },
      { name: "NSDR" },
    ],
    readTime: "8 min",
    body: {
      greeting: "Lief dagboek, dinsdag 16 juni 2026",
      intro: [
        "Vandaag is de nieuwe Mind Movement live gegaan. En het is meer dan een website. We hebben drie dingen tegelijk gemaakt: een app voor op je telefoon, een nieuwe website, en een soort knoppenkamer waar Gil zelf alles kan aanpassen. Ze werken alle drie samen. Even een kop koffie erbij, want hier wil ik rustig bij stilstaan.",
        "Mind Movement is van Gil Sol uit Rotterdam. Hij helpt mensen rustiger te worden in hun hoofd, op een manier die hij Calmfulness noemt. Toen we begonnen, vroeg hij niet om een mooie website. Hij vroeg iets veel beters: hoe help je iemand die vandaag alleen even wil ontspannen, maar over een halfjaar misschien klaar is voor een hele week op retraite?",
        "Het antwoord werd een ladder. De meeste websites willen meteen één ding van je: koop nu, vul dit in, bel ons. Maar rust verkoop je niet met één grote knop. Dus maakten we geen trechter die iedereen naar dezelfde knop duwt, maar een ladder. Elke trede is iets wat echt bestaat. En je klimt zelf, in je eigen tempo.",
      ],
      sections: [
        {
          title: "Eén knop past niet bij rust",
          paragraphs: [
            "Mensen die bij Mind Movement binnenkomen, staan allemaal ergens anders. De een wil vanavond tien minuten z'n hoofd leegmaken. De ander zoekt echte begeleiding. En weer een ander is toe aan een week helemaal weg. Eén knop die ze allemaal hetzelfde laat doen, voelt voor bijna iedereen te vroeg of te laat.",
            "Daarom tekenden we een ladder met vier treden. Onderaan de app, die je gratis kunt proberen. Daarboven de groepslessen voor 19,99 euro. Daarboven een persoonlijk gesprek van 149 euro. En bovenaan de retraites: een paar dagen weg, van de Veluwe tot Bali. Elke trede is iets op zichzelf, geen opdringerig schermpje dat je probeert weg te klikken.",
            "Het mooie van een ladder is dat je er op elke hoogte op kunt stappen. Je mag maanden in de app blijven. Je mag één keer een groepsles proberen en daarna weer even niks. Niemand wordt geduwd. De volgende trede staat er gewoon, voor als je er aan toe bent.",
          ],
        },
        {
          title: "Onderaan staat de app, en dat is precies goed",
          paragraphs: [
            "We zetten de app expres onderaan. Het is de makkelijkste stap: je downloadt 'm, probeert 'm gratis, en hebt meteen iets in handen. Geen gesprek vooraf, geen drempel, niemand die nog moet terugbellen.",
            "In de app staan korte oefeningen voor elke dag: ademhaling, rust, beweging en meditatie. Er zijn kleine programma's voor wie beter wil slapen of minder wil piekeren. En er is een reis van 21 dagen die je stap voor stap meeneemt, van 'meer rust in je hoofd' tot 'mijn beste versie'.",
            "Waarom die app onderaan hoort? Omdat je er rustig aan kunt wennen voordat er geld of een afspraak bij komt kijken. Tegen de tijd dat iemand aan een groepsles of een gesprek denkt, kent 'ie het al weken. De volgende stap voelt dan niet als verkopen, maar gewoon als de logische volgende.",
          ],
        },
        {
          title: "Daarboven: drie dingen die je echt kunt boeken",
          paragraphs: [
            "Boven de app staan drie dingen die je zo op de website regelt, van begin tot eind. De groepslessen (19,99 euro) staan in een agenda. Je ziet wanneer er een is, je schrijft je in een paar klikken in, en als het toch niet uitkomt mag je tot 48 uur van tevoren ruilen.",
            "Voor een persoonlijk gesprek (149 euro) kies je gewoon een vrij moment in Gils agenda. Je klikt het aan, en je krijgt er automatisch een videogesprek bij. Geen heen-en-weer-gemail over wanneer het uitkomt.",
            "En voor een retraite betaal je eerst een deel aan, en dan staat je plek vast. Bij elke boeking krijg je vanzelf een bevestiging in je mail, en een herinnering vlak voordat het begint. Allemaal in dezelfde rustige stijl, en je hoeft nergens voor naar een andere site.",
          ],
        },
        {
          title: "Eén plek waar Gil alles zelf bijhoudt",
          paragraphs: [
            "Een ladder met vier treden wordt een rommeltje als je voor elk stukje een ander programma nodig hebt. Een agenda hier, een webwinkel daar, en niemand weet meer waar welke prijs staat. Dus maakten we één plek waar Gil alles zelf regelt.",
            "Daar zet hij de prijzen en de data van de retraites klaar. Hij plant de groepslessen weken vooruit. Hij ziet de aanmeldingen binnenkomen. En hij past de oefeningen in de app aan.",
            "Het slimme zit 'm hierin: die ene plek, de app en de website werken uit hetzelfde geheugen. Past Gil een prijs aan, dan klopt 'ie meteen overal. Voegt hij een oefening toe, dan staat 'ie meteen in de app. Geen dubbel werk, en nergens een prijs die per ongeluk niet meer klopt. Dat is het verschil tussen een folder en iets wat echt blijft leven.",
          ],
        },
        {
          title: "Rustig blijven was een keuze, geen toeval",
          paragraphs: [
            "De grootste valkuil van een ladder is dat 'ie gaat voelen als een verkoper die je naar boven duwt. Schermpjes die roepen 'nog maar twee plekken', uitroeptekens, haast. Voor een merk dat juist rust verkoopt is dat precies verkeerd. Wie net even is bijgekomen, zit niet te wachten op druk.",
            "Dus maakten we van die rust een harde regel. Geen uitroeptekens, en elke stap omhoog als een uitnodiging in plaats van een duwtje. De treden zijn er gewoon, zichtbaar maar nooit opdringerig.",
            "En om het ook zo te laten voelen, lijken de app en de website precies op elkaar: dezelfde kleuren, hetzelfde lettertype, dezelfde rust. Zo voelt het als één wereld, en niet als twee losse dingen met hetzelfde logo erop.",
          ],
        },
        {
          title: "Werkt ook voor een heel team",
          paragraphs: [
            "Onderweg zag ik dat dezelfde ladder net zo goed werkt voor bedrijven. Steeds meer werkgevers willen iets doen aan stress en uitval op het werk. Zo'n bedrijf kan z'n hele team op de app laten beginnen, en wie wil klimt vanzelf door naar de lessen of zelfs een retraite met collega's.",
            "Voor Gil is dat fijn, want het is precies hetzelfde systeem. Alleen het beginpunt verschilt. Of er nu één iemand instapt of veertig collega's tegelijk, hij houdt het op één plek overzichtelijk.",
          ],
        },
      ],
      outro: [
        "Wil je zien hoe de app, de website en die ene beheerplek samenwerken, lees dan de hele case eens. En zit je zelf met iets wat niet in één knop past, een dienst met meerdere stappen, of iets wat mensen pas na een tijdje durven kopen, dan is een ladder bijna altijd eerlijker dan een trechter. Loop er gerust eens met me doorheen.",
        "PS, Gil, dat je vanaf het begin zo duidelijk was dat het rustig en uitnodigend moest blijven en vooral niet mocht pushen, heeft dit beter gemaakt dan welke lijst met verkoopdoelen ook. Mooi om aan mee te bouwen.",
      ],
      signature: "Tot snel, Martijn",
    },
  },
];

export function fieldLogBySlug(slug: string): FieldLog | undefined {
  return FIELD_LOGS.find((l) => l.slug === slug);
}
