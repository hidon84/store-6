import styled from 'styled-components';

export const AlertModalWrapper = styled.aside`
  opacity: 0;
  position: absolute;
  padding: 13px 30px;
  left: 50%;
  bottom: 40px;

  height: 20px;
  line-height: 1.71;
  font-size: 14px;
  color: #fff;
  background-color: #000;
  border-radius: 40px;
  transition: all 0.8s ease;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  z-index: -1;
  transform: translate(-50%, 0);

  &.show {
    opacity: 1;
    transform: translate(-50%, -80px);
    z-index: 9999;
  }
`;
