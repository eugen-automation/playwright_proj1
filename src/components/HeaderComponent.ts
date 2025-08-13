import { Page, Locator } from '@playwright/test';

export class HeaderComponent {
  readonly page: Page;
  readonly registerLink: Locator;
  readonly loginLink: Locator;
  readonly wishListLink: Locator;
  readonly searchInput: Locator;
  readonly searchBtn: Locator;
  readonly cartButton: Locator;
  readonly logo: Locator;
  readonly currencyDropDown: Locator;



  constructor(page: Page) {
    this.page = page;
    this.registerLink = page.getByRole('link', { name: 'Register' });
    this.loginLink = page.getByRole('link', { name: 'Log in' });
    this.wishListLink = page.getByRole('link', { name: 'Wishlist (0)' })
    this.searchInput = page.getByRole('textbox', { name: 'Search store' })
    this.searchBtn = page.getByRole('button', { name: 'Search' })
    this.cartButton = page.getByRole('link', { name: 'Shopping cart' })
    this.logo = page.getByRole('link', { name: 'nopCommerce demo store' })
    this.currencyDropDown = page.getByLabel('Currency selector');
  }

  async search(text: string) {
    await this.searchInput.fill(text);
    await this.searchBtn.click();
  }

  async openCart() {
    await this.cartButton.click();
  }
}
