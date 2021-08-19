import styled from 'styled-components';
import { SmallCircleSVG } from '~/assets';

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 83px;
  height: 83px;

  img {
    place-self: center;
    width: 47px;
  }

  &:not(.selected) {
    img:hover {
      transition: all 300ms;
      transform: scale(1.2);
    }
  }

  &.selected {
    transform: scale(1.2);
    background: url(${SmallCircleSVG}) no-repeat center center;
  }
`;
