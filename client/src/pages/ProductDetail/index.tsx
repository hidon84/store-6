/* eslint-disable @typescript-eslint/no-use-before-define */
import { FC } from 'react';

import ProductDetailContainer from '~/components/productDetail/ProductDetailContainer';

import {
  ProductDetailWrapper,
  PrevPageArrow,
  LeftSection,
  RightSection,
  DivideLine,
  LayoutDivider,
  PrevPageButton,
} from './index.style';

const ProductDetail: FC = () => {
  return (
    <ProductDetailWrapper>
      <PrevPageButton>
        <PrevPageArrow />
      </PrevPageButton>
      <LeftSection />
      <LayoutDivider aria-hidden="true">
        <DivideLine />
      </LayoutDivider>
      <RightSection>
        <ProductDetailContainer />
      </RightSection>
    </ProductDetailWrapper>
  );
};

export default ProductDetail;
