# CLAUDE.md — Webgrowth Company Website

Project reference for Claude. Read this first, then jump to the relevant doc under [docs/](docs/).

## Project overview

- **Name**: Webgrowth Company Marketing Website
- **Purpose**: Marketing website for Webgrowth Company — the agency behind Forester OS. Showcases the platform, pricing, case studies, and the momentum scan.
- **Owner**: Martijn Duin — Webgrowth Company
- **Stack**: Next.js 16.2 (App Router), TypeScript, Tailwind CSS, shadcn/ui
- **Hosting**: Vercel
- **Data**: Content loaded from Firebase Firestore via `getAllContent(SITE_ID)` where `SITE_ID = "webgrowth-company"` (similar pattern to tornado-rent)

## Quick start

```bash
npm install   # or pnpm install
npm run dev
npm run build
```

## Pages

| Route | Purpose |
|---|---|
| `/` | Homepage — hero, features, social proof |
| `/hoe-het-werkt` | How Forester OS works |
| `/prijzen` | Pricing page |
| `/succesverhalen` | Case studies / success stories |
| `/momentum-scan` | Lead capture tool |
| `/field-logs` | Field logs feature page |
| `/website-apk` | Website APK feature page |
| `/inloggen` | Login (redirects to app.webgrowth.company) |

## Architecture

```
app/
  page.tsx
  layout.tsx
  [pages]/
components/
  navigation.tsx
  footer.tsx
  forest-parallax.tsx   → branded parallax hero element
  sections/             → section components per page
  ui/
public/
  images/
scripts/               → content import/seeding scripts
```

## Important notes

- Content may be CMS-driven via Firestore (same pattern as tornado-rent).
- The `forest-parallax` component is a signature Webgrowth brand element.
- `/inloggen` links to `app.webgrowth.company` (Forester OS).
- **Bolt is vervangen door Forester OS.** Gebruik nergens meer de naam "Bolt" — het platform heet Forester OS.

## Docs index

- [docs/architecture.md](docs/architecture.md) — component structure
- [docs/feature-catalog.md](docs/feature-catalog.md) — pages and sections
- [docs/navigation-map.md](docs/navigation-map.md) — routes
- [docs/data-layer.md](docs/data-layer.md) — Firebase content loading
- [docs/theming.md](docs/theming.md) — brand colors, typography
