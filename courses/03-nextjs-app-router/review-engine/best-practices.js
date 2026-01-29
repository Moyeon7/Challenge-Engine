import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

/**
 * Checks best practices and code quality heuristics
 */
export async function checkBestPractices(challengeMetadata, projectDir) {
  const filesToCheck = challengeMetadata.filesToCheck || [];
  
  const results = {
    score: 0,
    passed: false,
    issues: [],
    details: []
  };

  let totalChecks = 0;
  let passedChecks = 0;

  for (const file of filesToCheck) {
    const filePath = join(projectDir, file);
    
    if (!existsSync(filePath)) {
      continue;
    }

    try {
      const fileContent = readFileSync(filePath, 'utf-8');
      const fileResults = checkFileBestPractices(fileContent, file);
      
      totalChecks += fileResults.totalChecks;
      passedChecks += fileResults.passedChecks;
      
      results.details.push({
        file,
        issues: fileResults.issues,
        score: fileResults.score
      });
    } catch (error) {
      results.issues.push({
        file,
        error: error.message
      });
    }
  }

  // Calculate score
  results.score = totalChecks > 0 
    ? Math.round((passedChecks / totalChecks) * 100 * 10) / 10
    : 0;
  
  results.passed = results.score >= 70;

  return results;
}

function checkFileBestPractices(content, fileName) {
  const issues = [];
  let totalChecks = 0;
  let passedChecks = 0;

  // Check 1: No console.log in production code
  totalChecks++;
  const consoleLogMatches = content.match(/console\.(log|error|warn|debug)/g);
  if (!consoleLogMatches || consoleLogMatches.length === 0) {
    passedChecks++;
  } else {
    issues.push({
      type: 'console-log',
      message: `Found ${consoleLogMatches.length} console statement(s)`,
      severity: 'warning'
    });
  }

  // Check 2: Proper TypeScript usage (has type annotations)
  totalChecks++;
  if (fileName.endsWith('.tsx') || fileName.endsWith('.ts')) {
    const hasTypeAnnotations = /:\s*\w+/.test(content) || /<[A-Z]\w+>/.test(content);
    if (hasTypeAnnotations) {
      passedChecks++;
    } else {
      issues.push({
        type: 'typescript',
        message: 'Missing type annotations',
        severity: 'warning'
      });
    }
  } else {
    passedChecks++; // Not applicable
  }

  // Check 3: No commented out code blocks (large blocks)
  totalChecks++;
  const largeCommentBlocks = (content.match(/\/\*[\s\S]{100,}?\*\//g) || []).length;
  if (largeCommentBlocks === 0) {
    passedChecks++;
  } else {
    issues.push({
      type: 'commented-code',
      message: `Found ${largeCommentBlocks} large comment block(s)`,
      severity: 'info'
    });
  }

  // Check 4: Proper component structure (exports)
  totalChecks++;
  if (fileName.includes('app/') || fileName.includes('components/')) {
    const hasExport = /export\s+(default\s+)?(function|const|class)/.test(content);
    if (hasExport) {
      passedChecks++;
    } else {
      issues.push({
        type: 'export',
        message: 'Component/page should be exported',
        severity: 'error'
      });
    }
  } else {
    passedChecks++; // Not applicable
  }

  // Check 5: No hardcoded values (basic check)
  totalChecks++;
  const hardcodedStrings = (content.match(/['"](https?:\/\/|localhost|127\.0\.0\.1)/g) || []).length;
  if (hardcodedStrings === 0) {
    passedChecks++;
  } else {
    issues.push({
      type: 'hardcoded-values',
      message: 'Consider extracting hardcoded URLs to constants',
      severity: 'info'
    });
  }

  const score = totalChecks > 0 
    ? Math.round((passedChecks / totalChecks) * 100 * 10) / 10
    : 0;

  return {
    totalChecks,
    passedChecks,
    issues,
    score
  };
}
