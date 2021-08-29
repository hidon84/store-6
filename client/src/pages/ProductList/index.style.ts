import styled from 'styled-components';
import { VertLineSVG } from '~/assets';

const ProductListWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const LeftSection = styled.section`
  height: 700px;
  position: sticky;
  margin-top: 50px;
  top: 83px;
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

const RightSection = styled.section`
  width: 100%;
`;

const VerticalDivider = styled.div`
  width: 1px;
  margin: 0 45px;
  min-height: 100%;
  background: url(${VertLineSVG}) bottom left no-repeat;
  background-size: cover;
`;

export default {
  ProductListWrapper,
  LeftSection,
  RightSection,
  VerticalDivider,
};
