/* eslint-disable react/no-array-index-key */
import { FC } from 'react';

import { SearchBoxUnderlineSVG, SearchSVG } from '~/assets';
import RecentlySearchTermBox from '../RecentlySearchTermBox';
import {
  SearchBoxForm,
  SearchInput,
  SearchIcon,
  SearchLine,
} from './index.style';

const SearchBox: FC = () => {
  return (
    <>
      <SearchBoxForm onSubmit={(e) => e.preventDefault()}>
        <SearchIcon src={SearchSVG} />
        <SearchInput type="search" name="q" />
        <SearchLine src={SearchBoxUnderlineSVG} alt="search-line" />
      </SearchBoxForm>
      <RecentlySearchTermBox />
    </>
  );
};

export default SearchBox;
