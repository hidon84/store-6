import { FC, useContext, useEffect } from 'react';
import styled from 'styled-components';
import queryString from 'query-string';
import { useLocation, useHistory } from '~/core/Router';
import { alert } from '~/utils/modal';

import {
  ApiResponse,
  AuthResponseBody,
  OauthCallbackGetRequestQuery,
  OauthCallbackGetResponseBody,
} from '~/lib/api/types';
import oauthStateDecoder from '~/utils/oauthStateDecoder';
import UserContext from '~/lib/contexts/userContext';
import { setError, setLogin, setUserInfo } from '~/stores/userModule';
import * as usersAPI from '~/lib/api/users';

const invalidCallbackUrl = 'Invalid Oauth Callback URL';

const EmptyContents = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
`;

interface Props {
  oauthLoginCallback: (
    query: OauthCallbackGetRequestQuery,
  ) => Promise<ApiResponse<AuthResponseBody>>;
  oauthCallback: (
    query: OauthCallbackGetRequestQuery,
  ) => Promise<ApiResponse<OauthCallbackGetResponseBody>>;
  social: 'facebook' | 'google';
}

const OauthCallback: FC<Props> = ({
  oauthLoginCallback,
  oauthCallback,
  social,
}) => {
  const { user: userState, userDispatch } = useContext(UserContext);
  const location = useLocation();
  const { push } = useHistory();
  const parsedQuery = queryString.parse(location.search);
  const parsedState = oauthStateDecoder(parsedQuery?.state.toString());

  if (!parsedQuery || !parsedState) {
    throw new Error(invalidCallbackUrl);
  }

  const { code, state } = parsedQuery;
  const requestQuery = {
    code: code.toString(),
    state: state.toString(),
  };

  const apiRequestForOauthLogin = async () => {
    try {
      await oauthLoginCallback(requestQuery);
      const userInfoResponse = await usersAPI.getMe();

      userDispatch(setLogin({ ...userState.user, ...userInfoResponse.data }));
      return userInfoResponse.data;
    } catch (e) {
      alert(e.message);
      userDispatch(setError({ ...userState.user, error: e }));
      throw e;
    }
  };

  const apiRequestForGetOuathUser = async () => {
    try {
      const response = await oauthCallback(requestQuery);
      const { id, email, picture } = response.data;
      userDispatch(
        setUserInfo({
          ...userState.user,
          id,
          email,
          profile: picture,
        }),
      );
    } catch (e) {
      alert(e.message);
      userDispatch(setError({ ...userState.user, error: e }));
      throw e;
    }
  };

  useEffect(() => {
    if (parsedState.is_login_request === 'true') {
      apiRequestForOauthLogin()
        .then(() => push('/products'))
        .catch(() => push('/login'));
      return;
    }

    apiRequestForGetOuathUser()
      .then(() => push(`/signup/${social}`))
      .catch(() => push('/signup/select'));
  }, []);

  return <EmptyContents />;
};

export default OauthCallback;
