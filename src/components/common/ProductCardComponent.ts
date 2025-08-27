import { Page, Locator } from '@playwright/test';

export class ProductCardComponent {
  readonly page: Page;
  readonly addToCartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartButton = page.locator('.product-box-add-to-cart-button');
  }
  
  /**
   * Adds the product to the shopping cart.
   */
  async addToCart() {
    await this.addToCartButton.first().click();
  }
}
