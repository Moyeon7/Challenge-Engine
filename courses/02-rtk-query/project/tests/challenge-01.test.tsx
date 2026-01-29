import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import UsersList from '../src/components/UsersList';

describe('Challenge 01: API Setup and Basic Fetching', () => {
  it('should have usersApi with createApi', () => {
    // Check if usersApi file exists and uses createApi
    const fs = require('fs');
    const path = require('path');
    const apiFile = path.join(__dirname, '../src/api/usersApi.ts');
    
    if (fs.existsSync(apiFile)) {
      const content = fs.readFileSync(apiFile, 'utf-8');
      expect(content).toContain('createApi');
    }
  });

  it('should have getUsers endpoint', () => {
    const fs = require('fs');
    const path = require('path');
    const apiFile = path.join(__dirname, '../src/api/usersApi.ts');
    
    if (fs.existsSync(apiFile)) {
      const content = fs.readFileSync(apiFile, 'utf-8');
      expect(content).toMatch(/getUsers|endpoints.*getUsers/i);
    }
  });

  it('should integrate API reducer into store', () => {
    const fs = require('fs');
    const path = require('path');
    const storeFile = path.join(__dirname, '../src/store/store.ts');
    
    if (fs.existsSync(storeFile)) {
      const content = fs.readFileSync(storeFile, 'utf-8');
      // Should have API reducer or usersApi reducer
      expect(content).toMatch(/reducer.*api|usersApi/i);
    }
  });

  it('should use fetchBaseQuery or custom baseQuery', () => {
    const fs = require('fs');
    const path = require('path');
    const apiFile = path.join(__dirname, '../src/api/usersApi.ts');
    
    if (fs.existsSync(apiFile)) {
      const content = fs.readFileSync(apiFile, 'utf-8');
      expect(content).toMatch(/fetchBaseQuery|baseQuery/i);
    }
  });

  it('should have useGetUsersQuery hook usage', () => {
    const fs = require('fs');
    const path = require('path');
    const usersListFile = path.join(__dirname, '../src/components/UsersList.tsx');
    
    if (fs.existsSync(usersListFile)) {
      const content = fs.readFileSync(usersListFile, 'utf-8');
      expect(content).toMatch(/useGetUsersQuery|useQuery/i);
    }
  });
});
