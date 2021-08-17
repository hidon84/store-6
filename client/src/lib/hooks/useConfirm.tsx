import { useEffect } from 'react';

const useConfirm = () => {
  let confirmModalDOM: HTMLElement;

  useEffect(() => {
    confirmModalDOM = document.querySelector('#portal > .confirm-modal');
  }, []);

  const confirm = (content: string, onConfirm: () => void) => {
    confirmModalDOM.classList.add('show');
    confirmModalDOM.querySelector('span').innerText = content;
    (confirmModalDOM.querySelector('.confirm') as HTMLElement).onclick =
      onConfirm;
  };

  return { confirm };
};

export default useConfirm;
