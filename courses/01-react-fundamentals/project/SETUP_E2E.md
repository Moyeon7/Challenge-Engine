# E2E Test Setup Instructions

## First-Time Setup (Required Once)

Before running E2E tests, you need to install Playwright browsers:

```bash
# From the project directory
npx playwright install
```

This will download the required browsers (Chromium, Firefox, WebKit) needed for E2E testing.

**Note:** This is a one-time setup. After installation, you can run E2E tests without this step.

## Running E2E Tests

```bash
# Run all E2E tests
npm run test:e2e

# Run E2E tests with UI (interactive)
npm run test:e2e:ui
```

## Troubleshooting

If you see errors like:
```
Error: Executable doesn't exist at .../chrome-headless-shell.exe
```

**Solution:** Run `npx playwright install` to download the browsers.

## What E2E Tests Do

E2E (End-to-End) tests use Playwright to:
- Open your app in a real browser
- Interact with UI elements (click buttons, fill forms, etc.)
- Verify visual output and user interactions
- Test the complete user workflow

These tests complement unit tests by verifying that features work as users would experience them.
