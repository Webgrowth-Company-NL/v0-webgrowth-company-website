import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

type Section = {
  heading: string
  paragraphs: string[]
}

type FAQ = {
  q: string
  a: string
}

type Post = {
  slug: string
  tag: string
  date: string
  dateTime: string
  readTime: string
  img: string
  title: string
  metaTitle: string
  metaDescription: string
  intro: string
  content: Section[]
  faqs?: FAQ[]
  related: string[]
  cta: { label: string; linkLabel: string; href: string }
}

// ─── Content ────────────────────────────────────────────────────────────────
const posts: Record<string, Post> = {

  "webshop-bouwen-voor-mkb": {
    slug: "webshop-bouwen-voor-mkb",
    tag: "E-commerce",
    date: "Augustus 2025",
    dateTime: "2025-08-18",
    readTime: "7 min",
    img: "/images/developer-character.jpg",
    metaTitle: "E-commerce op Forester OS: een webshop in Next.js die echt verkoopt | Webgrowth",
    metaDescription: "Waarom wij e-commerce bouwen op Forester OS met Next.js in plaats van WooCommerce. Sneller, beter vindbaar en volledig geautomatiseerd voor MKB.",
    title: "E-commerce op Forester OS: waarom we WooCommerce achter ons lieten",
    intro: "Een tijdje geleden bouwden we webshops op WooCommerce. Het werkte, maar het voelde altijd als bouwen op drijfzand. Plugins die conflicteren, updates die dingen breken, paginasnelheden die je nooit echt onder controle krijgt. Toen we Forester OS bouwden op Next.js, was e-commerce een van de eerste dingen die we opnieuw hebben doordacht. Hier is wat er anders is en waarom het beter werkt voor MKB.",
    content: [
      {
        heading: "Het probleem met WooCommerce voor serieuze webshops",
        paragraphs: [
          "WooCommerce is geen slechte tool. Het is de verkeerde tool als je een snelle, onderhoudbare webshop wil die ook over twee jaar nog goed werkt. Het probleem zit in de architectuur: WooCommerce is een plugin bovenop WordPress, dat zelf een CMS is dat niet voor e-commerce is gebouwd. Elke extra functie is weer een plugin, elk plugin conflict is een uur debuggen, en elke update is een gok.",
          "We hebben dit jaren van dichtbij meegemaakt. Een klant met een mooie webshop die na een WordPress-update de helft van zijn productfoto's kwijt was. Een andere klant waarbij het checkout-formulier crashte op iOS na een WooCommerce patch. Kleine kansen, maar structurele risico's. En in e-commerce kost een uur uitval direct klanten.",
          "De overstap naar Forester OS, ons platform op basis van Next.js, was voor ons ook op het vlak van e-commerce een bewuste keuze. We beheren de volledige stack. Er zijn geen plugin conflicten, geen onverwachte updates en geen third-party code die de prestaties saboteert.",
        ],
      },
      {
        heading: "Hoe e-commerce werkt op Forester OS",
        paragraphs: [
          "In Forester OS bouwen we webshops als Next.js applicaties. Producten worden als TypeScript objecten gedefinieerd met een volledig getypte interface: naam, beschrijving, prijs, varianten, voorraadstatus, afbeeldingen en metadata voor SEO. Die structuur is consistent, voorspelbaar en volledig in controle van de ontwikkelaar.",
          "De productpagina's worden statisch gegenereerd via generateStaticParams. Dat betekent dat elke productpagina als statisch HTML-bestand op het CDN staat, niet op een server wordt berekend bij elk bezoek. De laadtijd is onder de 400 milliseconden, ook bij piekverkeer. Een WooCommerce pagina die bij elke bezoeker een PHP-template rendert en tien database queries uitvoert, haalt dat niet.",
          "Als de voorraad of prijs verandert, triggeren we via een webhook een Incremental Static Regeneration. Next.js herbouwt dan alleen de pagina's die zijn aangepast, niet de hele site. Binnen een minuut staan de nieuwe gegevens live op het CDN.",
        ],
      },
      {
        heading: "Betaling via Mollie en Stripe, direct in Next.js",
        paragraphs: [
          "Voor betaling integreren we Mollie als primaire provider via hun officiële Node.js SDK. Mollie ondersteunt iDEAL, Bancontact, creditcard en SEPA-incasso voor abonnementen. De betaalflow is een Next.js API route die de Mollie order aanmaakt, de klant naar de betaalpagina stuurt en via een webhook de betaalstatus verwerkt.",
          "Voor klanten met internationale kopers of waarbij Stripe beter past, gebruiken we de Stripe SDK. De logica is identiek: de betaalintentie wordt server-side aangemaakt in een API route, nooit client-side. Zo liggen de API-sleutels nooit bloot in de browser.",
          "Abonnementen verwerken we via Stripe Billing of Mollie Subscriptions, afhankelijk van de situatie. De abonnementsstatus wordt opgeslagen in Firebase Firestore, zodat Forester OS altijd weet welke klant actief is en welke niet, zonder externe service te hoeven aanroepen voor elke paginaweergave.",
        ],
      },
      {
        heading: "Automatisering na de aankoop via Forester OS",
        paragraphs: [
          "Na een betaalde bestelling triggert de Mollie webhook een reeks automatische stappen in Forester OS. Een bevestigingsmail via Resend met een overzicht van de bestelling. Een notificatie naar de ondernemer via een intern dashboard. En als het een abonnement betreft, directe activering van de gekochte dienst of toegang tot de afgeschermde content.",
          "Voor een klant in de trainingsbranche koppelden we Forester OS aan hun cursusplatform via een API. Zodra een betaling is bevestigd, maakt het systeem automatisch een gebruikersaccount aan en stuurt een welkomstmail met inloglink. Het salesteam hoeft niets handmatig te doen. Van betaling tot actieve gebruiker duurt het minder dan tien seconden.",
          "Q, de AI laag van Forester OS, leert van de besteldata. Welke producten worden samen gekocht, op welke momenten, via welk kanaal. Die inzichten vertalen we naar concrete aanpassingen: betere productaanbevelingen, gerichtere follow-up mails, relevantere landingspagina's voor terugkerende bezoekers.",
        ],
      },
      {
        heading: "SEO voor productpagina's is ingebakken",
        paragraphs: [
          "Een WooCommerce webshop heeft standaard matige SEO. Urls zijn vaak generiek, structured data moet via een plugin worden toegevoegd en de laadtijd is een constante strijd. In Forester OS is SEO geen laag die je erbovenop legt, het zit in de architectuur.",
          "Elke productpagina genereert via de generateMetadata functie van Next.js zijn eigen title tag, meta description en Open Graph afbeelding op basis van de productdata. We voegen Product schema toe aan de JSON-LD van elke pagina: prijs, beschikbaarheid, beoordelingen. Dat geeft Google alle informatie die het nodig heeft voor rich results in de zoekresultaten.",
          "Afbeeldingen worden via de Next.js Image component automatisch geoptimaliseerd naar WebP of AVIF, met de juiste afmetingen per apparaat en lazy loading voor afbeeldingen onder de vouw. De Lighthouse Performance score van productpagina's op Forester OS ligt standaard boven de 90.",
        ],
      },
      {
        heading: "Wat dit betekent voor de ondernemer",
        paragraphs: [
          "Het platform is gebouwd voor ondernemers die willen groeien, niet voor ondernemers die een weekend kwijt zijn aan een WordPress update. Via het Forester OS dashboard beheer je producten, prijzen en voorraad zonder technische kennis. Q geeft je elke maand een overzicht van wat goed werkt en wat er beter kan.",
          "Forester OS, de analytics laag van Forester OS, koppelt je webshopdata aan je websitegedrag. Je ziet welke pagina's leiden tot aankopen, waar bezoekers afhaken in het bestelproces en via welk kanaal de meest waardevolle klanten binnenkomen. Geen Google Analytics rapport dat je zelf moet interpreteren, maar concrete aanbevelingen.",
          "Een webshop op Forester OS is niet goedkoper dan WooCommerce op korte termijn. Het is goedkoper op lange termijn, omdat je geen developer nodig hebt voor elke update en omdat de fundering stabiel genoeg is om op te bouwen.",
        ],
      },
      {
        heading: "Voor wie is dit de juiste keuze?",
        paragraphs: [
          "Forester OS e-commerce is de juiste keuze voor MKB-bedrijven die een serieuze online verkoopstrategie hebben. Bedrijven die verwachten te groeien, die automatisering willen en die niet elke maand met technische problemen geconfronteerd willen worden.",
          "Voor een simpele webshop met vijf producten en geen automatisering is WooCommerce of Shopify prima. Maar zodra je wilt dat je webshop actief bijdraagt aan je groei, met data, automatisering en een platform dat meegroeit, is Forester OS de betere investering.",
          "We bouwen altijd eerst een proof of concept op basis van jouw situatie, zodat je ziet wat het platform kan doen voordat je een langetermijnbeslissing neemt.",
        ],
      },
    ],
    faqs: [
      {
        q: "Kan ik mijn bestaande WooCommerce webshop migreren naar Forester OS?",
        a: "Ja. We exporteren producten, bestellingen en klantdata uit WooCommerce en importeren die in Forester OS. De migratie is zorgvuldig gepland zodat er geen downtime is en bestaande klanten geen hinder ondervinden.",
      },
      {
        q: "Welke betaalmethoden zijn beschikbaar op Forester OS?",
        a: "Via Mollie ondersteun je iDEAL, Bancontact, creditcard, Klarna en SEPA-incasso. Via Stripe voeg je Apple Pay, Google Pay en internationale betaalmethoden toe. De combinatie hangt af van je doelgroep.",
      },
      {
        q: "Hoe lang duurt het bouwen van een webshop op Forester OS?",
        a: "Gemiddeld zes tot acht weken voor een volledige webshop inclusief betalingsflow, automatisering en analytics. Eenvoudige shops zijn sneller klaar. We starten altijd met een intake om een realistisch tijdpad te bepalen.",
      },
      {
        q: "Heeft Forester OS ook een abonnementsmodel voor webshops?",
        a: "Ja. Abonnementen zijn een kernfunctie van Forester OS. We ondersteunen maandelijkse en jaarlijkse abonnementen, pauze en annulering, en automatische verlengingen via Mollie of Stripe.",
      },
    ],
    related: ["offertes-automatisch-via-pipedrive-en-zapier", "magic-link-voor-makkelijker-inloggen"],
    cta: {
      label: "Wil je een webshop op een platform dat meegroeit?",
      linkLabel: "Plan een vrijblijvend gesprek",
      href: "/contact",
    },
  },

  "magic-link-voor-makkelijker-inloggen": {
    slug: "magic-link-voor-makkelijker-inloggen",
    tag: "Automatisering",
    date: "Juli 2025",
    dateTime: "2025-07-22",
    readTime: "5 min",
    img: "/images/forester-character.jpg",
    metaTitle: "Magic Link inloggen zonder wachtwoord: zo werkt het | Webgrowth",
    metaDescription: "Pitch Academy verloor klanten bij het bekijken van hun offerte omdat ze hun wachtwoord waren vergeten. Magic link loste het op. Minder wrijving, meer conversie.",
    title: "Magic Link: wachtwoorden de deur uit bij Pitch Academy",
    intro: "Pitch Academy stuurt gepersonaliseerde offertes via hun website voor trainingen en workshops. De klant moest inloggen om die offerte te bekijken. En daar ging het mis. Vergeten wachtwoorden, reset-e-mails die niet aankwamen, en mensen die al afhaken voordat ze ook maar een letter van de offerte hadden gelezen. De oplossing was een magic link. Hier is hoe we dat hebben gebouwd en wat het opleverde.",
    content: [
      {
        heading: "Het probleem met wachtwoorden in het offerteproces",
        paragraphs: [
          "Een offerte is een cruciaal moment in het verkoopproces. Iemand heeft interesse getoond, jij hebt tijd gestoken in het opstellen van een voorstel, en dan is het wachten op een reactie. Alles wat de klant ervan weerhoudt die offerte te openen, is verloren omzet.",
          "Bij Pitch Academy zagen we in de data dat een significant deel van de offertelinks werd geopend, maar dat mensen afhaken op het inlogscherm. Niet omdat ze niet geinteresseerd waren, maar omdat ze het wachtwoord waren vergeten dat ze misschien een jaar geleden hadden aangemaakt voor een eerdere aanvraag. Of omdat ze op hun telefoon zaten en het wachtwoord niet bij de hand hadden.",
          "Wachtwoorden zijn nodig voor systemen waar je regelmatig terugkomt en waar gevoelige data staat. Een eenmalige offertepagina is dat niet. De beveiliging die een wachtwoord biedt, weegt in dit geval niet op tegen de wrijving die het veroorzaakt.",
        ],
      },
      {
        heading: "Hoe een magic link werkt",
        paragraphs: [
          "Een magic link is een unieke, tijdgebonden URL die via e-mail wordt verstuurd. De klant hoeft geen wachtwoord in te voeren: ze klikken op de link in hun inbox en komen direct op hun persoonlijke pagina terecht. De link werkt eenmalig en vervalt na gebruik of na een ingestelde tijd.",
          "Technisch gezien genereren we bij elke offerteaanvraag een uniek token, dat we opslaan in de database gekoppeld aan de gebruiker en de offerte. Als de klant op de link klikt, valideren we het token, loggen we de gebruiker in en tonen we de offerte. Na gebruik wordt het token ongeldig. De beveiliging is vergelijkbaar met een wachtwoord-reset flow, maar dan als de normale manier van inloggen.",
          "We bouwden dit voor Pitch Academy in WordPress met een combinatie van custom code en de bestaande WordPress authentication hooks. De offertes zelf worden gegenereerd via een bestaand systeem, de magic link is de laag die het toegankelijker maakt.",
        ],
      },
      {
        heading: "Wat we veranderden in de e-mail flow",
        paragraphs: [
          "De e-mail met de offerte werd al verstuurd door het systeem van Pitch Academy. We voegden de magic link toe aan die e-mail, zodat de klant met een klik op de knop direct terechtkomt op hun offerte. Geen apart scherm, geen wachtwoordveld, geen redirect via een loginpagina.",
          "De knoptekst in de e-mail is bewust niet 'Inloggen' maar 'Bekijk je offerte'. Dat is een kleine aanpassing, maar het verlaagt de drempel verder. De klant hoeft niet te weten hoe het technisch werkt, ze zien alleen dat er iets voor hen klaarstaat.",
          "We stuurden ook een reminder-e-mail als de offerte na 48 uur nog niet was geopend. Met een nieuwe magic link, want de oude kan inmiddels verlopen zijn. Die reminder had een open rate van 34%, wat aangeeft dat er mensen zijn die de eerste e-mail hebben gemist of niet op het goede moment aan de computer zaten.",
        ],
      },
      {
        heading: "De resultaten na implementatie",
        paragraphs: [
          "Vier weken na de lancering konden we de eerste cijfers vergelijken. Het percentage offertes dat daadwerkelijk werd geopend, steeg van 61% naar 84%. De drop-off op het inlogscherm was vrijwel verdwenen. En het aantal offertes dat leidde tot een vervolggesprek steeg met 22%.",
          "Pitch Academy ontving ook minder supportberichten over vergeten wachtwoorden. Die waren er voor de implementatie elke week, gemiddeld drie tot vijf. Na de implementatie waren het er nul. Kleine tijdwinst per geval, maar structureel wel merkbaar.",
          "De klant gaf achteraf aan dat het systeem ook intern soepeler werkt. Verkopers hoeven niet meer te checken of een klant wel toegang heeft tot hun offerte. De magic link werkt, of niet, en dat zie je direct in de analytics.",
        ],
      },
      {
        heading: "Wanneer is een magic link de juiste keuze?",
        paragraphs: [
          "Een magic link werkt goed voor situaties waarbij je gebruikers eenmalig of zelden terug laten keren naar een beschermde omgeving. Offertes, klantportalen voor facturen, persoonlijke rapportages: dit zijn use cases waarbij een wachtwoord meer nadelen heeft dan voordelen.",
          "Voor systemen waarbij gebruikers dagelijks terugkeren, zoals een webapp of een ledenomgeving, is een wachtwoord in combinatie met een 'onthoud mij' optie nog steeds de betere keuze. De magic link is dan meer geschikt als hersteloptie dan als primaire inlogmethode.",
          "De implementatietijd voor een magic link flow is beperkt. In WordPress kan het met bestaande hooks in een paar dagen worden gebouwd. De impact op de gebruikerservaring is direct merkbaar.",
        ],
      },
      {
        heading: "Wat je hiervan kunt meenemen",
        paragraphs: [
          "Als je offertes, facturen of persoonlijke pagina's verstuurt via e-mail en je klanten moeten daarvoor inloggen, is het de moeite waard om te kijken of een magic link de wrijving kan verminderen. De technische implementatie is eenvoudiger dan het klinkt, en de impact op conversie is meetbaar.",
          "De eerste stap is kijken in je huidige data. Hoeveel procent van de verstuurde links wordt geopend? Waar haken mensen af? Als je drop-off ziet op het inlogscherm, is dat het signaal dat er iets te winnen is.",
          "Wil je weten of dit voor jouw situatie werkt? We kijken graag mee. Geen grote investering, snel te testen, en het effect is direct zichtbaar in je conversiedata.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is een magic link veilig genoeg voor gevoelige informatie?",
        a: "Voor offertes en klantrapportages is het veilig genoeg, mits de link tijdgebonden is en eenmalig werkt. Voor hoog-gevoelige data zoals financiele accounts of medische gegevens zijn aanvullende beveiligingslagen aan te raden.",
      },
      {
        q: "Wat als de klant de e-mail met de magic link niet ontvangt?",
        a: "Je bouwt een scherm waarop de klant een nieuw verzoek kan indienen. Dat stuurt direct een nieuwe magic link. Vergelijkbaar met een wachtwoord-reset, maar eenvoudiger voor de gebruiker.",
      },
      {
        q: "Werkt dit ook voor andere CMS-systemen dan WordPress?",
        a: "Ja, het principe werkt voor elk systeem dat e-mails kan versturen en tokens kan opslaan. In Next.js, Laravel of elke andere stack is dit te bouwen met dezelfde logica.",
      },
    ],
    related: ["offertes-automatisch-via-pipedrive-en-zapier", "webshop-bouwen-voor-mkb"],
    cta: {
      label: "Wil je wrijving uit je offerteproces halen?",
      linkLabel: "Plan een gesprek",
      href: "/contact",
    },
  },

  "mobiel-menu-voor-meer-reserveringen": {
    slug: "mobiel-menu-voor-meer-reserveringen",
    tag: "Conversie",
    date: "Juli 2025",
    dateTime: "2025-07-14",
    readTime: "4 min",
    img: "/images/q-relaxing.jpg",
    metaTitle: "Mobiel menu voor meer reserveringen: case study Restaurant Chung | Webgrowth",
    metaDescription: "Restaurant Chung verloor mobiele bezoekers voor ze een tafel konden boeken. Een vaste onderste navigatiebalk veranderde dat. Concreet resultaat: 30% meer reserveringen.",
    title: "Hoe een vast mobiel menu 30% meer reserveringen opleverde",
    intro: "Restaurant Chung had geen slecht website. Het ontwerp was modern, de menukaart stond er goed op en de foto's waren verzorgd. Maar de meerderheid van de bezoekers kwam via mobiel, en mobiele bezoekers bereikten de reserveerknop nauwelijks. Een analyse van het scrollgedrag liet zien waarom. En de oplossing was simpeler dan we dachten.",
    content: [
      {
        heading: "Het probleem: de reserveerknop zat te diep",
        paragraphs: [
          "Op een desktopscherm staan navigatie en call-to-actions op vaste plekken die altijd zichtbaar zijn. Op mobiel schuift alles mee met het scrollen. De reserveerknop van Restaurant Chung stond in de header navigatie, verstopt in een hamburger menu. Wie op mobiel op de site landde, moest het menu eerst openen en dan de juiste knop vinden.",
          "Via Fathom Analytics konden we het klikgedrag analyseren. Het hamburger menu werd op mobiel door minder dan 20% van de bezoekers geopend. Van die 20% klikte de helft op de reserveerknop. Dat betekent dat minder dan 10% van de mobiele bezoekers de reserveringspagina bereikte, terwijl dat de primaire actie was die het restaurant wilde stimuleren.",
          "Het probleem was niet dat mensen niet wilden reserveren. Het was dat de weg erheen te veel stappen vergde op een klein scherm.",
        ],
      },
      {
        heading: "De oplossing: een vaste balk onderaan het scherm",
        paragraphs: [
          "We voegden een vaste navigatiebalk toe onderaan het scherm, alleen zichtbaar op mobiel. De balk bevat drie iconen: reserveren, menukaart bekijken en bellen. Altijd zichtbaar, ongeacht hoe ver de bezoeker heeft gescrold.",
          "De balk verdwijnt niet bij het scrollen. Hij staat vast aan de onderkant van het scherm, op de plek waar de duim van de meeste mensen het makkelijkst bij kan. Op grotere schermen blijft de normale navigatie intact, de mobiele balk is alleen actief onder een breedte van 768 pixels.",
          "Technisch is het een sticky footer in CSS, gecombineerd met een media query. De implementatie nam een halve dag. Het testen op verschillende apparaten en schermformaten nam de rest van de dag.",
        ],
      },
      {
        heading: "Wat de Fathom data liet zien na de lancering",
        paragraphs: [
          "Drie weken na de lancering konden we de cijfers vergelijken. Het percentage mobiele bezoekers dat de reserveringspagina bereikte, steeg van 9% naar 31%. Dat is een stijging van meer dan twee en een half keer. De directe klikken op de reserveerknop in de vaste balk waren verantwoordelijk voor het grootste deel van die stijging.",
          "Het restaurant rapporteerde ook een stijging in het aantal online reserveringen in absolute aantallen, die ze deels toeschrijven aan de website-aanpassing. Exacte koppeling met de reserveringstool was er niet, maar de correlatie in timing was duidelijk.",
          "Een neveneffect: de 'Bel ons' knop in de vaste balk werd ook vaker gebruikt dan de telefoonnummervermelding in de footer. Dat is een indicatie dat mensen de balk als primaire navigatie zijn gaan gebruiken op mobiel.",
        ],
      },
      {
        heading: "Waarom dit patroon werkt voor meer dan alleen restaurants",
        paragraphs: [
          "Een vaste mobiele navigatiebalk met de belangrijkste acties werkt voor elk bedrijf waarbij mobiele bezoekers een specifieke handeling moeten uitvoeren. Schoonheidssalons met online boekingen, autogarages met afspraakinplanners, sportscholen met proefles-aanvragen: het principe is hetzelfde.",
          "De sleutel is focussen op de primaire actie. Drie items maximaal, anders raakt de aandacht verdeeld. En de iconen moeten direct duidelijk zijn, want op mobiel is er geen ruimte voor uitleg naast het icoon.",
          "We passen dit patroon nu standaard toe op websites waarbij meer dan 60% van het verkeer mobiel is en waarbij er een duidelijke gewenste actie is. Dat is bij de meeste MKB-websites het geval.",
        ],
      },
      {
        heading: "De meetbaarheid als basis voor beslissingen",
        paragraphs: [
          "Wat dit project goed illustreert is het belang van data voor je beslist. We hadden kunnen redeneren dat het hamburger menu goed genoeg was. Het ziet er netjes uit, het is vertrouwd, het werkt technisch prima. Maar de Fathom data liet zien dat het in de praktijk niet werkte voor de primaire doelstelling van het restaurant.",
          "Zonder die data hadden we de aanpassing waarschijnlijk nooit gemaakt. Met de data was het een makkelijke beslissing en een snelle implementatie met direct meetbaar effect.",
          "Dat is wat we bedoelen als we zeggen dat een website voortdurend verbeterd moet worden. Niet op basis van gevoel of trends, maar op basis van wat de data laat zien over het gedrag van echte bezoekers.",
        ],
      },
    ],
    faqs: [
      {
        q: "Heeft een mobiele navigatiebalk invloed op de SEO?",
        a: "Niet negatief, als het goed geimplementeerd is. Google beoordeelt mobiele bruikbaarheid als een positief signaal. Een vaste balk die de kerst-actie blokkeer of content overlap veroorzaakt, kan wel een probleem zijn, maar dat is eenvoudig te vermijden.",
      },
      {
        q: "Werkt dit ook op iOS en Android?",
        a: "Ja, zolang je rekening houdt met de safe area aan de onderkant op iPhones met een home indicator. Met CSS environment variables los je dat in twee regels op.",
      },
      {
        q: "Hoe meet ik of mijn huidige navigatie goed werkt op mobiel?",
        a: "Installeer Fathom Analytics of een vergelijkbaar privacy-vriendelijk analyticsplatform en analyseer op welke knoppen mobiele bezoekers klikken en waar ze afhaken. Dat geeft je het eerlijke beeld.",
      },
    ],
    related: ["laadtijd-website-verbeteren", "van-0-naar-1000-bezoekers-30-dagen"],
    cta: {
      label: "Wil je weten waar jouw mobiele bezoekers afhaken?",
      linkLabel: "Vraag een analyse aan",
      href: "/contact",
    },
  },

  "bolt-meer-inzichten-voor-je-website": {
    slug: "bolt-meer-inzichten-voor-je-website",
    tag: "Analytics",
    date: "Juli 2025",
    dateTime: "2025-07-08",
    readTime: "4 min",
    img: "/images/developer-character.jpg",
    metaTitle: "Forester OS krijgt drie nieuwe website metrics: paginadiepte, bezoekduur en verkeersbronnen | Webgrowth",
    metaDescription: "Forester OS heeft drie nieuwe meetpunten gekregen: paginadiepte, bezoekduur en verkeersbronnen. Zo gebruik je ze om je website te verbeteren.",
    title: "Forester OS krijgt drie nieuwe metrics: zo gebruik je ze",
    intro: "Forester OS is onze eigen tool waarmee klanten de prestaties van hun website kunnen volgen. We hebben drie nieuwe metrics toegevoegd: paginadiepte, bezoekduur en verkeersbronnen. Niet omdat meer data altijd beter is, maar omdat deze drie dingen samen een concreet beeld geven van wat er werkt en wat niet.",
    content: [
      {
        heading: "Waarom we drie metrics hebben toegevoegd en niet dertig",
        paragraphs: [
          "Het is verleidelijk om een analytics dashboard vol te gooien met grafieken. Bezoekers, sessies, bounce rate, pagina's per sessie, conversies, doelen, attributie. Er is genoeg om te meten. Maar meer data leidt niet automatisch tot betere beslissingen. Vaak leidt het tot besluiteloosheid, omdat je niet weet waar je op moet letten.",
          "Forester OS is gebouwd op Fathom Analytics, een privacy-vriendelijk alternatief voor Google Analytics zonder cookies en zonder gegevensdeling met advertentienetwerken. Fathom is snel en duidelijk, maar miste een paar specifieke inzichten die we voor onze klanten relevant vinden. Die hebben we nu toegevoegd.",
          "De drie nieuwe metrics zijn bewust gekozen: paginadiepte, bezoekduur en verkeersbronnen. Samen beantwoorden ze de vraag die de meeste MKB-ondernemers eigenlijk stellen: komt er iemand op mijn website, doet die iets, en hoe hebben ze me gevonden?",
        ],
      },
      {
        heading: "Paginadiepte: scrollen ze echt door je content?",
        paragraphs: [
          "Paginadiepte meet hoeveel pagina's een bezoeker gemiddeld bekijkt per sessie. Een bezoeker die op de homepage landt en direct vertrekt, heeft een paginadiepte van 1. Iemand die ook de dienstenpagina en de contactpagina bezoekt, heeft een paginadiepte van 3.",
          "Een lage paginadiepte is niet per se slecht. Als iemand op een specifieke landingspagina terechtkomt, de informatie vindt die ze zoeken en contact opneemt, is dat een succesvolle sessie met een paginadiepte van 1. Maar als je merkt dat mensen de homepage bezoeken en niet verder gaan, terwijl je verwacht dat ze naar een dienstenpagina zouden doorklikken, is er een drempel die je wilt identificeren.",
          "We koppelen paginadiepte aan de pagina waarop de sessie begint. Zo zie je per instappagina hoe ver bezoekers doorgaan. Dat geeft meer context dan een gemiddeld getal over alle bezoekers.",
        ],
      },
      {
        heading: "Bezoekduur: hoelang blijven ze?",
        paragraphs: [
          "Bezoekduur meet hoe lang een sessie duurt. Dit getal heeft een lastig aspect: traditionele analytics tools meten bezoekduur door het verschil te berekenen tussen de eerste en de laatste paginaweergave. Een bezoeker die op een pagina landt, die grondig leest en dan de browser sluit, wordt dan geregistreerd als 0 seconden. Want er is geen tweede paginaweergave om het einde van de sessie te markeren.",
          "In Forester OS lossen we dit deels op door een heartbeat te meten, een signaal dat elke dertig seconden wordt verstuurd zolang de pagina actief is in de browser. Dat geeft een realistischer beeld van hoelang mensen daadwerkelijk op een pagina doorbrengen.",
          "Een lange bezoekduur bij een blog of informatieve pagina is een goed signaal. Bij een landingspagina die snel moet converteren, is een te lange bezoekduur soms een teken dat de informatie niet duidelijk genoeg is.",
        ],
      },
      {
        heading: "Verkeersbronnen: hoe vinden mensen je?",
        paragraphs: [
          "Verkeersbronnen splitsen het inkomende verkeer op naar herkomst: organisch zoekverkeer via Google, direct verkeer (iemand typt de URL direct in), verkeer via social media, via e-mailcampagnes of via verwijzende websites.",
          "Dit is de metriek die de meeste klanten het directst interessant vinden. Als je investeert in SEO, wil je zien of het organisch verkeer groeit. Als je een e-mailcampagne hebt verzonden, wil je weten hoeveel mensen via die e-mail op je website zijn gekomen. Als je actief bent op Instagram, wil je weten of dat bezoekers oplevert.",
          "We tonen verkeersbronnen als percentage van het totale verkeer en als absolute aantallen. Beide zijn relevant: een stijging in organisch verkeer van 5% klinkt klein, maar als je totale verkeer 2.000 bezoekers per maand is, zijn dat 100 extra bezoekers per maand.",
        ],
      },
      {
        heading: "Hoe je de drie metrics samen gebruikt",
        paragraphs: [
          "De kracht zit in de combinatie. Stel: je ziet dat verkeer via Google stijgt, maar de paginadiepte van organische bezoekers is laag en de bezoekduur is kort. Dat kan betekenen dat je rankt op zoektermen die niet goed aansluiten op wat de pagina biedt. De zoeker vindt jou, maar vindt niet wat hij zoocht.",
          "Of: organisch verkeer is stabiel, maar de bezoekduur is lang en de paginadiepte is hoog. Dat is een teken dat de content aanslaat bij de bezoekers die komen, maar dat de hoeveelheid bezoekers een knelpunt is. Dan is de vraag niet 'is mijn website goed?' maar 'hoe trek ik meer mensen aan die op deze bezoekers lijken?'",
          "Forester OS toont benchmarks naast je eigen cijfers: hoe doe je het ten opzichte van vergelijkbare websites in dezelfde branche? Dat geeft context. Een bezoekduur van twee minuten is goed of slecht afhankelijk van de sector en het type pagina.",
        ],
      },
      {
        heading: "Hoe Forester OS toegang geeft zonder technische kennis",
        paragraphs: [
          "Forester OS is beschikbaar voor alle klanten van Webgrowth als onderdeel van de samenwerking. Je logt in via een veilige link, je ziet de cijfers van je eigen website, en je krijgt per metric een korte uitleg van wat het betekent en wat je ermee kunt doen.",
          "We sturen geen maandelijks rapport met grafieken die je moet interpreteren. Forester OS is zo ingericht dat je er zelf in kunt kijken wanneer je wilt, en dat de data direct leesbaar is zonder analyticskennis.",
          "De drie nieuwe metrics zijn al live voor alle klanten die Forester OS gebruiken. Je hoeft niets in te stellen of opnieuw te koppelen.",
        ],
      },
    ],
    faqs: [
      {
        q: "Heeft Forester OS ook cookies nodig?",
        a: "Nee. Forester OS is gebouwd op Fathom Analytics, dat werkt zonder cookies en zonder persoonlijke gegevens te verzamelen. Je hebt dus ook geen cookiebanner nodig voor de analytics.",
      },
      {
        q: "Is Forester OS beschikbaar los van een Webgrowth abonnement?",
        a: "Forester OS is momenteel beschikbaar voor klanten van Webgrowth als onderdeel van de samenwerking. We kijken naar mogelijkheden om het breder beschikbaar te stellen.",
      },
      {
        q: "Wat als ik al Google Analytics gebruik?",
        a: "Forester OS vervangt Google Analytics niet per se, maar vereenvoudigt het. Veel MKB-ondernemers gebruiken Google Analytics nauwelijks omdat het complex is. Forester OS biedt dezelfde kerndata in een formaat dat direct bruikbaar is.",
      },
    ],
    related: ["van-0-naar-1000-bezoekers-30-dagen", "automatische-contentoptimalisatie-mkb"],
    cta: {
      label: "Wil je inzicht in hoe jouw website presteert?",
      linkLabel: "Bekijk wat Forester OS voor je doet",
      href: "/hoe-het-werkt",
    },
  },

  "reiswebsite-voor-the-africa-experience": {
    slug: "reiswebsite-voor-the-africa-experience",
    tag: "Maatwerk",
    date: "Juni 2025",
    dateTime: "2025-06-23",
    readTime: "6 min",
    img: "/images/forester-character.jpg",
    metaTitle: "Next.js maatwerk voor The Africa Experience: safaris op Forester OS | Webgrowth",
    metaDescription: "Hoe we een complexe reiswebsite bouwden op Forester OS met Next.js, TypeScript data models en automatische offerteflow naar Pipedrive.",
    title: "Next.js maatwerk voor The Africa Experience",
    intro: "The Africa Experience organiseert safaris en luxe reizen naar Afrika. Hun vorige website was gebouwd op WordPress met ACF. Het werkte, maar elke aanpassing vereiste een developer, de laadtijd was matig en de koppeling tussen accommodaties, activiteiten en safariroutes was kwetsbaar. We migreerden het platform naar Forester OS op Next.js. Hier is wat er veranderde en waarom het beter werkt.",
    content: [
      {
        heading: "Waarom we van WordPress naar Forester OS zijn gegaan",
        paragraphs: [
          "De reiswebsite van The Africa Experience had een complexe contentstructuur: accommodaties met faciliteiten en locatiedata, activiteiten per regio, signature safaris die uit meerdere verblijven zijn opgebouwd, en zelfrijdroutes met eigen dagschema's. In WordPress was dat opgebouwd met Advanced Custom Fields en custom post types. Functioneel, maar traag en broos.",
          "De Lighthouse Performance-score was 54 op mobiel. Elke pagina deed zes tot tien database queries en renderde server-side via PHP-templates. Voor een visueel zware reiswebsite met tientallen foto's per accommodatie was dat een probleem. Bezoekers op mobiel kregen een trage eerste weergave, precies op het moment dat de website hen moest overtuigen.",
          "We besloten het platform opnieuw te bouwen op Forester OS, ons Next.js platform. Niet omdat Next.js sowieso beter is dan WordPress, maar omdat de specifieke eisen van deze website, snelheid, complexe data-relaties, zelfbeheer, automatisering, beter passen bij een modern frontend framework dan bij een CMS dat in 2003 is ontworpen.",
        ],
      },
      {
        heading: "TypeScript data models als fundament",
        paragraphs: [
          "De eerste stap was het modelleren van de contentstructuur in TypeScript. Waar ACF veldgroepen definieert als WordPress metadata, definiëren we in Forester OS TypeScript interfaces. Een Accommodation interface heeft een naam, locatiecoördinaten, een array van faciliteiten, een array van gekoppelde Activity ID's en een array van afbeeldingen.",
          "Die interfaces zijn de bron van waarheid voor de hele applicatie. De database, Firebase Firestore, slaat de data op in dezelfde structuur. De TypeScript compiler controleert of alle componenten de data correct gebruiken. Als een veld wordt hernoemd of toegevoegd, geeft TypeScript een foutmelding bij alle plekken die moeten worden bijgewerkt.",
          "Dat is het verschil met ACF. In ACF definieer je velden in de WordPress interface en hoop je dat je PHP-templates de goede veldnaam gebruiken. Er is geen typesysteem dat fouten voorkomt. In Forester OS is de structuur gegarandeerd consistent, van database tot scherm.",
        ],
      },
      {
        heading: "Statische generatie voor maximale snelheid",
        paragraphs: [
          "Elke accommodatie-, activiteit- en safaripagina wordt statisch gegenereerd via generateStaticParams. Bij het bouwproces haalt Next.js alle content op uit Firestore en genereert voor elke pagina een statisch HTML-bestand op het CDN. Een bezoek aan een accommodatiepagina is een CDN-hit: geen server, geen database query, geen PHP-rendering.",
          "De laadtijd van de accommodatiepagina's daalde van 4,2 seconden naar 0,9 seconden. De Lighthouse Performance-score steeg van 54 naar 93. Voor een website die leeft van eerste indrukken, de sfeer van de Afrikaanse bush, het gevoel dat je er al bijna bent, is die laadtijd het verschil tussen een bezoeker die blijft en een die wegklikt.",
          "Als het team een accommodatie aanpast, triggert de Forester OS beheerpaneel een webhookdie Next.js instrueert om alleen de gewijzigde pagina's opnieuw te genereren via Incremental Static Regeneration. Binnen een minuut staat de aanpassing live, zonder dat de rest van de site wordt aangeraakt.",
        ],
      },
      {
        heading: "Bidirectionele relaties zonder database-overhead",
        paragraphs: [
          "Het meest complexe deel van de architectuur is de relatie tussen content-typen. Een safari bestaat uit meerdere accommodaties. Een accommodatie is beschikbaar bij meerdere activiteiten. En een activiteit is beschikbaar bij meerdere accommodaties. In WordPress vereist dit ACF Relationship velden en aparte database-queries voor elke omgekeerde relatie.",
          "In Forester OS lossen we dit op met een denormalisatie strategie. Elke accommodatie slaat een array op met de IDs van de gekoppelde activiteiten. Bij het genereren van de accommodatiepagina haalt Next.js de bijbehorende activiteiten op uit Firestore in één query. Voor de activiteitenpagina doen we een Firestore query op het accommodatie-ID veld.",
          "Dat lijkt eenvoudiger dan WordPress, maar het is het ook. Forester OS heeft geen plugin nodig voor bidirectionele relaties. De logica zit in de query, niet in een externe tool. Dat maakt het eenvoudiger te begrijpen, te testen en te onderhouden.",
        ],
      },
      {
        heading: "Offerteformulier met directe Pipedrive-koppeling",
        paragraphs: [
          "Het offerteformulier liet de bezoeker accommodaties en activiteiten selecteren en die als aanvraag indienen. In de vorige WordPress versie was dat een Gravity Forms formulier met een Zapier-koppeling naar Pipedrive. Functioneel maar kwetsbaar: als Zapier een fout gaf, wist niemand het totdat een medewerker een gemiste aanvraag ontdekte.",
          "In Forester OS is het offerteformulier een React component dat de geselecteerde items opslaat in de lokale state. Bij het indienen stuurt de component een POST-verzoek naar een Next.js API route. Die API route valideert de data, maakt direct via de Pipedrive API een deal aan en stuurt een bevestigingsmail via Resend. Er is geen Zapier tussen, geen externe service die kan falen.",
          "De Pipedrive deal bevat alle reisdetails als gestructureerde notitie: welke accommodaties, welke activiteiten, de gewenste periode en het aantal personen. Het salesteam ziet direct een volledig beeld van de aanvraag en kan binnen een uur reageren met een offerte.",
        ],
      },
      {
        heading: "Q houdt de content actueel",
        paragraphs: [
          "The Africa Experience past hun aanbod regelmatig aan. Nieuwe lodges, seizoensgebonden activiteiten, gewijzigde routes. In WordPress betekende dat inloggen, de juiste post vinden, de velden aanpassen en opslaan. In Forester OS werkt dat hetzelfde via het beheerpaneel, maar Q bewaakt ook de kwaliteit van de content.",
          "Q signaleert accommodatiepagina's die minder bezoekers trekken dan vergelijkbare pagina's, pagina's met dunne beschrijvingen die een uitbreiding kunnen gebruiken, en zoektermen waarop de website impressies genereert maar weinig kliks haalt. Die signalen vertaalt Q naar concrete acties die het team in het beheerpaneel kan doorvoeren.",
          "Dat is het verschil tussen een website die je oplevert en vergeet en een website die actief bijdraagt aan de groei van het bedrijf. Forester OS groeit mee met het aanbod en stuurt bij op basis van wat de data laat zien.",
        ],
      },
      {
        heading: "Wat dit betekent voor andere complexe websites",
        paragraphs: [
          "The Africa Experience is niet de enige klant met een complexe contentstructuur. Productcatalogi, portfolioplatformen, dienstverleners met veel varianten in hun aanbod: allemaal situaties waarbij de combinatie van TypeScript data models, statische generatie en een directe koppeling met het CRM beter werkt dan WordPress met plugins.",
          "De investering is hoger dan een WordPress site. De bouwtijd is langer, de architectuur vraagt meer doordacht werk aan het begin. Maar het resultaat is een platform dat sneller is, beter vindbaar is en minder onderhoud vraagt op de lange termijn.",
          "Wil je weten of jouw website gebaat is bij deze aanpak? We kijken graag mee. Een eerlijk gesprek over wat het oplevert en wat het kost.",
        ],
      },
    ],
    faqs: [
      {
        q: "Kan bestaande WordPress content worden gemigreerd naar Forester OS?",
        a: "Ja. We exporteren de content uit WordPress, converteren die naar de TypeScript data structuur van Forester OS en importeren het in Firestore. Teksten, afbeeldingen en relaties tussen content-typen worden overgezet.",
      },
      {
        q: "Hoe lang duurt een migratie van WordPress naar Forester OS?",
        a: "Afhankelijk van de hoeveelheid content en de complexiteit van de structuur. Voor The Africa Experience, met honderden pagina's en complexe relaties, nam de volledige migratie en herbouw tien weken.",
      },
      {
        q: "Kan ik als niet-technische beheerder Forester OS bijhouden?",
        a: "Ja. Het beheerpaneel van Forester OS is ontworpen voor niet-technische gebruikers. Content toevoegen, afbeeldingen uploaden, relaties aanpassen: allemaal via een eenvoudige interface, zonder code.",
      },
    ],
    related: ["vloot-en-projecten-verbinden-voor-roll-group", "webshop-bouwen-voor-mkb"],
    cta: {
      label: "Wil je weten of Forester OS past bij jouw website?",
      linkLabel: "Plan een gesprek",
      href: "/contact",
    },
  },

  "offertes-automatisch-via-pipedrive-en-zapier": {
    slug: "offertes-automatisch-via-pipedrive-en-zapier",
    tag: "Automatisering",
    date: "Juni 2025",
    dateTime: "2025-06-09",
    readTime: "6 min",
    img: "/images/q-relaxing.jpg",
    metaTitle: "Offerteautomatisering via Forester OS en Pipedrive API: van aanvraag tot deal | Webgrowth",
    metaDescription: "Hoe we een merkartikelleverancier hielpen van 25 minuten handmatig werk per aanvraag naar een volledig geautomatiseerde offerteflow via Forester OS en de Pipedrive API.",
    title: "Van websiteformulier naar kant-en-klare deal: offertes zonder Zapier",
    intro: "Een merkartikelleverancier die gepersonaliseerde sokken, zwemkleding en tassen levert aan bedrijven, verwerkte elke offerteaanvraag handmatig. Aanvraag ontvangen, overtypein het CRM, prijs berekenen, offerte opstellen, terugsturen. Gemiddeld 25 minuten per aanvraag, twintig aanvragen per week. We automatiseerden het hele traject via Forester OS, zonder Zapier of Gravity Forms in de mix.",
    content: [
      {
        heading: "Het probleem met Zapier als verbindingslaag",
        paragraphs: [
          "De eerste versie van deze automatisering liep via Gravity Forms op WordPress en Zapier. Het werkte. Totdat het niet meer werkte. Een Zapier-stap die een timeout gaf, een Gravity Forms update die een veldnaam veranderde, een Google Sheet die te groot werd voor de Zapier lookup. Elke keer was het puzzelen om te achterhalen waar in de keten iets was misgegaan.",
          "Zapier is een uitstekende tool om snel iets te verbinden. Maar voor een bedrijfsproces waarop je dagelijks vertrouwt, is het een kwetsbare schakel. Je hebt geen inzicht in wat er intern gebeurt, geen logging die je zelf beheert en geen manier om fouten proactief op te vangen. Als er iets misgaat, merk je het pas als een aanvraag vermist wordt.",
          "Toen we dit proces opnieuw bouwden op Forester OS, besloten we Zapier volledig uit de flow te halen. Alles loopt nu via Next.js API routes die we zelf beheren, monitoren en kunnen debuggen.",
        ],
      },
      {
        heading: "Een gestructureerd formulier als startpunt",
        paragraphs: [
          "Een slecht formulier is de basis van handmatig werk. Als de inputdata niet consistent is, kun je niets automatiseren. De vorige formulierversie had een vrij tekstveld voor de aanvraag. De ene klant schreef 'wil graag 200 sokken met logo', de andere schreef een heel verhaal over het event en vergat het aantal te vermelden.",
          "We bouwden het formulier opnieuw als een React component in Forester OS met gestructureerde velden: producttype via een select, aantallen per variant als numerieke inputs, leveringsdatum via een datepicker en gewenste aanpassingen via checkboxes. Conditionele logica toont extra velden alleen als ze relevant zijn voor de gekozen opties.",
          "De formulierdata wordt client-side gevalideerd met Zod voordat het naar de server gaat. Dezelfde Zod schema wordt server-side hergebruikt in de API route voor een tweede validatielaag. Zo komen er nooit onvolledige of inconsistente aanvragen door.",
        ],
      },
      {
        heading: "Prijsberekening server-side in de API route",
        paragraphs: [
          "De prijslogica zit in een Next.js API route, niet in een externe service. Bij elke aanvraag wordt de relevante prijstabel opgehaald uit Firestore, berekent de route de prijs per product op basis van producttype, aantal en opties, en telt het totaal op. Dat zijn drie regels TypeScript, niet een Zapier workflow van acht stappen.",
          "De prijstabellen worden beheerd via het Forester OS dashboard. Het salesteam kan prijzen aanpassen zonder developer en zonder iets in een Google Sheet bij te houden. Elke aanpassing in het dashboard is direct van kracht voor de volgende aanvraag.",
          "Als een aangevraagd aantal net buiten de standaard staffels valt, markeert de API route de deal in Pipedrive als 'prijscheck vereist'. Het salesteam ziet die flag in hun dashboard en weet dat ze even handmatig naar de prijs moeten kijken voor ze de offerte versturen.",
        ],
      },
      {
        heading: "Directe Pipedrive API integratie",
        paragraphs: [
          "Na de prijsberekening maakt de API route direct een deal aan via de Pipedrive REST API. Geen Zapier tussenin. De deal bevat klantgegevens, de volledige productspecificatie met berekende prijzen en het totaal, de gewenste leveringsdatum en een link naar de oorspronkelijke aanvraag in Forester OS.",
          "We gebruiken de Pipedrive API ook om de deal in de juiste fase van de pipeline te plaatsen en het salesteam te taggen als verantwoordelijke. Zo belandt elke aanvraag direct op de juiste plek in het CRM, klaar om door een specifieke medewerker opgepakt te worden.",
          "Als de Pipedrive API call mislukt, slaat Forester OS de aanvraag op als pending en herprobeert het na vijf minuten. Na drie mislukte pogingen stuurt het een notificatie naar de technische beheerder. Geen stille fouten, geen gemiste aanvragen.",
        ],
      },
      {
        heading: "Bevestigingsmail met indicatieprijs via Resend",
        paragraphs: [
          "Direct na het aanmaken van de Pipedrive deal stuurt Forester OS een bevestigingsmail naar de klant via Resend. De mail bevat een samenvatting van de aanvraag inclusief indicatieprijs op basis van de berekening. Dat is geen definitieve offerte, dat melden we ook, maar het laat zien dat de aanvraag volledig is verwerkt.",
          "Klanten die direct een inhoudelijke bevestiging krijgen, zijn minder geneigd om bij een concurrent een aanvraag te doen terwijl ze wachten op de definitieve offerte. De mail bevat ook een directe link naar een kortgeplande afspraak via Calendly, zodat de meest geinteresseerde klanten direct een gesprek kunnen inplannen.",
          "De mailtemplate is gebouwd als React-component via Resend, dezelfde taal als de rest van Forester OS. Aanpassingen in de mailinhoud doen we in dezelfde codebase als de rest van het platform, niet in een extern e-mailtool.",
        ],
      },
      {
        heading: "Het resultaat: zes uur per week terug",
        paragraphs: [
          "Na de implementatie kostte het verwerken van een offerteaanvraag gemiddeld drie minuten in plaats van 25. Die drie minuten zijn de tijd die het salesteam nodig heeft om de automatisch aangemaakte deal in Pipedrive te checken en de definitieve offerte aan te passen als de indicatieprijs afwijkt.",
          "Bij twintig aanvragen per week is dat meer dan zes uur per week minder administratief werk. En de data in Pipedrive is consistent. Alle deals hebben dezelfde veldopbouw, dezelfde structuur, dezelfde kwaliteit. Dat maakt rapporteren op conversieratio, gemiddelde ordergrootte en doorlooptijd eindelijk mogelijk.",
          "Q analyseert de aanvraagdata maandelijks. Welke producten worden het meest aangevraagd, op welke momenten, met welke aantallen. Die inzichten worden gebruikt om de website en het offerteproces verder te optimaliseren. Automatisering als startpunt, niet als eindpunt.",
        ],
      },
    ],
    faqs: [
      {
        q: "Kan dit ook als ik nog geen Forester OS gebruik?",
        a: "De directe Pipedrive API integratie is ook te bouwen als een losse Next.js applicatie, zonder het volledige Forester OS platform. Neem contact op om te kijken wat past bij jouw situatie.",
      },
      {
        q: "Werkt dit ook met andere CRM-systemen dan Pipedrive?",
        a: "Ja. We hebben vergelijkbare flows gebouwd voor HubSpot, Teamleider en Salesforce. De Forester OS API-laag is CRM-agnostisch, alleen de specifieke API-aanroep verschilt per systeem.",
      },
      {
        q: "Wat als onze prijslogica te complex is voor een automatische berekening?",
        a: "We bouwen dan een hybride flow: het formulier verzamelt de data, de API route maakt een deal aan met een 'handmatige prijsbepaling' vlag en het salesteam berekent de prijs zelf in Pipedrive. Je bespaart nog steeds de datatranscriptie, ook al is de prijsberekening handmatig.",
      },
    ],
    related: ["magic-link-voor-makkelijker-inloggen", "webshop-bouwen-voor-mkb"],
    cta: {
      label: "Wil je weten welke processen bij jou geautomatiseerd kunnen worden?",
      linkLabel: "Plan een gesprek",
      href: "/contact",
    },
  },

  "vloot-en-projecten-verbinden-voor-roll-group": {
    slug: "vloot-en-projecten-verbinden-voor-roll-group",
    tag: "Maatwerk",
    date: "Juni 2025",
    dateTime: "2025-06-02",
    readTime: "5 min",
    img: "/images/developer-character.jpg",
    metaTitle: "Next.js maatwerk voor Roll Group: vloot en projecten dynamisch verbinden | Webgrowth",
    metaDescription: "Hoe we op Forester OS een Next.js platform bouwden waarbij Roll Group ziet welke schepen op welke projecten zijn ingezet, met ISR en TypeScript relaties.",
    title: "Vloot en projecten slim koppelen voor Roll Group op Forester OS",
    intro: "Roll Group en Browema International opereren in de maritieme sector. Ze brengen zware lading over water, werken aan infrastructuurprojecten en leveren gespecialiseerd materieel. Hun website toonde een vloot en een lijst projecten als losse pagina's. De verbinding ertussen was nergens zichtbaar. We bouwden dat op Forester OS in Next.js, zonder WordPress, zonder plugins.",
    content: [
      {
        heading: "De vraag achter de vraag",
        paragraphs: [
          "Roll Group wilde geen mooiere website. Ze wilden een website die laat zien wat ze kunnen. Er is een groot verschil tussen een pagina met scheepsspecificaties en een pagina die laat zien dat de Bigroll KMC Beaumont bij het Haringvlietdam-project is ingezet, samen met de Browema hefeiland, voor een opdrachtgever in de bouw.",
          "Dat verhaal vertellen vereist een informatiestructuur waarbij projecten en schepen met elkaar verbonden zijn. Een bezoeker die een schip bekijkt, ziet zijn projectgeschiedenis. Een bezoeker die een project bekijkt, ziet de ingezette vloot. Die verbinding moet automatisch worden bijgehouden, niet handmatig.",
          "In de vorige WordPress versie waren dat losse pagina's met handmatige links. Als een project werd toegevoegd, moest een medewerker ook de scheepspagina's bijwerken. Dat werd niet altijd gedaan, waardoor de informatie op de site inconsistent was.",
        ],
      },
      {
        heading: "TypeScript interfaces als datamodel",
        paragraphs: [
          "We begonnen met het definiëren van drie TypeScript interfaces in Forester OS: Project, Vessel en Equipment. Een Project heeft een naam, opdrachtgever, locatie, periode en een array van Vessel- en Equipment-IDs. Een Vessel heeft specificaties, een foto en een metadata-veld. Equipment idem.",
          "Die interfaces zijn de bron van waarheid. Firestore slaat de data op in dezelfde structuur. Next.js haalt de data op bij het bouwproces en genereert statische pagina's voor elk project, schip en materieelobject. TypeScript zorgt ervoor dat alle onderdelen van de applicatie dezelfde structuur gebruiken. Er zijn geen veldnamen die ergens niet kloppen.",
          "De relatie tussen projecten en schepen is vastgelegd in de Project interface als een array van Vessel-IDs. Voor de omgekeerde relatie, welke projecten heeft een schip uitgevoerd, doen we bij het bouwen van de scheepspagina een Firestore query op het vessel-ID. Dat resultaat wordt meegeleverd als statische prop aan de pagina.",
        ],
      },
      {
        heading: "Statische generatie met ISR voor actuele data",
        paragraphs: [
          "Alle project-, schepen- en materieelpagina's worden statisch gegenereerd via generateStaticParams. Dat betekent dat elke pagina als een statisch HTML-bestand op het CDN staat. Geen server die bij elk bezoek een database raadpleegt, geen PHP-rendering.",
          "De laadtijd van de projectpagina's was 0,7 seconden na de migratie. In de WordPress versie was dat 3,8 seconden door de zware custom queries op de ACF relationship-velden. Voor een zakelijke website waar potentiele opdrachtgevers hun eerste indruk opdoen, is dat een significant verschil.",
          "Als het team een nieuw project toevoegt via het Forester OS beheerpaneel, triggert het systeem automatisch een Incremental Static Regeneration voor de relevante pagina's. De projectpagina, de scheepspagina's van de ingezette vloot en de projectenindex worden herbouwd. Binnen een minuut is de nieuwe informatie live, de rest van de site wordt niet aangeraakt.",
        ],
      },
      {
        heading: "Filterbare projectenindex zonder server",
        paragraphs: [
          "De projectenpagina toont alle projecten met filteropties op type, regio en ingezet schip. In de WordPress versie werkte dat via AJAX requests naar de server. Elke filterkeuze triggerde een nieuwe database query.",
          "In Forester OS is de volledige projectenindex ingebakken als JSON in de pagina bij het bouwproces. De filter werkt client-side in React: een state-update op basis van de filterkeuze, een gefilterde array op de JSON-data. Geen server, geen latency.",
          "Voor de huidige omvang van de projectencatalogus, tientallen projecten, is dit de ideale aanpak. Als de catalogus ooit naar honderden projecten groeit, schakelen we over naar een Algolia-integratie voor server-side filtering. Forester OS is daar architectureel klaar voor.",
        ],
      },
      {
        heading: "Beheer via het Forester OS dashboard",
        paragraphs: [
          "Het team van Roll Group en Browema beheert de content via het Forester OS beheerpaneel. Een nieuw project aanmaken duurt vijf minuten: naam, opdrachtgever, foto, periode en de selectie van ingezette schepen en materieel via een zoekinterface.",
          "Q signaleert maandelijks welke pagina's minder bezoekers trekken dan vergelijkbare projectpagina's, welke scheepsbeschrijvingen aan een update toe zijn en welke zoektermen impressies genereren maar weinig kliks. Die inzichten landen als concrete acties in het dashboard van de beheerder.",
          "In de drie maanden na lancering heeft het team vijftien nieuwe projecten toegevoegd en acht scheepspagina's bijgewerkt. Geen developer nodig gehad. De verbanden tussen schepen en projecten worden automatisch bijgehouden.",
        ],
      },
      {
        heading: "Wat dit aantoont over Next.js voor zakelijke platforms",
        paragraphs: [
          "De keuze voor Next.js op Forester OS in plaats van WordPress is hier volledig gerechtvaardigd door de eisen van het project. Snelheid, consistente datastructuur, automatische relaties, zelfbeheer en maandelijkse inzichten via Q. Die combinatie is in WordPress met plugins niet te realiseren zonder constante technische schuld.",
          "De sleutel zit in de architectuur. TypeScript interfaces zorgen voor consistentie. Statische generatie zorgt voor snelheid. Firestore zorgt voor flexibele opslag. En Forester OS bindt het samen met een beheerpaneel dat werkt voor niet-technische gebruikers.",
          "Voor bedrijven in sectoren als logistiek, bouw of industrie die hun expertise willen laten zien via projectreferenties, is dit het patroon dat werkt.",
        ],
      },
    ],
    faqs: [
      {
        q: "Hoe werken de bidirectionele relaties in Next.js zonder database queries per pagina?",
        a: "Bij het bouwproces haalt Next.js alle data op en berekent de relaties. De scheepspagina krijgt de gekoppelde projecten meegeleverd als statische prop. Geen runtime queries, alles is vooraf berekend.",
      },
      {
        q: "Wat als er honderden projecten zijn?",
        a: "Dan schakelen we over van client-side filtering naar Algolia voor server-side search. Forester OS ondersteunt dat als drop-in vervanging van de huidige filterlogica.",
      },
      {
        q: "Is dit ook voor andere sectoren toepasbaar?",
        a: "Ja. Vastgoedplatforms, productcatalogi, portfoliosites met complexe relaties: het patroon is identiek. TypeScript interfaces, statische generatie en een Firestore backend werken voor elk scenario met gestructureerde, gerelateerde content.",
      },
    ],
    related: ["reiswebsite-voor-the-africa-experience", "webshop-bouwen-voor-mkb"],
    cta: {
      label: "Wil je een website die jouw expertise laat zien?",
      linkLabel: "Vertel ons over je project",
      href: "/contact",
    },
  },

  "dynamische-tags-met-acf-repeater": {
    slug: "dynamische-tags-met-acf-repeater",
    tag: "Maatwerk",
    date: "Mei 2025",
    dateTime: "2025-05-26",
    readTime: "5 min",
    img: "/images/forester-character.jpg",
    metaTitle: "Dynamische content in Next.js: TypeScript vs ACF Repeater | Webgrowth",
    metaDescription: "Hoe we in Forester OS dynamische productkenmerken en faciliteiten bouwen met TypeScript arrays in plaats van ACF Repeater, en waarom dat beter werkt.",
    title: "Van ACF Repeater naar TypeScript: hoe Forester OS dynamische content beheert",
    intro: "Een van de meest gestelde vragen als we klanten migreren van WordPress naar Forester OS is: wat vervangt ACF Repeater? In WordPress gebruikten we Repeater velden voor dynamische lijsten van faciliteiten, productkenmerken en reisopties. In Forester OS op Next.js doen we dat anders, met TypeScript arrays in Firestore en React componenten die de structuur afdwingen. Hier is het verschil en waarom het beter werkt.",
    content: [
      {
        heading: "Wat ACF Repeater doet en waar het wringt",
        paragraphs: [
          "ACF Repeater is een veldtype in Advanced Custom Fields waarbij een WordPress beheerder meerdere rijen kan toevoegen aan een pagina, elk met dezelfde velden. Voor een accommodatie: naam van de faciliteit, een icoon en een categorie. Eenvoudig te beheren, consistent in opmaak. Voor zijn doel werkt het goed.",
          "Maar er zijn drie dingen die wringen. Ten eerste is de data opgeslagen als WordPress post meta, een key-value opslag die niet is ontworpen voor geneste structuren. Complexe repeaters worden onleesbare serialized PHP-strings in de database. Dat maakt het moeilijk om de data te exporteren, te migreren of te gebruiken in externe systemen.",
          "Ten tweede is er geen typesysteem. Als je een veldnaam wijzigt in ACF, breekt elke template die die naam gebruikt, zonder waarschuwing. Ten derde schaalt ACF Repeater slecht als je dezelfde data op meerdere plekken wil tonen of filteren. De query-overhead op grote datasets is merkbaar.",
        ],
      },
      {
        heading: "TypeScript arrays als Forester OS alternatief",
        paragraphs: [
          "In Forester OS definiëren we dezelfde structuur als een TypeScript interface met een array-veld. Een Accommodation interface heeft een facilities veld van het type Facility array. Een Facility heeft een name, een icon en een category. Dat is precies dezelfde structuur als een ACF Repeater, maar dan als getypte TypeScript interface.",
          "Firestore slaat de faciliteiten op als een JSON array in het accommodatie-document. Dat is leesbaar, exporteerbaar en direct bruikbaar in elke tool die JSON kan lezen. Geen serialized PHP, geen meta-tabel overhead.",
          "TypeScript controleert op elk punt in de applicatie of de data de juiste structuur heeft. Een component die faciliteiten toont, krijgt een compile-fout als het veld niet bestaat of een verkeerd type heeft. Dat voorkomt bugs die in WordPress alleen zichtbaar worden als een pagina al live is.",
        ],
      },
      {
        heading: "Het Forester OS beheerpaneel als vervanger van ACF",
        paragraphs: [
          "TypeScript interfaces zijn geweldig voor developers, maar een beheerder werkt niet in de code. Forester OS genereert een beheerpaneel op basis van de TypeScript interfaces. Een array-veld wordt automatisch weergegeven als een lijsteditor: rijen toevoegen, bewerken en verwijderen via een eenvoudige interface.",
          "Voor de faciliteiten van een accommodatie ziet de beheerder een lijst met drie kolommen: naam, icoon en categorie. Een rij toevoegen kost tien seconden. De interface is consistent voor alle array-velden in het systeem, ongeacht het specifieke contenttype.",
          "Q bewaakt de volledigheid van de data. Als een accommodatie minder faciliteiten heeft dan vergelijkbare accommodaties, signaleert Q dat als een kans. Als een faciliteitsomschrijving mist terwijl vergelijkbare accommodaties die wel hebben, krijgt de beheerder een aanbeveling.",
        ],
      },
      {
        heading: "Dynamische weergave in React componenten",
        paragraphs: [
          "De faciliteiten worden weergegeven via een React component dat de array doorloopt en voor elke faciliteit een visueel element rendert. Chips met een categoriekleur, kaarten met een icoon, een gestructureerde tabel: de weergave is volledig bepaald door de component, niet door de data.",
          "Voor de merkartikelleverancier zijn productkenmerken weergegeven als interactieve chips. Eco-vriendelijke materialen krijgen automatisch een groene achtergrond op basis van het categorie-veld. De kleur is hardcoded in het component als een mapping van categorie naar kleur. Geen extra veld nodig in de data, de logica zit in de presentatielaag.",
          "Filteren op kenmerken werkt client-side via React state. Een useState hook houdt bij welke filters actief zijn, een useMemo berekent de gefilterde lijst opnieuw als de filters veranderen. Geen server request, geen latency, instant resultaat voor de bezoeker.",
        ],
      },
      {
        heading: "Hetzelfde patroon op meerdere plekken",
        paragraphs: [
          "Een van de grote voordelen van TypeScript interfaces boven ACF Repeater is hergebruik. Als de Facility interface op meerdere pagina's wordt gebruikt, is de definitie op één plek. Een wijziging in de interface propageert automatisch naar alle plekken die die interface gebruiken.",
          "In WordPress is dat lastiger. Een ACF-veldgroep kan worden gekoppeld aan meerdere post types, maar de templates moeten elk afzonderlijk worden bijgewerkt als de weergave verandert. In Forester OS pas je de React component aan en is de wijziging op alle pagina's die de component gebruiken direct doorgevoerd.",
          "Dat is typisch het soort technische schuld die je in WordPress langzaam opbouwt. Elke keer een kleine afwijking, totdat je tien varianten van hetzelfde patroon hebt die allemaal net iets anders werken. In Forester OS is dat architectureel niet mogelijk.",
        ],
      },
      {
        heading: "Voor wie maakt dit verschil?",
        paragraphs: [
          "Als je een simpele website hebt met een beperkt aantal vaste pagina's die zelden worden aangepast, is het verschil tussen ACF Repeater en TypeScript arrays weinig relevant. Gebruik wat je kent.",
          "Maar als je een website beheert met tientallen productpagina's, accommodaties of dienstenpagina's die regelmatig worden bijgewerkt, als je de data wil hergebruiken in een app of externe service, of als je wil dat Q je helpt de content te optimaliseren, dan is de TypeScript aanpak van Forester OS de betere keuze.",
          "We migreren regelmatig WordPress sites naar Forester OS en zien bij elke migratie hetzelfde patroon: de initiële investering is hoger, maar na zes maanden is het beheer sneller, de fouten zijn minder en de website presteert beter.",
        ],
      },
    ],
    faqs: [
      {
        q: "Kan bestaande ACF Repeater data worden gemigreerd naar Forester OS?",
        a: "Ja. ACF biedt een exportfunctie naar JSON. We converteren die export naar de TypeScript interface structuur en importeren het in Firestore. De data is intact, alleen de opslag en de beheertool veranderen.",
      },
      {
        q: "Is het Forester OS beheerpaneel net zo makkelijk als WordPress?",
        a: "Voor de meeste beheertaken wel. Het paneel is specifiek ontworpen voor de contentstructuur van jouw website, waardoor je minder ruis hebt dan in een generiek CMS. Het is anders dan WordPress, maar na een korte introductie gaat het zelfstandig.",
      },
      {
        q: "Wat als ik toch WordPress wil houden maar betere dynamische content nodig heb?",
        a: "Dan is ACF Pro met Repeater nog steeds een goede keuze voor de meeste use cases. We adviseren dan wel om de PHP-templates te moderniseren en een goed cachelayer toe te voegen om de performance op peil te houden.",
      },
    ],
    related: ["reiswebsite-voor-the-africa-experience", "vloot-en-projecten-verbinden-voor-roll-group"],
    cta: {
      label: "Wil je weten of Forester OS past bij jouw website?",
      linkLabel: "Plan een gesprek",
      href: "/contact",
    },
  },


  "laadtijd-website-verbeteren": {
    slug: "laadtijd-website-verbeteren",
    tag: "Performance",
    date: "April 2025",
    dateTime: "2025-04-01",
    readTime: "8 min",
    img: "/images/developer-character.jpg",
    metaTitle: "Laadtijd website verbeteren: zo deden wij het bij 12 MKB-websites | Webgrowth",
    metaDescription: "Een trage website kost je klanten en Google-posities. We laten zien welke technische ingrepen de laadtijd van klantwebsites met gemiddeld 40% verbeterden.",
    title: "Hoe we de laadtijd van klantwebsites met 40% hebben verbeterd",
    intro: "Vorig jaar namen we een nieuwe klant aan. Installatiebedrijf, degelijk werk, goede reviews. Maar zijn website laadde in 7,4 seconden. Op mobiel. Hij snapte niet waarom er zo weinig aanvragen binnenkwamen, terwijl hij dagelijks te zien was in zijn stad. Na drie weken werk was de laadtijd 3,1 seconden. De maand erna kwamen er elf aanvragen binnen. Dat is niet toevallig.",
    content: [
      {
        heading: "Waarom een trage website je meer kost dan je denkt",
        paragraphs: [
          "De meeste ondernemers weten wel dat een trage website niet ideaal is. Maar ze onderschatten hoe hard het doorwerkt. Google heeft in meerdere onderzoeken laten zien dat de kans dat een bezoeker vertrekt meer dan verdubbelt als een pagina langer dan drie seconden laadt. Op mobiel is dat al bij twee seconden.",
          "Dat merken we steeds opnieuw in de praktijk. Websites met een laadtijd van vijf seconden of meer hebben structureel een hogere bounce rate dan websites die snel laden. Niet een beetje hoger. Soms twee keer zo hoog. En dan heb je het nog niet over de Google-ranking. Sinds de Core Web Vitals een officieel rankingfactor zijn, heeft snelheid direct invloed op waar je staat in de zoekresultaten.",
          "Een trage website is dus niet alleen vervelend voor de bezoeker. Het is een reden waarom je minder goed gevonden wordt, en een reden waarom de mensen die je wél vinden alsnog weggaan.",
        ],
      },
      {
        heading: "Wat we zien als we een website binnenkrijgen",
        paragraphs: [
          "We beginnen altijd met een Lighthouse-audit via Google Chrome DevTools, aangevuld met een meting in GTmetrix. Dat geeft ons vier scores: Performance, Accessibility, Best Practices en SEO. De Performance-score is het meest directe signaal voor laadtijd, maar de andere drie vertellen ook iets over de technische staat van een website.",
          "Bij de meeste MKB-websites die we binnenkrijgen zien we dezelfde problemen. Afbeeldingen die gewoon als PNG of JPEG van een fotocamera zijn geüpload, soms meerdere megabytes per stuk. Externe scripts van analytics, chatwidgets of advertentiepixels die de laadtijd blokkeren. En hosting die in een datacentrum ergens ver weg staat, waardoor elke request al een halve seconde kost voordat er ook maar iets geladen is.",
          "Drie oorzaken. Bijna altijd. De verhouding verschilt per website, maar het zijn steeds dezelfde boosdoeners.",
        ],
      },
      {
        heading: "Afbeeldingen zijn verantwoordelijk voor het grootste deel van het probleem",
        paragraphs: [
          "We beginnen altijd met afbeeldingen, omdat dat de meeste winst oplevert met de minste technische complexiteit. Een foto van 3,2 megabyte die je omzet naar WebP en comprimeert, kan zomaar 200 kilobyte worden. Zelfde beeld, vijftien keer kleiner bestand.",
          "In Next.js, het framework dat we gebruiken, is dit ingebouwd via de Image-component. Die comprimeert automatisch, converteert naar WebP of AVIF afhankelijk van de browser, en laadt afbeeldingen alleen wanneer ze in beeld komen. Voor websites op andere platforms zoals WordPress gebruiken we plugins zoals ShortPixel of Imagify voor de compressie, en native lazy loading voor het uitgesteld laden.",
          "Bij een klant in de bouwsector had de homepage elf grote afbeeldingen die allemaal tegelijk werden geladen, ook de afbeeldingen die pas zichtbaar werden als je naar beneden scrollde. Na het toepassen van lazy loading en compressie daalde de totale paginagrootte van 9,4 MB naar 1,1 MB. De Lighthouse-score voor Performance steeg van 34 naar 81.",
        ],
      },
      {
        heading: "Scripts die alles blokkeren terwijl niemand erom vraagt",
        paragraphs: [
          "Het tweede probleem zijn externe scripts. Elke website heeft ze. Google Analytics, Facebook Pixel, een live chat widget, een cookiebanner van een externe partij. Elk van die scripts haalt iets op van een externe server. En als die scripts worden geladen voordat de pagina zichtbaar is, wacht de bezoeker.",
          "De oplossing is niet om die scripts weg te halen, maar om ze slim te laden. Niet-kritische scripts laad je asynchroon of je stelt ze uit tot nadat de pagina zichtbaar is. In de praktijk betekent dat: het toevoegen van defer of async aan scripttags, of in het geval van een tag manager het instellen van triggers die scripts pas laden na interactie van de bezoeker.",
          "We zien regelmatig websites waarbij de chatwidget van Intercom of Tidio de laadtijd met meer dan een seconde vertraagt. Terwijl die widget pas relevant wordt als iemand een vraag wil stellen, dus lang nadat de pagina geladen is. Door dat script uit te stellen merkt de bezoeker niets, maar laadt de pagina een stuk sneller.",
        ],
      },
      {
        heading: "Hosting: het fundament dat vaak over het hoofd wordt gezien",
        paragraphs: [
          "Goede hosting is onzichtbaar. Slechte hosting is de reden waarom een website traag is ondanks alle optimalisaties. We zien het regelmatig: iemand heeft alles goed gedaan qua afbeeldingen en scripts, maar de Time to First Byte (TTFB) is 800 milliseconden of meer. Dat betekent dat de server er bijna een seconde over doet om überhaupt te beginnen met het sturen van data.",
          "Een TTFB onder de 200 milliseconden is wat Google als goed beschouwt. Alles daarboven is al een signaal dat er iets mis is met de server of de configuratie.",
          "Voor nieuwe klanten zetten we websites op bij Vercel of Cloudflare Pages, met edge hosting. Dat betekent dat de website wordt geserveerd vanuit een datacentrum dicht bij de bezoeker, in plaats van één centrale server ergens in Amsterdam of Frankfurt. Voor bestaande klanten kijken we of een overstap naar betere hosting mogelijk is, of we stellen minimaal server-side caching in om de TTFB te verlagen.",
        ],
      },
      {
        heading: "Core Web Vitals: wat Google er echt van vindt",
        paragraphs: [
          "Google meet laadtijd niet als één getal. Ze kijken naar drie specifieke metrics die samen de Core Web Vitals vormen. LCP, de Largest Contentful Paint, meet hoe lang het duurt voordat het grootste zichtbare element geladen is. CLS, de Cumulative Layout Shift, meet hoeveel de pagina verschuift terwijl hij laadt. FID, de First Input Delay, meet hoe snel de pagina reageert op de eerste interactie van een bezoeker.",
          "Voor een goede score wil je een LCP onder de 2,5 seconden, een CLS onder de 0,1 en een FID onder de 100 milliseconden. Bij de meeste websites die we binnenkrijgen zijn twee van de drie in het rood. Na optimalisatie zitten we bij bijna alle klanten in het groen.",
          "Wat weinig mensen weten is dat Google deze scores meet op basis van echte gebruikersdata, niet alleen op basis van laboratoriummetingen. Dat betekent dat trage verbindingen en oudere telefoons meetellen. Een website die snel laadt op je MacBook kan alsnog slecht scoren als mobiele gebruikers een slechte ervaring hebben.",
        ],
      },
      {
        heading: "Wat het opleverde bij twaalf klanten",
        paragraphs: [
          "Over het afgelopen jaar hebben we bij twaalf klantwebsites een volledige performance-optimalisatie gedaan. De gemiddelde laadtijd daalde van 6,1 seconden naar 3,4 seconden. Dat is een verbetering van 44%.",
          "Concrete resultaten per klant variëren, maar we zien consistent dezelfde patronen. Bounce rates dalen gemiddeld met 15 tot 22%. Sessieduur stijgt. En in gevallen waarbij de website al op SEO was ingericht, verbeteren de rankings in Google binnen vier tot acht weken na de optimalisatie.",
          "De klant die we aan het begin noemden, het installatiebedrijf, staat nu op positie 4 voor zijn belangrijkste zoekterm in zijn stad. Hij stond er eerder niet eens op de eerste pagina. De website is niet herschreven. Er zijn geen nieuwe pagina's aangemaakt. Alleen technische verbeteringen.",
        ],
      },
      {
        heading: "Wat je zelf kunt controleren",
        paragraphs: [
          "Je kunt de laadtijd van je eigen website gratis meten via PageSpeed Insights van Google. Vul je URL in en je krijgt direct een score en een lijst met verbeterpunten, gesorteerd op impact. De lijst is technisch, maar de prioriteiten zijn duidelijk.",
          "Let op de sectie 'Opportunities'. Daar staan de aanpassingen die de meeste tijdwinst opleveren. Grote afbeeldingen comprimeren staat er bijna altijd als eerste. Daarna volgt vaak het uitstellen van JavaScript of het verwijderen van ongebruikte CSS.",
          "Kom je er niet uit, of wil je weten hoe jouw website er op alle fronten voor staat, dan doen we een gratis website APK. Geen verkooppraatje, gewoon een eerlijk beeld van wat er speelt en wat het oplevert als je het aanpakt.",
        ],
      },
    ],
    faqs: [
      {
        q: "Hoeveel sneller wordt mijn website na een performance-optimalisatie?",
        a: "Dat hangt af van de huidige staat. Bij websites die we binnenkrijgen zien we gemiddeld een verbetering van 30 tot 50% in laadtijd. Websites met veel ongecomprimeerde afbeeldingen of veel externe scripts profiteren het meest.",
      },
      {
        q: "Heeft laadtijd echt invloed op mijn Google-ranking?",
        a: "Ja. Sinds 2021 zijn de Core Web Vitals een officieel rankingfactor. Dat betekent dat snelheid direct meeweegt in je positie in de zoekresultaten, naast relevantie en autoriteit.",
      },
      {
        q: "Moet ik mijn hele website opnieuw laten bouwen voor een betere laadtijd?",
        a: "Meestal niet. De meeste winst zit in afbeeldingscompressie, scriptoptimalisatie en hosting. Dat zijn aanpassingen die we doen zonder de website opnieuw te bouwen.",
      },
      {
        q: "Wat is een goede laadtijd voor een website?",
        a: "Google adviseert een Largest Contentful Paint (LCP) van onder de 2,5 seconden. In de praktijk is alles onder de 3 seconden acceptabel, en onder de 2 seconden goed.",
      },
    ],
    related: ["automatische-contentoptimalisatie-mkb", "van-0-naar-1000-bezoekers-30-dagen"],
    cta: {
      label: "Wil je weten hoe snel jouw website is?",
      linkLabel: "Doe de gratis website APK",
      href: "/website-apk",
    },
  },

  "automatische-contentoptimalisatie-mkb": {
    slug: "automatische-contentoptimalisatie-mkb",
    tag: "SEO",
    date: "Maart 2025",
    dateTime: "2025-03-01",
    readTime: "7 min",
    img: "/images/forester-character.jpg",
    metaTitle: "Automatische SEO-contentoptimalisatie voor MKB: wat werkt en wat niet | Webgrowth",
    metaDescription: "We trainden Q om automatisch SEO-kansen te spotten op MKB-websites. Na drie maanden testen: eerlijke conclusies over wat wel en niet werkt.",
    title: "Automatische contentoptimalisatie: wat werkt en wat niet",
    intro: "We hebben Q getraind om automatisch SEO-kansen te spotten op klantwebsites. Het idee was simpel: laat Q elke pagina analyseren, vergelijk met zoekdata en stel verbeteringen voor. Na drie maanden en zeventien klantwebsites weten we wat het oplevert en waar het botst.",
    content: [
      {
        heading: "Waarom de meeste MKB-websites slecht vindbaar zijn",
        paragraphs: [
          "Een website aanmaken is makkelijker geworden. Een website die gevonden wordt is dat niet. We zien bij bijna elke nieuwe klant dezelfde patronen: dienstpagina's met twintig woorden tekst, titels die beginnen met de bedrijfsnaam in plaats van het zoekwoord, en meta-descriptions die automatisch zijn gegenereerd uit de eerste zin van de pagina.",
          "Google beoordeelt een pagina op relevantie. Die relevantie bepaalt het onder andere aan de hand van de tekst op de pagina, de titel, de beschrijving en hoe lang mensen op de pagina blijven. Als een dienstpagina over dakdekken alleen maar zegt 'Wij zijn een betrouwbaar dakdekkersbedrijf', is er voor Google niets om mee te werken.",
          "Het probleem is niet dat ondernemers dit niet willen oplossen. Ze hebben er simpelweg geen tijd voor. Een dakdekker dekt daken. Die gaat niet elke vrijdagmiddag zitten schrijven aan Google-vriendelijke paginateksten. Dat is precies de opening die we zochten voor automatisering.",
        ],
      },
      {
        heading: "Hoe we Q hebben getraind voor contentanalyse",
        paragraphs: [
          "Q analyseert elke pagina op een reeks signalen: woordtelling, aanwezigheid van zoekwoorden in de title tag en H1, interne links, afbeeldingenoptimalisatie en de verhouding tussen tekst en technische elementen. Daarna koppelt Q dit aan zoekdata uit Google Search Console, als de klant die beschikbaar heeft, of uit een zoekwoordenanalyse die we handmatig opstellen bij de start.",
          "Op basis van die analyse stelt Q een rapport op. Niet een rapport vol met grafieken, maar een lijstje met concrete acties, gesorteerd op impact. Pagina X heeft te weinig tekst over thema Y, terwijl daar 380 zoekopdrachten per maand op zijn. Pagina Z heeft een title die begint met de bedrijfsnaam in plaats van het zoekwoord. Dat soort dingen.",
          "In de eerste maand heeft Q dit gedaan voor zeventien websites. Handmatig zou dat per website een halve werkdag hebben gekost. Q deed het in minuten per website.",
        ],
      },
      {
        heading: "De drie typen verbeteringen die Q voorstelt",
        paragraphs: [
          "We hebben de aanbevelingen van Q ingedeeld in drie categorieen. De eerste is technisch: ontbrekende alt-teksten, te lange title tags, pagina's zonder meta-description. Dit zijn eenvoudige aanpassingen die weinig tijd kosten en consistent positief effect hebben op de vindbaarheid.",
          "De tweede categorie is structureel: pagina's die dunne content hebben op zoektermen met volume. Hier stelt Q voor om de tekst uit te breiden, met suggesties voor subkoppen en thema's die op vergelijkbare pagina's van concurrenten terugkomen. Dit is waar het interessant wordt, maar ook waar het complexer wordt.",
          "De derde categorie is intentioneel: zoektermen waarbij de huidige pagina niet overeenkomt met wat de zoeker wil. Iemand die zoekt op 'badkamer renovatie prijs' wil prijsinformatie zien, niet een pagina over hoe mooi het resultaat kan zijn. Q herkent dit patroon steeds beter, maar het vraagt nog wel menselijke controle voordat er iets wordt gepubliceerd.",
        ],
      },
      {
        heading: "Resultaten bij de eerste zeven klanten",
        paragraphs: [
          "We hebben de aanpassingen van Q gefaseerd doorgevoerd, zodat we konden meten wat het effect was. Bij zeven van de zeventien klanten hebben we in januari en februari alle technische en structurele aanbevelingen volledig doorgevoerd. De andere tien dienden als vergelijking.",
          "De zeven klanten met doorgevoerde optimalisaties zagen hun organisch verkeer gemiddeld stijgen met 23% na zes weken. Dat is niet alleen te danken aan de Q-aanbevelingen, want we hebben tegelijk ook de laadtijden verbeterd bij vier van de zeven. Maar de correlatie is duidelijk genoeg om te zeggen dat de contentoptimalisatie bijdraagt.",
          "Twee klanten vielen op. Een schoonmaakbedrijf in Utrecht zag het organisch verkeer verdubbelen in zes weken, puur door het uitbreiden van vier dunne dienstpagina's en het herschrijven van de title tags. Een elektricien in Rotterdam steeg van positie 18 naar positie 6 op zijn belangrijkste zoekterm, zonder dat er een nieuwe backlink bij was gekomen.",
        ],
      },
      {
        heading: "Waar automatisering nog botst met de praktijk",
        paragraphs: [
          "We zijn eerlijk over de beperkingen. Bij klanten met een sterke eigen stem lukt het Q minder goed om teksten voor te stellen die kloppen. Een advocatenkantoor dat schrijft in formeel juridisch Nederlands heeft andere eisen dan een personal trainer die juist informeel en direct wil communiceren. Q herkent het register, maar de output voelt in die gevallen te generiek.",
          "Een tweede beperking zit in niche-vakjargon. Bij een klant in de machinebouw stelde Q aanpassingen voor die technisch correct waren, maar die iemand in de branche niet zo zou schrijven. Kleine nuances in woordkeuze maken in die sectoren het verschil tussen geloofwaardig en amateuristisch. Dat is iets wat je als branchekenner direct aanvoelt en wat Q nog niet consistent goed doet.",
          "De derde beperking is intentioneel: Q kijkt naar zoekvolume en bestaande concurrenten, maar niet naar de commerciele waarde van een zoekterm voor de specifieke klant. Een zoekterm met 200 zoekopdrachten per maand kan voor de ene klant goud waard zijn en voor de andere irrelevant. Die context moet een mens inbrengen.",
        ],
      },
      {
        heading: "Hoe we het inzetten in de praktijk",
        paragraphs: [
          "Op basis van drie maanden testen hebben we de workflow aangepast. Q doet de analyse en stelt de aanbevelingen op. Een mens, bij kleine klanten Martijn zelf of iemand uit het netwerk, beoordeelt de aanbevelingen en past ze aan waar nodig. Daarna gaat het de website in.",
          "Voor de technische verbeteringen, alt-teksten, title tags, meta-descriptions, gaat Q direct. Dat is standaard en er is weinig reden om dat door een mens te laten controleren. Voor structurele en intentionele verbeteringen is er altijd een review stap.",
          "Het resultaat is dat we per klant gemiddeld vier tot zes uur per maand besparen op analyse en contentwerk, terwijl de kwaliteit gelijk is gebleven. Dat is tijd die we kunnen besteden aan werk dat meer impact heeft.",
        ],
      },
      {
        heading: "Wat dit betekent voor de toekomst",
        paragraphs: [
          "Automatische contentoptimalisatie werkt als aanvulling op menselijk werk, niet als vervanging. Dat is misschien een tegenvallende conclusie als je hoopte op een volledig autonome SEO-machine, maar het is wel de eerlijke stand van zaken.",
          "Wat we wel zien is dat het plafond omhooggaat. Q wordt beter in het herkennen van branchecontext, in het aanpassen van toon per klant en in het inschatten van commerciele intentie. Over een jaar zal de verhouding er waarschijnlijk anders uitzien.",
          "Voor nu: de technische optimalisaties zijn consistent goed. De contentvulling werkt bij pagina's met weinig merkstem en weinig vakjargon. En bij alles daartussenin is een menselijke blik nog altijd de snelste manier om te bepalen of het klopt.",
        ],
      },
      {
        heading: "Wat je hier zelf mee kunt",
        paragraphs: [
          "Als je wil weten hoe jouw website scoort op SEO-kansen, begin dan bij Google Search Console. Kijk welke zoektermen je impressies opleveren maar weinig klikken. Die pagina's staan al in de index, maar presteren niet. Dat zijn de makkelijkste verbeterpunten.",
          "Kijk daarna naar de pagina's waar die zoektermen op landen. Zijn die pagina's uitgebreid genoeg? Beantwoorden ze de vraag die iemand stelt als ze op die zoekterm zoeken? Als het antwoord nee is, is dat de eerste plek om te beginnen.",
          "Wil je weten hoe jouw website er in zijn geheel voor staat, dan doen we een Momentum Scan. Dat geeft je een compleet beeld van de technische staat, de SEO-kansen en wat het concreet kan opleveren als je die aanpakt.",
        ],
      },
    ],
    faqs: [
      {
        q: "Kan Q mijn website automatisch verbeteren zonder dat ik er iets voor hoef te doen?",
        a: "Voor technische aanpassingen zoals alt-teksten en meta-descriptions grotendeels wel. Voor het uitbreiden van paginateksten is altijd een menselijke review stap, zodat de teksten kloppen voor jouw branche en toon.",
      },
      {
        q: "Hoe snel zie ik resultaat na contentoptimalisatie?",
        a: "Technische verbeteringen zijn direct zichtbaar voor Google. Ranking-effecten zie je doorgaans na vier tot acht weken, afhankelijk van hoe vaak Google je website opnieuw indexeert.",
      },
      {
        q: "Wat heb ik nodig om te beginnen met SEO-optimalisatie?",
        a: "Google Search Console is het meest waardevolle startpunt. Dat laat je zien op welke termen je al gevonden wordt en waar de kansen liggen. Als dat nog niet is ingesteld, is dat stap een.",
      },
      {
        q: "Werkt automatische contentoptimalisatie ook voor lokale bedrijven?",
        a: "Juist. Lokale zoektermen hebben vaak minder concurrentie en zijn makkelijker te scoren. Een goed ingevuld Google Business profiel gecombineerd met pagina's die lokale zoekintentie bedienen, levert bij MKB-bedrijven consistent resultaat.",
      },
    ],
    related: ["laadtijd-website-verbeteren", "van-0-naar-1000-bezoekers-30-dagen"],
    cta: {
      label: "Wil je weten hoe jouw website scoort op SEO?",
      linkLabel: "Start je Momentum Scan",
      href: "/momentum-scan",
    },
  },

  "van-0-naar-1000-bezoekers-30-dagen": {
    slug: "van-0-naar-1000-bezoekers-30-dagen",
    tag: "Case study",
    date: "Februari 2025",
    dateTime: "2025-02-01",
    readTime: "6 min",
    img: "/images/q-relaxing.jpg",
    metaTitle: "Van 0 naar 1.000 bezoekers in 30 dagen: een MKB case study | Webgrowth",
    metaDescription: "Hoe een lokale ondernemer zonder online aanwezigheid in 30 dagen op pagina 1 van Google belandde. Inclusief exacte stappen en resultaten.",
    title: "Van 0 naar 1.000 bezoekers in 30 dagen",
    intro: "In januari namen we een nieuwe klant aan. Een hoveniersbedrijf, actief in een middelgrote stad, met een website van zes jaar oud die nauwelijks bezoekers trok. Na 30 dagen stond hij op positie 3 voor zijn belangrijkste zoekterm en kwamen er 14 aanvragen binnen via de website. Dit is het volledige verhaal, inclusief wat we precies deden en in welke volgorde.",
    content: [
      {
        heading: "De situatie bij aanvang: een website die niemand zag",
        paragraphs: [
          "De website bestond al zes jaar. Twee pagina's tekst, een contactformulier en een paar foto's. Het domein had een beetje autoriteit opgebouwd gewoon door de tijd, maar er stond verder niets noemenswaardigs op. Geen blog, geen dienstpagina's per type werk, geen lokale zoekwoorden verwerkt in de teksten.",
          "In Google Search Console, dat nog niet was ingesteld, hadden we na het koppelen te zien gekregen dat de website op nagenoeg nul zoektermen impressies genereerde. Niet dat het laag stond, het was er gewoon niet. Geen indexeringsproblemen, gewoon te weinig inhoud om ergens op gevonden te worden.",
          "Het Google Business profiel was aangemaakt maar nooit volledig ingevuld. Geen openingstijden, geen categorieen, geen foto's van het werk. Het profiel stond er, maar deed niets.",
        ],
      },
      {
        heading: "Dag 1 tot 3: de basis op orde",
        paragraphs: [
          "We beginnen altijd met het Google Business profiel, omdat dat de snelste manier is om zichtbaar te worden voor lokale zoekopdrachten. Volledige categoriebeschrijving, primaire categorie op 'Hovenier', diensten toegevoegd per type werk, openingstijden, vijf foto's van recent uitgevoerd werk. En een eerste reactie op de bestaande reviews die er al stonden, want dat signaleert activiteit aan Google.",
          "Tegelijk koppelden we Google Search Console en Google Analytics aan de website. Dat is niet alleen voor meting, maar ook zodat Google weet dat de website actief wordt beheerd. Een sitemap aanmaken en indienen via Search Console hoort daarbij. Dit zijn kleine technische stappen, maar ze zijn de basis voor alles wat daarna komt.",
          "Op dag drie was het profiel volledig ingevuld en stond de website correct in Search Console. Nog geen nieuwe bezoekers, maar de fundering was er.",
        ],
      },
      {
        heading: "Dag 4 tot 10: een nieuwe website bouwen",
        paragraphs: [
          "De oude website was niet te redden. Te weinig structuur, geen aparte pagina's per dienst, en de technische staat was slecht. Lighthouse gaf een Performance-score van 31. We bouwden een nieuwe website in Next.js, gehost op Vercel, met de volgende structuur: een homepage, vier dienstpagina's (tuinaanleg, tuinonderhoud, bestrating, snoeien), een over-ons pagina en een contactpagina.",
          "Elke dienstpagina kreeg een eigen H1 met de dienst plus de stad, een tekst van minimaal 400 woorden gericht op de lokale zoeker, een FAQ-sectie met drie vragen en een call-to-action naar het contactformulier. De URL-structuur was simpel: /tuinaanleg-[stad], /tuinonderhoud-[stad]. Duidelijk, beschrijvend, zonder onnodige parameters.",
          "De laadtijd van de nieuwe website was 1,4 seconden op mobiel. Lighthouse-score: 94. Dat is het verschil tussen een basis die werkt en een basis die trekt.",
        ],
      },
      {
        heading: "Dag 11 tot 14: lokale content publiceren",
        paragraphs: [
          "Een nieuwe website heeft nog geen autoriteit. Google kent hem nog niet goed genoeg om hem bovenaan te zetten. Wat helpt is verse, relevante content die aansluit op wat lokale zoekers willen weten.",
          "We schreven drie artikelen, elk gericht op een specifieke lokale zoekvraag. Eerste artikel: 'Wat kost een nieuwe tuin laten aanleggen in [stad]?' Zoekvolume: 210 per maand, weinig lokale concurrentie. Tweede artikel: 'Hoe vaak moet je tuin gesnoeid worden?' Informatief, gericht op mensen die nog aan het orienteren zijn. Derde artikel: 'Tuinonderhoud uitbesteden: is dat het waard?' Gericht op de overweging die mensen maken voordat ze aanvragen.",
          "Elk artikel minimaal 800 woorden, met interne links naar de relevante dienstpagina's. De artikelen waren op dag 14 gepubliceerd en direct geindexeerd via Search Console.",
        ],
      },
      {
        heading: "Dag 15 tot 21: Google Business optimaliseren met berichten",
        paragraphs: [
          "Een Google Business profiel is geen statisch visitekaartje. Google beloont profielen die actief worden bijgehouden. We plaatsten in de tweede en derde week drie updates via het profiel: een foto van een recent project, een bericht over het lopende tuinseizoen en een aanbieding voor een gratis tuinadviesgesprek.",
          "We vroegen ook aan de klant om drie bestaande klanten te benaderen voor een Google review. Dat leverde twee nieuwe vijfsterrenreviews op. Niet omdat we een slimme truc hadden, maar gewoon omdat de klant tevreden klanten had die dat nooit hadden gedaan omdat niemand erom had gevraagd.",
          "Op dag 21 stond het Google Business profiel in de Local Pack, de kaartweergave in Google, voor de zoekterm 'hovenier [stad]'. Dat is de top drie van lokale resultaten die zichtbaar zijn voordat de normale zoekresultaten beginnen. Dat is de plek waar lokale aanvragen vandaan komen.",
        ],
      },
      {
        heading: "Dag 22 tot 30: meten, bijsturen en de eerste aanvragen",
        paragraphs: [
          "In de laatste week begon het verkeer op gang te komen. Search Console liet zien dat de dienstpagina's impressies kregen op lokale zoektermen. Het artikel over tuinaanlegkosten stond al op positie 11, wat betekent dat het op pagina 2 stond maar dicht tegen pagina 1 aan zat.",
          "We optimaliseerden twee dingen op basis van de data. De title tag van de tuinaanleg-pagina werd aangepast, zodat het zoekwoord eerder in de titel stond. En we voegden een paar zinnen toe aan de over-ons pagina met een vermelding van de specifieke wijken in de stad waar de klant actief was. Kleine aanpassingen, maar ze helpen bij het versterken van lokale relevantie.",
          "Op dag 28 kwamen de eerste aanvragen via het contactformulier binnen. Twee op dag 28, vier op dag 29, acht op dag 30. De maand daarna telde de klant 14 aanvragen via de website. Gemiddeld twee per maand was zijn norm daarvoor.",
        ],
      },
      {
        heading: "De exacte cijfers na 30 dagen",
        paragraphs: [
          "Organisch verkeer: 1.024 unieke bezoekers in de laatste zeven dagen van de maand. Positie 3 op 'hovenier [stad]', positie 6 op 'tuinaanleg [stad]', positie 2 in de Local Pack. Het artikel over tuinaanlegkosten stond op positie 8 voor zijn zoekterm.",
          "Contactformulier: 14 ingevulde aanvragen in de eerste 30 dagen, waarvan 9 in de laatste week toen het verkeer goed op gang was. Telefonische aanvragen zijn niet meegeteld, maar de klant meldde dat hij ook meer directe telefoontjes kreeg waarbij mensen zeiden hem via Google te hebben gevonden.",
          "Google Business: 312 weergaven in de zoekresultaten, 47 klikken naar de website en 22 verzoeken om routebeschrijving. Het profiel stond in de Local Pack voor vier lokale zoektermen.",
        ],
      },
      {
        heading: "Wat je hiervan kunt meenemen",
        paragraphs: [
          "Dit was geen geheim recept. Het was een combinatie van basisdingen die goed worden uitgevoerd in de juiste volgorde. Google Business volledig invullen en actief houden. Een technisch solide website met duidelijke paginastructuur. Dienstpagina's met echte tekst die aansluiten op hoe mensen zoeken. Een paar lokale contentartikelen. En een paar reviews.",
          "De meeste MKB-ondernemers doen dit niet, niet omdat ze het niet willen maar omdat ze niet weten waar te beginnen en er geen tijd voor vrijmaken. Dat is precies waarom het voor bedrijven die het wel doen zo goed werkt. De concurrentie is in de meeste lokale niches nog klein.",
          "Wil je weten wat het oplevert voor jouw bedrijf? We doen een gratis eerste analyse. Geen verplichtingen, gewoon een eerlijk beeld van waar je nu staat en wat er mogelijk is.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is 0 naar 1.000 bezoekers in 30 dagen realistisch voor mijn bedrijf?",
        a: "Dat hangt af van de markt en de huidige staat van je website. In lokale niches met weinig digitale concurrentie is dit haalbaar. In sterk concurrerende markten of voor nationale zoektermen duurt het langer. Een eerlijke inschatting maken we na een eerste analyse.",
      },
      {
        q: "Hoe lang blijft het resultaat behouden?",
        a: "SEO is geen eenmalige actie. De eerste maand legt de basis. Daarna moet je de website actief houden met nieuwe content en onderhoud aan het Google Business profiel. Zonder opvolging zak je na verloop van tijd terug.",
      },
      {
        q: "Wat kost zoiets?",
        a: "Dat verschilt per situatie. Bij deze klant was er een nieuwe website nodig, wat een grotere investering is dan bij een bestaande website met een goede basis. Bij een website die alleen optimalisatie nodig heeft, is de investering lager.",
      },
      {
        q: "Werkt dit ook als mijn bedrijf al goed bekend is via mond-tot-mondreclame?",
        a: "Juist dan is er veel te winnen. Klanten die je al kennen, zoeken je op via Google voordat ze bellen. Als je website dan niet goed staat, loop je aanvragen mis van mensen die je naam al kennen. Online zichtbaarheid versterkt je bestaande reputatie.",
      },
    ],
    related: ["laadtijd-website-verbeteren", "automatische-contentoptimalisatie-mkb"],
    cta: {
      label: "Wil jij hetzelfde resultaat?",
      linkLabel: "Bekijk hoe het werkt",
      href: "/hoe-het-werkt",
    },
  },
}
// ────────────────────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = posts[slug]
  if (!post) return { title: "Niet gevonden | Webgrowth" }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.dateTime,
      locale: "nl_NL",
      siteName: "Webgrowth",
      images: [{ url: `https://webgrowth.company${post.img}` }],
    },
    alternates: {
      canonical: `https://webgrowth.company/field-logs/${post.slug}`,
    },
  }
}

