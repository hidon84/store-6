import { FC, useEffect, useState, useRef, useContext } from 'react';

import CategoryFilter from '~/components/productList/CategoryFilter';
import CategoryIdentifier from '~/components/productList/CategoryIdentifier';
import OrderFilter from '~/components/productList/OrderFilter';
import ProductItemContainer from '~/components/productList/ProductItemContainer';
import ScrollToTop from '~/components/productList/ScrollToTop';
import SearchBox from '~/components/productList/SearchBox';

import * as productsAPI from '~/lib/api/products';
import { ProductsGetResponseBody } from '~/lib/api/types';
import FilterContext from '~/lib/contexts/filterContext';
import FetchContext from '~/lib/contexts/fetchContext';
import useIntersection from '~/lib/hooks/useIntersection';
import useScrollPoint from '~/lib/hooks/useScrollPoint';

import fetchModule, {
  finishFetch,
  initFetch,
  INIT_FETCH,
  START_FETCH,
} from '~/stores/fetchModule';
import { setLastPage, setNextPage } from '~/stores/productFilterModule';

import S from './index.style';

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
  const listFooterRef = useRef<HTMLDivElement>();

  const { state: filterState, dispatch: productFilterDispatch } =
    useContext(FilterContext);
  const { state: fetchState, dispatch: fetchDispatch } = fetchModule();
  const entry = useIntersection(listFooterRef, {});

  const isScrollPoint = useScrollPoint(TARGET_POINT);

  const fetchProducts = async () => {
    if (filterState.isLastPage) return;

    try {
      const { data } = await productsAPI.getProducts(filterState);

      if (data.length < DEFAULT_PRODUCTS_AMOUNT)
        productFilterDispatch(setLastPage());

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
    if (fetchState.action === INIT_FETCH) fetchProducts();
    if (fetchState.action === START_FETCH) {
      setTimeout(() => fetchProducts(), fetchState.forcedDelayTime);
    }
  }, [filterState, fetchState.action]);

  useEffect(() => {
    if (fetchState.action !== INIT_FETCH && entry?.isIntersecting) {
      productFilterDispatch(setNextPage());
      fetchDispatch(initFetch());
    }
  }, [entry]);

  return (
    <FetchContext.Provider
      value={{ state: fetchState, dispatch: fetchDispatch }}
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
    </FetchContext.Provider>
  );
};

export default ProductList;
