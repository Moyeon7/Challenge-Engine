# Learner Guide

This guide explains **what help you get** and **what you must do yourself**. We document everything about setup, workflow, and requirements—but **you must write the code and earn the score**.

---

## What We Provide (Help)

### 1. **Setup and tooling**
- How to install dependencies, run the app, run tests, run review
- Where files live, how the project is structured
- Scripts and commands: `npm run dev`, `npm run review`, `npm test`
- Troubleshooting: common errors and how to fix setup issues (see [TROUBLESHOOTING.md](./TROUBLESHOOTING.md))

### 2. **Requirements and criteria**
- **Challenge README** (`challenges/XX-xxx/README.md`): what to build, in plain language
- **Requirements** (`challenges/XX-xxx/requirements.md`): exact technical and functional criteria used for scoring
- **Metadata** (`challenges/XX-xxx/metadata.json`): which files and patterns are checked

### 3. **Workflow and process**
- Order of work: read challenge → implement in `src/` → run app → verify visually → run review
- What each score means (unit tests, E2E, lint, architecture, best practices, AI review)
- Where results go and how to read them

### 4. **Pointers to learn**
- Official docs: React, RTK Query, Next.js, TypeScript, etc.
- Concepts to look up (e.g. "useState", "createContext", "API slice")
- No solution code—only *what* to build and *where* to put it

---

## What We Do Not Provide (Strict on Completion)

### 1. **No solution code**
- We do **not** give full implementations, copy-paste answers, or reference solutions for challenges
- Stub files (e.g. minimal `UserProfile`, `TodoList`) exist so the app and tests **load**; they are **not** passing solutions
- Passing the review means **your** implementation meets the requirements

### 2. **No shortcuts to a passing score**
- You cannot get a passing score by copying from docs or other repos without understanding
- Tests and review are strict: they check behavior, patterns, and file locations
- AI review and feedback are about *your* code, not a template

### 3. **Completion = your work**
- "Complete" means: **you** wrote the code, **you** made the tests pass, **you** understand what you built
- Badges and scores reflect **your** ability to implement the requirements
- Asking "how do I implement X?" is fine; asking "give me the code for X?" is not how completion works here

---

## How to Use Help Without Cheating Yourself

### Do this
- **Read** the challenge README and `requirements.md` before coding
- **Use** official docs and tutorials to learn concepts
- **Run** the app and tests often; use failure messages to guide your implementation
- **Use** `npm run review` to see which criteria you pass or fail
- **Read** AI feedback and lint/architecture output to improve your code
- **Ask** for clarification on *what* is required, not for *code* that fulfills it

### Avoid this
- **Do not** expect us to provide solution code or full implementations for challenges
- **Do not** copy-paste solutions from elsewhere and submit without understanding
- **Do not** skip reading requirements; they define exactly what is scored
- **Do not** assume stub or starter code is sufficient to pass; it is there so the project runs

---

## Where to Look When Stuck

| Need | Where to look |
|------|----------------|
| How to run the app / tests / review | [QUICK_START.md](./QUICK_START.md), course `project/README.md` |
| What to build for a challenge | `challenges/XX-xxx/README.md` |
| Exact pass/fail criteria | `challenges/XX-xxx/requirements.md` |
| Setup or run errors | [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) |
| What a score or result means | [FAQ.md](./FAQ.md), review output JSON |
| Concepts (React, hooks, etc.) | Official docs (react.dev, redux-toolkit.js.org, nextjs.org, etc.) |
| Project structure | [SYSTEM_OVERVIEW.md](./SYSTEM_OVERVIEW.md), [ARCHITECTURE.md](./ARCHITECTURE.md) |

---

## Summary

- **Help** = documentation, setup, requirements, workflow, and pointers to learn. We make the system clear and runnable.
- **Strict** = no solution code, no shortcuts. You implement, you pass the criteria, you learn.
- **Completion** = your code, your understanding, your score.

Read the docs, use the tools, implement the requirements—and you will learn.
