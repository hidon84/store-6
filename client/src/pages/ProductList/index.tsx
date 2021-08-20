/* eslint-disable @typescript-eslint/no-use-before-define */
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
          <ProductItemContainer products={DUMMY_DATA} />
        </RightSection>
      </ProductListWrapper>
    </FilterContext.Provider>
  );
};

export default ProductList;

const DUMMY_DATA: ProductData[] = [
  {
    idx: 0,
    thumbnail:
      'https://store-6-bucket.s3.ap-northeast-2.amazonaws.com/product/sample.jpeg',
    title: '때수건. 다 때가 있다',
    price: 2000,
  },
  {
    idx: 1,
    thumbnail:
      'https://store-6-bucket.s3.ap-northeast-2.amazonaws.com/product/sample.jpeg',
    title: '때수건. 다 때가 있다',
    price: 2000,
  },
  {
    idx: 2,
    thumbnail:
      'https://store-6-bucket.s3.ap-northeast-2.amazonaws.com/product/sample.jpeg',
    title: '때수건. 다 때가 있다',
    price: 2000,
  },
  {
    idx: 3,
    thumbnail:
      'https://store-6-bucket.s3.ap-northeast-2.amazonaws.com/product/sample.jpeg',
    title: '때수건. 다 때가 있다',
    price: 2000,
  },
  {
    idx: 4,
    thumbnail:
      'https://store-6-bucket.s3.ap-northeast-2.amazonaws.com/product/sample.jpeg',
    title: '때수건. 다 때가 있다',
    price: 2000,
  },
  {
    idx: 5,
    thumbnail:
      'https://store-6-bucket.s3.ap-northeast-2.amazonaws.com/product/sample.jpeg',
    title: '때수건. 다 때가 있다',
    price: 2000,
  },
  {
    idx: 6,
    thumbnail:
      'https://store-6-bucket.s3.ap-northeast-2.amazonaws.com/product/sample.jpeg',
    title: '때수건. 다 때가 있다',
    price: 2000,
  },
  {
    idx: 7,
    thumbnail:
      'https://store-6-bucket.s3.ap-northeast-2.amazonaws.com/product/sample.jpeg',
    title: '때수건. 다 때가 있다',
    price: 2000,
  },
  {
    idx: 8,
    thumbnail:
      'https://store-6-bucket.s3.ap-northeast-2.amazonaws.com/product/sample.jpeg',
    title: '때수건. 다 때가 있다',
    price: 2000,
  },
  {
    idx: 9,
    thumbnail:
      'https://store-6-bucket.s3.ap-northeast-2.amazonaws.com/product/sample.jpeg',
    title: '때수건. 다 때가 있다',
    price: 2000,
  },
  {
    idx: 10,
    thumbnail:
      'https://store-6-bucket.s3.ap-northeast-2.amazonaws.com/product/sample.jpeg',
    title: '때수건. 다 때가 있다',
    price: 2000,
  },
  {
    idx: 11,
    thumbnail:
      'https://store-6-bucket.s3.ap-northeast-2.amazonaws.com/product/sample.jpeg',
    title: '때수건. 다 때가 있다',
    price: 2000,
  },
];
