import { ActionType, IFilter } from '~/stores/productFilterModule';
import createNamedContext from './createNamedContext';

interface FilterContextState {
  state: IFilter;
  dispatch: (action: ActionType) => void;
}

const FilterContext = createNamedContext<FilterContextState>('FilterContext');

export default FilterContext;
