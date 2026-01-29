# Challenge 03: Mutations and Optimistic Updates

## Overview

Implement mutations (create, update, delete) with optimistic updates.

## Problem Statement

Add mutation endpoints to create, update, and delete users or posts. Implement optimistic updates for better UX.

## Instructions

1. Add mutation endpoints (`createUser`, `updateUser`, `deleteUser`)
2. Implement optimistic updates
3. Create forms/components for mutations
4. Handle success and error states
5. Show how mutations invalidate cache tags

## Visual Requirements

- Form to create new users/posts
- Ability to edit existing items
- Delete functionality
- Optimistic UI updates (immediate feedback)
- Success/error notifications

## How to Verify

1. Run `npm run dev`
2. Create a new user/post - should appear immediately (optimistic)
3. Edit an item - should update optimistically
4. Delete an item - should remove optimistically
5. Check Redux DevTools for mutation state

## Help & completion

- **Full learner guide**: See repo root [LEARNER_GUIDE.md](../../../../../LEARNER_GUIDE.md). Exact criteria: this folder's `requirements.md`. No solution code is provided; you must implement it.

## Next Steps

After visual verification, run `npm run review` to check technical requirements.
