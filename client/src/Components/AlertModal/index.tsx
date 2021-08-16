import { createPortal } from 'react-dom';
import { AlertModalWrapper } from './index.style';

const AlertModalComponent = () => (
  <AlertModalWrapper>
    <span />
  </AlertModalWrapper>
);

export default () =>
  createPortal(AlertModalComponent(), document.getElementById('portal'));
