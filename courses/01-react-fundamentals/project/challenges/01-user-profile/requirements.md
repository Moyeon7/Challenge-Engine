# Challenge 01: Technical Requirements

## Functional Requirements

1. ✅ Component must be named `UserProfile`
2. ✅ Component must accept props: `name`, `email`, `avatar` (optional)
3. ✅ Component must display user name
4. ✅ Component must display user email
5. ✅ Component must display avatar or placeholder
6. ✅ Component must have a "Follow" button
7. ✅ Button must toggle between "Follow" and "Following" states
8. ✅ State must be managed using React hooks (useState)

## Code Quality Requirements

1. ✅ Component must use TypeScript with proper type annotations
2. ✅ Props must be properly typed with TypeScript interface
3. ✅ Component must follow React functional component pattern
4. ✅ Code must pass ESLint checks (no errors, warnings allowed)
5. ✅ No console.log, console.error, or console.warn statements in production code
6. ✅ Code must be readable and well-structured
7. ✅ Variable and function names must be descriptive and follow camelCase convention

## Architecture Requirements

1. ✅ Component must be in `src/components/UserProfile.tsx`
2. ✅ Component must be exported as default export
3. ✅ Component must use proper React patterns (functional component, hooks, props)
4. ✅ No class components allowed - must use functional component
5. ✅ Must use React hooks (useState) for state management
6. ✅ Props must be destructured in function parameters

## Best Practices Requirements

1. ✅ Component must be a functional component (not class component)
2. ✅ Props interface must be defined with TypeScript
3. ✅ Event handlers must be properly named (e.g., `handleFollowClick`, not `onClick`)
4. ✅ State variable names must be descriptive (e.g., `isFollowing`, not `state`)
5. ✅ Conditional rendering must use proper React patterns (ternary or &&)
6. ✅ No hardcoded magic numbers or strings - use constants or props
7. ✅ Code must follow React best practices for component structure
8. ✅ Component must be self-contained and reusable

## Industry Standards

The following industry standards will be checked:

- **TypeScript**: Proper type safety and type annotations
- **React Patterns**: Functional components, hooks, proper state management
- **Code Style**: ESLint compliance, consistent formatting
- **Naming Conventions**: camelCase for variables/functions, PascalCase for components
- **Component Design**: Single responsibility, reusability, proper prop interfaces
- **Error Handling**: Graceful handling of edge cases (optional props, etc.)

## Scoring

- Functional correctness: 40%
- Code quality: 25%
- Architecture: 20%
- Best practices: 10%
- AI review: 5%

**Note**: Review will ONLY check what's specified in this requirements file. No hidden requirements.
