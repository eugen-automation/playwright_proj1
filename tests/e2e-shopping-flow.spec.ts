import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';

test.describe('E2E Shopping Flow', () => {
  test('complete shopping journey', async ({ page }) => {
    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    // Start from home page
    await homePage.goto();
    expect(await homePage.isHeroVisible()).toBe(true);

    // Navigate to products
    await homePage.header.navigateTo('Products');
    expect(page.url()).toContain('/products');

    // Filter and add product to cart
    await productsPage.filterByCategory('Electronics');
    const firstProduct = await productsPage.getProductCard(0);
    const productTitle = await firstProduct.getProductTitle();
    
    await firstProduct.addToCart();
    expect(await firstProduct.isAddedToCart()).toBe(true);

    // Go to cart and verify
    await cartPage.goto();
    expect(await cartPage.getCartItemsCount()).toBe(1);
    
    const totalPrice = await cartPage.getTotalPrice();
    expect(totalPrice).not.toBe('$0.00');
  });
});