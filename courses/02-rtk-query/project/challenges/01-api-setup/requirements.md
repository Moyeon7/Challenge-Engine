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

1. ✅ Must use TypeScript with proper types
2. ✅ API slice must be properly typed
3. ✅ Code must pass ESLint checks
4. ✅ No console.log statements in production code

## Architecture Requirements

1. ✅ API slice must be in `src/api/usersApi.ts`
2. ✅ Must use RTK Query patterns (`createApi`, `fetchBaseQuery`)
3. ✅ Store must include API reducer
4. ✅ Component must use RTK Query hooks
5. ✅ Must follow RTK Query best practices

## Scoring

- Functional correctness: 40%
- Code quality: 25%
- Architecture: 20%
- Best practices: 10%
- AI review: 5%
