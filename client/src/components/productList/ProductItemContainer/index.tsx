import { FC } from 'react';

import styled from 'styled-components';
import ProductItem from '~/components/ProductItem';

const ProductItemContainerWrapper = styled.div`
  padding-left: 7px;
`;

const ProductItemContainer: FC = () => {
  const SAMPLE_THUMBNAIL =
    'https://store-6-bucket.s3.ap-northeast-2.amazonaws.com/product/sample.jpeg';

  return (
    <ProductItemContainerWrapper>
      <ProductItem
        thumbnail={SAMPLE_THUMBNAIL}
        price="2000"
        title="때수건. 다 때가 있다"
      />
    </ProductItemContainerWrapper>
  );
};

export default ProductItemContainer;
