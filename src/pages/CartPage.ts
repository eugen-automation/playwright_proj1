import { BasePage } from './BasePage';
import { HeaderComponent } from '../components/common/HeaderComponent';
import { Page, Locator } from '@playwright/test';

export class CartPage extends BasePage {
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

  async goto() {
    await super.goto('/cart');
    await this.waitForPageLoad();
  }

  async getCartItemsCount(): Promise<number> {
    return await this.cartItems.locator('.cart-item').count();
  }

  async getTotalPrice(): Promise<string> {
    return await this.totalPrice.textContent() || '';
  }

  async removeItem(itemIndex: number) {
    await this.cartItems
      .locator('.cart-item')
      .nth(itemIndex)
      .locator('button[data-testid="remove"]')
      .click();
  }

  async updateQuantity(itemIndex: number, quantity: number) {
    const quantityInput = this.cartItems
      .locator('.cart-item')
      .nth(itemIndex)
      .locator('input[data-testid="quantity"]');
    await quantityInput.clear();
    await quantityInput.fill(quantity.toString());
    await quantityInput.press('Tab'); // Trigger change event
  }

  async proceedToCheckout() {
    await this.checkoutBtn.click();
  }
}
