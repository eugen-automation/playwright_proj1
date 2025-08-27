import { Page } from '@playwright/test';


export class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

/**
 * Navigates to a specific page.
 * @param path The path to navigate to.
 */
  async goto(path: string) {
    await this.page.goto(path);
  }
  
/**
 * Waits for the page to load.
 */
  async waitForPageLoad() {
     // Basic DOM
    await this.page.waitForLoadState('domcontentloaded');
  }
}
