import React, { MutableRefObject, FC, useRef } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { ConfirmModalWrapper, ControlSection } from './index.style';
import useOnClickOutside from '~/lib/hooks/useOnClickOutside';

const StyledDim = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.1;
`;

const ConfirmModalComponent = () => {
  const confirmModalRef: MutableRefObject<HTMLElement> = useRef();
  const hide = () => confirmModalRef.current.classList.remove('show');

  useOnClickOutside(confirmModalRef, () => hide());

  return (
    <ConfirmModalWrapper className="confirm-modal" ref={confirmModalRef}>
      <span>Lorem ipsum d</span>
      <ControlSection>
        <button type="button" className="button" onClick={(e) => hide()}>
          취소
        </button>
        <button type="button" className="button confirm">
          확인
        </button>
      </ControlSection>
    </ConfirmModalWrapper>
  );
};

export default () =>
  createPortal(ConfirmModalComponent(), document.getElementById('portal'));
