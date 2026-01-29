# Frequently Asked Questions

## For Learners

### Q: How do I start working on challenges?
**A**: 
1. Navigate to a course: `cd courses/01-react-fundamentals/project`
2. Install dependencies: `npm install`
3. Start the app: `npm run dev`
4. Read challenge instructions: `challenges/01-xxx/README.md`
5. Modify code in `src/` directory
6. Run review: `npm run review`

### Q: Can I work on challenges in any order?
**A**: Yes, but challenges are designed with progressive difficulty (Beginner → Intermediate → Advanced). It's recommended to complete them in order.

### Q: How do I know if my code is correct?
**A**: 
1. **Visual verification**: Run `npm run dev` and check the browser
2. **Automated review**: Run `npm run review` for comprehensive scoring
3. **Tests**: Run `npm test` to see test results

### Q: What if my review score is low?
**A**: 
- Check `results/challenge-results.json` for detailed feedback
- Review `results/ai-feedback.json` for improvement suggestions
- Fix errors shown in test output
- Address linting issues
- Review challenge requirements again

### Q: Can I see example solutions?
**A**: No. We do not provide solution code for challenges. You must implement the requirements yourself. See [LEARNER_GUIDE.md](./LEARNER_GUIDE.md) and [COMPLETION_POLICY.md](./COMPLETION_POLICY.md).

### Q: Why is completion so strict? Can't you just give hints?
**A**: Help = documentation, requirements, and tooling. Completion = your code passing the review. We give full requirements and clear criteria; we do not give code that satisfies them. That is how you learn. See [LEARNING_PHILOSOPHY.md](./LEARNING_PHILOSOPHY.md).

### Q: Where do I get help without getting the answer?
**A**: Use [LEARNER_GUIDE.md](./LEARNER_GUIDE.md) for workflow and "where to look." Use each challenge's `requirements.md` for exact criteria. Use official docs (React, TypeScript, etc.) to learn concepts. Use test failures and review output to see what to fix. We do not provide solution code.

## For Administrators

### Q: How do I add a new challenge?
**A**: See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed instructions. Briefly:
1. Create challenge folder in `project/challenges/`
2. Add README.md, requirements.md, metadata.json
3. Create test files
4. Update course-config.json

### Q: How do I adjust scoring weights?
**A**: Edit `course-config.json` in the course directory:
```json
{
  "scoring": {
    "functionalTests": 0.35,
    "codeQuality": 0.20,
    ...
  }
}
```

### Q: How do I update AI review prompts?
**A**: Edit `ai-review/index.js` in the course directory. Modify the `buildReviewPrompt` function.

### Q: Can I disable AI review?
**A**: Yes, set the weight to 0 in `course-config.json`:
```json
{
  "scoring": {
    "aiReview": 0
  }
}
```

### Q: How do I add a new course?
**A**: See [CONTRIBUTING.md](./CONTRIBUTING.md). Steps:
1. Create course directory structure
2. Set up project with package.json
3. Create challenges
4. Create review engine
5. Update pathway-config.json

## Technical Questions

### Q: What Node.js version is required?
**A**: Node.js v20 or higher is recommended.

### Q: Can I use Yarn instead of npm?
**A**: Yes, but scripts use npm. You may need to adjust commands.

### Q: How do I run reviews without installing all dependencies?
**A**: The review engine needs its dependencies installed. You can install just the review engine:
```bash
cd courses/XX-course-name/review-engine
npm install
```

### Q: Why do E2E tests require the app to be running?
**A**: E2E tests verify visual output. The Playwright config can auto-start the dev server, or you can run `npm run dev` manually.

### Q: How are results files protected from tampering?
**A**: 
- Results are auto-generated on each review
- GitHub Actions overwrites results on every push
- Tests are in protected locations
- Only automated workflows should update results

### Q: Can I customize the review criteria?
**A**: Yes, edit:
- `review-engine/architecture-checker.js` for pattern checks
- `review-engine/best-practices.js` for code quality checks
- `course-config.json` for scoring weights
- Challenge `metadata.json` for challenge-specific rules

## Workflow Questions

### Q: What's the difference between unit tests and E2E tests?
**A**: 
- **Unit tests**: Verify technical requirements (functions, components)
- **E2E tests**: Verify visual output and user interactions (what you see in browser)

### Q: Should I run tests before review?
**A**: You can, but `npm run review` runs everything automatically. Running tests separately helps with debugging.

### Q: How often should I run review?
**A**: Run review after completing each challenge or when you want to check your progress. The system is designed for frequent reviews.

### Q: Can I review just one challenge?
**A**: Yes:
```bash
npm run review -- --challenge=01-user-profile
```

## Results Questions

### Q: Where are results stored?
**A**: 
- Challenge results: `courses/XX-course-name/results/challenge-results.json`
- Course summary: `courses/XX-course-name/results/course-summary.json`
- AI feedback: `courses/XX-course-name/results/ai-feedback.json`
- Pathway summary: `pathway-review/pathway-summary.json`

### Q: What do the scores mean?
**A**: 
- **0-59%**: Needs improvement
- **60-74%**: Bronze badge level
- **75-89%**: Silver badge level
- **90-100%**: Gold badge level

### Q: How is the final score calculated?
**A**: Weighted average of:
- Functional tests (35%)
- E2E tests (15%)
- Code quality (20%)
- Architecture (15%)
- Best practices (10%)
- AI review (5%)

## Still Have Questions?

- Check [TROUBLESHOOTING.md](./TROUBLESHOOTING.md)
- Review [ARCHITECTURE.md](./ARCHITECTURE.md)
- See [SETUP_GUIDE.md](./SETUP_GUIDE.md)
- Check code comments in review engines
