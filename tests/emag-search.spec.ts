import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('Search product on eMAG', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.search('laptop');
  await expect(page).toHaveURL(/search/);
});
