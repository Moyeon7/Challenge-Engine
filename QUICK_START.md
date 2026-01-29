# Quick Start Guide

## For Learners

**Help vs completion:** We document setup, workflow, and requirements. We do **not** provide solution code. You must implement challenges yourself; completion is decided only by the automated review. See [LEARNER_GUIDE.md](./LEARNER_GUIDE.md).

### 1. Start Working on a Challenge

```bash
cd courses/01-react-fundamentals/project
npm install
npm run dev
```

The app opens at `http://localhost:5173`

### 2. Read the Challenge

Open `challenges/01-user-profile/README.md` to see what you need to build.

### 3. Modify Code

Edit files in `src/` directory to implement the feature.

### 4. Verify Visually

- Open the browser
- Interact with your feature
- Confirm it works as expected

### 5. Run Review

```bash
# Review all challenges
npm run review

# Review specific challenge
npm run review -- --challenge=01-user-profile
```

## Review Output

Results are saved to `../results/`:
- `challenge-results.json` - Detailed scores for each challenge
- `course-summary.json` - Overall course summary
- `ai-feedback.json` - AI review feedback (if available)

## What Gets Evaluated

1. **Unit Tests** (35%) - Functional correctness
2. **E2E Tests** (15%) - Visual/interaction verification via Playwright
3. **Code Quality** (20%) - ESLint checks
4. **Architecture** (15%) - Pattern validation
5. **Best Practices** (10%) - Code standards
6. **AI Review** (5%) - Readability & maintainability

## Key Points

- ✅ **Run the app first** - See your changes visually
- ✅ **Then get scored** - Review verifies technical requirements
- ✅ **Comprehensive evaluation** - End-to-end testing with E2E + unit tests
- ✅ **Real workflow** - Matches how real developers work
