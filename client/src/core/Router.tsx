import React, { createContext, useContext, useEffect } from 'react';
import styled from 'styled-components';
import useBrowserLocation from '~/hooks/useBrowserLocation';

interface RouterLocation {
  pathname: string;
  hash: string;
  search: string;
  state?: Record<string, unknown>;
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
  const [location, setLocation] = useBrowserLocation();

  const ctx = {
    location,
    push: (newLocation: Partial<RouterLocation>) => {
      window.history.pushState({}, '', newLocation.pathname);
      setLocation(newLocation);
    },
  };

  const handleHashChange = (popEvent: PopStateEvent) => {
    const { pathname, hash, search } = window.location;
    const { state } = popEvent;
    setLocation({ pathname, hash, search, state });
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

/**
 * useLocation 훅은 현재 URL을 나타내는 위치 개체를 반환합니다.
 * URL이 변경될 때마다 새 위치를 반환하는 useState라고 생각하면 됩니다.
 * @returns {
 *   pathname: '/path/to',
 *   search: '?search=배달이',
 *   hash: '#hashTo',
 * }
 *
 * @example
 * const location = useLocation();
 * console.log(location.search);
 */
const useLocation = () => {
  const routerCtx = useContext(RouterContext);

  return routerCtx.location;
};

/**
 * history 객체를 반환합니다
 * @returns {
 *   location: {
 *     pathname: '/path/to',
 *     search: '?search=배달이',
 *     hash: '#hashTo',
 *   },
 *   push: Function
 * }
 * @example
 * history = useHistory();
 * history.push('/main');
 *
 * @example
 * history = useHistory();
 * history.push('/main', { message: 'hi' })
 * // /main에서는 history.location.state를 통해서 message를 받음
 *
 * @example
 * history = uesHistory();
 * history.pathname;
 */
const useHistory = () => {
  const routerCtx = useContext(RouterContext);

  return {
    location: routerCtx.location,
    push: (pathname: string, state?: Record<string, unknown>) => {
      routerCtx.push({ pathname, state });
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
  useLocation,
  useHistory,
  RouterLocation,
};
