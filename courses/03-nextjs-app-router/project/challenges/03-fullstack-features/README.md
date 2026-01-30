# Challenge 03: Fullstack Features and Metadata

## Goal

Add a fullstack feature with Client Components, metadata, and form handling:
- A page that uses a Client Component (e.g. contact form) with `'use client'`
- Form submission via Server Action or API route (e.g. `app/api/contact/route.ts`)
- Metadata (title, description) on the page
- Form validation and success/error feedback

---

## What to do

1. **Contact (or form) page:** Create `app/contact/page.tsx` (or path per course config). Export metadata (e.g. `export const metadata = { title: '...', description: '...' }`).
2. **Client form component:** Create a form component (e.g. `app/contact/form.tsx`) with `'use client'` at the top. Use state for form fields; handle submit (e.g. call Server Action or POST to API route). Show success/error message.
3. **API route or Server Action:** Handle form submission—e.g. `app/api/contact/route.ts` with POST that accepts form data and returns success/error, or a Server Action. Validate input; return appropriate response.
4. **Metadata:** Set `metadata` (or `generateMetadata`) on the contact page (title, description).
5. **Code:** TypeScript (form data and API types), no `console.*`, pass ESLint.

---

## What the review checks

| Step | What it does |
|------|----------------|
| **Functional tests** | Client Component with 'use client'; form submission (Server Action or API); metadata present; validation and success/error handling. |
| **Code quality** | ESLint (no errors/warnings). |
| **Architecture** | AST: useClient, serverAction or API route, metadata export, form handling, client component. |
| **Best practices** | TypeScript, no console, ESLint. |
| **E2E** | Playwright: form submit and feedback. |

Pass threshold: weighted score ≥ 60%. No hidden checks.

---

## Technical Requirements (what will be reviewed)

### Functional Requirements

- Have a Client Component with `'use client'` at the top of the file (e.g. form component).
- Handle form submission via Server Action or API route (e.g. POST to `app/api/contact/route.ts`).
- Export metadata (title, description) from the page (e.g. `export const metadata` or `generateMetadata`).
- Form validation and success/error messages in the UI.
- Form state and submit handler wired correctly.

### Code Quality Requirements

- TypeScript with type annotations; form data and API types.
- Pass ESLint (no errors or warnings).
- No `console.log`, `console.error`, or `console.warn`.

### Architecture Requirements

- Use `'use client'` only where needed (e.g. form with state/handlers).
- Use Server Action or API route for form handling.
- Use Next.js metadata API on the page.
- Function components (not class).

### Best Practices Requirements

- Client Component has 'use client' at top. Server Action or API route properly typed.
- Metadata object exported from page. TypeScript. No console. Pass ESLint.

---

## Verify and submit

1. `npm run dev` → open the contact (or form) page, submit the form, confirm success/error and metadata in the tab.
2. `npm run review -- --challenge=03-fullstack-features` to get scored.

From repo root: `npm run setup` if you haven’t. See root [README.md](../../../../../README.md) for workflow.
