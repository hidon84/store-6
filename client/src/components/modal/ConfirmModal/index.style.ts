import styled from 'styled-components';

export const ConfirmModalWrapper = styled.aside`
  opacity: 0;
  box-sizing: border-box;
  position: absolute;
  top: 320px;
  left: 50%;
  transform: translateX(-50%);
  width: 463px;
  padding: 29px 39px;
  border-radius: 20px;
  background-color: #fff;
  filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.5));
  font-size: 20px;
  z-index: -1;

  & > span {
    display: block;
    margin-bottom: 50px;
    line-height: 1.2;
  }

  &.show {
    opacity: 1;
    z-index: 9999;
  }
`;

export const ControlSection = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  display: flex;
  gap: 35px;
  width: fit-content;
  padding: 17px 32px;

  & > .button {
    all: unset;
    padding: 10px;
    cursor: pointer;
  }

  & > .confirm {
    color: var(--baemin100);
  }
`;
