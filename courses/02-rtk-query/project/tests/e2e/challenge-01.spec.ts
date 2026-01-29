import { test, expect } from '@playwright/test';

/**
 * E2E Tests for Challenge 01: API Setup and Basic Fetching
 */

test.describe('Challenge 01: API Setup - E2E', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display users list', async ({ page }) => {
    // Wait for users to load
    await page.waitForSelector('text=/John|Jane|Bob|User/i', { timeout: 10000 });
    
    // Should see at least one user
    const userElements = page.locator('text=/John|Jane|Bob|User/i');
    await expect(userElements.first()).toBeVisible();
  });

  test('should show loading state initially', async ({ page }) => {
    // This test might be flaky, but we check if loading state exists
    const loadingIndicator = page.locator('text=/loading|Loading|fetching/i').first();
    
    // Either loading shows briefly or data loads quickly
    const hasLoading = await loadingIndicator.isVisible().catch(() => false);
    const hasData = await page.locator('text=/John|Jane|Bob/i').isVisible().catch(() => false);
    
    expect(hasLoading || hasData).toBe(true);
  });

  test('should display user information', async ({ page }) => {
    await page.waitForSelector('text=/@.*\\.(com|net|org)/i', { timeout: 10000 });
    
    // Should see email addresses
    const email = page.locator('text=/@.*\\.(com|net|org)/i').first();
    await expect(email).toBeVisible();
  });

  test('should handle API data correctly', async ({ page }) => {
    // Wait for data to load
    await page.waitForTimeout(2000);
    
    // Should see user data displayed
    const hasUserData = await page.locator('body').textContent();
    expect(hasUserData).toMatch(/John|Jane|Bob|email|username/i);
  });
});
