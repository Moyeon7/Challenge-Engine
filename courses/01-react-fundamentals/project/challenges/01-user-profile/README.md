# Challenge 01: User Profile Component

## Goal

Build a `UserProfile` component that shows:
- Name and email
- Avatar image, or a placeholder (e.g. initial letter) when no avatar URL is given
- A "Follow" button that toggles to "Following" when clicked (and back on click again)

---

## What to do

1. **File:** Implement only `src/components/UserProfile.tsx`. Do not change `App.tsx`; the component is already rendered on `/challenge/01-user-profile`.
2. **Props:** Accept `name` (string), `email` (string), `avatar` (optional string). Use a TypeScript interface.
3. **UI:** Render name, email, and either `<img src={avatar}>` or a placeholder (e.g. first letter of name). Root element must have `id="user-profile"`. Avatar or placeholder element must have `id="user-profile-avatar"`.
4. **Button:** One `<button>` with text "Follow" by default. On click, switch to "Following"; click again to switch back to "Follow".
5. **State:** Use `useState` (e.g. `isFollowing`) to drive the button text. Use a named handler (e.g. `handleFollowClick`).
6. **Code:** TypeScript, functional component, no `console.*`, pass ESLint.

---

## What the review checks

| Step | What it does |
|------|----------------|
| **Functional tests** | Renders name, email, avatar/placeholder, Follow button; button toggles "Follow" ↔ "Following"; file contains `useState`. |
| **Code quality** | ESLint (no errors/warnings). |
| **Architecture** | AST: functional component, props (e.g. destructured params), `useState` in `UserProfile.tsx`. |
| **Best practices** | TypeScript types, functional component, no console, ESLint. |
| **E2E** | Playwright: `/challenge/01-user-profile` has profile, name, email, button, toggle, avatar/placeholder. |

Pass threshold: weighted score ≥ 80%. No hidden checks.

---

## Technical Requirements (what will be reviewed)

### Functional Requirements

- Component named `UserProfile`, default export from `src/components/UserProfile.tsx`.
- Props: `name` (string), `email` (string), `avatar` (optional string). TypeScript interface.
- Display `name` and `email`.
- When `avatar` is provided: show `<img>` with that URL. When not: show a placeholder (e.g. initial). Same element (img or placeholder) must have `id="user-profile-avatar"`.
- Root wrapper of the component must have `id="user-profile"`.
- Button with text "Follow" that toggles to "Following" on click and back to "Follow" on second click.
- Use `useState` for the follow state (e.g. `const [isFollowing, setIsFollowing] = useState(false)`).

### Code Quality Requirements

- TypeScript with type annotations; props typed with an interface.
- Pass ESLint (no errors or warnings).
- No `console.log`, `console.error`, or `console.warn`.

### Architecture Requirements

- File: `src/components/UserProfile.tsx`. Default export.
- Function component (not class). Props destructured in the signature (e.g. `{ name, email, avatar }`).
- `useState` called inside the component for follow state.

### Best Practices Requirements

- Functional component (not class).
- TypeScript props interface.
- No console statements in production code.
- Pass ESLint checks.

---

## Test selectors (so tests can find your UI)

| What | Requirement |
|------|-------------|
| Container | `id="user-profile"` on the root element. |
| Avatar/placeholder | `id="user-profile-avatar"` on the `<img>` or the placeholder element. |
| Button | `<button>` with text "Follow" / "Following". Tests use /follow/i and /following/i. |
| Name & email | Render `name` and `email` props (visible text). |

---

## Verify and submit

1. `npm run dev` → open `/challenge/01-user-profile` and check behavior.
2. `npm run review -- --challenge=01-user-profile` to get scored.

From repo root: `npm run setup` if you haven’t (installs deps and Playwright). See root [README.md](../../../../../README.md) for workflow.
