import styled from 'styled-components';
import { SmallCircleSVG } from '~/assets';

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 83px;
  height: 83px;

  img{
    place-self: center;
    width: 47px;
    cursor: pointer;
    transition: all 300ms;
    &:hover {
      transform: scale(1.08);
    }
  }

  &.selected{
    background: url(${SmallCircleSVG}) no-repeat center center;
  }
`