import { test as base } from '@playwright/test';
import * as userData from '../config/testData/registered-user.json';
import { HomePage } from '../src/pages/HomePage';
import { LoginPage} from '../src/pages/LoginPage';
import { ProductDetailsPage } from '../src/pages/ProductDetailsPage';
import {RegistrationPage} from '../src/pages/RegistrationPage';
import {ShoppingCartPage} from '../src/pages/ShoppingCartPage';
import { AuthUser} from '../src/types/types/login.type';


export const test = base.extend<{
  homePage: HomePage;
  loginPage: LoginPage;
  productDetailsPage: ProductDetailsPage;
  registrationPage: RegistrationPage;
  shoppingCartPage: ShoppingCartPage;
  registeredUser: AuthUser;
}>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  productDetailsPage: async ({ page }, use) => {
    await use(new ProductDetailsPage(page));
  },
  registrationPage: async ({ page }, use) => {
    await use(new RegistrationPage(page));
  },
  shoppingCartPage: async ({ page }, use) => {
    await use(new ShoppingCartPage(page));
  },
    registeredUser: async ({ }, use) => {
    await use(userData.registeredUser);
  }
});
