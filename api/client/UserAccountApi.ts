import { APIRequestContext } from "@playwright/test";

export class UserAccountApi {
  private request: APIRequestContext;
  private createAccountEndpoint = "/api/createAccount";
  private updateAccountEndpoint = "/api/updateAccount";
  private getAccountEndpoint = "/api/getUserDetailByEmail";
  private deleteAccountEndpoint = "/api/deleteAccount";

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  public async Post(UserCreationParams: any) {
    const response = await this.request.post(this.createAccountEndpoint, {
      form: UserCreationParams,
    });
    const responseBody = await response.text();

    return {
      status: response.status(),
      body: JSON.parse(responseBody),
    };
  }

  public async Put(UserCreationParams: any) {
    const response = await this.request.put(this.updateAccountEndpoint, {
      form: UserCreationParams,
    });
    const responseBody = await response.text();

    return {
      status: response.status(),
      body: JSON.parse(responseBody),
    };
  }

  public async Get(email: string) {
    const response = await this.request.get(this.getAccountEndpoint, {
      form: { email: email },
    });
    const responseBody = await response.text();

    return {
      status: response.status(),
      body: JSON.parse(responseBody),
    };
  }

  public async Delete(email: string, password: string) {
    const response = await this.request.delete(this.deleteAccountEndpoint, {
      form: { email: email, password: password },
    });
    const responseBody = await response.text();

    return {
      status: response.status(),
      body: JSON.parse(responseBody),
    };
  }
}
