import { Page } from '@playwright/test';


export class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(path: string) {
    await this.page.goto(path);
  }

  async waitForPageLoad() {
     // Basic DOM
    await this.page.waitForLoadState('domcontentloaded');
  }
}
