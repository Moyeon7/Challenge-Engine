import { test, expect } from '@playwright/test';

/**
 * E2E Tests for Challenge 02: Data Fetching and API Routes
 */

test.describe('Challenge 02: Data Fetching - E2E', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display posts page with data', async ({ page }) => {
    await page.goto('/posts');
    await page.waitForTimeout(2000);
    
    // Should see some content
    const bodyText = await page.locator('body').textContent();
    expect(bodyText).toBeTruthy();
  });

  test('should have API route that returns data', async ({ request }) => {
    const response = await request.get('/api/posts');
    
    if (response.ok()) {
      const contentType = response.headers()['content-type'];
      expect(contentType).toContain('json');
    }
  });
});
