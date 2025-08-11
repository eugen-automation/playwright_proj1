import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/HomePage';
import logger from '../src/utils/logger';

test.describe('Home Page', () => {
  test('should load and display header', async ({ page }) => {
    const homePage = new HomePage(page);
    logger.info('Navigating to home page');
    await homePage.goto();
    await expect(page.locator('.header')).toBeVisible();
  });
});
