import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import { parse } from '@babel/parser';
import traverse from '@babel/traverse';

/**
 * Checks architecture patterns using AST parsing
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
      // Check for useState
      CallExpression(path) {
        if (path.node.callee.name === 'useState') {
          foundPatterns.add('useState');
        }
        if (path.node.callee.name === 'createContext') {
          foundPatterns.add('createContext');
        }
        if (path.node.callee.name === 'useContext') {
          foundPatterns.add('useContext');
        }
      },
      
      // Check for functional components (including export default)
      FunctionDeclaration(path) {
        if (path.node.id && /^[A-Z]/.test(path.node.id.name)) {
          foundPatterns.add('functionalComponent');
        }
        // Also check for props in same function
        if (path.node.params.length > 0) {
          foundPatterns.add('props');
        }
      },
      
      // Handle export default function declarations
      ExportDefaultDeclaration(path) {
        if (path.node.declaration.type === 'FunctionDeclaration') {
          const func = path.node.declaration;
          if (func.id && /^[A-Z]/.test(func.id.name)) {
            foundPatterns.add('functionalComponent');
          }
          if (func.params.length > 0) {
            foundPatterns.add('props');
          }
        }
      },
      
      ArrowFunctionExpression(path) {
        const parent = path.parent;
        if (parent.type === 'VariableDeclarator' && 
            parent.id && 
            /^[A-Z]/.test(parent.id.name)) {
          foundPatterns.add('functionalComponent');
        }
        // Also check for props in same arrow function
        if (path.node.params.length > 0) {
          foundPatterns.add('props');
        }
      },

      // Check for Provider
      JSXElement(path) {
        if (path.node.openingElement.name.name === 'Provider') {
          foundPatterns.add('Provider');
        }
      },

      // Check for custom hooks
      CallExpression(path) {
        if (path.node.callee.name && path.node.callee.name.startsWith('use')) {
          foundPatterns.add('customHook');
        }
      },

      // Check for localStorage
      MemberExpression(path) {
        if (path.node.object.name === 'localStorage') {
          foundPatterns.add('localStorage');
        }
      },

      // Check for array methods
      CallExpression(path) {
        const methods = ['map', 'filter', 'reduce', 'forEach'];
        if (path.node.callee.property && 
            methods.includes(path.node.callee.property.name)) {
          foundPatterns.add('arrayMethods');
        }
      },

      // Check for controlled components
      JSXElement(path) {
        const openingElement = path.node.openingElement;
        if (openingElement.name.name === 'input' || 
            openingElement.name.name === 'textarea') {
          const hasValue = openingElement.attributes.some(
            attr => attr.name && attr.name.name === 'value'
          );
          const hasOnChange = openingElement.attributes.some(
            attr => attr.name && attr.name.name === 'onChange'
          );
          if (hasValue && hasOnChange) {
            foundPatterns.add('controlledComponents');
          }
        }
      },

      // Check for conditional rendering
      ConditionalExpression(path) {
        foundPatterns.add('conditionalRendering');
      },
      LogicalExpression(path) {
        if (path.node.operator === '&&' || path.node.operator === '||') {
          foundPatterns.add('conditionalRendering');
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
