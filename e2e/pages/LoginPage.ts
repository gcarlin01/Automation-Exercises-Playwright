import { Page } from "@playwright/test";

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('http://automationexercise.com/login');
  }
    
async signupText() {
    return this.page.getByText('New User Signup!');
}

async signupName(name: string) {
    return this.page.fill('input[name="name"]', name);
}

async signupEmail(email: string) {
    return this.page.fill('input[data-qa="signup-email"]', email);
}

async signupButton() {
    return this.page.getByRole('button', { name: 'Signup' });
}

}