import { MutableRefObject, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ConfirmModalWrapper, ControlSection } from './index.style';
import useOnClickOutside from '~/lib/hooks/useOnClickOutside';

const ConfirmModalComponent = () => {
  const confirmModalRef: MutableRefObject<HTMLElement> = useRef();
  const hide = () => confirmModalRef.current.classList.remove('show');

  useOnClickOutside(confirmModalRef, hide);

  return (
    <ConfirmModalWrapper className="confirm-modal" ref={confirmModalRef}>
      <span>Lorem ipsum d</span>
      <ControlSection>
        <button type="button" className="button" onClick={hide}>
          취소
        </button>
        <button type="button" className="button confirm" onClick={hide}>
          확인
        </button>
      </ControlSection>
    </ConfirmModalWrapper>
  );
};

export default () =>
  createPortal(ConfirmModalComponent(), document.getElementById('portal'));
