import { useEffect } from 'react';

/**
 * Alert 모달을 호출하기 위해 사용하는 훅입니다.
 * @example
 *  const { alert } = useAlert();
 *  ...
 *  onClick={() => alert('아하하하하하하하')};
 */
const useAlert = () => {
  let alertModalDOM: HTMLElement;

  useEffect(() => {
    alertModalDOM = document.querySelector('#portal > .alert-modal');
  }, []);

  const alert = (content: string) => {
    alertModalDOM.classList.add('show');
    alertModalDOM.querySelector('span').innerText = content;

    setTimeout(() => {
      alertModalDOM.classList.remove('show');
    }, 1200);
  };

  return { alert };
};

export default useAlert;
