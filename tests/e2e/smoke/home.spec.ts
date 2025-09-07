import { expect } from '@playwright/test';
import { test } from '../../../fixtures/fixtures';
import logger from '../../../src/utils/helpers/logger';
import defineConfig from '../../../playwright.config'


// test.describe.configure({ mode: 'parallel' });

test.describe('Home Page', () => {

  test('should load and display header element', async ({ homePage }) => {
  // console.log(defineConfig.workers)
    logger.info('Navigating to home page');
    await homePage.goto();
    await expect(homePage.header.headerContainer).toBeVisible();
  });

  // test using Area snapshots
  test('should display upper-header elements', async ({ page, homePage }) => {

    logger.info('Navigating to home page');
    await homePage.goto();

    logger.info('Checking upper-header elements');
    // const elementsToCheck = {
    //   dropdown: homePage.header.currencyDropDown,
    //   register: homePage.header.registerLink,
    //   login: homePage.header.loginLink,
    //   wishlist: homePage.header.wishListLink,
    //   shoppingCart: homePage.header.cartButton
    // };

    // for (const [name, locator] of Object.entries(elementsToCheck)) {
    //   console.log(`Checking visibility for ${name}`);
    //   await expect(locator, `${name} should be visible`).toBeVisible();
    // }

    await expect(page.locator('body')).toMatchAriaSnapshot(`
      - combobox "Currency selector":
        - option "US Dollar" [selected]
        - option "Euro"
      - list:
        - listitem:
          - link "Register":
            - /url: /register?returnUrl=%2F
        - listitem:
          - link "Log in":
            - /url: /login?returnUrl=%2F
        - listitem:
          - link "Wishlist (0)":
            - /url: /wishlist
        - listitem:
          - link "Shopping cart (0)":
            - /url: /cart
      `);
  });

  test('should display lower-header elements', async ({ page, homePage }) => {

    logger.info('Navigating to home page');
    await homePage.goto();

    logger.info('Checking lower-header elements');

    await expect(page.locator('body')).toMatchAriaSnapshot(`
    - link "nopCommerce demo store":
      - /url: /
      - img "nopCommerce demo store"
    - textbox "Search store"
    - button "Search"
    `);
    // const elementsToCheck = {
    //   logo: homePage.header.logo,
    //   searchInput: homePage.header.searchInput,
    //   searchButton: homePage.header.searchBtn
    // };

    // for (const [name, locator] of Object.entries(elementsToCheck)) {
    //   console.log(`Checking visibility for ${name}`);
    //   await expect(locator, `${name} should be visible`).toBeVisible();
    // }
  });

  test('should display menu-header elements', async ({ page, homePage }) => {

    logger.info('Navigating to home page');
    await homePage.goto();

    logger.info('Checking menu-header elements');
    await expect(page.locator('body')).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link "Computers":
            - /url: /computers
        - listitem:
          - link "Electronics":
            - /url: /electronics
        - listitem:
          - link "Apparel":
            - /url: /apparel
        - listitem:
          - link "Digital downloads":
            - /url: /digital-downloads
        - listitem:
          - link "Books":
            - /url: /books
        - listitem:
          - link "Jewelry":
            - /url: /jewelry
        - listitem:
          - link "Gift Cards":
            - /url: /gift-cards
      `);



    // const elementsToCheck = {
    //   menuContainer: homePage.header.menuContainer,
    //   computers: homePage.header.menuComputersItem,
    //   electronics: homePage.header.menuElectronicsItem,
    //   apparel: homePage.header.menuApparelItem,
    //   digitalDownloads: homePage.header.menuDigitalDownloadsItem,
    //   books: homePage.header.menuBooksItem,
    //   jewelery: homePage.header.menuJeweleryItem,
    //   giftCards: homePage.header.menuGiftCardsItem
    // };

    // for (const [name, locator] of Object.entries(elementsToCheck)) {
    //   console.log(`Checking visibility for ${name}`);
    //   await expect(locator, `${name} should be visible`).toBeVisible();
    // }
  });

  test('should display Intro under the banner', async ({ page, homePage }) => {

    logger.info('Navigating to home page');
    await homePage.goto();

    await expect(page.locator('#main')).toMatchAriaSnapshot(`
    - heading "Welcome to our store" [level=2]
    - paragraph: Online shopping is the process consumers go through to purchase products or services over the Internet. You can edit this in the admin site.
    - paragraph:
      - text: If you have questions, see the
      - link "Documentation":
        - /url: http://docs.nopcommerce.com/
      - text: ", or post in the"
      - link "Forums":
        - /url: https://www.nopcommerce.com/boards/
      - text: at
      - link "nopCommerce.com":
        - /url: https://www.nopcommerce.com
    `);
  })

  test('should display Intro categories', async ({ homePage, page }) => {

    logger.info('Navigating to home page');
    await homePage.goto();

    await expect(page.locator('#main')).toMatchAriaSnapshot(`
    - heading "Electronics" [level=2]:
      - link "Electronics":
        - /url: /electronics
    - link "Picture for category Electronics":
      - /url: /electronics
      - img "Picture for category Electronics"
    - heading "Apparel" [level=2]:
      - link "Apparel":
        - /url: /apparel
    - link "Picture for category Apparel":
      - /url: /apparel
      - img "Picture for category Apparel"
    - heading "Digital downloads" [level=2]:
      - link "Digital downloads":
        - /url: /digital-downloads
    - link "Picture for category Digital downloads":
      - /url: /digital-downloads
      - img "Picture for category Digital downloads"
    `);
  })

  test('should display Feature products', async ({ homePage, page }) => {

    logger.info('Navigating to home page');
    await homePage.goto();

    await expect(page.locator('#main')).toMatchAriaSnapshot(`
    - strong: Featured products
    - link "Picture of Build your own computer":
      - /url: /build-your-own-computer
      - img "Picture of Build your own computer"
    - heading "Build your own computer" [level=2]:
      - link "Build your own computer":
        - /url: /build-your-own-computer
    - text: /\\$\\d+,\\d+\\.\\d+/
    - button "Add to cart"
    - button "Add to compare list"
    - button "Add to wishlist"
    - link "Picture of Apple MacBook Pro":
      - /url: /apple-macbook-pro
      - img "Picture of Apple MacBook Pro"
    - heading "Apple MacBook Pro" [level=2]:
      - link "Apple MacBook Pro":
        - /url: /apple-macbook-pro
    - text: /\\$\\d+,\\d+\\.\\d+/
    - button "Add to cart"
    - button "Add to compare list"
    - button "Add to wishlist"
    - link "Picture of HTC smartphone":
      - /url: /htc-smartphone
      - img "Picture of HTC smartphone"
    - heading "HTC smartphone" [level=2]:
      - link "HTC smartphone":
        - /url: /htc-smartphone
    - text: /\\$\\d+\\.\\d+/
    - button "Add to cart"
    - button "Add to compare list"
    - button "Add to wishlist"
    - link /Picture of \\$\\d+ Virtual Gift Card/:
      - /url: /25-virtual-gift-card
      - img /Picture of \\$\\d+ Virtual Gift Card/
    - heading /\\$\\d+ Virtual Gift Card/ [level=2]:
      - link /\\$\\d+ Virtual Gift Card/:
        - /url: /25-virtual-gift-card
    - text: /\\$\\d+\\.\\d+/
    - button "Add to cart"
    - button "Add to compare list"
    - button "Add to wishlist"
    `);
    await page.locator('div').filter({ hasText: 'Skip navigationUS' }).first().click();
  });

  test('should display News', async ({ page, homePage }) => {

    logger.info('Navigating to home page');
    await homePage.goto();

    await expect(page.locator('#main')).toMatchAriaSnapshot(`- strong: News`);


    await expect(page.locator('#main')).toMatchAriaSnapshot(`
    - link "New online store is open!":
      - /url: /new-online-store-is-open
    - text: /-Tuesday, February \\d+, \\d+ The new nopCommerce store is open now! We are very excited to offer our new range of products\\. We will be constantly adding to our range so please register on our site\\./
    - link "details":
      - /url: /new-online-store-is-open
    - link "nopCommerce new release!":
      - /url: /nopcommerce-new-release
    - text: /-Tuesday, February \\d+, \\d+ nopCommerce includes everything you need to begin your e-commerce online store\\. We have thought of everything and it's all included! nopCommerce is a fully customizable shopping cart/
    - link "details":
      - /url: /nopcommerce-new-release
    - link "About nopCommerce":
      - /url: /about-nopcommerce
    - text: /-Tuesday, February \\d+, \\d+ It's stable and highly usable\\. From downloads to documentation, www\\.nopCommerce\\.com offers a comprehensive base of information, resources, and support to the nopCommerce community\\./
    - link "details":
      - /url: /about-nopcommerce
    - link "View News Archive":
      - /url: /news
    `);
  })

  test('should display Community poll', async ({ page, homePage }) => {

    logger.info('Navigating to home page');
    await homePage.goto();

    await expect(page.locator('#main')).toMatchAriaSnapshot(`
    - strong: Community poll
    - strong: Do you like nopCommerce?
    - list:
      - listitem:
        - radio "Excellent"
        - text: Excellent
      - listitem:
        - radio "Good"
        - text: Good
      - listitem:
        - radio "Poor"
        - text: Poor
      - listitem:
        - radio "Very bad"
        - text: Very bad
    - button "Vote"
    `);
  });

  test('should display Footer', async ({ page, homePage }) => {

    logger.info('Navigating to home page');
    await homePage.goto();


    await expect(page.locator('body')).toMatchAriaSnapshot(`
      - strong: Information
      - list:
        - listitem:
          - link "Sitemap":
            - /url: /sitemap
        - listitem:
          - link "Shipping & returns":
            - /url: /shipping-returns
        - listitem:
          - link "Privacy notice":
            - /url: /privacy-notice
        - listitem:
          - link "Conditions of Use":
            - /url: /conditions-of-use
        - listitem:
          - link "About us":
            - /url: /about-us
        - listitem:
          - link "Contact us":
            - /url: /contactus
      - strong: Customer service
      - list:
        - listitem:
          - link "Search":
            - /url: /search
        - listitem:
          - link "News":
            - /url: /news
        - listitem:
          - link "Blog":
            - /url: /blog
        - listitem:
          - link "Recently viewed products":
            - /url: /recentlyviewedproducts
        - listitem:
          - link "Compare products list":
            - /url: /compareproducts
        - listitem:
          - link "New products":
            - /url: /newproducts
      - strong: My account
      - list:
        - listitem:
          - link "My account":
            - /url: /customer/info
        - listitem:
          - link "Orders":
            - /url: /order/history
        - listitem:
          - link "Addresses":
            - /url: /customer/addresses
        - listitem:
          - link "Shopping cart":
            - /url: /cart
        - listitem:
          - link "Wishlist":
            - /url: /wishlist
        - listitem:
          - link "Apply for vendor account":
            - /url: /vendor/apply
      - strong: Follow us
      - list:
        - listitem:
          - link "Facebook":
            - /url: https://www.facebook.com/nopCommerce
        - listitem:
          - link "Twitter":
            - /url: https://twitter.com/nopCommerce
        - listitem:
          - link "RSS":
            - /url: /news/rss/1
        - listitem:
          - link "YouTube":
            - /url: https://www.youtube.com/user/nopCommerce
        - listitem:
          - link "Instagram":
            - /url: https://www.instagram.com/nopcommerce_official
      - strong: Newsletter
      - textbox "Sign up for our newsletter"
      - button "Subscribe"
      `);


    await expect(page.locator('body')).toMatchAriaSnapshot(`
        - text: /Copyright © \\d+ nopCommerce demo store\\. All rights reserved\\. Powered by/
        - link "nopCommerce":
          - /url: https://www.nopcommerce.com/
        `);
  });

});