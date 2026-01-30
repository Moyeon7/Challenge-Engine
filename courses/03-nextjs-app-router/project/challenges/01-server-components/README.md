# Challenge 01: Server Components and Basic Routing

## Goal

Create a minimal Next.js App Router app with:
- A home page (`app/page.tsx`) and an about page (`app/about/page.tsx`)
- Navigation between pages using Next.js `Link` (not plain `<a>`)
- Server Components by default (no `'use client'` unless needed)
- Correct App Router file structure

---

## What to do

1. **Home page:** Create or update `app/page.tsx` as the root page (Server Component). Default export. No `'use client'`.
2. **About page:** Create `app/about/page.tsx` for the `/about` route. Server Component. Default export.
3. **Navigation:** Use the `Link` component from `next/link` to link between home and about (e.g. in a layout or on each page).
4. **Layout:** Ensure `app/layout.tsx` exists and wraps children (root layout). Can include shared nav with `Link`.
5. **Code:** TypeScript, no `console.*`, pass ESLint.

---

## What the review checks

| Step | What it does |
|------|----------------|
| **Functional tests** | Home and about pages exist and render; navigation works; Server Components used. |
| **Code quality** | ESLint (no errors/warnings). |
| **Architecture** | AST: Server Component (no 'use client' where not needed), Link, file-based routing, app directory structure. |
| **Best practices** | TypeScript, no console, ESLint. |
| **E2E** | Playwright: navigation between home and about. |

Pass threshold: weighted score ≥ 80%. No hidden checks.

---

## Technical Requirements (what will be reviewed)

### Functional Requirements

- Have `app/page.tsx` (home page) and `app/about/page.tsx` (about page).
- Use Server Components (default; no `'use client'` on these pages unless required).
- Use Next.js `Link` component for navigation (not raw anchor tags for in-app links).
- Pages render correctly; navigation works between home and about.

### Code Quality Requirements

- TypeScript with type annotations.
- Pass ESLint (no errors or warnings).
- No `console.log`, `console.error`, or `console.warn`.

### Architecture Requirements

- Use App Router: `app/` directory; `app/page.tsx`, `app/about/page.tsx`, `app/layout.tsx` as expected by course config.
- Server Components by default (no `'use client'` on page files unless needed).
- Use `Link` from `next/link` for client-side navigation.
- Function components (not class).

### Best Practices Requirements

- Server Components by default; `Link` for navigation.
- Default export for page components. TypeScript. No console. Pass ESLint.

---

## Verify and submit

1. `npm run dev` → open `http://localhost:3000`, go to `/` and `/about`, confirm navigation works.
2. `npm run review -- --challenge=01-server-components` to get scored.

From repo root: `npm run setup` if you haven’t. See root [README.md](../../../../../README.md) for workflow.
