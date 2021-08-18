import { useCallback, useState } from 'react';
import { ProductsGetRequestQuery } from '~/lib/api/types';

const DEFAULT_PAGE_NUMBER = 1;
const DEFAULT_PRODUCTS_AMOUNT = 20;

export type CategoryType = ProductsGetRequestQuery['category'];
export type OrderType = ProductsGetRequestQuery['order'];
export type SearchValueType = ProductsGetRequestQuery['search'];
export const DEFAULT_FILTER: ProductsGetRequestQuery = {
  order: 'recent',
  page: DEFAULT_PAGE_NUMBER,
  limit: DEFAULT_PRODUCTS_AMOUNT,
};

const productModule = () => {
  const [filter, setFilter] = useState({ ...DEFAULT_FILTER });

  const setCategory = useCallback((category: CategoryType) => {
    setFilter((prev) => ({ ...prev, category }));
  }, []);

  const setOrder = useCallback((order: OrderType) => {
    setFilter((prev) => ({ ...prev, order }));
  }, []);

  const setSearchValue = useCallback((search: SearchValueType) => {
    setFilter((prev) => ({ ...prev, search }));
  }, []);

  const setPage = useCallback(() => {
    setFilter((prev) => ({ ...prev, page: prev.page + 1 }));
  }, []);

  return { filter, setCategory, setOrder, setSearchValue, setPage };
};

export default productModule;
