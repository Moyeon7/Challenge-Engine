import { execSync } from 'child_process';
import { existsSync } from 'fs';
import { join } from 'path';

/**
 * Runs ESLint on specified files
 */
export async function runLinting(filesToCheck, projectDir) {
  if (!filesToCheck || filesToCheck.length === 0) {
    return {
      score: 0,
      passed: false,
      error: 'No files specified for linting',
      details: []
    };
  }

  // Resolve file paths
  const filePaths = filesToCheck
    .map(file => join(projectDir, file))
    .filter(file => existsSync(file));

  if (filePaths.length === 0) {
    return {
      score: 0,
      passed: false,
      error: 'None of the specified files exist',
      details: []
    };
  }

  try {
    // Run ESLint
    const output = execSync(
      `npm run lint -- ${filePaths.join(' ')} --format json`,
      {
        cwd: projectDir,
        encoding: 'utf-8',
        stdio: ['pipe', 'pipe', 'pipe']
      }
    );

    const lintResults = JSON.parse(output);
    
    // Calculate score based on errors and warnings
    let totalIssues = 0;
    let errors = 0;
    let warnings = 0;

    lintResults.forEach(file => {
      file.messages.forEach(message => {
        totalIssues++;
        if (message.severity === 2) {
          errors++;
        } else {
          warnings++;
        }
      });
    });

    // Score: 100 - (errors * 10) - (warnings * 2), minimum 0
    const score = Math.max(0, 100 - (errors * 10) - (warnings * 2));

    return {
      score: Math.round(score * 10) / 10,
      passed: errors === 0,
      totalIssues,
      errors,
      warnings,
      details: lintResults
    };
  } catch (error) {
    // ESLint exits with non-zero on errors, try to parse output
    try {
      const errorOutput = error.stdout || error.stderr || '';
      const lintResults = JSON.parse(errorOutput);
      
      let totalIssues = 0;
      let errors = 0;
      let warnings = 0;

      lintResults.forEach(file => {
        file.messages.forEach(message => {
          totalIssues++;
          if (message.severity === 2) {
            errors++;
          } else {
            warnings++;
          }
        });
      });

      const score = Math.max(0, 100 - (errors * 10) - (warnings * 2));

      return {
        score: Math.round(score * 10) / 10,
        passed: errors === 0,
        totalIssues,
        errors,
        warnings,
        details: lintResults
      };
    } catch {
      // If we can't parse, assume linting passed (files might not exist yet)
      return {
        score: 50, // Partial credit if files don't exist
        passed: false,
        error: 'Could not parse linting results',
        details: []
      };
    }
  }
}
