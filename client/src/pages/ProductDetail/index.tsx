/* eslint-disable @typescript-eslint/no-use-before-define */
import { FC, useEffect, useState } from 'react';

import ProductDetailContainer from '~/components/productDetail/ProductDetailContainer';

import { BackArrowSVG, ProductPageLayoutDividerSVG } from '~/assets';
import {
  ProductDetailWrapper,
  LeftSection,
  RightSection,
  LayoutDivider,
  PrevPageButton,
} from './index.style';

const ProductDetail: FC = () => {
  return (
    <ProductDetailWrapper>
      <PrevPageButton>
        <img src={BackArrowSVG} alt="back" />
      </PrevPageButton>
      <LeftSection />
      <LayoutDivider aria-hidden="true">
        <img src={ProductPageLayoutDividerSVG} alt="divider" />
      </LayoutDivider>
      <RightSection>
        <ProductDetailContainer />
      </RightSection>
    </ProductDetailWrapper>
  );
};

export default ProductDetail;
