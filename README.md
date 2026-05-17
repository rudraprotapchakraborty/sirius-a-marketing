# Sirius A Marketing

Marketing site for Sirius A, a performance-led digital marketing studio. Built with Next.js 16, React 19, and Tailwind v4.

## Stack

- **Framework:** Next.js 16 (App Router) · React 19
- **Styling:** Tailwind CSS v4 with CSS-variable design tokens
- **UI primitives:** Radix UI + shadcn/ui patterns (under `components/ui/`)
- **Motion:** Framer Motion
- **Forms:** React Hook Form + Zod validation
- **Email:** Nodemailer (Zoho SMTP) for the contact form
- **Subscriptions:** EmailJS (newsletter form)
- **Analytics:** Google Analytics (via `next/script`)
- **Database:** Firebase (Firestore) — optional, see env section
- **Icons:** Lucide React + React Icons

## Design system

The visual identity ("Stellar") lives in two files:

- [`styles/globals.css`](styles/globals.css) — CSS variables, fonts, utilities, animations
- [`tailwind.config.ts`](tailwind.config.ts) — Tailwind color aliases, font families, easing tokens

### Palette

| Token | HSL var | Hex | Use |
| --- | --- | --- | --- |
| `bg-ink` | `--ink` | `#040814` | Page base |
| `bg-surface` | `--surface` | `#0F1422` | Cards |
| `bg-surface-2` | `--surface-2` | `#171E33` | Elevated cards |
| `text-cobalt-glow` | `--cobalt-glow` | `#5BA0FF` | Primary accent |
| `text-cobalt` | `--cobalt` | `#2E7CF6` | Primary, matches logo |
| `text-ice` | `--ice` | `#7FE5FF` | Highlights |
| `text-gold` | `--gold` | `#F5C26B` | Warm accent |
| `text-text-dim` | `--text-dim` | `#9CA6B8` | Secondary text |

### Typography

- **Display:** Instrument Serif (headlines, with italic variants for gradient accents)
- **Body:** Inter
- **Mono/eyebrow:** JetBrains Mono

### Utility classes

`btn-stellar`, `btn-ghost`, `surface-card`, `eyebrow`, `text-stellar`, `text-cobalt-grad`, `text-gold-grad`, `hairline`, `hairline-v`, `starfield`, `bg-nebula`, `bg-grid`, `bg-stellar-noise`, `animate-twinkle`, `animate-float`, `animate-marquee-x`, `clip-star`, `mask-fade-x`.

Animations use the in-house ease curve `cubic-bezier(0.16, 1, 0.3, 1)` (also available as Tailwind's `ease-out-expo`).

## Getting started

Requires **Node.js 20.9+**.

```bash
npm install
npm run dev          # http://localhost:3000
```

### Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Production build |
| `npm run start` | Run the production build |
| `npm run lint` | ESLint |

## Environment variables

Create `.env.local` at the repo root.

```bash
# Contact form (server-side, Zoho SMTP)
ZOHO_EMAIL=your-zoho-mailbox@example.com
ZOHO_PASSWORD=your-zoho-app-password

# Newsletter subscription (EmailJS, client-side)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=

# Analytics (optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXX

# Canonical site URL (used in metadata + OG tags)
NEXT_PUBLIC_BASE_URL=https://siriusamarketing.com

# Firebase (optional — used by lib/firebaseConfig.ts)
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

The site builds and runs without these — empty values mean the matching feature is inert (contact form returns 500, analytics is skipped, etc.).

## Project structure

```
app/
  layout.tsx              # Next.js root (delegates to RootLayout)
  RootLayout.tsx          # Body shell: starfield backdrop, Header, Footer
  ClientPage.tsx          # Home page composition
  globals.css             # Legacy (shadcn config points here, but real styles live in styles/)
  icon.tsx                # Generated favicon
  opengraph-image.tsx     # Generated OG image
  page.tsx                # / route
  about/, blog/, careers/, case-studies/, contact/,
  privacy/, reviews/, services/, sirius-a-visual/, terms/
  api/
    send-email/route.ts   # POST /api/send-email — contact form (Nodemailer)
    blog/route.ts         # GET  /api/blog       — blog index (in-memory data)
  components/
    Header.tsx, MobileNav.tsx
    home/                 # Home-page sections (Hero, OurServiceOfferings, etc.)
    GoogleAnalytics.tsx, CookieConsent.tsx, TopLoadingBar.tsx,
    NotFound.tsx, RelatedPostsSlider.tsx, SubscriptionForm.tsx, ...
  lib/metadata.ts         # generateMetadata helper for per-page SEO
components/
  ui/                     # shadcn/ui primitives (button, card, sheet, form, ...)
hooks/                    # use-mobile, use-toast
lib/                      # firebaseConfig, cn() utility
styles/globals.css        # Design tokens, fonts, utilities (loaded by RootLayout)
tailwind.config.ts        # Tailwind theme extensions
public/                   # Logo, brand assets, partner logos, hero video
```

## Routes

| Route | Type |
| --- | --- |
| `/` | Static · home |
| `/about` | Static |
| `/services` | Static · listing |
| `/services/[6 subroutes]` | Static · per-service pages |
| `/case-studies` | Static · listing |
| `/case-studies/[slug]` | Dynamic |
| `/blog` | Static · listing |
| `/blog/[slug]` | Dynamic |
| `/sirius-a-visual` | Static · video / portfolio |
| `/reviews` | Static |
| `/careers` | Static |
| `/contact` | Static |
| `/privacy`, `/terms` | Static |
| `/api/send-email` | POST · Nodemailer relay |
| `/api/blog` | GET · in-memory blog index |

All static routes are prerendered at build time (21 routes total).

## Home page sections

The home page is composed in [`app/ClientPage.tsx`](app/ClientPage.tsx) and pulls each section from `app/components/home/`:

1. **Hero** — mouse-follow light, animated brand mark, word-by-word headline reveal
2. **TrustedByCompanies** — edge-faded logo marquee
3. **OurServiceOfferings** — bento grid (flagship tile + 5 supporting)
4. **WhatsNextForYourMarketing** — 4-phase numbered process
5. **IndustriesSection** — 13-sector hairline grid
6. **SocialFirstAgency** — editorial split with phone-frame Vimeo embed
7. **Testimonials** — featured quote + hairline tab navigator
8. **OurStory** — hover-to-reveal video cards
9. **CallToAction** — Calendly modal trigger

## Contact form

`POST /api/send-email` accepts `{ name, email, phone, subject?, message }`, validates required fields, and relays via Zoho SMTP. Returns `200` on success or `400` / `500` on failure. Wire `ZOHO_EMAIL` / `ZOHO_PASSWORD` to enable.

## Deployment

Optimized for Vercel (static export with on-demand dynamic routes). Any Node 20+ host that supports Next.js will work:

```bash
npm run build
npm run start
```

Set the env vars listed above in your host's dashboard before deploying.

## License

Private — proprietary code for Sirius A Marketing.
