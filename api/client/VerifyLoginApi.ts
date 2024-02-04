import { APIRequestContext } from "@playwright/test";

export class VerifyLoginApi {
  private request: APIRequestContext;
  private verifyLoginEndpoint = "/api/verifyLogin";

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async Post(payload: { email?: string; password?: string }) {
    const response = await this.request.post(this.verifyLoginEndpoint, {
      form: payload,
    });
    const responseBody = await response.text();

    return {
      status: response.status(),
      body: JSON.parse(responseBody),
    };
  }

  async Delete() {
    const response = await this.request.delete(this.verifyLoginEndpoint);
    const responseBody = await response.text();

    return {
      status: response.status(),
      body: JSON.parse(responseBody),
    };
  }
}
