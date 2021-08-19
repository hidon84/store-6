import React, { FC } from 'react';
import styled from 'styled-components';
import { SearchBoxUnderlineSVG, SearchSVG } from '~/assets';

const SearchBoxForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 700px;
  height: fit-content;
  margin-bottom: 64px;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 44px;
  font-size: 25px;
  line-height: 31px;
  padding-left: 80px;

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }
`;

const SearchIcon = styled.img`
  position: absolute;
  left: 23px;
  bottom: 12px;
  width: 30px;
`;

const SearchLine = styled.img`
  height: 4px;
  all: unset;
  margin: 0;
`;

const SearchBox: FC = () => {
  return (
    <SearchBoxForm onSubmit={(e) => e.preventDefault()}>
      <SearchIcon src={SearchSVG} />
      <SearchInput type="search" name="q" />
      <SearchLine src={SearchBoxUnderlineSVG} alt="search-line" />
    </SearchBoxForm>
  );
};

export default SearchBox;
