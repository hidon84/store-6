import {
  FC,
  createContext,
  useEffect,
  useState,
  useRef,
  useCallback,
} from 'react';

import * as productsAPI from '~/lib/api/products';
import {
  ProductsGetRequestQuery,
  ProductsGetResponseBody,
} from '~/lib/api/types';
import productListModule, {
  ActionType,
  setCategory,
  setLastPage,
  setNextPage,
} from '~/stores/productListModule';

import CategoryFilter from '~/components/productList/CategoryFilter';
import CategoryIdentifier from '~/components/productList/CategoryIdentifier';
import OrderFilter from '~/components/productList/OrderFilter';
import ProductItemContainer from '~/components/productList/ProductItemContainer';
import ScrollToTop from '~/components/productList/ScrollToTop';
import SearchBox from '~/components/productList/SearchBox';

import { useLocation } from '~/core/Router';

import S from './index.style';
import useIntersection from '~/lib/hooks/useIntersection';
import fetchModule, {
  FetchModuleAction,
  finishFetch,
  initFetch,
  INIT_FETCH,
  START_FETCH,
} from '~/stores/fetchModule';

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

interface FilterContextState {
  state: ProductsGetRequestQuery;
  dispatch: (action: ActionType) => void;
}

interface FetchContextState {
  state: {
    action: string;
    forcedDelayTime: number;
  };
  dispatch: (action: FetchModuleAction) => void;
}

// Context
export const FilterContext = createContext<FilterContextState>(null);
export const FetchContext = createContext<FetchContextState>(null);

// Hook (only use in here)
const useScrollPoint = (targetPoint: number): boolean => {
  const [isScrollPoint, setIsScrollPoint] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrollPoint(window.pageYOffset > targetPoint);
  }, []);
  window.addEventListener('scroll', handleScroll);
  return isScrollPoint;
};

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

  const fetchProducts = async () => {
    if (filterState.isLastPage) return;

    try {
      const { data } = await productsAPI.getProducts(filterState);

      if (data.length < DEFAULT_PRODUCTS_AMOUNT)
        productListDispatch(setLastPage());

      const isNextPageRequest = filterState.page !== 1;
      if (!isNextPageRequest) setProducts(data);
      else setProducts((prev) => [...prev, ...data]);

      setTimeout(
        () => fetchDispatch(finishFetch()),
        fetchState.forcedDelayTime,
      );
    } catch (error) {
      throw new Error(error.data.message);
    }
  };

  useEffect(() => {
    if (!state) return;
    if (state.from === '/') {
      productListDispatch(setCategory(CATEGORY_TO_IDX[state.category]));
    }
  }, [state]);

  useEffect(() => {
    if (fetchState.action === INIT_FETCH) fetchProducts();
    if (fetchState.action === START_FETCH) {
      setTimeout(() => fetchProducts(), fetchState.forcedDelayTime);
    }
  }, [filterState, fetchState.action]);

  useEffect(() => {
    if (fetchState.action !== INIT_FETCH && entry?.isIntersecting) {
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
        <S.ProductListWrapper>
          <S.LeftSection>
            <CategoryFilter />
            <OrderFilter />
          </S.LeftSection>
          <S.VerticalDivider />
          <S.RightSection>
            <CategoryIdentifier />
            <SearchBox />
            <ProductItemContainer products={products} ref={listFooterRef} />
          </S.RightSection>
          <ScrollToTop isVisible={isScrollPoint} />
        </S.ProductListWrapper>
      </FilterContext.Provider>
    </FetchContext.Provider>
  );
};

export default ProductList;
