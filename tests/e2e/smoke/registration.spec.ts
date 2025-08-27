import {test, expect} from '@playwright/test';
import {RegistrationPage} from '../../../src/pages/RegistrationPage';
import logger from '../../../src/utils/helpers/logger';

test.describe('Registration Functionality', () => {
    test('should register a new random user succesfully', async ({ page }) => {
        logger.info('Registering a new random user');

        const registrationPage = new RegistrationPage(page)
        await registrationPage.goto();
        
        const registrationResult = await registrationPage.registerRandomUser();
        expect(registrationResult.status).toBeTruthy();
        console.log(`Registered user with email: ${registrationResult.credentials.email} and password: ${registrationResult.credentials.password}`);
        
    })
})

