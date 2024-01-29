import { test, expect } from "@playwright/test";

test.describe.parallel("API Tests", () => {
  test("Test API to GET all products", async ({ request }) => {
    const response = await request.get(`/api/productsList`);
    expect(response.status()).toBe(200);
    const responseBody = JSON.parse(await response.text());
    expect(responseBody.products.length).toBeGreaterThan(30); // expect that products array has more than 30 items
  });

  test("Test API to POST to all products", async ({ request }) => {
    const response = await request.post(`/api/productsList`, {});
    const responseBody = JSON.parse(await response.text());
    expect(responseBody.responseCode).toEqual(405);
    expect(responseBody.message).toEqual(
      "This request method is not supported.",
    );
  });

  test("Test API to GET all brands list", async ({ request }) => {
    const response = await request.get(`/api/brandsList`);
    expect(response.status()).toBe(200);
    const responseBody = JSON.parse(await response.text());
    expect(responseBody.brands.length).toBeGreaterThan(10); // expect that brands array has more than 10 items
  });

  test("Test API to PUT to all brands list", async ({ request }) => {
    const response = await request.put(`/api/brandsList`, {});
    const responseBody = JSON.parse(await response.text());
    expect(responseBody.responseCode).toEqual(405);
    expect(responseBody.message).toEqual(
      "This request method is not supported.",
    );
  });

  test("Test API to POST to search product with a search_product request parameter", async ({
    request,
  }) => {
    const searchProduct = "top";
    const response = await request.post(
      `/api/searchProduct?search_product=${searchProduct}`,
    );
    expect(response.status()).toBe(200);
  });

  test("Test API to POST to search product without a search_product request parameter", async ({
    request,
  }) => {
    const response = await request.post(`/api/searchProduct`, {});
    expect(response.status()).toBe(200);
    const responseBody = JSON.parse(await response.text());
    expect(responseBody.responseCode).toEqual(400);
    expect(responseBody.message).toEqual(
      "Bad request, search_product parameter is missing in POST request.",
    );
  });
});
