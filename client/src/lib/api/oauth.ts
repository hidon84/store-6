import { setAuthorizationHeader } from './auth';
import { apiBaseURL } from './client';
import request from './request';
import {
  AuthResponseBody,
  OauthCallbackGetRequestQuery,
  OauthCallbackGetResponseBody,
} from './types';

export const oauthBaseUrl = `api/oauth`;

// apiBaseURL = '/' or 'localhost:5000/'
export const oauthUrl = {
  google: {
    google: `${apiBaseURL}${oauthBaseUrl}/google`,
    login: `${apiBaseURL}${oauthBaseUrl}/google/login`,
    callback: `/${oauthBaseUrl}/google/callback`,
  },
  facebook: {
    facebook: `${apiBaseURL}${oauthBaseUrl}/facebook`,
    login: `${apiBaseURL}${oauthBaseUrl}/facebook/login`,
    callback: `/${oauthBaseUrl}/facebook/callback`,
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
