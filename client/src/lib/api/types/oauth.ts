export interface OauthCallbackGetRequestQuery {
  code: string;
  state: string;
}

export interface OauthCallbackGetResponseBody {
  id: string;
  email: string;
  picture: string;
  isRegistered: boolean;
}
