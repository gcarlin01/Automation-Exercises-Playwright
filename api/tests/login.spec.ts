import { test, expect } from "@playwright/test";
import { VerifyLoginApi } from "../utils/VerifyLoginApi";

test.describe.parallel("Verify Login API", () => {
  test("POST verifyLogin passing requested parameters returns the confirmation that the user exists", async ({
    request,
  }) => {
    const api = new VerifyLoginApi(request);
    const response = await api.PostWithParams("testUser@QA.com", "test1234");

    const expectedBody = {
      responseCode: 200,
      message: "User exists!",
    };
    expect(response.body).toEqual(expectedBody);
  });

  test("POST verifyLogin passing only password parameter returns bad request", async ({
    request,
  }) => {
    const api = new VerifyLoginApi(request);
    const response = await api.PostWithOnlyPasswordParam("test1234");

    const expectedBody = {
      responseCode: 400,
      message:
        "Bad request, email or password parameter is missing in POST request.",
    };
    expect(response.body).toEqual(expectedBody);
  });
});
