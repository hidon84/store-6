import styled, { css } from 'styled-components';

interface Props {
  autoHover?: boolean;
  isHovered?: boolean;
}

const ProductImage = styled.img<Props>`
  height: 300px;
  width: 230px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 2px 2px 12px rgba(0, 0, 0, 0.15);
  ${({ autoHover = true }) =>
    autoHover
      ? `
      &:hover {
        transfrom: scale(1.08);
      }
    `
      : css<Props>`
          transform: ${({ isHovered }) => (isHovered ? `scale(1.08)` : 'none')};
        `}
  transition: all 300ms ease-in-out;
`;

export default ProductImage;
