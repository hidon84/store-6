import App from './App';
import { BrowserRouter } from './core/Router';
import UserContext from './lib/contexts/userContext';
import useAutoLogin from './lib/hooks/useAutoLogin';

const Root = () => {
  const [user, setUser] = useAutoLogin();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default Root;
