import { BasePage } from './BasePage';
import { HeaderComponent } from '../components/HeaderComponent';
import { ProductCardComponent } from '../components/ProductCardComponent';
import { Page, Locator } from '@playwright/test';

export class ProductsPage extends BasePage {
  readonly header: HeaderComponent;
  readonly filterSidebar: Locator;
  readonly sortDropdown: Locator;
  readonly productGrid: Locator;
  readonly paginationControls: Locator;

  constructor(page: Page) {
    super(page);
    this.header = new HeaderComponent(page);
    this.filterSidebar = page.locator('.filters-sidebar');
    this.sortDropdown = page.locator('select[data-testid="sort-dropdown"]');
    this.productGrid = page.locator('.products-grid');
    this.paginationControls = page.locator('.pagination');
  }

  async goto() {
    await super.goto('/products');
    await this.waitForPageLoad();
  }

  async filterByCategory(category: string) {
    await this.filterSidebar.locator(`input[value="${category}"]`).check();
    await this.waitForPageLoad();
  }

  async sortBy(option: string) {
    await this.sortDropdown.selectOption(option);
    await this.waitForPageLoad();
  }

  async getProductCard(index: number): Promise<ProductCardComponent> {
    return new ProductCardComponent(this.page, `.product-card:nth-child(${index + 1})`);
  }

  async getAllProductCards(): Promise<ProductCardComponent[]> {
    const count = await this.productGrid.locator('.product-card').count();
    const cards: ProductCardComponent[] = [];
    
    for (let i = 0; i < count; i++) {
      cards.push(await this.getProductCard(i));
    }
    
    return cards;
  }

  async goToNextPage() {
    await this.paginationControls.locator('button[aria-label="Next page"]').click();
    await this.waitForPageLoad();
  }
}
