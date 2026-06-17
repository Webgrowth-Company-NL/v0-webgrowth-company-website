export type CaseFeature = { label: string; body: string };
export type CaseSection = { title: string; body: string };
export type CaseResult = { value: string; label: string; descriptor?: string };
export type CaseQuote = { text: string; name: string; role?: string };
export type PsiMetric = { label: string; before: number; after: number };

export type CaseStudy = {
  slug: string;
  client: string;
  sector: string;
  location: string;
  headlineLead: string;
  headlineHighlight: string;
  intro: string;
  pillars: string[];
  features: CaseFeature[];
  img: string;
  imgAlt: string;
  /** CSS object-position waarde voor 16/10-crops. Default 'center'. */
  imgPosition?: string;
  /** Optionele auto-loopende video als hero in plaats van img. img dient als poster-fallback. */
  videoSrc?: string;
  logo: string;
  /** Optional tile background for the compact-card logo treatment. If unset, the card uses `img` as a photo. */
  thumbBg?: string;
  liveUrl: string;
  liveLabel: string;
  /** 'coming-soon' als de nieuwe site nog niet live staat. Default 'live'. */
  liveStatus?: "live" | "coming-soon";
  metaTitle: string;
  metaDescription: string;
  /** Uitgewerkte probleemstelling die de klant had voor we begonnen. */
  challenge?: { title: string; body: string };
  /** Hoe we het hebben aangepakt, in deelhoofdstukken (3-5 stuks). */
  solution?: CaseSection[];
  /** Meetbare resultaten in cijfers en feiten. */
  results?: CaseResult[];
  /** PageSpeed Insights voor/na-vergelijking (op /100). */
  psiComparison?: PsiMetric[];
  /** Optionele klantquote. */
  quote?: CaseQuote;
  /** Slug van een bijbehorende field-log voor cross-linking. */
  fieldLogSlug?: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "mind-movement",
    client: "Mind Movement",
    sector: "Mentale wellness",
    location: "Rotterdam",
    headlineLead: "Een rustige weg",
    headlineHighlight: "van gratis app tot retraite.",
    intro:
      "Mind Movement is van Gil Sol uit Rotterdam. Hij helpt mensen rustiger te worden in hun hoofd, op een manier die hij Calmfulness noemt. We maakten voor hem drie dingen die samenwerken: een app voor op je telefoon, een nieuwe website, en één plek waar Gil zelf alles aanpast. Samen vormen ze een ladder. Onderaan een gratis app, daarboven groepslessen, een persoonlijk gesprek en tot slot een paar dagen op retraite. Je stapt erop waar je wilt en klimt in je eigen tempo, zonder dat het ooit opdringerig wordt.",
    pillars: ["App, site én één beheerplek", "Alles uit één bron", "Drie dingen die je echt boekt"],
    features: [
      { label: "App, site en beheerplek werken samen", body: "De app, de website en de plek waar Gil alles aanpast, werken uit hetzelfde geheugen. Verandert hij ergens een prijs of een oefening, dan klopt het meteen overal. Geen dubbel werk." },
      { label: "Eén ladder, vier stappen", body: "Van een gratis app met dagelijkse oefeningen, via groepslessen van 19,99 euro en een persoonlijk gesprek van 149 euro, tot een paar dagen op retraite. Elke stap is iets wat je echt kunt boeken." },
      { label: "Gil regelt alles zelf", body: "Gil zet de prijzen en data van de retraites klaar, plant de groepslessen weken vooruit, ziet de aanmeldingen binnenkomen en past de oefeningen in de app aan. Daar is geen techneut meer voor nodig." },
    ],
    img: "/images/clients/mind-movement-hero.webp",
    imgAlt: "Deelnemers tijdens een Mind Movement-retraite in Azië",
    imgPosition: "center",
    logo: "/images/clients/mind-movement.png",
    liveUrl: "https://mindmovementapp.nl",
    liveLabel: "mindmovementapp.nl",
    metaTitle: "Case Mind Movement: app, website en alles op één plek | Webgrowth",
    metaDescription:
      "Hoe we voor Mind Movement een app, een nieuwe website en één beheerplek maakten die samenwerken. Een rustige ladder van een gratis app tot een meerdaagse retraite.",
    fieldLogSlug: "commitment-ladder-mind-movement",
    challenge: {
      title: "Een aanbod met vier stappen past niet in één gewone website",
      body:
        "Mind Movement verkoopt geen los product, maar een weg die je aflegt. Iemand begint vaak voorzichtig met een ademhalingsoefening, en is pas veel later toe aan een groepsles, een persoonlijk gesprek of een week op retraite. Een gewone website met één knop ('neem contact op' of 'koop nu') past daar niet bij. Te opdringerig voor een merk dat juist rust uitstraalt, en te plat voor een aanbod met vier stappen. Bovendien moest dezelfde informatie, zoals de oefeningen en de prijzen, overal tegelijk kloppen: in de app én op de site. Gil wilde één systeem dat die hele weg ondersteunt, en dat hij zelf kon bijhouden, zonder voor elke prijswijziging te hoeven bellen.",
    },
    solution: [
      {
        title: "App, site en beheerplek werken uit één bron",
        body:
          "We maakten drie dingen die samenwerken: de app, de website en een plek waar Gil alles aanpast. Ze delen hetzelfde geheugen. Log je in de app in, dan ben je ook op de site ingelogd. Past Gil iets aan, dan zie je het op allebei. Geen losse systemen die uit elkaar lopen, en niks dubbel bijhouden.",
      },
      {
        title: "De app is de gratis eerste stap",
        body:
          "Onderaan de ladder staat de app: gratis te proberen en 9,99 euro per maand voor alles. Daarin staan korte oefeningen voor elke dag (ademhaling, rust, beweging en meditatie), kleine programma's voor wie beter wil slapen of minder wil piekeren, en een reis van 21 dagen die je stap voor stap meeneemt. Zo wen je er rustig aan voordat er geld of een afspraak bij komt kijken.",
      },
      {
        title: "Drie dingen die je zo op de site boekt",
        body:
          "Boven de app staan drie dingen die je van begin tot eind op de website regelt. De groepslessen (19,99 euro) staan in een agenda waar je je in een paar klikken voor inschrijft, en als het toch niet uitkomt mag je tot 48 uur van tevoren ruilen. Voor een persoonlijk gesprek (149 euro) kies je een vrij moment in Gils agenda en krijg je er automatisch een videogesprek bij. En voor een retraite betaal je eerst een deel aan, waarna je plek vaststaat. Bij elke boeking krijg je vanzelf een bevestiging en een herinnering.",
      },
      {
        title: "Eén plek waar Gil alles zelf bijhoudt",
        body:
          "In plaats van een stapel losse programma's (een agenda hier, een webwinkel daar) maakten we één plek waar Gil alles regelt. Hij zet de prijzen en data van de retraites klaar, plant de groepslessen weken vooruit, ziet de aanmeldingen, en past de oefeningen in de app aan. Omdat die plek met de app en de site samenwerkt, is één wijziging meteen overal goed.",
      },
      {
        title: "Je eigen pagina als je bent ingelogd, plus automatische mails",
        body:
          "Wie is ingelogd, heeft een eigen pagina met zijn boekingen, gegevens en facturen, met dezelfde inlog als de app. Betalen kan gewoon met iDEAL of kaart, je krijgt netjes je mails, en vlak voor een les krijg je automatisch een herinnering. De website lijkt precies op de app, zodat het overstappen nergens schuurt.",
      },
    ],
    results: [
      { value: "3", label: "App, site en beheerplek", descriptor: "werken samen uit één bron" },
      { value: "4", label: "Stappen op de ladder", descriptor: "van gratis app tot meerdaagse retraite" },
      { value: "3", label: "Dingen die je echt boekt", descriptor: "groepsles, persoonlijk gesprek en retraite" },
      { value: "Zelf te regelen", label: "Gil aan de knoppen", descriptor: "prijzen, lessen en oefeningen zonder techneut" },
    ],
  },
  {
    slug: "mol-logistics",
    client: "MOL Logistics",
    sector: "Logistiek & transport",
    location: "Tilburg",
    headlineLead: "Een nette transport-site",
    headlineHighlight: "waar elke aanvraag bij de juiste persoon belandt.",
    intro:
      "MOL Logistics regelt transport en opslag voor bedrijven, met kantoren door heel Europa. Voor hun Nederlandse tak bouwden we de website opnieuw. Wil je iets laten vervoeren, dan stel je zelf je rit samen en de aanvraag komt meteen bij de juiste contactpersoon binnen. Solliciteer je, dan gaat het naar de juiste mensen. Heb je een vraag, dan komt die bij het juiste kantoor. Niks belandt nog in één grote algemene mailbox. En de site is razendsnel.",
    pillars: ["Zelf je transport samenstellen", "Alles bij het juiste team", "Snelle site"],
    features: [
      { label: "Zelf je transport samenstellen", body: "Je geeft aan wat je waarheen wilt vervoeren en aan welke eisen het moet voldoen. De aanvraag komt meteen bij de juiste contactpersoon, met alles wat hij moet weten er al bij." },
      { label: "Alles komt bij het juiste team", body: "Elke aanvraag wordt automatisch doorgestuurd naar hun klantsysteem, zodat de mensen die verkopen en de mensen die de e-mails versturen allemaal hetzelfde zien. Niemand hoeft iets nog met de hand over te tikken." },
      { label: "Een snelle site", body: "We hebben de site flink versneld, zodat hij vlot laadt en niet blijft hangen. Bezoekers wachten niet en haken niet af." },
    ],
    img: "/images/clients/mol-logistics-hero.jpg",
    imgAlt: "MOL Logistics warehouse in Tilburg met heftrucks en containers",
    imgPosition: "center 60%",
    logo: "/images/clients/mol-logistics.png",
    liveUrl: "https://mol-logistics.eu",
    liveLabel: "mol-logistics.eu",
    liveStatus: "coming-soon",
    metaTitle: "Case MOL Logistics: corporate site met volumecalculator | Webgrowth",
    metaDescription:
      "Hoe we voor MOL Logistics een corporate site bouwden met een volumecalculator, een vacature-flow en een performance-mu-plugin onder de motorkap.",
    challenge: {
      title: "Een site die door de jaren heen een rommeltje was geworden, met alle aanvragen op één hoop",
      body:
        "De site van MOL was in de loop der jaren steeds verder uitgedijd. Elk soort aanvraag had zijn eigen formulier en ging een andere kant op, de vacatures stonden los van de rest van de site en alles laadde traag. Bezoekers kwamen daardoor moeilijk op de juiste plek terecht, en aanvragen verdwenen in één grote bak waar niemand goed overzicht over had. MOL wilde wel met dezelfde vertrouwde manier van werken doorgaan, maar dan met een site die er strak uitziet, snel is en alles netjes bij de juiste persoon laat belanden.",
    },
    solution: [
      {
        title: "Zelf je transport samenstellen",
        body:
          "We maakten een handig hulpje op de site: je geeft aan wat je waarheen wilt vervoeren en aan welke eisen het moet voldoen. De aanvraag komt dan meteen bij de juiste contactpersoon, met alles wat hij moet weten er al bij. MOL kan zelf nieuwe transport-opties toevoegen, daar is geen techneut voor nodig.",
      },
      {
        title: "Een vacature in een halfuur online",
        body:
          "Elke vacature krijgt een eigen pagina met steeds dezelfde herkenbare opbouw: een sterke kop, de uitleg, de sfeer van het team, hoe het sollicitatieproces verloopt en een knop om te reageren. De mensen die nieuwe collega's zoeken vullen alleen de tekst in, de rest staat al klaar. Wat vroeger een ontwerper kostte, is nu een klusje van een halfuur.",
      },
      {
        title: "Elke aanvraag bij het juiste team",
        body:
          "Elk soort bericht gaat automatisch naar de juiste mensen: een transport-aanvraag naar de juiste contactpersoon, een vraag over opslag naar het magazijn-team, een sollicitatie naar de mensen die over personeel gaan en een gewone vraag naar het juiste kantoor. Er is geen algemene mailbox meer waar alles in verdwijnt.",
      },
      {
        title: "Aanvragen automatisch in hun klantsysteem",
        body:
          "Naast de mail wordt elke aanvraag ook automatisch doorgestuurd naar hun klantsysteem. Vult iemand het transport-hulpje in, dan staat die persoon binnen een paar seconden netjes geregistreerd bij zowel de mensen die verkopen als de mensen die de e-mails versturen. Niemand zit meer met losse lijstjes die niet kloppen.",
      },
      {
        title: "Een snelle site, ondanks veel content",
        body:
          "Achter de schermen hebben we de site flink versneld: lettertypes, afbeeldingen en losse stukjes techniek laden nu zo licht mogelijk. Het resultaat is een site die opvallend snel is, zonder dat we ook maar iets aan het ontwerp of de inhoud hoefden in te leveren.",
      },
      {
        title: "Alles netjes uitgelijnd, van boven tot onder",
        body:
          "We zorgden dat alle secties op de site dezelfde breedte en marges aanhouden, zodat alles netjes onder elkaar uitlijnt. De site oogt daardoor rustig en verzorgd, op je computer en op je telefoon.",
      },
    ],
    results: [
      { value: "Per aanvraag", label: "Naar het juiste team", descriptor: "geen grote algemene mailbox meer" },
      { value: "2 systemen", label: "Automatisch doorgestuurd", descriptor: "elke aanvraag staat meteen bij verkoop én e-mail" },
      { value: "Zelf te regelen", label: "MOL aan de knoppen", descriptor: "vacatures en transport-opties zonder techneut" },
      { value: "Snel", label: "Vlotte site", descriptor: "laadt razendsnel ondanks veel inhoud" },
    ],
  },
  {
    slug: "balude",
    client: "Balude",
    sector: "IT-dienstverlening & AI",
    location: "Nederland",
    headlineLead: "Een moderne IT-partner",
    headlineHighlight: "met een eigen betaalde online training.",
    intro:
      "Balude is een IT-bedrijf dat slim met AI omgaat. Ze helpen bedrijven met het automatiseren van werk, software op maat, opslag van data op Europese servers en advies over regels en veiligheid. We bouwden voor hen balude.com in onze eigen donkere stijl, en koppelden er meteen iets nieuws aan vast: een online training die je gewoon op de site koopt. Je betaalt, je kunt meteen beginnen, je maakt aan het eind een toets, en je krijgt je eigen certificaat automatisch in je mailbox. Helemaal zonder dat Remco er een vinger naar hoeft uit te steken.",
    pillars: ["Training kopen op de site", "Betalen, toets en certificaat automatisch", "Vier diensten op één site"],
    features: [
      { label: "Eerste Sales Engine in Forester OS", body: "Balude is de allereerste die een betaald product helemaal vanzelf laat lopen: je rekent af, je krijgt toegang, je maakt de toets en je certificaat rolt eruit. Geen enkele handmatige stap ertussen." },
      { label: "Een slimme computer kijkt de open vragen na", body: "De vragen waar je zelf een antwoord moet typen, worden door een slimme computer nagekeken en beoordeeld. De vragen met vaste antwoorden gaan automatisch goed of fout. En niemand kan stiekem zijn eigen cijfer hoger zetten." },
      { label: "Betalen, inloggen en je certificaat", body: "Je betaalt online met iDEAL of je kaart, krijgt een persoonlijke link in je mailbox waarmee je meteen begint, maakt de toets en ontvangt een net certificaat met je eigen naam en een uniek nummer, in de stijl van Balude." },
    ],
    img: "/images/clients/balude-hero.png",
    imgAlt: "Balude website-hero: ICT die jouw bedrijf vooruit brengt, dark theme met paars en cyaan",
    imgPosition: "center top",
    logo: "/images/clients/balude.png",
    liveUrl: "https://balude.com",
    liveLabel: "balude.com",
    metaTitle: "Case Balude: AI-first IT-partner met eigen Sales Engine | Webgrowth",
    metaDescription:
      "Hoe we voor Balude balude.com bouwden en er meteen de eerste Sales Engine van Forester OS aan koppelden: betaalde AI-training met Mollie-checkout, Gemini-grading en automatisch PDF-certificaat.",
    challenge: {
      title: "Een nieuw IT-verhaal helder neerzetten, en er meteen een betaald product op laten draaien",
      body:
        "Balude is Remco met een vast clubje specialisten om zich heen, en ze bouwen een IT-praktijk die slim met AI omgaat. Ze doen veel verschillende dingen: werk automatiseren, software op maat (waaronder hun eigen PractiPlan), data opslaan op Europese servers in plaats van bij de grote Amerikaanse bedrijven, en advies geven over regels en veiligheid. Tegelijk wilde Remco vanaf dag één een betaalde AI-training kunnen verkopen, met toets en certificaat erbij, zonder dat hij voor elke cursist dagen werk kwijt was. Eén site dus, met vier diensten die elk hun eigen verhaal verdienen, plus een training die helemaal vanzelf moet lopen.",
    },
    solution: [
      {
        title: "Een donkere, frisse site met een eigen pagina per dienst",
        body:
          "We bouwden balude.com in een donkere stijl met paarse en blauwgroene accenten, precies in de huisstijl van Balude. Elke dienst (werk automatiseren, software op maat, data-opslag in Europa en advies) kreeg een eigen pagina met dezelfde herkenbare opbouw. De homepage stuurt je meteen naar de dienst die bij jou past, in plaats van alles op één hoop te gooien.",
      },
      {
        title: "Het Europese alternatief, naast de bekende route",
        body:
          "Op de data-pagina laten we naast het gewone verhaal ook het Yankee Free pakket zien: een Europese manier om je data op te slaan, voor klanten die hun gegevens bewust niet bij de grote Amerikaanse bedrijven willen onderbrengen. Met één klik wissel je tussen beide opties en zie je meteen de prijzen en de verschillen, zodat de keuze concreet wordt.",
      },
      {
        title: "Een betaald product dat helemaal vanzelf loopt, voor het eerst getest op Balude",
        body:
          "De Balude AI-training is het eerste voorbeeld van iets nieuws in Forester OS: de Sales Engine. Waar onze Lead Engines bezoekers naar de juiste plek leiden, verkoopt een Sales Engine een product van begin tot eind vanzelf. Je rekent af, je kunt meteen beginnen, je maakt de toets en je certificaat rolt eruit. We hebben het zo gebouwd dat een volgende klant die online iets wil verkopen, hetzelfde systeem kan gebruiken.",
      },
      {
        title: "Online betalen en meteen beginnen",
        body:
          "Cursisten betalen online met iDEAL, hun kaart of Bancontact, en krijgen daarna meteen een persoonlijke link in hun mailbox waarmee ze de training starten. Ze hoeven niet eerst een account aan te maken. Hoe meer mensen je inschrijft, hoe goedkoper: één tot 25 cursisten 79 euro per persoon (kennismakingsprijs 59 euro), 25 tot 99 cursisten 49 euro en honderd of meer 39 euro. Korting bij grote aantallen, zonder dat Remco eerst een offerte hoeft te maken.",
      },
      {
        title: "Een slimme computer kijkt de open vragen na, het certificaat komt vanzelf",
        body:
          "De toets heeft dertig vragen. De vragen met vaste antwoorden gaan automatisch goed of fout. De vragen waar je zelf een antwoord typt, worden door een slimme computer nagekeken en beoordeeld. Dat gebeurt veilig achter de schermen, dus niemand kan stiekem zijn eigen cijfer hoger zetten. Haal je het, dan maakt het systeem meteen een net certificaat met je naam en een uniek nummer en stuurt dat per mail naar je toe.",
      },
      {
        title: "Vanaf het begin geschikt voor meer klanten",
        body:
          "Hoewel Balude de eerste is, hebben we het zo opgezet dat we het keer op keer kunnen gebruiken. De betaalgegevens, de kleuren, het lettertype en het certificaat zijn per klant in te stellen, en in één overzicht kun je meerdere van deze trainingen naast elkaar beheren. De volgende klant die online een training of product wil verkopen, sluit gewoon aan op hetzelfde systeem.",
      },
    ],
    results: [
      { value: "Eerste", label: "Sales Engine in Forester OS", descriptor: "primeur op het platform, klaar voor meer klanten" },
      { value: "End-to-end", label: "Geen handmatige stappen", descriptor: "betalen, toegang, toets, certificaat, mail" },
      { value: "Automatisch", label: "Open vragen nagekeken", descriptor: "veilig achter de schermen, niet te beïnvloeden" },
      { value: "EU-first", label: "Europees alternatief", descriptor: "Yankee Free pakket naast de bekende route" },
    ],
    fieldLogSlug: "balude-ai-training-sales-engine",
  },
  {
    slug: "pink-elephant",
    client: "Pink Elephant",
    sector: "IT-consultancy & ITSM",
    location: "Vught",
    headlineLead: "Een IT-site die hoger in Google komt,",
    headlineHighlight: "sneller laadt en zelf klanten binnenhaalt.",
    intro:
      "Pink Elephant is een internationaal IT-adviesbureau met tientallen jaren ervaring in IT-hulp, trainingen en online cursussen. We bouwden hun site helemaal opnieuw, maakten vijf slimme vragenlijstjes die meteen klanten binnenhalen en zorgden dat alle oude links netjes naar de nieuwe pagina's blijven wijzen toen ze naar een nieuw webadres verhuisden. Onderweg maakten we van een trage site (Google gaf een 42) een razendsnelle site waar Google nu een 99 voor geeft.",
    pillars: ["5 slimme vragenlijstjes", "Van 42 naar 99 bij Google", "744 oude links netjes opgevangen"],
    features: [
      { label: "Vijf slimme vragenlijstjes", body: "Een prijsberekening voor licenties, een prijsberekening voor IT-hulp, aanmelden voor een training, een online cursus proberen en een slim contactformulier. Elke aanvraag komt bij de juiste persoon en wordt automatisch doorgestuurd naar hun klantsysteem." },
      { label: "Van een 42 naar een 99 bij Google", body: "Snellere techniek achter de schermen, lichtere afbeeldingen en moderne bouw brachten het rapportcijfer van Google van 42 naar 99, met een 100 voor toegankelijkheid en handige tips." },
      { label: "744 oude links netjes opgevangen", body: "Toen de site naar een nieuw webadres verhuisde, zorgden we dat alle oude links automatisch op de juiste nieuwe pagina uitkomen. Niemand loopt vast op een foutmelding en de plek in Google bleef behouden." },
    ],
    img: "/images/clients/pink-elephant-hero.webp",
    imgAlt: "Trainingssessie van Pink Elephant met deelnemers achter laptops",
    imgPosition: "center 25%",
    logo: "/images/clients/pink-elephant.png",
    liveUrl: "https://pinkelephant.co.uk",
    liveLabel: "pinkelephant.co.uk",
    metaTitle: "Case Pink Elephant: ITSM-site met vijf Lead Engines + PSI 99 | Webgrowth",
    metaDescription:
      "Hoe we voor Pink Elephant een ITSM-site opnieuw opbouwden in Forester OS: vijf Lead Engines, 744 redirects voor de domein-migratie en PSI-prestaties van 42 naar 99.",
    challenge: {
      title: "Een site die er mooi uitzag maar niet meer goed werkte",
      body:
        "Pink Elephant doet al tientallen jaren van alles: IT-hulp, trainingen en online cursussen. Maar de site was niet meegegroeid. Hij was zwaar en traag, de formulieren waren ouderwets en de pagina's stonden los van elkaar. Google gaf de site op de telefoon maar een magere 42. Aanvragen kwamen binnen via een los mailadres in plaats van via een handige route, en voor elke kleine aanpassing moest het team iemand technisch bellen. Bovenop dat alles ging de site ook nog verhuizen naar een nieuw webadres, en de jarenlang opgebouwde plek in Google mocht daarbij niet verloren gaan.",
    },
    solution: [
      {
        title: "Vijf slimme vragenlijstjes voor vijf soorten aanvragen",
        body:
          "Voor elke dienst van Pink Elephant maakten we een eigen slim vragenlijstje. De ene berekent meteen een prijs voor licenties, de andere een prijs voor IT-hulp aan de hand van een paar vragen over de teamgrootte. Daarnaast kun je je aanmelden voor een training, een online cursus uitproberen en is er een slim contactformulier. Elke aanvraag komt meteen in hun klantsysteem terecht, plus een appje op de telefoon van de juiste persoon.",
      },
      {
        title: "Een vaste opzet per dienst, die ze zelf kunnen invullen",
        body:
          "We maakten een vaste, herhaalbare opzet voor elke dienst: steeds dezelfde opbouw van het probleem, de aanpak, klantvoorbeelden, veelgestelde vragen en het bijbehorende vragenlijstje. Het team van Pink Elephant zet nieuwe diensten en voorbeelden nu zelf online in dezelfde stijl, zonder iemand technisch te hoeven bellen. Wat vroeger een rekening voor extra werk opleverde, is nu een gewoon klusje.",
      },
      {
        title: "Van een 42 naar een 99 bij Google, zonder het ontwerp op te offeren",
        body:
          "Met de overstap naar onze techniek kregen we snellere bouwstenen onder de motorkap: vlottere techniek, lichtere afbeeldingen en pagina's die slim laden. Het resultaat is een rapportcijfer van Google dat overal de 99 of 100 raakt, terwijl de site er juist mooier uitziet dan eerst.",
      },
      {
        title: "Verhuizing met 744 links netjes opgevangen en goed in de gaten gehouden",
        body:
          "Van de oude webadressen naar de nieuwe richtten we 744 doorverwijzingen in, zodat elke oude link automatisch op de juiste nieuwe pagina uitkomt. We testten alles vooraf en hielden tijdens en na de verhuizing scherp in de gaten of er pagina's dreigden weg te vallen in Google, zodat we meteen konden bijsturen voordat een plek in de zoekresultaten verloren ging.",
      },
      {
        title: "Q schrijft mee op basis van wat mensen in Google zoeken",
        body:
          "Q, onze assistent in Forester OS, kijkt steeds naar waar mensen in Google op zoeken en stelt voor welke pagina's nog tekst missen, welke vragen onbeantwoord blijven en welke onderwerpen kansen bieden om hoger te komen. Het team van Pink Elephant krijgt die tips in gewone taal en kan ze met één klik laten uitwerken tot een eerste opzet.",
      },
    ],
    psiComparison: [
      { label: "Prestaties", before: 42, after: 99 },
      { label: "Toegankelijkheid", before: 75, after: 100 },
      { label: "Praktische tips", before: 77, after: 100 },
      { label: "SEO", before: 92, after: 92 },
    ],
    results: [
      { value: "5", label: "Slimme vragenlijstjes actief", descriptor: "elke aanvraag komt bij de juiste persoon en in hun klantsysteem" },
      { value: "744", label: "Oude links opgevangen", descriptor: "verhuisd zonder bezoekers te verliezen" },
      { value: "Zelfbeheer", label: "Het team aan zet", descriptor: "nieuwe pagina's en voorbeelden online zonder techneut" },
      { value: "+57", label: "Punten erbij van Google", descriptor: "van een 42 naar een 99 op de telefoon" },
    ],
  },
  {
    slug: "nordflame",
    client: "NordFlame",
    sector: "Premium verwarming",
    location: "Online",
    headlineLead: "Een chique kachelsite met",
    headlineHighlight: "twee handige hulpjes.",
    intro:
      "NordFlame zet luxe pelletkachels en het slimme Aurora-systeem op de kaart in Nederland, in de aanloop naar de nieuwe stookregels van Ecodesign 2027. We bouwden hun hele site, met een eigen pagina voor elk van de zes modellen, een hulpje dat checkt of je recht hebt op subsidie als je je oude kachel vervangt, en een hulpje voor mensen die nog rondkijken. Heb je al een warmtepomp, dan rekent het Aurora-systeem daar meteen op mee.",
    pillars: ["6 modellen", "Subsidie-check", "Combineert met je warmtepomp"],
    features: [
      { label: "Zes modellen, elk een eigen pagina", body: "Voor elk model een eigen pagina die leest als een mooi tijdschrift, met de gegevens en sfeervolle video's, in plaats van een saai lijstje." },
      { label: "Subsidie-check voor de nieuwe regels", body: "Een slim vragenlijstje dat in een paar vragen bepaalt of je recht hebt op subsidie en welk model bij jouw huis past, alvast klaar voor de nieuwe regels van 2027." },
      { label: "Combineert met je warmtepomp", body: "Heb je al een warmtepomp of overweeg je er een, dan rekent het slimme model daar automatisch op mee en wordt het meteen aangeraden." },
    ],
    img: "/images/clients/nordflame-hero.png",
    imgAlt: "NordFlame premium pelletkachel-platform",
    imgPosition: "left center",
    videoSrc: "/videos/clients/nordflame-hero.mp4",
    logo: "/images/clients/nordflame.png",
    liveUrl: "https://www.nordflame.nl",
    liveLabel: "nordflame.nl",
    metaTitle: "Case NordFlame: premium kachelplatform met scan-tools | Webgrowth",
    metaDescription:
      "Hoe we voor NordFlame een premium platform bouwden met zes modellen, een Vervangingsscan met Ecodesign 2027-check en de Aurora-combinatie met warmtepompen.",
    fieldLogSlug: "vervangingsscan-quickscan-nordflame",
    challenge: {
      title: "Chic overkomen én twee heel verschillende bezoekers helpen",
      body:
        "NordFlame wilde in Nederland niet de goedkoopste zijn, maar juist een verhaal vertellen over Scandinavisch design, kwaliteit en bewust kiezen voor warmte. De kunst was om dat luxe gevoel ook online over te brengen. En tegelijk moest de site twee heel verschillende bezoekers helpen: iemand die rustig de modellen wil vergelijken, en iemand die zijn oude kachel wil vervangen en wil weten of dat binnen de nieuwe regels van 2027 past en subsidie oplevert. Eén site dus, voor twee soorten bezoekers, zonder in te leveren op het ontwerp.",
    },
    solution: [
      {
        title: "Pagina's die lezen als een mooi tijdschrift",
        body:
          "Voor elk van de zes modellen maakten we een eigen pagina, met de gegevens, een mooi verhaal over wat dat model bijzonder maakt, video's en hoeveel warmte het geeft. De pagina's lezen als een tijdschrift in plaats van een saai lijstje, precies bij het luxe gevoel dat NordFlame wil uitstralen vanaf het eerste moment.",
      },
      {
        title: "Subsidie-check voor wie zijn oude kachel vervangt",
        body:
          "We maakten een slim vragenlijstje speciaal voor mensen die hun oude kachel willen vervangen. In vier of vijf vragen ziet de check of je recht hebt op subsidie volgens de nieuwe regels van 2027, en welk NordFlame-model het beste bij je huis past. Je krijgt het overzicht meteen in je mailbox, en NordFlame krijgt jouw gegevens netjes binnen, klaar om je verder te helpen.",
      },
      {
        title: "Een hulpje voor wie nog rondkijkt",
        body:
          "Voor mensen die nog vroeg in hun zoektocht zitten, draait een tweede, lichter vragenlijstje: een paar vragen over je woning, hoe groot die is en hoe je nu stookt, en je krijgt meteen een persoonlijk advies welk model en welk vermogen bij je past. Ook deze gegevens komen netjes binnen bij NordFlame, zodat ze je gericht verder kunnen helpen.",
      },
      {
        title: "Aurora rekent direct mee met je warmtepomp",
        body:
          "Het pronkstuk Aurora werkt samen met een warmtepomp. Het vragenlijstje houdt daar rekening mee: geef je aan dat je al een warmtepomp hebt of er een overweegt, dan past de berekening zich aan en wordt Aurora meteen aangeraden in plaats van een gewone pelletkachel. Eén hulpje, alle situaties.",
      },
      {
        title: "Bezoekers tellen zonder cookie-banner",
        body:
          "Voor het luxe en privacyvriendelijke imago dat NordFlame wilde, kozen we voor een manier van bezoekers tellen die geen cookie-banner nodig heeft en geen persoonlijke gegevens verzamelt. Dat houdt de site licht en netjes. De waardevolle aanvragen uit de vragenlijstjes komen toch al netjes binnen, dus voor de verkoop verandert er niets.",
      },
    ],
    results: [
      { value: "6", label: "Modellen online", descriptor: "elk met eigen pagina, video en gegevens" },
      { value: "2", label: "Slimme hulpjes", descriptor: "een subsidie-check en een hulpje voor wie rondkijkt" },
      { value: "Aurora", label: "Slim combineren", descriptor: "rekent direct mee met je warmtepomp" },
      { value: "Privacy", label: "Tellen zonder cookie-banner", descriptor: "snellere site, geen vervelende melding" },
    ],
  },
  {
    slug: "adalace",
    client: "Adalace",
    sector: "Compliance-software",
    location: "Vastgoedbeheer",
    headlineLead: "Een scan die van je adres",
    headlineHighlight: "meteen een helder advies maakt.",
    intro:
      "Adalace helpt vastgoedbeheerders en scholen om hun keuringen en certificaten op orde te krijgen. Voor hen maakten we de Quickscan: een slim vragenlijstje waarbij je alleen je adres invult. De scan haalt dan zelf de gegevens van het gebouw op uit een openbaar bestand van de overheid, stelt nog een paar slimme vragen, en geeft je een rapport op maat. Jij vult bijna niks in, de scan doet het werk.",
    pillars: ["Alleen je adres invullen", "Gegevens van de overheid", "Rapport op maat"],
    features: [
      { label: "Een paar simpele vragen", body: "Je adres, waar het gebouw voor wordt gebruikt en een paar vervolgvragen. Korte vragen, een duidelijke uitkomst, en je raakt niet halverwege het formulier moe." },
      { label: "De overheid weet het al", body: "Het bouwjaar, de oppervlakte en het gebruik van het pand komen automatisch uit een openbaar overheidsbestand, dus die hoef je niet zelf op te zoeken." },
      { label: "Een rapport op maat", body: "Aan het eind krijg je een net rapport met precies de keuringen die voor dit ene gebouw verplicht zijn." },
    ],
    img: "/images/clients/adalace-hero.jpg",
    imgAlt: "Schoolgebouw met veilige leeromgeving, beheerd via Adalace",
    imgPosition: "center 65%",
    logo: "/images/clients/adalace.png",
    liveUrl: "https://adalace.nl",
    liveLabel: "adalace.nl",
    metaTitle: "Case Adalace: Quickscan-wizard voor vastgoed-compliance | Webgrowth",
    metaDescription:
      "Hoe we voor Adalace de Quickscan bouwden: een wizard met BAG-koppeling en een PDF-rapport op maat voor vastgoedbeheerders en scholen.",
    fieldLogSlug: "bag-integratie-quickscan-adalace",
    challenge: {
      title: "Eerst een hoop vragen invullen, voordat er ook maar iets duidelijk werd",
      body:
        "Het grootste obstakel bij Adalace was tijd. Voordat een adviseur iets kon zeggen over de verplichte keuringen van een gebouw, moest een klant eerst een rij omslachtige vragen beantwoorden. De wens was om dat hele gedoe vooraf te laten verdwijnen: je vult alleen je adres in, en de scan vraagt zelf slim door over wat ze nog niet weet. Zo is het voor de bezoeker veel minder werk, en houdt de adviseur er een aanvraag aan over waar hij meteen mee aan de slag kan.",
    },
    solution: [
      {
        title: "Een vragenlijstje dat zich aanpast",
        body:
          "De Quickscan is een slim vragenlijstje dat meedenkt: het laat alleen de vragen zien die er voor jouw gebouw toe doen. Is het bouwjaar of de oppervlakte al bekend, dan slaat de scan die vraag gewoon over. Daardoor stel je gemiddeld de helft van de vragen die een gewoon formulier zou stellen, en ben je snel klaar.",
      },
      {
        title: "Je adres invullen is genoeg",
        body:
          "Zodra je je adres invult, haalt de scan de gegevens van het gebouw op uit een openbaar overheidsbestand: het bouwjaar, de oppervlakte, het type pand en waar het voor wordt gebruikt. Dat hoef je dus niet zelf op te zoeken. Je beantwoordt alleen nog wat de overheid niet weet over jouw situatie.",
      },
      {
        title: "Een rapport op maat na afloop",
        body:
          "Na de scan krijg je meteen een net rapport dat je kunt bewaren of printen. De adviseurs van Adalace gebruiken datzelfde rapport als startpunt voor een gesprek, zodat ze al weten waar het over gaat in plaats van bij nul te beginnen.",
      },
      {
        title: "Mails komen van Edwin zelf",
        body:
          "De mails met je rapport komen van het eigen adres van Edwin, de adviseur van Adalace. Geen no-reply of een algemene info-mailbox waar je antwoord in een zwart gat verdwijnt, maar een echt adres waar je gewoon op kunt reageren als je nog een vraag hebt.",
      },
    ],
    results: [
      { value: "1 veld", label: "Voor de bezoeker", descriptor: "alleen je adres invullen, de scan doet de rest" },
      { value: "Vanzelf", label: "Gegevens van de overheid", descriptor: "bouwjaar en oppervlakte komen er automatisch bij" },
      { value: "Op maat", label: "Een rapport als pdf", descriptor: "meteen bij de bezoeker én bij de adviseur" },
      { value: "Eigen mail", label: "Persoonlijk antwoorden", descriptor: "mails komen van Edwin zelf, niet van een no-reply" },
    ],
  },
  {
    slug: "de-samenleesclub",
    client: "De Samenleesclub",
    sector: "Cultuur & community",
    location: "Heel Nederland",
    headlineLead: "Een leesclub-site die",
    headlineHighlight: "een leesplek bij jou in de buurt vindt.",
    intro:
      "De Samenleesclub brengt door heel het land mensen bij elkaar door samen te lezen, onder begeleiding. Voor hen bouwden we een site met een kaart waarop je leesplekken in heel Nederland ziet liggen, een manier om je per bijeenkomst aan te melden, en een eigen pagina per plaats zodat je via Google meteen op de juiste plek terechtkomt.",
    pillars: ["Kaart met leesplekken", "Aanmelden per bijeenkomst", "Per plaats vindbaar in Google"],
    features: [
      { label: "Kaart met leesplekken", body: "Een kaart met alle leesplekken in Nederland, per regio bij elkaar en met één klik door naar de pagina van die plek." },
      { label: "Aanmelden per bijeenkomst", body: "Je meldt je meteen aan voor een bepaalde bijeenkomst, de begeleider ter plekke krijgt een melding en de aanmelding staat netjes bij de centrale organisatie." },
      { label: "Per plaats vindbaar in Google", body: "Elke plek heeft een eigen pagina met de plaatsnaam erin, zodat iemand die 'samenleesclub Breda' zoekt meteen op de juiste pagina uitkomt." },
    ],
    img: "/images/clients/samenleesclub-hero.jpg",
    imgAlt: "Mensen die samen lezen tijdens een sessie van De Samenleesclub",
    imgPosition: "center 30%",
    logo: "/images/clients/samenleesclub.png",
    liveUrl: "https://desamenleesclub.nl",
    liveLabel: "desamenleesclub.nl",
    metaTitle: "Case De Samenleesclub: site met locatiekaart en aanmeldflow | Webgrowth",
    metaDescription:
      "Hoe we voor De Samenleesclub een site bouwden met een interactieve Leaflet-kaart, aanmeldflow per sessie en SEO-templates per locatie.",
    challenge: {
      title: "Een landelijke beweging die ook lokaal te vinden én te boeken moest zijn",
      body:
        "De Samenleesclub heeft tientallen leesplekken door heel Nederland. De kunst was om iedereen, waar hij ook woont, meteen de leesplek bij hem in de buurt te laten vinden, zich makkelijk te laten aanmelden voor een bepaalde bijeenkomst op een bepaalde dag, en tegelijk goed vindbaar te zijn in Google. Iemand die 'samenleesclub Breda' zoekt, moet meteen op de juiste pagina komen en niet op een algemene startpagina. Daarbij wilden de begeleiders ter plekke wel zelf zicht houden op de aanmeldingen in hun eigen regio, zonder dat de centrale organisatie het overzicht kwijtraakte.",
    },
    solution: [
      {
        title: "Een kaart met alle leesplekken op de homepage",
        body:
          "We maakten voor elke leesplek een eigen pagina en zetten ze allemaal op een kaart op de homepage. Je ziet meteen alle plekken bij jou in de buurt liggen, en met één klik ga je door naar de pagina van die plek, met de contactpersoon, de eerstvolgende bijeenkomsten en wat je daar kunt verwachten.",
      },
      {
        title: "Aanmelden per bijeenkomst, met bericht naar twee kanten",
        body:
          "Voor elke bijeenkomst op elke plek maakten we een slim aanmeldformulier dat je netjes langs de plek, de datum, je gegevens en een eventuele opmerking leidt. Je aanmelding komt meteen bij de begeleider van die plek terecht én bij de centrale organisatie. Zo houdt iedereen ter plekke zicht op zijn eigen groep, terwijl het hoofdkantoor het totaalplaatje ziet.",
      },
      {
        title: "Elke plaats meteen vindbaar in Google",
        body:
          "Elke leesplek heeft een eigen pagina die is afgestemd op de plaatsnaam, zodat hij goed vindbaar is in Google. Een nieuwe leesplek toevoegen kost daardoor vijf minuten in plaats van een heel SEO-project: gewoon invullen en publiceren, de rest gaat vanzelf goed.",
      },
      {
        title: "Bevestigingsmails voor zowel de deelnemer als de begeleider",
        body:
          "Meld je je aan, dan krijg je meteen een persoonlijke bevestiging in je mailbox met de juiste informatie over de bijeenkomst, het adres en wat je kunt verwachten. De begeleider krijgt tegelijk zijn eigen overzichtje met de aanmeldingen voor die week. Niks meer met de hand overtikken, geen aanmeldingen die zoekraken.",
      },
    ],
    results: [
      { value: "Landelijk", label: "Kaart met leesplekken", descriptor: "alle plekken meteen te zien op de homepage" },
      { value: "Per sessie", label: "Aanmelden per bijeenkomst", descriptor: "meteen naar de begeleider ter plekke én naar de centrale organisatie" },
      { value: "Lokaal", label: "Vindbaar in Google", descriptor: "elke plaats heeft een eigen vindbare pagina" },
      { value: "5 min", label: "Nieuwe leesplek toevoegen", descriptor: "geen SEO-project, gewoon invullen en publiceren" },
    ],
  },
];

export function caseBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
