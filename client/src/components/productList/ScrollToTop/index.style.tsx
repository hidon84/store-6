import styled from 'styled-components';

const LeftOffsetWithinScreen = 600;
export const ScrollToTopWrapper = styled.aside<{
  isVisible: boolean;
}>`
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  position: fixed;
  width: 35px;
  left: calc(50% + ${LeftOffsetWithinScreen}px);
  bottom: 50px;
  transition: opacity 150ms;
  cursor: pointer;
`;
