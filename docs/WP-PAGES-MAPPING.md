# WordPress Pages Mapping to New CMS

This document maps all WordPress admin pages (from reference zavd.se) to our new Next.js + MongoDB CMS system.

## Pages Analysis from WP Admin (22 Published Pages)

| # | WP Page Title | Route | CMS Status | Action Required |
|---|---------------|-------|------------|-----------------|
| 1 | Säljande hudterapeut till Zavd Medical | Job posting | **N/A** | Blog post or job listing |
| 2 | Zavd Medical söker säljare till Malmö | Job posting | **N/A** | Blog post or job listing |
| 3 | Säljare Zavd Medical Stockholm | Job posting | **N/A** | Blog post or job listing |
| 4 | upsales | `/upsales` | **N/A** | Password protected - skip |
| 5 | Vill du erbjuda det senaste inom microneedling på din klinik? | Landing page | **N/A** | Blog post or landing page |
| 6 | cookiebot test | Test page | **N/A** | Skip |
| 7 | Tack | `/tack` | **N/A** | Thank you page - static |
| 8 | **FAQ** | `/faq` | **✅ DONE** | Seeded via seed-faq-page.ts |
| 9 | **Kontakt** | `/kontakt` | **✅ DONE** | Seeded via seed-kontakt-page.ts |
| 10 | **Om oss** | `/om-oss` | **✅ DONE** | Seeded via seed-about-page.ts |
| 11 | — Varför välja Zavd Medical? | `/starta-eget/varfor-valja-zavd` | **🔄 NEEDS CMS** | Sub-page of Starta Eget |
| 12 | — Lediga tjänster | `/om-oss/lediga-tjanster` | **🔄 NEEDS CMS** | Careers/Jobs page |
| 13 | — — Säljare till Zavd Medical Linköping | Job posting | **N/A** | Individual job listing |
| 14 | — Juridisk information — Privacy Policy Page | `/om-oss/juridisk-information` | **✅ DONE** | Seeded via seed-legal-page.ts |
| 15 | Nyheter och artiklar — Posts Page | `/nyheter` or `/blogg` | **✅ DONE** | Blog listing page |
| 16 | **Starta eget** | `/starta-eget` | **🔄 NEEDS SEED** | Has model, needs data |
| 17 | **Utbildningar** | `/utbildningar` | **⏭️ SKIP** | Per user request |
| 18 | — Miniutbildning | `/starta-eget/miniutbildning` | **🔄 NEEDS CMS** | Sub-page of Starta Eget |
| 19 | — Bli testkandidat | `/utbildningar/bli-testkandidat` | **⏭️ SKIP** | Part of Utbildningar |
| 20 | **Köpguide** | `/starta-eget/kopguide` | **🔄 NEEDS CMS** | Sub-page of Starta Eget |

## Priority Pages to Seed/Update

### Already Done (✅)
1. **Home Page** (`/`) - Seeded via seed-home-page.ts
2. **About Page** (`/om-oss`) - Seeded via seed-about-page.ts
3. **Contact Page** (`/kontakt`) - Seeded via seed-kontakt-page.ts
4. **FAQ Page** (`/faq`) - Seeded via seed-faq-page.ts
5. **Team Page** (`/om-oss/team`) - Seeded via seed-team-page.ts
6. **Legal Page** (`/om-oss/juridisk-information`) - Seeded via seed-legal-page.ts
7. **Privacy Policy** (`/integritetspolicy`) - Seeded via seed-privacy-page.ts

### Need Data Seeding (🔄)

1. **Starta Eget** (`/starta-eget`) - Model exists, needs seed script
2. **Varför välja Zavd** (`/starta-eget/varfor-valja-zavd`) - Existing page, may need CMS
3. **Köpguide** (`/starta-eget/kopguide`) - Existing page, may need CMS
4. **Miniutbildning** (`/starta-eget/miniutbildning`) - Existing page, may need CMS
5. **Lediga tjänster** (`/om-oss/lediga-tjanster`) - Careers page

### Skip (⏭️)
- **Utbildningar** and its sub-pages (per user request)

## Route to File Mapping

| Route | File Path | Model |
|-------|-----------|-------|
| `/` | app/(client)/page.tsx | home-page.model.ts |
| `/om-oss` | app/(client)/om-oss/page.tsx | about-page.model.ts |
| `/kontakt` | app/(client)/kontakt/page.tsx | kontakt-page.model.ts |
| `/faq` | app/(client)/faq/page.tsx | faq-page.model.ts |
| `/starta-eget` | app/(client)/starta-eget/page.tsx | starta-eget-page.model.ts |
| `/starta-eget/varfor-valja-zavd` | app/(client)/starta-eget/varfor-valja-zavd/page.tsx | **Static** |
| `/starta-eget/kopguide` | app/(client)/starta-eget/kopguide/page.tsx | **Static** |
| `/starta-eget/miniutbildning` | app/(client)/starta-eget/miniutbildning/page.tsx | **Static** |
| `/om-oss/lediga-tjanster` | app/(client)/om-oss/lediga-tjanster/page.tsx | careers-page.model.ts |
| `/om-oss/juridisk-information` | app/(client)/om-oss/juridisk-information/page.tsx | legal-page.model.ts |
| `/om-oss/team` | app/(client)/om-oss/team/page.tsx | team-page.model.ts |
| `/integritetspolicy` | app/(client)/integritetspolicy/page.tsx | privacy-page.model.ts |
| `/blogg` | app/(client)/blogg/page.tsx | **Dynamic from articles** |
| `/nyheter` | app/(client)/nyheter/page.tsx | **Dynamic from articles** |

## Next Steps for Data Seeding

### Step 1: Starta Eget Page
Create and run `scripts/seed-starta-eget-page.ts` with:
- Hero section
- Main content paragraphs
- Benefits cards
- Features section
- Resources section

### Step 2: Lediga Tjänster (Careers) Page
Check if model exists, create seed script for:
- Hero section
- Job listings
- Application info

### Step 3: Juridisk Information (Legal) Page
Check if model exists, create seed script for:
- Privacy policy content
- Terms of service
- Legal disclaimers

## Team Page Note
The user mentioned not finding a team page in WP admin. The route `/om-oss/team` exists in the codebase with `team-page.model.ts` but may not have been a separate page in WordPress - possibly embedded in Om Oss page or handled differently.

## Preview URLs
- Blog with reviews: `/blogg`
- News with reviews: `/nyheter`
- About page: `/om-oss`
- Contact page: `/kontakt`
- FAQ page: `/faq`
