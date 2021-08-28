import { FC, useContext, useEffect, useRef } from 'react';

import { SearchBoxUnderlineSVG, SearchSVG, XSVG } from '~/assets';

import RecentlySearchTermBox from '~/components/productList/RecentlySearchTermBox';

import FetchContext from '~/lib/contexts/fetchContext';
import FilterContext from '~/lib/contexts/filterContext';
import useSearchTerm from '~/lib/hooks/useSearchTerm';

import { startFetch } from '~/stores/fetchModule';
import { removeSearchValue } from '~/stores/productListModule';

import S from './index.style';

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

  const handleInput = () => {
    if (searchTermRef.current.value === '') removeTerm();
  };

  return (
    <>
      <S.SearchBoxForm onSubmit={handleSearchTrigger}>
        <S.SearchButton type="submit">
          <img src={SearchSVG} alt="search" />
        </S.SearchButton>
        <S.SearchInput
          type="search"
          name="q"
          ref={searchTermRef}
          onInput={handleInput}
        />
        <S.SearchLine src={SearchBoxUnderlineSVG} alt="search-line" />
        <S.ValueRemoveButton
          type="button"
          isEmpty={isSearchValueEmpty}
          onClick={removeTerm}
        >
          <img src={XSVG} alt="x" />
        </S.ValueRemoveButton>
      </S.SearchBoxForm>
      <RecentlySearchTermBox
        termList={termList}
        removeTermOnList={removeTermOnList}
      />
    </>
  );
};

export default SearchBox;
