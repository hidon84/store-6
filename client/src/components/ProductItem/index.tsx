import React, { useState } from 'react';
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
}

const ProductItem: React.FC<Props> = ({ thumbnail, title, price }) => {
  const [isProductImageHovered, setIsProductImageHovered] =
    useState<boolean>(false);

  const handleOnMouseEnter = (): void => setIsProductImageHovered(true);
  const handleOnMouseLeave = (): void => setIsProductImageHovered(false);

  return (
    <ProductItemWrapper
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <ProductImage src={thumbnail} />
      {isProductImageHovered && (
        <ProductInfoWrapper>
          <ProductTitle>{title}</ProductTitle>
          <ProductPrice>{price}</ProductPrice>
        </ProductInfoWrapper>
      )}
    </ProductItemWrapper>
  );
};

export default ProductItem;
