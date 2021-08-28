import styled from 'styled-components';
import { underlineSVG } from '~/assets';

export const StyledUnderLine = styled.div`
  display: flex;
  right: 3px;
  position: relative;
`;

export const UnderLineContent = styled.img.attrs({
  src: underlineSVG,
  alt: 'line to divide',
})`
  height: 4px;
  all: unset;
  margin: 0;
`;
