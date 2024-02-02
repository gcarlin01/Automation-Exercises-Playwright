import { APIRequestContext } from "@playwright/test";

export class SearchProduct {
  private request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }
  searchProductEndpoint = `/api/searchProduct`;
  searchProductFormParameter = { form: { search_product: "top" } };

  async PostUsingParamResponse() {
    const response = this.request.post(
      this.searchProductEndpoint,
      this.searchProductFormParameter,
    );
    return response;
  }

  async PostUsingParamResponseBody() {
    const response = this.request.post(
      this.searchProductEndpoint,
      this.searchProductFormParameter,
    );
    const responseBody = (await response).text();
    return JSON.parse(await responseBody);
  }

  async PostNotUsingParamResponse() {
    const response = this.request.post(this.searchProductEndpoint, {});
    return response;
  }

  async PostNotUsingParamResponseBody() {
    const response = this.request.post(this.searchProductEndpoint, {});
    const responseBody = (await response).text();
    return JSON.parse(await responseBody);
  }
}
