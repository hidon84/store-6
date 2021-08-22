import axios from 'axios';
import config from '@/config';
import {
  facebookOauthScope,
  facebookOauthTokenUrl,
  facebookOauthUrl,
  facebookOauthUserInfoFields,
  facebookOauthUserInfoUrl,
  googleOauthScope,
  googleOauthTokenUrl,
  googleOauthUrl,
  googleOauthUserInfoUrl,
} from '@/constants/oauth';

export interface OauthTokenResponse {
  access_token: string;
}

export interface OauthUserInfoResponse {
  id: string;
  email: string;
  picture: string;
}

export interface OauthFacebookInfoResponse {
  id: string;
  email: string;
  picture: {
    data: {
      height: number;
      is_silhouette: boolean;
      url: string;
      width: number;
    };
  };
}

export const oauthStateDecoder = (state: string) => {
  const result: Record<string, string> = {};
  const splittedState = state.split('&').map(v => v.split('='));
  splittedState.forEach(([key, value]) => {
    result[key] = value;
  });
  return result;
};

export const oauthStateEncoder = (state: object) => {
  const urlEscapeMap = {
    '=': '%3D',
    '&': '%26',
  };
  return Object.entries(state)
    .reduce(
      (acc, cur) =>
        `${acc}${cur[0]}${urlEscapeMap['=']}${cur[1]}${urlEscapeMap['&']}`,
      '',
    )
    .slice(0, urlEscapeMap['&'].length * -1);
};

export const getOauthGoogleRedirectUrl = (
  isLoginRequest: boolean = false,
  csrfToken: string,
) => {
  const params = {
    redirect_uri: config.oauth.google.callbackUrl,
    scope: googleOauthScope,
    client_id: config.oauth.google.clientId,
    state: oauthStateEncoder({
      is_login_request: isLoginRequest,
      csrf_token: csrfToken,
    }),
    response_type: 'code',
    access_type: 'offline',
  };
  const result = `${googleOauthUrl}${Object.entries(params).reduce(
    (acc, cur) => `${acc}&${cur[0]}=${cur[1]}`,
    '?',
  )}`;
  return result;
};

export const getGoogleOauthToken = async (code: string) => {
  const reqBody = {
    client_id: config.oauth.google.clientId,
    client_secret: config.oauth.google.clientSecret,
    code,
    grant_type: 'authorization_code',
    redirect_uri: `${config.oauth.google.callbackUrl}`,
  };
  const response = await axios.post<OauthTokenResponse>(
    googleOauthTokenUrl,
    reqBody,
  );
  return response.data;
};

export const getGoogleUserInfo = async (accessToken: string) => {
  const response = await axios.get<OauthUserInfoResponse>(
    googleOauthUserInfoUrl,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );
  return response.data;
};

export const getOauthFacebookRedirectUrl = (
  isLoginRequest: boolean = false,
  csrfToken: string,
) => {
  const params = {
    redirect_uri: config.oauth.facebook.callbackUrl,
    client_id: config.oauth.facebook.clientId,
    scope: facebookOauthScope,
    state: oauthStateEncoder({
      is_login_request: isLoginRequest,
      csrf_token: csrfToken,
    }),
  };
  const result = `${facebookOauthUrl}${Object.entries(params).reduce(
    (acc, cur) => `${acc}&${cur[0]}=${cur[1]}`,
    '?',
  )}`;
  return result;
};

export const getFacebookOauthToken = async (code: string) => {
  const params = {
    client_id: config.oauth.facebook.clientId,
    client_secret: config.oauth.facebook.clientSecret,
    code,
    redirect_uri: config.oauth.facebook.callbackUrl,
  };
  const response = await axios.get<OauthTokenResponse>(facebookOauthTokenUrl, {
    params,
  });
  return response.data;
};

export const getFacebookUserInfo = async (accessToken: string) => {
  const params = {
    access_token: accessToken,
    fields: facebookOauthUserInfoFields,
  };
  const response = await axios.get<OauthFacebookInfoResponse>(
    facebookOauthUserInfoUrl,
    { params },
  );
  const { id, email, picture } = response.data;
  return { id, email, picture: picture.data.url };
};
