/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import { VerticalDividerSVG } from '~/assets';
import SearchTerm from '../SearchTerm';

import {
  RecentlySearchTermBoxWrapper,
  Divider,
  TermWrapper,
} from './index.style';

const RecentlySearchTermBox: FC = () => {
  const terms: string[] = [
    '지로보',
    '길게하면 어디까지 가려나',
    '길게하면 어디까지 가려나',
    '길게하면 어디까지 가려나',
    // '길게하면 어디까지 가려나',
  ];

  return (
    <RecentlySearchTermBoxWrapper>
      <span>최근 검색어</span>
      <Divider src={VerticalDividerSVG} />
      <TermWrapper>
        {terms.map((term, idx) => (
          <SearchTerm term={term} key={`term-${idx}`} />
        ))}
      </TermWrapper>
    </RecentlySearchTermBoxWrapper>
  );
};

export default RecentlySearchTermBox;
