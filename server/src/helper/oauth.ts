import axios from 'axios';
import config from '@/config';
import {
  googleOauthScope,
  googleOauthTokenUrl,
  googleOauthUrl,
  googleOauthUserInfoUrl,
} from '@/constants/oauth';

export interface OauthGoogleTokenResponse {
  access_token: string;
  expires_in: number;
  token_type: string;
  scope: string;
  refresh_token: string;
}

export interface OauthGoogleUserInfoResponse {
  id: string;
  email: string;
  picture: string;
}

export const getOauthGoogleRedirectUrl = () => {
  const params = {
    redirect_uri: config.oauth.google.callbackUrl,
    scope: googleOauthScope,
    client_id: config.oauth.google.clientId,
    response_type: 'code',
    access_type: 'offline',
  };
  const result = `${googleOauthUrl}${Object.entries(params).reduce(
    (acc, cur) => `${acc}&${cur[0]}=${cur[1]}`,
    '?',
  )}`;
  return result;
};

export const getGoogleOauthToken = (code: string) => {
  const reqBody = {
    client_id: config.oauth.google.clientId,
    client_secret: config.oauth.google.clientSecret,
    code,
    grant_type: 'authorization_code',
    redirect_uri: `${config.oauth.google.callbackUrl}`,
  };
  return axios.post<OauthGoogleTokenResponse>(googleOauthTokenUrl, reqBody);
};

export const getGoogleUserInfo = (accessToken: string) => {
  return axios.get<OauthGoogleUserInfoResponse>(googleOauthUserInfoUrl, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
