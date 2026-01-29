import { describe, it, expect } from 'vitest';

describe('Challenge 03: Mutations and Optimistic Updates', () => {
  it('should have mutation endpoints', () => {
    const fs = require('fs');
    const path = require('path');
    const apiFile = path.join(__dirname, '../src/api/usersApi.ts');
    
    if (fs.existsSync(apiFile)) {
      const content = fs.readFileSync(apiFile, 'utf-8');
      const hasMutations = 
        /createUser|updateUser|deleteUser|mutation/i.test(content) ||
        /endpoints.*\(.*mutation/i.test(content);
      expect(hasMutations).toBe(true);
    }
  });

  it('should implement optimistic updates', () => {
    const fs = require('fs');
    const path = require('path');
    const apiFile = path.join(__dirname, '../src/api/usersApi.ts');
    
    if (fs.existsSync(apiFile)) {
      const content = fs.readFileSync(apiFile, 'utf-8');
      const hasOptimistic = 
        /onQueryStarted|optimistic|optimisticUpdate/i.test(content);
      expect(hasOptimistic).toBe(true);
    }
  });

  it('should invalidate cache tags on mutation', () => {
    const fs = require('fs');
    const path = require('path');
    const apiFile = path.join(__dirname, '../src/api/usersApi.ts');
    
    if (fs.existsSync(apiFile)) {
      const content = fs.readFileSync(apiFile, 'utf-8');
      const hasInvalidation = 
        /invalidatesTags/i.test(content);
      expect(hasInvalidation).toBe(true);
    }
  });

  it('should have UserForm component', () => {
    const fs = require('fs');
    const path = require('path');
    const formFile = path.join(__dirname, '../src/components/UserForm.tsx');
    
    expect(fs.existsSync(formFile)).toBe(true);
  });

  it('should use mutation hooks', () => {
    const fs = require('fs');
    const path = require('path');
    const formFile = path.join(__dirname, '../src/components/UserForm.tsx');
    
    if (fs.existsSync(formFile)) {
      const content = fs.readFileSync(formFile, 'utf-8');
      const hasMutationHook = 
        /useCreateUserMutation|useUpdateUserMutation|useDeleteUserMutation|useMutation/i.test(content);
      expect(hasMutationHook).toBe(true);
    }
  });
});