export default async function FieldLogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts[slug]

  if (!post) {
    return (
      <div className="bg-[#0d0818] min-h-screen">
        <Navigation />
        <div className="flex items-center justify-center py-40">
          <p className="text-white/50">Artikel niet gevonden.</p>
        </div>
        <Footer />
      </div>
    )
  }

  const relatedPosts = post.related.map(s => posts[s]).filter(Boolean)

  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.metaDescription,
    "datePublished": post.dateTime,
    "image": `https://webgrowth.company${post.img}`,
    "url": `https://webgrowth.company/field-logs/${post.slug}`,
    "author": {
      "@type": "Person",
      "name": "Martijn Duin",
      "url": "https://webgrowth.company",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Webgrowth",
      "url": "https://webgrowth.company",
    },
  }

  if (post.faqs?.length) {
    jsonLd["mainEntity"] = {
      "@type": "FAQPage",
      "mainEntity": post.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": { "@type": "Answer", "text": faq.a },
      })),
    }
  }

  return (
    <div className="bg-[#0d0818] min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navigation />

      <main>
        {/* Header */}
        <section className="relative pt-36 pb-0 px-5 sm:px-8 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#623bc7]/10 blur-[150px] pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <Link href="/field-logs" className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-8 transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" /> Alle field logs
            </Link>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase">{post.tag}</span>
              <span className="text-white/20 text-xs">·</span>
              <time dateTime={post.dateTime} className="text-white/40 text-xs">{post.date}</time>
              <span className="text-white/20 text-xs">·</span>
              <span className="text-white/40 text-xs">{post.readTime} leestijd</span>
            </div>
            <h1 className="font-[family-name:var(--font-gottak)] text-[clamp(2rem,5vw,3.5rem)] font-black text-white leading-[1.06] tracking-tight mb-6">
              {post.title}
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-10">{post.intro}</p>
          </div>
        </section>

        {/* Cover image */}
        <div className="px-5 sm:px-8 mb-14">
          <div className="max-w-3xl mx-auto relative h-64 md:h-96 rounded-2xl overflow-hidden border border-white/8">
            <Image src={post.img} alt={post.title} fill className="object-cover" style={{ objectPosition: "center 20%" }} priority />
          </div>
        </div>

        {/* Article */}
        <article className="px-5 sm:px-8">
          <div className="max-w-3xl mx-auto">

            {/* Content sections */}
            <div className="space-y-10 mb-14">
              {post.content.map((section, i) => (
                <section key={i}>
                  <h2 className="font-[family-name:var(--font-gottak)] text-xl md:text-2xl font-black text-white mb-4 leading-snug">
                    {section.heading}
                  </h2>
                  <div className="space-y-4">
                    {section.paragraphs.map((p, j) => (
                      <p key={j} className="text-white/70 text-base leading-relaxed">{p}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* FAQ */}
            {post.faqs && post.faqs.length > 0 && (
              <div className="mb-14">
                <h2 className="font-[family-name:var(--font-gottak)] text-xl font-black text-white mb-6">Veelgestelde vragen</h2>
                <div className="space-y-3">
                  {post.faqs.map((faq, i) => (
                    <div key={i} className="rounded-xl border border-white/8 p-6" style={{ background: "rgba(255,255,255,0.03)" }}>
                      <p className="text-white font-semibold text-sm mb-2">{faq.q}</p>
                      <p className="text-white/60 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="rounded-2xl border border-[#ff0096]/20 p-7 mb-14" style={{ background: "rgba(255,0,150,0.05)" }}>
              <p className="text-white font-semibold text-base mb-4">{post.cta.label}</p>
              <Link href={post.cta.href} className="inline-flex items-center gap-2 bg-[#ff0096] hover:bg-[#e6007f] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-200">
                {post.cta.linkLabel}
              </Link>
            </div>

            {/* Related articles */}
            {relatedPosts.length > 0 && (
              <div className="mb-16 border-t border-white/8 pt-12">
                <p className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-6">Meer lezen</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedPosts.map((related) => (
                    <Link key={related.slug} href={`/field-logs/${related.slug}`} className="group rounded-2xl border border-white/8 hover:border-white/15 overflow-hidden transition-all duration-200" style={{ background: "rgba(255,255,255,0.03)" }}>
                      <div className="relative h-36 overflow-hidden">
                        <Image src={related.img} alt={related.title} fill className="object-cover group-hover:scale-[1.02] transition-transform duration-500" style={{ objectPosition: "center 20%" }} />
                        <span className="absolute top-3 left-3 text-[#ff0096] text-xs font-semibold tracking-widest uppercase bg-[#0d0818]/70 backdrop-blur-sm px-2.5 py-1 rounded-full border border-[#ff0096]/20">
                          {related.tag}
                        </span>
                      </div>
                      <div className="p-5">
                        <p className="text-white font-bold text-sm leading-snug group-hover:text-white/80 transition-colors">{related.title}</p>
                        <p className="text-[#a78bfa] text-xs mt-2 font-semibold">Lees verder →</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Back */}
            <div className="pb-24 border-t border-white/8 pt-8">
              <Link href="/field-logs" className="inline-flex items-center gap-2 text-[#a78bfa] text-sm font-semibold hover:text-white transition-colors duration-200">
                <ArrowLeft className="w-3.5 h-3.5" /> Terug naar alle field logs
              </Link>
            </div>

          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
