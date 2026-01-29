# Challenge 02: Data Fetching and API Routes

## Overview

Implement data fetching in Server Components and create API routes.

## Problem Statement

Build a data-driven Next.js app that:
1. Fetches data in Server Components using async/await
2. Creates API routes for data endpoints
3. Displays fetched data on pages
4. Handles loading and error states

## Instructions

1. Create API route in `app/api/posts/route.ts`
2. Fetch data in Server Component using async/await
3. Display fetched data on a page
4. Handle loading and error states appropriately
5. Create a posts listing page

## Visual Requirements

- Posts page displays fetched data
- Loading states are handled
- Error states are handled gracefully
- Clean data presentation
- API routes work correctly

## How to Verify

1. Run `npm run dev`
2. Navigate to posts page - should show data
3. Test API route directly (`/api/posts`)
4. Verify data fetching works correctly
5. Check error handling

## Help & completion

- **Full learner guide**: See repo root [LEARNER_GUIDE.md](../../../../../LEARNER_GUIDE.md). Exact criteria: this folder's `requirements.md`. No solution code is provided; you must implement it.

## Next Steps

After visual verification, run `npm run review` to check technical requirements.
