import { Page } from "@playwright/test";

export class SignupPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto("http://automationexercise.com/signup");
  }

  async getAccountInfoFormTitle() {
    return this.page.getByText("ENTER ACCOUNT INFORMATION");
  }

  async nameAutoFill() {
    return this.page.getByLabel("Name *", { exact: true });
  }

  async emailAutoFill() {
    return this.page.getByLabel("Email *", { exact: true });
  }

  async accountInfoCreation(usersData: any) {
    // Checking Mr. or Mrs.
    await this.page.check('input[id="id_gender1"]');
    await this.page.fill('input[data-qa="password"]', usersData.password);

    // Selecting DOB
    await this.page.locator("#days").selectOption(usersData.dob.day);
    await this.page.locator("#months").selectOption(usersData.dob.month);
    await this.page.locator("#years").selectOption(usersData.dob.year);

    // Selecting checkboxes
    await this.page.check('input[name="newsletter"]');
    await this.page.check('input[name="optin"]');

    // Fill additional usersData
    await this.page.fill('input[name="first_name"]', usersData.firstName);
    await this.page.fill('input[name="last_name"]', usersData.lastName);
    await this.page.fill('input[name="company"]', usersData.company);
    await this.page.fill('input[name="address1"]', usersData.address);
    await this.page.fill('input[name="address2"]', usersData.address2);
    await this.page.locator("#country").selectOption(usersData.country);
    await this.page.fill('input[name="state"]', usersData.state);
    await this.page.fill('input[name="city"]', usersData.city);
    await this.page.fill('input[name="zipcode"]', usersData.zipcode);
    await this.page.fill('input[name="mobile_number"]', usersData.mobileNumber);
  }
}
