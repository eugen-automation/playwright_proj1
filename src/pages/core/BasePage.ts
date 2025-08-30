import { Page } from '@playwright/test';
import { HeaderComponent } from '../../components/common/HeaderComponent';


export class BasePage {
  protected readonly page: Page;
  public header: HeaderComponent;

  constructor(page: Page) {
    this.page = page;
    this.header = new HeaderComponent(page);
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
