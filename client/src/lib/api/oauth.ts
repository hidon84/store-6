import { setAuthorizationHeader } from './auth';
import request from './request';
import {
  AuthResponseBody,
  OauthCallbackGetRequestQuery,
  OauthCallbackGetResponseBody,
} from './types';

export const oauthBaseUrl = '/api/oauth';

export const oauthUrl = {
  google: {
    google: `${oauthBaseUrl}/google`,
    login: `${oauthBaseUrl}/google/login`,
    callback: `${oauthBaseUrl}/google/callback`,
  },
  facebook: {
    facebook: `${oauthBaseUrl}/facebook`,
    login: `${oauthBaseUrl}/facebook/login`,
    callback: `${oauthBaseUrl}/facebook/callback`,
  },
};

export const googleCallback = (query: OauthCallbackGetRequestQuery) =>
  request<OauthCallbackGetResponseBody, null, OauthCallbackGetRequestQuery>(
    'GET',
    oauthUrl.google.callback,
    null,
    query,
  );

export const googleLoginCallback = (query: OauthCallbackGetRequestQuery) =>
  request<AuthResponseBody, null, OauthCallbackGetRequestQuery>(
    'GET',
    oauthUrl.google.callback,
    null,
    query,
    setAuthorizationHeader,
  );

export const facebookCallback = (query: OauthCallbackGetRequestQuery) =>
  request<OauthCallbackGetResponseBody, null, OauthCallbackGetRequestQuery>(
    'GET',
    oauthUrl.facebook.callback,
    null,
    query,
  );

export const facebookLoginCallback = (query: OauthCallbackGetRequestQuery) =>
  request<AuthResponseBody, null, OauthCallbackGetRequestQuery>(
    'GET',
    oauthUrl.facebook.callback,
    null,
    query,
    setAuthorizationHeader,
  );
