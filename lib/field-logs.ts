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
  {
    slug: "forester-ads-google-ads-zonder-jargon",
    date: "2026-06-08",
    dateModified: "2026-06-08",
    dateLabel: "Juni 2026",
    tag: "Advertenties",
    title: "Forester Ads: hoe je Google Ads bruikbaar maakt voor iemand die er doodsbang voor is",
    excerpt:
      "Forester hielp bezoekers al verder met een slim vragenlijstje en liet ze soms zelfs meteen afrekenen. Maar dat werkt alleen als er iemand op je site staat. Nu hebben we daar de bovenkant bij gebouwd: adverteren in Google, zonder dat je er verstand van hoeft te hebben. Het lastigste was niet de techniek, maar dit: hoe maak je iets bruikbaar voor iemand die er doodsbang voor is. Een stukje over één knop in plaats van een heel vakgebied, een budget dat nooit kan ontsporen, en eindelijk zien wat een euro je oplevert.",
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
        "Tweede maandag van juni, koffie binnen handbereik, en het adverteren in Forester draait nu een paar weken echt. De eerste advertenties staan live, met echt geld erachter, en inmiddels de eerste echte cijfers. En precies die cijfers leerden ons de afgelopen week iets dat ik niet had verwacht. Tijd om rustig op te schrijven waar we staan, want in de drukte van het bouwen kom je daar nooit aan toe.",
        "Als ik er met wat afstand naar kijk, zie ik dat we een gat hebben gedicht. Forester kon een bezoeker altijd al verder helpen met de Lead Engine: een slim vragenlijstje dat de bezoeker iets nuttigs oplevert, en jou ondertussen vertelt wie er langskwam. En sinds kort kan Forester die bezoeker ook meteen laten afrekenen met de Sales Engine. Maar allebei werken ze pas als er iemand op je site staat. Hoe iemand überhaupt op die site komt, lieten we stilletjes aan de klant zelf over.",
        "En het lastigste aan dit hele ding was niet de techniek. Het lastigste was de vraag waar ik wekenlang op heb zitten broeden: hoe maak je adverteren bruikbaar voor iemand die er doodsbang voor is.",
      ],
      sections: [
        {
          title: "De bovenkant die we steeds oversloegen",
          paragraphs: [
            "Forester begon met de Lead Engine: een slim vragenlijstje dat de bezoeker iets nuttigs oplevert, een rapport, een tip, een berekening, en jou ondertussen vertelt wie er langskwam en waar 'ie mee zit. Daarna kwam de Sales Engine: hetzelfde idee, maar het eindigt niet met een gesprek, het eindigt met een verkoop. Je rekent meteen af. Twee mooie dingen, maar ze hebben allebei hetzelfde mankement: ze werken pas als er iemand op je pagina staat.",
            "En precies daar zit bij onze klanten het grootste gat. Advocaten, notarissen, accountants en hun teams hebben vaak een prima site met een prima vragenlijstje erop, en dan komt er gewoon te weinig volk langs. Alles staat klaar, maar er loopt niemand binnen. Dat is een hele nette etalage in een straat waar niemand komt.",
            "Ons antwoord op 'hoe kom ik aan bezoekers' was tot nu toe: word op eigen kracht beter vindbaar in Google (mooi, maar dat duurt lang), of huur een duur reclamebureau in (en raak de grip op je eigen cijfers kwijt). Geen van beide past bij wat Forester wil zijn. Dus bouwden we de bovenkant er zelf bij, op dezelfde plek als de rest.",
          ],
        },
        {
          title: "Eén woord in plaats van een heel vakgebied",
          paragraphs: [
            "Het probleem met adverteren in Google is dat het geen knop is maar een heel vak. Er zijn tientallen termen, instellingen en knoppen, en bijna elke ervan kan je geld kosten als je 'm verkeerd zet. Voor iemand die daar z'n brood niet mee verdient is dat een muur waar 'ie het liefst met een grote boog omheen loopt. Begrijpelijk.",
            "Onze keuze was om die hele muur weg te halen en er één woord van over te houden: een advertentie. Je maakt in Forester gewoon een advertentie, en alles wat daarachter aan Google-machinerie draait, krijg je nooit te zien.",
            "De eerste weken gebruikten we daarvoor Google's automatische variant, die zelf bepaalt waar je advertentie verschijnt en aan wie. Op papier ideaal voor onze klanten. In de praktijk zagen we iets anders: die variant kocht vooral goedkope ruis. Heel veel klikjes voor een paar tienden van een cent, en aan het eind van de rit nul aanvragen. Een mooi cijfer op het scherm dat onderaan de streep niks opleverde.",
            "Dus draaiden we het om. Een nieuwe advertentie verschijnt nu standaard als gewone tekst bovenaan Google, precies op het moment dat iemand intypt wat 'ie zoekt. Dat kost meer per klik, maar je betaalt voor iemand met een vraag in z'n hoofd in plaats van voor een willekeurige voorbijganger. En dat verschil zien we nu live terug: van de mensen die zo binnenkomen, gaat een flink deel ook echt aan de slag. De automatische variant is niet weg, die zit nu achter een knop Geavanceerd, voor wie 'm bewust wil aanzetten. Maar standaard trekken we nu de mensen die echt zoeken.",
            "Het is dezelfde gedachte als de rest van Forester. We verstoppen de moeilijkheid niet door 'm weg te laten, maar door 'm voor je op te lossen. Jij neemt de keuzes die ertoe doen, de rest doet de machine.",
          ],
        },
        {
          title: "Vijf vragen, geen muur van knoppen",
          paragraphs: [
            "Een advertentie maak je in vijf stappen, alle vijf in gewone taal. Welke pagina wil je laten zien. Wat bied je aan. Voor wie is het. Wat mag het per maand kosten. En tot slot: wanneer is het geslaagd, een ingevuld formulier, een telefoontje of een mail. Dat is het. Geen scherm vol instellingen, geen vakje waarvan je je afvraagt of je het wel goed invult.",
            "Wat je niet ziet, is dat er tussen die vragen door een hoop voor je wordt geregeld. De zoekwoorden en de advertentieteksten laten we door een slimme computer bedenken, dezelfde waar we ook onze andere teksten mee maken, omdat die simpelweg de scherpste, meest menselijke zinnen oplevert. En het plaatje hoef je ook niet aan te leveren: het systeem pakt dat zelf van je eigen website en je logo, en snijdt het netjes bij naar de maten die Google vraagt. Je hoeft dus geen tekst te verzinnen, geen zoekwoorden te bedenken en geen plaatjes te zoeken. Dat doet de machine.",
            "En het bijhouden of een advertentie ook echt iets oplevert, precies het stukje waar de meeste mensen die het zelf proberen stilletjes op vastlopen, gebeurt vanzelf. Iemand die via een advertentie binnenkomt, krijgt een onzichtbaar herkenningsteken mee. Vult die persoon daarna het formulier op je site in, dan weet het systeem zelf dat die aanvraag uit een advertentie kwam, en telt 'm mee. Geen code die je ergens moet plakken, geen technisch gedoe waarvan je achteraf nooit zeker weet of het wel werkte.",
          ],
        },
        {
          title: "Het budget dat niet kan ontsporen",
          paragraphs: [
            "De grootste angst bij adverteren, zeker bij wie er niet dagelijks in zit, is dat het ding 's nachts ongemerkt je hele bankrekening leegtrekt. Dat is geen rare angst, het gebeurt mensen echt. Dus bouwden we daar een harde grens omheen.",
            "Per website stel je één bedrag per maand in. Daarbinnen mag je meerdere advertenties hebben, bijvoorbeeld één per regio of één per dienst. Maar bij elkaar opgeteld kunnen die nooit boven dat ene bedrag uitkomen. Het systeem laat het simpelweg niet toe. Zet je een advertentie op pauze of haal je 'm weg, dan komt dat geld weer vrij voor de rest.",
            "Het is een kleine ingreep met een groot effect. Je weet dat het nooit meer kan worden dan het bedrag dat je zelf hebt ingesteld, en dat is precies de zekerheid die iemand nodig heeft om überhaupt te durven beginnen. Veiligheid is hier geen extraatje, het is de voorwaarde om de stap te zetten.",
          ],
        },
        {
          title: "De slimme start die na tien dagen vanzelf gas terugneemt",
          paragraphs: [
            "Er zit nog een tweede ding in dat budget-verhaal, en dat hebben we er net bij gebouwd. Een gloednieuwe advertentie heeft namelijk een probleem dat op geld lijkt maar het niet is: Google kent je in het begin nog niet. Het moet eerst leren wie er klikt, wie er echt iets aanvraagt en wie alleen even kijkt. En met een krap dagbedrag duurt dat leren tergend lang.",
            "Dus geven we elke nieuwe advertentie een aanloopje. De eerste tien dagen mag 'ie wat ruimer van zich afbijten, zodat Google snel snapt wie de moeite waard is. Daarna zakt de advertentie helemaal vanzelf terug naar het normale dagbedrag dat bij je maandbedrag hoort. Je hoeft daar niks voor te doen en niks van te weten, het gebeurt onder water.",
            "En het mooie is: het blijft keurig binnen die harde maandgrens van net. De aanloop kost wat meer aan het begin van de maand en wat minder aan het eind, maar het totaal dat je hebt ingesteld blijft het plafond. Je betaalt dus niet meer, je betaalt het alleen slimmer. Veiligheid en een vliegende start hoeven elkaar niet te bijten.",
          ],
        },
        {
          title: "Eindelijk zien wat een euro je oplevert",
          paragraphs: [
            "Het stuk waar ik het meest tevreden over ben, is niet het maken van een advertentie, maar wat je daarna ziet. Iedereen die via een advertentie of via een mail van je binnenkomt, krijgt zo'n onzichtbaar herkenningsteken mee. Daardoor kunnen we voor het eerst het hele verhaal in één scherm laten zien.",
            "Bovenaan: hoe vaak je advertentie is getoond en hoe vaak erop is geklikt, die cijfers krijgen we rechtstreeks van Google. Daaronder de bezoekers die via een advertentie binnenkwamen en niet meteen weer wegklikten. En onderaan het belangrijkste: de echte aanvragen, de mensen die daadwerkelijk een formulier hebben ingevuld en die we herkennen als binnengekomen via een advertentie. Die onderste laag houdt Forester zelf bij.",
            "Dat is waar een ondernemer echt iets aan heeft. Niet 'we zijn zo vaak getoond', maar 'deze advertentie leverde me deze week drie aanvragen op, en dit kostte het me'. De uitgaven bovenaan, een echte aanvraag onderaan, en alles ertussen op één plek. Geen los Google-scherm naast nog een ander scherm naast een lijstje uit je klantsysteem, maar één verhaal van euro tot aanvraag.",
            "En anders dan een paar weken geleden is dit nu geen belofte meer, maar iets wat je echt ziet gebeuren. Live. De eerste klanten kunnen nu al teruglezen wat een advertentie deze week aan klikjes kostte en hoeveel echte aanvragen daar onderaan uitrolden. Dat is het moment waarop adverteren ophoudt een gok te zijn en gewoon een rekensom wordt.",
          ],
        },
      ],
      outro: [
        "Wil je weten hoe dit precies werkt, of zit je zelf met een prima site waar gewoon te weinig volk op afkomt, dan is dit het gesprek dat ik graag voer. Adverteren hoeft geen vak te zijn dat je noodgedwongen uitbesteedt of jarenlang vermijdt. Soms is het een kwestie van de juiste vijf vragen en een budget dat niet kan ontsporen.",
        "PS, voor iedereen die adverteren in Google tot nu toe heeft weggewuifd als te ingewikkeld of als iets voor een bureau: dat was je goed recht, want het wás ingewikkeld. Het hele punt van dit ding is dat dat excuus nu wegvalt. En dat vind ik bijna nog het mooiste eraan.",
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
      "Sinds 13 mei verkoopt Remco van Balude z'n eerste online AI-training. Geen dure cursus-software, geen maandabonnement. Wel een Sales Engine in Forester OS: een vragenlijstje dat niet eindigt met een gesprek maar met een verkoop, je rekent meteen af. Dertig vragen, waarvan de open antwoorden door een slimme computer worden nagekeken, en een certificaat dat meteen in je mail valt. Een stukje over wat er gebeurt als je je kennis wil verkopen zonder dat je agenda in de weg gaat zitten.",
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
        "Twee weken geleden, op 13 mei, ging de AI-training van Balude live. Vandaag pas zit ik er voor het eerst rustig achterover bij om op te schrijven wat we eigenlijk gebouwd hebben. Want bij een livegang ben je vooral bezig met checken of de betaling binnenkomt, of de mails wel aankomen, of het certificaat de juiste naam draagt. De vraag wat dit nou eigenlijk betekent, schoof ik door naar later. Vandaag is later.",
        "De training zelf is een mooi product. Remco geeft al jaren AI-advies aan advocatenkantoren, accountants en bedrijven, en die vraag werd elke maand groter, terwijl z'n agenda dat niet werd. Iedereen die met gevoelige informatie werkt, wil z'n team op één lijn krijgen: wat mag wel, wat mag niet, hoe gebruik je AI zonder per ongeluk een klantdossier in een openbaar systeem te gooien. Dat krijg je niet één voor één in een zaaltje uitgelegd als het om veel mensen gaat.",
        "Dus zochten we een manier om z'n kennis digitaal in een doosje te stoppen. En het bijzondere is: het is de eerste keer dat we iets bouwen dat helemaal zonder agenda werkt. Geen datum kiezen, geen zaal, geen reisafstand, geen docent die op een ochtend in Utrecht moet staan. Gewoon software die het product levert, de toets afneemt en het certificaat maakt.",
      ],
      sections: [
        {
          title: "Het andere uiteinde van de Sales Engine",
          paragraphs: [
            "Een paar weken geleden schreef ik over de training-inschrijving van Pink Elephant. Dat is ook een Sales Engine, dus ook een vragenlijstje dat eindigt met een verkoop, maar met iets heel anders erachter. Pink verkoopt trainingen in een echte zaal, met datums en docenten. Hun lijstje laat je een datum kiezen, kijkt of de zaal nog niet vol zit en regelt het betalen. Het gedoe dat we daar wegnemen, zit aan de inschrijfkant. Het product zelf wordt door mensen gegeven.",
            "Balude's AI-training zit aan de andere kant. Hier is het product óók de software. Eén ding verkoopt de training, levert 'm, en geeft je het certificaat, zonder dat er iemand fysiek iets hoeft te doen. Iemand betaalt 's avonds om half elf met iDEAL, krijgt meteen een welkomstmail, doet de training in een half uur, maakt de toets, en heeft het certificaat in de mail voor middernacht. Geen wachtlijst, geen datum kiezen, geen docent die in z'n agenda moet kijken.",
            "Zo zie je dat onze Sales Engines een hele reeks vormen kunnen aannemen. Aan de ene kant eentje waar nog een mens aan te pas komt (Pink), aan de andere kant eentje die helemaal vanzelf draait (Balude). En daartussen past straks alles waar je nog wel even moet bevestigen of inplannen, maar geen offerte meer hoeft te maken. Dat hele midden hebben we nu in zicht, en dat voelt als een platform dat z'n vorm begint te vinden.",
            "Voor de volledigheid: Balude is hiermee ook officieel de allereerste klant met zo'n verkoop-lijstje in Forester OS. We hadden het lang op de tekentafel staan, en hij is dus letterlijk degene die ons ertoe heeft aangezet om het ook echt te bouwen.",
          ],
        },
        {
          title: "De toets die zichzelf nakijkt",
          paragraphs: [
            "Het stuk waar ik me het meest aan heb verkneukeld, is de toets aan het eind. Dertig vragen over vier onderwerpen: veilig met gegevens omgaan, AI goed laten doen wat je wilt, herkennen wanneer AI iets verzint, en snappen wat AI nou eigenlijk is. Een deel meerkeuze, een flink deel open vragen. Want voor een training over verantwoord met AI omgaan werkt 'goed of fout' niet altijd. De nuance is hier het halve verhaal.",
            "Die open antwoorden laten we nakijken door een slimme computer, en wel zo dat de cursist het cijfer niet zelf kan ophogen. Niet door simpelweg naar woordjes te zoeken, maar met een duidelijke meetlat per vraag: wat moet er minimaal in staan, wat mag ontbreken, en wat verraadt dat iemand het juist verkeerd begrepen heeft. De computer krijgt de modelantwoorden mee, geeft een cijfer, en laat de cursist in een zin lezen waarom. Geen geheimzinnig cijfer, wel feedback waar je iets aan hebt.",
            "Het werd pas goed nadat we het ding een tijd hadden lopen testen met antwoorden van allerlei niveau. Te streng en het keurde slimme antwoorden af omdat ze niet letterlijk de juiste woorden gebruikten. Te soepel en het liet een slap antwoord zomaar door. We hebben het zo lang bijgeschaafd tot Remco zelf zei: ja, zo zou ik het ook beoordelen. Dat moment, waarop de computer en een echte expert tot hetzelfde oordeel komen, voelde als een mijlpaaltje. En het is natuurlijk een grappig detail waar je in een AI-training niet onderuit komt: de toets over verantwoord AI-gebruik wordt zelf door AI nagekeken, en je ziet precies waarom.",
            "Wie slaagt, krijgt meteen een persoonlijk certificaat op A4, met een eigen nummer en in de stijl van Balude, recht in de mailbox. Geen plaatje uit een sjabloon, maar een echt document dat je kunt printen, ophangen of als bewijs in een dossier stoppen. Juist voor de advocaten en accountants bleek dat belangrijker dan we vooraf dachten.",
          ],
        },
        {
          title: "Twee stille storingen die ons even stilzetten",
          paragraphs: [
            "In de eerste week na de livegang liepen we tegen twee storingen aan die niemand aankondigde, dat soort waar niks knippert of piept. De eerste: bij een bestelling ontbrak per ongeluk een bedrijfsnaam. Ons systeem slaat een bestelling met een leeg veld gewoon niet op, maar zegt daar niks over. Gevolg: een bestelling die wél leek door te lopen, maar nooit in het overzicht belandde. We vonden 'm terug in het logboek van het betaalsysteem, waar het bedrag keurig als betaald stond genoteerd.",
            "De tweede gebeurde bij een grote bestelling. Voor een team van veertig advocaten houd je een lijst van deelnemers bij. Maar als zo'n deelnemer zelf ook weer een lijstje meekrijgt, raakt het systeem in de war en slaat het niks op. Opgelost door die lijst vooraf netjes plat te maken.",
            "Allebei gevonden, allebei opgelost, en sinds die fixes loopt de hele keten van eerste klik tot certificaat in de inbox stabiel. Beide staan nu op een lijstje voor de volgende keer, want ze gaan niet alleen over Balude. Elke bestelling die we ergens opslaan, loopt vroeg of laat tegen zoiets aan.",
          ],
        },
        {
          title: "Met korting bij meer mensen wordt het pas echt interessant",
          paragraphs: [
            "Eén plek kost normaal 79 euro, in de introductieperiode 59 euro. Maar het mooie zit 'm in de korting bij meer mensen. Vanaf 25 deelnemers zakt de prijs naar 49 euro per persoon, vanaf 100 naar 39 euro. Dat zijn de bedragen waarmee een kantoor z'n hele team in één keer meedoet. Eén link, één factuur, en in één klap de hele discussie over veilig met AI omgaan van tafel.",
            "Voor Remco werkt dat heel anders dan een losse cursus. Hij hoeft per kantoor maar één gesprek te voeren, en het bestellen gaat vanzelf. Wie veertig plekken wil, heeft binnen vier minuten z'n bestelling rond, krijgt een eigen overzichtsscherm, en verdeelt de plekken over collega's. Iedere deelnemer een eigen account, eigen voortgang, eigen certificaat op naam. De manager ziet wie klaar is en wie nog moet beginnen. Geen losse Excel-lijstjes, alles op één plek.",
            "Wat ik mooi vind: het werkt zonder dat er een grote tussenpartij aan verdient. Geen flinke commissie aan een groot cursus-platform, geen tussenhandelaar die de klant van Remco overneemt. Remco verkoopt onder z'n eigen naam, op z'n eigen website, met z'n eigen klanten. Forester OS is de motor, maar Balude blijft de leverancier. Dat verschil is voor onze klanten belangrijker dan het op het eerste oog lijkt.",
          ],
        },
        {
          title: "Waar dit straks naartoe gaat",
          paragraphs: [
            "Het mooiste is dat we eigenlijk net een blauwdruk hebben gebouwd. Direct toegang na betaling, de toets die zichzelf nakijkt, het overzichtsscherm voor het team, het online betalen met iDEAL of kaart, het certificaat op A4 per mail: allemaal onderdelen die nu klaarstaan en die we voor een volgende cursus zo opnieuw kunnen gebruiken.",
            "Remco heeft al een verdere versie in z'n hoofd, een AI-training speciaal voor juridische teams die dieper op de regels en aansprakelijkheid ingaat. Dat is straks geen nieuw project, dat is dezelfde opzet met andere vragen, een andere meetlat en een ander certificaat. Hetzelfde geldt voor andere klanten die een training hebben en niet weten hoe ze die online moeten zetten zonder een duur abonnement. We hebben ze nu iets te laten zien dat werkt.",
            "Voor Forester OS als geheel betekent het ook iets. We hadden al het slimme vragenlijstje dat een gesprek oplevert. We hebben nu twee duidelijke smaken van het lijstje dat meteen een verkoop oplevert: eentje waar nog een mens aan te pas komt (Pink, met datum en zaal) en eentje die helemaal vanzelf draait (Balude, zonder agenda). Daartussen zit straks ruimte voor alles wat een ondernemer online kan verkopen, van losse uren tot abonnementen. Eén keer goed bouwen, op heel veel plekken inzetten.",
          ],
        },
      ],
      outro: [
        "Wil je het hele Balude-verhaal lezen, over hoe Remco van advies-geven naar een echt product is gegaan, dan komt die case er nog aan. En zit je zelf op zo'n punt dat je kennis vastloopt in losse gesprekken, dan kan een eigen online cursus een uitweg zijn. Niet voor iedereen, niet altijd, maar als dezelfde vraag steeds terugkomt en mensen ervoor willen betalen, is het tegenwoordig minder werk dan je denkt om het goed op te zetten. Loop er gerust eens met me doorheen.",
        "PS, Remco, dat je in een paar weken tijd van advies-geven naar een echt product hebt durven omschakelen, met je eigen prijs en je eigen merk, vind ik typerend voor hoe jij in je vak staat. Mooi werk om aan mee te bouwen.",
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
      "Op de trainingpagina's van Pink staat een Sales Engine: een inschrijving die je in twee minuten een datum laat kiezen, je bedrijfsgegevens laat invullen en meteen laat afrekenen met iDEAL of kaart. In Forester OS staat 'ie nog op de verkeerde plek, want het ding levert geen gesprekken op maar gewoon geld. Een stukje over het verschil tussen een vragenlijstje dat een gesprek oplevert en eentje dat meteen een verkoop oplevert.",
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
        "Volgende week gaat Pink Elephant live op pinkelephant.co.uk. We zitten in de laatste loodjes: oude doorverwijzingen controleren, pop-ups van de oude site weghalen, alles natesten. Maar tussendoor zat ik vanmiddag bij Pink een nieuwsbrief aan te passen, en mijn oog viel op iets dat me al een week of twee dwarszit.",
        "De training-inschrijving van Pink staat bij ons in het rijtje vragenlijstjes die een gesprek opleveren. Naast hun prijs-calculators, hun proefles en hun contactformulier. Logische plek, want het is dezelfde techniek: een vragenlijstje op de pagina dat alles netjes naar ons doorstuurt. Maar als ik kijk wat dat ding eigenlijk doet, hoort 'ie daar helemaal niet thuis.",
        "Het levert namelijk geen gesprekken op. Het levert geld op. En dat verschil is groter dan waar je het in een lijstje neerzet.",
      ],
      sections: [
        {
          title: "Het winkelwagentje dat nooit echt werkte",
          paragraphs: [
            "Trainingen verkopen via een gewoon webwinkel-wagentje is een aaneenschakeling van compromissen. Een training heeft datums, en datums passen slecht in een webwinkel die voor losse producten is gemaakt. Een training heeft een zaal die maar zo veel mensen aankan, en bijhouden hoeveel plekken er per datum nog vrij zijn, daar lopen de meeste webwinkels op vast. En een training wordt vaak zakelijk geboekt, voor drie of vier collega's tegelijk, terwijl zo'n wagentje is bedacht voor één klant die één boek koopt.",
            "Het oude verhaal is bij dit soort klanten bijna altijd hetzelfde: een trainingspagina met een datum-keuzelijstje, een knop 'inschrijven', en dan word je doorgestuurd naar een winkelwagen die er ineens heel anders uitziet, met een rij vragen die voor gewone consumenten zijn bedoeld (geen factuuradres, geen btw-nummer), en een betaalscherm dat misschien wel met iDEAL werkt maar niet op de manier waarop een bedrijf wíl betalen. Mensen die halverwege afhaken, is hier geen vaag begrip. Het is gewoon omzet die je misloopt.",
            "Pink had dat probleem dus ook. En het is precies het soort gedoe dat Forester juist weg wil halen.",
          ],
        },
        {
          title: "Alles in één keer, op de trainingspagina zelf",
          paragraphs: [
            "Wat we gebouwd hebben is geen winkelwagen en geen apart afrekenscherm. Het is een inschrijving in een paar stappen die gewoon op de trainingspagina zelf gebeurt. De bezoeker leest het verhaal van de training, scrollt naar beneden, en schrijft zich daar in. Je wordt nergens heen gestuurd, je verliest het overzicht niet, en je vraagt je nooit af op welke pagina je nu eigenlijk beland bent.",
            "Achter de schermen leest het ding gewoon de beschikbare datums van de trainingspagina zelf. Zet iemand van Pink een nieuwe trainingsdatum op de site, dan weet de inschrijving het meteen. Niks te koppelen, niks bij te houden.",
            "Daarna komt het zakelijke deel: hoeveel deelnemers (tot vier per inschrijving, want bedrijven boeken vaak voor drie of vier collega's tegelijk), de bedrijfsgegevens, het telefoonnummer, en dan pas het betalen. Per datum kunnen er maximaal 20 mensen mee, daarna verdwijnt de datum vanzelf, dus de zaal kan nooit overvol raken. En als laatste kies je hoe je betaalt: op rekening (voor de boekhoudingen die dat per se willen), online met iDEAL of kaart, en voor de Britse betalingen op pinkelephant.co.uk een eigen route.",
            "Dat hele ding, van het verhaal van de training tot de bevestiging dat je betaald hebt, blijft op één pagina. De bezoeker wordt geen enkele keer ergens anders heen gestuurd.",
          ],
        },
        {
          title: "Waarom dit eigenlijk een Sales Engine is",
          paragraphs: [
            "En hier komt het punt waar dit dagboekstukje over gaat. Een Lead Engine eindigt met een gesprek. Iemand vult het vragenlijstje in, jij weet meteen waar 'ie mee zit, en daarna bel of mail je. Het lijstje heeft dat gesprek beter en sneller gemaakt, maar het blíjft een gesprek waar nog een mens bij komt kijken. Zo werken hun prijs-calculators, zo werkt hun proefles, zo werkt het contactformulier.",
            "Een Sales Engine eindigt niet met een gesprek. Die eindigt met een verkoop. Iemand klikt op 'inschrijven', kiest een datum, vult de bedrijfsgegevens, betaalt meteen, en is klaar. Geen telefoontje meer nodig. Geen offerte. Geen factuur die je met de hand maakt. De training is geboekt, het geld staat klaar, en bij Pink verschijnt alleen nog een bevestigde deelnemer.",
            "Dat is geen vragenlijstje met een betaalknopje erbij. Dat is iets heel anders, want er komt geld uit, geen gesprek. En bij ons staat 't dus op de verkeerde plek.",
          ],
        },
        {
          title: "Wat dat betekent voor de mensen die ermee werken",
          paragraphs: [
            "Het verschil zit niet alleen in een woord. Een Lead Engine en een Sales Engine vragen om hele andere cijfers. Bij een Lead Engine wil je weten: hoeveel gesprekken levert dit op, en hoeveel daarvan worden uiteindelijk een klant. Bij een Sales Engine wil je weten: hoeveel bestellingen per week, hoe groot gemiddeld, hoeveel omzet per maand, en hoeveel mensen uiteindelijk niet komen opdagen. Hele andere overzichten, hele andere vervolgvragen.",
            "Voor het team van Pink is het ook in de praktijk anders. Bij een gesprek-lijstje moet er na elke aanmelding iemand bellen, anders koelt de interesse af. Bij de training-inschrijving hoeft niemand iets te doen. De deelnemer staat al in het systeem, de factuur is al weg of de betaling al binnen, de mail met praktische info is al verstuurd. Het team kan zich richten op de echte adviesgesprekken en de vragen waar een mens nog echt iets toevoegt.",
          ],
        },
        {
          title: "Werk voor mezelf voor binnenkort",
          paragraphs: [
            "Zo'n inzicht is pas iets waard als er ook iets uit voortkomt. Dus de taak voor Forester OS is helder: de Sales Engines moeten een eigen plek krijgen, naast de Lead Engines. Met hun eigen cijfers (omzet, bestelgrootte, hoe snel iemand van vragenlijstje naar betaling gaat), hun eigen mails (een bevestiging, geen opvolg-belletje), en een eigen filter zodat je bestellingen los van gesprekken kunt bekijken.",
            "Het is een kleine verschuiving op het scherm met een grote winst, want het maakt voor onze klanten in één oogopslag duidelijk welk gedoe Forester uit hun proces haalt. Een Lead Engine pakt het gedoe uit het kennismaken. Een Sales Engine pakt het gedoe uit het afrekenen. Dat is een scherper verhaal als beide naast elkaar staan.",
            "Geen idee wanneer ik 't bouw, maar ik denk voor de zomer. Het is precies het soort kleine herindeling die je product jarenlang beter laat aanvoelen.",
          ],
        },
      ],
      outro: [
        "Wil je het hele Pink Elephant-verhaal lezen, over de overstap van de oude site naar de nieuwe, dan staat de case klaar. En zit je zelf met een product of dienst die je nu door een winkelwagentje probeert te wurmen terwijl het eigenlijk een directe inschrijving moet zijn, dan loont het gegarandeerd om die hele aanpak opnieuw te bekijken. Een winkelwagen is niet altijd het antwoord, soms is het juist het probleem.",
        "PS, Janne, jij weet als geen ander hoe het is om grip te houden op een ingewikkeld bestelproces. Eerst bij Roll Group, nu bij Pink. Doorzetter, scherp en accuraat. Mooi om met je samen te werken.",
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
      "Je vult je adres in en de computer weet de rest al: bouwjaar, oppervlakte, waar het pand voor gebruikt wordt. Hoe we dat voor Adalace voor elkaar kregen via openbare gegevens van de overheid, en wat zo'n slimme koppeling voor een kleine ondernemer betekent.",
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
        "Vandaag is de nieuwe website van Adalace live gegaan. Met daarop de Quickscan: een vragenlijstje dat zodra je je adres invult al weet wat voor pand je hebt, en je daarna een persoonlijk rapport oplevert. Een lancering om met een goed gevoel op terug te kijken, dus ik schrijf het even op voor het vervliegt.",
        "Adalace adviseert bedrijven over het verduurzamen van panden en het voldoen aan de regels, en wordt gerund door Edwin: een adviseur met hart voor z'n vak en een hekel aan onnodig papierwerk. Toen we aan z'n nieuwe site begonnen, was z'n eerste vraag eigenlijk al de hele opdracht: 'kunnen we dit zo bouwen dat ik alleen nog over de échte adviezen hoef te praten, en niet eerst tien basisvragen hoef te stellen?'.",
        "Op een goeie ochtend, koffie in de hand, viel het kwartje. (Het is altijd de ochtend en altijd de koffie, voor de duidelijkheid.) De oplossing zat namelijk niet bij ons, maar bij de overheid.",
      ],
      sections: [
        {
          title: "Waar wij vanaf het begin geen zin in hadden",
          paragraphs: [
            "We hadden de Quickscan simpel kunnen bouwen zoals de meeste van dit soort tools dat doen: een lange rij vragen waarin de bezoeker zelf het bouwjaar, de oppervlakte, het energielabel en weet ik wat allemaal moet invullen. Maar dat is precies het soort gedoe waar wij allergisch voor zijn. Want dan moet je bezoeker dingen gaan opzoeken die 'ie waarschijnlijk niet uit z'n hoofd weet. De gemeente bellen. Of de papieren akte uit een la opduiken.",
            "Edwin had daar zelf ook geen zin in. Hij wilde van z'n bezoeker gewoon één adres en een paar slimme vragen, en dan een gesprek over de échte uitdagingen. Geen tien-basisvragen-circus vooraf.",
          ],
        },
        {
          title: "De oplossing zat bij de overheid",
          paragraphs: [
            "De BAG. Dat is een openbaar bestand dat het Kadaster en de gemeentes samen bijhouden, met van élk Nederlands adres een paar basisgegevens: het bouwjaar, de oppervlakte, waar het pand voor gebruikt wordt (wonen, kantoor of bedrijf), en de vorm van het gebouw.",
            "Het mooie: het is openbaar, gratis op te vragen en betrouwbaar, want het komt rechtstreeks uit de officiële gemeente-administratie. Geen tussenpartij, geen abonnement, niemand die je vastzet. Gewoon openbare gegevens die wachten tot iemand er iets nuttigs mee doet.",
            "Voor een lijstje waarin een bezoeker iets over z'n pand moet vertellen, is dat goud waard. Want waarom zou je iemand laten typen wat de overheid allang weet? Op het moment dat iemand z'n adres invult, kun je een tweede vraag overslaan. En een derde. En een vierde.",
          ],
        },
        {
          title: "Alleen nog vragen wat de overheid niet weet",
          paragraphs: [
            "In de kern is de Quickscan een Lead Engine: een slim vragenlijstje dat zich aanpast aan wat je tot dan toe hebt geantwoord. Door die koppeling met de overheid werd dat ineens veel slimmer. Is het bouwjaar al bekend, dan slaan we die vraag over. Staat er 'kantoor', dan springt het lijstje meteen door naar de vragen die voor kantoren gelden.",
            "We hebben gemeten dat we daarmee gemiddeld zo'n vier tot vijf vragen per pand overslaan. Een Quickscan die anders vijf minuten zou kosten, doe je nu in twee. Voor de bezoeker voelt het slim, alsof het systeem 'm kent. Wat eigenlijk ook zo is.",
          ],
        },
        {
          title: "En toen, het rapport",
          paragraphs: [
            "Aan het eind van de scan rolt er een persoonlijk rapport uit, met precies de verplichte keuringen, certificaten en aanbevolen stappen voor dát ene pand. Geen standaard lijstje, maar iets op maat.",
            "Edwin gebruikt dat rapport als startpunt van een gesprek, zodat hij meteen kan inzoomen op wat er voor díe klant speelt in plaats van eerst de basis nog eens door te nemen. Het rapport wordt automatisch gevuld met de antwoorden uit de scan én de gegevens van de overheid, en komt direct in z'n mailbox én in z'n klantenoverzicht terecht. Niks overtypen, niks kopiëren.",
          ],
        },
        {
          title: "Waarom dit verhaal niet over Adalace gaat",
          paragraphs: [
            "Het gaat over Adalace, maar eigenlijk over hoe slim een gewone ondernemer kan worden als je openbare gegevens gewoon durft te gebruiken. Die overheidsgegevens zijn geen exotische, peperdure koppeling en geen toekomstmuziek. Het is een stukje techniek en een adresveld dat meeluistert.",
            "Maar voor de bezoeker voelt het alsof 'ie iets bijzonders meemaakt. En daar gaat Forester OS over: slimme automatiseringen die ook voor de kleine ondernemer betaalbaar zijn, zonder een prijskaartje dat alleen grote bedrijven kunnen ophoesten.",
          ],
        },
      ],
      outro: [
        "Wil je het hele verhaal van Adalace lezen, dan kan dat bij de case. En heb je zelf een vragenlijstje of scan in je hoofd waarin openbare gegevens automatisch het werk zouden kunnen doen, dan zoek je iemand om mee te sparren. Bij dezen.",
        "PS, voor Edwin: respect dat je vanaf het allereerste gesprek over de nieuwe site al wist wat je niét wilde. Dat soort opdrachtgevers maakt het werk leuk.",
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
      "Een site voor pelletkachels moet twee soorten mensen tegelijk bedienen: degene die z'n oude kachel moet vervangen vanwege de nieuwe regels van 2027, en degene die nog rondkijkt en niet weet welke kachel bij z'n huis past. Twee soorten bezoekers, dus maakten we voor NordFlame twee aparte vragenlijstjes, eentje dat ook meedenkt over een eventuele warmtepomp.",
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
        "Vandaag ging NordFlame live, de mooie pelletkachel-site waaraan we de afgelopen maanden hebben gebouwd. En zoals dat gaat op een livegang-dag, was de fles bubbels aan het eind van de middag al open voordat we überhaupt hadden gecontroleerd of de aanmeldingen ook bij het juiste mailadres landden. (Spoiler: ze kwamen aan.)",
        "Wat ik vandaag in m'n hoofd heb zitten, is iets dat me al weken bezighield: de twee scans van NordFlame. Want een van de leukste puzzels van het hele project was hoe we twee totaal verschillende soorten bezoekers tegelijk konden bedienen, zonder ze allebei door hetzelfde standaard-formuliertje te duwen.",
      ],
      sections: [
        {
          title: "Twee soorten bezoekers, dus niet één formulier voor allebei",
          paragraphs: [
            "Iemand die op een mooie pelletkachel-site terechtkomt, is meestal één van twee mensen. De eerste moet z'n kachel vervangen. Die heeft een open haard of een oude houtkachel die er binnenkort uit moet vanwege de nieuwe regels van 2027, en wil weten of een pelletkachel daarbinnen past en of er subsidie mogelijk is. Concrete vraag, en haast.",
            "De tweede bezoeker kijkt nog rond. Die heeft bij de buren een pelletkachel gezien, vindt het idee mooi, maar heeft geen flauw idee welke kachel bij z'n huis past. Aan het oriënteren, en nog lang niet aan kopen toe.",
            "Allebei door hetzelfde 'neem contact op'-formulier duwen zou zonde zijn. De eerste wil een berekening en een antwoord over subsidie, de tweede wil eerst snappen waar 'ie überhaupt naar kijkt. Dus maakten we er twee: de Vervangingsscan voor de eerste, de Quickscan voor de tweede.",
          ],
        },
        {
          title: "De Vervangingsscan: de nieuwe regels van 2027 als rode draad",
          paragraphs: [
            "Ecodesign 2027 is de Europese regel die vanaf 2027 strengere eisen stelt aan kachels. Veel oudere houtkachels en open haarden vallen erbuiten en mogen dan niet meer gestookt worden. Een hoop mensen weten dat wel, maar weten niet wat het voor hén betekent.",
            "De Vervangingsscan is een slim vragenlijstje dat precies die vraag beantwoordt. In vier of vijf stappen kijkt 'ie wat je nu stookt, wat voor woning je hebt en hoe oud die is, hoe groot de ruimte is en wat je wensen zijn. Daarna stelt het de NordFlame-kachel voor die het beste past, mét een indicatie of je recht op subsidie hebt.",
            "Het rapport komt meteen in de mail van de bezoeker, en de aanmelding belandt tegelijk in het klantenoverzicht, met alles wat we al gevraagd hebben. Zo komt de verkoper niet aan de telefoon met 'wat heeft u nu staan?', maar met 'ik zie dat u een oude houtkachel heeft en waarschijnlijk recht op subsidie, laten we kijken welke kachel bij u past'.",
          ],
        },
        {
          title: "De Quickscan: voor wie nog rondkijkt",
          paragraphs: [
            "De Quickscan is een lichtere versie voor wie nog aan het oriënteren is. Geen subsidie-gedoe, geen moeilijke regel-teksten, gewoon een vriendelijk paadje om te ontdekken welke kachel bij jouw huis past. Een paar vragen over de grootte van de ruimte, het soort woning, hoeveel uur per dag je wilt stoken en wat je mooi vindt, en de scan komt met een advies.",
            "Wat ik mooi vind aan deze tweede: 'ie doet niet alsof 'ie meer is dan 'ie is. Een ontdek-hulpje, geen verkoopmachine. De bezoeker krijgt een persoonlijk advies voor een bepaalde kachel, met een kort verhaaltje over wat die kachel bijzonder maakt. Ook hier komt de aanmelding in het klantenoverzicht, zodat de verkoper gericht contact kan opnemen als de bezoeker een paar weken later terugkomt.",
          ],
        },
        {
          title: "Aurora als snijpunt: de warmtepomp-vraag in de scan",
          paragraphs: [
            "NordFlame's pronkstuk Aurora is een pelletkachel die direct samenwerkt met een warmtepomp. In beide scans rekent het systeem dat gewoon mee. Zegt een bezoeker dat 'ie al een warmtepomp heeft, of erover nadenkt, dan schakelen de scans over en stellen ze de Aurora voor in plaats van een gewone pelletkachel.",
            "Klinkt simpel, maar achter de schermen is dat een heel tweede pad door de scan. De subsidie zit anders in elkaar, het benodigde kachel-vermogen wordt anders berekend en de tips over de installatie verschillen. Maar voor de bezoeker is het maar één vraag: 'heb je een warmtepomp, of denk je erover na?'.",
            "Wat ik vooral mooi vind: het advies dat eruit komt klopt met het complete verwarmingsplaatje van de bezoeker. Niet alleen welke kachel je koopt, maar hoe die past bij de rest van je verwarming. Een chic merk neerzetten werkt het best als je verder vooruit denkt dan de bezoeker zelf doet.",
          ],
        },
        {
          title: "Wat ik vooral van NordFlame heb geleerd",
          paragraphs: [
            "Een chic merk neerzetten werkt ook in zo'n scan. Het is verleidelijk om elke scan een verkoopmachine te maken, met als doel zo snel mogelijk zo veel mogelijk aanmeldingen binnen te harken. Maar voor een merk als NordFlame zou dat gehaast overkomen. Een scan kan ook gewoon een ontdek-moment zijn, een eerste prettige kennismaking met de stem en het verhaal van het merk.",
            "En een slim vragenlijstje is geen formulier. Dat is iets wat ik klanten telkens opnieuw moet uitleggen. Een formulier is een rijtje invulvelden om een mailtje te versturen. Een Lead Engine is een vragenlijstje dat de bezoeker iets nuttigs oplevert, een rapport, een advies, een berekening, terwijl jij ondertussen te weten komt wie er langskwam. Het is een klein leuk momentje, geen drempel.",
          ],
        },
      ],
      outro: [
        "Wil je het hele NordFlame-verhaal lezen, met de zes kachels, de Aurora-combinatie en hoe we de bezoekers tellen zonder de gegevens met grote techbedrijven te delen, dan staat de hele case klaar. En heb je zelf een product of dienst waar twee soorten bezoekers tegelijk op afkomen, dan loont het bijna altijd om die in twee aparte paadjes op te splitsen. Ik denk graag mee.",
        "PS, Aurora is voor mij ook de naam van het pronkstuk dat dit hele project net even anders maakte dan een gewone productlancering. Dat zegt iets over de kracht van een mooi gekozen productnaam.",
      ],
      signature: "Tot snel, Martijn",
    },
  },
];

export function fieldLogBySlug(slug: string): FieldLog | undefined {
  return FIELD_LOGS.find((l) => l.slug === slug);
}
