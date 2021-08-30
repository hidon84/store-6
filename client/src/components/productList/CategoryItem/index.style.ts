import styled, { css } from 'styled-components';
import { SmallCircleSVG } from '~/assets';

const ImageContainer = styled.div<{ isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 83px;
  height: 83px;

  img {
    place-self: center;
    width: 47px;
  }

  ${({ isSelected }) =>
    !isSelected
      ? css`
          img:hover {
            transition: all 300ms;
            transform: scale(1.2);
          }
        `
      : css`
          transform: scale(1.2);
          background: url(${SmallCircleSVG}) no-repeat center center;
        `}
`;

export default { ImageContainer };
