/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React, { FC } from 'react';
import styled from 'styled-components';
import { useHistory } from '~/core/Router';

const ProductRecommendContainerWrapper = styled.div`
  width: 300px;
  margin-top: 50px;
`;

const ImageWrapper = styled.div`
  display: flex;
  margin-top: 15px;
  img {
    width: 70px;
    height: 91.3px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
      drop-shadow(2px 2px 12px rgba(0, 0, 0, 0.15));
    border-radius: 10px;
    margin-right: 15px;
    cursor: pointer;

    &:hover {
      transition: transform 300ms;
      transform: scale(1.1);
    }
  }
`;

interface Props {
  products: {
    idx: number;
    thumbnail: string;
  }[];
}

const ProductRecommendContainer: FC<Props> = ({ products }) => {
  const { push } = useHistory();

  const handleImgClick = (idx: number) => {
    push(`/products/${idx}`);
  };

  return (
    <ProductRecommendContainerWrapper>
      <div>추천상품</div>
      <ImageWrapper>
        {products.map((product) => (
          <img
            key={product.idx}
            onClick={() => handleImgClick(product.idx)}
            src={product.thumbnail}
            alt="recommend"
          />
        ))}
      </ImageWrapper>
    </ProductRecommendContainerWrapper>
  );
};

export default ProductRecommendContainer;
