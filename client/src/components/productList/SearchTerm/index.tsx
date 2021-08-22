import { FC, useContext } from 'react';
import { XSVG } from '~/assets';
import { FilterContext } from '~/pages/ProductList';
import { setSearchValue } from '~/stores/productListModule';

import { SearchTermWrapper, Term, X } from './index.style';

interface Props {
  term: string;
  removeTermOnList: (target: string) => void;
}

const SearchTerm: FC<Props> = ({ term, removeTermOnList }) => {
  const { dispatch } = useContext(FilterContext);
  return (
    <SearchTermWrapper>
      <Term onClick={() => dispatch(setSearchValue(term))}>{term}</Term>
      <X src={XSVG} alt="x" onClick={() => removeTermOnList(term)} />
    </SearchTermWrapper>
  );
};

export default SearchTerm;
