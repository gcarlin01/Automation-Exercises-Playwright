import { test, expect } from "@playwright/test";

test.describe.parallel("GET and POST to all products", () => {
  test("GET productsList returns all products", async ({ request }) => {
    const response = await request.get(`/api/productsList`);
    expect(response.status()).toBe(200);
    const responseBody = JSON.parse(await response.text());
    expect(responseBody.products.length).toBeGreaterThan(30);
  });

  test("POST productsList returns unsupported method", async ({ request }) => {
    const response = await request.post(`/api/productsList`, {});
    const responseBody = JSON.parse(await response.text());
    expect(responseBody.responseCode).toEqual(405);
    expect(responseBody.message).toEqual(
      "This request method is not supported.",
    );
  });
});
