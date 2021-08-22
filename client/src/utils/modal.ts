/**
 * 커스텀 alert를 띄워줍니다.
 * @param message 보여줄 내용입니다
 * @param ms 몇초동안 보여줄 것인가
 */
const alert = (message: string, ms?: number) => {
  const alertModalDOM = document.querySelector('#portal > .alert-modal');
  alertModalDOM.classList.add('show');
  alertModalDOM.querySelector('span').innerText = message;

  setTimeout(() => {
    alertModalDOM.classList.remove('show');
  }, ms ?? 2000);
};

/**
 * 모달을 띄워줍니다.
 * 모달의 취소나 바깥을 누를경우 모달이 없어집니다.
 * 확인을 누를경우 onConfirm callback이 실행됩니다.
 *
 * @param message 메시지
 * @param onConfirm 확인을 눌렀을때 실행할 콜백함수
 */
const confirm = (message: string, onConfirm: () => void) => {
  const confirmModalDOM = document.querySelector(
    '#portal > .confirm-modal',
  ) as HTMLElement;
  confirmModalDOM.classList.add('show');
  confirmModalDOM.querySelector('span').innerText = message;
  (confirmModalDOM.querySelector('.confirm') as HTMLElement).onclick =
    onConfirm;
};

export { alert, confirm };
