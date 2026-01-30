# Challenge 03: State Management with Context

## Goal

Implement a theme switcher using React Context:
- Theme available app-wide via Context
- Toggle between "light" and "dark"
- Persist theme in `localStorage` (key `'theme'`) so it survives reload

---

## What to do

1. **Files:** Implement `src/contexts/ThemeContext.tsx` (context, ThemeProvider, and ThemeToggle or wire existing stub). In `App.tsx` only add `<ThemeProvider>` around the app (e.g. around `<BrowserRouter>`). Do not change routes or other App content.
2. **Context:** Use `createContext`. Value: current theme (string) and a toggle function (e.g. `toggleTheme`).
3. **ThemeProvider:** Wrap children; hold theme in `useState`; read/write `localStorage` key `'theme'`; provide value to context. Initial theme: from `localStorage` if present, else `'light'`.
4. **ThemeToggle:** Use context (e.g. `useContext` or custom `useTheme` hook); render a button that toggles theme. Must support values `'light'` and `'dark'` (lowercase).
5. **Code:** TypeScript (context type), functional components, no `console.*`, pass ESLint.

---

## What the review checks

| Step | What it does |
|------|----------------|
| **Functional tests** | Context created; Provider gives theme + toggle; theme persists in localStorage; theme loads on mount; consumer uses useContext or useTheme; values `'light'` and `'dark'`. |
| **Code quality** | ESLint (no errors/warnings). |
| **Architecture** | AST: `createContext`, `useContext`, Provider usage, localStorage usage, functional components. |
| **Best practices** | TypeScript context type, custom hook, no console, ESLint. |
| **E2E** | Playwright: `/challenge/03-state-management` toggle, theme change and persistence. |

Pass threshold: weighted score ≥ 80%. No hidden checks.

---

## Technical Requirements (what will be reviewed)

### Functional Requirements

- Create context with React's `createContext` (e.g. `ThemeContext`).
- `ThemeProvider` wraps children and provides value: theme (string) + toggle function.
- Persist theme to `localStorage` when it changes. Key must be `'theme'` (unit tests use `localStorage.getItem('theme')`).
- On mount, read `localStorage.getItem('theme')`; if present use as initial state, else default `'light'`.
- Consumers get theme via `useContext` or a custom hook that uses `useContext`.
- Theme values: at least `'light'` and `'dark'` (lowercase strings).
- Toggling updates all consumers.

### Code Quality Requirements

- Context typed with TypeScript (e.g. ContextType interface).
- Pass ESLint (no errors or warnings).
- No `console.log`, `console.error`, or `console.warn`.

### Architecture Requirements

- File: `src/contexts/ThemeContext.tsx`. Must call `createContext`.
- Consumers use `useContext` (e.g. inside a custom hook like `useTheme`).
- `ThemeProvider` wraps the app in App.tsx so theme is available app-wide.
- Provider uses `useState` for theme and provides it via context value.
- Function components only (no class).

### Best Practices Requirements

- Context typed with TypeScript interface.
- Custom hook (e.g. `useTheme`) that uses `useContext`.
- No console statements in production code.
- Pass ESLint checks.

---

## Test details (so tests pass)

| What | Requirement |
|------|-------------|
| localStorage key | Use key `'theme'`. Tests call `localStorage.getItem('theme')` and expect `'dark'` after toggle. |
| Theme values | Use exactly `'light'` and `'dark'` (lowercase). |
| useTheme | Export a hook (e.g. `useTheme`) that returns `{ theme, toggleTheme }` so ThemeToggle and tests can read theme. |
| Toggle button | E2E finds a button with name matching /theme|toggle|dark|light|mode/i (e.g. "Toggle theme", "Dark mode"). |

App.tsx: only add `<ThemeProvider>` as wrapper. Do not change routes or other content.

---

## Verify and submit

1. `npm run dev` → open `/challenge/03-state-management`, click toggle, reload and confirm theme persists.
2. `npm run review -- --challenge=03-state-management` to get scored.

From repo root: `npm run setup` if you haven’t. See root [README.md](../../../../../README.md) for workflow.
