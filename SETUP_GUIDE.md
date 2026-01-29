# Setup Guide for Challenge Engine

## Initial Setup

### 1. Install Dependencies for All Courses

```bash
# Course 1: React Fundamentals
cd courses/01-react-fundamentals/project
npm install

# Course 2: RTK Query
cd ../../02-rtk-query/project
npm install

# Course 3: Next.js App Router
cd ../../03-nextjs-app-router/project
npm install
```

### 2. Install Review Engine Dependencies

```bash
# Course 1 Review Engine
cd courses/01-react-fundamentals/review-engine
npm install

# Course 2 Review Engine
cd ../../02-rtk-query/review-engine
npm install

# Course 3 Review Engine
cd ../../03-nextjs-app-router/review-engine
npm install
```

### 3. Install Playwright Browsers

```bash
# For each course project
cd courses/01-react-fundamentals/project
npx playwright install chromium

cd ../../02-rtk-query/project
npx playwright install chromium

cd ../../03-nextjs-app-router/project
npx playwright install chromium
```

## Running Projects

### Course 1: React Fundamentals
```bash
cd courses/01-react-fundamentals/project
npm run dev
# Opens at http://localhost:5173
```

### Course 2: RTK Query
```bash
cd courses/02-rtk-query/project
npm run dev
# Opens at http://localhost:5173
```

### Course 3: Next.js App Router
```bash
cd courses/03-nextjs-app-router/project
npm run dev
# Opens at http://localhost:3000
```

## Running Reviews

### Individual Challenge Review
```bash
cd courses/01-react-fundamentals/project
npm run review -- --challenge=01-user-profile
```

### All Challenges in Course
```bash
cd courses/01-react-fundamentals/project
npm run review
```

### Pathway-Level Review
```bash
# From root directory
node global-review/run-all-reviews.js
```

## Testing

### Unit Tests
```bash
cd courses/01-react-fundamentals/project
npm test
```

### E2E Tests
```bash
cd courses/01-react-fundamentals/project
npm run test:e2e
```

## Environment Variables

### Groq API Key (Optional)
The AI review uses Groq API. Set the `GROQ_API_KEY` environment variable to enable AI review:

```bash
# Windows (PowerShell)
$env:GROQ_API_KEY="your_api_key_here"

# Windows (CMD)
set GROQ_API_KEY=your_api_key_here

# Linux/Mac
export GROQ_API_KEY=your_api_key_here

# Or create a .env file in the course directory
echo "GROQ_API_KEY=your_api_key_here" > .env
```

**Note**: AI review is optional (5% of score). If `GROQ_API_KEY` is not set, AI review will be skipped with a score of 0, and the review will continue with other evaluation layers.

## Troubleshooting

### Playwright Issues
If E2E tests fail, ensure:
1. Playwright browsers are installed: `npx playwright install chromium`
2. Dev server is running or Playwright config has webServer enabled
3. Ports are available (5173 for Vite, 3000 for Next.js)

### Review Engine Issues
If review fails:
1. Ensure all dependencies are installed
2. Check that test files exist
3. Verify challenge metadata files are present
4. Check file paths in challenge metadata

### TypeScript Errors
If you see TypeScript errors:
1. Run `npm install` to ensure all types are installed
2. Check `tsconfig.json` configuration
3. Ensure all required dependencies are in package.json

## Production Considerations

1. **API Keys**: Move Groq API key to environment variables
2. **Results Storage**: Consider database storage for results
3. **Authentication**: Add authentication for learner access
4. **Rate Limiting**: Add rate limiting for AI review API calls
5. **Error Handling**: Enhance error handling and logging
6. **Monitoring**: Add monitoring and alerting
7. **CI/CD**: Enhance GitHub Actions workflow
8. **Documentation**: Keep documentation updated
