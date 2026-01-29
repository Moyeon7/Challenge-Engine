# Complete Setup Guide

## One-Time Setup (After Cloning)

After cloning the repository, run this **one command** to set up everything:

```bash
npm run setup
```

This will:
1. ✅ Install dashboard dependencies
2. ✅ Install all course project dependencies (React, RTK Query, Next.js)
3. ✅ Install all review engine dependencies
4. ✅ Install Playwright browsers for E2E tests (Chromium, Firefox, WebKit)

**Time**: 3-5 minutes (depending on your internet speed)

**What you'll see:**
- Progress messages for each step
- Installation of npm packages
- Download of Playwright browsers (~300MB)

## After Setup

Once setup is complete, you're ready to:

1. **Start Dashboard**: `npm run dashboard:build && npm run dashboard`
2. **Work on Challenges**: `cd courses/01-react-fundamentals/project && npm run dev`
3. **Run Reviews**: `npm run review` (from course project) or via dashboard

## Troubleshooting

**If setup fails:**
- Make sure you have Node.js 18+ installed
- Make sure you have npm installed
- Check your internet connection
- Try running `npm install` manually in each course project

**If Playwright browsers fail to install:**
- You can install them manually later: `cd courses/01-react-fundamentals/project && npx playwright install`
- This is not critical - E2E tests will just show 0% until browsers are installed

## What Gets Installed

- **Dashboard**: React UI for viewing progress and running reviews
- **Course Projects**: All dependencies for React, RTK Query, and Next.js projects
- **Review Engines**: All dependencies for automated review systems
- **Playwright**: Browser automation for E2E tests

## Next Steps

After setup, see the main [README.md](README.md) for:
- How to start the dashboard
- How to work on challenges
- How to run reviews
- Complete workflow guide
