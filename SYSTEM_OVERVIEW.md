# System Overview

## Architecture

This is a **production-ready, automated skill assessment repository** that combines:

1. **Real, runnable applications** - Not separate puzzles
2. **Embedded challenges** - Challenges modify the app
3. **Comprehensive evaluation** - Multi-signal scoring
4. **End-to-end testing** - Visual verification + technical tests
5. **Automated workflows** - GitHub Actions integration

## Key Design Principles

### 1. Real Developer Workflow

- Learners work in a **real codebase**
- They **run the app** to see changes (`npm run dev`)
- They **verify visually** before submitting
- Then **get comprehensive scoring**

### 2. Embedded Challenges

Challenges are **not separate puzzles**. They are:
- Defined in `project/challenges/`
- Modify/add functionality to the app
- Tested against the actual running application

### 3. Comprehensive Review

Each challenge is evaluated with:

| Layer | Weight | Purpose |
|-------|--------|---------|
| Unit Tests | 35% | Functional correctness |
| E2E Tests | 15% | Visual/interaction verification |
| Code Quality | 20% | Linting & static analysis |
| Architecture | 15% | Pattern validation (AST) |
| Best Practices | 10% | Code standards |
| AI Review | 5% | Readability & maintainability |

### 4. End-to-End Verification

- **Playwright E2E tests** verify visual output
- Tests check what users **actually see** in the browser
- Complements unit tests that check **technical requirements**

## File Structure

```
Challenge-Engine/
├── courses/
│   └── 01-react-fundamentals/
│       ├── project/              → Runnable app (starter code)
│       │   ├── src/              → Learner modifies this
│       │   ├── challenges/       → Challenge definitions
│       │   │   ├── 01-xxx/
│       │   │   │   ├── README.md
│       │   │   │   ├── requirements.md
│       │   │   │   └── metadata.json
│       │   ├── tests/
│       │   │   ├── challenge-01.test.tsx  → Unit tests
│       │   │   └── e2e/
│       │   │       └── challenge-01.spec.ts   → E2E tests
│       │   └── package.json
│       ├── review-engine/        → Evaluation logic
│       ├── ai-review/            → AI integration
│       ├── results/              → Auto-generated
│       └── course-config.json
├── global-review/                → Pathway aggregation
├── pathway-review/               → Pathway summaries
└── .github/workflows/            → Automation
```

## Review Process Flow

```
1. Learner runs: npm run dev
   └─> Sees app in browser
   └─> Verifies features work visually

2. Learner runs: npm run review
   └─> Review engine starts
   │
   ├─> Runs unit tests (functional correctness)
   ├─> Runs E2E tests (visual verification)
   ├─> Runs linting (code quality)
   ├─> Checks architecture (AST patterns)
   ├─> Reviews best practices
   └─> AI code review (readability)

3. Results generated
   └─> challenge-results.json
   └─> course-summary.json
   └─> ai-feedback.json
```

## Automation

### GitHub Actions

On every push:
1. Installs dependencies
2. Runs global review engine
3. Generates all result files
4. Commits updated results
5. Uploads results as artifact

## Tamper Resistance

- Result files are **system-generated**
- Overwritten on each review
- Tests are protected
- Only automated workflows update results

## Extensibility

The system is designed to:
- Add new courses easily
- Add new evaluation layers
- Support different tech stacks
- Scale to thousands of learners

## Production Readiness

- ✅ Modular architecture
- ✅ Config-driven scoring
- ✅ Comprehensive error handling
- ✅ Clean logging
- ✅ Extensible design
- ✅ No placeholder code
- ✅ Real, working implementations
