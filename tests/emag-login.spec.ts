import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login to eMAG', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('bapicex907@balincs.com', 'Aa123456');
  await expect(page).toHaveURL(/contul-meu/);
});
