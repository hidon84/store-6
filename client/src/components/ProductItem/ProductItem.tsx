import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
  idx: number;
  thumbnail: string;
  title: string;
  price: string;
}

const ProductItemContainer = styled.div`
  position: relative;
  height: 300px;
  width: 230px;
  transition: all 300ms;
  &:hover {
    transform: scale(1.08);
  }
`;

const ProductImage = styled.img`
  height: 300px;
  width: 230px;
  border-radius: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    drop-shadow(2px 2px 12px rgba(0, 0, 0, 0.15));
  transition: all 300ms;
  ${ProductItemContainer}:hover & {
    filter: brightness(60%);
    transform: scale(1.08);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
      2px 2px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ProductInfoConatiner = styled.div`
  position: absolute;
  left: 0.5rem;
  bottom: 0.7rem;
`;

const ProductTitle = styled.div`
  width: 204px;
  height: 32px;
  font-size: 24px;
  color: #ffffff;
`;

const ProductPrice = styled.div`
  width: 179px;
  height: 18px;
  font-size: 18px;
  color: #ffffff;
`;

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
