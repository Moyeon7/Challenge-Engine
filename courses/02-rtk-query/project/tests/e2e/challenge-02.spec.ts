import { test, expect } from '@playwright/test';

/**
 * E2E Tests for Challenge 02: Data Display and Caching
 */

test.describe('Challenge 02: Data Display and Caching - E2E', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display both users and posts', async ({ page }) => {
    await page.waitForTimeout(2000);
    
    // Should see users
    const hasUsers = await page.locator('body').textContent();
    expect(hasUsers).toMatch(/John|Jane|Bob|User/i);
    
    // Should see posts
    expect(hasUsers).toMatch(/Post|Title|First|Second|Third/i);
  });

  test('should show posts list', async ({ page }) => {
    await page.waitForSelector('text=/Post|Title/i', { timeout: 10000 });
    
    const postElement = page.locator('text=/Post|Title/i').first();
    await expect(postElement).toBeVisible();
  });

  test('should handle multiple queries', async ({ page }) => {
    await page.waitForTimeout(2000);
    
    // Both users and posts should be visible
    const bodyText = await page.locator('body').textContent();
    const hasUsers = /John|Jane|Bob/i.test(bodyText || '');
    const hasPosts = /Post|Title/i.test(bodyText || '');
    
    expect(hasUsers && hasPosts).toBe(true);
  });
});
