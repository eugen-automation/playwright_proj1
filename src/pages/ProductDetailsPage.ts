import { Page, Locator } from '@playwright/test';
import { BasePage } from './core/BasePage';
import { ProductCardComponent } from '../components/common/ProductCardComponent';


export class ProductDetailsPage extends BasePage {
  readonly productCard: ProductCardComponent;
  readonly productName: Locator;
  readonly productShortDescription: Locator;
  // readonly product

  constructor(page: Page) {
    super(page);
    this.productCard = new ProductCardComponent(page);
    this.productName = page.locator('.product-name');
    this.productShortDescription = page.locator('.short-description');
  }
}
