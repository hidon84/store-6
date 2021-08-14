import { OverloadedCommand } from 'redis';

declare module 'util' {
  function promisify<T, U, R>(
    fn: OverloadedCommand<T, U, R>,
  ): {
    (arg1: T, arg2: T | T[]): Promise<U>;
    (arg1: T | T[]): Promise<U>;
    (...args: Array<T>): Promise<U>;
  };
}
