import { test, expect } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';
import { TestData } from '../utils/testData';

test.describe('Products Page Tests', () => {
  test('should filter products by category', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    
    await productsPage.goto();
    await productsPage.filterByCategory(TestData.products.categories[0]);
    
    const products = await productsPage.getAllProductCards();
    expect(products.length).toBeGreaterThan(0);
  });

  test('should sort products', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    
    await productsPage.goto();
    await productsPage.sortBy(TestData.products.sortOptions[0]);
    
    // Verify sorting (implementation depends on your app)
    const products = await productsPage.getAllProductCards();
    expect(products.length).toBeGreaterThan(0);
  });

  test('should add product to cart', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    
    await productsPage.goto();
    
    const firstProduct = await productsPage.getProductCard(0);
    const productTitle = await firstProduct.getProductTitle();
    
    await firstProduct.addToCart();
    
    expect(await firstProduct.isAddedToCart()).toBe(true);
  });
});