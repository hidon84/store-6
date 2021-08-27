import { UserModuleAction, UserModuleState } from '~/stores/userModule';
import createNamedContext from './createNamedContext';

export interface UserContextState {
  user: UserModuleState;
  userDispatch: (action: UserModuleAction) => void;
}

const UserContext = createNamedContext<UserContextState>('UserContext');

export default UserContext;
