# Challenge 01: API Setup and Basic Fetching

## Overview

Set up RTK Query API and create your first data fetching endpoint.

## Problem Statement

Create an RTK Query API slice that fetches users from the mock API. You'll need to:

1. Create an API slice using `createApi` from RTK Query
2. Define a `getUsers` endpoint
3. Integrate the API slice into the Redux store
4. Display the users in the app

## Instructions

1. **Create `src/api/usersApi.ts`** with RTK Query API slice:
   - Import `createApi` and `fetchBaseQuery` from `@reduxjs/toolkit/query/react`
   - Define `baseQuery` using `fetchBaseQuery` (point to mock server or use custom query)
   - Create API slice with `createApi`
   - Define `getUsers` endpoint in the `endpoints` function
   - Export the API slice and generated hooks

2. **Use the mock API** from `src/api/mockServer.ts`:
   - The mock server provides `mockApi.getUsers()` function
   - You can use it directly in a custom `baseQuery`, or configure `fetchBaseQuery` to call it

3. **Add the API reducer** to the store in `src/store/store.ts`:
   - Import your API slice
   - Add the API reducer to the store's `reducer` object

4. **Update `src/components/UsersList.tsx`**:
   - Import and use the generated `useGetUsersQuery` hook from your API slice
   - Handle loading, error, and data states
   - Display the list of users (name, email, username)

5. **Add the component to `src/App.tsx`**:
   - Import `UsersList` component
   - Wrap the app with Redux `Provider` if not already done
   - Render `UsersList` component in the app

## Visual Requirements

- Display a list of users
- Show loading state while fetching
- Show error state if fetch fails
- Display user information (name, email, username)

## How to Verify

1. Run `npm run dev` and open the app
2. You should see a list of users displayed
3. Check the Redux DevTools to see the API state
4. Verify loading states appear during fetch

## Learning Hints (no solution code)

- **RTK Query setup**: Use `createApi` from `@reduxjs/toolkit/query/react`. The API slice needs `baseQuery` (use `fetchBaseQuery` or create a custom one that calls `mockApi.getUsers()`).
- **Endpoint definition**: Inside `endpoints`, define `getUsers` as a query endpoint. RTK Query will auto-generate `useGetUsersQuery` hook.
- **Store integration**: Import your API slice and add `[apiSlice.reducerPath]: apiSlice.reducer` to the store's reducer object.
- **Using the hook**: In `UsersList`, call `useGetUsersQuery()`. It returns `{ data, isLoading, error }`. Handle all three states.
- **Mock server**: The `mockServer.ts` file provides `mockApi.getUsers()` which returns a Promise. You can use it in a custom `baseQuery` or configure `fetchBaseQuery` to call it.

**No solution code provided** - you must implement it yourself.

## Help & completion

- **Full learner guide**: See repo root [LEARNER_GUIDE.md](../../../../../LEARNER_GUIDE.md) — what help you get vs what you must do yourself.
- **Exact requirements**: This folder's `requirements.md` defines what is scored. No solution code is provided; you must implement it.

## Next Steps

After visual verification, run `npm run review` to check technical requirements.
