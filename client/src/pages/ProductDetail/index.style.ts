import styled from 'styled-components';
import { BackArrowSVG, ProductPageLayoutDividerSVG } from '~/assets';

export const ProductDetailWrapper = styled.main`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 50px;
  width: 900px;
  margin-top: 4px;
  height: calc(100% - 54px);
  overflow-y: scroll;
`;

export const LeftSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

export const RightSection = styled(LeftSection)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  position: absolute;
  right: 200px;
  width: 300px;
`;

export const LayoutDivider = styled.div`
  width: fit-content;
  position: absolute;
  left: 50%;
  top: 0%;
`;

export const DivideLine = styled.img.attrs({
  src: ProductPageLayoutDividerSVG,
  alt: 'divider',
})`
  position: relative;
`;

export const PrevPageButton = styled.div`
  position: absolute;
  top: 90px;
  left: 0;
  width: 40px;
`;

export const PrevPageArrow = styled.img.attrs({
  src: BackArrowSVG,
  alt: 'prev page',
})``;
