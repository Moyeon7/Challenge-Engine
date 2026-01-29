# User Commands Reference

Quick reference for review and progress commands. Run from the **repository root** unless noted.

## Review commands

| Command | What it does |
|---------|----------------|
| `npm run review:all` | Run review for **all courses** (full pathway). |
| `npm run review:changed` | Run review **only for challenges whose files changed** (git diff). Then updates `learner-results/progress.json` and `PROGRESS.md`. Use before or after push. |
| `npm run review:course -- --course=<id>` | Run review for **all challenges** in one course. Example: `--course=01-react-fundamentals`. |
| `npm run review:challenge -- --course=<id> --challenge=<id>` | Run review for **one challenge**. Example: `--course=01-react-fundamentals --challenge=01-user-profile`. |

After any of these, progress and PROGRESS.md are updated automatically (when run from root scripts or from the course project’s `npm run review`).

## Progress

| Command | What it does |
|---------|----------------|
| `npm run progress:update` | Rebuild `learner-results/progress.json` and `PROGRESS.md` from all course results. Use if you edited result files or want to refresh the summary. |

## Dashboard

| Command | What it does |
|---------|----------------|
| `npm run dashboard:build` | Install dashboard UI deps and build (run once). |
| `npm run dashboard` | Start dashboard server at http://localhost:7700 (API + UI if built). |

In the dashboard you can:
- See pathway and per-course progress
- List courses and challenges (paginated)
- Open challenge instructions and last results
- Run review for a challenge from the UI

## From inside a course project

When you are in a course project (e.g. `courses/01-react-fundamentals/project`):

| Command | What it does |
|---------|----------------|
| `npm run review` | Run review for **all challenges** in this course. |
| `npm run review -- --challenge=01-user-profile` | Run review for **one challenge** in this course. |

Progress and PROGRESS.md are still updated (review engine calls the root `scripts/update-progress.js`).

## Optional: review on push

To run review only for changed challenges when you push:

- **Linux/macOS:**  
  `cp scripts/on-push-review-changed.sh .git/hooks/pre-push && chmod +x .git/hooks/pre-push`
- **Windows:**  
  `copy scripts\on-push-review-changed.bat .git\hooks\pre-push`

Or run `npm run review:changed` manually before pushing.

## Changed-challenge detection

`review:changed` uses `git diff --name-only HEAD` (staged + unstaged vs HEAD). To compare against a branch (e.g. before push):  
`node scripts/run-review-changed.js --ref origin/main`
