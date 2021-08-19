import { FC } from 'react';
import { XSVG } from '~/assets';

import { SearchTermWrapper, Term, X } from './index.style';

interface Props {
  term: string;
}

const SearchTerm: FC<Props> = ({ term }) => {
  return (
    <SearchTermWrapper>
      <Term>{term}</Term>
      <X src={XSVG} alt="x" />
    </SearchTermWrapper>
  );
};

export default SearchTerm;
