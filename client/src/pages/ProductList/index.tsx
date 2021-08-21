/* eslint-disable @typescript-eslint/no-use-before-define */
import { FC, createContext, useEffect, useState, useCallback } from 'react';

import * as productsAPI from '~/lib/api/products';
import {
  ProductsGetRequestQuery,
  ProductsGetResponseBody,
} from '~/lib/api/types';
import productListModule, { ActionType } from '~/stores/productListModule';

import CategoryFilter from '~/components/productList/CategoryFilter';
import CategoryIdentifier from '~/components/productList/CategoryIdentifier';
import OrderFilter from '~/components/productList/OrderFilter';
import ProductItemContainer from '~/components/productList/ProductItemContainer';
import SearchBox from '~/components/productList/SearchBox';

import {
  ProductListWrapper,
  LeftSection,
  RightSection,
  VerticalDivider,
} from './index.style';

export interface ProductData {
  idx: number;
  title: string;
  thumbnail: string;
  price: number;
}

interface FilterContextState {
  state: ProductsGetRequestQuery;
  dispatch: (action: ActionType) => void;
}

export const FilterContext = createContext<FilterContextState>(null);

const ProductList: FC = () => {
  const { filterState, dispatch } = productListModule();
  const [products, setProducts] = useState<ProductsGetResponseBody[]>([]);

  const { category, order, search } = filterState;
  useEffect(() => {
    fetchProducts(setProducts);
  }, [category, order, search]);

  return (
    <FilterContext.Provider value={{ state: filterState, dispatch }}>
      {console.log(products)}
      <ProductListWrapper>
        <LeftSection>
          <CategoryFilter />
          <OrderFilter />
        </LeftSection>
        <VerticalDivider />
        <RightSection>
          <CategoryIdentifier />
          <SearchBox />
          <ProductItemContainer products={products} />
        </RightSection>
      </ProductListWrapper>
    </FilterContext.Provider>
  );
};

export default ProductList;

// API
const fetchProducts = async (
  setProducts: React.Dispatch<React.SetStateAction<ProductsGetResponseBody[]>>,
) => {
  try {
    const { statusCode, data: products } = await productsAPI.getProducts();
    if (statusCode === 200) setProducts(products);
  } catch (error) {
    throw new Error(error);
  }
};
