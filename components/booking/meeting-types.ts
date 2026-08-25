/**
 * De drie publieke afspraaktypes. Duur en agenda-blok staan in het platform
 * (lib/planning/publicBooking.ts); hier staat alleen wat de bezoeker ziet.
 */

const FORESTER_API_BASE =
  process.env.NEXT_PUBLIC_FORESTER_API_BASE || "https://app.webgrowth.company";

export type BookingTypeId = "kennismaking" | "kick-off" | "sprint-meeting";

export type BookingType = {
  id: BookingTypeId;
  /** Kleine bovenkop in de header. */
  eyebrow: string;
  /** Titels per stap. */
  title: { when: string; subject: string; contact: string; success: string };
  durationMinutes: number;
  /** "30 minuten · Google Meet · vrijblijvend" */
  meta: string;
  /** Inleiding boven de kalender. */
  intro: string;
  subjectIntro: string;
  subjectPlaceholder: string;
  subjectLabel: string;
  contactIntro: string;
  /** Getoond als er in de hele look-ahead geen dag vrij is. */
  emptyState: string;
  availabilityUrl: string;
  createUrl: string;
  /** Alleen de kennismaking is een advertentie-conversie. */
  tracksConversion: boolean;
};

function urls(id: BookingTypeId) {
  // De kennismaking houdt zijn eigen route, want daar rolt ook een lead uit.
  const base =
    id === "kennismaking"
      ? `${FORESTER_API_BASE}/api/public/kennismaking`
      : `${FORESTER_API_BASE}/api/public/meetings/${id}`;
  return { availabilityUrl: `${base}/availability`, createUrl: `${base}/create` };
}

export const BOOKING_TYPES: Record<BookingTypeId, BookingType> = {
  kennismaking: {
    id: "kennismaking",
    eyebrow: "Boek een kennismaking",
    title: {
      when: "Kies een dag en tijd",
      subject: "Waar wil je het over hebben?",
      contact: "Jouw gegevens",
      success: "Meeting ingepland",
    },
    durationMinutes: 30,
    meta: "30 minuten · Google Meet · vrijblijvend",
    intro:
      "Leuk dat je een gesprek wilt plannen. Kies een dag, dan verschijnen de vrije tijden er meteen naast. Het gesprek duurt 30 minuten en is geheel vrijblijvend.",
    subjectIntro:
      "Een korte omschrijving zodat Martijn weet wat de richting is. Geen sales-pitch nodig, gewoon: waar zit je nu, wat wil je verbeteren?",
    subjectPlaceholder:
      "Bijvoorbeeld: 'We hebben een verouderde site, willen meer leads en zijn benieuwd of jullie platform past.'",
    subjectLabel: "Waar wil je het over hebben?",
    contactIntro: "We sturen een agenda-uitnodiging met Google Meet-link naar je e-mailadres.",
    emptyState:
      "Geen Sales & Meetings-blokken in de komende 30 dagen. Stuur in dat geval een mail naar martijn@webgrowth.company.",
    ...urls("kennismaking"),
    tracksConversion: true,
  },
  "kick-off": {
    id: "kick-off",
    eyebrow: "Plan de kick-off",
    title: {
      when: "Kies een dag en tijd",
      subject: "Waar staan jullie nu?",
      contact: "Jouw gegevens",
      success: "Kick-off ingepland",
    },
    durationMinutes: 60,
    meta: "60 minuten · Google Meet",
    intro:
      "Fijn dat we gaan beginnen. Kies een dag, dan verschijnen de vrije tijden er meteen naast. We nemen een uur de tijd om doelen, planning en toegang door te nemen.",
    subjectIntro:
      "Zet kort neer waar we mee starten, dan kan Martijn zich voorbereiden. Denk aan: wat er nu staat, waar jullie naartoe willen en wie er bij de kick-off aanschuiven.",
    subjectPlaceholder:
      "Bijvoorbeeld: 'Nieuwe site plus Lead Engine. Onze marketeer en de eigenaar sluiten aan. We willen voor het najaar live.'",
    subjectLabel: "Waar staan jullie nu?",
    contactIntro:
      "We sturen een agenda-uitnodiging met Google Meet-link naar je e-mailadres. Collega's kun je daarna zelf toevoegen aan de afspraak.",
    emptyState:
      "Geen vrije momenten in de komende 30 dagen. Mail dan even naar martijn@webgrowth.company, dan zoeken we samen een moment.",
    ...urls("kick-off"),
    tracksConversion: false,
  },
  "sprint-meeting": {
    id: "sprint-meeting",
    eyebrow: "Plan een sprint meeting",
    title: {
      when: "Kies een dag en tijd",
      subject: "Wat wil je bespreken?",
      contact: "Jouw gegevens",
      success: "Sprint meeting ingepland",
    },
    durationMinutes: 45,
    meta: "45 minuten · Google Meet",
    intro:
      "Kies een dag, dan verschijnen de vrije tijden er meteen naast. Een sprint meeting duurt 45 minuten: we lopen de sprint door, kijken naar wat af is en zetten de volgende stap uit.",
    subjectIntro:
      "Zet kort neer wat er op tafel moet. Dan hoeven we de eerste tien minuten niet te gebruiken om de agenda te bepalen.",
    subjectPlaceholder:
      "Bijvoorbeeld: 'Sprint 3 doornemen, feedback op de nieuwe productpagina en de planning voor de webshop-koppeling.'",
    subjectLabel: "Wat wil je bespreken?",
    contactIntro: "We sturen een agenda-uitnodiging met Google Meet-link naar je e-mailadres.",
    emptyState:
      "Geen sprint meeting-momenten vrij in de komende 30 dagen. Mail dan even naar martijn@webgrowth.company.",
    ...urls("sprint-meeting"),
    tracksConversion: false,
  },
};
