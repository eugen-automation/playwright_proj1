import { Page, Locator } from '@playwright/test';

export class HeaderComponent {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly cartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.locator('input[name="q"]');
    this.cartButton = page.locator('.cart-label');
  }

  async search(text: string) {
    await this.searchInput.fill(text);
    await this.searchInput.press('Enter');
  }

  async openCart() {
    await this.cartButton.click();
  }
}
