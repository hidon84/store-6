import { useEffect, useState } from 'react';
import * as authApi from '~/lib/api/auth';
import * as usersApi from '~/lib/api/users';
import {
  ErrorResponse,
  ErrorResponseBody,
  UsersGetResponseBody,
} from '../api/types';

const useAutoLogin = () => {
  const [requestError, setRequestError] = useState<ErrorResponseBody>(null);
  const [user, setUser] = useState<UsersGetResponseBody>(null);

  useEffect(() => {
    authApi
      .refresh()
      .then(() => usersApi.getMe())
      .then((response) => {
        setUser(response.data);
      })
      .catch((error: ErrorResponse) => {
        setRequestError(error.data);
      });
  }, [setUser, setRequestError]);

  return [user, setUser, requestError] as const;
};

export default useAutoLogin;
