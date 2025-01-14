/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React, { FC, useCallback } from 'react';
import { useHistory } from '~/core/Router';
import { ImageWrapper, ProductRecommendContainerWrapper } from './index.style';

interface Props {
  products: {
    idx: number;
    thumbnail: string;
  }[];
}

const ProductRecommendContainer: FC<Props> = ({ products }) => {
  const { push } = useHistory();

  const handleImgClick = useCallback((idx: number) => {
    push(`/products/${idx}`);
  }, []);

  return (
    <ProductRecommendContainerWrapper>
      <div>추천상품</div>
      <ImageWrapper>
        {products &&
          products.map((product) => (
            <img
              key={product.idx}
              onClick={() => {
                handleImgClick(product.idx);
              }}
              src={product.thumbnail}
              alt="recommend"
              referrerPolicy="no-referrer"
            />
          ))}
      </ImageWrapper>
    </ProductRecommendContainerWrapper>
  );
};

export default ProductRecommendContainer;
