/* eslint-disable react/no-array-index-key */
import { FC, useContext, useRef, useState } from 'react';

import { SearchBoxUnderlineSVG, SearchSVG } from '~/assets';
import { FilterContext } from '~/pages/ProductList';
import { removeSearchValue, setSearchValue } from '~/stores/productListModule';
import {
  getValueOnLocalStorage,
  setValueOnLocalStorage,
} from '~/utils/localStorage';

import RecentlySearchTermBox from '../RecentlySearchTermBox';
import {
  SearchBoxForm,
  SearchInput,
  SearchIcon,
  SearchLine,
} from './index.style';

/**
 * localStorage와 termList에 최근 검색어를 갱신합니다.
 * 인자로 받은 검색어가 이미 최근 검색어가 있다면 반영하지 않습니다.
 */
const reflectRenewTerm = (
  term: string,
  setTermList: React.Dispatch<React.SetStateAction<string[]>>,
) => {
  const storedTermValue = getValueOnLocalStorage('recentlySearchTerm');
  if (storedTermValue.includes(term)) return;

  const addedTermList = [...storedTermValue, term];
  setValueOnLocalStorage('recentlySearchTerm', addedTermList);
  setTermList(addedTermList);
};

/**
 * 최근 검색어 리스트를 관리하는 훅입니다.
 */
const useSearchTerm = (
  searchTermRef: React.MutableRefObject<HTMLInputElement>,
) => {
  const { dispatch } = useContext(FilterContext);

  const [termList, setTermList] = useState<string[]>(
    getValueOnLocalStorage('recentlySearchTerm'),
  );

  const handleSearchFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const term = searchTermRef.current.value;
    if (term === '') {
      return dispatch(removeSearchValue());
    }

    dispatch(setSearchValue(term));
    reflectRenewTerm(term, setTermList);
  };

  return { termList, handleSearchFormSubmit };
};

const SearchBox: FC = () => {
  const searchTermRef = useRef<HTMLInputElement>();
  const { termList, handleSearchFormSubmit } = useSearchTerm(searchTermRef);

  return (
    <>
      <SearchBoxForm onSubmit={handleSearchFormSubmit}>
        <SearchIcon src={SearchSVG} />
        <SearchInput type="search" name="q" ref={searchTermRef} />
        <SearchLine src={SearchBoxUnderlineSVG} alt="search-line" />
      </SearchBoxForm>
      <RecentlySearchTermBox termList={termList} />
    </>
  );
};

export default SearchBox;
