import { test, expect } from '@playwright/test';
import { ProductDetailsPage } from '../../../src/pages/ProductDetailsPage';
import logger from '../../../src/utils/helpers/logger';

test.describe('Product Page', () => {
  test('should load product details', async ({ page }) => {
    const productPage = new ProductDetailsPage(page);

    logger.info('Navigating to specific mobile phone product details page');
    await productPage.goto('samsung-galaxy-s24-256gb');

    await expect(productPage.productName).toBeVisible();
    await expect(productPage.productShortDescription).toBeVisible();
  });
});
