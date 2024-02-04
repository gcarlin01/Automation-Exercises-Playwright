import { APIRequestContext } from "@playwright/test";

export class ProductsListApi {
  private request: APIRequestContext;
  private productsListEndpoint = "/api/productsList";

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  public async Get() {
    const response = await this.request.get(this.productsListEndpoint);
    const responseBody = await response.text();

    return {
      status: response.status(),
      body: JSON.parse(responseBody),
    };
  }

  public async Post() {
    const response = await this.request.post(this.productsListEndpoint);
    const responseBody = await response.text();

    return {
      status: response.status(),
      body: JSON.parse(responseBody),
    };
  }
}
