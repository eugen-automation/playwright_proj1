import { Page, Locator } from '@playwright/test';

export class HeaderComponent {
  readonly page: Page;
  readonly logo: Locator;
  readonly navigationMenu: Locator;
  readonly userProfile: Locator;
  readonly searchBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logo = page.locator('.header-logo');
    this.navigationMenu = page.locator('nav[role="navigation"]');
    this.userProfile = page.locator('.user-profile');
    this.searchBox = page.locator('input[placeholder="Search..."]');
  }

  async clickLogo() {
    await this.logo.click();
  }

  async search(term: string) {
    await this.searchBox.fill(term);
    await this.searchBox.press('Enter');
  }

  async navigateTo(menuItem: string) {
    await this.navigationMenu.getByText(menuItem).click();
  }
}