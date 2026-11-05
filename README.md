# COSMIC CREW DEVELOPMENT

An animated, indie-game-studio website built for **Cosmic Crew Development** — "Gaming Legends".
Designed around the supplied astronaut logo (ember orange / nebula purple / warm cream on void black).

---

## Project Overview

- **Name**: Cosmic Crew Development
- **Goal**: A striking single-page studio site that sells the crew's craft and collects crew applications.
- **Vibe**: Deep-space, holographic, cinematic — animated but never noisy.
- **Stack**: Hono + TypeScript on Cloudflare Pages, vanilla CSS/JS (no framework, no build bloat).

## Live Preview (sandbox)

- **Local**: http://localhost:3000
- **Public**: the sandbox service URL for port 3000 (see `GetServiceUrl`)

## Features (currently completed)

### Visual system
- Sampled palette straight from the logo: `--void #05030b`, `--ember #f4761c`, `--nebula #3a2470`, `--cream #f7e9c9`
- Animated **starfield canvas** — ~260 twinkling stars, parallax drift, occasional shooting stars, DPR-aware, pauses on hidden tab
- Three drifting **nebula glow** blobs, masked grid veil, film grain overlay
- **Cursor glow** that trails the pointer (fine-pointer devices only)
- Top **scroll progress bar**, scroll-aware sticky nav that condenses on scroll

### Sections
| Section | ID | What's in it |
|---|---|---|
| Hero | `#top` | Floating logo with 3 counter-rotating orbit rings + pulsing halo, gradient-shifting headline, animated stat counters |
| Tech marquee | — | Infinite scrolling engine/tech ticker (Unity, Unreal, Godot, Three.js, WebGL…) |
| Mission | `#about` | Studio story + live "Crew Manifest" holographic card with scanline and animated stat bars |
| Services | `#services` | 6 capability cards with cursor-following spotlight + 3D tilt |
| Work | `#work` | 3 case studies, each with a bespoke **CSS-drawn animated artwork** (orbital planet, synthwave grid, starburst core) |
| Process | `#process` | 5-step vertical timeline with glowing nodes |
| Quote | — | Client testimonial card |
| Join | `#join` | Open roles + working application form |
| CTA | — | Contact band |
| Footer | — | Logo, link columns, dynamic year |

### Interaction & motion
- IntersectionObserver **scroll reveals** with staggered delays
- **Animated counters** that count up when scrolled into view
- **3D tilt** on cards and work items
- **Magnetic buttons** that lean toward the cursor
- **Active section highlighting** in the nav
- Full **mobile hamburger menu** with staggered link entry, Esc to close, scroll lock
- Full **`prefers-reduced-motion`** support (all animation disabled, content visible)
- `<noscript>` fallback so reveals never hide content without JS

## API Endpoints

| Method | Path | Params | Returns |
|---|---|---|---|
| `GET` | `/` | — | The full site (server-rendered HTML) |
| `POST` | `/api/apply` | JSON: `name`, `email`, `role`, `link?`, `message` | `{ ok: true, id }` or `{ ok: false, error }` |
| `GET` | `/api/stats` | — | `{ applications: number }` |
| `GET` | `/api/health` | — | `{ ok: true, service }` |

**Validation**: server re-validates every field (name ≤120, RFC-ish email ≤200, role ≤80, message ≤4000)
and returns proper `400`s. The client mirrors this with inline field errors.

## Data Architecture

- **Model**: `applications` — `id`, `name`, `email`, `role`, `link`, `message`, `created_at`
- **Storage**: Cloudflare **D1** (binding `DB`), table auto-created on first write
- **Migration**: `migrations/0001_applications.sql`
- **Graceful degradation**: if no `DB` binding is present, submissions are logged rather than
  erroring in the user's face — the site never breaks.

## Static Assets

```
public/static/
├── cosmic-crew-logo.png   # supplied logo (used in nav, hero, footer, favicon)
├── style.css              # ~1,720 lines, hand-written design system
└── app.js                 # starfield, reveals, tilt, counters, form logic
```

## Local Development

```bash
npm install
npm run build
pm2 start ecosystem.config.cjs        # serves dist on :3000 with local D1
pm2 logs webapp --nostream
```

Apply the DB migration locally:

```bash
npx wrangler d1 migrations apply webapp-production --local
```

## User Guide

1. Scroll the hero — the logo orbits, stars drift, stats count up.
2. Hover any service or case-study card — it tilts and lights up under your cursor.
3. Use the nav to jump between Mission / Services / Work / Process.
4. On mobile, tap the hamburger for the full-screen menu.
5. To apply: fill **Join the crew** (name, email, role, optional portfolio, message) → **Send transmission**.
   Success state turns the button green and resets the form.

## Not Yet Implemented / Next Steps

- `/api/stats` is wired but the hero currently shows static marketing numbers — switch the hero
  stats to live values when real data accumulates.
- No admin view for reading applications (`SELECT * FROM applications` via `wrangler d1 execute` for now).
- Case study pages are labels only — build `/work/orbital-drift` etc. if deeper write-ups are wanted.
- No email notification on new application (would need Resend/SendGrid via a server route + secret).
- Discord/newsletter links in the footer are placeholders.

## Deployment

- **Platform**: Cloudflare Pages
- **Status**: ✅ Running locally in the sandbox (build + API verified)
- **Tech Stack**: Hono 4 · TypeScript · Vite 8 · Wrangler 4 · vanilla CSS/JS
- **D1 binding**: `DB` → `webapp-production`
- **Last Updated**: 2026-11-05
