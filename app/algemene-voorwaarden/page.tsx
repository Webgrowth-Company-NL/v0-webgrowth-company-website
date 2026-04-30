import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Algemene voorwaarden | Webgrowth Company",
  description:
    "De algemene voorwaarden van Webgrowth Company voor abonnementen, projecten en dienstverlening op Forester OS.",
  alternates: {
    canonical: "https://webgrowth.company/algemene-voorwaarden",
  },
  robots: { index: true, follow: true },
}

type Section = {
  title: string
  body: (string | string[])[]
}

const sections: Section[] = [
  {
    title: "Artikel 1 — Definities",
    body: [
      [
        "Webgrowth Company: eenmanszaak gevestigd te Breda, voorheen handelend onder de naam Marketing Genius, KvK-nummer 64809536.",
        "Klant: degene met wie Webgrowth Company een overeenkomst is aangegaan.",
        "Partijen: Webgrowth Company en Klant samen.",
        "Consument: een Klant die tevens een individu is en die als privépersoon handelt.",
        "Dienstverlening: het bouwen, hosten, onderhouden, updaten en optimaliseren van websites en software op het Forester OS platform van Webgrowth Company, inclusief bijbehorende ondersteuning, AVG-maatregelen, AI-functionaliteiten via Q en add-ons zoals Quick-Scans en Momentum Reports.",
      ],
    ],
  },
  {
    title: "Artikel 2 — Toepasselijkheid",
    body: [
      "Deze voorwaarden zijn van toepassing op alle offertes, aanbiedingen, werkzaamheden, bestellingen, overeenkomsten en leveringen van diensten of producten door of namens Webgrowth Company, inclusief de Forester OS-abonnementen en gerelateerde add-ons. Webgrowth Company en de Klant kunnen alleen afwijken van deze voorwaarden als dat schriftelijk is afgesproken. Webgrowth Company en de Klant sluiten de toepasselijkheid van de algemene voorwaarden van de Klant of van anderen uitdrukkelijk uit.",
    ],
  },
  {
    title: "Artikel 3 — Aanbiedingen en offertes",
    body: [
      "Aanbiedingen en offertes van Webgrowth Company zijn vrijblijvend, tenzij daarin uitdrukkelijk anders vermeld. Een aanbod of offerte is maximaal twee weken geldig, tenzij er een andere termijn in het aanbod of de offerte staat. Aanvaardt de Klant een aanbod of offerte niet binnen de geldende termijn, dan vervalt het aanbod of de offerte. Aanbiedingen en offertes gelden niet voor nabestellingen, tenzij Webgrowth Company en de Klant dit schriftelijk afspreken.",
    ],
  },
  {
    title: "Artikel 4 — Aanvaarding",
    body: [
      "Bij aanvaarding van een vrijblijvende offerte of aanbieding mag Webgrowth Company de offerte of het aanbod alsnog binnen drie dagen na ontvangst van de aanvaarding intrekken, zonder dat de Klant hieraan enige rechten kan ontlenen. Mondelinge aanvaarding van de Klant verbindt Webgrowth Company slechts nadat de Klant deze schriftelijk of elektronisch heeft bevestigd.",
    ],
  },
  {
    title: "Artikel 5 — Prijzen",
    body: [
      "Webgrowth Company hanteert prijzen in euro's, exclusief btw en exclusief eventuele overige kosten zoals administratie- of verzendkosten, tenzij schriftelijk anders is afgesproken. De abonnementstarieven beginnen vanaf €399 per maand exclusief btw voor het Core-pakket, conform de pakketten zoals beschreven op /prijzen. Webgrowth Company zal prijsaanpassingen meedelen aan de Klant voorafgaand aan de ingang ervan. Een consument mag de overeenkomst met Webgrowth Company opzeggen wanneer hij het niet eens is met de prijsverhoging.",
    ],
  },
  {
    title: "Artikel 6 — Betalingen en betalingstermijn",
    body: [
      "Webgrowth Company mag bij het aangaan van de overeenkomst een aanbetaling tot 50% van het afgesproken bedrag verlangen. De Klant moet een betaling achteraf binnen veertien dagen na factuurdatum hebben voldaan, via factuur, automatische incasso of creditcard (met mogelijke toeslag voor buitenlandse afnemers).",
      "De betalingstermijnen die Webgrowth Company hanteert, zijn fatale betalingstermijnen. Dat betekent dat indien de Klant het afgesproken bedrag niet uiterlijk op de laatste dag van de betalingstermijn heeft betaald, hij automatisch in verzuim en in gebreke is, zonder dat Webgrowth Company aan de Klant een aanmaning hoeft te sturen of in gebreke hoeft te stellen. Bij vier openstaande facturen wordt de website tijdelijk vervangen door een 'under construction'-pagina met de contactgegevens van Webgrowth Company, niet die van de Klant, totdat de openstaande facturen volledig zijn voldaan.",
      "Webgrowth Company mag een levering afhankelijk stellen van onmiddellijke betaling dan wel een zekerheidstelling eisen voor het totale bedrag van de diensten of producten.",
    ],
  },
  {
    title: "Artikel 7 — Gevolgen te late betaling",
    body: [
      "Betaalt de Klant niet binnen de afgesproken termijn, dan mag Webgrowth Company de wettelijke rente per maand voor handelstransacties in rekening brengen vanaf de dag dat de Klant in verzuim is, waarbij een gedeelte van een maand voor een hele maand wordt gerekend. Wanneer de Klant in verzuim is, moet hij bovendien buitengerechtelijke incassokosten en eventuele schadevergoeding betalen aan Webgrowth Company. De incassokosten worden berekend aan de hand van het Besluit vergoeding voor buitengerechtelijke incassokosten.",
      "Wanneer de Klant niet op tijd betaalt, mag Webgrowth Company zijn verplichtingen opschorten totdat de Klant heeft betaald. In geval van liquidatie, faillissement, beslag of surseance van betaling aan de zijde van de Klant zijn de vorderingen van Webgrowth Company op de Klant onmiddellijk opeisbaar. Weigert de Klant zijn medewerking aan de uitvoering van de overeenkomst door Webgrowth Company, dan moet hij nog steeds de afgesproken prijs betalen.",
    ],
  },
  {
    title: "Artikel 8 — Opschortingsrecht",
    body: [
      "De Klant doet hierbij afstand van het recht om de nakoming van enige uit deze overeenkomst voortvloeiende verbintenis op te schorten.",
    ],
  },
  {
    title: "Artikel 9 — Verrekening",
    body: [
      "De Klant doet afstand van zijn recht om een schuld aan Webgrowth Company te verrekenen met een vordering op Webgrowth Company.",
    ],
  },
  {
    title: "Artikel 10 — Intrekking opdracht",
    body: [
      "Het staat de Klant vrij om de opdracht aan Webgrowth Company op elk gewenst moment te beëindigen, met inachtneming van de opzegtermijnen uit artikel 15 en 16. Wanneer de Klant de opdracht intrekt, is de Klant verplicht de verschuldigde vergoeding en de gemaakte onkosten van Webgrowth Company te betalen.",
    ],
  },
  {
    title: "Artikel 11 — Klachtplicht",
    body: [
      "De Klant is verplicht klachten over de verrichte werkzaamheden direct schriftelijk te melden aan Webgrowth Company. De klacht bevat een zo gedetailleerd mogelijke omschrijving van de tekortkoming, zodat Webgrowth Company in staat is hierop adequaat te reageren. Een klacht kan er in ieder geval niet toe leiden dat Webgrowth Company gehouden kan worden om andere werkzaamheden te verrichten dan zijn overeengekomen.",
    ],
  },
  {
    title: "Artikel 12 — Inspanningsverplichting en uptime",
    body: [
      "Wanneer de Klant en Webgrowth Company een overeenkomst met een dienstverlenend karakter zijn aangegaan, bevat deze voor Webgrowth Company enkel een inspanningsverplichting en dus geen resultaatsverplichting. Webgrowth Company spant zich naar beste kunnen in om een uptime van 99,99% te behalen, gebaseerd op historische prestaties van het Forester OS-platform en de onderliggende infrastructuur. Dit cijfer is een streefwaarde en geen garantie; aan deze indicatie kunnen geen rechten worden ontleend.",
    ],
  },
  {
    title: "Artikel 13 — Uitvoering van de overeenkomst",
    body: [
      "Webgrowth Company voert de overeenkomst naar beste inzicht en vermogen en volgens de eisen van goed vakmanschap uit. Bouwprojecten worden doorgaans uitgevoerd in sprints met tussentijdse opleveringen voor feedback. Onderhoud, updates, testen, debuggen en kleine aanpassingen worden uitgevoerd binnen de afspraken van het lopende abonnement.",
      "Webgrowth Company mag de afgesproken dienstverlening in zijn geheel of deels laten uitvoeren door anderen, waaronder het netwerk van vaste samenwerkingspartners en geautomatiseerde tools (zie ook artikel 18). De uitvoering van de overeenkomst gebeurt in overleg en na een schriftelijk akkoord en betaling van een eventueel voorschot door de Klant. De Klant moet ervoor zorgen dat Webgrowth Company op tijd kan beginnen aan de uitvoering van de overeenkomst. Zorgt de Klant er niet voor dat Webgrowth Company tijdig kan beginnen, dan komen de daaruit voortvloeiende extra kosten voor rekening van de Klant.",
    ],
  },
  {
    title: "Artikel 14 — Informatieverstrekking door de Klant",
    body: [
      "De Klant stelt alle informatie, gegevens en bescheiden die relevant zijn voor de correcte uitvoering van de overeenkomst tijdig en in gewenste vorm en op gewenste wijze beschikbaar aan Webgrowth Company. De Klant staat in voor de juistheid en volledigheid van de ter beschikking gestelde informatie, gegevens en bescheiden, ook indien deze van derden afkomstig zijn, voor zover uit de aard van de overeenkomst niet anders voortvloeit.",
      "Wanneer en voor zover de Klant dit verzoekt, retourneert Webgrowth Company de betreffende bescheiden. Stelt de Klant niet, niet tijdig of niet behoorlijk de door Webgrowth Company redelijkerwijs verlangde informatie, gegevens of bescheiden beschikbaar en loopt de uitvoering van de overeenkomst hierdoor vertraging op, dan komen de daaruit voortvloeiende extra kosten en extra uren voor rekening van de Klant.",
    ],
  },
  {
    title: "Artikel 15 — Duur overeenkomst dienst",
    body: [
      "De overeenkomst tussen Webgrowth Company en de Klant voor een dienst wordt aangegaan voor de duur van minimaal twaalf maanden, tenzij uit de aard van de overeenkomst iets anders voortvloeit of schriftelijk iets anders is afgesproken. Na afloop van de minimale looptijd van twaalf maanden wordt de overeenkomst stilzwijgend omgezet in een overeenkomst voor onbepaalde tijd, tenzij de Klant of Webgrowth Company de overeenkomst opzegt met een opzegtermijn van twee maanden. Is de Klant een consument, dan geldt een opzegtermijn van één maand.",
      "Na opzegging ontvangt de Klant een back-up van de website en een export van zijn data na betaling van openstaande facturen.",
    ],
  },
  {
    title: "Artikel 16 — Opzeggen dienst voor bepaalde tijd",
    body: [
      "De Klant kan een overeenkomst voor een dienst voor bepaalde tijd niet eerder dan na de minimale looptijd van twaalf maanden opzeggen. Na afloop van de minimum looptijd van twaalf maanden kan de Klant de overeenkomst opzeggen met een opzegtermijn van twee maanden. Na afloop van de minimum looptijd van twaalf maanden kan een consument de overeenkomst opzeggen met een opzegtermijn van één maand. Is de overeenkomst voor een dienst voor minder dan twaalf maanden aangegaan, dan is de overeenkomst tussentijds niet opzegbaar.",
    ],
  },
  {
    title: "Artikel 17 — Intellectueel eigendom",
    body: [
      "Webgrowth Company behoudt alle intellectuele eigendomsrechten op alle ontwerpen, tekeningen, geschriften, dragers met gegevens of andere informatie, offertes, afbeeldingen, schetsen, modellen en maquettes, alsmede op het Forester OS-platform en alle bijbehorende templates, frameworks, scripts, prompts, AI-configuraties en interne tools.",
      "De Klant verkrijgt een onbeperkt, niet-exclusief gebruiksrecht op de specifiek voor hem opgeleverde website, content en functionaliteit. Dit gebruiksrecht geldt voor de duur van de overeenkomst en blijft na beëindiging van kracht voor de versie die op dat moment is opgeleverd. Bij beëindiging ontvangt de Klant een export van zijn content en data in een gangbaar formaat, conform artikel 15.",
      "Het gebruiksrecht omvat niet de plugins, frameworks, libraries of code van derden; daarop zijn de licentievoorwaarden van de betreffende leveranciers van toepassing en die staan los van deze overeenkomst. De Klant mag de intellectuele eigendomsrechten in lid 1 niet zonder voorafgaande schriftelijke toestemming van Webgrowth Company aan anderen tonen, ter beschikking stellen of op een andere manier gebruiken.",
    ],
  },
  {
    title: "Artikel 18 — Gebruik van Artificial Intelligence",
    body: [
      "Webgrowth Company maakt voor de uitvoering van diensten gebruik van diverse AI-tools, waaronder onder meer Anthropic Claude, Claude Code, Claude Coworker, Google Gemini en xAI Grok. Deze tools worden ingezet voor onder andere het schrijven en reviewen van code, content-generatie, analyse, planning en automatisering van werkzaamheden.",
      "De aanbieders van deze AI-tools verwerken invoer en gegenereerde output conform hun eigen voorwaarden en kunnen daarbij eigen rechten hebben op modellen, infrastructuur en delen van de output. Webgrowth Company blijft volledig verantwoordelijk voor de eindkwaliteit, controle en oplevering van het werk dat met behulp van deze tools tot stand komt.",
      "Webgrowth Company deelt geen vertrouwelijke klantgegevens met AI-tools die niet voldoen aan onze geheimhoudings- en beveiligingsstandaarden. Wenst de Klant uitdrukkelijk dat bepaalde gegevens niet via AI-tools worden verwerkt, dan kan dat schriftelijk worden afgesproken.",
    ],
  },
  {
    title: "Artikel 19 — Geheimhouding",
    body: [
      "De Klant houdt iedere informatie, in welke vorm dan ook, die hij van Webgrowth Company ontvangt geheim. Hetzelfde geldt voor alle andere informatie betreffende Webgrowth Company waarvan de Klant weet of redelijkerwijs kan vermoeden dat deze geheim of vertrouwelijk is, dan wel waarvan hij kan verwachten dat verspreiding ervan Webgrowth Company schade kan berokkenen.",
      "De Klant neemt alle nodige maatregelen om ervoor te zorgen dat hij de informatie geheimhoudt. De geheimhoudingsplicht geldt niet voor informatie die al openbaar was voordat de Klant deze informatie vernam of die later openbaar is geworden zonder dat dit het gevolg was van een schending van de geheimhoudingsplicht van de Klant, of die door de Klant openbaar gemaakt wordt op grond van een wettelijke plicht.",
      "De geheimhoudingsplicht geldt voor de duur van de onderliggende overeenkomst en voor een periode van drie jaar na afloop daarvan.",
    ],
  },
  {
    title: "Artikel 20 — Boetebeding",
    body: [
      "Wanneer de Klant het artikel over geheimhouding of intellectueel eigendom overtreedt, dan moet hij aan Webgrowth Company voor elke overtreding een onmiddellijk opeisbare boete betalen. Is de Klant een consument dan bedraagt de boete €1.000. Is de Klant geen consument dan bedraagt de boete €5.000. Daarnaast moet de Klant een bedrag van 5% van het toepasselijke bedrag betalen voor elke dag dat die overtreding voortduurt.",
      "De Klant moet de boete betalen zonder dat een ingebrekestelling of gerechtelijke procedure nodig is. Ook hoeft er geen sprake te zijn van schade. Webgrowth Company mag naast de boete ook een schadevergoeding eisen van de Klant.",
    ],
  },
  {
    title: "Artikel 21 — Vrijwaring",
    body: [
      "De Klant vrijwaart Webgrowth Company tegen alle aanspraken van anderen die verband houden met de door Webgrowth Company geleverde producten en/of diensten. Ook tegen alle aanspraken van derden die verband houden met de door Webgrowth Company geleverde producten en/of diensten, waaronder mede begrepen alle content op de website, zoals teksten, video's, foto's en andere materialen, ongeacht of deze door Webgrowth Company zijn gemaakt, geplaatst of door de Klant zijn aangeleverd. De Klant is volledig verantwoordelijk voor de rechtmatigheid, juistheid en geschiktheid van deze content, inclusief naleving van auteursrechten, privacywetgeving en andere toepasselijke regelgeving.",
    ],
  },
  {
    title: "Artikel 22 — Ingebrekestelling",
    body: [
      "De Klant moet een eventuele ingebrekestelling schriftelijk kenbaar maken aan Webgrowth Company. De Klant is ervoor verantwoordelijk dat zijn ingebrekestelling Webgrowth Company ook daadwerkelijk op tijd bereikt.",
    ],
  },
  {
    title: "Artikel 23 — Aansprakelijkheid Klant",
    body: [
      "Wanneer Webgrowth Company een overeenkomst aangaat met meerdere Klanten, is ieder van hen hoofdelijk aansprakelijk voor het nakomen van de afspraken in die overeenkomst.",
    ],
  },
  {
    title: "Artikel 24 — Aansprakelijkheid Webgrowth Company",
    body: [
      "Webgrowth Company is alleen aansprakelijk voor schade die de Klant lijdt wanneer die schade is veroorzaakt door opzet of bewuste roekeloosheid. Wanneer Webgrowth Company aansprakelijk is voor schade, dan geldt dat alleen voor directe schade die verband houdt met de uitvoering van een onderliggende overeenkomst. Webgrowth Company is niet aansprakelijk voor indirecte schade, zoals gevolgschade, gederfde winst of schade aan derden.",
      "Wanneer Webgrowth Company aansprakelijk is, is deze aansprakelijkheid beperkt tot het bedrag dat door een gesloten (beroeps)aansprakelijkheidsverzekering wordt uitbetaald. Is er geen verzekering gesloten of wordt geen schadebedrag uitgekeerd, dan is de aansprakelijkheid beperkt tot het (gedeelte van het) factuurbedrag waarop de aansprakelijkheid betrekking heeft.",
      "Alle afbeeldingen, foto's, kleuren, tekeningen, omschrijvingen op de website of in een catalogus zijn slechts indicatief en kunnen niet leiden tot enige vergoeding, ontbinding of opschorting.",
    ],
  },
  {
    title: "Artikel 25 — Vervaltermijn",
    body: [
      "Elk recht van de Klant op schadevergoeding van Webgrowth Company vervalt twaalf maanden na de gebeurtenis waaruit de aansprakelijkheid direct of indirect voortvloeit. Hiermee wordt niet uitgesloten het bepaalde in artikel 6:89 BW.",
    ],
  },
  {
    title: "Artikel 26 — Ontbinding",
    body: [
      "De Klant mag de overeenkomst ongedaan maken wanneer Webgrowth Company toerekenbaar tekortschiet in de nakoming van zijn verplichtingen, tenzij deze tekortkoming de ontbinding niet rechtvaardigt vanwege haar bijzondere aard of geringe betekenis. Is de nakoming van de verplichtingen door Webgrowth Company nog mogelijk, dan kan ontbinding pas plaatsvinden nadat Webgrowth Company in verzuim is.",
      "Webgrowth Company mag de overeenkomst met de Klant ongedaan maken, wanneer de Klant zijn verplichtingen uit de overeenkomst niet volledig of niet tijdig nakomt, dan wel wanneer Webgrowth Company kennis heeft genomen van omstandigheden die hem goede grond geven om aan te nemen dat de Klant zijn verplichtingen niet zal nakomen.",
    ],
  },
  {
    title: "Artikel 27 — Overmacht",
    body: [
      "In aanvulling op artikel 6:75 BW geldt dat een tekortkoming van Webgrowth Company door de Klant niet aan Webgrowth Company kan worden toegerekend wanneer er sprake is van overmacht. Onder overmacht valt onder meer ook: een noodtoestand zoals een burgeroorlog of natuurramp, wanprestatie of overmacht van toeleveranciers, bezorgers of anderen, stroom-, elektriciteits-, internet-, computer- of telecomstoringen, computervirussen, stakingen, overheidsmaatregelen, vervoersproblemen, slechte weersomstandigheden en werkonderbrekingen.",
      "Wanneer zich een overmachtsituatie voordoet waardoor Webgrowth Company één of meer verplichtingen naar de Klant niet kan nakomen, dan worden die verplichtingen opgeschort totdat Webgrowth Company kan nakomen. Vanaf het moment dat een overmachtsituatie ten minste 30 kalenderdagen heeft geduurd, mogen zowel de Klant als Webgrowth Company de overeenkomst schriftelijk in zijn geheel of deels ongedaan maken. Webgrowth Company hoeft in een overmachtsituatie geen vergoeding aan de Klant te betalen, ook niet wanneer Webgrowth Company hiervan voordeel heeft.",
    ],
  },
  {
    title: "Artikel 28 — Wijziging overeenkomst",
    body: [
      "Wanneer het voor de uitvoering ervan nodig is om een gesloten overeenkomst te wijzigen, kunnen de Klant en Webgrowth Company de overeenkomst aanpassen.",
    ],
  },
  {
    title: "Artikel 29 — Wijziging algemene voorwaarden",
    body: [
      "Webgrowth Company mag deze algemene voorwaarden wijzigen. Wijzigingen van ondergeschikt belang mag Webgrowth Company altijd doorvoeren. Ingrijpende wijzigingen zal Webgrowth Company zoveel mogelijk vooraf met de Klant bespreken. Een consument mag bij een ingrijpende wijziging van de algemene voorwaarden de onderliggende overeenkomst opzeggen.",
    ],
  },
  {
    title: "Artikel 30 — Overgang van rechten",
    body: [
      "De Klant kan geen rechten uit een overeenkomst met Webgrowth Company aan anderen overdragen zonder schriftelijke toestemming van Webgrowth Company. Deze bepaling geldt als een beding met goederenrechtelijke werking zoals in artikel 3:83 lid 2 BW.",
    ],
  },
  {
    title: "Artikel 31 — Toepasselijk recht en bevoegde rechter",
    body: [
      "Op deze algemene voorwaarden is Nederlands recht van toepassing. De rechter in het arrondissement van de vestigingsplaats van Webgrowth Company is exclusief bevoegd om kennis te nemen van eventuele geschillen tussen de Klant en Webgrowth Company, tenzij de wet iets anders bepaalt.",
    ],
  },
]

