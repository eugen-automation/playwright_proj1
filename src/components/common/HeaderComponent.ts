import { Page, Locator } from '@playwright/test';

export class HeaderComponent {
  readonly page: Page;
  readonly headerContainer: Locator;
  readonly registerLink: Locator;
  readonly loginLink: Locator;
  readonly logoutLink: Locator;
  readonly wishListLink: Locator;
  readonly searchInput: Locator;
  readonly searchBtn: Locator;
  readonly cartButton: Locator;
  readonly logo: Locator;
  readonly currencyDropDown: Locator;
  readonly menuContainer: Locator;
  readonly menuComputersItem: Locator;
  readonly menuElectronicsItem: Locator;
  readonly menuApparelItem: Locator;
  readonly menuDigitalDownloadsItem: Locator;
  readonly menuBooksItem: Locator;
  readonly menuJeweleryItem: Locator;
  readonly menuGiftCardsItem: Locator;
  readonly successNotification: Locator

  constructor(page: Page) {
    this.page = page;
    this.headerContainer = page.locator('.header');
    this.registerLink = page.getByRole('link', { name: 'Register' });
    this.loginLink = page.getByRole('link', { name: 'Log in' });
    this.logoutLink = page.getByRole('link', { name: 'Log out' });
    this.wishListLink = page.getByText('Wishlist (')
    this.searchInput = page.getByRole('textbox', { name: 'Search store' })
    this.searchBtn = page.getByRole('button', { name: 'Search' })
    this.cartButton = page.getByText('Shopping cart (')
    this.logo = page.getByRole('link', { name: 'nopCommerce demo store' })
    this.currencyDropDown = page.getByLabel('Currency selector');
    this.menuContainer = page.locator('.header-menu')
    this.menuComputersItem = page.getByRole('link', { name: 'Computers' })
    this.menuElectronicsItem = page.locator('a[href="/electronics"]').first()
    this.menuApparelItem = page.getByRole('link', { name: 'Apparel' }).first()
    this.menuDigitalDownloadsItem = page.getByRole('link', { name: 'Digital downloads' }).first()
    this.menuBooksItem = page.getByRole('link', { name: 'Books' })
    this.menuJeweleryItem = page.getByRole('link', { name: 'Jewelry' })
    this.menuGiftCardsItem = page.getByRole('link', { name: 'Gift cards' })
    this.successNotification = page.getByText('The product has been added to')
  }
/**
 * Searches for a product in the store
 * @param text The search query
 */
  async search(text: string) {
    await this.searchInput.fill(text);
    await this.searchBtn.click();
  }
/**
 * Opens the shopping cart
 */
  async openCart(): Promise<void> {
    await this.cartButton.click();
  }
/**
 * Checks if the user is logged in
 * @returns True if the user is logged in, false otherwise
 */
  async isLoggedIn(): Promise<boolean> {
    return await this.logoutLink.isVisible();
  }
/**
 * Logs out the user
 */
  async logout(): Promise<void> {
    await this.logoutLink.click();
  }
  /**
   * Checks if the success notification is displayed
   * @returns True if the success notification is displayed, false otherwise
   */
  async isSuccessBarDisplayed(): Promise<boolean> {
    return await this.successNotification.isVisible();
  }
}
