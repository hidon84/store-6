import styled from 'styled-components';

export const ScrollToTopWrapper = styled.aside<{ isVisible: boolean }>`
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  position: fixed;
  bottom: 50px;
  right: 270px;
  width: 35px;
  transition: opacity 150ms;
  cursor: pointer;
`;
