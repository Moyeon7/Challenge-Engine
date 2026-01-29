# Challenge 02: Technical Requirements

## Functional Requirements

1. ✅ Component must be named `TodoList`
2. ✅ Must manage array of todos with state
3. ✅ Each todo must have: `id`, `text`, `completed` properties
4. ✅ Must be able to add new todos
5. ✅ Must be able to toggle completion status
6. ✅ Must be able to delete todos
7. ✅ Completed todos must be visually distinct
8. ✅ Must use proper React state management

## Code Quality Requirements

1. ✅ Must use TypeScript with proper type annotations
2. ✅ Todo interface/type must be defined with TypeScript
3. ✅ Must handle edge cases (empty input, duplicate todos, etc.)
4. ✅ Code must pass ESLint checks (no errors, warnings allowed)
5. ✅ No console.log, console.error, or console.warn statements in production code
6. ✅ Code must be readable and well-structured
7. ✅ Variable and function names must be descriptive and follow camelCase convention

## Architecture Requirements

1. ✅ Component must be in `src/components/TodoList.tsx`
2. ✅ Component must be exported as default export
3. ✅ Must use useState for state management (array of todos)
4. ✅ Must use proper array methods (map, filter, etc.)
5. ✅ Event handlers must be properly defined and named
6. ✅ Must use controlled components for input fields
7. ✅ Must use functional component pattern (not class component)

## Best Practices Requirements

1. ✅ Component must be a functional component (not class component)
2. ✅ Todo type/interface must be properly defined with TypeScript
3. ✅ Event handlers must be properly named (e.g., `handleAddTodo`, `handleToggleTodo`, `handleDeleteTodo`)
4. ✅ State variable names must be descriptive (e.g., `todos`, not `items`)
5. ✅ Must use proper React patterns for list rendering (map with keys)
6. ✅ Input must be controlled (value + onChange)
7. ✅ Must handle empty state appropriately
8. ✅ Code must follow React best practices for state updates
9. ✅ No direct state mutations - must use setState properly
10. ✅ Component must be self-contained and maintainable

## Industry Standards

The following industry standards will be checked:

- **TypeScript**: Proper type safety, interface definitions
- **React Patterns**: Functional components, hooks, controlled components
- **Code Style**: ESLint compliance, consistent formatting
- **Naming Conventions**: camelCase for variables/functions, PascalCase for components
- **State Management**: Proper useState usage, immutable updates
- **Array Operations**: Proper use of map, filter, spread operator
- **Component Design**: Single responsibility, proper separation of concerns

## Scoring

- Functional correctness: 40%
- Code quality: 25%
- Architecture: 20%
- Best practices: 10%
- AI review: 5%

**Note**: Review will ONLY check what's specified in this requirements file. No hidden requirements.
