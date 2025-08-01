import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async goto() {
    await this.page.goto('https://www.emag.ro/user/login');
  }
  async login(email: string, password: string) {

    await this.page.getByRole('textbox', { name: 'Introdu adresa de email' }).fill(email);
    await this.page.getByRole('button', { name: 'Continuă' }).click();
    console.log(await this.isDisplayedCaptcha() );
    await this.page.evaluate(() => alert('Acesta este un popup!'));
    await this.page.getByRole('textbox', { name: 'Introdu parola contului tău' }).fill(password);
    await this.page.getByRole('button', { name: 'Continuă' }).click();
    
  }


  private async isDisplayedCaptcha(timeout = 5000): Promise<boolean> {
    const iframe = this.page.frameLocator('iframe[title="Conținutul principal al provocării hCaptcha"]');
    const captchaImg = iframe.getByRole('img', { name: /Provocare CAPTCHA bazată pe/i });
    return await captchaImg.isVisible({timeout: timeout}).catch(() => false);
  }
}
