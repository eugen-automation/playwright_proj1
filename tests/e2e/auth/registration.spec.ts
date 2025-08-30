import { expect } from '@playwright/test';
import { test } from '../../../fixtures/fixtures';
import logger from '../../../src/utils/helpers/logger';


test.describe('Registration Functionality', () => {
    test('should register a new random user succesfully @smoke', async ({ registrationPage }) => {

        // Arrange - pregătește datele și condițiile pentru test
        logger.info('Registering a new random user');

        // Act - execută acțiunea care trebuie testată
        await registrationPage.goto();
        const registrationResult = await registrationPage.registerRandomUser();

        // Assert - verifică rezultatul
        expect(registrationResult.status).toBeTruthy();
    })
})

