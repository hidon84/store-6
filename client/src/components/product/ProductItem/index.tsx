import React, { useCallback, useState } from 'react';
import useDebounce from '~/lib/hooks/useDebounce';
import { formatPrice } from '~/utils/formatPrice';
import ProductItemWrapper from '~/components/product/ProductItemWrapper';
import {
  ProductInfoWrapper,
  ProductTitle,
  ProductPrice,
  ProductLikeButtonWrapper,
} from './index.style';
import ProductImage from '../ProductImage';
import ProductLikeButton from '../ProductLikeButton';

interface Props {
  idx: number;
  thumbnail: string;
  title: string;
  price: number;
  onClick?: (idx: number) => void;
  onClickLike?: (idx: number) => void;
  isLike?: boolean;
  isLikeItem?: boolean;
}

const ProductItem: React.FC<Props> = ({
  idx,
  thumbnail,
  title,
  price,
  onClick,
  onClickLike,
  isLike = false,
  isLikeItem = false,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const DELAYED_TIME = 80;
  const delayedIsHovered = useDebounce(isHovered, DELAYED_TIME);

  const handleOnMouseEnter = (): void => setIsHovered(true);
  const handleOnMouseLeave = (): void => setIsHovered(false);

  const onClickHandler = useCallback(() => {
    if (onClick) {
      onClick(idx);
    }
  }, [onClick, idx]);

  const onClickLikeHandler = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (onClickLike) {
        onClickLike(idx);
      }
    },
    [onClickLike, idx],
  );

  return (
    <ProductItemWrapper
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      onClick={onClickHandler}
    >
      <ProductImage
        src={thumbnail}
        autoHover={false}
        isHovered={isLikeItem ? false : delayedIsHovered}
      />
      {isLikeItem && (
        <ProductLikeButtonWrapper>
          <ProductLikeButton
            isLike={isLike}
            onClick={onClickLikeHandler}
            fillLineWhenHover
          />
        </ProductLikeButtonWrapper>
      )}
      <ProductInfoWrapper isHovered={delayedIsHovered}>
        <ProductTitle>{title}</ProductTitle>
        <ProductPrice>{formatPrice(price)}</ProductPrice>
      </ProductInfoWrapper>
    </ProductItemWrapper>
  );
};

export default ProductItem;
