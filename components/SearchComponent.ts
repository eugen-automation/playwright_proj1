import { Page } from '@playwright/test';

export class SearchComponent {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async search(product: string) {
    await this.page.fill('input[placeholder="Caută produse, branduri și categorii"]', product);
    await this.page.press('input[placeholder="Caută produse, branduri și categorii"]', 'Enter');
  }
}
