import { AxiosResponse } from 'axios';
import client from '~/lib/api/client';
import {
  ApiResponse,
  AuthResponse,
  AuthResponseBody,
  ErrorResponse,
  ErrorResponseBody,
  LoginRequestBody,
} from './types';

export const authBaseUrl = '/api/auth';

export const authUrl = {
  login: `${authBaseUrl}/login`,
  logout: `${authBaseUrl}/logout`,
  refresh: `${authBaseUrl}/refresh`,
};

const setAuthorizationHeader = (response: AxiosResponse<AuthResponseBody>) => {
  const { access } = response.data;
  client.defaults.headers.common.Authorization = `Bearer ${access}`;
};

const authRequest = (
  req: Promise<AxiosResponse<AuthResponseBody | ErrorResponseBody>>,
): Promise<AuthResponse | ErrorResponse> =>
  req.then((response) => {
    const { status, data } = response;
    if (response.status >= 400) {
      const errorData = data as ErrorResponseBody;
      const errorResponse: ErrorResponse = { statusCode: status, ...errorData };
      return errorResponse;
    }

    const authResponse = response as AxiosResponse<AuthResponseBody>;
    setAuthorizationHeader(authResponse);

    const authData = data as AuthResponseBody;
    const result: AuthResponse = { statusCode: status, ...authData };
    return result;
  });

export const login = (
  reqData: LoginRequestBody,
): Promise<AuthResponse | ErrorResponse> =>
  authRequest(
    client.post<AuthResponseBody | ErrorResponseBody>(authUrl.login, reqData),
  );

export const logout = (): Promise<ApiResponse | ErrorResponse> =>
  client.get<undefined | ErrorResponseBody>(authUrl.logout).then((response) => {
    const { status, data } = response;
    return { statusCode: status, ...data };
  });

export const refresh = (): Promise<AuthResponse | ErrorResponse> =>
  authRequest(
    client.get<AuthResponseBody | ErrorResponseBody>(authUrl.refresh),
  );
