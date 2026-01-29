import { test, expect } from '@playwright/test';

/**
 * E2E Tests for Challenge 01: User Profile Component
 * 
 * These tests verify the visual output and user interactions
 * that learners can see when running the app.
 */

test.describe('Challenge 01: User Profile Component - E2E', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display user profile component on the page', async ({ page }) => {
    // Check if user profile is visible
    const profile = page.locator('[data-testid="user-profile"], .user-profile, [class*="UserProfile"]').first();
    await expect(profile).toBeVisible();
  });

  test('should display user name', async ({ page }) => {
    // User name should be visible (checking for common patterns)
    const nameElement = page.locator('text=/John Doe|Jane Smith|User Name/i').first();
    await expect(nameElement).toBeVisible();
  });

  test('should display user email', async ({ page }) => {
    // Email should be visible
    const emailElement = page.locator('text=/@.*\\.(com|net|org)/i').first();
    await expect(emailElement).toBeVisible();
  });

  test('should have a follow button', async ({ page }) => {
    // Follow button should exist
    const followButton = page.getByRole('button', { name: /follow/i }).first();
    await expect(followButton).toBeVisible();
  });

  test('should toggle follow button when clicked', async ({ page }) => {
    const followButton = page.getByRole('button', { name: /follow/i }).first();
    
    // Initial state should be "Follow"
    await expect(followButton).toContainText(/follow/i);
    
    // Click to toggle
    await followButton.click();
    
    // Should change to "Following"
    await expect(followButton).toContainText(/following/i);
    
    // Click again to toggle back
    await followButton.click();
    await expect(followButton).toContainText(/follow/i);
  });

  test('should have proper styling and layout', async ({ page }) => {
    const profile = page.locator('[data-testid="user-profile"], .user-profile, [class*="UserProfile"]').first();
    
    // Check that component has some dimensions (is rendered)
    const boundingBox = await profile.boundingBox();
    expect(boundingBox).not.toBeNull();
    expect(boundingBox!.width).toBeGreaterThan(0);
    expect(boundingBox!.height).toBeGreaterThan(0);
  });

  test('should display avatar or placeholder', async ({ page }) => {
    // Check for image element (avatar)
    const avatar = page.locator('img').first();
    await expect(avatar).toBeVisible();
  });
});
