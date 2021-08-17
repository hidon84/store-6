import React, { MutableRefObject, RefObject, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { ConfirmModalWrapper, ControlSection } from './index.style';

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
  const styledDimRef: RefObject<HTMLDivElement> = useRef();
  const confirmModalRef: MutableRefObject<HTMLElement> = useRef();
  const hide = () => confirmModalRef.current.classList.remove('show');

  const onCancel = (e) => {
    // console.log(confirmModalRef.current.classList);
    console.log(e.target);

    // if (e.target !== confirmModalRef.current) {
    //   console.log(e.target);
    //   // 밖을 누른경우
    //   hide();
    // }
    // if (!confirmModalRef.current.classList.contains('show')) return;

    // if (e.target !== confirmModalRef.current)
    //   confirmModalRef.current.classList.remove('show');

    // if (!confirmModalRef.current.className.includes('show')) return;
  };

  //   useEffect(() => {
  //     document.addEventListener('click', onCancel);
  //     return () => document.removeEventListener('click', onCancel);
  //   }, []);

  return (
    <StyledDim onClick={(e) => onCancel(e)} ref={styledDimRef}>
      <ConfirmModalWrapper className="confirm-modal" ref={confirmModalRef}>
        <span>Lorem ipsum d</span>
        <ControlSection>
          <button type="button" className="button">
            취소
          </button>
          <button type="button" className="button confirm">
            확인
          </button>
        </ControlSection>
      </ConfirmModalWrapper>
    </StyledDim>
  );
};

export default () =>
  createPortal(ConfirmModalComponent(), document.getElementById('portal'));
