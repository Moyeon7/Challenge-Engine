# Troubleshooting Guide

## Common Issues and Solutions

### Installation Issues

#### Dependencies Not Installing
**Problem**: `npm install` fails or hangs

**Solutions**:
1. Check Node.js version: `node --version` (should be v20+)
2. Clear npm cache: `npm cache clean --force`
3. Delete `node_modules` and `package-lock.json`, then reinstall
4. Try using `npm ci` instead of `npm install`

#### Playwright Browsers Not Installing
**Problem**: E2E tests fail because browsers aren't installed

**Solutions**:
```bash
cd courses/XX-course-name/project
npx playwright install chromium
npx playwright install --with-deps chromium
```

### Review Engine Issues

#### Review Engine Fails to Run
**Problem**: `npm run review` fails with errors

**Solutions**:
1. Check that review engine dependencies are installed:
   ```bash
   cd courses/XX-course-name/review-engine
   npm install
   ```

2. Verify challenge metadata files exist:
   - `project/challenges/XX-xxx/metadata.json`
   - `project/challenges/XX-xxx/README.md`
   - `project/challenges/XX-xxx/requirements.md`

3. Check file paths in metadata.json match actual files

4. Verify Node.js version (v20+)

#### "Module not found" Errors
**Problem**: Review engine can't find modules

**Solutions**:
1. Install review engine dependencies:
   ```bash
   cd courses/XX-course-name/review-engine
   npm install
   ```

2. Check that `@babel/parser` and `@babel/traverse` are installed

3. Verify package.json has correct dependencies

### Test Issues

#### Unit Tests Fail
**Problem**: `npm test` fails

**Solutions**:
1. Check that project dependencies are installed
2. Verify test files exist in `project/tests/`
3. Check test setup file exists: `src/test/setup.ts`
4. Review test assertions match challenge requirements

#### E2E Tests Fail
**Problem**: Playwright tests fail

**Solutions**:
1. Install Playwright browsers:
   ```bash
   npx playwright install chromium
   ```

2. Ensure dev server is running or Playwright config has `webServer` enabled

3. Check Playwright config port matches dev server port

4. Verify test selectors match actual UI elements

5. Increase timeout if tests are slow:
   ```typescript
   test.setTimeout(30000); // 30 seconds
   ```

### AI Review Issues

#### AI Review Fails
**Problem**: AI review returns errors

**Solutions**:
1. Check Groq API key is correct
2. Verify network connectivity
3. Check API rate limits
4. Review API response format
5. Check error logs for details

#### AI Review Timeout
**Problem**: AI review takes too long

**Solutions**:
1. Reduce code snippet size in ai-review/index.js
2. Increase timeout in review engine
3. Check API response times
4. Consider caching AI responses

### Configuration Issues

#### ESLint Errors
**Problem**: Linting fails with many errors

**Solutions**:
1. Check ESLint config exists: `.eslintrc.cjs` or `.eslintrc.json`
2. Install ESLint dependencies
3. Run `npm run lint` to see specific errors
4. Fix errors or adjust ESLint rules

#### TypeScript Errors
**Problem**: TypeScript compilation fails

**Solutions**:
1. Check `tsconfig.json` exists and is valid
2. Verify all type definitions are installed
3. Review TypeScript errors and fix type issues
4. Check that files match TypeScript configuration

### GitHub Actions Issues

#### Workflow Fails
**Problem**: GitHub Actions workflow fails

**Solutions**:
1. Check workflow file syntax: `.github/workflows/solo-skill-review.yml`
2. Verify all required secrets are set (GROQ_API_KEY)
3. Check Node.js version in workflow matches local
4. Review workflow logs for specific errors
5. Ensure file paths are correct

#### Results Not Committed
**Problem**: Results files aren't committed automatically

**Solutions**:
1. Check GitHub token permissions
2. Verify workflow has write permissions
3. Review workflow commit step
4. Check if results directory is in .gitignore (should not be)

### File Structure Issues

#### Challenge Not Found
**Problem**: Review engine says challenge not found

**Solutions**:
1. Verify challenge ID matches in:
   - `course-config.json`
   - Challenge folder name
   - Metadata file name

2. Check challenge folder structure:
   ```
   challenges/
   └── 01-challenge-name/
       ├── README.md
       ├── requirements.md
       └── metadata.json
   ```

3. Verify challenge ID format matches (e.g., "01-user-profile")

### Performance Issues

#### Review Takes Too Long
**Problem**: Review process is slow

**Solutions**:
1. Check test execution time
2. Optimize E2E tests (reduce scenarios if needed)
3. Cache ESLint results
4. Reduce AI review code snippet size
5. Run reviews for specific challenges only

#### Memory Issues
**Problem**: Out of memory errors

**Solutions**:
1. Increase Node.js memory: `node --max-old-space-size=4096`
2. Run reviews one at a time
3. Close other applications
4. Check for memory leaks in review engine

## Getting Help

1. **Check Documentation**
   - [SETUP_GUIDE.md](./SETUP_GUIDE.md)
   - [ARCHITECTURE.md](./ARCHITECTURE.md)
   - [README.md](./README.md)

2. **Run Validation**
   ```bash
   node test-system.js
   ```

3. **Check Logs**
   - Review engine console output
   - GitHub Actions logs
   - Test output

4. **Verify Structure**
   ```bash
   node scripts/validate-structure.js
   ```

## Reporting Issues

When reporting issues, include:
- Node.js version
- Operating system
- Error messages
- Steps to reproduce
- Relevant file paths
