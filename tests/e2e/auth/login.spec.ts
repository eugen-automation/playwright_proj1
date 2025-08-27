import { test } from '../../../fixtures/auth';
import { expect } from '@playwright/test';
import { LoginPage } from '../../../src/pages/LoginPage';
import logger from '../../../src/utils/helpers/logger';


test.describe('Login functionality', () => {
    test('login with registered user', async ({ page, registeredUser }) => {
        logger.info('Logging in with registered user');
        const loginPage = new LoginPage(page);
        await loginPage.goto();

        await loginPage.login(registeredUser.email, registeredUser.password);
        expect(await loginPage.isLoggedIn()).toBeTruthy();
    });

    test('negative login with with empty credentials', async ({ page, registeredUser }) => {
        logger.info('Logging in with invalid user');
        const loginPage = new LoginPage(page);
        await loginPage.goto();

        await loginPage.login("", "");
        expect(await loginPage.isLoggedIn()).not.toBeTruthy();
    });


})
