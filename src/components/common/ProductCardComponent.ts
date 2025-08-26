import { Page, Locator } from '@playwright/test';

export class ProductCardComponent {
  readonly page: Page;
  readonly addToCartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartButton = page.locator('.product-box-add-to-cart-button');
  }

  async addToCart() {
    await this.addToCartButton.first().click();
  }
}
