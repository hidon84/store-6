import { useReducer } from 'react';
import { ProductsGetRequestQuery } from '~/lib/api/types';

// Type
export type CategoryType = ProductsGetRequestQuery['category'];
export type OrderType = ProductsGetRequestQuery['order'];
export type SearchValueType = ProductsGetRequestQuery['search'];

interface IAction {
  category?: CategoryType;
  order?: OrderType;
  search?: SearchValueType;
}

export interface ActionType {
  type: string;
  payload?: IAction;
}

export interface IFilter extends ProductsGetRequestQuery {
  isLastPage: boolean;
}

const DEFAULT_PAGE_NUMBER = 1;
const DEFAULT_PRODUCTS_AMOUNT = 9;

// Actions
const SET_CATEGORY = 'SET_CATEGORY';
const RESET_CATEGORY = 'RESET_CATEGORY';

const SET_ORDER = 'SET_ORDER';
const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';
const SET_NEXT_PAGE = 'SET_NEXT_PAGE';
const REMOVE_SEARCH_VALUE = 'REMOVE_SEARCH_VALUE';

const SET_LAST_PAGE = 'SET_LAST_PAGE';

// Action Creator
export const setCategory = (payload: CategoryType) => {
  return {
    type: SET_CATEGORY,
    payload: { category: payload },
  };
};
export const setOrder = (payload: OrderType) => ({
  type: SET_ORDER,
  payload: { order: payload },
});
export const setSearchValue = (payload: SearchValueType) => ({
  type: SET_SEARCH_VALUE,
  payload: { search: payload },
});
export const removeSearchValue = () => ({ type: REMOVE_SEARCH_VALUE });
export const setNextPage = () => ({ type: SET_NEXT_PAGE });

export const resetCategory = () => ({
  type: RESET_CATEGORY,
});

export const setLastPage = () => ({ type: SET_LAST_PAGE });

// State
export const INITIAL_FILTER_STATE: IFilter = {
  order: 'recent',
  page: DEFAULT_PAGE_NUMBER,
  limit: DEFAULT_PRODUCTS_AMOUNT,
  isLastPage: false,
};

// Reducer
const filterReducer = (state: IFilter, action: ActionType): IFilter => {
  switch (action.type) {
    case SET_CATEGORY: {
      if (!('category' in state) || state.category !== action.payload) {
        return {
          ...state,
          category: action.payload.category,
          page: 1,
          isLastPage: false,
        };
      }
      const rest = { ...state };
      delete rest.category;
      return { ...rest, page: 1, isLastPage: false };
    }
    case SET_ORDER:
      return {
        ...state,
        order: action.payload.order,
        page: 1,
        isLastPage: false,
      };
    case SET_SEARCH_VALUE:
      return {
        ...state,
        search: action.payload.search,
        page: 1,
        isLastPage: false,
      };
    case REMOVE_SEARCH_VALUE: {
      const rest = { ...state };
      delete rest.search;
      return { ...rest, page: 1, isLastPage: false };
    }
    case SET_NEXT_PAGE:
      return { ...state, page: state.page + 1 };
    case RESET_CATEGORY: {
      const rest = { ...state };
      delete rest.category;
      return { ...rest, page: 1, isLastPage: false };
    }
    case SET_LAST_PAGE:
      return { ...state, isLastPage: true };
    default:
      return { ...state };
  }
};

const productFilterModule = () => {
  const [filterState, dispatch] = useReducer(
    filterReducer,
    INITIAL_FILTER_STATE,
  );

  return { state: filterState, dispatch };
};

export default productFilterModule;
