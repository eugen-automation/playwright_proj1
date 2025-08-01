import { Page } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async addToCart() {
    await this.page.click('button[data-testid="add-to-cart-button"]');
  }
}
