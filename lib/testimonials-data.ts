export type Testimonial = {
  id: string
  quote: string
  name: string
  /** Functie binnen het bedrijf, bijvoorbeeld 'Eigenaar', 'Marketing Lead' */
  role?: string
  /** Bedrijfsnaam */
  company?: string
  /** Branche, bijvoorbeeld 'Coaching & retraites' */
  industry?: string
  /** Eén concreet resultaat van de samenwerking, één zin */
  result?: string
  /** Avatar in /public/images/testimonials/ */
  img?: string
  /** Bedrijfslogo in /public/images/clients/, voor extra trust */
  logo?: string
  /** Bron: directe quote, Google review, LinkedIn-post */
  source?: "direct" | "google" | "linkedin"
}

/**
 * Testimonials zoals ze op de site getoond worden.
 * Voeg alleen quotes toe die je echt van klanten hebt ontvangen,
 * met expliciete toestemming voor publicatie.
 */
export const testimonials: Testimonial[] = [
  {
    id: "gil-lont",
    quote:
      "Dankzij Webgrowth Company hebben we nu een website die niet alleen mooi is, maar actief bijdraagt aan onze groei en processen automatiseert.",
    name: "Gil Lont",
    result: "Meer leads via de website, minder handmatig werk",
    img: "/images/testimonials/gil-lont.webp",
    source: "direct",
  },
  {
    id: "linda-van-der-zwan",
    quote:
      "Complexe technische keuzes worden helder gemaakt en snel uitgevoerd, waardoor wij kunnen focussen op marketing en strategie.",
    name: "Linda van der Zwan",
    result: "Focus op strategie in plaats van techniek",
    img: "/images/testimonials/linda-van-der-zwan.jpg",
    source: "direct",
  },
]

export type ClientLogo = {
  name: string
  logo: string | null
  since: string
  industry?: string
}

/**
 * Klantlogo's zoals getoond in de TrustBar en logo-grids.
 * Industry- en since-velden komen uit de Forester OS websites-collectie
 * (zie scripts/dump-websites.mjs in de Forester OS-repo).
 */
export const clients: ClientLogo[] = [
  {
    name: "MOL Logistics",
    logo: "/images/clients/mol-logistics.png",
    since: "2018",
    industry: "Logistiek",
  },
  {
    name: "Roll Group",
    logo: "/images/clients/roll-group-real.webp",
    since: "2018",
    industry: "Maritieme logistiek & zwaar transport",
  },
  {
    name: "VQ Advocaten",
    logo: "/images/clients/vq-advocaten.webp",
    since: "2022",
    industry: "Advocatuur",
  },
  {
    name: "The Africa Experience",
    logo: "/images/clients/the-africa-experience.png",
    since: "2023",
    industry: "Toerisme",
  },
  {
    name: "Tornado Rent",
    logo: "/images/clients/tornado-rent/logo.png",
    since: "2025",
    industry: "Verhuur bouwmachines",
  },
  {
    name: "Adalace",
    logo: "/images/clients/adalace/logo.png",
    since: "2026",
    industry: "Vastgoedsoftware",
  },
  {
    name: "Mind Movement",
    logo: "/images/clients/mind-movement.png",
    since: "2026",
    industry: "Gezondheid & welzijn",
  },
  {
    name: "Bosscher International",
    logo: null,
    since: "2026",
    industry: "Custom textiel & merchandising",
  },
  {
    name: "InterDam",
    logo: "/images/clients/interdam.png",
    since: "2015",
    industry: "Industrie",
  },
]

/**
 * Trust signals — alle cijfers komen uit de Forester OS websites-collectie.
 * Update via scripts/dump-websites.mjs in de Forester OS-repo.
 */
export const trustSignals = {
  /** Aantal live klanten in Forester OS (status: live) */
  klantenAantal: 27,
  /** Vroegste klant met geregistreerde subscriptionStartDate */
  klantSinds: "2016",
  /** Google rating, format X.X/10 */
  googleRating: "9.4",
  /** Link naar Google Business Profile reviews. UPDATE met echte permalink. */
  googleReviewsUrl:
    "https://www.google.com/search?sca_esv=f123ee124c2aed74&q=Webgrowth+Company+-+D%C3%A9+expert+in+webdesign",
} as const

/**
 * Logos die in de visuele logo-strook getoond worden.
 * Filtert klanten zonder logo automatisch eruit.
 */
export const clientsWithLogo = clients.filter(
  (c): c is ClientLogo & { logo: string } => Boolean(c.logo)
)
