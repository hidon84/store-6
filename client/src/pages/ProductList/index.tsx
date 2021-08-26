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
  ErrorResponse,
  ProductsGetRequestQuery,
  ProductsGetResponseBody,
} from '~/lib/api/types';
import productListModule, {
  ActionType,
  setCategory,
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
  FetchModuleAction,
  finishFetch,
  initFetch,
  INIT_FETCH,
  START_FETCH,
} from '~/stores/fetchModule';
import { useLocation } from '~/core/Router';

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
    state: string;
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
  const [products, setProducts] = useState<ProductsGetResponseBody[]>([]);
  const { state } = useLocation();
  const listFooterRef = useRef<HTMLDivElement>();

  const { filterState, dispatch } = productListModule();
  const { state: fetchState, dispatch: fetchDispatch } = fetchModule();
  const entry = useIntersection(listFooterRef, {});

  const TARGET_POINT = 700;
  const isScrollPoint = useScrollPoint(TARGET_POINT);

  const fetchProducts = () => {
    const isNextPageRequest = filterState.page !== 1;
    productsAPI
      .getProducts(filterState)
      .then(({ data }) => {
        if (!isNextPageRequest) setProducts(data);
        else setProducts((prev) => [...prev, ...data]);

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
      dispatch(setCategory(CATEGORY_TO_IDX[state.category]));
    }
  }, [state]);

  useEffect(() => {
    if (fetchState.state === INIT_FETCH) fetchProducts();

    // TODO: 필터를 한번에 여러 번 누르는 경우를 대비하여 debounce를 걸어줘야 합니다.
    if (fetchState.state === START_FETCH) {
      setTimeout(() => fetchProducts(), fetchState.forcedDelayTime);
    }
  }, [filterState, fetchState.state]);

  useEffect(() => {
    if (
      fetchState.state !== INIT_FETCH && //
      entry?.isIntersecting
    ) {
      dispatch(setNextPage());
      fetchDispatch(initFetch());
    }
  }, [entry]);

  return (
    <FetchContext.Provider
      value={{ state: fetchState, dispatch: fetchDispatch }}
    >
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
            <ProductItemContainer products={products} ref={listFooterRef} />
          </RightSection>
          <ScrollToTop isVisible={isScrollPoint} />
        </ProductListWrapper>
      </FilterContext.Provider>
    </FetchContext.Provider>
  );
};

export default ProductList;
