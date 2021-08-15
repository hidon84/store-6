import { AxiosResponse } from 'axios';
import client from '~/lib/api/client';
import {
  ApiResponse,
  AuthResponse,
  AuthResponseBody,
  ErrorResponse,
  ErrorResponseBody,
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

export const login = ({
  email,
  password,
}): Promise<AuthResponse | ErrorResponse> =>
  client
    .post<AuthResponseBody | ErrorResponseBody>(authUrl.login, {
      email,
      password,
    })
    .then((response) => {
      if (response.status < 400) {
        const authResponse = response as AxiosResponse<AuthResponseBody>;
        setAuthorizationHeader(authResponse);
      }
      const { status, data } = response;
      return { statusCode: status, ...data };
    });

export const logout = (): Promise<ApiResponse | ErrorResponse> =>
  client.get<undefined | ErrorResponseBody>(authUrl.logout).then((response) => {
    const { status, data } = response;
    return { statusCode: status, ...data };
  });

export const refresh = (): Promise<AuthResponse | ErrorResponse> =>
  client
    .get<AuthResponseBody | ErrorResponseBody>(authUrl.refresh)
    .then((response) => {
      if (response.status < 400) {
        const authResponse = response as AxiosResponse<AuthResponseBody>;
        setAuthorizationHeader(authResponse);
      }
      const { status, data } = response;
      return { statusCode: status, ...data };
    });
