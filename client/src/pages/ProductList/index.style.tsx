import styled from 'styled-components';
import { VertLineSVG } from '~/assets';

export const ProductListWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const LeftSection = styled.section`
  width: 218px;
  height: 100%;
`;
export const RightSection = styled.section`
  width: 700px;
  height: 100%;
`;

export const VerticalDivider = styled.div`
  width: 1px;
  height: 100%;
  margin: 0 45px;
  background: url(${VertLineSVG}) bottom left no-repeat;
  background-size: cover;
`;
