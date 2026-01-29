# Challenge 02: Technical Requirements

## Functional Requirements

1. ✅ Must have API route (`app/api/posts/route.ts` or similar)
2. ✅ Must fetch data in Server Component using async/await
3. ✅ Must display fetched data on page
4. ✅ Must handle loading states
5. ✅ Must handle error states
6. ✅ API route must return JSON data
7. ✅ Server Component must be async

## Code Quality Requirements

1. ✅ Must use TypeScript with proper type annotations
2. ✅ API routes must be properly typed (request/response types)
3. ✅ Code must pass ESLint checks (no errors, warnings allowed)
4. ✅ No console.log, console.error, or console.warn statements in production code
5. ✅ Code must be readable and well-structured
6. ✅ Variable and function names must be descriptive and follow camelCase convention

## Architecture Requirements

1. ✅ Must use App Router API routes structure (`app/api/.../route.ts`)
2. ✅ Must use async Server Components for data fetching
3. ✅ Must use proper Next.js data fetching patterns (async/await in Server Components)
4. ✅ Must follow Next.js conventions
5. ✅ Must handle errors appropriately (try-catch or error boundaries)
6. ✅ Components must be functional components (not class components)

## Best Practices Requirements

1. ✅ API routes must use proper HTTP methods (GET, POST, etc.)
2. ✅ API routes must return proper JSON responses
3. ✅ Server Components must be async functions
4. ✅ Must handle loading states appropriately
5. ✅ Must handle error states gracefully
6. ✅ Must use TypeScript interfaces/types for API responses
7. ✅ Must follow Next.js data fetching best practices
8. ✅ Code must be maintainable and follow single responsibility principle
9. ✅ Error handling must be implemented (display error messages or fallback UI)
10. ✅ Must use proper Next.js patterns for async Server Components

## Industry Standards

The following industry standards will be checked:

- **TypeScript**: Proper type safety, API response types
- **Next.js Patterns**: App Router, API routes, async Server Components
- **Code Style**: ESLint compliance, consistent formatting
- **Naming Conventions**: camelCase for variables/functions, PascalCase for components
- **Data Fetching**: Proper async/await usage, error handling
- **Error Handling**: Graceful handling of API errors
- **Component Design**: Proper separation of concerns, Server Component patterns

## Scoring

- Functional correctness: 40%
- Code quality: 25%
- Architecture: 20%
- Best practices: 10%
- AI review: 5%

**Note**: Review will ONLY check what's specified in this requirements file. No hidden requirements.
