import { Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async goto() {
    await this.page.goto('https://www.emag.ro/');
  }
  async search(product: string) {
    await this.page.fill('input[placeholder="Caută produse, branduri și categorii"]', product);
    await this.page.press('input[placeholder="Caută produse, branduri și categorii"]', 'Enter');
  }
}
