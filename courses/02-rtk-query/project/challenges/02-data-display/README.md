# Challenge 02: Data Display and Caching

## Overview

Implement data caching, refetching, and display multiple data sources.

## Problem Statement

Extend your RTK Query setup to:
1. Add a `getPosts` endpoint
2. Implement caching with tags
3. Create components to display both users and posts
4. Show how RTK Query automatically caches and refetches data

## Instructions

1. Add `getPosts` endpoint to your API slice (or create a new one)
2. Implement tag-based caching for invalidation
3. Create a `PostsList` component
4. Display both users and posts in the app
5. Demonstrate caching by refetching data

## Visual Requirements

- Display both users and posts
- Show loading states for each query
- Demonstrate that cached data is used on refetch
- Clean, organized layout

## How to Verify

1. Run `npm run dev` and open the app
2. Navigate to `/challenge/02-data-display` (or click "View Challenge UI" from the home page)
3. You should see both users and posts
4. Open Redux DevTools and observe caching
5. Refetch data and verify it uses cache when appropriate

## Help & completion

- **Full learner guide**: See repo root [LEARNER_GUIDE.md](../../../../../LEARNER_GUIDE.md). Exact criteria: this folder's `requirements.md`. No solution code is provided; you must implement it.

## Next Steps

After visual verification, run `npm run review` to check technical requirements.
