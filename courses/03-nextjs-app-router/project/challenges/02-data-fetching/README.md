# Challenge 02: Data Fetching and API Routes

## Goal

Add data fetching and an API route:
- An API route that returns JSON (e.g. `app/api/posts/route.ts`)
- A page that fetches data in a Server Component using async/await
- Loading and error handling
- Display the fetched data on the page

---

## What to do

1. **API route:** Create `app/api/posts/route.ts` (or equivalent). Export a `GET` handler that returns JSON (e.g. list of posts). Use proper response (e.g. `Response.json(data)`).
2. **Posts page:** Create `app/posts/page.tsx` (or equivalent path per course config). Make it an **async** Server Component. Inside, `await fetch(...)` your API route or data source. Handle errors (try/catch or error boundary).
3. **Display:** Render the fetched data on the page. Show loading state if needed (e.g. loading.tsx or conditional in component).
4. **Layout:** Ensure `app/layout.tsx` exists; add a link to the posts page if needed.
5. **Code:** TypeScript (types for API response), no `console.*`, pass ESLint.

---

## What the review checks

| Step | What it does |
|------|----------------|
| **Functional tests** | API route exists and returns JSON; Server Component fetches data (async/await); data displayed; loading/error handled. |
| **Code quality** | ESLint (no errors/warnings). |
| **Architecture** | AST: async Server Component, API route (app/api/.../route.ts), data fetching pattern, error handling. |
| **Best practices** | TypeScript, no console, ESLint. |
| **E2E** | Playwright: posts page shows data (or loading/error). |

Pass threshold: weighted score ≥ 80%. No hidden checks.

---

## Technical Requirements (what will be reviewed)

### Functional Requirements

- Have an API route (e.g. `app/api/posts/route.ts`) that returns JSON (e.g. GET handler).
- Have a page (e.g. `app/posts/page.tsx`) that is an async Server Component and fetches data (e.g. await fetch or direct async call).
- Display the fetched data on the page.
- Handle loading (e.g. loading.tsx or in-component) and error (try/catch or error boundary).

### Code Quality Requirements

- TypeScript with type annotations; API request/response types.
- Pass ESLint (no errors or warnings).
- No `console.log`, `console.error`, or `console.warn`.

### Architecture Requirements

- API route under `app/api/.../route.ts` with correct export (e.g. GET).
- Async Server Component for the page that fetches data.
- Function components (not class).

### Best Practices Requirements

- API route returns JSON (e.g. Response.json). Server Component is async.
- TypeScript for API types. No console. Pass ESLint.

---

## Verify and submit

1. `npm run dev` → open the posts page and confirm data loads; optionally hit `/api/posts` directly.
2. `npm run review -- --challenge=02-data-fetching` to get scored.

From repo root: `npm run setup` if you haven’t. See root [README.md](../../../../../README.md) for workflow.
