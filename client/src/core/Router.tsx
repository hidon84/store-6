import React, { createContext, useContext, useEffect } from 'react';
import styled from 'styled-components';
import useLocation from '~/hooks/useLocation';

interface RouterLocation {
  pathname: string;
  hash: string;
  search: string;
}

interface RouterContextType {
  location: RouterLocation;
  push: (location: Partial<RouterLocation>) => void;
}

const RouterContext = createContext<RouterContextType>({
  location: {
    pathname: '/somewhere',
    hash: '#howdy',
    search: '?some=search-string',
  },
  push: (location: Partial<RouterLocation>) => {},
});

const BrowserRouter: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const [location, setLocation] = useLocation();

  const ctx = {
    location,
    push: setLocation,
  };

  const handleHashChange = () => {
    const { pathname, hash, search } = window.location;
    setLocation({ pathname, hash, search });
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
    if (route.props.path === routerCtx.location.pathname) return true;
    return false;
  });

  return acc[0];
};

const useRouter = () => {
  const routerCtx = useContext(RouterContext);

  return routerCtx.location;
};

const useHistory = () => {
  const routerCtx = useContext(RouterContext);

  return {
    location: routerCtx.location,
    push: (pathname: string) => {
      routerCtx.push({ pathname });
    },
  } as const;
};

const StyledLink = styled.a`
  cursor: pointer;
`;

const Link: React.FC<{ to: string; children: React.ReactNode }> = ({
  to,
  children,
}) => {
  const { push } = useHistory();
  return (
    <StyledLink
      href={to}
      onClick={(e) => {
        e.preventDefault();
        push(to);
      }}
    >
      {children}
    </StyledLink>
  );
};

export {
  BrowserRouter,
  Switch,
  Link,
  Route,
  useRouter as useLocation,
  useHistory,
  RouterLocation,
};
