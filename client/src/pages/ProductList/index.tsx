import { FC, createContext } from 'react';
import CategoryFilter from '~/components/CategoryFilter';
import OrderFilter from '~/components/OrderFilter';
import { ProductsGetRequestQuery } from '~/lib/api/types';
import productListModule, {
  ActionType,
  INITIAL_FILTER_STATE,
} from '~/stores/productListModule';

import {
  ProductListWrapper,
  LeftSection,
  RightSection,
  VerticalDivider,
} from './index.style';

interface FilterContextState {
  state: ProductsGetRequestQuery;
  dispatch: (action: ActionType) => void;
}

export const FilterContext = createContext<FilterContextState>(null);

const ProductList: FC = () => {
  const { filterState, dispatch } = productListModule();

  return (
    <FilterContext.Provider value={{ state: filterState, dispatch }}>
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
