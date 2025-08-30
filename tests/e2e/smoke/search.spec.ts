import { expect } from '@playwright/test';
import { test } from '../../../fixtures/fixtures';
import logger from '../../../src/utils/helpers/logger';

test.describe('Search Functionality', () => {
  test.fixme('should return results for a valid query @smoke', async ({ homePage }) => {
    
    logger.info('Searching for "laptop"');
    await homePage.goto();
    await homePage.header.search('laptop');

    //! TODO: to be implemented in ProductListPage
    const count = await page.locator('.product-item').count();

    console.log(`${count} items were found on the page`);
    expect(count).toBeGreaterThan(0);
  });
});
