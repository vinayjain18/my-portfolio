# Vinay Jain — Portfolio

Source for my personal portfolio: a single-page site covering what I build, the
products I'm working on, my experience and how to reach me.

Canonical URL configured in [`src/app/layout.tsx`](src/app/layout.tsx):
`https://vinayjain.dev`

## Contents

- [Stack](#stack)
- [Getting started](#getting-started)
- [Scripts](#scripts)
- [Environment variables](#environment-variables)
- [Project structure](#project-structure)
- [Page structure](#page-structure)
- [Editing content](#editing-content)
- [Theming](#theming)
- [Icons](#icons)
- [Motion and accessibility](#motion-and-accessibility)
- [Deployment](#deployment)
- [License](#license)
- [Connect with me](#connect-with-me)

## Stack

| | |
|---|---|
| Framework | Next.js 14 (App Router), React 18, TypeScript 5 |
| Styling | Tailwind CSS 3.4 over a CSS-variable design system in Sass |
| Motion | Framer Motion |
| Icons | Font Awesome 6 (`free-solid`, `free-brands`) |
| Fonts | Manrope (body), Space Grotesk (display), JetBrains Mono (labels), via `next/font/google` |
| Monitoring | Sentry, Google Analytics, Web Vitals logging in development |

3D effects are CSS transforms and perspective only — there is no WebGL or 3D
library, which keeps the page light.

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 18.17 or newer
- npm, pnpm, yarn or bun

### Installation

```bash
git clone https://github.com/vinayjain18/my-portfolio.git
cd my-portfolio
npm install
```

### Running locally

```bash
npm run dev
```

The site is served at `http://localhost:3000`.

## Scripts

| Script | Does |
|---|---|
| `npm run dev` | Development server with hot reload |
| `npm run build` | Production build |
| `npm run start` | Serve a production build |
| `npm run lint` | ESLint via `next lint` |

There is also a `push` script that commits everything and pushes to
`origin master`. This repository's default branch is `main`, so that script
will not work as written.

## Environment variables

Both are optional — the site builds and runs without them.

| Variable | Used for | Read in |
|---|---|---|
| `NEXT_PUBLIC_GTAG_ID` | Google Analytics measurement ID | `src/app/layout.tsx` |
| `SENTRY_AUTH_TOKEN` | Uploading source maps to Sentry at build time | `next.config.js` |

`src/constants/config.ts` also declares `NEXT_PUBLIC_GITHUB_TOKEN`,
`NEXT_PUBLIC_VERCEL_TOKEN` and `NEXT_PUBLIC_RESUME_LINK`. Nothing reads them.

## Project structure

```
src/
├── app/
│   ├── layout.tsx           Fonts, metadata, theme script, analytics
│   ├── page.tsx             The single page — composes every section
│   ├── globals.scss         Design tokens, base styles, both themes
│   ├── icon.svg             Theme-aware favicon
│   ├── favicon.ico          Multi-size fallback favicon
│   ├── apple-icon.tsx       Generated iOS home-screen icon
│   ├── _fonts/              Space Grotesk Bold, for the generated icon
│   └── projects/            Project detail route
├── components/
│   ├── layout/              Header and footer
│   ├── sections/            One file per section of the page
│   ├── visuals/             Hero composition, phone, waveform, parallax image
│   ├── theme/               Theme provider, toggle and pre-paint script
│   ├── common/              Shared pieces (Reveal, SectionTitle, ScrollToTop)
│   ├── core/                Layout primitives
│   └── projects/            Project detail route components
├── data/                    All page content
├── constants/               Links, handles and env config
├── hooks/                   useActiveSection
├── types/                   Shared interfaces
└── utils/                   cn() class merger
```

## Page structure

The home page is one route made of ten anchored sections, in this order:

| Id | Section |
|---|---|
| `hero` | Name, role and what I'm building |
| `about` | Background and capabilities |
| `building` | The two current products, side by side |
| `karyalo` | Karyalo showcase — contract lifecycle diagram |
| `voice-agents` | AI voice agents showcase — use cases and capabilities |
| `toolkit` | Technologies, grouped by area |
| `experience` | Scroll-linked career timeline |
| `work` | Selected projects |
| `note` | A short closing note |
| `contact` | Ways to get in touch |

`/projects?id=<project-id>` renders a detail view for any project in
`src/data/projects.ts`, with an intercepted modal for screenshots.

## Editing content

Everything on the page is data-driven. No copy lives in a component unless it is
structural.

| File | Holds |
|---|---|
| `src/data/building.ts` | The two current products, plus voice-agent use cases, capabilities, surfaces and stack |
| `src/data/projects.ts` | Every project. `featured: true` promotes one to the large grid |
| `src/data/experiences.ts` | Roles, dates, locations and descriptions |
| `src/data/skills.ts` | Toolkit groups. `mono: true` marks single-colour logos |
| `src/data/navigation.ts` | Nav links, tracked section ids, mobile labels, booking URL |
| `src/constants/strings.ts` | Name, email, phone and social handles |

Images live in `public/`: `skills/` for technology logos, `images/` and
`screenshots/` for everything else.

## Theming

Three modes — **System**, **Light** and **Dark** — switchable from the header,
and from the menu sheet on mobile.

- Light is warm ivory with charcoal text; dark is near-black with warm white.
  Both share one muted terracotta accent.
- The choice is stored in `localStorage` under `vj-theme`.
- A resolved choice sets `data-theme="light"` or `data-theme="dark"` on `<html>`.
  **System is the absence of that attribute**, so the `prefers-color-scheme`
  media query in `globals.scss` resolves it with no JavaScript.
- A small script inlined in `<head>` applies the stored choice before first
  paint, so a dark-mode visitor never sees a flash of the light theme. It is a
  raw `<script>` rather than `next/script` — the latter runs too late.

Colours are CSS custom properties defined once in `src/app/globals.scss`.
Adding a colour means adding it to the light block and the dark mixin; nothing
should hardcode a hex value in a component.

## Icons

All three carry the same `VJ.` mark from the header.

- `icon.svg` — the primary favicon, and theme-aware: it follows the browser
  chrome via `prefers-color-scheme`. A favicon cannot load a webfont, so it
  falls back to a system bold grotesque.
- `favicon.ico` — 16/32/48/64px fallback, rasterised from Space Grotesk.
- `apple-icon.tsx` — generated at request time with `ImageResponse`, using the
  bundled font in `src/app/_fonts/`. That font has to be passed explicitly or
  the renderer falls back to a thin default weight.

## Motion and accessibility

- Every animation is gated on `prefers-reduced-motion`; when it is set,
  movement is replaced with a plain fade or removed.
- Text meets WCAG AA contrast in both themes.
- Semantic landmarks, a skip link, visible focus rings, keyboard-operable
  navigation, and `aria-current` on the active section.
- State is never signalled by colour alone — the active nav item also changes
  weight, and the current role in the timeline gets a ring as well as an accent.

## Deployment

A standard Next.js app; it deploys to Vercel with no extra configuration. Set
`NEXT_PUBLIC_GTAG_ID` and `SENTRY_AUTH_TOKEN` in the host's environment if you
want analytics and source-map upload.

## License

MIT — see [LICENSE](LICENSE).

## Connect with me

[![GitHub: vinayjain18](https://img.shields.io/badge/vinayjain18-EFF7F6?logo=GitHub&logoColor=333&link=https://www.github.com/vinayjain18)][github]
[![Linkedin: vinayjain18](https://img.shields.io/badge/vinayjain18-EFF7F6?logo=LinkedIn&logoColor=blue&link=https://www.linkedin.com/in/vinayjain18)][linkedin]
[![Twitter: vinayjn18](https://img.shields.io/badge/vinayjn18-EFF7F6?logo=X&logoColor=333&link=https://x.com/vinayjn18)][twitter]
[![Gmail: vinayjain449@gmail.com](https://img.shields.io/badge/vinayjain449@gmail.com-EFF7F6?logo=Gmail&link=mailto:vinayjain449@gmail.com)][gmail]

[github]: https://github.com/vinayjain18
[twitter]: https://twitter.com/vinayjn18
[linkedin]: https://linkedin.com/in/vinayjain18
[gmail]: mailto:vinayjain449@gmail.com
