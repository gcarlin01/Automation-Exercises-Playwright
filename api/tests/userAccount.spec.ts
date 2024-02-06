import { expect, test } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { UserAccountApi } from "../client/UserAccountApi";

test.describe("user account management", () => {
  let myUser;

  test("can create, read, update, and delete a user account", async ({
    request,
  }) => {
    myUser = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      title: faker.person.prefix(),
      birth_day: faker.number.int({ min: 1, max: 28 }),
      birth_month: faker.number.int({ min: 1, max: 12 }),
      birth_year: faker.number.int({ min: 1900, max: 2010 }),
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      company: faker.company.name(),
      address1: faker.location.streetAddress(),
      address2: faker.location.secondaryAddress(),
      country: faker.location.country(),
      zipcode: faker.location.zipCode(),
      state: faker.location.state(),
      city: faker.location.city(),
      mobile_number: faker.phone.number(),
    };

    test.step("create a user", async () => {
      const api = new UserAccountApi(request);
      const response = await api.Post(myUser);
      console.log(myUser);
      expect(response.body).toEqual({
        responseCode: 201,
        message: "User created!",
      });
      // post to create a user
    });

    test.step("read the user", async () => {
      const api = new UserAccountApi(request);

      const response = await api.Get(myUser.email);
      console.log(response.body);

      expect(response.body.responseCode).toEqual(404);

      // get the user
    });
    test.step("update the user", async () => {
      const api = new UserAccountApi(request);

      const response = await api.Put(myUser);
      console.log(myUser);
      expect(response.body).toEqual({
        responseCode: 200,
        message: "User updated!",
      });
      // PUT to update the user
    });
    test.step("delete the user", async () => {
      const api = new UserAccountApi(request);

      const response = await api.Delete(myUser.email, myUser.password);
      console.log(myUser.email, myUser.password);
      expect(response.body).toEqual({
        responseCode: 200,
        message: "Account deleted!",
      });
    });
  });
});
