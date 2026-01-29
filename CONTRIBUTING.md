# Contributing to Challenge Engine

## Adding a New Course

1. **Create Course Directory**
   ```bash
   mkdir -p courses/04-new-course/{project,review-engine,ai-review,results}
   ```

2. **Create Course Config**
   - Copy `course-config.json` from existing course
   - Update courseId, courseName, description
   - Define challenges with proper difficulty progression

3. **Create Project**
   - Set up runnable application
   - Add package.json with dependencies
   - Create basic app structure

4. **Create Challenges**
   - Create challenge folders in `project/challenges/`
   - Add README.md, requirements.md, metadata.json
   - Ensure difficulty: beginner → intermediate → advanced

5. **Create Tests**
   - Add unit tests in `project/tests/`
   - Add E2E tests in `project/tests/e2e/`
   - Ensure tests verify challenge requirements

6. **Create Review Engine**
   - Copy review engine from existing course
   - Update architecture-checker.js for course-specific patterns
   - Update AI review prompts for course context

7. **Update Global Review**
   - Add course to `pathway-review/pathway-config.json`
   - Update global review engine if needed

## Adding a New Challenge

1. **Create Challenge Folder**
   ```bash
   mkdir -p project/challenges/04-new-challenge
   ```

2. **Create Challenge Files**
   - `README.md`: Problem statement, instructions, visual requirements
   - `requirements.md`: Technical requirements checklist
   - `metadata.json`: Scoring, patterns, files to check

3. **Update Course Config**
   - Add challenge to `course-config.json`
   - Ensure proper difficulty progression

4. **Create Tests**
   - Add unit test: `tests/challenge-04.test.tsx`
   - Add E2E test: `tests/e2e/challenge-04.spec.ts`

5. **Update Review Engine**
   - Ensure architecture-checker recognizes required patterns
   - Update AI review prompts if needed

## Adding a New Evaluation Layer

1. **Create Checker Module**
   ```javascript
   // review-engine/new-checker.js
   export async function runNewChecker(challengeMetadata, projectDir) {
     // Implementation
     return { score, passed, details };
   }
   ```

2. **Integrate in Review Engine**
   ```javascript
   // review-engine/index.js
   import { runNewChecker } from './new-checker.js';
   
   // In reviewChallenge function:
   const newResults = await runNewChecker(challengeMetadata, PROJECT_DIR);
   result.scores.newChecker = newResults.score;
   ```

3. **Update Course Config**
   ```json
   {
     "scoring": {
       "newChecker": 0.10,
       // ... other weights
     }
   }
   ```

4. **Update Scoring Calculation**
   - Ensure weights sum to 1.0
   - Update total score calculation

## Code Style

- Use TypeScript for all projects
- Follow ESLint rules
- Use async/await for async operations
- Add error handling
- Include JSDoc comments for functions
- Keep functions focused and modular

## Testing Guidelines

- Write tests for all review engine modules
- Ensure tests are deterministic
- Test error cases
- Use descriptive test names
- Keep tests fast and isolated

## Documentation

- Update README.md when adding features
- Document new evaluation layers
- Update architecture docs
- Add examples for new features

## Pull Request Process

1. Create feature branch
2. Make changes following guidelines
3. Ensure all tests pass
4. Update documentation
5. Submit PR with description
6. Address review feedback

## Questions?

Open an issue or contact maintainers.
