import React, { FC } from 'react';
import Button from '~/components/common/Button';
import ProductLikeButton from '~/components/product/ProductLikeButton';
import { ProductDetailGetResponseBody } from '~/lib/api/types';
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
  product: ProductDetailGetResponseBody;
  onClickAddToCart?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClickLike?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ProductDetailContainer: FC<Props> = ({
  product,
  onClickAddToCart,
  onClickLike,
}) => {
  if (!product) {
    return null;
  }

  const {
    title,
    discountedPrice,
    originPrice,
    mandatoryInfo,
    shipInfo,
    isLike,
  } = product;

  return (
    <ProductDetailContainerWrapper>
      <ProductName>{title}</ProductName>
      <PriceParagraph>
        {originPrice !== discountedPrice && (
          <OriginPrice>{formatPrice(originPrice)}</OriginPrice>
        )}
        <DiscountedPrice>{formatPrice(discountedPrice)}</DiscountedPrice>
      </PriceParagraph>
      <MainSectionDivider />
      <SubInfos title="상품필수 정보" infos={mandatoryInfo} />
      <SubInfos title="배송 안내" infos={shipInfo} lastSubInfo />
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
