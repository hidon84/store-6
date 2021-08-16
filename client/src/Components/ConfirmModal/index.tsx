import React from 'react';
import { createPortal } from 'react-dom';
import { ConfirmModalWrapper, ControlSection } from './index.style';

const ConfirmModalComponent = () => (
  <ConfirmModalWrapper>
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
);

export default () =>
  createPortal(ConfirmModalComponent(), document.getElementById('portal'));
