# Challenge 03: Technical Requirements

## Functional Requirements

1. ✅ Must create ThemeContext using createContext
2. ✅ Must create ThemeProvider component
3. ✅ Must provide theme state and toggle function via context
4. ✅ Must persist theme to localStorage
5. ✅ Must load theme from localStorage on mount
6. ✅ Theme must be accessible via useContext hook
7. ✅ Must support at least "light" and "dark" themes
8. ✅ Theme changes must apply to all consuming components

## Code Quality Requirements

1. ✅ Context must be properly typed with TypeScript (ContextType interface)
2. ✅ Must handle localStorage errors gracefully (try-catch or null checks)
3. ✅ Must use proper React Context patterns
4. ✅ Code must pass ESLint checks (no errors, warnings allowed)
5. ✅ No console.log, console.error, or console.warn statements in production code
6. ✅ Code must be readable and well-structured
7. ✅ Variable and function names must be descriptive and follow camelCase convention

## Architecture Requirements

1. ✅ Context must be in `src/contexts/ThemeContext.tsx`
2. ✅ Must use createContext to create the context
3. ✅ Must use useContext hook for consuming context
4. ✅ Provider component must wrap app in proper location (App.tsx or main.tsx)
5. ✅ Must use custom hook (e.g., `useTheme`) for context consumption
6. ✅ Must follow React Context best practices
7. ✅ Must use functional component pattern (not class component)

## Best Practices Requirements

1. ✅ Context must be properly typed with TypeScript interface
2. ✅ Custom hook must handle context undefined case (throw error or return default)
3. ✅ Provider must manage state using useState
4. ✅ localStorage operations must be in useEffect hooks
5. ✅ Must handle localStorage read/write errors gracefully
6. ✅ Theme state must be properly initialized (default to 'light' or from localStorage)
7. ✅ Toggle function must be properly implemented
8. ✅ Context value must be memoized or properly structured
9. ✅ Must follow React Context best practices (separate Provider and hook)
10. ✅ Code must be maintainable and follow single responsibility principle

## Industry Standards

The following industry standards will be checked:

- **TypeScript**: Proper type safety, ContextType interface
- **React Patterns**: Context API, custom hooks, Provider pattern
- **Code Style**: ESLint compliance, consistent formatting
- **Naming Conventions**: camelCase for variables/functions, PascalCase for components
- **State Management**: Proper useState usage, localStorage integration
- **Error Handling**: Graceful handling of localStorage errors
- **Component Design**: Proper separation of concerns, reusable context pattern

## Scoring

- Functional correctness: 40%
- Code quality: 25%
- Architecture: 20%
- Best practices: 10%
- AI review: 5%

**Note**: Review will ONLY check what's specified in this requirements file. No hidden requirements.
