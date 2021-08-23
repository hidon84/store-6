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
  FetchAction,
  FetchState,
  finishFetch,
} from '~/stores/fetchModule';

// Interface
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

interface FetchContextState {
  state: {
    state: string;
  };
  dispatch: (action: FetchAction) => void;
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
  const listFooterRef = useRef<HTMLDivElement>();

  const { filterState, dispatch } = productListModule();
  const { fetchState, fetchDispatch } = fetchModule();
  const entry = useIntersection(listFooterRef, {});

  const TARGET_POINT = 700;
  const isScrollPoint = useScrollPoint(TARGET_POINT);

  // API
  const fetchProducts = async () => {
    try {
      const { data } = await productsAPI.getProducts(filterState);
      const isNextPageRequest = filterState.page !== 1;

      if (!isNextPageRequest) setProducts(data);
      else setProducts((prev) => [...prev, ...data]);

      setTimeout(() => fetchDispatch(finishFetch()), 500);
    } catch (error) {
      // TODO: Error가 날 경우 alert 모달 등으로 사용자에게 에러 메시지를 보여줘야 합니다.
      // TODO: 현재 error 에 넘어오는 타입이 try 에서 나오는 에러와 혼재되어 있습니다. 이를 구분하거나, then catch를 사용해야 합니다.
      throw new Error(error);
    }
  };

  useEffect(() => {
    // TODO: 필터를 한번에 여러 번 누르는 경우를 대비하여 debounce를 걸어줘야 합니다.
    if (fetchState.state === 'START_FETCH') {
      setTimeout(() => fetchProducts(), 500);
    }
  }, [filterState, fetchState.state]);

  useEffect(() => {
    if (entry?.isIntersecting) dispatch(setNextPage());
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
