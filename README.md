# Modern React Engineer - Skill Pathway Repository

This repository is a **production-grade, automated skill assessment system** for hands-on developer learning. It combines learning, practice, automated evaluation, and verifiable skill evidence generation.

## 🎯 System Overview

This pathway contains **3 courses**, each with standalone projects and automated review systems:

1. **React Fundamentals** - Component-based UI development
2. **RTK Query** - Data-driven dashboard with Redux Toolkit Query
3. **Next.js App Router** - Fullstack application with App Router

## 📁 Repository Structure

```
Challenge-Engine/
│
├── courses/                    → Individual skill courses
│   ├── 01-react-fundamentals/
│   ├── 02-rtk-query/
│   └── 03-nextjs-app-router/
│
├── pathway-review/             → Pathway-level summaries
│   ├── pathway-summary.json
│   ├── skill-breakdown.json
│   └── pathway-config.json
│
├── global-review/              → Pathway aggregation engine
│   ├── scoring-engine/
│   ├── ai-review/
│   └── run-all-reviews.js
│
├── learner-results/            → Auto-generated global cache
│
└── .github/workflows/          → Automation workflows
    └── solo-skill-review.yml
```

## 🚀 Getting Started

### For Learners: Help vs Completion

- **We help** with setup, workflow, requirements, and documentation. See [LEARNER_GUIDE.md](./LEARNER_GUIDE.md).
- **We do not provide** solution code. Completion is strict: your implementation must pass the automated review. See [LEARNING_PHILOSOPHY.md](./LEARNING_PHILOSOPHY.md) and [COMPLETION_POLICY.md](./COMPLETION_POLICY.md).

### Learner Workflow

**This is a real, runnable application. Work on challenges by modifying the project code.**

1. **Start the project:**
   ```bash
   cd courses/01-react-fundamentals/project
   npm install
   npm run dev
   ```

2. **Open the app in your browser** - See your changes in real-time

3. **Work on challenges:**
   - Read challenge instructions in `project/challenges/01-xxx/README.md`
   - Modify code in `project/src/` to implement the feature
   - Run the app to visually confirm it works
   - Then run review for scoring

4. **Run review for evaluation:**
   ```bash
   # Review all challenges
   npm run review
   
   # Review specific challenge
   npm run review -- --challenge 01
   ```

### Running Reviews (Root Commands)

From the **repository root** you can run:

| Command | Description |
|--------|-------------|
| `npm run review:all` | Run review for all courses (pathway-level). |
| `npm run review:changed` | Run review **only for challenges whose code changed** (git diff). Updates progress and PROGRESS.md. |
| `npm run review:course -- --course=<courseId>` | Run review for all challenges in one course. |
| `npm run review:challenge -- --course=<courseId> --challenge=<challengeId>` | Run review for a single challenge. |
| `npm run progress:update` | Rebuild `learner-results/progress.json` and `PROGRESS.md` from course results. |
| `npm run dashboard` | Start the progress dashboard (API + UI). Build UI first: `npm run dashboard:build`. |

**Examples:**
```bash
# Review only what you changed (e.g. before or after push)
npm run review:changed

# Review one challenge
npm run review:challenge -- --course=01-react-fundamentals --challenge=01-user-profile

# Review entire course
npm run review:course -- --course=02-rtk-query

# Update progress and PROGRESS.md
npm run progress:update
```

**Optional: run review on push**  
Copy `scripts/on-push-review-changed.sh` to `.git/hooks/pre-push` (or use the `.bat` on Windows) so that only changed challenges are reviewed when you push. Or run `npm run review:changed` manually before pushing.

### Running All Reviews (Pathway Level)

From the root directory:

```bash
npm run review:all
# or
node global-review/run-all-reviews.js
```

## 🎯 How Challenges Work

**Challenges are embedded in the project, not separate puzzles.**

- Each course has **one runnable app**
- Every challenge **adds or modifies functionality** inside that app
- You work in the **real codebase** (`project/src/`)
- You **run the app** to see your changes (`npm run dev`)
- Tests verify **technical requirements** (not visual behavior)

**Purpose** | **How you verify**
--- | ---
"Does my feature work?" | Run the app locally (`npm run dev`)
"Did I meet all technical requirements?" | Automated tests (`npm run review`)
"Is my code written well?" | Static + AI review

## 🔍 Comprehensive Evaluation System

Each challenge is evaluated using **end-to-end multi-signal scoring**:

1. **Functional Correctness** (35%) - Unit/integration tests verify technical requirements
2. **E2E Tests** (15%) - Playwright tests verify visual output and user interactions
3. **Code Quality** (20%) - ESLint + static analysis
4. **Architecture & Patterns** (15%) - AST-based pattern validation
5. **Best Practices** (10%) - Performance heuristics and code standards
6. **AI Qualitative Review** (5%) - Code readability and maintainability via Groq AI

### Review Workflow

**For Learners:**
1. **Run the app** (`npm run dev`) - See your changes visually
2. **Verify functionality** - Interact with features in the browser
3. **Run review** (`npm run review`) - Get comprehensive scoring

**Review Process:**
- ✅ Runs unit tests (functional correctness)
- ✅ Runs E2E tests (visual/interaction verification via Playwright)
- ✅ Checks code quality (linting)
- ✅ Validates architecture (AST pattern checks)
- ✅ Reviews best practices
- ✅ AI code review (readability & maintainability)

**Result:** Comprehensive, accurate, end-to-end evaluation

## 📊 Progress Dashboard

From the repo root, start the **Progress Dashboard** to view all courses and challenges, see progress, read instructions, and run reviews from the UI (no code editing in the UI—code in your editor):

```bash
# Build the dashboard UI once
npm run dashboard:build

# Start the server (API + UI at http://localhost:7700)
npm run dashboard
```

The dashboard shows pathway summary, per-course progress, per-challenge status (passed/score/last run), challenge instructions, last results, and AI feedback. You can trigger a review for any challenge from the UI. It scales to many courses (50+) and many challenges per course (100+) via pagination.

## 📊 Results & Evidence

Results are automatically generated in JSON format:

- **Challenge Level**: `courses/{course}/results/challenge-results.json`
- **Course Level**: `courses/{course}/results/course-summary.json`
- **Pathway Level**: `pathway-review/pathway-summary.json`

These files serve as **verifiable evidence** for skill badges.

## 🤖 Automation

The system runs automatically on every push via GitHub Actions:

1. Checks out code
2. Installs dependencies
3. Runs global review engine
4. Commits updated results files

## 🛡️ Tamper Resistance

- Result files are system-generated and overwritten on each review
- Tests are protected and restored if deleted
- Only automated workflows update results

## 📚 Course Details

### React Fundamentals
Component-based UI development with modern React patterns, hooks, and state management.

### RTK Query
Data fetching and caching with Redux Toolkit Query, including API integration and state management.

### Next.js App Router
Fullstack application development with Next.js 13+ App Router, including API routes and server components.

## 🔧 Development

This system is designed for production scalability:

- Modular architecture
- Config-driven scoring
- Extensible evaluation layers
- Comprehensive error handling
- Clean logging and reporting

## 📝 License

This repository is part of the SOLO Challenge Engine system.
