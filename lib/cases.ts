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
    headlineLead: "Een wellness-platform",
    headlineHighlight: "van gratis app tot retraite.",
    intro:
      "Mind Movement is de mentale-wellness-praktijk van Gil Sol, met een eigen methode die Calmfulness heet. We bouwden voor hen een compleet digitaal platform in drie lagen die op dezelfde data draaien: een mobiele app, een nieuwe website op mindmovementapp.nl en een eigen CMS waarmee Gil alles zelf beheert. Samen vormen ze één commitment-ladder die een bezoeker van een gratis app via groepssessies en 1-op-1-begeleiding tot een meerdaagse retraite begeleidt, zonder dat het ooit pusherig aanvoelt.",
    pillars: ["App, site én CMS", "Eén Firebase als bron", "Drie boekbare producten"],
    features: [
      { label: "App, site en CMS op één Firebase", body: "De mobiele app, de Next.js-site en het eigen CMS delen één Firebase-project. Eén bron van waarheid voor accounts, content en boekingen, dus een prijs of programma wijzig je één keer en het klopt overal." },
      { label: "Eén commitment-ladder", body: "Van een gratis app met dagelijkse oefeningen, via groepssessies van €19,99 en 1-op-1-begeleiding van €149, tot meerdaagse retraites. Elke tree is een echt product met eigen boeking en betaling." },
      { label: "Gil beheert alles zelf", body: "Via het custom CMS zet Gil retraite-prijzen en -edities klaar, genereert sessie-agenda's weken vooruit en beheert de app-content (Journey, Practices, Programs) zonder dat er een developer aan te pas komt." },
    ],
    img: "/images/clients/mind-movement-hero.webp",
    imgAlt: "Deelnemers tijdens een Mind Movement-retraite in Azië",
    imgPosition: "center",
    logo: "/images/clients/mind-movement.png",
    liveUrl: "https://mindmovementapp.nl",
    liveLabel: "mindmovementapp.nl",
    metaTitle: "Case Mind Movement: app, site en CMS op één platform | Webgrowth",
    metaDescription:
      "Hoe we voor Mind Movement een compleet platform bouwden: een mobiele app, een nieuwe website en een eigen CMS op één Firebase, samen één commitment-ladder van gratis app tot retraite.",
    fieldLogSlug: "commitment-ladder-mind-movement",
    challenge: {
      title: "Een aanbod met vier niveaus van toewijding dat niet in één website paste",
      body:
        "Mind Movement verkoopt geen los product, maar een reis. Iemand begint vaak nieuwsgierig met een ademhalingsoefening en is pas veel later toe aan een groepssessie, persoonlijke begeleiding of een meerdaagse retraite. Een klassieke website met één call-to-action paste daar niet bij: te pusherig voor een merk dat juist rust uitstraalt, en te plat voor een aanbod dat over vier niveaus loopt. Daar kwam bij dat content zoals oefeningen, journeys en programma's op meerdere plekken tegelijk moest blijven kloppen, in de app én op de site. Gil wilde één samenhangend systeem dat de hele reis ondersteunt en dat hij bovendien zelf kon beheren, in plaats van een bureau dat hij voor elke prijswijziging moet bellen.",
    },
    solution: [
      {
        title: "Eén gedeelde Firebase voor app, site en CMS",
        body:
          "We bouwden de drie oppervlakken (de mobiele app, de website en het CMS) op één gedeeld Firebase-project. Accounts, content en boekingen leven daardoor op één plek: log je in de app in, dan ben je ook op de site ingelogd, en content die Gil in het CMS aanpast verschijnt zowel op de site als in de app. Geen synchronisatie tussen losse systemen, geen data die uit elkaar loopt.",
      },
      {
        title: "De app als gratis instap met dagelijkse Journey en Practices",
        body:
          "De onderste tree van de ladder is de app: gratis te proberen en €9,99 per maand voor het volledige aanbod. Daarin zit de Mind Journey met vier programma's van 21 dagen (van 'Meer rust in je hoofd' tot 'Mijn beste versie'), dagelijkse Practices als NSDR, ademwerk, meditatie en beweging, en een Library met kortere trajecten rond slaap en angst. Zo bouwt iemand eerst een dagelijkse gewoonte en vertrouwen op, voordat er ook maar één keer een mens aan te pas komt.",
      },
      {
        title: "Drie boekbare producten op de site, elk een echte flow",
        body:
          "Boven de app staan drie producten die je rechtstreeks op de site boekt. Voor de Calmfulness-sessies (€19,99) is er een agenda met aankomende groepssessies, directe inschrijving en de mogelijkheid om tot 48 uur van tevoren te ruilen. Voor 1-op-1-begeleiding (€149) kiest de bezoeker een tijdslot in een kalender die de echte beschikbaarheid van Gil kent, met automatisch een videogesprek erbij. En voor de meerdaagse retraites loopt een boeking met aanbetaling via Mollie, zodat een plek direct vaststaat. Elke flow stuurt z'n eigen bevestigings- en herinneringsmails, volledig in de huisstijl.",
      },
      {
        title: "Een eigen CMS waarmee Gil de hele ladder beheert",
        body:
          "In plaats van een stapel losse tools (een agenda-plugin, een webshop, een los e-learningpakket) bouwden we één CMS op maat. Gil zet daarin retraite-prijzen en -edities klaar, met een vroegboek-window dat zichzelf op de juiste datum omschakelt, genereert sessie-agenda's voor weken vooruit, ziet de inschrijvingen binnenkomen en beheert de app-content. Omdat het CMS op dezelfde Firebase werkt als de app en de site, is één wijziging meteen overal correct.",
      },
      {
        title: "Member-portal en automatische herinneringen",
        body:
          "Ingelogde deelnemers hebben een eigen dashboard met hun boekingen, profiel en facturen, met dezelfde login als de app. Betalingen lopen via Mollie, transactionele mails via Postmark, en een automatische taak stuurt deelnemers een herinnering voordat hun sessie begint. De stijl van de site is rechtstreeks afgeleid van de app, zodat de twee als één wereld aanvoelen en de overgang van app naar site nergens wringt.",
      },
    ],
    results: [
      { value: "3", label: "Oppervlakken op één Firebase", descriptor: "app, website en CMS delen dezelfde data" },
      { value: "4", label: "Niveaus op de ladder", descriptor: "van gratis app tot meerdaagse retraite" },
      { value: "3", label: "Boekbare producten", descriptor: "sessie, 1-op-1 en retraite, elk met eigen flow" },
      { value: "Zelfbeheer", label: "Gil aan de knoppen", descriptor: "prijzen, agenda's en app-content zonder developer" },
    ],
  },
  {
    slug: "mol-logistics",
    client: "MOL Logistics",
    sector: "Logistiek & transport",
    location: "Tilburg",
    headlineLead: "Een corporate logistiek-site",
    headlineHighlight: "die elke aanvraag goed laat landen.",
    intro:
      "MOL Logistics is een internationale forwarder met vestigingen door heel Europa. Voor hun Nederlandse organisatie bouwden we de corporate site opnieuw, met een eigen volumecalculator voor transport-aanvragen, een vacature-flow met content-blocks per rol en een mu-plugin onder de motorkap die de site razendsnel houdt. Aanvragen, sollicitaties en contact landen elk bij het juiste team, in plaats van in één algemene mailbox.",
    pillars: ["Volumecalculator", "HubSpot + Klaviyo", "Performance-tuning"],
    features: [
      { label: "Volumecalculator voor transport", body: "Bezoekers stellen zelf hun zending samen met traject, lading en eisen, en de aanvraag landt direct bij de juiste accountmanager mét alle context." },
      { label: "HubSpot + Klaviyo gekoppeld", body: "Elke aanvraag synct automatisch naar HubSpot (CRM) en Klaviyo (e-mailmarketing), zodat sales en marketing met dezelfde data werken zonder handmatig overpennen." },
      { label: "Performance-mu-plugin", body: "Onder de motorkap optimaliseert een eigen plug-in fonts, scripts, fetchpriority en assets, zodat de site snel blijft ondanks de zware Breakdance-builder." },
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
      title: "Een corporate site die over de jaren versplinterd was, met aanvragen in één grote bak",
      body:
        "MOL Logistics had een site die over de jaren was uitgegroeid maar inconsistent was geworden in styling, formulier-flows en SEO. Voor elk type aanvraag (transport, warehousing, projectlogistiek) bestond een ander formulier en weer een andere mailroute, vacature-pagina's stonden los van de hoofdsite en de performance liet te wensen over door de zware Breakdance-builder. MOL wilde tegelijk wel op WordPress + Breakdance blijven vanwege hun bestaande beheerprocessen, maar dan met de kwaliteit, snelheid en routing-discipline van een modern platform.",
    },
    solution: [
      {
        title: "Volumecalculator als eigen Lead Engine",
        body:
          "We bouwden een interactieve volumecalculator als Lead Engine waarin bezoekers het traject (laden + lossen), de lading en de bijbehorende eisen kunnen samenstellen. De aanvraag landt direct in de mailbox van de juiste accountmanager, met alle context die we al hebben uitgevraagd. Aan de achterkant is alles CMS-bestuurbaar via ACF-velden, zodat MOL zelf nieuwe transportoplossingen of varianten kan toevoegen zonder dat er een developer aan te pas hoeft te komen.",
      },
      {
        title: "Vacature-flow met eigen body-block structuur",
        body:
          "Elke vacature heeft een eigen detailpagina met dezelfde herkenbare structuur: hero, body, split-content, klantlogo's, cultuur-blok, sollicitatieproces, mid-CTA, gerelateerde vacatures en een footer-CTA. De recruiters voegen nieuwe rollen toe via een gestandaardiseerd set ACF-velden, en het Breakdance-template doet de rest. Wat vroeger een ontwerper kostte is nu een handeling van een halfuur.",
      },
      {
        title: "Form-handler met dynamische mail-routing",
        body:
          "Elke aanvraag-flow op de site heeft een eigen mail-routing: transport-aanvragen gaan naar de juiste accountmanager, warehousing naar het magazijn-team, vacature-sollicitaties naar HR en algemene contact-mails naar de juiste vestiging. Eén centrale form-handler regelt al die routing via filter-hooks, dus er is geen losse 'info@'-mailbox meer waar alles in een grote bak verdwijnt.",
      },
      {
        title: "HubSpot en Klaviyo gekoppeld aan elke aanvraag",
        body:
          "Naast de directe mail-routing synct elke aanvraag automatisch door naar HubSpot voor sales en Klaviyo voor marketing-opvolging, beide via integraties met externe tools die we voor MOL hebben opgezet. Een lead die de volumecalculator invult komt zo binnen een paar seconden in beide systemen binnen met dezelfde context, zodat sales en marketing nooit meer met losse, ongesynchroniseerde lijsten zitten en marketing-automations in Klaviyo direct kunnen starten waar de site-aanvraag eindigt.",
      },
      {
        title: "Performance-mu-plugin onder de motorkap",
        body:
          "Voor een Breakdance-site is je mu-plugin de stille held van je PageSpeed-score. Voor MOL draaiden we een eigen mol-perf.php die Google Fonts subsette, third-party JS deferde, jquery-migrate dequeue'de en fetchpriority + alt op de juiste plekken zette. Het resultaat is een PSI-score die opmerkelijk goed is voor een Breakdance-site, zonder dat we content of layout-vrijheid hoefden in te leveren.",
      },
      {
        title: "Section-alignment voor visuele rust over de hele site",
        body:
          "Breakdance heeft een eigenaardigheid waarbij de inner-container van elke sectie een eigen max-width kan hebben, waardoor decoratieve elementen na een paar releases niet meer netjes uitlijnen met de copy. Voor MOL trokken we de max-width gelijk op 1512 pixels met een clamp-padding, zodat de site visueel rustig blijft van bovenaan tot helemaal beneden, op zowel desktop als mobiel.",
      },
    ],
    results: [
      { value: "Per aanvraag", label: "Routing naar het juiste team", descriptor: "geen algemene info-mailbox meer" },
      { value: "2 systemen", label: "HubSpot + Klaviyo gesynct", descriptor: "elke lead automatisch in CRM én marketing-tool" },
      { value: "ACF", label: "CMS-bestuurbaar", descriptor: "vacatures en transportoplossingen door MOL zelf beheerd" },
      { value: "mu-plugin", label: "Performance-tuning", descriptor: "snelle Breakdance-site via mol-perf.php" },
    ],
  },
  {
    slug: "balude",
    client: "Balude",
    sector: "IT-dienstverlening & AI",
    location: "Nederland",
    headlineLead: "Een AI-first IT-partner",
    headlineHighlight: "met een eigen betaalde online training.",
    intro:
      "Balude is een AI-first IT-dienstverlener die bedrijven helpt met AI-automatisering, software op maat, cloud op Europese servers en consultancy rond compliance. We bouwden voor hen balude.com in onze eigen dark-stijl en koppelden er meteen een primeur aan vast: de eerste Sales Engine in Forester OS. Bezoekers kopen daar de Balude AI-training online af, krijgen direct toegang via een magic-link, doen de eindtoets en ontvangen automatisch hun gepersonaliseerde certificaat per mail.",
    pillars: ["Sales Engine primeur", "Mollie + Gemini + certificaat", "Vier diensten op één site"],
    features: [
      { label: "Eerste Sales Engine in Forester OS", body: "Balude is de allereerste klant op het nieuwe Sales Engine pattern. Een betaald digitaal product met checkout, levering, toets en certificaat zonder dat er ook maar één handmatige stap tussen zit." },
      { label: "Gemini beoordeelt open vragen", body: "Open antwoorden in de eindtoets worden door Gemini 2.5 Flash gelezen en gescoord aan de hand van een rubric. Gesloten vragen rekenen we deterministisch af, scores zijn niet client-side te manipuleren." },
      { label: "Mollie + magic-link + PDF op maat", body: "Bezoekers rekenen af via iDEAL of kaart, krijgen een magic-link in hun mailbox, doen de toets en ontvangen een persoonlijk A4 PDF-certificaat met uniek nummer in Balude's huisstijl." },
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
      title: "Een nieuwe IT-propositie scherp neerzetten, en er meteen een betaald product op laten draaien",
      body:
        "Balude bestaat uit Remco met een vast netwerk van specialisten en bouwt een AI-first IT-praktijk op. De propositie is breed: AI-agents en automatisering, software op maat (waaronder hun eigen PractiPlan), cloud op Europese servers in plaats van standaard Microsoft 365 en consultancy rond ISO 27001 en AI-roadmaps. Tegelijk wilde Remco direct vanaf de live-gang een betaalde AI-training kunnen verkopen als digitaal product, inclusief eindtoets en certificaat, zonder dat de afhandeling daarvan dagen handwerk kostte per cursist. Eén site, vier diensten die elk hun eigen verhaal verdienen, plus een betaalde leerlijn die volledig zelfstandig moet draaien.",
    },
    solution: [
      {
        title: "Een dark, AI-first site die vier diensten elk hun eigen pagina geeft",
        body:
          "We bouwden balude.com in een dark theme met paarse en cyaan accenten, conform de Balude-huisstijl. Elke kerndienst (AI-automatisering, Software op maat, Cloud Europa-first en Consultancy) kreeg een eigen landingspagina met dezelfde herkenbare structuur: hero met glass card, features-grid, klantcases, USP-video en formulier. De homepage geleidt bezoekers per intent naar de juiste dienst in plaats van alles op één hoop te gooien.",
      },
      {
        title: "Yankee Free pakket: het cloud-verhaal naast Microsoft 365",
        body:
          "Op de cloud-pagina staat naast het reguliere Microsoft 365-verhaal het Yankee Free pakket: een Europees alternatief met Proton, OVH, Nextcloud en Tuta voor klanten die hun data bewust niet bij Amerikaanse hyperscalers willen onderbrengen. Een US/EU-toggle laat bezoekers direct de prijzen en featurevergelijking zien per stack, zodat de keuze concreet wordt in plaats van abstract.",
      },
      {
        title: "Sales Engine: een nieuw concept in Forester OS, eerst getest op Balude",
        body:
          "De Balude AI-training is de eerste implementatie van een gloednieuw concept in Forester OS: de Sales Engine. Waar onze Lead Engines kwalificeren en routeren, verkoopt een Sales Engine een digitaal product end-to-end. Bezoekers rekenen af, krijgen direct toegang, doen de eindtoets en ontvangen automatisch hun certificaat. De architectuur is generiek opgezet, dus toekomstige klanten die online een training, examen of digitaal product willen verkopen kunnen op dezelfde rails meeliften.",
      },
      {
        title: "Mollie-checkout met magic-link toegang en automatische facturen",
        body:
          "Cursisten rekenen af via Mollie (iDEAL, kaart, bancontact) en krijgen na betaling direct een magic-link in hun mailbox waarmee ze de training kunnen starten zonder eerst een account aan te maken. De tier-prijzen lopen door op aantallen: één tot 25 cursisten 79 euro per persoon (intro 59 euro), 25 tot 99 cursisten 49 euro en honderd of meer 39 euro. Volumekortingen zonder dat Remco met een offerteflow hoeft te beginnen.",
      },
      {
        title: "Gemini beoordeelt open vragen, certificaten rollen automatisch uit",
        body:
          "De eindtoets bevat dertig vragen: gesloten vragen scoren we deterministisch, open vragen laten we Gemini 2.5 Flash beoordelen aan de hand van een gestructureerde rubric in JSON-output. De score komt server-side tot stand, dus client-side knoeien is uitgesloten. Bij een voldoende genereert het systeem een A4 landscape PDF-certificaat in Balude's huisstijl met een uniek volgnummer (BLD-YYYY-NNNN via een atomic counter) en stuurt dat direct als attachment naar de cursist via Postmark.",
      },
      {
        title: "Multi-tenant van dag één, zodat het patroon herbruikbaar is",
        body:
          "Hoewel Balude de eerste Sales Engine-klant is, hebben we het patroon meteen multi-tenant gebouwd. Mollie-keys staan per website-document in Firestore, branding (kleuren, lettertype, certificaat-template) is per engine instelbaar en het admin-dashboard kan meerdere Sales Engines naast elkaar beheren. De volgende klant die een betaalde training of digitaal product wil verkopen plugt in op hetzelfde systeem zonder dat we het opnieuw hoeven uit te vinden.",
      },
    ],
    results: [
      { value: "Eerste", label: "Sales Engine in Forester OS", descriptor: "primeur op het platform, multi-tenant opgezet" },
      { value: "End-to-end", label: "Geen handmatige stappen", descriptor: "betalen, toegang, toets, certificaat, mail" },
      { value: "Gemini", label: "Open-vraag beoordeling", descriptor: "server-side scoring, niet te manipuleren" },
      { value: "EU-first", label: "Cloud-alternatief", descriptor: "Yankee Free pakket naast Microsoft 365" },
    ],
    fieldLogSlug: "balude-ai-training-sales-engine",
  },
  {
    slug: "pink-elephant",
    client: "Pink Elephant",
    sector: "IT-consultancy & ITSM",
    location: "Vught",
    headlineLead: "Een ITSM-site die hoger scoort,",
    headlineHighlight: "sneller laadt en zelf leads vangt.",
    intro:
      "Pink Elephant is een internationale ITSM-consultancy met tientallen jaren ervaring in IT-support, trainingen en E-Learning. We hebben hun site opnieuw opgebouwd in Forester OS, vijf Lead Engines op maat gemaakt en 744 redirects ingericht voor de domein-migratie naar pinkelephant.co.uk. Onderweg hebben we van een trage WordPress-omgeving (Prestaties 42) een razendsnel platform gemaakt waar Google nu 99 voor geeft.",
    pillars: ["5 Lead Engines", "42 → 99 PageSpeed", "744 redirects"],
    features: [
      { label: "Vijf Lead Engines", body: "Technology QuickQuote, IT-Support QuickQuote, training-aanmelding, E-Learning demo en het slim contactformulier, elk met eigen routing en CRM-koppeling." },
      { label: "PageSpeed van 42 naar 99", body: "Snellere hosting, geoptimaliseerde assets en moderne web-tech onder de motorkap brachten de PSI-prestatie van 42 naar 99, met scores van 100 op toegankelijkheid en praktische tips." },
      { label: "744 redirects", body: "Alle oude URL's van pinkelephant.co.uk en pinkelephant.nl naar de nieuwe structuur, met bewaakte 200's en zonder traffic-verlies na de domein-switch." },
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
      title: "Een site die mooi was maar niet meer presteerde",
      body:
        "Pink Elephant heeft decennia ervaring in ITSM, IT-support, trainingen en E-Learning, met een dienstenpakket dat over de jaren is gegroeid. De bestaande site was alleen niet meegegroeid met die complexiteit: zwaar, traag, met gedateerde formulieren en losse landingspagina's. PageSpeed scoorde een magere 42 op mobiel, leads kwamen binnen via een mailadres in plaats van via een goede flow, en het marketing-team moest voor elke kleine aanpassing een developer bellen. Daarbovenop stond er ook nog een domein-migratie op stapel naar het internationale pinkelephant.co.uk, zonder dat de SEO-posities die in jaren waren opgebouwd verloren mochten gaan.",
    },
    solution: [
      {
        title: "Vijf Lead Engines voor vijf manieren waarop een aanvraag binnenkomt",
        body:
          "Voor elke kerndienst van Pink Elephant hebben we een eigen Lead Engine op maat gemaakt, gebouwd op de Lead Engine-module van Forester OS. De Technology QuickQuote rekent live door op basis van licenties, looptijd en day-rate. De IT-Support QuickQuote stelt slimme vragen over teamgrootte en complexiteit. Daarnaast draaien de training-inschrijving, de E-Learning demo-aanvraag en een slim contactformulier, allemaal met de aanvraag direct in het CRM en een WhatsApp-notificatie op de telefoon van de juiste accountmanager.",
      },
      {
        title: "Een module per dienst, in het CMS van Forester OS",
        body:
          "Met de eigen content-types van de Website-module hebben we een herhaalbaar template per dienst gebouwd: dezelfde structuur van probleem, aanpak, klantcases, FAQ en bijbehorende Lead Engine. Het marketing-team rolt nieuwe diensten en cases zelf uit in dezelfde stijl, zonder dat er een developer aan te pas hoeft te komen. Wat in andere systemen een meerwerk-factuur kostte, is hier een routine-handeling geworden.",
      },
      {
        title: "Van PageSpeed 42 naar 99 zonder concessies aan design",
        body:
          "Door de migratie naar Forester OS kregen we toegang tot moderne web-tech onder de motorkap: snellere hosting, geoptimaliseerde assets, server-side rendering en uitgekiend laden van afbeeldingen. Het resultaat is een PSI-score die op alle dimensies de 99 of 100 raakt, terwijl het visuele resultaat juist rijker is geworden dan op de oude site.",
      },
      {
        title: "Domein-migratie met 744 redirects en Search Console-monitoring",
        body:
          "Van de oude pinkelephant.co.uk en pinkelephant.nl naar de nieuwe structuur hebben we 744 redirects ingericht, gebouwd in een CSV, getest in staging en bewaakt rond de switch. Tijdens en na de domein-flip hielden we Search Console intensief in de gaten om te zien of er pagina's tussen wal en schip dreigden te vallen, zodat we direct konden bijschaven voordat een ranking-positie verloren ging.",
      },
      {
        title: "Q schrijft mee aan content op basis van Search Console-data",
        body:
          "Q, onze AI-assistent in Forester OS, kijkt continu naar wat Search Console laat zien en stelt voor welke pagina's nog content missen, welke zoekvragen onbeantwoord blijven en welke onderwerpen ranking-kansen bieden. Het marketing-team van Pink Elephant krijgt die suggesties in begrijpelijke taal aangeleverd en kan ze met één klik laten uitwerken tot een eerste concept.",
      },
    ],
    psiComparison: [
      { label: "Prestaties", before: 42, after: 99 },
      { label: "Toegankelijkheid", before: 75, after: 100 },
      { label: "Praktische tips", before: 77, after: 100 },
      { label: "SEO", before: 92, after: 92 },
    ],
    results: [
      { value: "5", label: "Lead Engines actief", descriptor: "elk met eigen routing en CRM-koppeling" },
      { value: "744", label: "Redirects bewaakt", descriptor: "domein-migratie zonder traffic-verlies" },
      { value: "Zelfbeheer", label: "Marketing-team aan zet", descriptor: "nieuwe pagina's en cases live zonder developer" },
      { value: "+57", label: "PageSpeed-punten", descriptor: "van Prestaties 42 naar 99 op mobiel" },
    ],
  },
  {
    slug: "nordflame",
    client: "NordFlame",
    sector: "Premium verwarming",
    location: "Online",
    headlineLead: "Een premium kachelplatform met",
    headlineHighlight: "twee scan-tools.",
    intro:
      "NordFlame zet premium pelletkachels en het hybride Aurora-systeem op de kaart in Nederland, met Ecodesign 2027 als context. We bouwden hun complete site in Forester OS met productpagina's voor zes modellen, een Vervangingsscan die toetst of bezoekers in aanmerking komen voor subsidie en een Quickscan voor mensen die nog aan het oriënteren zijn. Aurora rekent direct mee met de warmtepomp van de klant in de calculator.",
    pillars: ["6 modellen", "Vervangingsscan", "Aurora-combinatie"],
    features: [
      { label: "Zes modellen, eigen pagina's", body: "Voor elk model een eigen productpagina met magazine-stijl content, specs en filmische videoloops, in plaats van een dorre productlijst." },
      { label: "Vervangingsscan + Ecodesign 2027", body: "Een Lead Engine die in een paar vragen bepaalt of een bezoeker subsidie-recht heeft en welk model bij z'n woning past." },
      { label: "Aurora-combineerlogica", body: "Het hybride model rekent automatisch mee met een warmtepomp die de bezoeker al heeft of overweegt, en wordt dan actief voorgesteld." },
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
      title: "Premium positioneren én twee heel verschillende bezoekers bedienen",
      body:
        "NordFlame wilde van de Nederlandse markt-launch geen wedstrijd-in-prijzen maken, maar een verhaal over Scandinavisch design, kwaliteit en bewuste warmte-keuzes. De uitdaging was om die premium positionering ook online te laten landen, terwijl de site tegelijk twee heel verschillende type bezoekers moest bedienen: de georiënteerde koper die het verschil tussen modellen wil snappen, en de bewuste vervanger die wil weten of een pelletkachel past binnen Ecodesign 2027 én subsidie-recht oplevert. Eén site, twee invalshoeken, geen compromissen op design.",
    },
    solution: [
      {
        title: "Productpagina's die lezen als een magazine",
        body:
          "Voor elk van de zes modellen bouwden we een eigen productpagina in de Website-module van Forester OS, met specs, een verhalend stuk over wat dat model bijzonder maakt, productvideo's en de bijbehorende warmte-output. De pagina's lezen als magazine-content in plaats van een productlijst, wat past bij de premium positionering die NordFlame wilde uitstralen vanaf het eerste contact-moment.",
      },
      {
        title: "Vervangingsscan met Ecodesign 2027 en subsidie-logica",
        body:
          "We bouwden een Lead Engine specifiek voor mensen die hun oude stooksysteem willen vervangen. In vier of vijf vragen bepaalt de Vervangingsscan of een bezoeker in aanmerking komt voor de subsidieregeling rond Ecodesign 2027, plus welk NordFlame-model het beste past bij de woning. Het rapport komt direct in de mail van de bezoeker, en de lead met alle score-context landt in het CRM klaar voor opvolging.",
      },
      {
        title: "Quickscan voor oriënterende bezoekers",
        body:
          "Voor mensen die nog vroeg in hun reis zitten draait een tweede, lichtere Lead Engine: een paar vragen over woning-type, oppervlakte en huidig stooksysteem en de bezoeker krijgt direct een persoonlijk advies welk model en welk vermogen erbij past. Ook hier landt de lead in het CRM zodat sales een gerichte vervolgactie kan plannen in plaats van vanaf nul te beginnen.",
      },
      {
        title: "Aurora combineert direct met een warmtepomp",
        body:
          "NordFlame's vlaggenschip Aurora is een hybride model dat samenwerkt met een warmtepomp. In de Vervangingsscan weegt het systeem dat letterlijk mee: als een bezoeker aangeeft dat 'ie al een warmtepomp heeft of er één overweegt, dan past de berekening daarop aan en wordt Aurora actief voorgesteld in plaats van een puur-pellet-model. Eén calculator, alle scenarios.",
      },
      {
        title: "Fathom Analytics in plaats van Google Analytics",
        body:
          "Voor de premium positionering en het privacy-vriendelijke imago dat NordFlame wilde uitstralen, hebben we Fathom Analytics gekoppeld in plaats van Google Analytics. Een lichtere site, geen cookie-banner-frictie en privacy-by-default. De waardevolle conversie-data uit de Lead Engines landt sowieso in het CRM, dus voor verkoop maakt het niets uit.",
      },
    ],
    results: [
      { value: "6", label: "Modellen actief", descriptor: "elk met eigen pagina, video en specs" },
      { value: "2", label: "Lead Engines", descriptor: "Vervangingsscan en Quickscan" },
      { value: "Aurora", label: "Hybride logica", descriptor: "combineert direct met warmtepomp van de klant" },
      { value: "Privacy", label: "Fathom in plaats van GA", descriptor: "snellere site, geen cookie-banner-frictie" },
    ],
  },
  {
    slug: "adalace",
    client: "Adalace",
    sector: "Compliance-software",
    location: "Vastgoedbeheer",
    headlineLead: "Een Quickscan",
    headlineHighlight: "die compliance concreet maakt.",
    intro:
      "Adalace helpt vastgoedbeheerders en scholen om hun keuringen en certificaten op orde te krijgen. Voor hen ontwikkelden we de Quickscan: een wizard die op basis van het adres direct BAG-data van het pand ophaalt, een persoonlijke duurzaamheids- en compliance-scan uitvoert en een rapport-PDF op maat oplevert. Een bezoeker hoeft alleen z'n adres in te vullen, de rest doet onze logica.",
    pillars: ["5-stappen wizard", "BAG-koppeling", "PDF-rapport op maat"],
    features: [
      { label: "Vijf-stappen wizard", body: "Adres, functie, triggers, installaties, resultaat. Lichte vragen, concrete uitkomst, geen formulier-moeheid." },
      { label: "BAG en Kadaster", body: "Bouwjaar, oppervlakte en gebruiksdoel komen automatisch uit overheidsdata, dus geen onnodige vragen meer." },
      { label: "PDF op maat", body: "Aan het einde een persoonlijk rapport met de exacte verplichte lijst voor dit specifieke pand." },
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
      title: "Een intake-traject dat een potentiële klant kostte voordat er een advies lag",
      body:
        "Adalace's grootste obstakel was tijd. Een potentiële klant moest eerst een aantal omslachtige vragen beantwoorden voordat een adviseur überhaupt iets kon zeggen over de verplichte keuringen voor zijn pand. De wens was om dat hele intake-proces voor de bezoeker te laten verdwijnen: één veld voor het adres, en de wizard zou intelligent uitvragen wat nog echt nodig is op basis van wat al automatisch over het pand bekend is. Zo verdwijnt de wrijving aan de voorkant en blijft er aan de adviseur-kant een lead over met scherpe context.",
    },
    solution: [
      {
        title: "Quickscan-wizard met dynamische vraag-volgorde",
        body:
          "De Quickscan is een Lead Engine waarbij de vraagstroom zich aanpast aan wat de bezoeker tot nu toe heeft beantwoord. Type pand, bouwjaar, oppervlakte, gebruiksdoel: pas als die data nog niet uit BAG kan worden afgeleid, vragen we het expliciet. Dat scheelt aan de voorkant gemiddeld de helft van de vragen die een traditioneel formulier zou stellen, en houdt de doorlooptijd voor de bezoeker laagdrempelig.",
      },
      {
        title: "BAG-koppeling voor adres naar pand-data",
        body:
          "Zodra de bezoeker zijn adres invult, koppelen we direct naar de BAG (Basisregistratie Adressen en Gebouwen). Bouwjaar, oppervlakte, pand-type en gebruiksdoel komen daarmee automatisch beschikbaar. De wizard slaat de bijbehorende vragen over, want het antwoord heeft 'ie al, en de bezoeker beantwoordt alleen wat de overheidsdata nog niet weet over zijn specifieke situatie.",
      },
      {
        title: "Rapport-PDF op maat na de scan",
        body:
          "Na de scan genereert het systeem een persoonlijk rapport in PDF-vorm dat de bezoeker direct ontvangt en kan downloaden. De adviseurs van Adalace gebruiken hetzelfde rapport als startpunt van een offerte-gesprek, zodat ze al met scherpe context aan tafel komen in plaats van vanaf nul te moeten beginnen.",
      },
      {
        title: "Bevestigingsmail vanuit een persoonlijk inbox-adres",
        body:
          "De bevestigings- en rapportmails worden verstuurd vanuit het persoonlijke adres van Edwin, de Adalace-adviseur. Geen 'noreply@adalace.nl' of een algemene 'info@'-mailbox waar antwoorden in een zwart gat verdwijnen, maar een echt persoonlijk inbox-adres waar de bezoeker direct op kan antwoorden als 'ie nog vragen heeft.",
      },
    ],
    results: [
      { value: "BAG", label: "Automatische pand-data", descriptor: "bouwjaar, oppervlakte en gebruiksdoel uit overheidsdata" },
      { value: "PDF", label: "Rapport op maat", descriptor: "direct bij de bezoeker én bij de adviseur" },
      { value: "1 veld", label: "Voor de bezoeker", descriptor: "adres invullen, de wizard doet de rest" },
      { value: "Inbox", label: "Persoonlijk antwoorden", descriptor: "mails komen vanuit Edwin's eigen adres" },
    ],
  },
  {
    slug: "de-samenleesclub",
    client: "De Samenleesclub",
    sector: "Cultuur & community",
    location: "Heel Nederland",
    headlineLead: "Een leesclub-site die",
    headlineHighlight: "leesplekken bij mensen brengt.",
    intro:
      "De Samenleesclub is een landelijk initiatief dat mensen via begeleide samenleessessies dichter bij elkaar brengt. Voor hen bouwden we een site met een interactieve Leaflet-kaart waarop bezoekers leesplekken in heel Nederland kunnen vinden, een aanmeldflow per sessie en SEO-instellingen per locatie zodat lokale bezoekers via Google direct op de juiste plek landen.",
    pillars: ["Leaflet-locatiekaart", "Aanmeldflow per sessie", "SEO per locatie"],
    features: [
      { label: "Locatiekaart", body: "Een interactieve Leaflet-kaart met alle samenleessessies in Nederland, gegroepeerd per regio en direct aanklikbaar naar de detailpagina van die locatie." },
      { label: "Aanmeldflow per sessie", body: "Bezoekers melden zich direct aan voor een specifieke sessie, de coördinator krijgt een melding en de plek staat in het CRM van de centrale organisatie." },
      { label: "SEO per locatie", body: "Elke vestiging heeft een eigen pagina met meta-templates die de plaatsnaam meenemen, zodat 'samenleesclub Breda' direct lokaal vindbaar is." },
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
      title: "Een landelijke beweging die lokaal vindbaar én aanmeldbaar moest zijn",
      body:
        "De Samenleesclub is een landelijk initiatief met tientallen leesplekken verspreid over Nederland. De uitdaging was om bezoekers vanuit elke regio direct de relevante locatie bij hen in de buurt te laten vinden, ze laagdrempelig te laten aanmelden voor een specifieke sessie op een specifieke datum, en tegelijk lokaal vindbaar te zijn in Google zodat iemand die 'samenleesclub Breda' zoekt direct op de juiste plek landt en niet op een algemene landingspagina. Daarbij wilden de lokale coördinatoren wel zelf zicht houden op aanmeldingen in hun eigen regio, zonder dat de centrale administratie de regie kwijtraakte.",
    },
    solution: [
      {
        title: "Een eigen content-type 'locatie' met Leaflet-kaart op de homepage",
        body:
          "We bouwden een custom content-type voor locaties in de Website-module van Forester OS, en koppelden die aan een interactieve Leaflet-kaart op de homepage. Bezoekers zien direct alle leesplekken bij hen in de buurt, met klik-doorlinks naar de detailpagina van die specifieke locatie inclusief contactpersoon, aankomende sessies en wat ze daar kunnen verwachten.",
      },
      {
        title: "Aanmeldflow per sessie met dubbele CRM-routing",
        body:
          "Voor elke sessie op elke locatie bouwden we een Lead Engine die de bezoeker meeneemt door welke locatie, welke datum, persoonlijke gegevens en eventuele toelichting. De aanmelding landt direct in de mailbox van de coördinator van die locatie én in de centrale administratie. Zo blijft het lokaal beheersbaar terwijl het hoofdkantoor het totaalbeeld behoudt.",
      },
      {
        title: "SEO per locatie met automatische meta-templates",
        body:
          "Elke locatie heeft een eigen SEO-pagina met meta-titels, descriptions en structured data die afgestemd zijn op de plaatsnaam. Slim SEO Pro regelt de redirects en de sitemap, en een mu-plugin zorgt dat nieuwe locaties automatisch correcte default-meta's krijgen zonder dat iemand handmatig per CPT-veld hoeft te tikken. Toevoegen van een nieuwe leesplek is daardoor een handeling van vijf minuten in plaats van een SEO-traject.",
      },
      {
        title: "Bevestigingsmails per aanmelding, voor deelnemer én coördinator",
        body:
          "Bij elke aanmelding krijgt de deelnemer direct een persoonlijke bevestigingsmail met de exacte sessie-info, het adres en wat ze kunnen verwachten. De coördinator krijgt parallel z'n eigen samenvatting met de aanmeldingen voor die week. Geen handmatig overpennen, geen verloren aanmeldingen.",
      },
    ],
    results: [
      { value: "Landelijk", label: "Locatiekaart actief", descriptor: "alle leesplekken interactief op de homepage" },
      { value: "Per sessie", label: "Aanmeldflow", descriptor: "directe routing naar lokale coördinator én centraal CRM" },
      { value: "Lokaal", label: "SEO geoptimaliseerd", descriptor: "elke plaats heeft z'n eigen vindbare pagina" },
      { value: "5 min", label: "Nieuwe locatie toevoegen", descriptor: "geen SEO-traject, gewoon invullen en publiceren" },
    ],
  },
];

export function caseBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
