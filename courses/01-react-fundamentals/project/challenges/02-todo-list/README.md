# Challenge 02: Todo List Application

## Overview

Build a functional todo list where users can add, complete, and delete tasks.

## Problem Statement

Create a todo list application with the following features:
- Input field to add new todos
- List of todos with checkboxes to mark as complete
- Delete button for each todo
- Visual distinction between completed and active todos

## Instructions

1. Create a `TodoList` component in `src/components/TodoList.tsx`
2. Implement state management for the list of todos
3. Each todo should have: `id`, `text`, `completed`
4. Add the component to `src/App.tsx`

## Visual Requirements

- Completed todos should be visually distinct (strikethrough, different color)
- Clear input field and add button
- Each todo item should have a delete button
- Clean, organized layout

## How to Verify

1. Run `npm run dev` and open the app
2. Add a new todo - it should appear in the list
3. Check a todo - it should show as completed (strikethrough)
4. Click delete - the todo should be removed
5. All interactions should work smoothly

## Learning Hints (no solution code)

- **State for the list**: Use `useState` with an array of items. Each item needs `id`, `text`, `completed` (see `requirements.md`).
- **Adding todos**: Controlled input + button or form submit. Tests look for an input (placeholder "add todo") and a button with name matching /add/i.
- **Toggling and deleting**: Update state by id (toggle `completed`, or filter out for delete). Completed items must be visually distinct (e.g. strikethrough).
- **Exact criteria**: All pass/fail criteria are in `requirements.md` in this folder.

## Help & completion

- **Full learner guide**: See repo root [LEARNER_GUIDE.md](../../../../../LEARNER_GUIDE.md).
- **Exact requirements**: This folder's `requirements.md` defines what is scored. No solution code is provided; you must implement it.

## Next Steps

After visual verification, run `npm run review` to check technical requirements.
