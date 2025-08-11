import { BasePage } from './BasePage';
import { Page } from '@playwright/test';
import { ProductCardComponent } from '../components/ProductCardComponent';

export class ProductPage extends BasePage {
  readonly productCard: ProductCardComponent;

  constructor(page: Page) {
    super(page);
    this.productCard = new ProductCardComponent(page);
  }

  async goto(productId: string) {
    await super.goto(`/product/${productId}`);
    await this.waitForPageLoad();
  }
}
