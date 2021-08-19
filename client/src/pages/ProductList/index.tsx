import { FC, createContext } from 'react';
import CategoryFilter from '~/components/productList/CategoryFilter';
import CategoryIdentifier from '~/components/productList/CategoryIdentifier';
import OrderFilter from '~/components/productList/OrderFilter';
import ProductItemContainer from '~/components/productList/ProductItemContainer';
import SearchBox from '~/components/productList/SearchBox';
import { ProductsGetRequestQuery } from '~/lib/api/types';
import productListModule, { ActionType } from '~/stores/productListModule';

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
          <CategoryIdentifier />
          <SearchBox />
          <ProductItemContainer />
        </RightSection>
      </ProductListWrapper>
    </FilterContext.Provider>
  );
};

export default ProductList;
