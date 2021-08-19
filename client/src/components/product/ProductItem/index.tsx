import React, { useState } from 'react';
import {
  ProductItemContainer,
  ProductImage,
  ProductInfoConatiner,
  ProductTitle,
  ProductPrice,
} from './index.style';

interface Props {
  idx: number;
  thumbnail: string;
  title: string;
  price: string;
}

const ProductItem: React.FC<Props> = ({ idx, thumbnail, title, price }) => {
  const [isProductImageHovered, setIsProductImageHovered] =
    useState<boolean>(false);

  const handleOnMouseEnter = (): void => {
    setIsProductImageHovered(true);
  };

  const handleOnMouseLeave = (): void => {
    setIsProductImageHovered(false);
  };

  return (
    <ProductItemContainer
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <ProductImage src={thumbnail} />
      {isProductImageHovered && (
        <ProductInfoConatiner>
          <ProductTitle>{title}</ProductTitle>
          <ProductPrice>{price}</ProductPrice>
        </ProductInfoConatiner>
      )}
    </ProductItemContainer>
  );
};

export default ProductItem;
