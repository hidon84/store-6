import React, { useCallback, useState } from 'react';
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
import debounce from '~/utils/debounce';

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

  const DELAYED_TIME = 100;
  const delayMouseEnter = useCallback(
    debounce(() => setIsHovered(true), DELAYED_TIME),
    [],
  );

  const delayMouseLeave = useCallback(
    debounce(() => setIsHovered(false), DELAYED_TIME),
    [],
  );

  const onClickHandler = useCallback(() => {
    if (onClick) onClick(idx);
  }, [onClick, idx]);

  const onClickLikeHandler = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (onClickLike) onClickLike(idx);
    },
    [onClickLike, idx],
  );

  return (
    <ProductItemWrapper
      onMouseEnter={delayMouseEnter}
      onMouseLeave={delayMouseLeave}
      onClick={onClickHandler}
    >
      <ProductImage
        src={thumbnail}
        autoHover={false}
        referrerPolicy="no-referrer"
        isHovered={isLikeItem ? false : isHovered}
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
      <ProductInfoWrapper isHovered={isHovered}>
        <ProductTitle>{title}</ProductTitle>
        <ProductPrice>{formatPrice(price)}</ProductPrice>
      </ProductInfoWrapper>
    </ProductItemWrapper>
  );
};

export default ProductItem;
