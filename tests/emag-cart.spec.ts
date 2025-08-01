import { test, expect } from '@playwright/test';
import { CartPage } from '../pages/CartPage';

test('View cart on eMAG', async ({ page }) => {
  const cartPage = new CartPage(page);
  await cartPage.goto();
  const count = await cartPage.getCartCount();
  expect(Number(count)).toBeGreaterThanOrEqual(0);
});
