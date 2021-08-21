/* eslint-disable @typescript-eslint/no-use-before-define */
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

const useScrollPoint = (targetPoint: number): boolean => {
  const [isScrollPoint, setIsScrollPoint] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrollPoint(window.pageYOffset > targetPoint);
  }, []);
  window.addEventListener('scroll', handleScroll);
  return isScrollPoint;
};

const ProductList: FC = () => {
  const [products, setProducts] = useState<ProductsGetResponseBody[]>([]);
  const listFooterRef = useRef<HTMLDivElement>();
  const entry = useIntersection(listFooterRef, {});
  const { filterState, dispatch } = productListModule();
  const TARGET_POINT = 700;
  const isScrollPoint = useScrollPoint(TARGET_POINT);

  useEffect(() => {
    fetchProducts(filterState, setProducts);
  }, [filterState]);

  useEffect(() => {
    if (entry?.isIntersecting) dispatch(setNextPage());
  }, [entry]);

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
          <ProductItemContainer products={products} ref={listFooterRef} />
        </RightSection>
        <ScrollToTop isVisible={isScrollPoint} />
      </ProductListWrapper>
    </FilterContext.Provider>
  );
};

export default ProductList;

// API
const fetchProducts = async (
  filterState: ProductsGetRequestQuery,
  setProducts: React.Dispatch<React.SetStateAction<ProductsGetResponseBody[]>>,
) => {
  try {
    const { statusCode, data: products } = await productsAPI.getProducts(
      filterState,
    );
    if (statusCode === 200) {
      const isNextPageRequest = filterState.page !== 1;

      if (!isNextPageRequest) setProducts(products);
      else setProducts((prev) => [...prev, ...products]);
    }
  } catch (error) {
    // TODO: Error가 날 경우 alert 모달 등으로 사용자에게 에러 메시지를 보여줘야 합니다.
    throw new Error(error);
  }
};
