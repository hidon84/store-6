import { useEffect } from 'react';
import * as authApi from '~/lib/api/auth';
import * as usersApi from '~/lib/api/users';
import { ErrorResponse } from '~/lib/api/types';
import userModule, { setError, setLogin } from '~/stores/userModule';

const useAutoLogin = () => {
  const { state: userState, dispatch: userDispatch } = userModule();

  useEffect(() => {
    authApi
      .refresh()
      .then(() => usersApi.getMe())
      .then((response) => {
        userDispatch(setLogin(response.data));
      })
      .catch((error: ErrorResponse) => {
        userDispatch(setError({ error }));
      });
  }, [userState.isLoggedIn]);

  return { userState, userDispatch };
};

export default useAutoLogin;
