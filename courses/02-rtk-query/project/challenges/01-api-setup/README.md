# Challenge 01: API Setup and Basic Fetching

## Goal

Set up RTK Query and fetch users from the mock API:
- Create an API slice with `createApi` and a `getUsers` endpoint
- Add the API reducer to the Redux store
- Use the generated `useGetUsersQuery` hook in a component
- Show users (name, email, username) with loading and error states

---

## What to do

1. **API slice:** Create `src/api/usersApi.ts`. Use `createApi` and `fetchBaseQuery` from `@reduxjs/toolkit/query/react`. Set `baseQuery` (e.g. `fetchBaseQuery` or a custom one that uses `mockApi.getUsers()` from `src/api/mockServer.ts`). Define a `getUsers` query endpoint. Export the slice and its generated hooks.
2. **Store:** In `src/store/store.ts`, add the API reducer: `[apiSlice.reducerPath]: apiSlice.reducer`. Ensure the store includes the API middleware.
3. **Component:** In `src/components/UsersList.tsx`, use `useGetUsersQuery()`. Destructure `{ data, isLoading, error }`. Render a list of users (name, email, username). Show loading and error UI.
4. **App:** Ensure `UsersList` is rendered on `/challenge/01-api-setup` and the app is wrapped with Redux `Provider` (in `App.tsx` or `main.tsx`).
5. **Code:** TypeScript (types for API responses), no `console.*`, pass ESLint.

---

## What the review checks

| Step | What it does |
|------|----------------|
| **Functional tests** | API slice exists; getUsers endpoint; store has API reducer; component uses generated hook; loading/error/data handled; users displayed. |
| **Code quality** | ESLint (no errors/warnings). |
| **Architecture** | AST: createApi, fetchBaseQuery, endpoints, generated useQuery hook. |
| **Best practices** | TypeScript, no console, ESLint. |
| **E2E** | Playwright: `/challenge/01-api-setup` shows users (or loading/error). |

Pass threshold: weighted score ≥ 80%. No hidden checks.

---

## Technical Requirements (what will be reviewed)

### Functional Requirements

- Create RTK Query API slice with `createApi`. Define `baseQuery` (e.g. `fetchBaseQuery` or custom).
- Define `getUsers` query endpoint.
- Add API slice reducer to the Redux store (`src/store/store.ts`).
- Use generated hook (e.g. `useGetUsersQuery`) in `UsersList` or equivalent component.
- Handle loading state (show loading UI).
- Handle error state (show error or fallback UI).
- Display user data (name, email, username) in the UI.

### Code Quality Requirements

- TypeScript with type annotations; API slice and responses typed.
- Pass ESLint (no errors or warnings).
- No `console.log`, `console.error`, or `console.warn`.

### Architecture Requirements

- API slice in `src/api/usersApi.ts` (or path reviewed by course config).
- Use RTK Query: `createApi`, `fetchBaseQuery`, `endpoints`.
- Store includes API reducer and middleware.
- Component uses generated query hook (e.g. `useGetUsersQuery`).
- Function components (not class).

### Best Practices Requirements

- API slice has `baseQuery` and descriptive endpoint names.
- Component destructures hook result (e.g. `const { data, isLoading, error } = useGetUsersQuery()`).
- TypeScript interfaces for API responses.
- No console statements. Pass ESLint.

---

## Verify and submit

1. `npm run dev` → open `/challenge/01-api-setup` and confirm users load (or loading/error states).
2. `npm run review -- --challenge=01-api-setup` to get scored.

From repo root: `npm run setup` if you haven’t. See root [README.md](../../../../../README.md) for workflow.
