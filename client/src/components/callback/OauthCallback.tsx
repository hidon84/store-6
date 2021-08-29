import { FC, useContext, useEffect } from 'react';
import styled from 'styled-components';
import queryString from 'query-string';
import { useLocation, useHistory } from '~/core/Router';
import { alert } from '~/utils/modal';

import {
  ApiResponse,
  AuthResponseBody,
  ErrorResponse,
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

  useEffect(() => {
    if (!parsedQuery || !parsedState) {
      throw new Error(invalidCallbackUrl);
    }
    const { code, state } = parsedQuery;
    const requestQuery = {
      code: code.toString(),
      state: state.toString(),
    };

    if (parsedState.is_login_request === 'true') {
      oauthLoginCallback(requestQuery)
        .then(() => usersAPI.getMe())
        .then((result) => {
          userDispatch(setLogin({ ...userState.user, ...result.data }));
          push('/products');
        })
        .catch((e: ErrorResponse) => {
          alert(e.message);
          userDispatch(setError({ ...userState.user, error: e}));
          push('/login');
        });
      return;
    }

    oauthCallback(requestQuery)
      .then((response) => {
        const { id, email, picture } = response.data;
        userDispatch(
          setUserInfo({
            ...userState.user,
            id,
            email,
            profile: picture,
          }),
        );
        push(`/signup/${social}`);
      })
      .catch((e: ErrorResponse) => {
        alert(e.message);
        push('/signup/select');
      });
  }, []);

  return <EmptyContents/>;
};

export default OauthCallback;
