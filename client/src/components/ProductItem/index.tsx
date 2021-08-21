import React, { MouseEventHandler, useState } from 'react';
import useDebounce from '~/lib/hooks/useDebounce';
import { formatPrice } from '~/utils/formatPrice';
import {
  ProductItemWrapper,
  ProductImage,
  ProductInfoWrapper,
  ProductTitle,
  ProductPrice,
} from './index.style';

interface Props {
  thumbnail: string;
  title: string;
  price: number;
  onClick: () => void;
}

const ProductItem: React.FC<Props> = ({ thumbnail, title, price, onClick }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const DELAYED_TIME = 80;
  const delayedIsHovered = useDebounce(isHovered, DELAYED_TIME);

  const handleOnMouseEnter = (): void => setIsHovered(true);
  const handleOnMouseLeave = (): void => setIsHovered(false);

  return (
    <ProductItemWrapper
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      onClick={onClick}
    >
      <ProductImage src={thumbnail} delayedIsHovered={delayedIsHovered} />
      <ProductInfoWrapper delayedIsHovered={delayedIsHovered}>
        <ProductTitle>{title}</ProductTitle>
        <ProductPrice>{formatPrice(price)}</ProductPrice>
      </ProductInfoWrapper>
    </ProductItemWrapper>
  );
};

export default ProductItem;
