/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable consistent-return */
/* eslint-disable react/no-array-index-key */
import { FC, useContext, useEffect, useRef, useState } from 'react';

import { SearchBoxUnderlineSVG, SearchSVG, XSVG } from '~/assets';
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
  SearchButton,
  SearchLine,
  ValueRemoveButton,
} from './index.style';

const SearchBox: FC = () => {
  const searchTermRef = useRef<HTMLInputElement>();
  const isSearchValueEmpty = searchTermRef.current?.value.length === 0;
  const { termList, handleSearchTrigger, removeTermOnList } =
    useSearchTerm(searchTermRef);

  const { dispatch, ...filterValue } = useContext(FilterContext);
  const currentSearchTerm = filterValue.state.search;

  useEffect(() => {
    if (currentSearchTerm) searchTermRef.current.value = currentSearchTerm;
  }, [currentSearchTerm]);

  const removeTerm = () => {
    dispatch(removeSearchValue());
    searchTermRef.current.value = '';
  };

  return (
    <>
      <SearchBoxForm onSubmit={handleSearchTrigger}>
        <SearchButton type="submit">
          <img src={SearchSVG} alt="search" />
        </SearchButton>
        <SearchInput type="search" name="q" ref={searchTermRef} />
        <SearchLine src={SearchBoxUnderlineSVG} alt="search-line" />
        <ValueRemoveButton
          type="button"
          isEmpty={isSearchValueEmpty}
          onClick={removeTerm}
        >
          <img src={XSVG} alt="x" />
        </ValueRemoveButton>
      </SearchBoxForm>
      <RecentlySearchTermBox
        termList={termList}
        removeTermOnList={removeTermOnList}
      />
    </>
  );
};

export default SearchBox;

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

  /**
   * input에 있는 value를 상태에 반영합니다.
   * 만약, 빈 값을 받는다면 store의 search 값을 제거하는 요청을 보냅니다.
   */
  const handleSearchTrigger = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const term = searchTermRef.current.value;
    if (term === '') return dispatch(removeSearchValue());

    addTermOnList(term);
    dispatch(setSearchValue(term));
  };

  /**
   * term을 리스트에 추가합니다.
   * localStorage에 이미 term이 있을 경우, 추가하지 않습니다.
   */
  const addTermOnList = (term: string) => {
    const storedTermValue = getValueOnLocalStorage('recentlySearchTerm');
    if (storedTermValue && storedTermValue.includes(term)) return;

    const addedTermList = storedTermValue ? [...storedTermValue, term] : [term];
    reflectRenewTerm(addedTermList);
  };

  /**
   * target을 termList에서 제거합니다.
   */
  const removeTermOnList = (target: string) => {
    const removedTermList = termList.filter((term) => term !== target);
    reflectRenewTerm(removedTermList);
  };

  /**
   * localStorage와 termList에 최근 검색어를 갱신합니다.
   */
  const reflectRenewTerm = (renewTermList: string[]) => {
    setValueOnLocalStorage('recentlySearchTerm', renewTermList);
    setTermList(renewTermList);
  };

  return { termList, handleSearchTrigger, removeTermOnList };
};
