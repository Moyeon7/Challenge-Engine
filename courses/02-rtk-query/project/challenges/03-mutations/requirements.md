# Challenge 03: Technical Requirements

## Functional Requirements

1. ✅ Must have mutation endpoints (create, update, delete)
2. ✅ Must implement optimistic updates
3. ✅ Must invalidate cache tags on mutation
4. ✅ Must handle mutation loading states
5. ✅ Must handle mutation error states
6. ✅ Must handle mutation success states
7. ✅ UI must update optimistically

## Code Quality Requirements

1. ✅ Must use TypeScript with proper type annotations
2. ✅ Mutations must be properly typed (request/response types)
3. ✅ Code must pass ESLint checks (no errors, warnings allowed)
4. ✅ No console.log, console.error, or console.warn statements in production code
5. ✅ Code must be readable and well-structured
6. ✅ Variable and function names must be descriptive and follow camelCase convention

## Architecture Requirements

1. ✅ Must use `mutation` endpoints in RTK Query (not query endpoints)
2. ✅ Must use `onQueryStarted` for optimistic updates (if required)
3. ✅ Must use `invalidatesTags` for cache invalidation
4. ✅ Must use generated mutation hooks (e.g., `useCreatePostMutation`)
5. ✅ Must follow RTK Query mutation patterns
6. ✅ Must use functional component pattern (not class component)

## Best Practices Requirements

1. ✅ Mutation endpoints must be properly configured
2. ✅ Optimistic updates must be implemented correctly (if required)
3. ✅ Cache invalidation must use proper tag invalidation
4. ✅ Must handle mutation loading, error, and success states
5. ✅ Component must use destructured mutation hook results
6. ✅ Must use TypeScript interfaces/types for mutation payloads and responses
7. ✅ Error handling must be implemented (display error messages)
8. ✅ Success handling must update UI appropriately
9. ✅ Must follow RTK Query mutation best practices
10. ✅ Code must be maintainable and follow single responsibility principle

## Industry Standards

The following industry standards will be checked:

- **TypeScript**: Proper type safety, mutation payload types
- **RTK Query Patterns**: Mutations, optimistic updates, cache invalidation
- **Code Style**: ESLint compliance, consistent formatting
- **Naming Conventions**: camelCase for variables/functions, PascalCase for components
- **State Management**: Proper mutation handling, cache updates
- **Error Handling**: Graceful handling of mutation errors
- **Component Design**: Proper separation of concerns, reusable patterns

## Scoring

- Functional correctness: 40%
- Code quality: 25%
- Architecture: 20%
- Best practices: 10%
- AI review: 5%

**Note**: Review will ONLY check what's specified in this requirements file. No hidden requirements.
