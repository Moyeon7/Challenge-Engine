# Challenge 02: Todo List Application

## Goal

Build a `TodoList` component where users can:
- Add todos (input + button)
- Mark todos complete (checkbox)
- Delete todos (button per item)
- See completed todos visually distinct (e.g. strikethrough)

---

## What to do

1. **File:** Implement only `src/components/TodoList.tsx`. Do not change `App.tsx`; the component is already rendered on `/challenge/02-todo-list`.
2. **State:** Use `useState` with an array of items. Each item: `id` (string or number), `text` (string), `completed` (boolean).
3. **UI:** Input with placeholder like "Add todo", button with text matching /add/i (e.g. "Add"). List of todos; each item has a checkbox and a delete button. Completed items must look distinct (e.g. strikethrough).
4. **Behavior:** Input must be controlled (value + onChange). Add on button click; toggle `completed` on checkbox; remove item on delete.
5. **Code:** TypeScript (todo type/interface), functional component, named handlers (e.g. `handleAddTodo`, `handleToggleTodo`, `handleDeleteTodo`), no `console.*`, pass ESLint.

---

## What the review checks

| Step | What it does |
|------|----------------|
| **Functional tests** | Input and Add button; can add, toggle completion, delete; completed items look distinct (e.g. strikethrough). |
| **Code quality** | ESLint (no errors/warnings). |
| **Architecture** | AST: functional component, `useState`, array methods (e.g. map, filter), controlled input (value + onChange). |
| **Best practices** | TypeScript, functional component, no console, ESLint. |
| **E2E** | Playwright: `/challenge/02-todo-list` add/toggle/delete, check visual distinction. |

Pass threshold: weighted score ≥ 80%. No hidden checks.

---

## Technical Requirements (what will be reviewed)

### Functional Requirements

- Component named `TodoList`, default export from `src/components/TodoList.tsx`.
- State: array of todos; each todo has `id`, `text`, `completed`.
- Add new todos (input + button; button name matches /add/i).
- Toggle completion per todo (checkbox or equivalent; update `completed`).
- Delete todos (remove from state by id).
- Completed todos visually distinct (e.g. strikethrough, different color).
- Input for new todo is controlled (value from state, onChange updates state).
- Use `useState` for the list (no class components).

### Code Quality Requirements

- TypeScript with type annotations; todo type/interface.
- Pass ESLint (no errors or warnings).
- No `console.log`, `console.error`, or `console.warn`.

### Architecture Requirements

- File: `src/components/TodoList.tsx`. Default export.
- `useState` for the todos array.
- Array methods (e.g. map for list, filter for delete); review checks AST for map/filter.
- Input has `value` and `onChange` (controlled pattern).
- Function component (not class).

### Best Practices Requirements

- Functional component (not class).
- TypeScript todo type/interface.
- No console statements in production code.
- Pass ESLint checks.

---

## Test selectors (so tests can find your UI)

| What | Requirement |
|------|-------------|
| Input | Placeholder matching "add todo" (case-insensitive). |
| Add button | `<button>` with accessible name matching /add/i (e.g. "Add"). |
| Toggle | Checkbox (`role="checkbox"`) per todo. |
| Delete | Button with name matching /delete/i (e.g. "Delete", "Remove") per todo. |
| Completed styling | E2E checks for strikethrough or similar (e.g. `text-decoration: line-through`). |

Optional: `id="todo-list"` on container. Use `<ul>`/`<li>` with checkbox and delete button per item.

---

## Verify and submit

1. `npm run dev` → open `/challenge/02-todo-list` and test add/toggle/delete.
2. `npm run review -- --challenge=02-todo-list` to get scored.

From repo root: `npm run setup` if you haven’t. See root [README.md](../../../../../README.md) for workflow.
