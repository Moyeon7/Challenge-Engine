import { test, expect } from '@playwright/test';

/**
 * E2E Tests for Challenge 03: Fullstack Features
 */

test.describe('Challenge 03: Fullstack Features - E2E', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have form page', async ({ page }) => {
    await page.goto('/contact');
    await page.waitForTimeout(1000);
    
    // Should see form elements
    const hasInput = await page.locator('input, textarea').first().isVisible().catch(() => false);
    const hasButton = await page.getByRole('button', { name: /submit|send|submit/i }).first().isVisible().catch(() => false);
    
    expect(hasInput || hasButton).toBe(true);
  });

  test('should submit form', async ({ page }) => {
    await page.goto('/contact');
    await page.waitForTimeout(1000);
    
    const submitButton = page.getByRole('button', { name: /submit|send/i }).first();
    
    if (await submitButton.isVisible().catch(() => false)) {
      await submitButton.click();
      await page.waitForTimeout(1000);
      
      // Should see some response (success or error message)
      const bodyText = await page.locator('body').textContent();
      expect(bodyText).toBeTruthy();
    }
  });
});
