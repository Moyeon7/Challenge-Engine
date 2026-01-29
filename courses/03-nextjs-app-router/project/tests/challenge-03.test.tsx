import { describe, it, expect } from 'vitest';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

describe('Challenge 03: Fullstack Features and Metadata', () => {
  it('should have Client Component with use client', () => {
    const formFile = join(__dirname, '../app/contact/form.tsx');
    const contactPage = join(__dirname, '../app/contact/page.tsx');
    
    let hasUseClient = false;
    if (existsSync(formFile)) {
      const content = readFileSync(formFile, 'utf-8');
      hasUseClient = hasUseClient || /['"]use client['"]/.test(content);
    }
    if (existsSync(contactPage)) {
      const content = readFileSync(contactPage, 'utf-8');
      hasUseClient = hasUseClient || /['"]use client['"]/.test(content);
    }
    
    expect(hasUseClient).toBe(true);
  });

  it('should have metadata', () => {
    const layoutFile = join(__dirname, '../app/layout.tsx');
    const contactPage = join(__dirname, '../app/contact/page.tsx');
    
    let hasMetadata = false;
    if (existsSync(layoutFile)) {
      const content = readFileSync(layoutFile, 'utf-8');
      hasMetadata = hasMetadata || /metadata|export.*metadata/i.test(content);
    }
    if (existsSync(contactPage)) {
      const content = readFileSync(contactPage, 'utf-8');
      hasMetadata = hasMetadata || /metadata|export.*metadata/i.test(content);
    }
    
    expect(hasMetadata).toBe(true);
  });

  it('should have form handling', () => {
    const formFile = join(__dirname, '../app/contact/form.tsx');
    const apiRoute = join(__dirname, '../app/api/contact/route.ts');
    
    const hasForm = existsSync(formFile);
    const hasApiRoute = existsSync(apiRoute);
    
    expect(hasForm || hasApiRoute).toBe(true);
  });

  it('should have Server Action or API route', () => {
    const formFile = join(__dirname, '../app/contact/form.tsx');
    const apiRoute = join(__dirname, '../app/api/contact/route.ts');
    
    let hasServerAction = false;
    if (existsSync(formFile)) {
      const content = readFileSync(formFile, 'utf-8');
      hasServerAction = /serverAction|action=|use server/i.test(content);
    }
    
    const hasApi = existsSync(apiRoute);
    
    expect(hasServerAction || hasApi).toBe(true);
  });
});
