import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';

test('Add product to cart on eMAG', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.search('laptop');
  await page.click('a[data-zone="title"]'); // Click first product
  const productPage = new ProductPage(page);
  await productPage.addToCart();
  await expect(page.locator('a[href*="cart"]')).toContainText('1');
});
