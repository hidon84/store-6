import { Dispatch, SetStateAction } from 'react';
import { UsersGetResponseBody } from '../api/types';
import createNamedContext from './createNamedContext';

export interface UserContextState {
  user: UsersGetResponseBody;
  setUser: Dispatch<SetStateAction<UsersGetResponseBody>>;
}

const UserContext = createNamedContext<UserContextState>('UserContext');

export default UserContext;
