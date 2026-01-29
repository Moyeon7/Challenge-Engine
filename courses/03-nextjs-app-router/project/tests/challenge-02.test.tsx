import { describe, it, expect } from 'vitest';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

describe('Challenge 02: Data Fetching and API Routes', () => {
  it('should have API route', () => {
    const apiRoute = join(__dirname, '../app/api/posts/route.ts');
    const apiRouteAlt = join(__dirname, '../app/api/posts/route.js');
    expect(existsSync(apiRoute) || existsSync(apiRouteAlt)).toBe(true);
  });

  it('should have async Server Component', () => {
    const postsPage = join(__dirname, '../app/posts/page.tsx');
    if (existsSync(postsPage)) {
      const content = readFileSync(postsPage, 'utf-8');
      expect(content).toMatch(/async\s+(function|const|export)/);
    }
  });

  it('should fetch data in Server Component', () => {
    const postsPage = join(__dirname, '../app/posts/page.tsx');
    if (existsSync(postsPage)) {
      const content = readFileSync(postsPage, 'utf-8');
      const hasFetch = /fetch|await|async/i.test(content);
      expect(hasFetch).toBe(true);
    }
  });

  it('should have API route that returns JSON', () => {
    const apiRoute = join(__dirname, '../app/api/posts/route.ts');
    if (existsSync(apiRoute)) {
      const content = readFileSync(apiRoute, 'utf-8');
      const hasJsonResponse = /Response\.json|NextResponse\.json|json\(/i.test(content);
      expect(hasJsonResponse).toBe(true);
    }
  });
});
