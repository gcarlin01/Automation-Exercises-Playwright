import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { SignupPage } from "../pages/SignupPage";
import { CreateAccountPage } from "../pages/CreateAccountPage";
import { DeleteAccountPage } from "../pages/DeleteAccountPage";
import { usersData } from "../data/usersData";

test("can register a user", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();

  const homePageLogo = await homePage.getLogo();
  await expect(homePageLogo).toBeVisible();

  await homePage.clickSignupLoginButton();

  const loginPage = new LoginPage(page);
  const getSignupFormTitle = await loginPage.getSignupFormTitle();
  await expect(getSignupFormTitle).toBeVisible();

  await loginPage.fillSignupForm(usersData.name, usersData.email);

  await loginPage.clickSignupButton();

  const signupPage = new SignupPage(page);
  const getAccountInfoFormTitle = await signupPage.getAccountInfoFormTitle();
  await expect(getAccountInfoFormTitle).toBeVisible();

  const nameFromField = await signupPage.getValueFromNameField();
  expect(nameFromField).toEqual(usersData.name);

  const emailFromField = await signupPage.getValueFromEmailField();
  expect(emailFromField).toEqual(usersData.email);

  await signupPage.fillAccountInfoForm(usersData);
  await signupPage.fillAddressInfoForm(usersData);

  await signupPage.clickCreateAccountButton();

  const createAccountPage = new CreateAccountPage(page);
  const accountCreatedTitle = await createAccountPage.getPageTitle();
  await expect(accountCreatedTitle).toBeVisible();

  await createAccountPage.clickContinueButton();

  const loggedInText = await homePage.getLoggedInText();
  await expect(loggedInText).toHaveText(`Logged in as ${usersData.name}`);
  await expect(loggedInText).toBeVisible();

  await loginPage.clickDeleteAccountLink();

  const deleteAccountPage = new DeleteAccountPage(page);
  const accountDeletedTitle = await deleteAccountPage.getPageTitle();
  await expect(accountDeletedTitle).toBeVisible();

  await deleteAccountPage.clickContinueButton();
});

// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Signup / Login' button
// 5. Verify 'New User Signup!' is visible
// 6. Enter name and email address
// 7. Click 'Signup' button
// 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
// 9. Fill details: Title, Name, Email, Password, Date of birth
// 10. Select checkbox 'Sign up for our newsletter!'
// 11. Select checkbox 'Receive special offers from our partners!'
// 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
// 13. Click 'Create Account button'
// 14. Verify that 'ACCOUNT CREATED!' is visible
// 15. Click 'Continue' button
// 16. Verify that 'Logged in as username' is visible
// 17. Click 'Delete Account' button
// 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
