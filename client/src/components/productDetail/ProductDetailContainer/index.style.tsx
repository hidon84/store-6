import styled from 'styled-components';
import {
  FilledHeartSVG,
  ProductInfoDividerSVG,
  ProductInfoSubDividerSVG,
  UnfilledHeartSVG,
} from '~/assets';

export const ProductDetailContainerWrapper = styled.div`
  width: 311px;
  height: fit-content;
`;

export const ProductName = styled.span`
  font-size: 35px;
  line-height: 44px;
`;

export const PriceParagraph = styled.p`
  display: flex;
`;

export const DiscountedPrice = styled.span`
  font-size: 20px;
  text-decoration-line: line-through;
  color: #999999;
`;

export const OriginPrice = styled.span`
  font-size: 30px;
  color: #000000;
`;

export const MainSectionDivider = styled.img.attrs({
  src: ProductInfoDividerSVG,
  alt: 'main-divider',
})``;

export const UserInteractArea = styled.div`
  text-align: right;
  margin-top: 25px;
`;

interface LikeButtonProps {
  isLike: boolean;
}
// https://github.com/styled-components/styled-components/issues/1959
export const LikeButton = styled.img.attrs<LikeButtonProps>(({ isLike }) => ({
  src: isLike ? FilledHeartSVG : UnfilledHeartSVG,
  alt: 'like-button',
}))<LikeButtonProps>``;
