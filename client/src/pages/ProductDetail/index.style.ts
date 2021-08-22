import styled from 'styled-components';
import { BackArrowSVG, ProductPageLayoutDividerSVG } from '~/assets';

export const ProductDetailWrapper = styled.main`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 50px;
  width: 900px;
  height: 100%;
`;

export const LeftSection = styled.section`
  width: 400px;
`;

export const RightSection = styled(LeftSection)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 900px;
`;

export const LayoutDivider = styled.div`
  width: fit-content;
`;

export const DivideLine = styled.img.attrs({
  src: ProductPageLayoutDividerSVG,
  alt: 'divider',
})``;

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
