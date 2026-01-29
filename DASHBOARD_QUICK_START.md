# Dashboard Quick Start

**Fastest way to get the dashboard running.**

## One-Time Setup (2 minutes)

```bash
# 1. Install dashboard server dependencies
cd dashboard
npm install
cd ..

# 2. Build the UI (installs React deps and builds)
npm run dashboard:build
```

## Run Dashboard

```bash
# From repo root
npm run dashboard
```

**Open**: http://localhost:7700

## What You'll See

- **Pathway summary** at the top (overall score, completion, badge)
- **Courses list** (paginated, click to see challenges)
- **Challenges** per course (paginated, click for details)
- **Challenge detail** with:
  - Instructions (markdown formatted)
  - Last review results
  - AI feedback (if available)
  - "Run review" button

## Troubleshooting

**"Build UI: cd dashboard/app && npm install && npm run build"**
→ Run `npm run dashboard:build` first

**Port 7700 in use?**
→ Use different port: `DASHBOARD_PORT=8080 npm run dashboard`

**No progress shown?**
→ Run a review first: `npm run review:challenge -- --course=01-react-fundamentals --challenge=01-user-profile`
→ Or update progress: `npm run progress:update`

## Full Documentation

See [README.md](./README.md#-progress-dashboard) for complete details.
