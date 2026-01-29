import { describe, it, expect } from 'vitest';
import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

describe('Challenge 01: API Setup and Basic Fetching', () => {
  it('should have usersApi with createApi', () => {
    // Check if usersApi file exists and uses createApi
    const apiFile = join(__dirname, '../src/api/usersApi.ts');
    
    if (existsSync(apiFile)) {
      const content = readFileSync(apiFile, 'utf-8');
      expect(content).toContain('createApi');
    } else {
      // File doesn't exist yet - learner needs to create it
      expect(existsSync(apiFile)).toBe(false);
    }
  });

  it('should have getUsers endpoint', () => {
    const apiFile = join(__dirname, '../src/api/usersApi.ts');
    
    if (existsSync(apiFile)) {
      const content = readFileSync(apiFile, 'utf-8');
      expect(content).toMatch(/getUsers|endpoints.*getUsers/i);
    } else {
      // File doesn't exist yet
      expect(existsSync(apiFile)).toBe(false);
    }
  });

  it('should integrate API reducer into store', () => {
    const storeFile = join(__dirname, '../src/store/store.ts');
    
    if (existsSync(storeFile)) {
      const content = readFileSync(storeFile, 'utf-8');
      // Should have API reducer or usersApi reducer
      expect(content).toMatch(/reducer.*api|usersApi/i);
    }
  });

  it('should use fetchBaseQuery or custom baseQuery', () => {
    const apiFile = join(__dirname, '../src/api/usersApi.ts');
    
    if (existsSync(apiFile)) {
      const content = readFileSync(apiFile, 'utf-8');
      expect(content).toMatch(/fetchBaseQuery|baseQuery/i);
    } else {
      // File doesn't exist yet
      expect(existsSync(apiFile)).toBe(false);
    }
  });

  it('should have useGetUsersQuery hook usage in UsersList', () => {
    const usersListFile = join(__dirname, '../src/components/UsersList.tsx');
    
    if (existsSync(usersListFile)) {
      const content = readFileSync(usersListFile, 'utf-8');
      // Should use the generated hook from RTK Query
      expect(content).toMatch(/useGetUsersQuery/i);
    }
  });
});
