import { useContext, useState } from 'react';
import { FilterContext } from '~/pages/ProductList';
import { removeSearchValue, setSearchValue } from '~/stores/productListModule';
import {
  getValueOnLocalStorage,
  setValueOnLocalStorage,
} from '~/utils/localStorage';

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
   * localStorage와 termList에 최근 검색어를 갱신합니다.
   */
  const reflectRenewTerm = (renewTermList: string[]) => {
    setValueOnLocalStorage('recentlySearchTerm', renewTermList);
    setTermList(renewTermList);
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

  return { termList, handleSearchTrigger, removeTermOnList };
};

export default useSearchTerm;
