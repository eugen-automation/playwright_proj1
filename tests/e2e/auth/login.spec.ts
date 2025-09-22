import { test } from '../../../fixtures/fixtures';
import { expect } from '@playwright/test';
import logger from '../../../src/utils/helpers/logger';


test.describe('Login functionality', () => {
    test('login with registered user @smoke @regression', async ({ registeredUser, loginPage }) => {

        logger.info('Logging in with registered user');
        await loginPage.goto();

        await loginPage.login(registeredUser.email, registeredUser.password);
        expect(await loginPage.header.isLoggedIn()).toBeTruthy();
    });

    test('logout from site @smoke @regression', async ({ registeredUser, loginPage }) => {

        logger.info('Logging in with registered user');
        await loginPage.goto();

        // login
        await loginPage.login(registeredUser.email, registeredUser.password);
        expect(await loginPage.header.isLoggedIn()).toBeTruthy();

        // logout
        await loginPage.header.logout();
        expect(await loginPage.header.isLoggedIn()).not.toBeTruthy();
    });

    test('negative login with with empty credentials @regression', async ({ loginPage }) => {

        test.step('Navigate to login page and attempt login with empty credentials', async() => {
            logger.info('Logging in with invalid user');
            await loginPage.goto();

            await loginPage.login("", "");
            expect(await loginPage.header.isLoggedIn()).toBeTruthy();
        });

    });

})
