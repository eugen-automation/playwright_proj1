import { expect } from '@playwright/test';
import { test } from '../../../fixtures/fixtures';
import logger from '../../../src/utils/helpers/logger';



test.describe('Cart Functionality', () => {
  test('should add product to cart on Software page @smoke', async ({ homePage, productDetailsPage }) => {

    logger.info('Navigating to Software products page');
    await productDetailsPage.goto('software');

    await productDetailsPage.productCard.addToCart();
    await expect(homePage.header.cartButton).not.toHaveText('0');
    await expect(homePage.header.isSuccessBarDisplayed()).toBeTruthy();
  });
});
