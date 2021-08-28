import { FC, useEffect, useState, useRef } from 'react';

import * as productsAPI from '~/lib/api/products';
import { ErrorResponse, ProductsGetResponseBody } from '~/lib/api/types';
import productListModule, {
  setCategory,
  setLastPage,
  setNextPage,
} from '~/stores/productListModule';

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
import useIntersection from '~/lib/hooks/useIntersection';
import ScrollToTop from '~/components/productList/ScrollToTop';
import fetchModule, {
  finishFetch,
  initFetch,
  INIT_FETCH,
  START_FETCH,
} from '~/stores/fetchModule';
import { useLocation } from '~/core/Router';

import FilterContext from '~/lib/contexts/filterContext';
import FetchContext from '~/lib/contexts/fetchContext';

import useScrollPoint from '~/lib/hooks/useScrollPoint';

// Constants
const CATEGORY_TO_IDX = {
  book: 1,
  pencil: 2,
  house: 3,
  tree: 4,
  baedal: 5,
  kk: 6,
  hat: 7,
  gift: 8,
  colab: 9,
};

// Interface
export interface ProductData {
  idx: number;
  title: string;
  thumbnail: string;
  originPrice: number;
  discountedPrice: number;
}

// Component
const ProductList: FC = () => {
  const TARGET_POINT = 500;
  const DEFAULT_PRODUCTS_AMOUNT = 9;

  const [products, setProducts] = useState<ProductsGetResponseBody[]>([]);
  const { state } = useLocation();
  const listFooterRef = useRef<HTMLDivElement>();

  const { filterState, dispatch: productListDispatch } = productListModule();
  const { state: fetchState, dispatch: fetchDispatch } = fetchModule();
  const entry = useIntersection(listFooterRef, { threshold: 0.95 });

  const isScrollPoint = useScrollPoint(TARGET_POINT);

  const fetchProducts = () => {
    if (filterState.isLastPage) return;

    const isNextPageRequest = filterState.page !== 1;
    productsAPI
      .getProducts(filterState)
      .then(({ data }) => {
        if (data.length < DEFAULT_PRODUCTS_AMOUNT)
          productListDispatch(setLastPage());

        if (!isNextPageRequest) setProducts(data);
        else setProducts((prev) => [...prev, ...data]);
      })
      .then(() => {
        setTimeout(
          () => fetchDispatch(finishFetch()),
          fetchState.forcedDelayTime,
        );
      })
      .catch((error: ErrorResponse) => {
        throw new Error(error.data.message);
      });
  };

  useEffect(() => {
    if (!state) return;
    if (state.from === '/') {
      productListDispatch(setCategory(CATEGORY_TO_IDX[state.category]));
    }
  }, [state]);

  useEffect(() => {
    if (fetchState.action === INIT_FETCH) fetchProducts();

    // TODO: 필터를 한번에 여러 번 누르는 경우를 대비하여 debounce를 걸어줘야 합니다.
    if (fetchState.action === START_FETCH) {
      setTimeout(() => fetchProducts(), fetchState.forcedDelayTime);
    }
  }, [filterState, fetchState.action]);

  useEffect(() => {
    if (
      fetchState.action !== INIT_FETCH && //
      entry?.isIntersecting
    ) {
      productListDispatch(setNextPage());
      fetchDispatch(initFetch());
    }
  }, [entry]);

  return (
    <FetchContext.Provider
      value={{ state: fetchState, dispatch: fetchDispatch }}
    >
      <FilterContext.Provider
        value={{ state: filterState, dispatch: productListDispatch }}
      >
        <ProductListWrapper>
          <LeftSection>
            <CategoryFilter />
            <OrderFilter />
          </LeftSection>
          <VerticalDivider />
          <RightSection>
            <CategoryIdentifier />
            <SearchBox />
            <ProductItemContainer products={products} ref={listFooterRef} />
          </RightSection>
          <ScrollToTop isVisible={isScrollPoint} />
        </ProductListWrapper>
      </FilterContext.Provider>
    </FetchContext.Provider>
  );
};

export default ProductList;
