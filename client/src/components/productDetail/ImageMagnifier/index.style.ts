import styled from 'styled-components';

interface IStyledMagnifierProps {
  imageSrc: string;
  width: number;
  height: number;
  show: boolean;
}

export const StyledImageMagnifier = styled.div`
  position: relative;
  width: 400px;
`;

export const StyledMagnifier = styled.div<IStyledMagnifierProps>`
  position: absolute;
  opacity: ${({ show }) => (show ? '1' : '0')};
  border-radius: 50%;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.85),
    0 0 3px 3px rgba(0, 0, 0, 0.25);

  background: ${({ imageSrc }) => `url(${imageSrc})`} no-repeat;

  ${({ width, height }) => `
    width: ${width}px;
    height: ${height}px;
  `}
`;
