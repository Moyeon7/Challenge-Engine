# Challenge 02: Technical Requirements

## Functional Requirements

1. ✅ Must have `getPosts` endpoint
2. ✅ Must implement tag-based caching
3. ✅ Must define tags for cache invalidation
4. ✅ Must display posts in UI
5. ✅ Must handle multiple queries simultaneously
6. ✅ Must demonstrate caching behavior
7. ✅ Must show loading states for each query

## Code Quality Requirements

1. ✅ Must use TypeScript with proper type annotations
2. ✅ Tags must be properly defined with TypeScript
3. ✅ Code must pass ESLint checks (no errors, warnings allowed)
4. ✅ No console.log, console.error, or console.warn statements in production code
5. ✅ Code must be readable and well-structured
6. ✅ Variable and function names must be descriptive and follow camelCase convention

## Architecture Requirements

1. ✅ Must use RTK Query tag system for caching
2. ✅ Must define `providesTags` for query endpoints
3. ✅ Must define `invalidatesTags` for mutation endpoints (if applicable)
4. ✅ Must handle multiple endpoints properly
5. ✅ Must use proper RTK Query patterns
6. ✅ Components must use appropriate generated hooks
7. ✅ Must use functional component pattern (not class component)

## Best Practices Requirements

1. ✅ Tag names must be descriptive and follow RTK Query conventions
2. ✅ Must implement proper cache invalidation strategy
3. ✅ Must handle multiple queries with proper loading/error states
4. ✅ Component must use destructured hook results properly
5. ✅ Must demonstrate caching behavior (show cached data)
6. ✅ Must use TypeScript interfaces/types for all data structures
7. ✅ Code must follow RTK Query caching best practices
8. ✅ Must handle edge cases (empty data, network errors)
9. ✅ Component structure must be maintainable
10. ✅ Must use proper React patterns for list rendering

## Industry Standards

The following industry standards will be checked:

- **TypeScript**: Proper type safety, tag type definitions
- **RTK Query Patterns**: Tag system, cache invalidation, providesTags
- **Code Style**: ESLint compliance, consistent formatting
- **Naming Conventions**: camelCase for variables/functions, PascalCase for components
- **State Management**: Proper caching strategy, tag-based invalidation
- **Error Handling**: Graceful handling of API errors
- **Component Design**: Proper separation of concerns, reusable patterns

## Scoring

- Functional correctness: 40%
- Code quality: 25%
- Architecture: 20%
- Best practices: 10%
- AI review: 5%

**Note**: Review will ONLY check what's specified in this requirements file. No hidden requirements.
