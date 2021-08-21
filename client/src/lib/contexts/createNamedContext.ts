import { createContext } from 'react';

const createNamedContext = <T = unknown>(
  name: string,
  defaultValue: T = null,
) => {
  const context = createContext<T>(defaultValue);
  context.displayName = name;

  return context;
};

export default createNamedContext;
