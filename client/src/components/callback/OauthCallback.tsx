import { FC, useEffect } from 'react';
import queryString from 'query-string';
import { useLocation, useHistory } from '~/core/Router';
import useUser from '~/lib/hooks/useUser';
import { alert } from '~/utils/modal';
import {
  ApiResponse,
  AuthResponseBody,
  ErrorResponse,
  OauthCallbackGetRequestQuery,
  OauthCallbackGetResponseBody,
} from '~/lib/api/types';
import oauthStateDecoder from '~/utils/oauthStateDecoder';

const invalidCallbackUrl = 'Invalid Oauth Callback URL';

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
  const [user, setUser] = useUser();
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
        .then(() => {
          // @TODO use replace instead of push
          push('/');
        })
        .catch((e: ErrorResponse) => {
          alert(e.message);
          push('/login');
        });
      return;
    }

    oauthCallback(requestQuery)
      .then((response) => {
        const { id, email, picture } = response.data;
        setUser({ ...user, id, email, profile: picture });
        push(`/signup/${social}`);
      })
      .catch((e: ErrorResponse) => {
        alert(e.message);
        push('/signup/select');
      });
  }, []);

  return <></>;
};

export default OauthCallback;
