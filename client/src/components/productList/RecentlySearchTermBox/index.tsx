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

interface Props {
  termList: string[];
  removeTermOnList: (target: string) => void;
}

const RecentlySearchTermBox: FC<Props> = ({ termList, removeTermOnList }) => {
  return (
    <RecentlySearchTermBoxWrapper isEmpty={termList.length === 0}>
      <RecentlySearchTermTitle>최근 검색어</RecentlySearchTermTitle>
      <Divider src={VerticalDividerSVG} />
      <TermWrapper>
        {termList.map((term, idx) => (
          <SearchTerm
            term={term}
            key={`term-${idx}`}
            removeTermOnList={removeTermOnList}
          />
        ))}
      </TermWrapper>
    </RecentlySearchTermBoxWrapper>
  );
};

export default RecentlySearchTermBox;
