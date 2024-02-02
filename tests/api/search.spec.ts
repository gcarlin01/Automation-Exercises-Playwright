import { test, expect } from "@playwright/test";
import { SearchProduct } from "../../api/utils/Search";
import { errorResponseBody400 } from "../../dataset/errorResponses";

test.describe.parallel("POST with and without request parameter", () => {
  test("POST searchProduct passing requested parameter returns the searched product list", async ({
    request,
  }) => {
    const searchProduct = new SearchProduct(request);
    const postResponse = await searchProduct.PostUsingParamResponse();
    expect(postResponse.status()).toBe(200);
    const postResponseBody = await searchProduct.PostUsingParamResponseBody();
    const firstProductName = postResponseBody.products[0].name;
    expect(firstProductName).toContain("Top");
  });

  test("POST searchProduct NOT passing requested parameter returns bad request", async ({
    request,
  }) => {
    const searchProduct = new SearchProduct(request);
    const postResponseBody =
      await searchProduct.PostNotUsingParamResponseBody();
    expect(postResponseBody).toEqual(errorResponseBody400);
  });
});
