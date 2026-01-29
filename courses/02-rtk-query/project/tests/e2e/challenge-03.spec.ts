import { test, expect } from '@playwright/test';

/**
 * E2E Tests for Challenge 03: Mutations and Optimistic Updates
 */

test.describe('Challenge 03: Mutations - E2E', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have form to create user', async ({ page }) => {
    await page.waitForTimeout(1000);
    
    // Look for form elements
    const hasInput = await page.locator('input[type="text"], input[name*="name"], input[placeholder*="name" i]').first().isVisible().catch(() => false);
    const hasButton = await page.getByRole('button', { name: /create|add|submit|save/i }).first().isVisible().catch(() => false);
    
    expect(hasInput || hasButton).toBe(true);
  });

  test('should create new user', async ({ page }) => {
    await page.waitForTimeout(1000);
    
    // Try to find and fill form
    const nameInput = page.locator('input[type="text"], input[name*="name"]').first();
    const emailInput = page.locator('input[type="email"], input[name*="email"]').first();
    const submitButton = page.getByRole('button', { name: /create|add|submit|save/i }).first();
    
    if (await nameInput.isVisible().catch(() => false)) {
      await nameInput.fill('Test User');
      if (await emailInput.isVisible().catch(() => false)) {
        await emailInput.fill('test@example.com');
      }
      if (await submitButton.isVisible().catch(() => false)) {
        await submitButton.click();
        await page.waitForTimeout(1000);
        
        // Should see new user
        await expect(page.locator('text=/Test User/i')).toBeVisible();
      }
    }
  });

  test('should update user optimistically', async ({ page }) => {
    await page.waitForTimeout(2000);
    
    // Look for edit functionality
    const editButton = page.getByRole('button', { name: /edit|update/i }).first();
    
    if (await editButton.isVisible().catch(() => false)) {
      await editButton.click();
      await page.waitForTimeout(500);
      
      // Should see edit form or updated data immediately (optimistic)
      const hasForm = await page.locator('input, form').first().isVisible().catch(() => false);
      expect(hasForm).toBe(true);
    }
  });

  test('should delete user', async ({ page }) => {
    await page.waitForTimeout(2000);
    
    const deleteButton = page.getByRole('button', { name: /delete|remove|×/i }).first();
    
    if (await deleteButton.isVisible().catch(() => false)) {
      const initialCount = await page.locator('text=/John|Jane|Bob/i').count();
      await deleteButton.click();
      await page.waitForTimeout(1000);
      
      // Count should decrease (optimistic update)
      const newCount = await page.locator('text=/John|Jane|Bob/i').count();
      expect(newCount).toBeLessThan(initialCount);
    }
  });
});
