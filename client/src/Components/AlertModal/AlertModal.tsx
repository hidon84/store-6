import { createPortal } from 'react-dom';
import { AlertModalWrapper } from './AlertModal.style';

const AlertModalComponent = () => {
  return (
    <AlertModalWrapper>
      <span />
    </AlertModalWrapper>
  );
};

export default () =>
  createPortal(AlertModalComponent(), document.getElementById('portal'));
