import { BasePage } from './BasePage';
import { HeaderComponent } from '../components/HeaderComponent';
import { Page, Locator } from '@playwright/test';

export class HomePage extends BasePage {
  readonly header: HeaderComponent;
  readonly heroSection: Locator;
  readonly featuredProducts: Locator;
  readonly newsletterSignup: Locator;

  constructor(page: Page) {
    super(page);
    this.header = new HeaderComponent(page);
    this.heroSection = page.locator('.hero-section');
    this.featuredProducts = page.locator('.featured-products');
    this.newsletterSignup = page.locator('#newsletter-form');
  }

  async goto() {
    await super.goto('/');
    await this.waitForPageLoad();
  }

  async isHeroVisible(): Promise<boolean> {
    return await this.heroSection.isVisible();
  }

  async getFeaturedProductsCount(): Promise<number> {
    return await this.featuredProducts.locator('.product-card').count();
  }

  async subscribeToNewsletter(email: string) {
    await this.newsletterSignup.locator('input[type="email"]').fill(email);
    await this.newsletterSignup.locator('button[type="submit"]').click();
  }
}