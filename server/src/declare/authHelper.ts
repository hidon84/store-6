import { OverloadedCommand } from 'redis';

/**
 * promisify 함수로 변환된 함수를 사용할 때 타입이 인식되지 않는 문제를 해결하기 위해서
 * promisify 함수로 반환되는 함수들의 타입을 지정하는 부분입니다.
 * 함수의 인자가 1개 있는 경우, 2개 있는 경우, 그리고 3개 이상인 경우에 대해서 반환 함수의 타입을 지정했습니다.
 */
declare module 'util' {
  function promisify<T, U, R>(
    fn: OverloadedCommand<T, U, R>,
  ): {
    (arg1: T, arg2: T | T[]): Promise<U>;
    (arg1: T | T[]): Promise<U>;
    (...args: Array<T>): Promise<U>;
  };
}
