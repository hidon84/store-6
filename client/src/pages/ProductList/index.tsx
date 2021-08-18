import React, { FC, createContext } from 'react';
import CategoryFilter from '~/components/CategoryFilter';
import OrderFilter from '~/components/OrderFilter';
import productModule, {
  CategoryType,
  DEFAULT_FILTER,
  OrderType,
  SearchValueType,
} from '~/stores/productModule';

import {
  ProductListWrapper,
  LeftSection,
  RightSection,
  VerticalDivider,
} from './index.style';

export const FilterContext = createContext({
  ...DEFAULT_FILTER,
  setCategory: (_: CategoryType) => {},
  setOrder: (_: OrderType) => {},
  setSearchValue: (_: SearchValueType) => {},
  setPage: () => {},
});

const ProductList: FC = () => {
  const { filter, setCategory, setOrder, setSearchValue, setPage } =
    productModule();

  return (
    <FilterContext.Provider
      value={{ ...filter, setCategory, setOrder, setSearchValue, setPage }}
    >
      <ProductListWrapper>
        <LeftSection>
          <CategoryFilter />
          <OrderFilter />
        </LeftSection>
        <VerticalDivider />
        <RightSection>
          <button type="button">카테고리 현재 선택</button>
          <div>검색</div>
          <div>상품리스트</div>
          <div>스크롤</div>
        </RightSection>
      </ProductListWrapper>
    </FilterContext.Provider>
  );
};

export default ProductList;
