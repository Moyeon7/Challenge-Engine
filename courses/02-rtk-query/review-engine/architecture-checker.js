import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import { parse } from '@babel/parser';
import traverse from '@babel/traverse';

/**
 * Checks architecture patterns using AST parsing
 * Adapted for RTK Query patterns
 */
export async function checkArchitecture(challengeMetadata, projectDir) {
  const patternsRequired = challengeMetadata.patternsRequired || [];
  const filesToCheck = challengeMetadata.filesToCheck || [];
  
  if (patternsRequired.length === 0) {
    return {
      score: 100,
      passed: true,
      details: []
    };
  }

  const results = {
    score: 0,
    passed: false,
    patternsFound: [],
    patternsMissing: [],
    details: []
  };

  let totalChecks = 0;
  let passedChecks = 0;

  for (const file of filesToCheck) {
    const filePath = join(projectDir, file);
    
    if (!existsSync(filePath)) {
      results.details.push({
        file,
        error: 'File does not exist',
        patternsFound: [],
        patternsMissing: patternsRequired
      });
      continue;
    }

    try {
      const fileContent = readFileSync(filePath, 'utf-8');
      const fileResults = checkFileForPatterns(fileContent, patternsRequired, file);
      
      totalChecks += patternsRequired.length;
      passedChecks += fileResults.patternsFound.length;
      
      results.patternsFound.push(...fileResults.patternsFound);
      results.patternsMissing.push(...fileResults.patternsMissing);
      results.details.push({
        file,
        patternsFound: fileResults.patternsFound,
        patternsMissing: fileResults.patternsMissing
      });
    } catch (error) {
      results.details.push({
        file,
        error: error.message,
        patternsFound: [],
        patternsMissing: patternsRequired
      });
    }
  }

  // Calculate score
  results.score = totalChecks > 0 
    ? Math.round((passedChecks / totalChecks) * 100 * 10) / 10
    : 0;
  
  results.passed = results.score >= 80;

  return results;
}

function checkFileForPatterns(content, patternsRequired, fileName) {
  const patternsFound = [];
  const patternsMissing = [];

  try {
    const ast = parse(content, {
      sourceType: 'module',
      plugins: ['typescript', 'jsx', 'decorators-legacy', 'classProperties']
    });

    const foundPatterns = new Set();

    traverse(ast, {
      // Check for RTK Query patterns
      CallExpression(path) {
        if (path.node.callee.name === 'createApi') {
          foundPatterns.add('createApi');
        }
        if (path.node.callee.name === 'fetchBaseQuery') {
          foundPatterns.add('fetchBaseQuery');
        }
      },

      // Check for endpoints
      ObjectProperty(path) {
        if (path.node.key.name === 'endpoints') {
          foundPatterns.add('endpoints');
        }
        if (path.node.key.name === 'providesTags') {
          foundPatterns.add('providesTags');
        }
        if (path.node.key.name === 'invalidatesTags') {
          foundPatterns.add('invalidatesTags');
        }
        if (path.node.key.name === 'tagTypes') {
          foundPatterns.add('tagTypes');
        }
      },

      // Check for mutation
      ObjectMethod(path) {
        if (path.node.key && path.node.key.name === 'mutation') {
          foundPatterns.add('mutation');
        }
      },

      // Check for onQueryStarted (optimistic updates)
      ObjectProperty(path) {
        if (path.node.key.name === 'onQueryStarted') {
          foundPatterns.add('onQueryStarted');
        }
      },

      // Check for useQuery hooks
      CallExpression(path) {
        if (path.node.callee.name && /use.*Query/i.test(path.node.callee.name)) {
          foundPatterns.add('useQueryHook');
        }
        if (path.node.callee.name && /use.*Mutation/i.test(path.node.callee.name)) {
          foundPatterns.add('useMutationHook');
        }
      },

      // Check for multiple endpoints
      ObjectProperty(path) {
        if (path.node.key.name === 'endpoints') {
          const endpointsValue = path.node.value;
          if (endpointsValue.type === 'ArrowFunctionExpression' || 
              endpointsValue.type === 'FunctionExpression') {
            foundPatterns.add('multipleEndpoints');
          }
        }
      },

      // Check for optimistic update
      CallExpression(path) {
        if (path.node.callee.property && 
            path.node.callee.property.name === 'updateQueryData') {
          foundPatterns.add('optimisticUpdate');
        }
      }
    });

    // Check which required patterns were found
    for (const pattern of patternsRequired) {
      if (foundPatterns.has(pattern)) {
        patternsFound.push(pattern);
      } else {
        patternsMissing.push(pattern);
      }
    }

  } catch (error) {
    // If parsing fails, try simple string matching as fallback
    for (const pattern of patternsRequired) {
      if (content.includes(pattern) || content.includes(pattern.replace(/([A-Z])/g, '-$1').toLowerCase())) {
        patternsFound.push(pattern);
      } else {
        patternsMissing.push(pattern);
      }
    }
  }

  return { patternsFound, patternsMissing };
}
