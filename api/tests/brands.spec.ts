import { test, expect } from "@playwright/test";

test.describe.parallel("brands", () => {
  test("GET brandsList returns all brands", async ({ request }) => {
    const response = await request.get(`/api/brandsList`);
    expect(response.status()).toBe(200);
    const responseBody = JSON.parse(await response.text());
    expect(responseBody.brands.length).toBeGreaterThan(10);
  });

  test("PUT brandsList returns unsupported method", async ({ request }) => {
    const response = await request.put(`/api/brandsList`, {});
    const responseBody = JSON.parse(await response.text());
    expect(responseBody.responseCode).toEqual(405);
    expect(responseBody.message).toEqual(
      "This request method is not supported.",
    );
  });
});
