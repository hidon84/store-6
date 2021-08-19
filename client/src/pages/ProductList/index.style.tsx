import styled from 'styled-components';
import { VertLineSVG } from '~/assets';

export const ProductListWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const LeftSection = styled.section`
  height: 700px;
  position: sticky;
  margin-top: 50px;
  top: 50px;
`;

export const RightSection = styled.section`
  width: 700px;
`;

export const VerticalDivider = styled.div`
  width: 1px;
  margin: 0 45px;
  min-height: 1000px;
  background: url(${VertLineSVG}) bottom left no-repeat;
  background-size: cover;
`;


