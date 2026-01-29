# Challenge 03: State Management with Context

## Overview

Implement a theme switcher using React Context API to manage global state.

## Problem Statement

Create a theme system that allows users to switch between light and dark modes. The theme should be:
- Accessible throughout the app via Context
- Persisted to localStorage
- Applied to all components

## Instructions

1. Create a `ThemeContext` in `src/contexts/ThemeContext.tsx`
2. Create a `ThemeProvider` component
3. Create a `ThemeToggle` component
4. Wrap the app with the ThemeProvider
5. Apply theme classes/styles throughout the app

## Visual Requirements

- Clear toggle button/switch
- Smooth transition between themes
- All components should reflect the theme change
- Theme preference should persist on page reload

## How to Verify

1. Run `npm run dev`
2. Click the theme toggle - the entire app should change theme
3. Refresh the page - the theme should persist
4. All components should respect the current theme

## Learning Hints (no solution code)

- **Context**: Use React's `createContext` and `useContext`. Provide a value object (e.g. `{ theme, setTheme }` or `{ theme, toggleTheme }`). Wrap the app (or a subtree) in the Provider.
- **Persistence**: Read/write `localStorage` in a `useEffect` (or when toggling) so the theme survives refresh. Key name is up to you; tests check behavior.
- **ThemeToggle component**: A button that calls the context's toggle function. Must be used inside the Provider.
- **Exact criteria**: All pass/fail criteria are in `requirements.md` in this folder.

## Help & completion

- **Full learner guide**: See repo root [LEARNER_GUIDE.md](../../../../../LEARNER_GUIDE.md).
- **Exact requirements**: This folder's `requirements.md` defines what is scored. No solution code is provided; you must implement it.

## Next Steps

After visual verification, run `npm run review` to check technical requirements.
