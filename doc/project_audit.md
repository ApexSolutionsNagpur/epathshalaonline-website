# ePathshala Online — Project Audit Report

> **Date:** 2026-06-17  
> **Project:** epathshalaonline-website  
> **Domain:** https://www.epathshalaonline.com  
> **Framework:** Next.js 16.1.6 (App Router) · React 19.2.3 · TypeScript 5  
> **Styling:** Tailwind CSS v4 (PostCSS plugin)  

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Technology Stack](#2-technology-stack)
3. [Directory Structure](#3-directory-structure)
4. [Routing & Pages](#4-routing--pages)
5. [Component Architecture](#5-component-architecture)
6. [Services & API Layer](#6-services--api-layer)
7. [Analytics & Tracking](#7-analytics--tracking)
8. [SEO Implementation](#8-seo-implementation)
9. [Assets & Image Optimization](#9-assets--image-optimization)
10. [Custom Hooks](#10-custom-hooks)
11. [Environment Configuration](#11-environment-configuration)
12. [Utility Scripts](#12-utility-scripts)
13. [Design System & Theming](#13-design-system--theming)
14. [Key Observations & Issues](#14-key-observations--issues)
15. [Recommendations](#15-recommendations)
16. [File Inventory](#16-file-inventory)

---

## 1. Project Overview

**ePathshala Online** is a marketing & enrollment website for India's recognized online CBSE school. It showcases the school's academic programs and four specialized "Shala" verticals:

| Vertical | Route | Purpose |
|---|---|---|
| **Home** | `/` | Main landing page with hero, features, stats, testimonials |
| **About** | `/about` | School information, vision, coaches |
| **AIRoboticsShala** | `/airoboticsshala` | AI, Robotics & Coding program |
| **SportsShala** | `/sportsshala` | Online sports academy |
| **ArtShala** | `/artshala` | Creative arts program |
| **DanceShala** | `/danceshala` | Premium dance academy |

The primary conversion goal is **lead capture** via a Student Enrollment modal form, which submits data to an external CRM and tracks conversions across GA4, Meta Pixel, and Microsoft Clarity.

---

## 2. Technology Stack

| Layer | Technology | Version |
|---|---|---|
| **Framework** | Next.js (App Router) | 16.1.6 |
| **UI Library** | React | 19.2.3 |
| **Language** | TypeScript | ^5 |
| **Styling** | Tailwind CSS v4 (via `@tailwindcss/postcss`) | ^4 |
| **Fonts** | Google Fonts — Inter, Poppins, Oswald | via `next/font` |
| **Icons** | Lucide React, React Icons | ^1.14.0 / ^5.5.0 |
| **Carousel** | react-slick + slick-carousel | ^0.31.0 / ^1.8.1 |
| **Data Fetching** | SWR | ^2.4.0 |
| **Image Optimization** | Next.js `<Image>` + WebP (sharp script) | built-in |
| **Analytics** | GA4, Meta Pixel, Microsoft Clarity | via `<Script>` |
| **Linting** | ESLint + eslint-config-next | ^9 / 16.1.6 |

---

## 3. Directory Structure

```
epathshalaonline-website/
├── .env.local                    # Environment variables
├── .gitignore
├── README.md
├── next.config.ts                # Image optimization config
├── tsconfig.json                 # TypeScript configuration
├── postcss.config.mjs            # PostCSS + TailwindCSS
├── eslint.config.mjs             # ESLint rules
├── package.json
│
├── doc/                          # Documentation
│   └── typography.md
│
├── WebContent/                   # Source content documents
│   ├── ePathshala_Online_Campaign_1.0.docx
│   └── ePathshala_Online_Campaign_2.0.docx
│
├── scripts/
│   └── convert-images.mjs        # Sharp-based PNG/JPG → WebP converter
│
├── extract_content.py            # Python docx text extraction utility
├── extracted_content.txt          # Extracted text output
│
├── public/
│   ├── favicon.ico
│   └── images/                   # All static images (WebP format)
│       ├── artshala/             # ArtShala brand assets
│       ├── danceshala/           # DanceShala brand assets
│       ├── roboticshala/         # AIRoboticsShala brand assets
│       ├── sportsshala/          # SportsShala brand assets
│       └── *.webp                # Shared assets (hero, logo, etc.)
│
└── src/
    ├── app/                      # Next.js App Router
    │   ├── layout.tsx            # Root layout (fonts, header, footer, analytics, SEO)
    │   ├── page.tsx              # Home page → HomePageV2
    │   ├── globals.css           # Global styles, Tailwind, custom animations
    │   ├── sitemap.ts            # Dynamic XML sitemap
    │   ├── robots.ts             # robots.txt config
    │   │
    │   ├── about/page.tsx        # About page
    │   ├── airoboticsshala/page.tsx
    │   ├── sportsshala/page.tsx
    │   ├── artshala/page.tsx
    │   ├── danceshala/page.tsx
    │   │
    │   └── api/
    │       └── leads/capture/route.ts    # CRM proxy API
    │
    ├── components/
    │   ├── v2/                   # Active (V2) UI components
    │   │   ├── Header.tsx        # Sticky header with responsive nav
    │   │   ├── Footer.tsx        # Site footer
    │   │   ├── Hero.tsx          # Home hero section
    │   │   ├── HomePage.tsx      # Home page compositor
    │   │   ├── DemoClassModal.tsx # Lead capture enrollment form (modal)
    │   │   ├── CookieConsent.tsx # GDPR cookie consent banner
    │   │   ├── WhatsAppButton.tsx # Floating WhatsApp button
    │   │   ├── ScrollToTop.tsx   # Scroll-to-top button
    │   │   ├── RecognizedSchool.tsx
    │   │   ├── FeaturesRow.tsx
    │   │   ├── DiscoverExcellence.tsx
    │   │   ├── AcademicPrograms.tsx
    │   │   ├── SuccessSection.tsx
    │   │   ├── Stats.tsx
    │   │   ├── Testimonials.tsx
    │   │   ├── AdmissionsOpen.tsx
    │   │   ├── TypographyDemo.tsx
    │   │   └── FacilitiesSection/
    │   │       ├── index.tsx
    │   │       └── components/FacilityCard.tsx
    │   │
    │   ├── EnrollCTA/            # Shared enrollment CTA bar
    │   │   ├── CTASection.tsx    # Route-aware themed CTA (mobile bar + desktop card)
    │   │   └── index.tsx
    │   │
    │   ├── analytics/
    │   │   ├── Analytics.tsx     # GA4 + Clarity + Meta Pixel script loader
    │   │   ├── AnalyticsProvider.tsx  # Alternative provider (with placeholder checks)
    │   │   └── RouteTracker.tsx  # SPA page_view tracking on route change
    │   │
    │   ├── seo/
    │   │   └── JsonLd.tsx        # Schema.org structured data (School, Website, FAQ)
    │   │
    │   ├── Navbar/               # Legacy (V1) — unused
    │   ├── Footer/               # Legacy (V1) — unused
    │   ├── EnvatoHeader/         # Legacy (V1) — unused
    │   ├── PageHeroBanner/       # Legacy (V1) — unused
    │   ├── SectionContainer/     # Shared layout wrapper
    │   ├── WhoWeAre/             # Legacy (V1) — unused
    │   ├── WhyJoinSection/       # Legacy (V1) — unused
    │   └── GetStartedSection/    # Legacy (V1) — unused
    │
    ├── screens/                  # Page-level screen compositors
    │   ├── Home/
    │   │   ├── index.tsx         # Legacy (V1) home screen
    │   │   └── component/        # 9 sub-components (Hero, WhoWeAre, OurProgram, etc.)
    │   │
    │   ├── About/
    │   │   ├── index.tsx         # About screen compositor
    │   │   └── component/        # 5 sub-components (Hero, WhoWeAre, Coaches, etc.)
    │   │
    │   ├── AIRoboticsShala/
    │   │   ├── index.tsx         # Screen compositor
    │   │   └── sections/         # 5 sections (Hero, FeatureStrip, Programs, Stats, WhyChoose)
    │   │
    │   ├── SportsShala/
    │   │   ├── index.tsx
    │   │   └── sections/         # 5 sections (Hero, FeatureStrip, Programs, Stats, WhyChoose)
    │   │
    │   ├── ArtShala/
    │   │   ├── index.tsx
    │   │   └── sections/         # 5 sections (Hero, Experience, Programs, Stats, WhyChoose)
    │   │
    │   └── DanceShala/
    │       ├── index.tsx
    │       └── sections/         # 5 sections (Hero, FeatureStrip, Programs, Stats, WhyChoose)
    │
    ├── services/
    │   └── leadService.ts        # CRM API client (POST /api/leads/capture)
    │
    ├── lib/
    │   ├── trackEvent.ts         # Centralized event tracking (GA4 + Meta Pixel)
    │   └── trackLead.ts          # Lead conversion tracking (GA4 + Meta + Clarity)
    │
    ├── hooks/
    │   └── useFirstScrollPopup.ts  # Session-based first-scroll popup trigger
    │
    └── types/
        └── analytics.d.ts        # Window type augmentations (gtag, fbq, clarity)
```

---

## 4. Routing & Pages

### 4.1 Route Map

| Route | Page File | Screen/Component | SEO Metadata |
|---|---|---|---|
| `/` | `src/app/page.tsx` | `HomePageV2` (v2) | Root layout metadata |
| `/about` | `src/app/about/page.tsx` | `AboutPage` (screens/About) | ✅ Title, Desc, OG |
| `/airoboticsshala` | `src/app/airoboticsshala/page.tsx` | `AIRoboticsShalaScreen` | ✅ Title, Desc, OG, Keywords, Custom Favicon |
| `/sportsshala` | `src/app/sportsshala/page.tsx` | `SportsShalaScreen` | ✅ Title, Desc, OG, Keywords, Custom Favicon |
| `/artshala` | `src/app/artshala/page.tsx` | `ArtShalaScreen` | ✅ Title, Desc, OG, Keywords, Custom Favicon |
| `/danceshala` | `src/app/danceshala/page.tsx` | `DanceShalaScreen` | ✅ Title, Desc, OG, Keywords, Custom Favicon |
| `/api/leads/capture` | `src/app/api/leads/capture/route.ts` | Server-side CRM proxy | N/A |

### 4.2 Root Layout Composition

The root `layout.tsx` wraps every page with:

```
<html lang="en">
  <body>
    <Analytics />        ← GA4 + Clarity + Meta Pixel scripts
    <RouteTracker />     ← SPA page_view tracking
    <CookieConsent />    ← GDPR consent banner
    <JsonLd />           ← Schema.org structured data
    <Header />           ← Sticky navigation
    {children}           ← Page content
    <Footer />           ← Site footer
    <WhatsAppButton />   ← Floating WhatsApp CTA
    <ScrollToTop />      ← Scroll-to-top button
  </body>
</html>
```

### 4.3 SEO Infrastructure

- **sitemap.ts** — Dynamic XML sitemap for all 6 pages
- **robots.ts** — Allows crawling `/`, disallows `/_next/` and `/api/`
- **JsonLd.tsx** — Injects 3 JSON-LD schemas: Organization (School), WebSite, FAQ
- **Per-page metadata** — Each route exports `Metadata` with title, description, keywords, OG, Twitter cards

---

## 5. Component Architecture

### 5.1 Architecture Layers

```
┌─────────────────────────────────────────────┐
│                  App Routes                  │
│      (src/app/*/page.tsx — metadata + SSR)   │
├─────────────────────────────────────────────┤
│              Screen Compositors              │
│  (src/screens/* — assemble section order)    │
├─────────────────────────────────────────────┤
│            Section Components                │
│  (src/screens/*/sections/ or component/)     │
│  (src/components/v2/* — home page sections)  │
├─────────────────────────────────────────────┤
│            Shared Components                 │
│  (EnrollCTA, Header, Footer, WhatsApp, etc.) │
├─────────────────────────────────────────────┤
│        Services / Hooks / Lib                │
│  (leadService, trackEvent, trackLead, etc.)  │
└─────────────────────────────────────────────┘
```

### 5.2 V1 vs V2 Component Split

The project has undergone a V1 → V2 migration:

| Aspect | V1 (Legacy) | V2 (Active) |
|---|---|---|
| **Location** | `src/components/{Navbar,Footer,EnvatoHeader,...}` + `src/screens/Home/` | `src/components/v2/` |
| **Home Page** | `src/screens/Home/index.tsx` (imported but **NOT** used by `/`) | `src/components/v2/HomePage.tsx` |
| **Header** | `src/components/Navbar/` | `src/components/v2/Header.tsx` |
| **Footer** | `src/components/Footer/` | `src/components/v2/Footer.tsx` |
| **Status** | Dead code (except `SectionContainer`) | Active & rendered |

### 5.3 Screen Section Patterns

Each "Shala" vertical follows a consistent section structure:

```
Hero → FeatureStrip → Programs → Stats → WhyChoose → CTASection (EnrollCTA)
```

The **shared `CTASection`** (`src/components/EnrollCTA/CTASection.tsx`) is route-aware — it reads `usePathname()` and applies a per-vertical color theme:

| Route | Theme Colors |
|---|---|
| Default (Home) | Navy `#0B3C5D` / Gold `#FFC107` |
| SportsShala | Navy `#062B5B` / Green `#95C11F` |
| ArtShala | Pink `#ff3f87` / Purple `#a21caf` |
| AIRoboticsShala | Blue `#072B61` / Blue `#0D6EFD` |
| DanceShala | Orange `#FF7A00` / Orange `#FF9F1C` |

### 5.4 Key Components Detail

| Component | File | Size | Purpose |
|---|---|---|---|
| `Header.tsx` | v2/ | 248 lines | Sticky header, responsive menu, route-aware theming, enrollment button |
| `DemoClassModal.tsx` | v2/ | 405 lines | Full enrollment form modal — programme, grade, student/parent info, phone validation (Indian 10-digit), email validation, CRM submission, multi-platform conversion tracking |
| `CTASection.tsx` | EnrollCTA/ | 147 lines | Fixed mobile bottom bar + desktop card CTA — route-aware themes |
| `HomePage.tsx` | v2/ | 42 lines | Home page section compositor with first-scroll popup |
| `Footer.tsx` | v2/ | ~100 lines | Site footer |

---

## 6. Services & API Layer

### 6.1 Lead Capture Flow

```
User fills DemoClassModal form
        │
        ▼
captureLead() — POST /api/leads/capture
        │         (src/services/leadService.ts)
        ▼
Next.js API Route — CRM proxy
        │         (src/app/api/leads/capture/route.ts)
        ▼
External CRM API
        │  https://crm.epathshalaonline.com/api/v1/leads/capture
        ▼
trackLead() — GA4 + Meta Pixel + Clarity
        │         (src/lib/trackLead.ts)
        ▼
Conversion events fired on all 3 platforms
```

### 6.2 Lead Data Schema

```typescript
interface LeadData {
  student_first_name: string;
  parent_first_name: string;
  phone: string;            // 10-digit Indian mobile
  email: string;
  grade_level: string;      // "1" to "8"
  city: string;
  source: string;           // Current page URL
  tenant_slug: string;      // Hardcoded: "ppp"
  form_id: number;          // Hardcoded: 2
}
```

### 6.3 API Security Notes

- The CRM endpoint URL is configurable via `CRM_API_URL` env var (defaults to production)
- The API route acts as a **server-side proxy** — CRM URL is never exposed to the client
- **No rate limiting** or CSRF protection on the proxy endpoint
- **No authentication headers** sent to CRM (relies on CRM's own auth)
- `tenant_slug` and `form_id` are **hardcoded** in the client-side component

---

## 7. Analytics & Tracking

### 7.1 Platforms Integrated

| Platform | Env Variable | Script Strategy |
|---|---|---|
| Google Analytics 4 | `NEXT_PUBLIC_GA_MEASUREMENT_ID` | `afterInteractive` |
| Meta (Facebook) Pixel | `NEXT_PUBLIC_META_PIXEL_ID` | `afterInteractive` |
| Microsoft Clarity | `NEXT_PUBLIC_CLARITY_PROJECT_ID` | `afterInteractive` |

### 7.2 Tracking Architecture

| File | Purpose |
|---|---|
| `Analytics.tsx` | Injects GA4, Clarity, Meta Pixel `<Script>` tags |
| `AnalyticsProvider.tsx` | Alternative loader with placeholder ID detection (appears **unused** — `Analytics.tsx` is in layout) |
| `RouteTracker.tsx` | Fires `page_view` (GA4) + `PageView` (Meta) on every route change |
| `trackEvent.ts` | Centralized event dispatcher — maps GA4 events to Meta standard events |
| `trackLead.ts` | Lead-specific tracking — fires `generate_lead` (GA4), `Lead` (Meta), sets Clarity session tags and upgrades session |
| `analytics.d.ts` | TypeScript declarations for `window.gtag`, `window.fbq`, `window.clarity` |

### 7.3 Events Tracked

| Event Trigger | GA4 Event | Meta Event | Clarity |
|---|---|---|---|
| Page navigation | `page_view` | `PageView` | — |
| Form modal opens | `form_view` | `ViewContent` | — |
| Lead form submitted | `generate_lead` | `Lead` (standard) | `lead_submitted` tag, session upgrade |
| Generic events | Custom `eventName` | Mapped or `trackCustom` | — |

### 7.4 Advanced Meta Pixel Matching

On lead submission, `trackLead.ts` re-initializes Meta Pixel with user data (email, phone, name, city, country) for **Advanced Matching** — enabling better ad attribution.

---

## 8. SEO Implementation

### 8.1 Metadata Coverage

| Feature | Status | Details |
|---|---|---|
| Title tags | ✅ | Per-page with template: `%s | ePathshala Online School` |
| Meta descriptions | ✅ | Unique per page |
| Keywords | ✅ | Per-page keyword arrays |
| Open Graph | ✅ | type, locale, url, images |
| Twitter Cards | ✅ | `summary_large_image` |
| Canonical URLs | ✅ | Via `alternates.canonical` |
| Sitemap | ✅ | Dynamic `sitemap.ts` covering all 6 routes |
| robots.txt | ✅ | Allow all, disallow `/_next/` and `/api/` |
| JSON-LD | ✅ | School, WebSite, FAQPage schemas |
| Language | ✅ | `lang="en"`, `locale: "en_IN"` |
| Favicon | ✅ | Per-route custom favicons for Shala verticals |
| Google verification | ✅ | Via `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` env var |
| Bing verification | ✅ | Via `NEXT_PUBLIC_BING_SITE_VERIFICATION` env var |

### 8.2 Structured Data Schemas

1. **School (Organization)** — Name, URL, logo, contact points, social profiles, offer catalog with all 5 programs
2. **WebSite** — Search action with `urlTemplate`
3. **FAQPage** — 4 common questions about recognition, grades, programs, enrollment

---

## 9. Assets & Image Optimization

### 9.1 Image Strategy

- All images served in **WebP** format
- `next.config.ts` enables `image/avif` and `image/webp` formats
- Cache TTL set to `31536000` seconds (1 year)
- Device sizes: `[640, 750, 828, 1080, 1200, 1920, 2048]`
- Image sizes: `[16, 32, 48, 64, 96, 128, 256, 384]`

### 9.2 Image Asset Organization

```
public/images/
├── artshala/          # ArtShala logos & assets
├── danceshala/        # DanceShala logos & assets
├── roboticshala/      # AIRoboticsShala logos & assets
├── sportsshala/       # SportsShala logos & assets
├── logo.webp          # Main school logo
├── footerlogo.webp    # Footer/OG image logo
├── heroimages.webp    # Desktop hero
├── mobillehero.webp   # Mobile hero
├── modelimage.webp    # Enrollment modal image
└── ... (16 shared images)
```

### 9.3 Image Conversion Script

`scripts/convert-images.mjs` — Uses Sharp to batch-convert all PNG/JPG images under `public/images/` to WebP at 75% quality with size savings logging.

---

## 10. Custom Hooks

### `useFirstScrollPopup(delay: number)`

- **Purpose:** Triggers the enrollment form popup on the user's first scroll
- **Mechanism:** Listens for the first `scroll` event, then opens modal after configurable delay
- **Session persistence:** Uses `sessionStorage` to prevent repeated popups within the same session
- **Usage:** Home page (`HomePageV2`) with 500ms delay

---

## 11. Environment Configuration

### 11.1 Current `.env.local`

```
NEXT_PUBLIC_API_BASE_URL=https://crm.epathshalaonline.com/api/v1
```

### 11.2 All Referenced Environment Variables

| Variable | Used By | Required |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | layout.tsx, sitemap.ts, robots.ts, JsonLd.tsx | Optional (defaults to production URL) |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Analytics.tsx | Optional |
| `NEXT_PUBLIC_GA4_MEASUREMENT_ID` | AnalyticsProvider.tsx | Optional (appears unused) |
| `NEXT_PUBLIC_META_PIXEL_ID` | Analytics.tsx, trackLead.ts | Optional |
| `NEXT_PUBLIC_CLARITY_PROJECT_ID` | Analytics.tsx | Optional |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | layout.tsx | Optional |
| `NEXT_PUBLIC_BING_SITE_VERIFICATION` | layout.tsx | Optional |
| `NEXT_PUBLIC_API_BASE_URL` | .env.local (currently set) | — |
| `CRM_API_URL` | route.ts (server-side) | Optional (defaults to production CRM) |

> ⚠️ **Note:** `NEXT_PUBLIC_API_BASE_URL` is defined in `.env.local` but appears **unused** in the codebase. The CRM URL is read from `CRM_API_URL` (server-side) instead.

---

## 12. Utility Scripts

| Script | Language | Purpose |
|---|---|---|
| `scripts/convert-images.mjs` | Node.js (ESM) | Batch convert PNG/JPG → WebP using Sharp |
| `extract_content.py` | Python | Extract text from campaign .docx files |

---

## 13. Design System & Theming

### 13.1 Font System

| CSS Variable | Font | Usage |
|---|---|---|
| `--font-inter` | Inter | Body text (`font-body`, `font-sans`) |
| `--font-poppins` | Poppins (400, 600, 700) | Headings (`font-heading`) |
| `--font-oswald` | Oswald (500, 600, 700) | Accent typography (phone numbers, etc.) |

### 13.2 Color Tokens (globals.css)

| Token | Value | Usage |
|---|---|---|
| `--color-dance-orange` | `#FF7A00` | DanceShala primary |
| `--color-dance-purple` | `#3B0A57` | DanceShala secondary |
| `--color-dance-royal` | `#5A189A` | DanceShala accent |
| `--color-dance-peach` | `#FFF3E8` | DanceShala background |

> Only DanceShala has formal CSS custom properties. Other verticals use hardcoded Tailwind classes inline.

### 13.3 Custom Animations (globals.css)

| Animation | Duration | Usage |
|---|---|---|
| `animate-marquee` | 10s linear | Scrolling text |
| `animate-bounce-slow` | 3s infinite | Gentle bounce effect |
| `animate-spin-slow` | 8s linear | Slow rotation |

---

## 14. Key Observations & Issues

### 🟢 Strengths

1. **Strong SEO foundation** — Per-page metadata, JSON-LD, sitemap, robots.txt, OG tags all properly configured
2. **Multi-platform analytics** — GA4, Meta Pixel, Clarity all integrated with proper event mapping
3. **Image optimization** — All WebP, aggressive caching, responsive sizes, AVIF support
4. **Lead conversion tracking** — Complete funnel from form view to submission across all platforms
5. **Route-aware theming** — Header and CTA components adapt colors per vertical
6. **Server-side CRM proxy** — Keeps CRM endpoint hidden from clients
7. **Mobile-first CTA** — Fixed bottom enrollment bar on mobile, card CTA on desktop
8. **Session-based popup** — Prevents repeated interruptions within a session
9. **TypeScript throughout** — Strong typing including custom `Window` augmentations
10. **Cookie consent** — GDPR compliance component present

### 🟡 Concerns

1. **Dead code (V1 components)** — Multiple legacy component directories (`Navbar/`, `Footer/`, `EnvatoHeader/`, `PageHeroBanner/`, `WhoWeAre/`, `WhyJoinSection/`, `GetStartedSection/`) exist unused. `screens/Home/` is also unused (V2 HomePage.tsx is used instead)
2. **Duplicate analytics loaders** — Both `Analytics.tsx` and `AnalyticsProvider.tsx` exist. Only `Analytics.tsx` is used in the root layout. `AnalyticsProvider.tsx` has different env var names (`NEXT_PUBLIC_GA4_MEASUREMENT_ID` vs `NEXT_PUBLIC_GA_MEASUREMENT_ID`)
3. **Unused env variable** — `NEXT_PUBLIC_API_BASE_URL` is defined in `.env.local` but never imported anywhere in the codebase
4. **Hardcoded values** — `tenant_slug: "ppp"` and `form_id: 2` are hardcoded in `DemoClassModal.tsx`
5. **Nav links with `href="#"`** — About Us, Academics, Admissions, Blog, Contact nav links all point to `#` (dead links)
6. **No rate limiting** — The `/api/leads/capture` proxy has no rate limiting, allowing potential spam submissions
7. **No CSRF protection** — The API route doesn't validate origin or use CSRF tokens
8. **Missing error boundary** — No React Error Boundary wrappers visible
9. **Inconsistent component organization** — Some verticals use `sections/` directories, others use `component/`; naming is inconsistent (`component` singular vs `components` plural vs `sections`)
10. **FacilitiesSection link mismatch** — The "Arts & Creative Expression" card links to `/sportsshala` and "Sports & Athletics" links to `/danceshala` — these appear swapped
11. **Privacy Policy button** — The "PRIVACY POLICY" link in DemoClassModal is a non-functional `<button>` with no action
12. **SWR unused** — SWR is installed as a dependency but no `useSWR` hooks were found in the codebase
13. **About page syntax** — `src/screens/About/index.tsx` ends with `}` instead of `)` on the closing brace (line 19), which would cause a TypeScript error
14. **Logo height values** — Logo `<Image>` in Header uses `className="h-40 md:h-60"` which seems extremely large (10rem/15rem)

### 🔴 Potential Bugs

1. **About page render error** — Line 19 of `src/screens/About/index.tsx` has `}` instead of `)`, which should cause a compilation error
2. **FacilitiesSection mismatched links** — Cards link to wrong Shala pages (Sports card → `/sportsshala` is labeled "Arts & Creative Expression")
3. **CTA theme typo** — DanceShala gradient has a stray `]` in the class string: `"from-[#FF7A00] via-[#FF8F1C] to-[#FF9F1C]]"` — this extra bracket may cause a Tailwind parse issue

---

## 15. Recommendations

### Priority 1 — Bug Fixes

- [ ] Fix `About/index.tsx` closing syntax (`}` → `)`)
- [ ] Fix FacilitiesSection card link-to-route mismatches
- [ ] Fix DanceShala CTA gradient class typo (extra `]`)
- [ ] Implement Privacy Policy page or link

### Priority 2 — Code Cleanup

- [ ] Remove dead V1 components (`Navbar/`, `Footer/`, `EnvatoHeader/`, `PageHeroBanner/`, `WhoWeAre/`, `WhyJoinSection/`, `GetStartedSection/`)
- [ ] Remove or consolidate `screens/Home/` (V1 home screen) and its 9 sub-components
- [ ] Remove `AnalyticsProvider.tsx` (unused duplicate of `Analytics.tsx`)
- [ ] Remove `NEXT_PUBLIC_API_BASE_URL` from `.env.local` or reference it properly
- [ ] Remove `swr` from `package.json` if not in use
- [ ] Remove `extract_content.py` and `extracted_content.txt` from the repo

### Priority 3 — Security

- [ ] Add rate limiting to `/api/leads/capture` (e.g., per-IP throttle)
- [ ] Add CSRF token validation or origin checks
- [ ] Move `tenant_slug` and `form_id` to env variables or config
- [ ] Add input sanitization on the API route before forwarding to CRM

### Priority 4 — Navigation

- [ ] Implement or link the dead nav items: About Us, Academics, Admissions, Blog, Contact
- [ ] Consider adding a 404 page (`not-found.tsx`)
- [ ] Add loading UI (`loading.tsx`) for route transitions

### Priority 5 — Performance & UX

- [ ] Add React Error Boundaries for graceful failure handling
- [ ] Consider adding `loading.tsx` skeletons for pages
- [ ] Standardize directory naming: pick `sections/` or `components/` for all verticals
- [ ] Extract hardcoded color values into CSS custom properties (currently only DanceShala has them)
- [ ] Consider lazy-loading the DemoClassModal component

---

## 16. File Inventory

### Total File Counts (src/)

| Directory | Files | Purpose |
|---|---|---|
| `src/app/` | 11 files | Routes, layout, styles, sitemap, robots, API |
| `src/components/v2/` | 18 files | Active UI components |
| `src/components/analytics/` | 3 files | Analytics script loaders |
| `src/components/seo/` | 1 file | JSON-LD structured data |
| `src/components/EnrollCTA/` | 2 files | Shared enrollment CTA |
| `src/components/` (legacy) | ~7 dirs | V1 dead code |
| `src/screens/` | 6 dirs (~30+ files) | Page-level screen compositors |
| `src/services/` | 1 file | CRM API client |
| `src/lib/` | 2 files | Tracking utilities |
| `src/hooks/` | 1 file | Custom React hooks |
| `src/types/` | 1 file | TypeScript declarations |

### Key Configuration Files

| File | Purpose |
|---|---|
| `package.json` | Dependencies & scripts |
| `tsconfig.json` | TypeScript config (ES2017, strict, path alias `@/*`) |
| `next.config.ts` | Image optimization settings |
| `postcss.config.mjs` | PostCSS with TailwindCSS plugin |
| `eslint.config.mjs` | ESLint configuration |
| `.env.local` | Environment variables |
| `.gitignore` | Git ignore rules |

---

*End of Audit Report*