export default function AlgemeneVoorwaardenPage() {
  return (
    <div className="bg-[#0d0818] min-h-screen">
      <Navigation />
      <main>
        <section className="relative pt-32 pb-12 px-5 sm:px-8 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#623bc7]/8 blur-[160px] pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-5">
              Voorwaarden
            </p>
            <h1 className="font-[family-name:var(--font-gottak)] text-[clamp(2.4rem,6vw,4.6rem)] font-black text-white leading-[1.04] tracking-tight mb-6">
              Algemene voorwaarden
            </h1>
            <p className="text-white/65 text-lg md:text-xl leading-relaxed">
              De afspraken die gelden bij elke opdracht. Webgrowth Company, KvK 64809536, gevestigd te Breda.
            </p>
            <p className="text-white/40 text-xs mt-6">Versie 30 april 2026</p>
          </div>
        </section>

        <article className="px-5 sm:px-8 pb-32">
          <div className="max-w-3xl mx-auto space-y-12">
            {sections.map((section, i) => (
              <section key={i}>
                <h2 className="font-[family-name:var(--font-gottak)] text-2xl md:text-3xl font-black text-white leading-tight mb-5">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.body.map((entry, j) => {
                    if (Array.isArray(entry)) {
                      return (
                        <ul key={j} className="space-y-2.5 pl-1">
                          {entry.map((item, k) => (
                            <li
                              key={k}
                              className="flex items-start gap-3 text-white/75 text-base leading-relaxed"
                            >
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#ff0096] shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )
                    }
                    return (
                      <p
                        key={j}
                        className="text-white/75 text-base md:text-lg leading-relaxed"
                      >
                        {entry}
                      </p>
                    )
                  })}
                </div>
              </section>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
