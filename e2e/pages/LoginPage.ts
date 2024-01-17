import { Page } from "@playwright/test";

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto("http://automationexercise.com/login");
  }

  async getSignupFormTitle() {
    return this.page.getByText("New User Signup!");
  }

  async fillSignupForm(name: string, email: string) {
    await this.page.fill('input[name="name"]', name);
    await this.page.fill('input[data-qa="signup-email"]', email);
  }

  async clickSignupButton() {
    const signupButton = this.page.getByRole("button", { name: "Signup" });

    await signupButton.click();
  }

  async confirmLoggedInAsName(name: string) {
    return this.page.getByText(`Logged in as ${name}`);
  }

  async clickDeleteAccountLink() {
    const deleteAccountLink = this.page.getByRole("link", {
      name: "Delete Account",
    });

    await deleteAccountLink.click();
  }

  async getAccountDeletedTitle() {
    return this.page.getByText("ACCOUNT DELETED!");
  }

  async clickContinueButtonAtAcctDeleted() {
    const continueButtonDelete = this.page.getByRole("link", {
      name: "Continue",
    });

    await continueButtonDelete.click();
  }
}
