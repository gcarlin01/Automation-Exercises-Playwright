import { test, expect } from "@playwright/test";
import { SearchProductApi } from "../client/SearchProductApi";

test.describe.parallel("/api/searchProduct", () => {
  test("POST passing requested parameter returns the searched product list", async ({
    request,
  }) => {
    const api = new SearchProductApi(request);
    const response = await api.PostWithParam();
    expect(response.status).toBe(200);
    const firstProductName = response.body.products[0].name;
    expect(firstProductName).toContain("Top");
  });

  test("POST NOT passing requested parameter returns bad request", async ({
    request,
  }) => {
    const api = new SearchProductApi(request);
    const response = await api.PostWithoutParam();

    const expectedBody = {
      responseCode: 400,
      message:
        "Bad request, search_product parameter is missing in POST request.",
    };
    expect(response.body).toEqual(expectedBody);
  });
});
