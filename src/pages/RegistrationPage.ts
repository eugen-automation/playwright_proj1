import { faker } from '@faker-js/faker';
import { Page, Locator } from '@playwright/test';
import { BasePage } from './core/BasePage';
import { saveUserCredentials } from '../utils/helpers/jsonSaveUserCredentials';
import { IRegistrationResult } from '../types/interfaces/registration.interface';


export class RegistrationPage extends BasePage {
    readonly pageTitle: Locator;
    readonly maleRadio: Locator;
    readonly femaleRadio: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly emailInput: Locator;
    readonly companyNameInput: Locator;
    readonly newsletterCheckbox: Locator;
    readonly passwordInput: Locator;
    readonly confirmPasswordInput: Locator;
    readonly submitButton: Locator;
    readonly successMessage: Locator;



    constructor(page: Page) {
        super(page)
        this.pageTitle = page.getByRole('heading', { name: 'Register' });
        this.maleRadio = page.getByRole('radio', { name: 'Male', exact: true });
        this.femaleRadio = page.getByRole('radio', { name: 'Female' })
        this.firstNameInput = page.getByRole('textbox', { name: 'First name:' })
        this.lastNameInput = page.getByRole('textbox', { name: 'Last name:' })
        this.emailInput = page.getByRole('textbox', { name: 'Email:' })
        this.companyNameInput = page.getByRole('textbox', { name: 'Company name:' })
        this.newsletterCheckbox = page.getByRole('checkbox', { name: 'Newsletter:' })
        this.passwordInput = page.getByRole('textbox', { name: 'Password:', exact: true })
        this.confirmPasswordInput = page.getByRole('textbox', { name: 'Confirm password:' })
        this.submitButton = page.getByRole('button', { name: 'Register' })
        this.successMessage = page.getByText('Your registration completed')
    }

    /**
     * Navigates to the registration page.
     */
    async goto() {
        await super.goto('/register?returnUrl=%2F');
        await super.waitForPageLoad();
    }

    /**
     * Registers a random user.
     * @returns A promise that resolves to an object containing the registration status and user credentials.
     */
    async registerRandomUser(): Promise<IRegistrationResult> {

        try {
            // generate random user data
            const randomGender = faker.person.sex();
            console.log(`Generated random gender: ${randomGender}`);
            const randomFirstName = faker.person.firstName();
            console.log(`Generated random first name: ${randomFirstName}`);
            const randomLastName = faker.person.lastName();
            console.log(`Generated random last name: ${randomLastName}`);
            const randomEmail = faker.internet.email({ firstName: randomFirstName, lastName: randomLastName });
            console.log(`Generated random email: ${randomEmail}`);
            const randomCompanyName = faker.company.name();
            console.log(`Generated random company name: ${randomCompanyName}`);
            const randomPassword = faker.internet.password({ length: 10 });
            console.log(`Generated random password: ${randomPassword}`);

            // Fill required form fields
            await this.firstNameInput.fill(randomFirstName);
            await this.lastNameInput.fill(randomLastName);
            await this.emailInput.fill(randomEmail);
            await this.passwordInput.fill(randomPassword);
            await this.confirmPasswordInput.fill(randomPassword);

            // fill optional fields
            randomGender.toLocaleLowerCase() === 'male' ? await this.maleRadio.check() : await this.femaleRadio.check();
            await this.companyNameInput.fill(randomCompanyName);
            if (!faker.datatype.boolean()) {
                await this.newsletterCheckbox.uncheck();
            }
            // submit form
            await this.submitButton.click();

            const operationResult = await this.successMessage.isVisible({ timeout: 20000 });
            // if registration succeded, then save credentials into json file
            if (operationResult) {
                // save registered credentials into registered-user.json
                saveUserCredentials({ email: randomEmail, password: randomPassword });
            }

            return { status: operationResult, credentials: { email: randomEmail, password: randomPassword } };
        } catch (error) {
            console.error('Registration failed:', error);
            return {
                status: false,
                credentials: null,
                error: error
            };
        }
    }

    /**
     * Registers a user with the provided information.
     * @param firstName The first name of the user.
     * @param lastName The last name of the user.
     * @param email The email of the user.
     * @param password The password of the user.
     * @param gender The gender of the user.
     * @param companyName The company name of the user.
     * @param newsletter Whether the user wants to subscribe to the newsletter.
     * @returns A promise that resolves to an object containing the registered user's email and password.
     */
    async registerUser(
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        gender?: 'male' | 'female',
        companyName?: string,
        newsletter: boolean = true): Promise<IRegistrationResult> {

        try {
            // Fill required form fields
            await Promise.all([
                this.firstNameInput.fill(firstName),
                this.lastNameInput.fill(lastName),
                this.emailInput.fill(email),
                this.passwordInput.fill(password),
                this.confirmPasswordInput.fill(password)
            ]);

            // fill in optional fields
            if (gender) {
                gender === 'male' ? await this.maleRadio.check() : await this.femaleRadio.check()
            }
            if (companyName) {
                await this.companyNameInput.fill(companyName);
            }
            if (!newsletter) {
                await this.newsletterCheckbox.uncheck();
            }

            // submit the form
            await this.submitButton.click();

            const operationResult = await this.successMessage.isVisible();
            // if registration succeded, then save credentials into json file
            if (operationResult) {
                // save registered credentials into registered-user.json
                saveUserCredentials({ email: email, password: password });
            }

            return { status: operationResult, credentials: { email: email, password: password } };

        } catch (error) {
            console.error('Registration failed:', error);
            return {
                status: false,
                credentials: null,
                error: error
            };
        }
    }
}``