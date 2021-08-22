import { FC } from 'react';

import { BackArrowSVG, ProductPageLayoutDividerSVG } from '~/assets';
import {
  ProductDetailWrapper,
  LeftSection,
  RightSection,
  LayoutDivider,
  PrevPageButton,
} from './index.style';

const ProductDetail: FC = () => (
  <ProductDetailWrapper>
    <PrevPageButton>
      <img src={BackArrowSVG} alt="back" />
    </PrevPageButton>
    <LeftSection />
    <LayoutDivider aria-hidden="true">
      <img src={ProductPageLayoutDividerSVG} alt="divider" />
    </LayoutDivider>
    <RightSection />
  </ProductDetailWrapper>
);

export default ProductDetail;
