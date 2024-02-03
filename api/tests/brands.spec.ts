import { test, expect } from "@playwright/test";
import { BrandsApi } from "../utils/BrandsApi";

test.describe.parallel("Brands API", () => {
  test("GET brandsList returns all brands", async ({ request }) => {
    const api = new BrandsApi(request);
    const response = await api.Get();

    expect(response.status).toBe(200);
    expect(response.body.brands.length).toBeGreaterThan(10);
  });

  test("PUT brandsList returns unsupported method", async ({ request }) => {
    const api = new BrandsApi(request);
    const response = await api.Put();

    const expectedBody = {
      responseCode: 405,
      message: "This request method is not supported.",
    };
    expect(response.body).toEqual(expectedBody);
  });
});
