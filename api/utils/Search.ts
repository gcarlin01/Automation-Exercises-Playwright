import { APIRequestContext } from "@playwright/test";

export class SearchProduct {
  private request: APIRequestContext;
  private searchProductEndpoint = `/api/searchProduct`;
  private searchProductFormParameter = { form: { search_product: "top" } };

  constructor(request: APIRequestContext) {
    this.request = request;
  }

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
