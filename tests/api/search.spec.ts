import { test, expect } from "@playwright/test";

test.describe.parallel("POST with and without request parameter", () => {
  test("POST searchProduct passing requested parameter returns the searched product list", async ({
    request,
  }) => {
    const response = await request.post(`/api/searchProduct`, {
      form: { search_product: "top" },
    });
    expect(response.status()).toBe(200);
    const responseBody = JSON.parse(await response.text());
    const firstProductName = responseBody.products[0].name;
    expect(firstProductName).toContain("Top");
  });

  test("POST searchProduct NOT passing requested parameter returns bad request", async ({
    request,
  }) => {
    const response = await request.post(`/api/searchProduct`, {});
    const responseBody = JSON.parse(await response.text());
    expect(responseBody.responseCode).toEqual(400);
    expect(responseBody.message).toEqual(
      "Bad request, search_product parameter is missing in POST request.",
    );
  });
});
