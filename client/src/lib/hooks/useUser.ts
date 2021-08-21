import { useContext } from 'react';
import UserContext from '../contexts/userContext';

const useUser = () => {
  const { user, setUser } = useContext(UserContext);
  return [user, setUser] as const;
};

export default useUser;
