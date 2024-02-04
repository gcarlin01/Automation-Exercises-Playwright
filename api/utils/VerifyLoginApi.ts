import { APIRequestContext } from "@playwright/test";

export class VerifyLoginApi {
  private request: APIRequestContext;
  private verifyLoginEndpoint = `/api/verifyLogin`;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async PostWithParams(email: string, password: string) {
    const response = await this.request.post(this.verifyLoginEndpoint, {
      form: { email: email, password: password },
    });
    const responseBody = await response.text();

    return {
      status: response.status(),
      body: JSON.parse(responseBody),
    };
  }

  async PostWithOnlyPasswordParam(password: string) {
    const response = await this.request.post(this.verifyLoginEndpoint, {
      form: { password: password },
    });
    const responseBody = await response.text();

    return {
      status: response.status(),
      body: JSON.parse(responseBody),
    };
  }
}
