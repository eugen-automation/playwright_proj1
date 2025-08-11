import { test, expect } from '@playwright/test';
import { ProductPage } from '../src/pages/ProductPage';
import logger from '../src/utils/logger';

test.describe('Product Page', () => {
  test('should load product details', async ({ page }) => {
    const productPage = new ProductPage(page);
    logger.info('Navigating to product page');
    await productPage.goto('nopcommerce-demo-product');
    await expect(page.locator('.product-essential')).toBeVisible();
  });
});
