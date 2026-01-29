import { test, expect } from '@playwright/test';

/**
 * E2E Tests for Challenge 01: Server Components and Basic Routing
 */

test.describe('Challenge 01: Server Components - E2E', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display home page', async ({ page }) => {
    await expect(page.locator('h1, h2, h3').first()).toBeVisible();
  });

  test('should navigate to about page', async ({ page }) => {
    const aboutLink = page.getByRole('link', { name: /about/i }).first();
    
    if (await aboutLink.isVisible().catch(() => false)) {
      await aboutLink.click();
      await page.waitForURL(/about/i);
      expect(page.url()).toContain('about');
    }
  });

  test('should have working navigation', async ({ page }) => {
    // Check if navigation links exist
    const links = page.locator('a[href*="/"]');
    const linkCount = await links.count();
    
    // Should have at least one navigation link
    expect(linkCount).toBeGreaterThan(0);
  });
});
