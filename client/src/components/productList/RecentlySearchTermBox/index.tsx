/* eslint-disable react/no-array-index-key */
import { FC, useEffect, useState } from 'react';
import { VerticalDividerSVG } from '~/assets';
import { getValueOnLocalStorage } from '~/utils/localStorage';
import SearchTerm from '../SearchTerm';

import {
  RecentlySearchTermBoxWrapper,
  Divider,
  TermWrapper,
  RecentlySearchTermTitle,
} from './index.style';

const RecentlySearchTermBox: FC = () => {
  const [searchTerm, setSearchTerm] = useState<string[]>(
    getValueOnLocalStorage('recentlySearchTerm'),
  );

  return (
    <RecentlySearchTermBoxWrapper>
      <RecentlySearchTermTitle>최근 검색어</RecentlySearchTermTitle>
      <Divider src={VerticalDividerSVG} />
      <TermWrapper>
        {searchTerm.map((term, idx) => (
          <SearchTerm term={term} key={`term-${idx}`} />
        ))}
      </TermWrapper>
    </RecentlySearchTermBoxWrapper>
  );
};

export default RecentlySearchTermBox;
