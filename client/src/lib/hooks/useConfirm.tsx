import { useEffect } from 'react';

const useConfirm = () => {
  let confirmModalDOM: HTMLElement;

  useEffect(() => {
    confirmModalDOM = document.querySelector('#portal > div > .confirm-modal');
  }, []);

  const confirm = (content: string) => {
    // 2. 취소 눌렀을 때 없애기
    // 3. 확인 눌렀을 때 onSuccess
    confirmModalDOM.classList.add('show');
    confirmModalDOM.querySelector('span').innerText = content;
  };

  return { confirm };
};

export default useConfirm;
