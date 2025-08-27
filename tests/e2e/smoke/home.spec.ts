import { test, expect } from '@playwright/test';
import { HomePage } from '../../../src/pages/HomePage';
import logger from '../../../src/utils/helpers/logger';

test.describe('Home Page', () => {
  test('should load and display header', async ({ page }) => {
    const homePage = new HomePage(page);
    logger.info('Navigating to home page');
    await homePage.goto();
    await expect(homePage.header.headerContainer).toBeVisible();
  });

  test('should display upper-header elements', async ({ page }) => {
    const homePage = new HomePage(page);
    logger.info('Navigating to home page');
    await homePage.goto();

    logger.info('Checking upper-header elements');
    const elementsToCheck = {
      dropdown: homePage.header.currencyDropDown,
      register: homePage.header.registerLink,
      login: homePage.header.loginLink,
      wishlist: homePage.header.wishListLink,
      shoppingCart: homePage.header.cartButton
    };

    for (const [name, locator] of Object.entries(elementsToCheck)) {
      console.log(`Checking visibility for ${name}`);
      await expect(locator, `${name} should be visible`).toBeVisible();
    }
  });

  test('should display lower-header elements', async ({ page }) => {
    const homePage = new HomePage(page);
    logger.info('Navigating to home page');
    await homePage.goto();

    logger.info('Checking lower-header elements');
    const elementsToCheck = {
      logo: homePage.header.logo,
      searchInput: homePage.header.searchInput,
      searchButton: homePage.header.searchBtn
    };

    for (const [name, locator] of Object.entries(elementsToCheck)) {
      console.log(`Checking visibility for ${name}`);
      await expect(locator, `${name} should be visible`).toBeVisible();
    }
  });

  test('should display menu-header elements', async ({ page }) => {
    const homePage = new HomePage(page);
    logger.info('Navigating to home page');
    await homePage.goto();

    logger.info('Checking menu-header elements');
    const elementsToCheck = {
      menuContainer: homePage.header.menuContainer,
      computers: homePage.header.menuComputersItem,
      electronics: homePage.header.menuElectronicsItem,
      apparel: homePage.header.menuApparelItem,
      digitalDownloads: homePage.header.menuDigitalDownloadsItem,
      books: homePage.header.menuBooksItem,
      jewelery: homePage.header.menuJeweleryItem,
      giftCards: homePage.header.menuGiftCardsItem
    };

    for (const [name, locator] of Object.entries(elementsToCheck)) {
      console.log(`Checking visibility for ${name}`);
      await expect(locator, `${name} should be visible`).toBeVisible();
    }
  });
});
