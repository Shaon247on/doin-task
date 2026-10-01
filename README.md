# ByteSpace

ByteSpace is a learning marketplace built with Next.js. Learners can browse courses, view creator profiles, and explore course details. Creators have a profile and a place to present their published courses.

## Run Locally

Requirements: Node.js 20.9 or newer and npm.

```bash
npm install
npm run dev
```

Open the URL printed by Next.js, usually `http://localhost:3000`.

For production metadata and the sitemap, set `SITE_URL` to the canonical origin of the deployed site:

```env
SITE_URL=https://your-production-domain.example
```

The sitemap includes public pages, creators, and courses with complete detail records. It excludes account, cookie-settings, and search utility pages.

```bash
npm run build
npm start
npm run lint
```

Contact form messages use the visitor's email app. To address the draft, set `NEXT_PUBLIC_CONTACT_EMAIL` in `.env.local`:

```env
NEXT_PUBLIC_CONTACT_EMAIL=your-inbox@example.com
```

Without this setting, the form validates the question and explains that it has not been sent.

## Main Routes

- `/` — landing page
- `/courses` — searchable and filterable course catalog
- `/courses/[slug]` — redirects to the course About tab
- `/courses/[slug]/about` — course description and key points
- `/courses/[slug]/lessons` — course modules and lessons
- `/courses/[slug]/reviews` — ratings and learner reviews
- `/creators` — searchable creator directory
- `/creators/[slug]` — creator profile and their published courses
- `/about` — ByteSpace overview
- `/contact` — creator question form and contact destinations
- `/cookies` — cookie preference settings
- `/sign-in`, `/sign-up` — authentication pages

## Course Data Flow

`src/mocks/coursCard.mocks.ts` contains the catalog courses. Each course has a `creatorId` that connects it to `src/mocks/creators.mock.ts`. Course cards use that relationship to link to the creator profile, and the profile page filters the catalog by creator ID before applying search, category, level, sorting, and pagination.

Course detail content is stored in four mock files and joined to the catalog record by `courseId`:

- `src/mocks/course-details.mock.ts`
- `src/mocks/course-about.mock.ts`
- `src/mocks/course-lessons.mock.ts`
- `src/mocks/course-reviews.mock.ts`

The courses with complete records in all four detail datasets are:

- ID `1`: **Learn Figma from Basic** (`learn-figma-from-basic`)
- ID `2`: **Balancing Productivity and Wellness** (`balancing-productivity-and-wellness`)
- ID `3`: **Build Digital Asset** (`build-digital-asset`)

To add a fully detailed course, add its catalog record and matching `courseId` entries to all four detail mock files.

## Project Structure

```text
src/
  app/                  Next.js App Router pages and layouts
    (landing)/          Public pages using the landing shell
    (auth)/             Sign-in and sign-up routes
  components/
    contact/            Contact form and inquiry UI
    cookies/            Consent banner and preference controls
    creators/           Creator cards, directory, and profile UI
    course/             Course detail sections and tabs
    landing/            Sections composed on the homepage
    layout/             Shared page shells
    search/             Course search and filter controls
    shared/             Reusable site-wide UI
    ui/                 shadcn/Base UI primitives
  lib/                  Search, filtering, and data-access helpers
  mocks/                Mock catalog and detail data
  schemas/              Zod validation schemas
  types/                Shared TypeScript models
```

## Component Convention

PascalCase component files usually represent primary page sections or reusable UI, such as `HeroSection.tsx`, `CourseCard.tsx`, and `CreatorSection.tsx`. App Router `page.tsx` files compose these components into routes.

Kebab-case files usually hold supporting pieces used by a primary component, such as `hero-visual.tsx`, `course-stat-card.tsx`, or `creator-grid.tsx`.

## Stack

Next.js App Router, React, TypeScript, Tailwind CSS, shadcn/Base UI, Framer Motion, React Hook Form, Zod, and Sonner.
