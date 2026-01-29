# Deployment Guide

## Pre-Deployment Checklist

### 1. Environment Variables
- [ ] Move Groq API key to environment variable
- [ ] Set up GitHub Secrets for CI/CD
- [ ] Configure repository URL
- [ ] Set up commit signing (if needed)

### 2. Dependencies
- [ ] Verify all package.json files are correct
- [ ] Test npm install for all courses
- [ ] Verify Playwright browsers install correctly
- [ ] Check Node.js version compatibility (v20+)

### 3. Configuration
- [ ] Review all course-config.json files
- [ ] Verify pathway-config.json
- [ ] Check GitHub Actions workflow
- [ ] Verify all challenge metadata files

### 4. Testing
- [ ] Run system validation: `node test-system.js`
- [ ] Test review engine for each course
- [ ] Test global review engine
- [ ] Verify GitHub Actions workflow

## Deployment Steps

### 1. Initial Setup

```bash
# Clone repository
git clone <repository-url>
cd Challenge-Engine

# Install dependencies for all courses
cd courses/01-react-fundamentals/project && npm install && cd ../../..
cd courses/02-rtk-query/project && npm install && cd ../../..
cd courses/03-nextjs-app-router/project && npm install && cd ../../..

# Install review engine dependencies
cd courses/01-react-fundamentals/review-engine && npm install && cd ../../..
cd courses/02-rtk-query/review-engine && npm install && cd ../../..
cd courses/03-nextjs-app-router/review-engine && npm install && cd ../../..

# Install Playwright browsers
cd courses/01-react-fundamentals/project && npx playwright install chromium && cd ../../..
cd courses/02-rtk-query/project && npx playwright install chromium && cd ../../..
cd courses/03-nextjs-app-router/project && npx playwright install chromium && cd ../../..
```

### 2. GitHub Secrets Setup

Add the following secrets to GitHub repository:

- `GROQ_API_KEY`: Your Groq API key
- `GITHUB_TOKEN`: Auto-generated (for workflow)

### 3. Verify GitHub Actions

1. Push code to repository
2. Check Actions tab
3. Verify workflow runs successfully
4. Check that results are committed

### 4. Test Review System

```bash
# Test Course 1
cd courses/01-react-fundamentals/project
npm run review -- --challenge=01-user-profile

# Test Global Review
cd ../../../
node global-review/run-all-reviews.js
```

## Production Considerations

### Security
- [ ] API keys in environment variables
- [ ] Results files are read-only for learners
- [ ] Test files are protected
- [ ] No sensitive data in code

### Performance
- [ ] Review engine timeouts configured
- [ ] E2E tests have proper timeouts
- [ ] CI/CD resource limits set
- [ ] Caching strategy for dependencies

### Monitoring
- [ ] GitHub Actions logs reviewed
- [ ] Error handling verified
- [ ] Result file generation confirmed
- [ ] AI review API rate limits considered

### Documentation
- [ ] README updated with deployment info
- [ ] Setup guide verified
- [ ] Troubleshooting guide available
- [ ] Support contact information

## Post-Deployment

### Verification
1. Run system test: `node test-system.js`
2. Test one challenge review
3. Test global review
4. Verify GitHub Actions workflow
5. Check result file generation

### Monitoring
- Monitor GitHub Actions runs
- Check for failed reviews
- Review AI API usage
- Track learner progress

## Troubleshooting

### Common Issues

1. **Dependencies not installing**
   - Check Node.js version (v20+)
   - Clear npm cache
   - Delete node_modules and reinstall

2. **Review engine fails**
   - Check file paths
   - Verify challenge metadata exists
   - Check test files exist

3. **E2E tests fail**
   - Install Playwright browsers
   - Check dev server is running
   - Verify Playwright config

4. **AI review fails**
   - Check API key
   - Verify network connectivity
   - Check API rate limits

## Maintenance

### Regular Tasks
- Update dependencies monthly
- Review and update challenges
- Monitor system performance
- Update documentation

### Updates
- Add new challenges
- Enhance review criteria
- Improve AI prompts
- Add new evaluation layers
