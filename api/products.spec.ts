import { test, expect } from "@playwright/test";
import { ProductsList } from "./utils/Products";
import { errorResponseBody405 } from "../e2e/dataset/errorResponses";

test.describe.parallel("GET and POST to all products", () => {
  test("GET productsList returns all products", async ({ request }) => {
    const producstList = new ProductsList(request);
    const getResponse = await producstList.GetResponse();
    expect(getResponse.status()).toBe(200);
    const getResponseBody = await producstList.GetResponseBody();
    expect(getResponseBody.products.length).toBeGreaterThan(30);
  });

  test("POST productsList returns unsupported method", async ({ request }) => {
    const producstList = new ProductsList(request);
    const postResponseBody = await producstList.PostResponseBody();
    expect(postResponseBody).toEqual(errorResponseBody405);
  });
});
