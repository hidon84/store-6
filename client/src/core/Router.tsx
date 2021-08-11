import React, { createContext, useContext } from 'react';
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
  return <div>{children}</div>;
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
  const [location, setLocation] = useLocation();
  const acc = children.filter((route) => {
    if (route.props.path === location) return true;
    return false;
  });

  return acc[0];
};

export { BrowserRouter, Switch, Route };
