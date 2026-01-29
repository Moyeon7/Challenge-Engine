# Challenge 01: User Profile Component

## Overview

Build a user profile component that displays user information with proper React patterns.

## Problem Statement

Create a `UserProfile` component that displays:
- User name
- Email address
- Profile picture (or placeholder)
- A "Follow" button that toggles between "Follow" and "Following"

## Instructions

1. Create a new component file: `src/components/UserProfile.tsx`
2. The component should accept user data as props
3. Implement state management for the follow button
4. Add the component to `src/App.tsx` to display it

## Visual Requirements

- The profile should be visually appealing
- Use proper spacing and layout
- The follow button should have clear visual feedback

## How to Verify

1. Run `npm run dev` and open the app in your browser
2. You should see the user profile displayed
3. Click the follow button - it should toggle between "Follow" and "Following"
4. The UI should look clean and professional

## Learning Hints (no solution code)

- **State for the button**: Use the React docs for `useState` to store follow/unfollow. The tests expect the button text to change (e.g. "Follow" ↔ "Following").
- **Props**: Type your props (name, email, avatar optional). See `requirements.md` for exact prop names and types.
- **File and export**: Component must live in `src/components/UserProfile.tsx` and be the default export. The review checks file path and patterns.
- **Exact criteria**: All pass/fail criteria are in `requirements.md` in this folder. Meet those to pass the review.

## Help & completion

- **Full learner guide**: See repo root [LEARNER_GUIDE.md](../../../../../LEARNER_GUIDE.md) — what help you get vs what you must do yourself.
- **Exact requirements**: This folder's `requirements.md` defines what is scored. No solution code is provided; you must implement it.

## Next Steps

After you've verified it works visually, run `npm run review` to check if you've met all technical requirements.
