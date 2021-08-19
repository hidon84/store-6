import { useReducer } from 'react';
import { ProductsGetRequestQuery } from '~/lib/api/types';

// Type
export type CategoryType = ProductsGetRequestQuery['category'];
export type OrderType = ProductsGetRequestQuery['order'];
export type SearchValueType = ProductsGetRequestQuery['search'];

export interface ActionPayload {
  category?: CategoryType;
  order?: OrderType;
  search?: SearchValueType;
}

export interface ActionType {
  type: string;
  payload?: ActionPayload;
}

const DEFAULT_PAGE_NUMBER = 1;
const DEFAULT_PRODUCTS_AMOUNT = 20;

// Actions
const SET_CATEGORY = 'SET_CATEGORY';
const RESET_CATEGORY = 'RESET_CATEGORY';

const SET_ORDER = 'SET_ORDER';
const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';
const SET_NEXT_PAGE = 'SET_NEXT_PAGE';

// Action Creator
export const setCategory = (payload: CategoryType) => ({
  type: SET_CATEGORY,
  payload: { category: payload },
});
export const setOrder = (payload: OrderType) => ({
  type: SET_ORDER,
  payload: { order: payload },
});
export const setSearchValue = (payload: SearchValueType) => ({
  type: SET_SEARCH_VALUE,
  payload: { search: payload },
});
export const setNextPage = () => ({ type: SET_NEXT_PAGE });

export const resetCategory = () => ({
  type: RESET_CATEGORY,
});

// State
export const INITIAL_FILTER_STATE: ProductsGetRequestQuery = {
  order: 'recent',
  page: DEFAULT_PAGE_NUMBER,
  limit: DEFAULT_PRODUCTS_AMOUNT,
};

// Reducer
const filterReducer = (
  state: ProductsGetRequestQuery,
  action: ActionType,
): ProductsGetRequestQuery => {
  switch (action.type) {
    case SET_CATEGORY: {
      if (!('category' in state) || state.category !== action.payload)
        return { ...state, category: action.payload.category };
      const { category, ...rest } = state;
      return { ...rest };
    }
    case SET_ORDER:
      return { ...state, order: action.payload.order };
    case SET_SEARCH_VALUE:
      return { ...state, search: action.payload.search };
    case SET_NEXT_PAGE:
      return { ...state, page: state.page + 1 };
    case RESET_CATEGORY: {
      const { category, ...rest } = state;
      return { ...rest };
    }
    default:
      return { ...state };
  }
};

const productListModule = () => {
  const [filterState, dispatch] = useReducer(
    filterReducer,
    INITIAL_FILTER_STATE,
  );
  return { filterState, dispatch };
};

export default productListModule;
