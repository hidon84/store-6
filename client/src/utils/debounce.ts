/**
 * debounce 유틸 함수는 인자로 함수와 지연 시간을 받습니다.
 * 인자로 받은 함수가 지연 시간 내에 여러 번 반복해서 실행된다면,
 * 호출된 마지막 함수만 반환합니다.
 *
 * 이를 timer 변수를 사용하여 구현합니다.
 * setTimeout을 사용하여 콜백 함수들은 콜스택에 쌓이게 되는데,
 * 이를 식별하기 위해 timer를 사용합니다.
 *
 * task queue로 옮기는 과정에서 이전에 받은 timer를 clearTimeout의 인자로 전달해 timeout을 취소하고,
 * 결국 마지막 호출된 함수만 사용할 수 있게 됩니다.
 *
 * @example
 *   const sayHiOnDelayTime = debounce(() => console.log('hi'), 500);
 */
const debounce = <Params extends unknown[]>(
  func: (...args: Params) => unknown,
  timeout: number,
): ((...args: Params) => void) => {
  let timer: NodeJS.Timeout;

  return (...args: Params) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
};

export default debounce;
