import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacyverklaring | Webgrowth Company",
  description:
    "Hoe Webgrowth Company omgaat met persoonsgegevens, formulierdata, cookies en data-bewaring. AVG-conform en in begrijpelijke taal.",
  alternates: {
    canonical: "https://webgrowth.company/privacyverklaring",
  },
  robots: { index: true, follow: true },
}

const sections: { title: string; body: (string | string[])[] }[] = [
  {
    title: "Wie zijn wij",
    body: [
      "Webgrowth Company is een eenmanszaak gevestigd aan de Ceresstraat 13, 4811 CA Breda. Voor vragen over jouw persoonsgegevens kun je terecht bij Martijn Duin via martijn@webgrowth.company of 076 204 5010. Wij zijn de verwerkingsverantwoordelijke voor de gegevens die je hieronder leest.",
    ],
  },
  {
    title: "Welke gegevens verwerken wij",
    body: [
      "Wij verwerken alleen wat je zelf invult of wat strikt noodzakelijk is om de site te laten werken.",
      [
        "Naam, bedrijfsnaam, e-mailadres en telefoonnummer wanneer je een kennismaking inplant of een formulier invult.",
        "Website-URL en jouw antwoorden als je de gratis website APK of Momentum Scan invult.",
        "Onderwerp van het gesprek dat je opgeeft bij het inplannen van een kennismaking.",
        "Geanonimiseerde bezoekstatistieken via Vercel Analytics, zonder cookies en zonder identificeerbare gegevens.",
      ],
    ],
  },
  {
    title: "Waarom wij dat doen",
    body: [
      "Per type verwerking gebruiken wij een specifieke grondslag uit de AVG.",
      [
        "Voor kennismakingen, scans en contactformulieren: uitvoering van een (pre)contractuele relatie. Zonder jouw gegevens kunnen wij geen afspraak inplannen of een rapport sturen.",
        "Voor de website APK / Momentum Scan: uitvoering van jouw verzoek om een rapport te ontvangen.",
        "Voor analytics: gerechtvaardigd belang om te begrijpen welke pagina's bezoekers gebruiken, zonder profilering.",
      ],
    ],
  },
  {
    title: "Met wie wij gegevens delen",
    body: [
      "Wij delen alleen met partijen die noodzakelijk zijn om de dienst te leveren. Met al deze partijen hebben wij een verwerkersovereenkomst.",
      [
        "Google Workspace voor e-mail en agenda. Een ingeplande kennismaking wordt als event op de hoofdkalender gezet en je ontvangt een Google Meet-uitnodiging.",
        "Google Cloud Platform / Firebase Firestore voor het opslaan van scan-resultaten en lead-gegevens.",
        "Vercel voor hosting van de website en de geanonimiseerde analytics.",
        "Resend voor het versturen van transactionele e-mails (bevestigingen, rapporten).",
      ],
      "Wij verkopen jouw gegevens nooit aan derden. Wij gebruiken jouw gegevens niet voor advertenties of profilering.",
    ],
  },
  {
    title: "Hoe lang wij gegevens bewaren",
    body: [
      "Wij bewaren jouw gegevens niet langer dan nodig.",
      [
        "Lead-gegevens uit kennismakingen of scans: tot drie jaar na het laatste contact, of korter op verzoek.",
        "Inhoud van bevestigingsmails: zo lang als jouw mailbox die behoudt; bij ons blijven kopieën in Google Workspace volgens de standaard retentie.",
        "Geanonimiseerde analytics: doorlopend (geen koppeling met jou als persoon mogelijk).",
      ],
    ],
  },
  {
    title: "Cookies en tracking",
    body: [
      "Wij plaatsen geen tracking-cookies en gebruiken geen advertentie-pixels. De analytics-tool die wij gebruiken (Vercel) werkt zonder cookies.",
      "Op de contactpagina kun je een Google Maps-kaart openen. Die kaart laden wij pas wanneer jij daarop klikt, omdat Google daarbij wel cookies plaatst. Je kiest dus zelf of je dat wil.",
    ],
  },
  {
    title: "Jouw rechten",
    body: [
      "Onder de AVG heb je een aantal rechten die wij respecteren.",
      [
        "Recht op inzage van de gegevens die wij van jou hebben.",
        "Recht op rectificatie als iets niet klopt.",
        "Recht op verwijdering, tenzij wij wettelijk verplicht zijn om iets te bewaren.",
        "Recht op dataportabiliteit, dus een kopie van jouw gegevens in een gangbaar formaat.",
        "Recht op bezwaar tegen verwerking op basis van gerechtvaardigd belang.",
        "Recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens (autoriteitpersoonsgegevens.nl).",
      ],
      "Een verzoek kun je sturen naar martijn@webgrowth.company. Wij reageren binnen vier weken.",
    ],
  },
  {
    title: "Beveiliging",
    body: [
      "Wij nemen passende technische en organisatorische maatregelen om jouw gegevens te beschermen. De website draait via HTTPS, gegevens worden versleuteld opgeslagen in Firestore en alleen het Webgrowth-team heeft toegang. Alle wachtwoorden zijn 2FA-beveiligd.",
    ],
  },
  {
    title: "Wijzigingen",
    body: [
      "Deze privacyverklaring kan worden aangepast wanneer wetgeving of onze diensten dat nodig maken. Wij plaatsen wijzigingen op deze pagina.",
    ],
  },
]

export default function PrivacyverklaringPage() {
  return (
    <div className="bg-[#0d0818] min-h-screen">
      <Navigation />
      <main>
        <section className="relative pt-32 pb-12 px-5 sm:px-8 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#623bc7]/8 blur-[160px] pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="text-[#ff0096] text-xs font-semibold tracking-widest uppercase mb-5">
              Privacy
            </p>
            <h1 className="font-[family-name:var(--font-gottak)] text-[clamp(2.4rem,6vw,4.6rem)] font-black text-white leading-[1.04] tracking-tight mb-6">
              Privacyverklaring
            </h1>
            <p className="text-white/65 text-lg md:text-xl leading-relaxed">
              In begrijpelijke taal: wat wij met jouw gegevens doen, waarom, en hoe je controle houdt.
            </p>
            <p className="text-white/40 text-xs mt-6">Laatst gewijzigd op 30 april 2026</p>
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
                            <li key={k} className="flex items-start gap-3 text-white/75 text-base leading-relaxed">
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#ff0096] shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )
                    }
                    return (
                      <p key={j} className="text-white/75 text-base md:text-lg leading-relaxed">
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
