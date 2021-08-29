import styled from 'styled-components';
import { BackArrowSVG, ProductPageLayoutDividerSVG } from '~/assets';
import ScrollProgressImage from '~/assets/scrollProgressImage.png';

const ProductDetailWrapper = styled.main`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  height: calc(100% - 54px);
  padding-top: 50px;
  margin-top: 4px;
  width: 900px;
`;

const LeftSection = styled.section`
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

const RightSection = styled(LeftSection)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  position: absolute;
  right: 150px;
`;

const LayoutDivider = styled.div`
  width: fit-content;
  position: absolute;
  left: 50%;
  top: 0%;
`;

const DivideLine = styled.img.attrs({
  src: ProductPageLayoutDividerSVG,
  alt: 'divider',
})`
  height: calc(100vh - 130px);
  position: relative;
`;

const PrevPageButton = styled.button`
  position: absolute;
  top: 90px;
  left: 0;
  width: 40px;
  cursor: pointer;
`;

const PrevPageArrow = styled.img.attrs({
  src: BackArrowSVG,
  alt: 'prev page',
})``;

const scrollProgressTransform = (progress: number) =>
  `translateY(${820 * progress}px) rotate(-90deg)`;

const ScrollProgress = styled.img.attrs({
  src: ScrollProgressImage,
  alt: 'scroll progress bar',
  width: '40px',
})`
  position: absolute;
  top: 10px;
  right: 3px;
  transform: rotate(-90deg);
`;

export default {
  ProductDetailWrapper,
  LeftSection,
  RightSection,
  LayoutDivider,
  DivideLine,
  PrevPageButton,
  PrevPageArrow,
  ScrollProgress,
  scrollProgressTransform,
};
