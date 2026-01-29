# System Architecture

## Overview

The Challenge Engine is a production-ready, automated skill assessment system that combines learning, practice, automated evaluation, and verifiable skill evidence generation.

## Core Principles

1. **Real Applications**: Learners work in actual runnable apps, not separate puzzles
2. **Embedded Challenges**: Challenges modify the project, building on previous work
3. **Visual First**: Learners verify visually before automated scoring
4. **Comprehensive Evaluation**: Multi-signal scoring with 6 evaluation layers
5. **Progressive Difficulty**: Basic → Intermediate → Advanced progression

## System Components

### 1. Course Structure

Each course contains:
- **project/**: Runnable application (starter code)
- **challenges/**: Challenge definitions (README, requirements, metadata)
- **review-engine/**: Deterministic evaluation logic
- **ai-review/**: AI evaluation integration
- **results/**: Auto-generated evaluation outputs
- **course-config.json**: Course configuration

### 2. Review Engine Architecture

```
Review Engine
├── test-runner.js      → Runs unit tests (Vitest)
├── e2e-runner.js       → Runs E2E tests (Playwright)
├── linter.js           → Runs ESLint
├── architecture-checker.js → AST pattern validation
├── best-practices.js    → Code quality heuristics
└── index.js            → Main orchestrator
```

### 3. Evaluation Layers

1. **Functional Tests (35%)**: Unit/integration tests
2. **E2E Tests (15%)**: Playwright visual/interaction verification
3. **Code Quality (20%)**: ESLint + static analysis
4. **Architecture (15%)**: AST-based pattern validation
5. **Best Practices (10%)**: Code standards and heuristics
6. **AI Review (5%)**: Groq API for readability & maintainability

### 4. Challenge Structure

```
challenges/
└── 01-challenge-name/
    ├── README.md        → Problem statement & instructions
    ├── requirements.md  → Technical requirements
    └── metadata.json    → Scoring rules & patterns
```

### 5. Global Review Engine

- Aggregates all course reviews
- Generates pathway-level summaries
- Calculates overall scores and badge levels
- Updates pathway-summary.json

## Data Flow

```
Learner modifies code
    ↓
Runs app (npm run dev)
    ↓
Verifies visually
    ↓
Runs review (npm run review)
    ↓
Review Engine executes:
    ├── Unit Tests
    ├── E2E Tests
    ├── Linting
    ├── Architecture Checks
    ├── Best Practices
    └── AI Review
    ↓
Results generated:
    ├── challenge-results.json
    ├── course-summary.json
    └── ai-feedback.json
    ↓
Global Review aggregates
    ↓
pathway-summary.json
```

## File Structure

```
Challenge-Engine/
├── courses/
│   ├── 01-react-fundamentals/
│   │   ├── project/              → Runnable app
│   │   │   ├── src/              → Learner code
│   │   │   ├── challenges/       → Challenge definitions
│   │   │   └── tests/            → Unit + E2E tests
│   │   ├── review-engine/        → Evaluation logic
│   │   ├── ai-review/            → AI integration
│   │   └── results/               → Auto-generated
│   ├── 02-rtk-query/             → Same structure
│   └── 03-nextjs-app-router/     → Same structure
├── global-review/                → Pathway aggregation
├── pathway-review/               → Pathway summaries
└── .github/workflows/            → Automation
```

## Technology Stack

### Course 1: React Fundamentals
- **Framework**: Vite + React + TypeScript
- **Testing**: Vitest + Testing Library + Playwright
- **Linting**: ESLint

### Course 2: RTK Query
- **Framework**: Vite + React + Redux Toolkit + RTK Query
- **Testing**: Vitest + Testing Library + Playwright
- **Linting**: ESLint

### Course 3: Next.js App Router
- **Framework**: Next.js 14+ (App Router) + TypeScript
- **Testing**: Vitest + Testing Library + Playwright
- **Linting**: ESLint (Next.js config)

### Review Engines
- **Runtime**: Node.js (ES Modules)
- **AST Parsing**: @babel/parser + @babel/traverse
- **AI Integration**: Groq API (Llama 3.1 8B)

## Automation

### GitHub Actions Workflow

1. Triggers on push to main/master/develop
2. Installs dependencies for all courses
3. Runs global review engine
4. Commits updated results
5. Uploads results as artifacts

## Scoring Algorithm

```javascript
totalScore = (
  functionalTests * 0.35 +
  codeQuality * 0.20 +
  architecture * 0.15 +
  bestPractices * 0.10 +
  e2eTests * 0.15 +
  aiReview * 0.05
) / 1.0
```

## Badge Levels

- **Bronze**: Score ≥ 60%, Completion ≥ 50%
- **Silver**: Score ≥ 75%, Completion ≥ 75%
- **Gold**: Score ≥ 90%, Completion = 100%

## Extensibility

The system is designed to be easily extended:

1. **New Courses**: Copy course structure, update configs
2. **New Challenges**: Add challenge folder with README, requirements, metadata
3. **New Evaluation Layers**: Add new checker module, integrate in review engine
4. **New Test Types**: Add test files, update test-runner
5. **New AI Providers**: Update ai-review/index.js

## Security Considerations

1. **API Keys**: Currently hardcoded (should use env vars in production)
2. **Result Files**: Auto-generated, tamper-resistant
3. **Test Files**: Protected, restored if deleted
4. **Code Execution**: Sandboxed in test environments

## Performance

- **Parallel Execution**: Tests run in parallel where possible
- **Caching**: ESLint and test results can be cached
- **Incremental**: Only changed challenges need re-evaluation
- **Timeout Handling**: All operations have timeouts

## Monitoring & Logging

- Console logging for review progress
- JSON results for programmatic access
- Error handling with detailed messages
- GitHub Actions logs for CI/CD visibility
