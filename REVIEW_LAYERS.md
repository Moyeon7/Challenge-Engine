# Review Layers – Verification (No Placeholders)

All review layers run **real** checks. None are placeholder or mock.

| Layer | What runs | Implementation |
|-------|-----------|----------------|
| **Functional tests** | Vitest | `test-runner.js` runs `npm test -- <file> --run --reporter=json` in the course project. Parses Vitest JSON output and computes score from passed/total. |
| **Code quality (lint)** | ESLint | `linter.js` runs `npm run lint -- <files> --format json`. Parses ESLint JSON, scores from errors/warnings. |
| **Architecture** | AST (Babel) | `architecture-checker.js` uses `@babel/parser` and `@babel/traverse` to parse source and detect required patterns (e.g. useState, createContext, functional components, props). |
| **Best practices** | Heuristics | `best-practices.js` reads files and checks e.g. no console.log in code, TypeScript usage, reasonable file length. |
| **E2E tests** | Playwright | `e2e-runner.js` runs `npx playwright test <file> --reporter=json`. Parses Playwright JSON for pass/fail and score. |
| **AI review** | Groq API | `ai-review/index.js` uses `fetch()` to Groq (`api.groq.com`), sends code + prompt, parses JSON response for readability/maintainability score. **Requires `GROQ_API_KEY`**; if unset, returns score 0 and a clear error (other layers still run). |

Scores from each layer are weighted by `course-config.json` and combined into the challenge total. No layer is stubbed or returns fake scores.
