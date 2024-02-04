import { APIRequestContext } from "@playwright/test";

export class BrandsListApi {
  private request: APIRequestContext;
  private productsListEndpoint = "/api/brandsList";

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

  public async Put() {
    const response = await this.request.put(this.productsListEndpoint);
    const responseBody = await response.text();

    return {
      status: response.status(),
      body: JSON.parse(responseBody),
    };
  }
}
