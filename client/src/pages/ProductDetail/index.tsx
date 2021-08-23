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

const DUMMY_PRODUCT_INFO = {
  name: '요모포켓X배달이친구들 엉클배달이 포켓',
  originPrice: 99000,
  discountedPrice: 64000,
  mandatoryInfo: {
    제품명: '요모포켓X배달이친구들 독고배달이 포켓',
    치수: '6 x 7 x 10.3cm',
    제조국: '한국(소품, 피규어, 패키지) / 중국(케이스)',
    사용연령: '14세 이상',
    안전표시: '작은 부품은 질식할 위험이 있으니 절대로 입에 넣지 마세요',
  },
  deliveryInfo: {
    배송사: 'CJ 대한통운',
    배송비:
      '2,500원 (3만원 이상 구매 시 무료배송)\n도서, 산간 일부이경느 배송비가 추가될 수 있습니다.',
    배송기간:
      '오후 2시 이전 결제완료시 당일 출고 (영업일 기준)\n\n단, 상품의 재고 상황, 배송량, 배송지역에 따라 배송일이 추가로 소요될 수 있는 점 양해 부탁드립니다.',
  },
  isLike: false,
  isCart: false,
};

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
        <ProductDetailContainer product={DUMMY_PRODUCT_INFO} />
      </RightSection>
    </ProductDetailWrapper>
  );
};

export default ProductDetail;
