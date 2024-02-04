import { test, expect } from "@playwright/test";
import { BrandsListApi } from "../utils/BrandsListApi";

test.describe.parallel("/api/brandsList", () => {
  test("GET returns all brands", async ({ request }) => {
    const api = new BrandsListApi(request);
    const response = await api.Get();

    expect(response.status).toBe(200);
    expect(response.body.brands.length).toBeGreaterThan(10);
  });

  test("PUT returns unsupported method", async ({ request }) => {
    const api = new BrandsListApi(request);
    const response = await api.Put();

    const expectedBody = {
      responseCode: 405,
      message: "This request method is not supported.",
    };
    expect(response.body).toEqual(expectedBody);
  });
});
