# Challenge 02: Data Display and Caching

## Goal

Add a second endpoint and use RTK Query’s tag-based caching:
- Add a `getPosts` endpoint (in same or separate API slice)
- Use `providesTags` and `tagTypes` for cache tagging
- Display both users and posts; show loading per query
- Use generated hooks (`useGetUsersQuery`, `useGetPostsQuery` or equivalent)

---

## What to do

1. **Posts endpoint:** Add `getPosts` (e.g. in `src/api/usersApi.ts` or `src/api/postsApi.ts`). Use the mock API or a similar data source.
2. **Tags:** Define `tagTypes` in the API slice. Add `providesTags` to query endpoints (e.g. `['Users']`, `['Posts']`) so cache can be invalidated later.
3. **PostsList:** Create or update `src/components/PostsList.tsx` to use the generated posts query hook. Handle loading and error. Display posts.
4. **App:** Show both users and posts on `/challenge/02-data-display` (e.g. UsersList and PostsList).
5. **Code:** TypeScript, no `console.*`, pass ESLint.

---

## What the review checks

| Step | What it does |
|------|----------------|
| **Functional tests** | getPosts endpoint; tag-based caching (providesTags/tagTypes); posts displayed; multiple queries; loading states. |
| **Code quality** | ESLint (no errors/warnings). |
| **Architecture** | AST: providesTags, invalidatesTags (if used), tagTypes, multiple endpoints. |
| **Best practices** | TypeScript, no console, ESLint. |
| **E2E** | Playwright: `/challenge/02-data-display` shows users and posts. |

Pass threshold: weighted score ≥ 60%. No hidden checks.

---

## Technical Requirements (what will be reviewed)

### Functional Requirements

- Have a `getPosts` endpoint (query).
- Implement tag-based caching: define `tagTypes` and use `providesTags` on query endpoints.
- Display posts in the UI (e.g. PostsList).
- Handle multiple queries (users and posts) with loading states.
- Use generated hooks for both endpoints.

### Code Quality Requirements

- TypeScript with type annotations; tag types and responses typed.
- Pass ESLint (no errors or warnings).
- No `console.log`, `console.error`, or `console.warn`.

### Architecture Requirements

- Use RTK Query tag system: `tagTypes`, `providesTags` on queries. Use `invalidatesTags` on mutations if applicable.
- Multiple endpoints (e.g. getUsers, getPosts); components use the correct generated hooks.
- Function components (not class).

### Best Practices Requirements

- Tag names follow RTK Query conventions (e.g. in tagTypes).
- Destructure hook results; handle loading/error for each query.
- TypeScript for data structures. No console. Pass ESLint.

---

## Verify and submit

1. `npm run dev` → open `/challenge/02-data-display` and confirm both users and posts load.
2. `npm run review -- --challenge=02-data-display` to get scored.

From repo root: `npm run setup` if you haven’t. See root [README.md](../../../../../README.md) for workflow.
