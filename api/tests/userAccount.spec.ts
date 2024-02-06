import { expect, test } from "@playwright/test";
import { faker } from "@faker-js/faker";

test.describe("user account management", () => {
  let myUser;

  test("can create, read, update, and delete a user account", async ({
    request,
  }) => {
    const myUser = { name: faker.internet.email() };

    test.step("create a user", () => {
      // post to create a user
    });
    test.step("read the user", () => {
      // get the user
    });
    test.step("update the user", () => {
      // PUT to update the user
    });
    test.step("delete the user", () => {});
  });
});
