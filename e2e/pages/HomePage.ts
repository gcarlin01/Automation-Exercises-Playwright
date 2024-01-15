import { Page } from "@playwright/test";

export class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto("http://automationexercise.com");
  }

  async getLogo() {
    return this.page.getByAltText("Website for automation practice");
  }

  async signupLoginButton() {
    return this.page.getByText("Signup / Login");
  }
}
