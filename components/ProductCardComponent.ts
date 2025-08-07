import { Page, Locator } from '@playwright/test';

export class ProductCardComponent {
  readonly container: Locator;
  readonly title: Locator;
  readonly price: Locator;
  readonly image: Locator;
  readonly addToCartBtn: Locator;
  readonly favoriteBtn: Locator;

  constructor(page: Page, containerSelector: string) {
    this.container = page.locator(containerSelector);
    this.title = this.container.locator('.product-title');
    this.price = this.container.locator('.product-price');
    this.image = this.container.locator('.product-image img');
    this.addToCartBtn = this.container.locator('button[data-testid="add-to-cart"]');
    this.favoriteBtn = this.container.locator('button[data-testid="favorite"]');
  }

  async getProductTitle(): Promise<string> {
    return await this.title.textContent() || '';
  }

  async getProductPrice(): Promise<string> {
    return await this.price.textContent() || '';
  }

  async addToCart() {
    await this.addToCartBtn.click();
  }

  async addToFavorites() {
    await this.favoriteBtn.click();
  }

  async isAddedToCart(): Promise<boolean> {
    return await this.addToCartBtn.getAttribute('data-state') === 'added';
  }
}