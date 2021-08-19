import React, { FC } from 'react';

import { SearchBoxUnderlineSVG, SearchSVG } from '~/assets';
import {
  SearchBoxForm,
  SearchInput,
  SearchIcon,
  SearchLine,
} from './index.style';

const SearchBox: FC = () => {
  return (
    <SearchBoxForm onSubmit={(e) => e.preventDefault()}>
      <SearchIcon src={SearchSVG} />
      <SearchInput type="search" name="q" />
      <SearchLine src={SearchBoxUnderlineSVG} alt="search-line" />
    </SearchBoxForm>
  );
};

export default SearchBox;
