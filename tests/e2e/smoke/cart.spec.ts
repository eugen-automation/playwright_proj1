import { test, expect } from '@playwright/test';
import { ProductPage } from '../../../src/pages/ProductPage';
import logger from '../../../src/utils/helpers/logger';
import { HomePage } from '../../../src/pages/HomePage';

test.describe('Cart Functionality', () => {
  test('should add product to cart on Software page', async ({ page }) => {
    const productPage = new ProductPage(page);
    const homePage = new HomePage(page);
    logger.info('Navigating to Software products page');
    await productPage.goto('software');
    

    page.getByText('The product has been added to')

    
    await productPage.productCard.addToCart();
    await expect(homePage.header.cartButton).not.toHaveText('0');
    await expect(page.getByText('The product has been added to')).toBeVisible();
  });
});
