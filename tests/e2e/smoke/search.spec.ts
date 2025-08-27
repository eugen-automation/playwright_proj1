import { test, expect } from '@playwright/test';
import { HomePage } from '../../../src/pages/HomePage';
import logger from '../../../src/utils/helpers/logger';

test.describe('Search Functionality', () => {
  test('should return results for a valid query', async ({ page }) => {
    const homePage = new HomePage(page);

    logger.info('Searching for "laptop"');
    await homePage.goto();
    await homePage.header.search('laptop');
    const count = await page.locator('.product-item').count();

    console.log(`${count} items were found on the page`);
    expect(count).toBeGreaterThan(0);
  });
});
