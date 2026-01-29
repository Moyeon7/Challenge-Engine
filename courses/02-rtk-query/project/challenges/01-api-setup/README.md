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

1. Create `src/api/usersApi.ts` with RTK Query API slice
2. Use the mock API from `src/api/mockServer.ts`
3. Add the API reducer to the store in `src/store/store.ts`
4. Create a component to display users using the generated hooks
5. Add the component to `src/App.tsx`

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

## Help & completion

- **Full learner guide**: See repo root [LEARNER_GUIDE.md](../../../../../LEARNER_GUIDE.md). Exact criteria: this folder's `requirements.md`. No solution code is provided; you must implement it.

## Next Steps

After visual verification, run `npm run review` to check technical requirements.
