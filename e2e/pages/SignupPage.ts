import { Page } from "@playwright/test";

export class SignupPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto("http://automationexercise.com/signup");
  }

  async enterAccountInformationText() {
    return this.page.getByText("ENTER ACCOUNT INFORMATION");
  }

  async accountInfoCreation(name, email, password, dob) {
    await this.page.fill('input[name="name"]', name);
    await this.page.fill('input[data-qa="signup-email"]', email);
    await this.page.fill('input[data-qa="signup-password"]', password);
    await this.page.fill('input[data-qa="signup-dob"]', dob);
  }
}
// Fill details: Title, Name, Email, Password, Date of birth
