import { APIRequestContext } from "@playwright/test";

export class SearchProductApi {
  private request: APIRequestContext;
  private searchProductEndpoint = `/api/searchProduct`;
  private searchProductFormParameter = { form: { search_product: "top" } };

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async PostWithParam() {
    const response = await this.request.post(
      this.searchProductEndpoint,
      this.searchProductFormParameter,
    );
    const responseBody = await response.text();

    return {
      status: response.status(),
      body: JSON.parse(responseBody),
    };
  }

  async PostWithoutParam() {
    const response = await this.request.post(this.searchProductEndpoint, {});
    const responseBody = await response.text();

    return {
      status: response.status(),
      body: JSON.parse(responseBody),
    };
  }
}
