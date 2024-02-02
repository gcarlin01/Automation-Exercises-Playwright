import { test, expect } from "@playwright/test";
import { ProductsApi } from "../utils/ProductsApi";

test.describe.parallel("products api", () => {
  test("GET productsList returns all products", async ({ request }) => {
    const api = new ProductsApi(request);
    const response = await api.Get();

    expect(response.status).toBe(200);
    expect(response.body.products.length).toBeGreaterThan(30);
  });

  test("POST productsList returns unsupported method", async ({ request }) => {
    const api = new ProductsApi(request);
    const response = await api.Post();

    const expectedBody = {
      responseCode: 405,
      message: "This request method is not supported.",
    };
    expect(response.body).toEqual(expectedBody);
  });
});
