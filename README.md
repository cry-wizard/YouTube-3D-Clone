# YouTube 3D Clone

A full-featured YouTube clone built with React 19, TypeScript, and Vite — featuring a deep YouTube Dark theme with lightweight CSS 3D transforms, perspective depth, isometric styling, and Framer Motion animations throughout every component. No heavy 3D rendering libraries — pure HTML/CSS/JS with React, delivering a rich 3D visual experience at minimal bundle size.

![YouTube 3D Clone](public/favicon.svg)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Component Inventory](#component-inventory)
- [CSS 3D System](#css-3d-system)
- [Animation System](#animation-system)
- [Theme & Design Tokens](#theme--design-tokens)
- [Installation](#installation)
- [Development](#development)
- [Build](#build)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Bundle Analysis](#bundle-analysis)
- [Browser Support](#browser-support)
- [Performance](#performance)
- [Accessibility](#accessibility)
- [Contributing](#contributing)
- [License](#license)

## Overview

YouTube 3D Clone is a frontend-only YouTube interface clone that recreates the familiar YouTube layout — header with search bar and upload button, collapsible sidebar with navigation and history, category filter pills, and a responsive video grid with hover-to-preview cards — all rendered with a distinctive 3D visual treatment.

The 3D effect is achieved entirely through CSS: `transform-style: preserve-3d`, `perspective` on parent containers, `rotateX`/`rotateY`/`translateZ` transforms on interactive elements, layered box-shadows for depth, gradient overlays for lighting simulation, and border-radius combinations that create beveled edges. Framer Motion handles entrance animations, staggered reveals, hover transitions, and tap feedback.

The project weighs in at **~368KB total** (17.87KB CSS + 367.80KB JS, gzipped: 3.74KB + 114.11KB) — lightweight enough for fast loads while delivering a visually rich experience.

## Features

### Core UI

- **Header Bar** — Fixed top header with YouTube logo (inline SVG), centered tab navigation (Home, Shorts, Subscriptions — each with active state and 3D hover), right section with microphone icon, upload/create button (split into icon+text and icon-only variants), notification bell, and user avatar. Search bar with inline SVG search icon, text input, and search button with 3D press effect.

- **Sidebar Navigation** — Collapsible left sidebar with YouTube logo at top, navigation items (Home, Shorts, Subscriptions, Library, History, Your Videos, Watch Later, Liked Videos) each with inline SVG icons, 3D slant styling (inactive) / 3D raised styling (active), active state indicator, subscribe buttons, and bottom section with Create button, Settings button, About link, History section, and Live section.

- **Category Filter Bar** — Horizontal scrollable pill bar with category options (All, Music, Gaming, Live, News, Sports, Learning, Fashion & Beauty, Tech, Science, Podcasts) — each pill as a 3D raised button with hover lift and active sunken state. Show More button with chevron icon.

- **Video Grid** — Responsive 4-column grid of video cards. Each card contains: 3D thumbnail (inline SVG programmatic pattern, unique per video), play icon overlay (visible on hover), duration badge (bottom-right, 3D raised), trending badge (top-left, for selected videos), title (2-line clamp), channel avatar (circular, 3D), channel name with verified badge, view count, upload time, and subscribe button. Hover reveals a preview panel with full details.

- **Video Card Preview Panel** — On card hover, a panel slides in showing expanded video info: header with back arrow and title, content area with thumbnail (3D play icon overlay), description (2-line clamp), channel row with avatar and verified badge and subscribe button, and action buttons (like, dislike, share, download, save, thanks — each as 3D icon buttons with hover animations).

### 3D Visual System

- **Perspective containers** — Parent containers set `perspective` to create depth staging for child 3D transforms
- **Preserve-3d** — Elements with children use `transform-style: preserve-3d` to maintain the 3D hierarchy
- **Depth transforms** — `translateZ` on cards/panels creates layered depth; `rotateX`/`rotateY` on interactive elements creates subtle perspective tilt on hover
- **Layered shadows** — Multiple `box-shadow` layers (dark ambient + colored rim light) simulate depth and lighting
- **Gradient overlays** — Linear gradients on surfaces simulate light falloff and beveled edges
- **Border radius** — Different radii on different sides create pseudo-3D beveled appearances
- **Active states** — Toggle between 3D slant (inactive), 3D raised (hover), and 3D sunken (active) across all interactive elements

### Animations (Framer Motion)

- **Entrance animations** — Sidebar items, video cards, category pills stagger in on mount with `opacity: 0 → 1` and `y: 20 → 0` translate
- **Hover transitions** — Cards lift with `translateY` and shadow expansion; sidebar items scale and glow; tabs highlight with color shift and shadow depth
- **Tap feedback** — Buttons depress with `scale: 0.95` and shadow contraction on click
- **Preview panel** — Slides in from the right on card hover with `x: 20 → 0` translate and opacity fade
- **Navigation transitions** — Active sidebar item switches with a brief highlight animation

### Theme

- **YouTube Dark** — Full dark theme: background `#0F0F0F`, surface `#181818`, elevated `#272727`, text `#F1F1F1`, secondary text `#AAAAAA`, red accent `#FF0000`, muted red `#710000`, input bg `#121212`
- **Typography** — Roboto (Google Fonts) for all text, weights 300/400/500/700
- **Iconography** — Inline SVG paths (no external icon library dependency) with `currentColor` inheritance for theme consistency
- **Responsive** — Adapts to viewport; sidebar collapses conceptually, video grid adjusts columns

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Language | TypeScript 5 |
| Build Tool | Vite 6 |
| Styling | Plain CSS with CSS custom properties (no CSS-in-JS, no Tailwind) |
| Animation | Framer Motion 11 |
| Icons | Inline SVG paths (custom, no external icon library) |
| Fonts | Google Fonts — Roboto (300/400/500/700) |
| Package Manager | npm |
| Linter | Oxlint |

### What's NOT used

- No Three.js / React Three Fiber / `@react-three/*` — 3D is pure CSS
- No Tailwind CSS — hand-written CSS with custom properties
- No CSS-in-JS (styled-components, Emotion) — plain CSS files
- No external icon library (Font Awesome, Lucide, Heroicons) — inline SVG paths
- No state management library (Redux, Zustand) — React hooks only (`useState`)
- No routing library (React Router) — single-page layout
- No HTTP client (Axios, React Query) — no API calls; mock data only

## Architecture

### Component Hierarchy

```
App
├── Header (fixed top, flex row: logo | tabs | actions)
│   ├── Logo (inline SVG)
│   ├── TabNav (Home, Shorts, Subscriptions — 3D tabs)
│   ├── SearchBar (icon + input + button)
│   ├── UploadButton (icon + text, 3D raised)
│   ├── IconButtons (mic, bell — 3D hover)
│   └── Avatar (inline SVG circle, 3D)
├── Sidebar (left, flex column: logo | nav items | bottom section)
│   ├── Logo (inline SVG)
│   ├── NavItems (8 items — 3D slant/raised, active indicator)
│   └── BottomSection (create, settings, about, history, live)
│       ├── CreateButton (3D raised)
│       ├── SettingsButton (3D hover)
│       ├── AboutLink (text)
│       ├── HistorySection (label + items with timestamps)
│       └── LiveSection (label + items with viewer counts)
├── CategoryBar (horizontal scrollable pill bar)
│   └── CategoryPills (All, Music, Gaming, ... — 3D raised, active sunken)
└── VideoGrid (responsive 4-column grid)
    └── VideoCard (10 cards — 3D thumbnail, hover preview)
        ├── Thumbnail (inline SVG pattern, 3D, play overlay on hover)
        ├── DurationBadge (3D raised, bottom-right)
        ├── TrendingBadge (3D, top-left, conditional)
        ├── Title (2-line clamp)
        ├── ChannelRow (avatar + name + verified + views + time)
        │   ├── Avatar (circular, 3D)
        │   ├── ChannelName (with verified badge)
        │   ├── Views (text)
        │   └── Time (text)
        ├── SubscribeButton (3D toggle)
        └── PreviewPanel (on hover — slides in from right)
            ├── Header (back arrow + title)
            ├── Content (thumbnail with play icon)
            ├── Description (2-line clamp)
            ├── ChannelRow (avatar + verified + subscribe)
            └── Actions (like, dislike, share, download, save, thanks — 3D icon buttons)
```

### Data Flow

- **Mock data** — `VideoGrid` defines a static `videos` array (10 videos with title, channel, avatar URI, views, time, trending flag, highViews flag, tags). No API calls, no backend.
- **State** — `useState` used in:
  - `Sidebar`: `activeItem` — tracks which nav item is active (default: "home")
  - `VideoGrid`: `hoveredVideo` — tracks which card is hovered (triggers preview panel)
- **Props** — Components receive data via props; no context or Redux
- **Render** — Pure functional components; no class components

### CSS Architecture

- **Single `index.css`** — All styles in one file (~1268 lines), organized by section:
  1. CSS custom properties (variables)
  2. Reset / base
  3. Layout (app, header, sidebar, main-layout, content)
  4. Header styles
  5. Sidebar styles
  6. Category bar styles
  7. Video grid styles
  8. Video card styles
  9. Preview panel styles
  10. 3D utility classes
  11. Animation keyframes
  12. Responsive media queries
- **CSS custom properties** — All colors, spacing, radii, shadows, and transforms defined as `--yt-*` variables on `:root` for easy theming
- **3D utility classes** — Reusable `.yt-3d`, `.yt-3d-card`, `.yt-3d-raised`, `.yt-3d-slant`, `.yt-3d-sunken` classes applied across components

## Component Inventory

### Header

- **File:** `src/components/Header.tsx`
- **Lines:** ~140
- **Props:** none (self-contained)
- **State:** none
- **Renders:** Fixed header bar with logo, tab navigation, search bar, upload button, mic icon, bell icon, user avatar
- **3D effects:** Tab hover lift (`.yt-header-tab` with `.yt-3d`), search button press (`.yt-3d-click`), upload button raised (`.yt-3d-raised`), avatar 3D circle
- **Animations:** `AnimatePresence` for tab active state transitions; `whileHover`/`whileTap` on icon buttons

### Sidebar

- **File:** `src/components/Sidebar.tsx`
- **Lines:** ~176
- **Props:** none
- **State:** `activeItem` (string, default "home")
- **Renders:** Logo, 8 nav items with icons and labels, bottom section with create/settings/about/history/live
- **3D effects:** Inactive items use `.yt-3d-slant` (subtle perspective tilt), active item uses `.yt-3d-raised` (elevated with shadow), hover scale on items
- **Animations:** Staggered entrance on mount (items animate in sequence from top to bottom)

### CategoryBar

- **File:** `src/components/CategoryBar.tsx`
- **Lines:** ~38
- **Props:** none
- **State:** none
- **Renders:** Horizontal scrollable container with 11 category pills and a "Show More" button
- **3D effects:** Each pill is `.yt-3d-raised` (elevated card style); active pill switches to `.yt-3d-sunken` (pressed into surface); "Show More" button has `.yt-3d-hover` lift on hover
- **Animations:** Staggered entrance on mount

### VideoGrid

- **File:** `src/components/VideoGrid.tsx`
- **Lines:** ~235
- **Props:** none
- **State:** `hoveredVideo` (string | null) — ID of the video card currently hovered
- **Renders:** 10 video cards in a 4-column responsive grid; hover preview panel for the hovered card
- **3D effects:** Cards use `.yt-3d-card` (layered shadows, beveled edges, perspective); thumbnail uses `.yt-thumbnail-3d`; duration badge uses `.yt-duration-badge` (3D raised pill); trending badge uses `.yt-trending-badge`; preview panel uses `.yt-preview-panel` with depth
- **Animations:** Staggered entrance on mount (cards animate in sequence); preview panel slides in on hover with `x` and `opacity` transition

### IconButton

- **File:** `src/components/IconButton.tsx`
- **Lines:** ~95
- **Props:** `icon` (string — key into `iconPaths` record), `size` (number, default 20), `className` (string), `onClick` (function)
- **Renders:** Inline SVG icon wrapped in a button element
- **3D effects:** `.yt-3d-hover` on the wrapper — lift on hover with shadow expansion
- **Animations:** `whileHover` scale 1.1, `whileTap` scale 0.9 with shadow contraction
- **Icon map:** 8 icons — `menu`, `search`, `microphone`, `videoCall`, `notifications`, `user`, `playCircle`, `settings` — all inline SVG paths

### YouTubeButton (not currently used in the main layout, available as utility)

- **File:** `src/components/YouTubeButton.tsx`
- **Lines:** ~153
- **Purpose:** Reusable button component with 3D styling variants (raised, sunken, flat) and hover/active animations

### YouTubeAvatar (not currently used in the main layout, available as utility)

- **File:** `src/components/YouTubeAvatar.tsx`
- **Lines:** ~32
- **Purpose:** Reusable avatar component with 3D circle styling, size variants, and fallback

## CSS 3D System

The 3D visual language is built on a small set of reusable CSS classes and custom properties. Every 3D element is a composition of these primitives.

### Custom Properties (Design Tokens)

```css
:root {
  /* Colors */
  --yt-red: #FF0000;
  --yt-dark: #0F0F0F;
  --yt-bg: #181818;
  --yt-surface: #272727;
  --yt-text: #F1F1F1;
  --yt-text-secondary: #AAAAAA;
  --yt-muted-red: #710000;
  --yt-border: rgba(255, 255, 255, 0.12);
  --yt-hover-bg: rgba(255, 255, 255, 0.08);

  /* Spacing */
  --yt-spacing-xs: 4px;
  --yt-spacing-sm: 8px;
  --yt-spacing-md: 12px;
  --yt-spacing-lg: 16px;
  --yt-spacing-xl: 24px;
  --yt-spacing-xxl: 32px;

  /* Radii */
  --yt-radius-sm: 4px;
  --yt-radius-md: 8px;
  --yt-radius-lg: 12px;
  --yt-radius-pill: 9999px;
  --yt-radius-circle: 50%;

  /* Shadows */
  --yt-shadow-depth: 0 2px 4px rgba(0, 0, 0, 0.5), 0 1px 0 rgba(255, 255, 255, 0.08) inset;
  --yt-shadow-lifted: 0 4px 12px rgba(0, 0, 0, 0.6), 0 2px 4px rgba(0, 0, 0, 0.4), 0 1px 0 rgba(255, 255, 255, 0.1) inset;
  --yt-shadow-3d-raised: 0 4px 8px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3), 0 1px 0 rgba(255, 255, 255, 0.12) inset;

  /* 3D Transforms */
  --yt-3d-tilt: rotateX(2deg) rotateY(-2deg);
  --yt-3d-raised-transform: translateY(-2px);
  --yt-3d-sunken-transform: translateY(1px);
  --yt-3d-hover-scale: scale(1.03);
}
```

### 3D Primitives

| Class | Effect | Used On |
|---|---|---|
| `.yt-3d` | Base 3D: `transform-style: preserve-3d`, subtle `rotateX/Y` tilt, layered shadow, gradient overlay, border | Sidebar items (inactive), tabs (inactive), general surfaces |
| `.yt-3d-card` | Card 3D: deeper shadow, stronger tilt, border-radius bevel | Video cards, preview panel |
| `.yt-3d-raised` | Raised: `translateY(-2px)`, expanded shadow, brighter border highlight | Active sidebar items, upload button, category pills (inactive), subscribe button |
| `.yt-3d-sunken` | Sunken: `translateY(1px)`, contracted shadow, darker border | Active tabs, active category pills, pressed buttons |
| `.yt-3d-slant` | Slant: `rotateX(1deg) rotateY(-1deg)`, subtle perspective | Sidebar items (inactive) |
| `.yt-3d-hover` | Hover lift: `scale(1.03)` + shadow expansion on `:hover` | Icon buttons, action buttons, category pills, tabs |
| `.yt-3d-click` | Click press: `scale(0.95)` + shadow contraction on `:active` | Search button, upload button |
| `.yt-3d-icon` | Icon 3D: circular 3D container for icons | Sidebar icons, header icons |
| `.yt-thumbnail-3d` | Thumbnail 3D: depth shadow, beveled border, perspective | Video card thumbnails |
| `.yt-duration-badge` | Duration badge: 3D raised pill, positioned bottom-right | Video card duration indicators |
| `.yt-trending-badge` | Trending badge: 3D pill with gradient, positioned top-left | Trending video indicators |
| `.yt-preview-panel` | Preview panel: deep shadow, perspective tilt, slide-in animation | Card hover preview |

### How It Works

Each 3D class is a composition of:
1. **`transform-style: preserve-3d`** — enables 3D child transforms
2. **`transform`** — `rotateX/Y` for perspective tilt, `translateY/Z` for depth positioning
3. **`box-shadow`** — multiple layered shadows (dark ambient + colored rim light) for depth perception
4. **`background`** — linear gradient overlay simulates light direction and surface curvature
5. **`border`** — semi-transparent border with highlight color on top/left edges simulates beveled edges
6. **`border-radius`** — varying radii create pseudo-3D beveled corners

The 3D effect is **pure CSS** — no WebGL, no canvas, no shaders. This keeps the bundle small and the rendering fast.

## Animation System

Framer Motion (`framer-motion`) provides declarative animations via the `motion` component and `AnimatePresence` for mount/unmount transitions.

### Used Patterns

| Pattern | Implementation | Where |
|---|---|---|
| **Staggered entrance** | `motion.div` with `initial={{ opacity: 0, y: 20 }}`, `animate={{ opacity: 1, y: 0 }}`, `transition={{ delay: i * 0.05, duration: 0.3 }}` | Sidebar items, video cards, category pills |
| **Hover lift** | `whileHover={{ y: -4, boxShadow: '...' }}` on `motion.button` | Sidebar items, video cards |
| **Tap press** | `whileTap={{ scale: 0.95, boxShadow: '...' }}` | Buttons, icon buttons |
| **Active state transition** | `AnimatePresence` wrapping active indicator with `exit={{ opacity: 0 }}`, `enter={{ opacity: 1 }}` | Tab active underline, sidebar active highlight |
| **Preview panel slide** | Card hover triggers state change; preview panel `motion.div` with `initial={{ x: 20, opacity: 0 }}`, `animate={{ x: 0, opacity: 1 }}` | Video card preview |
| **Icon hover scale** | `whileHover={{ scale: 1.15 }}` on icon buttons | Header icons, sidebar icons, action buttons |

### GSAP (CDN — loaded but not actively used in components)

GSAP is included via CDN in `index.html` as a supplementary animation library. It's available for complex timeline animations if needed, but the current UI uses Framer Motion for all animations. The GSAP script tag is present in `index.html`:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
```

## Theme & Design Tokens

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--yt-red` | `#FF0000` | YouTube brand red, subscribe buttons, trending badge, active accents |
| `--yt-dark` | `#0F0F0F` | Page background, header background |
| `--yt-bg` | `#181818` | Surface background, sidebar background, card backgrounds |
| `--yt-surface` | `#272727` | Elevated surfaces, hover backgrounds, input backgrounds |
| `--yt-text` | `#F1F1F1` | Primary text — titles, labels, channel names |
| `--yt-text-secondary` | `#AAAAAA` | Secondary text — view counts, timestamps, descriptions |
| `--yt-muted-red` | `#710000` | Muted red for subtle red accents |
| `--yt-border` | `rgba(255, 255, 255, 0.12)` | Default borders |
| `--yt-hover-bg` | `rgba(255, 255, 255, 0.08)` | Hover background tint |

### Typography

- **Font:** Roboto (Google Fonts, weights 300/400/500/700)
- **Base size:** 14px (YouTube standard)
- **Title sizes:** 16px (video titles), 18px (sidebar labels — optional)
- **Small text:** 12px (view counts, timestamps, badges)
- **Line height:** 1.5 (default), 1.4 (tight headings)

### Spacing System

Based on a 4px grid:
- `xs`: 4px
- `sm`: 8px
- `md`: 12px
- `lg`: 16px
- `xl`: 24px
- `xxl`: 32px

## Installation

### Prerequisites

- **Node.js** 20+ (for Vite and React 19)
- **npm** 10+ (comes with Node.js)
- **Git** (for version control)

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/cry-wizard/YouTube-3D-Clone.git
cd YouTube-3D-Clone

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Open in browser
# The dev server runs at http://localhost:5173/ by default
```

### Alternative: Vite Preview

After building, you can preview the production build locally:

```bash
npm run build
npm run preview
```

This serves the `dist/` directory at `http://localhost:4173/` (or a random port if 4173 is taken).

## Development

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite development server with HMR (Hot Module Replacement) |
| `npm run build` | Production build — TypeScript type-check + Vite bundle to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run Oxlint on the codebase |

### Development Workflow

1. **Start the dev server:** `npm run dev`
2. **Edit source files** in `src/` — Vite HMR updates the browser instantly without full reload
3. **TypeScript checks** run on every build; type errors show in the terminal
4. **Oxlint** can be run manually with `npm run lint` to check for React and TypeScript issues

### Environment

- Vite serves on `http://localhost:5173/` by default
- HMR (Hot Module Replacement) is enabled — component changes reflect instantly
- Source maps are included in dev mode for debugging
- No backend or API required — the app runs entirely in the browser with mock data

### Project Configuration

- **`vite.config.ts`** — Vite configuration with React plugin (`@vitejs/plugin-react`), enables HMR, sets up the build output
- **`tsconfig.json`** — TypeScript configuration with `strict: true`, JSX transform set to `react-jsx`, path resolution for `src/`
- **`.oxlintrc.json`** — Oxlint configuration with React and TypeScript plugins, type-aware rules enabled

## Build

```bash
npm run build
```

Output:

```
dist/
├── index.html              (0.84 KB)
├── assets/
│   ├── index-<hash>.css    (~17.87 KB, gzipped ~3.74 KB)
│   └── index-<hash>.js     (~367.80 KB, gzipped ~114.11 KB)
```

The build process:
1. **TypeScript type-check** — `tsc -b` validates all types (no type errors in the final build)
2. **Vite bundling** — `vite build` bundles all modules, applies tree-shaking, minifies JS/CSS, generates hashed filenames for cache busting
3. **Output** — `dist/` directory ready for static serving

### Build Optimization

- **Tree-shaking** — Vite removes unused exports (Framer Motion animations are tree-shaken where not used)
- **Minification** — JavaScript is minified with default Vite minifier; CSS is minified
- **Code splitting** — Vite automatically splits the bundle; the main chunk contains React + Framer Motion + app code
- **Gzip** — The built assets are gzip-friendly (the server should serve with `Content-Encoding: gzip`)

## Deployment

### Static Hosting Options

The app is a static single-page application — deploy the `dist/` directory to any static host:

| Platform | Command / Config |
|---|---|
| **Vercel** (recommended) | Connect the GitHub repo; Vercel auto-detects Vite and builds. Or `vercel --prod` from the project root. |
| **Netlify** | Drag-and-drop the `dist/` folder, or connect the GitHub repo with build command `npm run build` and publish directory `dist`. |
| **GitHub Pages** | Enable Pages in repo settings, set source to `main` branch and `/dist` folder (or use a GitHub Actions workflow to build and deploy). |
| **Cloudflare Pages** | Connect the GitHub repo; build command `npm run build`, publish directory `dist`. |
| **Any static server** | Copy `dist/` to any web server (nginx, Apache, S3 static hosting, etc.) |

### Vercel Deployment (Detailed)

1. Install Vercel CLI: `npm i -g vercel`
2. From the project root: `vercel` (links to account, creates preview deployment)
3. For production: `vercel --prod`
4. The deployment URL is shown in the terminal output

Vercel automatically:
- Detects the Vite project
- Runs `npm install` and `npm run build`
- Serves the `dist/` directory
- Sets up CDN distribution
- Provides HTTPS and custom domain support

### Environment Variables

No environment variables are required for the base application. If extending with an API, create a `.env` file (already git-ignored) with variables like:

```
VITE_API_BASE_URL=https://your-api.example.com
```

Vite exposes `VITE_*` variables to the client bundle via `import.meta.env.VITE_*`.

## Project Structure

```
YouTube-3D-Clone/
├── public/                   # Static assets served as-is
│   ├── favicon.svg           # YouTube red play button favicon
│   └── icons.svg             # Additional icon sprite (if needed)
├── src/                      # Source code
│   ├── components/           # React components
│   │   ├── App.tsx           # Root component — composes Header, Sidebar, CategoryBar, VideoGrid
│   │   ├── Header.tsx        # Fixed top header bar
│   │   ├── Sidebar.tsx       # Left navigation sidebar
│   │   ├── CategoryBar.tsx   # Horizontal category filter pills
│   │   ├── VideoGrid.tsx     # Responsive video card grid + preview panel
│   │   ├── IconButton.tsx    # Reusable 3D icon button with inline SVG icons
│   │   ├── YouTubeButton.tsx # Reusable button with 3D styling variants
│   │   └── YouTubeAvatar.tsx # Reusable avatar with 3D circle styling
│   ├── main.tsx              # React entry point — creates root and renders App
│   ├── App.tsx               # Root component (imported by main.tsx)
│   ├── index.css             # All styles — variables, layout, components, 3D utilities, animations
│   └── vite-env.d.ts         # Vite TypeScript declarations (auto-generated)
├── .gitignore                # Git ignore rules
├── .oxlintrc.json            # Oxlint configuration
├── index.html                # HTML entry — Google Fonts preconnect, viewport meta, favicon
├── package.json              # Dependencies and scripts
├── package-lock.json         # Lockfile
├── tsconfig.json             # TypeScript config (references)
├── tsconfig.app.json         # App TypeScript config
├── tsconfig.node.json        # Node/Vite TypeScript config
├── vite.config.ts            # Vite configuration
└── README.md                 # This file
```

### src/ Directory Detail

```
src/
├── components/
│   ├── App.tsx              # 23 lines — top-level composition
│   ├── CategoryBar.tsx      # 38 lines — pill bar
│   ├── Header.tsx           # ~140 lines — header bar with tabs, search, actions
│   ├── IconButton.tsx       # ~95 lines — icon button with 8 inline SVG icons
│   ├── Sidebar.tsx          # ~176 lines — sidebar with nav, history, bottom section
│   ├── VideoGrid.tsx        # ~235 lines — video grid + preview panel
│   ├── YouTubeAvatar.tsx    # 32 lines — avatar component (utility)
│   └── YouTubeButton.tsx    # 153 lines — button component (utility)
├── main.tsx                 # 12 lines — React 19 createRoot entry
└── index.css                # ~1268 lines — complete stylesheet
```

## Dependencies

### Production Dependencies

| Package | Version | Purpose |
|---|---|---|
| `react` | ^19.0.0 | UI library — components, hooks, JSX |
| `react-dom` | ^19.0.0 | React DOM renderer — mounts app to the page |
| `framer-motion` | ^11.0.0 | Animation library — declarative animations, gestures, layout transitions |

### Development Dependencies

| Package | Version | Purpose |
|---|---|---|
| `@types/react` | ^19.0.0 | TypeScript types for React |
| `@types/react-dom` | ^19.0.0 | TypeScript types for React DOM |
| `@vitejs/plugin-react` | ^4.0.0 | Vite plugin — Fast Refresh, JSX transform |
| `oxlint` | (dev) | Fast Rust-based linter for JavaScript/TypeScript/React |
| `typescript` | ^5.0.0 | TypeScript compiler — type checking, transpilation |
| `vite` | ^6.0.0 | Build tool and dev server |

### Previously Considered / Removed

- **Three.js / React Three Fiber** — Initially installed for real 3D rendering, but removed after pivoting to CSS 3D effects (lighter, faster, no bundle bloat)
- **@react-three/fiber, @react-three/drei, @types/three** — Removed; not used

### Why No Heavy 3D Libraries

The project's 3D effect is achieved through CSS transforms, shadows, and perspective — not WebGL rendering. This means:
- No GPU-heavy 3D context
- No shader compilation
- No large geometry buffers
- No canvas overlay
- Bundle stays small (368KB total vs 1MB+ with Three.js)
- Renders on all devices including low-end mobile
- CSS 3D is GPU-accelerated by the browser compositor

## Bundle Analysis

### Production Build Sizes

| Asset | Size | Gzipped |
|---|---|---|
| `index.html` | 0.84 KB | 0.45 KB |
| `index-<hash>.css` | 17.87 KB | 3.74 KB |
| `index-<hash>.js` | 367.80 KB | 114.11 KB |
| **Total** | **386.51 KB** | **118.30 KB** |

### What's in the JS bundle

- **React 19** — runtime + JSX transform
- **React DOM 19** — DOM rendering
- **Framer Motion 11** — animation runtime (tree-shaken where unused)
- **App code** — all components, styles imported as CSS (not JS)

### What's in the CSS bundle

- All styles from `src/index.css` (~1268 lines) — variables, layout, component styles, 3D utilities, keyframes
- Google Fonts are loaded externally (not in the bundle) via `<link>` in `index.html`

### Optimization Notes

- The large JS size (367KB) is dominated by React + Framer Motion — these are necessary for the component architecture and animations
- CSS is small (17.87KB) because it's a single plain CSS file with no CSS-in-JS overhead
- Gzipped total (118KB) is well within acceptable limits for a feature-rich UI
- No images are bundled — thumbnails are inline SVGs, icons are inline SVGs

## Browser Support

### Target Browsers

| Browser | Version | Support |
|---|---|---|
| Chrome | Latest | Full support |
| Firefox | Latest | Full support |
| Safari | 15+ | Full support |
| Edge | Latest | Full support |
| Chrome (Android) | Latest | Full support |
| Safari (iOS) | 15+ | Full support |

### CSS Features Used

- CSS custom properties (`var(--*)`) — all modern browsers
- `transform-style: preserve-3d` — all modern browsers
- `perspective` — all modern browsers
- `translateZ`, `rotateX`, `rotateY` — all modern browsers
- `box-shadow` with multiple layers — all modern browsers
- `linear-gradient` — all modern browsers
- `border-radius` — all modern browsers
- `backdrop-filter` — not used (kept for wider support)
- `@keyframes` — all modern browsers
- CSS Grid (`display: grid`) — all modern browsers
- CSS Flexbox (`display: flex`) — all modern browsers
- `clamp()` — not used (kept for wider support)
- `aspect-ratio` — not used (kept for wider support)

### Known Limitations

- **Internet Explorer** — not supported (no `preserve-3d`, no CSS custom properties, no flexbox gaps)
- **Old Safari (< 15)** — may have partial 3D transform support; not tested
- **Very old mobile browsers** — 3D transforms may fall back to flat rendering; layout still works

## Performance

### Load Time

- **First contentful paint:** ~1-2 seconds on a 4G connection (368KB total, gzipped 118KB)
- **Time to interactive:** ~2-3 seconds (React + Framer Motion initialization)
- **Bundle size:** 368KB total (17.87KB CSS + 367.80KB JS), 118KB gzipped

### Runtime Performance

- **CSS 3D transforms** are handled by the browser compositor — no JavaScript animation loops
- **Framer Motion** uses `requestAnimationFrame` for animations — efficient, batched
- **No re-renders** from state changes except `hoveredVideo` (single state change per hover)
- **Mock data** is static — no API calls, no network latency
- **No external image requests** — thumbnails are inline SVGs, icons are inline SVGs

### Optimization Opportunities (Future)

- **Lazy load routes** — if pages are added, use `React.lazy` + `Suspense`
- **Code split** — if the app grows, split components into separate chunks
- **Image optimization** — if real thumbnails are added, use responsive `srcset` and modern formats (WebP/AVIF)
- **Font preloading** — currently using `preconnect` in `index.html`; could add `preload` for the actual font files
- **Service worker** — could add for offline caching if deployed as a PWA

## Accessibility

### Current State

- **Semantic HTML** — `header`, `nav`, `main`, `button`, `h3` elements used appropriately
- **Focus indicators** — default browser focus outlines on buttons (can be enhanced)
- **Color contrast** — dark theme with light text; contrast ratios meet WCAG AA for large text
- **Screen reader** — basic support; titles and labels are real text (not images)

### Known Accessibility Gaps

- **Keyboard navigation** — buttons are focusable, but full keyboard navigation (tab order, enter/space activation) should be tested
- **ARIA labels** — not extensively used; icon-only buttons (mic, bell) lack `aria-label`
- **Reduced motion** — Framer Motion animations don't check `prefers-reduced-motion`; could add a media query check
- **Focus management** — no explicit focus management on preview panel open/close

### Enhancement Ideas

```css
/* Reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Make changes — follow the existing code style (plain CSS, functional components, inline SVG icons)
4. Test locally: `npm run dev` and verify in browser
5. Build check: `npm run build` (must pass with no errors)
6. Commit: `git commit -m "feat: description"`
7. Push: `git push origin feature/my-feature`
8. Open a Pull Request

### Code Style Guidelines

- **React components** — functional components with hooks; no class components
- **CSS** — plain CSS in `src/index.css`; use existing `--yt-*` variables; add new variables to `:root` if needed
- **Icons** — inline SVG paths in `IconButton.tsx` `iconPaths` record; use `currentColor` for fill/stroke to inherit theme color
- **3D effects** — compose from existing `.yt-3d*` utility classes; add new utility classes if a new 3D effect is needed
- **TypeScript** — strict mode; no `any` types; define interfaces for data shapes
- **No external assets** — prefer inline SVG over external images; prefer CSS over images for decorations

## License

This project is licensed under the MIT License — see the LICENSE file for details.

Free to use, modify, and distribute for any purpose. Attribution appreciated but not required.

---

**Built with ❤️ using React 19, TypeScript, Vite, Framer Motion, and pure CSS 3D transforms.**

For questions, feature requests, or contributions, open an issue on GitHub.
