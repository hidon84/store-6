import styled from 'styled-components';
import { SubPageUnderlineSVG } from '~/assets';

export const StyledSubPageHeader = styled.div<{ width?: string }>`
  font-size: 25px;
  width: ${({ width = '100%' }) => width};
`;

export const StyledSubPageHeaderInner = styled.div`
  width: 700px;
`;

export const LineWrapper = styled.div`
  display: flex;
  right: 7px;
  position: relative;
`;

export const Line = styled.img.attrs({
  src: SubPageUnderlineSVG,
  alt: 'line to divide',
})`
  height: 4px;
  all: unset;
  margin: 0;
`;

export const SubPageHeaderWrap = styled.div`
  padding: 6px 40px 20px 30px;
  display: flex;
  gap: 70px;
`;
