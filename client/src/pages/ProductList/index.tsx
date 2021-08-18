import React, { FC } from 'react';

import {
  ProductListWrapper,
  LeftSection,
  RightSection,
  VerticalDivider,
} from './index.style';

const ProductList: FC = () => {
  return (
    <ProductListWrapper>
      <LeftSection>
        <div>카테고리 컴포넌트</div>
        <div>순서 컴포넌트</div>
      </LeftSection>
      <VerticalDivider />
      <RightSection>
        <div>카테고리 현재 선택</div>
        <div>검색</div>
        <div>상품리스트</div>
        <div>스크롤</div>
      </RightSection>
    </ProductListWrapper>
  );
};

export default ProductList;
