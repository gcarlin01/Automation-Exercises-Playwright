import { test, expect } from "@playwright/test";

test.describe.parallel("API Tests", () => {
  test("Test API to GET all products", async ({ request }) => {
    const response = await request.get(`/api/productsList`);
    expect(response.status()).toBe(200);
    const responseBody = JSON.parse(await response.text());
    expect(responseBody.products.length).toBeGreaterThan(30); // expecti that products array has more than 30 items
  });

  test("Test API to POST to all products", async ({ request }) => {
    const response = await request.post(`/api/productsList`);
    const responseBody = JSON.parse(await response.text());
    expect(responseBody.responseCode).toEqual(405);
    expect(responseBody.message).toEqual(
      "This request method is not supported.",
    );
  });
});
