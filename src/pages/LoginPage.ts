import { Page, Locator } from '@playwright/test';
import { BasePage } from './core/BasePage';


export class LoginPage extends BasePage {
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly rememberMeCheckbox: Locator;
    readonly forgotPasswordLink: Locator;
    readonly loginButton: Locator;
    readonly logoutLink: Locator;

    constructor(page: Page) {
        super(page);
        this.emailInput = this.page.getByRole('textbox', { name: 'Email:' });
        this.passwordInput = this.page.getByRole('textbox', { name: 'Password:' });
        this.rememberMeCheckbox = this.page.getByRole('checkbox', { name: 'Remember me?' });
        this.forgotPasswordLink = this.page.getByRole('link', { name: 'Forgot password?' });
        this.loginButton = this.page.getByRole('button', { name: 'Log in' })
        this.logoutLink = this.page.getByRole('link', { name: 'Log out' });
    }

    /**
     * Logs in a user with the provided email and password
     * @param emailValue The email of the user
     * @param passwordValue The password of the user
     */
    async login(emailValue: string, passwordValue: string): Promise<void> {
        await this.emailInput.fill(emailValue);
        await this.passwordInput.fill(passwordValue);
        await this.loginButton.click();
    }

    /**
     * Navigates to the login page
     */
    async goto(): Promise<void> {
        await super.goto('/login');
        await super.waitForPageLoad();
    }

    /**
     * Checks if the user is logged in
     * @returns A promise that resolves to a boolean indicating whether the user is logged in
     */
    async isLoggedIn(): Promise<boolean> {
        // Check if the user is logged in by verifying the presence of a logout button 
        return await this.logoutLink.isVisible();
    }

}