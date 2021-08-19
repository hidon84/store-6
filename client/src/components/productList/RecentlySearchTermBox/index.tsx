/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import { VerticalDividerSVG } from '~/assets';
import SearchTerm from '../SearchTerm';

import {
  RecentlySearchTermBoxWrapper,
  Divider,
  TermWrapper,
  RecentlySearchTermTitle,
} from './index.style';

const RecentlySearchTermBox: FC<{ termList: string[] }> = ({ termList }) => {
  return (
    <RecentlySearchTermBoxWrapper isEmpty={termList.length === 0}>
      <RecentlySearchTermTitle>최근 검색어</RecentlySearchTermTitle>
      <Divider src={VerticalDividerSVG} />
      <TermWrapper>
        {termList.map((term, idx) => (
          <SearchTerm term={term} key={`term-${idx}`} />
        ))}
      </TermWrapper>
    </RecentlySearchTermBoxWrapper>
  );
};

export default RecentlySearchTermBox;
