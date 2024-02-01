import { APIRequestContext } from "@playwright/test";

export class ProductsList {
  private request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }
  productsListEndpoint = `/api/productsList`;

  async GetResponse() {
    const response = this.request.get(this.productsListEndpoint);
    return response;
  }

  async GetResponseBody() {
    const response = this.request.get(this.productsListEndpoint);
    const responseBody = (await response).text();
    return JSON.parse(await responseBody);
  }

  async PostResponse() {
    const response = this.request.post(this.productsListEndpoint, {});
    return response;
  }

  async PostResponseBody() {
    const response = this.request.post(this.productsListEndpoint, {});
    const responseBody = (await response).text();
    return JSON.parse(await responseBody);
  }
}
