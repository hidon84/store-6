import { AxiosResponse } from 'axios';
import client from '~/lib/api/client';
import request from './request';
import { AuthResponseBody, LoginRequestBody } from './types';

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

const clearAuthorizationHeader = () => {
  client.defaults.headers.common.Authorization = '';
};

export const login = (reqData: LoginRequestBody) =>
  request<AuthResponseBody, LoginRequestBody>(
    'POST',
    authUrl.login,
    reqData,
    null,
    setAuthorizationHeader,
  );

export const logout = () =>
  request('GET', authUrl.logout, null, null, clearAuthorizationHeader);

export const refresh = () =>
  request<AuthResponseBody>(
    'GET',
    authUrl.refresh,
    null,
    null,
    setAuthorizationHeader,
  );
