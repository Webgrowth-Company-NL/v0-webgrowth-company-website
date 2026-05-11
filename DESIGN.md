# Design

## Visual Theme

**Premium light, editorial-warm, brand-pink as the only signature accent.**

Een Nederlandse boutique-uitgeverij online. Cream-witte basis met ink-tinted zwart, één saturated brand-pink dat 5–15% van het oppervlak vult en alle CTA's draagt. Veel ruimte, gemeten ritmes, type-led hiërarchie. Glasmorf en gradiënten zijn rare-uitzondering, niet default.

**Color strategy:** **Restrained.** Tinted-neutral cream basis + één accent (purple #623BC7) op max 10–15%. Stripe-stilte met brand-claim. Pink #FF0096 is rare-highlight, niet primary.

**Scene-sentence (waarom light, niet dark):** *"Een eigenaar van een advocatenkantoor opent de site op een MacBook Pro in zijn werkkamer rond 16:00, daglicht van links. Hij wil binnen 8 seconden weten of dit een serieuze leverancier is voordat hij doorklikt naar de Website APK."* — daglicht-context, korte aandachtsboog, vertrouwen-eerst: dat dwingt licht + helder + bewijs-eerst.

## Color Palette

Alle waardes in CSS-tokens (`app/globals.css`), tinted naar de pink-hue (chroma 0.005–0.01) zodat neutrals nooit dood-grijs aanvoelen.

### Surfaces

| Token | Value | Rol |
|---|---|---|
| `--color-bg` | `#FAF6F0` | Pagina-achtergrond — warm cream, niet wit |
| `--color-bg-elevated` | `#FFFFFF` | Cards, modals, popovers |
| `--color-bg-muted` | `#F3ECE4` | Subtiele zones, hover-states, inputs |

### Ink (tekst)

| Token | Value | Rol | Min contrast |
|---|---|---|---|
| `--color-ink-strong` | `#050308` | H1, hero-headline | 19:1 (AAA) |
| `--color-ink` | `#0C0612` | Body, H2-H4, links | 17:1 (AAA) |
| `--color-ink-muted` | `rgba(12,6,18,0.62)` | Subhead, meta, labels | 7.4:1 (AAA) |
| `--color-ink-subtle` | `rgba(12,6,18,0.42)` | Footer-meta, captions | 4.8:1 (AA) |
| `--color-ink-faint` | `rgba(12,6,18,0.22)` | Dividers, decoration only | n.v.t. |

### Brand

| Token | Value | Rol |
|---|---|---|
| `--color-purple` | `#623BC7` | **Signature accent.** Primary CTAs, focus-rings, brand-marks, headline-accent. |
| `--color-purple-hover` | `#5232B3` | Hover state primary CTA |
| `--color-purple-soft` | `rgba(98,59,199,0.08)` | Purple-tinted backgrounds |
| `--color-purple-tint` | `rgba(98,59,199,0.14)` | Avatar / icon backgrounds met meer punch |
| `--color-violet` | `#8B5CF6` | Light highlight, hover-glows op chart-bars |
| `--color-lavender` | `#C4B5FD` | Decoratief, charts, data-viz secondary |
| `--color-pink` | `#FF0096` | **Rare highlight only.** Niet primair, niet voor CTAs of headline-accent. Behouden voor seldzame brand-momenten (logo-treatment, statement-section). |
| `--color-amber` | `#F59E0B` | Sterren-rating, alleen daar |

### Lines

| Token | Value | Rol |
|---|---|---|
| `--color-line` | `rgba(12,6,18,0.08)` | Standaard hairlines, dividers |
| `--color-line-strong` | `rgba(12,6,18,0.14)` | Card-borders, button-outlines |

**Banned combinaties:**

- Geen `background-clip: text` met gradient (impeccable absolute ban).
- Geen purple+pink gradients in tekst, knoppen, of grote oppervlakken — leest als "AI lila" cliché.
- Geen pure `#000` of pure `#FFF` — altijd cream/ink-tinted.
- Pink is **niet** primary brand-kleur op deze marketingsite, ondanks dat Forester OS-dashboard pink wel primair gebruikt. Marketingsite = purple-primair voor premium-warm gevoel; product-UI = pink-primair voor energie.

## Typography

### Font stack

| Rol | Family | Weights | Notes |
|---|---|---|---|
| Display | **Gottak** | 200 / 400 / 600-italic / 700 | Lokaal geladen (`public/fonts`), `next/font/local`. Brand-signature. |
| Body / UI | **Geist Sans** | 400 / 500 / 600 / 700 | Via `next/font/google`. Premium, anti-Inter. |
| Mono | **Geist Mono** | 400 / 500 | Voor tabular numbers, code-snippets, data. |

**Banned:** Inter, Roboto, Arial, Open Sans (per design-taste-frontend + high-end skills).

### Scale (fluid, clamp-based)

| Token / class | Size | Rol |
|---|---|---|
| `text-eyebrow` | 12.5px (uppercase, tracking 0.18em) | Pre-heading badges, section-labels |
| `text-meta` | 13px | Footer, captions, mini-meta |
| `text-body-sm` | 14.5px | Secondary copy |
| `text-body` | 16px / 17px | Main body, line-height 1.6, max-width 65–75ch |
| `text-lead` | 18–20px | Hero-subhead, intro-paragraphs |
| `text-h3` | clamp(1.5rem, 2.5vw, 2.25rem) | Sub-section headings |
| `text-h2` | clamp(2rem, 3.6vw, 3.25rem) | Section headings |
| `text-h1` | clamp(2.6rem, 6.2vw, 5rem) | Hero, max één per pagina |

Type-scale ratio ≥1.25 tussen stappen (impeccable shared law).

### Voice & copy

- Schrijfstijl: NL, wij-vorm (ook bij solo-ondernemers), formeel-warm, geen marketing-leenwoorden.
- **Geen em-dashes (—).** Vervang door komma, dubbele punt, puntkomma of haakjes. Ook geen `--`.
- Headlines mogen 2-3 regels zijn, niet langer. Geen 6-line wraps.
- Numbers: tabular-nums + Geist Mono voor cijfer-zwaar contextueel materiaal.

## Components

### Buttons

**Primary CTA (purple pill):**

```
inline-flex items-center gap-2 (gap-3 op desktop)
px-6 py-3.5 rounded-full
bg-[--color-purple] hover:bg-[--color-purple-hover]
text-white font-semibold text-[14.5px]
shadow-[0_2px_4px_rgba(98,59,199,0.28),0_18px_40px_-12px_rgba(98,59,199,0.6)]
.btn-press (transform 160ms ease-out, active:scale(0.97))
```

Trailing arrow gebruikt **Button-in-Button** patroon (high-end skill): de pijl zit in een eigen circulaire wrapper `w-7 h-7 rounded-full bg-white/15` aan de rechter-binnenpadding, en translate-x-0.5 + scale-105 op group-hover.

**Secondary CTA (outline):**

Cream background, `border border-line-strong`, ink-strong tekst, zelfde Button-in-Button arrow maar in `bg-ink/5`.

**Tertiary (link):**

Underlined ink-muted → ink op hover, geen achtergrond.

### Cards & Containers — Double-Bezel

**Geen flat cards.** Premium containers gebruiken het Double-Bezel patroon (high-end skill):

- **Outer shell**: wrapper `p-1.5` of `p-2`, `rounded-[2rem]`, `bg-ink/3` of `bg-white/40`, `ring-1 ring-line`.
- **Inner core**: content-container, `bg-white`, `rounded-[calc(2rem-0.375rem)]` (concentrische radii), `shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]` voor edge-refraction.

Gebruik dit voor: hero-visual rechts (platform-preview), feature-tiles, testimonial-cards. **Niet** voor inline pills, badges, of mini-elementen.

### Chips & Badges

Vol-witte achtergrond (`bg-white`), `border border-line`, `rounded-full`, padding `pl-2 pr-3 py-1.5`. **Geen backdrop-blur** — die is gereserveerd voor sticky/fixed elementen (header, modal-overlay). Diffuse drop-shadow voor depth, getint naar ink: `shadow-[0_1px_2px_rgba(12,6,18,0.04),0_18px_40px_-18px_rgba(12,6,18,0.18)]`.

### Header

**Full-width sticky** (mix-besluit: matches je v0/Platform-referenties, conflicteert bewust met high-end's floating-pill voorkeur). Transparant boven hero, schakelt op scroll>8px naar `bg-[--color-bg]/85` + `backdrop-blur-xl` + hairline-border + subtle drop-shadow.

Bevat: logo (gradient W-mark), nav-links, **5★ 9,4/10 op Google** pill (signature trust-element), Inloggen, primary CTA "Doe de gratis APK".

Mobile: hamburger → `transformOrigin: top-center` (niet centered modal, Emil-regel) animated sheet.

### Inputs

- Label boven input, helper-text optioneel, error onder.
- Border 1px line, focus 2px pink ring + 2px offset (AAA-keyboard).
- Height 44px (mobile tap-target AAA).

## Layout

### Container

`max-w-7xl mx-auto px-5 sm:px-8`. **Niet alles in een container** — long-form scroll-sections mogen breken voor full-bleed visuals.

### Spacing rhythm

- Section padding: `py-24` minimum, `py-32` standaard, `py-40` voor hero / closing-CTA.
- Tussen subsecties: `space-y-12` of meer.
- Geen uniforme padding overal — varieer voor ritme (impeccable shared law).

### Grid

- Hero / split-sections: **2-column desktop, 1-column mobile.** Geen 3-column gelijke card rows (ban).
- Feature-secties: **Bento asymmetrisch** of **zig-zag 2-column**, niet generic icon-grid.
- Mobile-collapse: alle asymmetrische layouts onder `md:` (768px) falt naar `w-full px-4`. Geen rotaties of negative-margins op mobiel.

### Viewport stability

- Hero gebruikt `min-h-[100dvh]` of expliciete `py-32` — **nooit `h-screen`** (iOS Safari jump).
- Spacing in `rem`/`clamp`, geen vaste px voor breakpoints.

## Motion

### Energy level

**Medium-high (Nordflame/Pitch-tier).** Awwwards-motion in dienst van warmte, niet als tech-demo. Continue micro-motion is welkom (float-y op decorative chips, shimmer op accent-elementen, gradient-rotation op orbs), maar **alles is opt-out via `prefers-reduced-motion`**.

### Curves

Custom cubic-beziers, geen built-in CSS easings:

```css
--ease-out-strong:    cubic-bezier(0.23, 1, 0.32, 1);
--ease-in-out-strong: cubic-bezier(0.77, 0, 0.175, 1);
--ease-drawer:        cubic-bezier(0.32, 0.72, 0, 1);
```

Defaults:
- **Enter / exit:** `ease-out-strong`, 200–700ms (UI), 800–1100ms (hero entry).
- **Hover / color shifts:** `ease`, 200ms.
- **Movement / drawers:** `ease-drawer`, 400–500ms.
- **Never use `ease-in`** voor UI-interacties (Emil-regel).

### Patterns

- **Press feedback:** alle CTA's hebben `.btn-press` met `transform 160ms ease-out` + `active:scale(0.97)`.
- **Entry:** geen `scale(0)` → start van `scale(0.94)` + `opacity:0` + `blur(6px)`.
- **Scroll-reveal:** `IntersectionObserver` (geen `window.scroll` listeners), `whileInView` met `translate-y-16 blur-md opacity-0` → 0.
- **Stagger:** word-by-word reveal voor hero-headline (delay 60ms tussen woorden), child-stagger 50–80ms voor lijsten.
- **Continue micro-motion:** pulse op brand-dot (2.4s), float-y op chips (7-9s), shimmer (6-7s loops). Allemaal `ease-in-out`.

### Performance

- **Animate alleen `transform` en `opacity`.** Nooit `top/left/width/height`.
- **Backdrop-blur alleen op fixed/sticky elementen.** Niet op scrolling content.
- **Grain/noise overlays** alleen op fixed `pointer-events-none` pseudo-elementen.
- Magnetic hover (als toegevoegd) via `useMotionValue`/`useTransform` van Framer Motion, **nooit `useState`** (perf-collapse op mobiel).

## Accessibility tokens

- Focus-ring: `2px solid --color-purple` + `2px offset` op `--color-bg`. Hoog contrast op cream.
- Tap-target minimum: 44×44px (mobile), 32×32px (desktop pointer-fine).
- Reduced-motion: zie globals.css — alle animations en transitions → 0.01ms.
- Hover-states gated achter `@media (hover: hover) and (pointer: fine)` waar relevant (touch false-positives vermijden).

## Forbidden visual patterns

Match-and-refuse — als een van deze opduikt in een ontwerp-iteratie, herwerken:

1. **Gradient text** (background-clip + gradient bg)
2. **Side-stripe borders** (border-left/right kleur als accent)
3. **Glassmorphism als default**
4. **Hero-metric template** (big number + small label + 4 supporting stats + gradient)
5. **Identical 3-column card grids** met icon + heading + text
6. **Modal-eerst denken** (probeer altijd inline / progressive eerst)
7. **Standaard Lucide-thick** of FontAwesome icons (gebruik Lucide met `strokeWidth={2}` consistent, of Phosphor light)
8. **Pure black/white** (#000/#FFF)
9. **Generieke stockfoto's** (handshakes, smiling-team-meeting)
10. **Generic names / round numbers** (John Doe, +500%, 99.99%)
