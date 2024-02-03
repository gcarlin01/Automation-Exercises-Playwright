import { APIRequestContext } from "@playwright/test";

export class VerifyLoginApi {
  private request: APIRequestContext;
  private verifyLoginEndpoint = `/api/verifyLogin`;
  private verifyLoginFormParameter = {
    form: { email: "testUser@QA.com", password: "test1234" },
  };

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async PostWithParams() {
    const response = await this.request.post(
      this.verifyLoginEndpoint,
      this.verifyLoginFormParameter,
    );
    const responseBody = await response.text();

    return {
      status: response.status(),
      body: JSON.parse(responseBody),
    };
  }

  async PostWithoutEmailParam() {
    const response = await this.request.post(this.verifyLoginEndpoint, {
      form: { password: this.verifyLoginFormParameter.form.password },
    });
    const responseBody = await response.text();

    return {
      status: response.status(),
      body: JSON.parse(responseBody),
    };
  }
}
