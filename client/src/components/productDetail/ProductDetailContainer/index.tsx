import React, { FC } from 'react';
import Button from '~/components/common/Button';
import ProductLikeButton from '~/components/product/ProductLikeButton';
// import { ProductDetailGetResponseBody } from '~/lib/api/types';
import { formatPrice } from '~/utils/fotmatPrice';
import SubInfos from '../SubInfos';
import {
  ProductDetailContainerWrapper,
  ProductName,
  PriceParagraph,
  DiscountedPrice,
  OriginPrice,
  MainSectionDivider,
  UserInteractArea,
  LikeButtonWrapper,
} from './index.style';

interface Props {
  // @TODO API 명세 타입 변경 시 해당 부분 변경 필요
  product: {
    name: string;
    originPrice: number;
    discountedPrice: number;
    mandatoryInfo: Record<string, string>;
    deliveryInfo: Record<string, string>;
    isLike: boolean;
    isCart: boolean;
  };
  onClickAddToCart?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClickLike?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ProductDetailContainer: FC<Props> = ({
  product,
  onClickAddToCart,
  onClickLike,
}) => {
  // @TODO API 명세 타입 변경 시 해당 부분 변경 필요
  const {
    name,
    discountedPrice,
    originPrice,
    mandatoryInfo,
    deliveryInfo,
    isLike,
  } = product;

  return (
    <ProductDetailContainerWrapper>
      <ProductName>{name}</ProductName>
      <PriceParagraph>
        <DiscountedPrice>{formatPrice(discountedPrice)}</DiscountedPrice>
        <OriginPrice>{formatPrice(originPrice)}</OriginPrice>
      </PriceParagraph>
      <MainSectionDivider />
      <SubInfos title="상품필수 정보" infos={mandatoryInfo} />
      <SubInfos title="배송 안내" infos={deliveryInfo} lastSubInfo />
      <MainSectionDivider />
      <UserInteractArea>
        <Button size="lg" onClick={onClickAddToCart}>
          장바구니에 추가
        </Button>
        <LikeButtonWrapper>
          <ProductLikeButton isLike={isLike} onClick={onClickLike} />
        </LikeButtonWrapper>
      </UserInteractArea>
    </ProductDetailContainerWrapper>
  );
};

export default ProductDetailContainer;
