import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import { parse } from '@babel/parser';
import traverse from '@babel/traverse';

/**
 * Checks architecture patterns using AST parsing
 * Adapted for RTK Query patterns
 */
export async function checkArchitecture(challengeMetadata, projectDir) {
  const filesToCheck = challengeMetadata.filesToCheck || [];

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
      patternsMissing: []
    });
    continue;
  }

  const fileContent = readFileSync(filePath, 'utf-8');

  let required = [];

  if (file.includes("api/usersApi")) {
    required = ["createApi", "fetchBaseQuery", "endpoints"];
  } 
  else if (file.includes("store")) {
    required = ["reducer", "middleware"];
  }
  else if (file.includes("UsersList")) {
    required = ["useQueryHook"];
  }
  else {
    required = [];
  }

  const fileResults = checkFileForPatterns(fileContent, required);

  totalChecks += required.length;
  passedChecks += fileResults.patternsFound.length;

  results.details.push({
    file,
    patternsFound: fileResults.patternsFound,
    patternsMissing: fileResults.patternsMissing
  });
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
      CallExpression(path) {
        const callee = path.node.callee;

        if (callee.name === 'createApi') {
          foundPatterns.add('createApi');
        }

        if (callee.name === 'fetchBaseQuery') {
          foundPatterns.add('fetchBaseQuery');
        }

        if (callee.name && /use.*Query/i.test(callee.name)) {
          foundPatterns.add('useQueryHook');
        }

        if (callee.name && /use.*Mutation/i.test(callee.name)) {
          foundPatterns.add('useMutationHook');
        }

        if (
          callee.property &&
          callee.property.name === 'updateQueryData'
        ) {
          foundPatterns.add('optimisticUpdate');
        }
      },

      ObjectProperty(path) {
        const key = path.node.key?.name;

        if (key === 'endpoints') {
          foundPatterns.add('endpoints');
        }

        if (key === 'providesTags') {
          foundPatterns.add('providesTags');
        }

        if (key === 'invalidatesTags') {
          foundPatterns.add('invalidatesTags');
        }

        if (key === 'tagTypes') {
          foundPatterns.add('tagTypes');
        }

        if (key === 'onQueryStarted') {
          foundPatterns.add('onQueryStarted');
        }

        if (key === 'reducer') {
          foundPatterns.add('reducer');
        }

        if (key === 'middleware') {
          foundPatterns.add('middleware');
        }
      },

      ObjectMethod(path) {
        if (path.node.key?.name === 'mutation') {
          foundPatterns.add('mutation');
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
