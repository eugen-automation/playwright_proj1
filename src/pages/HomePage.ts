import { Page } from '@playwright/test';
import { BasePage } from './core/BasePage';
import { HeaderComponent } from '../components/common/HeaderComponent';


export class HomePage extends BasePage {
  readonly header: HeaderComponent;

  constructor(page: Page) {
    super(page);
    this.header = new HeaderComponent(page);
  }

  async goto() {
    await super.goto('/');
    await this.waitForPageLoad();
  }
}
