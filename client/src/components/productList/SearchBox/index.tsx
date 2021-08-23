import { FC, useContext, useEffect, useRef } from 'react';

import { SearchBoxUnderlineSVG, SearchSVG, XSVG } from '~/assets';
import { FetchContext, FilterContext } from '~/pages/ProductList';
import { startFetch } from '~/stores/fetchModule';
import { removeSearchValue } from '~/stores/productListModule';

import RecentlySearchTermBox from '../RecentlySearchTermBox';
import {
  SearchBoxForm,
  SearchInput,
  SearchButton,
  SearchLine,
  ValueRemoveButton,
} from './index.style';
import useSearchTerm from './useSearchTerm';

const SearchBox: FC = () => {
  const searchTermRef = useRef<HTMLInputElement>();
  const isSearchValueEmpty = searchTermRef.current?.value.length === 0;
  const { termList, handleSearchTrigger, removeTermOnList } =
    useSearchTerm(searchTermRef);

  const { dispatch, ...filterValue } = useContext(FilterContext);
  const { dispatch: fetchDispatch } = useContext(FetchContext);
  const currentSearchTerm = filterValue.state.search;

  useEffect(() => {
    if (currentSearchTerm) searchTermRef.current.value = currentSearchTerm;
  }, [currentSearchTerm]);

  const removeTerm = () => {
    dispatch(removeSearchValue());
    fetchDispatch(startFetch());
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
