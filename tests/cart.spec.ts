import { test, expect } from '@playwright/test';
import { ProductPage } from '../src/pages/ProductPage';
import logger from '../src/utils/logger';

test.describe('Cart Functionality', () => {
  test('should add product to cart', async ({ page }) => {
    const productPage = new ProductPage(page);
    logger.info('Navigating to product page');
    await productPage.goto('nopcommerce-demo-product');
    await productPage.productCard.addToCart();
    await expect(page.locator('.cart-qty')).not.toHaveText('0');
  });
});
