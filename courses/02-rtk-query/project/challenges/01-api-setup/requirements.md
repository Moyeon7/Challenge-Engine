# Challenge 01: Technical Requirements

## Functional Requirements

1. ✅ Must create RTK Query API slice using `createApi`
2. ✅ Must define `baseQuery` (can use `fetchBaseQuery` or custom)
3. ✅ Must define `getUsers` endpoint
4. ✅ Must integrate API slice reducer into Redux store
5. ✅ Must use generated hooks (`useGetUsersQuery`) in component
6. ✅ Must handle loading state
7. ✅ Must handle error state
8. ✅ Must display user data in the UI

## Code Quality Requirements

1. ✅ Must use TypeScript with proper type annotations
2. ✅ API slice must be properly typed (endpoints, responses)
3. ✅ Code must pass ESLint checks (no errors, warnings allowed)
4. ✅ No console.log, console.error, or console.warn statements in production code
5. ✅ Code must be readable and well-structured
6. ✅ Variable and function names must be descriptive and follow camelCase convention

## Architecture Requirements

1. ✅ API slice must be in `src/api/usersApi.ts` (or appropriate location)
2. ✅ Must use RTK Query patterns (`createApi`, `fetchBaseQuery`)
3. ✅ Store must include API reducer in `reducerPath`
4. ✅ Component must use RTK Query generated hooks (e.g., `useGetUsersQuery`)
5. ✅ Must follow RTK Query best practices
6. ✅ Must use functional component pattern (not class component)

## Best Practices Requirements

1. ✅ API slice must be properly configured with `baseQuery`
2. ✅ Endpoint names must be descriptive and follow RTK Query conventions
3. ✅ Must handle loading, error, and success states properly
4. ✅ Component must use destructured hook results (e.g., `const { data, isLoading, error } = useGetUsersQuery()`)
5. ✅ Error handling must be implemented (display error messages or fallback UI)
6. ✅ Loading states must be shown to users
7. ✅ Must use TypeScript interfaces/types for API responses
8. ✅ Code must follow RTK Query documentation patterns
9. ✅ Store configuration must be correct (API reducer included)
10. ✅ Component must be self-contained and maintainable

## Industry Standards

The following industry standards will be checked:

- **TypeScript**: Proper type safety, API response types
- **RTK Query Patterns**: createApi, fetchBaseQuery, generated hooks
- **Code Style**: ESLint compliance, consistent formatting
- **Naming Conventions**: camelCase for variables/functions, PascalCase for components
- **State Management**: Proper RTK Query integration, store configuration
- **Error Handling**: Graceful handling of API errors
- **Component Design**: Proper separation of concerns, reusable patterns

## Scoring

- Functional correctness: 40%
- Code quality: 25%
- Architecture: 20%
- Best practices: 10%
- AI review: 5%

**Note**: Review will ONLY check what's specified in this requirements file. No hidden requirements.
