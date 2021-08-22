import { useContext } from 'react';
import UserContext from '../contexts/userContext';

const useUser = () => {
  const userContext = useContext(UserContext);

  if (!userContext) {
    return [null, null] as const;
  }

  const { user, setUser } = userContext;
  return [user, setUser] as const;
};

export default useUser;
