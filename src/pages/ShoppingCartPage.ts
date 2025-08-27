import { Page, Locator } from '@playwright/test';
import { BasePage } from './core/BasePage';
import { HeaderComponent } from '../components/common/HeaderComponent';


export class ShoppingCartPage extends BasePage {
  readonly header: HeaderComponent;
  readonly cartItems: Locator;
  readonly totalPrice: Locator;
  readonly checkoutBtn: Locator;
  readonly continueShoppingBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.header = new HeaderComponent(page);
    this.cartItems = page.locator('.cart-items');
    this.totalPrice = page.locator('.total-price');
    this.checkoutBtn = page.locator('button[data-testid="checkout"]');
    this.continueShoppingBtn = page.locator('button[data-testid="continue-shopping"]');
  }

  /**
   * Navigates to the shopping cart page.
   */
  async goto() {
    await super.goto('/cart');
    await super.waitForPageLoad();
  }

  /**
   * Gets the count of items in the shopping cart.
   * @returns The number of items in the cart.
   */
  async getCartItemsCount(): Promise<number> {
    return await this.cartItems.locator('.cart-item').count();
  }

  /**
   * Gets the total price of items in the shopping cart.
   * @returns The total price as a string.
   */
  async getTotalPrice(): Promise<string> {
    return await this.totalPrice.textContent() || '';
  }

  /**
   * Removes an item from the shopping cart.
   * @param itemIndex The index of the item to remove.
   */
  async removeItem(itemIndex: number) {
    await this.cartItems
      .locator('.cart-item')
      .nth(itemIndex)
      .locator('button[data-testid="remove"]')
      .click();
  }

  /**
   * Updates the quantity of an item in the shopping cart.
   * @param itemIndex The index of the item to update.
   * @param quantity The new quantity.
   */
  async updateQuantity(itemIndex: number, quantity: number) {
    const quantityInput = this.cartItems
      .locator('.cart-item')
      .nth(itemIndex)
      .locator('input[data-testid="quantity"]');
    await quantityInput.clear();
    await quantityInput.fill(quantity.toString());
    await quantityInput.press('Tab'); // Trigger change event
  }

  /**
   * Proceeds to the checkout page.
   */
  async proceedToCheckout() {
    await this.checkoutBtn.click();
  }
}
