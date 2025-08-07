import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Home Page Tests', () => {
  test('should display hero section and featured products', async ({ page }) => {
    const homePage = new HomePage(page);
    
    await homePage.goto();
    
    expect(await homePage.isHeroVisible()).toBe(true);
    expect(await homePage.getFeaturedProductsCount()).toBeGreaterThan(0);
  });

  test('should allow newsletter subscription', async ({ page }) => {
    const homePage = new HomePage(page);
    
    await homePage.goto();
    await homePage.subscribeToNewsletter('test@example.com');
    
    // Verify subscription success (adjust based on your app's behavior)
    await expect(page.locator('.success-message')).toBeVisible();
  });

  test('should navigate through header menu', async ({ page }) => {
    const homePage = new HomePage(page);
    
    await homePage.goto();
    await homePage.header.navigateTo('Products');
    
    expect(page.url()).toContain('/products');
  });
});