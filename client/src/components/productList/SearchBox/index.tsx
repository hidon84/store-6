import React, { FC } from 'react';
import styled from 'styled-components';

import {
  SearchBoxUnderlineSVG,
  SearchSVG,
  VerticalDividerSVG,
  XSVG,
} from '~/assets';
import {
  SearchBoxForm,
  SearchInput,
  SearchIcon,
  SearchLine,
} from './index.style';

const SearchTermWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const RecentlySearchTermBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  opacity: 1;
  margin-bottom: 30px;

  ${SearchTermWrapper}:not(:last-child) {
    margin-right: 19px;
  }
`;

const Divider = styled.img`
  margin: 0 12px;
`;

const TermWrapper = styled.div`
  display: flex;
  overflow: hidden;
  max-width: 580px;
  cursor: pointer;
`;

const Term = styled.span`
  display: flex;
  white-space: nowrap;
`;

const X = styled.img`
  margin-left: 6px;
`;

interface Props {
  term: string;
}

const SearchTerm: FC<Props> = ({ term }) => {
  return (
    <SearchTermWrapper>
      <Term>{term}</Term>
      <X src={XSVG} alt="x" />
    </SearchTermWrapper>
  );
};

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
