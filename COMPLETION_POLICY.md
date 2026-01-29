# Completion Policy

## How Completion Is Decided

Completion of a challenge or course is determined **only** by:

1. **Automated review** — `npm run review` (or the global review) runs tests, lint, architecture checks, best-practices checks, and (when configured) AI review.
2. **Stated requirements** — The criteria in each challenge's `requirements.md` and the review engine's configuration.
3. **No manual override** — There is no way to "mark as complete" without meeting the automated criteria. Scores and pass/fail are not negotiable.

---

## What Counts as "Complete"

### For a single challenge
- All required behaviors pass (unit tests and, where applicable, E2E tests).
- Code quality, architecture, and best-practices checks meet the configured thresholds.
- Your code is in the required files and follows the required patterns (see `requirements.md` and `metadata.json`).

### For a course
- Defined by the course's scoring and completion rules (e.g. minimum score, number of challenges completed). See `course-config.json` and the course README.

### For the pathway
- Defined by the global review and pathway config (e.g. weighted score across courses, badge levels). See `pathway-review/pathway-config.json`.

---

## What Does Not Count

- **Stub or starter code** — Stubs exist so the app and tests load. They are not full solutions. Relying on them without implementing the required behavior does **not** count as complete.
- **Partial implementation** — If tests fail or checks fail, the challenge is not complete. Partial credit may appear in the score, but "complete" means meeting the bar.
- **Excuses or exceptions** — "I didn't have time," "I didn't understand," or "I thought it was optional" do not change the result. The review is the sole judge.

---

## No Solution Code

- This repository and its docs **do not** provide solution code for challenges.
- You are expected to implement the requirements yourself using the challenge README, `requirements.md`, and official documentation.
- Getting code from elsewhere and submitting it without understanding is not in the spirit of the pathway and will not help you in real work or interviews.

---

## Summary

- **Complete** = Your implementation passes the automated review and meets the stated requirements.
- **Strict** = No exceptions, no solution code, no lowering the bar.
- **Your job** = Implement, run the app, run the review, and fix until you pass.
