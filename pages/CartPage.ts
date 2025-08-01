import { Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async goto() {
    await this.page.goto('https://www.emag.ro/cart/products');
  }
  async getCartCount() {
    return this.page.locator('a[href*="cart"]').innerText();
  }
}
