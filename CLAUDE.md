# CLAUDE.md, Webgrowth Company Website

Marketingsite voor Webgrowth Company, de agency achter Forester OS. Lees dit eerst, daarna [docs/](docs/) voor diepere context.

## Project overview

- **Eigenaar**: Martijn Duin, Webgrowth Company
- **Doel**: showcase van het Forester OS platform met landingspagina's voor doelgroepen, prijzen, succesverhalen en de Momentum Scan als lead capture
- **Stack**: Next.js 16.2 (App Router), TypeScript, Tailwind v4, shadcn/ui, framer-motion, GSAP
- **Hosting**: Vercel (auto deploy vanaf `main`)
- **Data**: volledig statisch in components, geen Firebase of CMS in deze repo. CMS-content leeft in Forester OS (Webgrowth Company Platform)

## Quick start

```bash
pnpm install
pnpm run dev      # http://localhost:3000
pnpm run build
pnpm run lint
```

## Pagina's

| Route | Doel |
|---|---|
| `/` | Homepage (hero, features, social proof) |
| `/hoe-het-werkt` | uitleg Forester OS workflow |
| `/prijzen` | pricing |
| `/succesverhalen` | case studies |
| `/momentum-scan` | lead capture, scoort de groei-momentum |
| `/field-logs` | feature pagina |
| `/website-apk` | feature pagina |
| `/hubspot-alternatief` | landingspagina vergelijking |
| `/dashboard-new` | WIP, nieuwe homepage variant V2 |
| `/inloggen` | redirect naar app.webgrowth.company |

## Architectuur

```
app/
  page.tsx           homepage
  [route]/page.tsx   per pagina één folder
  layout.tsx
components/
  navigation.tsx
  footer.tsx
  forest-parallax.tsx     signature brand element, parallax bos
  sections/               sectie-componenten per pagina
    home-v2-*.tsx           WIP V2 homepage variant
  ui/                     shadcn/ui (button, card, etc.)
hooks/
lib/
  utils.ts                cn() helper voor className merging
  field-logs-data.ts
public/images/            assets en mockups
scripts/                  content-import en seeding scripts
```

## Schrijfstijl en copy

- Nederlands voor frontend copy, professioneel maar toegankelijk, geen jargon dump
- **Geen em-dashes** (`—`). Vervang door komma, punt, of dubbele punt afhankelijk van pauze
- "Wij" / "we" niet "ik" / "mijn", ook al runt Martijn dit solo. B2B context, dus altijd meervoud
- **Bolt is vervangen door Forester OS**. Nergens nog "Bolt" gebruiken, het platform heet Forester OS
- ROI-claims en cijfers altijd onderbouwbaar houden, geen gratuite "10x productiviteit"

## Design tokens en componenten

- **Primaire knop**: `bg-[#ff0096] hover:bg-[#e6007f] text-white` met `lucide-react`'s `ArrowRight` icoon. **Nooit gradients op buttons**
- **Eyebrows in secties**: pulse-badge component (kleine indicator + tekst). Platte roze tekst alleen in de hero, niet in secties daaronder
- shadcn/ui components, gebruik `cn()` uit `lib/utils.ts` voor className merging
- Tailwind v4 met `@theme` blok in globals.css, geen losse `tailwind.config.js`
- framer-motion voor entrance-animaties, GSAP voor `forest-parallax`

## Git en deploy workflow

- Vercel deployt automatisch vanaf `main` via GitHub integratie
- **Niet automatisch pushen.** Commit lokaal, wacht op expliciet akkoord voor `git push`
- **Niet `npx vercel --prod` draaien na een push**, dat zorgt voor dubbele deploys
- `tsconfig.tsbuildinfo` in working tree: build artifact, niet committen (toevoegen aan .gitignore)
- `.env.local` nooit committen

## Lopend werk

- **V2 homepage**: nieuwe sectie-componenten staan onder `components/sections/home-v2-*.tsx`. Het `/dashboard-new` pad is de losse mock. Niet committen voor compleet, anders breekt de live site
- HubSpot alternatief landingspagina is recent toegevoegd (`/hubspot-alternatief`) met ROI-calculator

## Docs

- [docs/architecture.md](docs/architecture.md) componentstructuur
- [docs/feature-catalog.md](docs/feature-catalog.md) secties per pagina
- [docs/navigation-map.md](docs/navigation-map.md) routes en links
- [docs/theming.md](docs/theming.md) merkkleuren, typografie
