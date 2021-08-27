import styled from 'styled-components';
import { BackArrowSVG, ProductPageLayoutDividerSVG } from '~/assets';
import ScrollProgressImage from '~/assets/scrollProgressImage.png';

export const ProductDetailWrapper = styled.main`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  height: calc(100% - 54px);
  padding-top: 50px;
  margin-top: 4px;
  width: 900px;
`;

export const LeftSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 100%;
  overflow-y: scroll;
  position: relative;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const RightSection = styled(LeftSection)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  position: absolute;
  right: 150px;
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
  height: calc(100vh - 130px);
  position: relative;
`;

export const PrevPageButton = styled.button`
  position: absolute;
  top: 90px;
  left: 0;
  width: 40px;
  cursor: pointer;
`;

export const PrevPageArrow = styled.img.attrs({
  src: BackArrowSVG,
  alt: 'prev page',
})``;

export const scrollProgressTransform = (progress: number) =>
  `translateY(${820 * progress}px) rotate(-90deg)`;

export const ScrollProgress = styled.img.attrs({
  src: ScrollProgressImage,
  alt: 'scroll progress bar',
  width: '40px',
})`
  position: absolute;
  top: 10px;
  right: 3px;
  transform: rotate(-90deg);
`;
