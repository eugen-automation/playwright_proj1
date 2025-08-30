import { expect } from '@playwright/test';
import { test } from '../../../fixtures/fixtures';
import logger from '../../../src/utils/helpers/logger';

test.describe('Product Page', () => {
  test('should load product details @smoke', async ({ productDetailsPage }) => {

    logger.info('Navigating to specific mobile phone product details page');
    await productDetailsPage.goto('samsung-galaxy-s24-256gb');

    await expect(productDetailsPage.productName).toBeVisible();
    await expect(productDetailsPage.productShortDescription).toBeVisible();
  });
});
