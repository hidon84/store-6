import { FC } from 'react';
import { XSVG } from '~/assets';

import { SearchTermWrapper, Term, X } from './index.style';

interface Props {
  term: string;
  removeTermOnList: (target: string) => void;
}

const SearchTerm: FC<Props> = ({ term, removeTermOnList }) => {
  return (
    <SearchTermWrapper>
      <Term>{term}</Term>
      <X src={XSVG} alt="x" onClick={() => removeTermOnList(term)} />
    </SearchTermWrapper>
  );
};

export default SearchTerm;
