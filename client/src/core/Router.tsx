import React, {
  Component,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import styled from 'styled-components';

interface RouterLocation {
  pathname: string;
  hash: string;
  search: string;
  state?: Record<string, unknown>;
}

interface RouterContextType {
  location: RouterLocation;
  params?: {
    [key: string]: string;
  };
  push: (location: Partial<RouterLocation>) => void;
  goBack: () => void;
}

const RouterContext = createContext<RouterContextType>({
  location: {
    pathname: '/somewhere',
    hash: '#howdy',
    search: '?some=search-string',
  },
  push: () => {},
  goBack: () => window.history.back(),
});

const BrowserRouter: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const [windowLocation, setWindowLocation] = useState<RouterLocation>({
    hash: window.location.hash,
    pathname: window.location.pathname,
    search: window.location.search,
  });

  const ctx = {
    location: windowLocation,
    push: (newLocation: Partial<RouterLocation>) => {
      const { state, pathname } = newLocation;
      window.history.pushState(state, '', pathname);
      setWindowLocation({ ...windowLocation, ...newLocation });
    },
    goBack: () => window.history.back(),
  };

  const handleHashChange = (popEvent: PopStateEvent) => {
    const { pathname, hash, search } = window.location;
    const { state } = popEvent;
    setWindowLocation({ ...windowLocation, pathname, hash, search, state });
  };

  useEffect(() => {
    window.addEventListener('popstate', handleHashChange);
    return () => window.removeEventListener('popstate', handleHashChange);
  });

  return (
    <RouterContext.Provider value={ctx}>{children}</RouterContext.Provider>
  );
};

class Route extends Component<{
  exact?: boolean;
  path: string;
}> {
  render() {
    const { children } = this.props;
    return children;
  }
}

/**
 * 소스 출처: https://github.com/woowa-techcamp-2021/store-5
 * URL Parameter와 Path를 추출하는 함수
 */
function compilePath(path: string) {
  const keys: string[] = [];

  const path2 = path.replace(/:(\w+)/g, (_, key) => {
    keys.push(key);
    return '([^\\/]+)';
  });

  const source = `^(${path2})`;

  const regex = new RegExp(source, 'i');
  return { regex, keys };
}

const Switch: React.FC<{
  children: JSX.Element[];
}> = ({ children }) => {
  const routerCtx = useContext(RouterContext);
  let routerParams = {};
  routerCtx.params = routerParams;

  for (const route of children) {
    const { exact, path } = route.props;
    if (exact && route.props.path === routerCtx.location.pathname) return route;
    if (exact && route.props.path !== routerCtx.location.pathname) continue;

    const { regex, keys } = compilePath(path);
    const match = routerCtx.location.pathname.match(regex);
    if (match) {
      const params = match.slice(2);

      routerParams = keys.reduce<{ [key: string]: string }>((acc, cur, idx) => {
        acc[cur] = params[idx];
        return acc;
      }, {});
      routerCtx.params = routerParams;
      return route;
    }
  }

  return <div>No Matching Route</div>;
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
 * url에서 매칭된 파라미터들을 가져옵니다.
 *
 * @example
 * 라우터쪽에서 path에 category, number를 지정
 * <Route path="/hello/:category/:number">
 *   <BlogPost />
 * </Route>
 *
 * BlogPost 에서는 아래처럼 사용
 *
 * function BlogPost() {
 *   let { category, number } = useParams();
 *   return <div>{category}의 {number}번째 글</div>
 * }
 *
 * @returns {
 *   pattern: 'matched',
 * }
 */
const useParams = () => {
  const routerCtx = useContext(RouterContext);

  return routerCtx.params;
};

/**
 * history 객체를 반환합니다
 * @returns {
 *   location: {
 *     pathname: '/path/to',
 *     search: '?search=배달이',
 *     hash: '#hashTo',
 *   },
 *   push: (path, state?) => void,
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
    goBack: routerCtx.goBack,
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
  useParams,
  RouterLocation,
};
