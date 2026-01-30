# Challenge 03: Mutations and Optimistic Updates

## Goal

Add mutations (create, update, delete) and optional optimistic updates:
- Mutation endpoints (e.g. createUser, updateUser, deleteUser or createPost, etc.)
- Use `invalidatesTags` so related queries refetch after a mutation
- Optional: optimistic updates via `onQueryStarted`
- Forms/components that call mutation hooks and handle loading, error, success

---

## What to do

1. **Mutations:** In your API slice, add mutation endpoints (e.g. `addUser`, `updateUser`, `deleteUser` or equivalent for posts). Use `builder.mutation()`. Set `invalidatesTags` so lists refetch (e.g. invalidate `['Users']` or `['Posts']`).
2. **Optimistic updates (optional):** In mutation endpoints, use `onQueryStarted` to update the cache optimistically before the server responds.
3. **Forms:** Create or update components (e.g. `UserForm`, `EditUserForm`) that use generated mutation hooks (e.g. `useCreateUserMutation`). Handle loading, error, and success (e.g. reset form, show message).
4. **App:** Render the form(s) on `/challenge/03-mutations` so create/update/delete can be tested.
5. **Code:** TypeScript (payload and response types), no `console.*`, pass ESLint.

---

## What the review checks

| Step | What it does |
|------|----------------|
| **Functional tests** | Mutation endpoints exist; invalidatesTags used; mutation hooks used; loading/error/success handled; UI updates (optimistic or after success). |
| **Code quality** | ESLint (no errors/warnings). |
| **Architecture** | AST: mutation endpoints, invalidatesTags, optional onQueryStarted/optimistic update, useMutation hook. |
| **Best practices** | TypeScript, no console, ESLint. |
| **E2E** | Playwright: `/challenge/03-mutations` create/update/delete flow. |

Pass threshold: weighted score ≥ 60%. No hidden checks.

---

## Technical Requirements (what will be reviewed)

### Functional Requirements

- Have mutation endpoints (e.g. create, update, delete) defined with `builder.mutation()`.
- Use `invalidatesTags` so related query caches are invalidated after a mutation.
- Use generated mutation hooks (e.g. `useCreateUserMutation`) in components.
- Handle mutation loading, error, and success states in the UI.
- UI updates after mutation (optimistic or on success).

### Code Quality Requirements

- TypeScript with type annotations; mutation payload and response types.
- Pass ESLint (no errors or warnings).
- No `console.log`, `console.error`, or `console.warn`.

### Architecture Requirements

- Mutation endpoints (not query) in the API slice.
- `invalidatesTags` on mutation endpoints. Optional: `onQueryStarted` for optimistic updates.
- Components use generated mutation hooks.
- Function components (not class).

### Best Practices Requirements

- Mutation hooks destructured (e.g. `const [createUser, { isLoading, error }] = useCreateUserMutation()`).
- TypeScript for payloads and responses. No console. Pass ESLint.

---

## Verify and submit

1. `npm run dev` → open `/challenge/03-mutations` and test create/update/delete.
2. `npm run review -- --challenge=03-mutations` to get scored.

From repo root: `npm run setup` if you haven’t. See root [README.md](../../../../../README.md) for workflow.
