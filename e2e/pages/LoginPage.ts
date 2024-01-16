import { Page } from "@playwright/test";

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto("http://automationexercise.com/login");
  }

  async signupText() {
    return this.page.getByText("New User Signup!");
  }

  async signupNameAndEmail(name: string, email: string) {
    await this.page.fill('input[name="name"]', name);
    await this.page.fill('input[data-qa="signup-email"]', email);
  }

  async clickSignupButton() {
    const signupButton = this.page.getByRole("button", { name: "Signup" });

    await signupButton.click();
  }
}
