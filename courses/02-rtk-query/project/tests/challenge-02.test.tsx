import { describe, it, expect } from 'vitest';

describe('Challenge 02: Data Display and Caching', () => {
  it('should have getPosts endpoint', () => {
    const fs = require('fs');
    const path = require('path');
    const apiFile = path.join(__dirname, '../src/api/postsApi.ts');
    const usersApiFile = path.join(__dirname, '../src/api/usersApi.ts');
    
    let hasPostsEndpoint = false;
    
    if (fs.existsSync(apiFile)) {
      const content = fs.readFileSync(apiFile, 'utf-8');
      hasPostsEndpoint = /getPosts|endpoints.*getPosts/i.test(content);
    }
    
    if (fs.existsSync(usersApiFile)) {
      const content = fs.readFileSync(usersApiFile, 'utf-8');
      hasPostsEndpoint = hasPostsEndpoint || /getPosts|endpoints.*getPosts/i.test(content);
    }
    
    expect(hasPostsEndpoint).toBe(true);
  });

  it('should implement tag-based caching', () => {
    const fs = require('fs');
    const path = require('path');
    const apiFile = path.join(__dirname, '../src/api/postsApi.ts');
    const usersApiFile = path.join(__dirname, '../src/api/usersApi.ts');
    
    let hasTags = false;
    
    if (fs.existsSync(apiFile)) {
      const content = fs.readFileSync(apiFile, 'utf-8');
      hasTags = /tagTypes|providesTags|invalidatesTags/i.test(content);
    }
    
    if (fs.existsSync(usersApiFile)) {
      const content = fs.readFileSync(usersApiFile, 'utf-8');
      hasTags = hasTags || /tagTypes|providesTags|invalidatesTags/i.test(content);
    }
    
    expect(hasTags).toBe(true);
  });

  it('should have PostsList component', () => {
    const fs = require('fs');
    const path = require('path');
    const postsListFile = path.join(__dirname, '../src/components/PostsList.tsx');
    
    expect(fs.existsSync(postsListFile)).toBe(true);
  });

  it('should use tag types in API', () => {
    const fs = require('fs');
    const path = require('path');
    const apiFile = path.join(__dirname, '../src/api/postsApi.ts');
    const usersApiFile = path.join(__dirname, '../src/api/usersApi.ts');
    
    let hasTagTypes = false;
    
    if (fs.existsSync(apiFile)) {
      const content = fs.readFileSync(apiFile, 'utf-8');
      hasTagTypes = /tagTypes\s*:/i.test(content);
    }
    
    if (fs.existsSync(usersApiFile)) {
      const content = fs.readFileSync(usersApiFile, 'utf-8');
      hasTagTypes = hasTagTypes || /tagTypes\s*:/i.test(content);
    }
    
    expect(hasTagTypes).toBe(true);
  });
});
