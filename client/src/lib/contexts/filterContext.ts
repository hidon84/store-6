import { ActionType } from '~/stores/productListModule';
import { ProductsGetRequestQuery } from '../api/types';
import createNamedContext from './createNamedContext';

interface FilterContextState {
  state: ProductsGetRequestQuery;
  dispatch: (action: ActionType) => void;
}

const FilterContext = createNamedContext<FilterContextState>('FilterContext');

export default FilterContext;
