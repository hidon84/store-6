import React, { createContext, useContext, useEffect } from 'react';
import useLocation from '~/hooks/useLocation';

interface RouterContextType {
  location: string;
  push: (location: string) => void;
}

const RouterContext = createContext<RouterContextType>({
  location: '',
  push: (location: string) => {},
});

const BrowserRouter: React.FC<{
  children?: JSX.Element | JSX.Element[];
}> = ({ children }) => {
  const [location, setLocation] = useLocation();

  const ctx = {
    location,
    push: setLocation,
  };

  const handleHashChange = () => {
    setLocation(window.location.pathname);
  };

  useEffect(() => {
    window.addEventListener('popstate', handleHashChange);
    return () => window.removeEventListener('popstate', handleHashChange);
  });

  return (
    <RouterContext.Provider value={ctx}>{children}</RouterContext.Provider>
  );
};

class Route extends React.Component<{
  exact?: boolean;
  path: string;
}> {
  render() {
    const { children } = this.props;
    return children;
  }
}

const Switch: React.FC<{
  children: JSX.Element[];
}> = ({ children }) => {
  const routerCtx = useContext(RouterContext);
  const acc = children.filter((route) => {
    /** TODO: route.props.exact가 true일때 구분기능 */
    if (route.props.path === routerCtx.location) return true;
    return false;
  });

  return acc[0];
};

const useRouter = () => {
  const routerCtx = useContext(RouterContext);

  return [routerCtx.location, routerCtx.push] as const;
};

export { BrowserRouter, Switch, Route, useRouter as useLocation };
