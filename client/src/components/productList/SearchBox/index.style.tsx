import styled from 'styled-components';

export const SearchBoxForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 700px;
  height: fit-content;
  margin-bottom: 64px;
  margin-bottom: 13px;
`;

export const SearchInput = styled.input`
  height: 46px;
  line-height: 31px;
  padding: 0 20px 0 80px;

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }
`;

export const SearchIcon = styled.img`
  position: absolute;
  left: 23px;
  bottom: 12px;
  width: 30px;
`;

export const SearchLine = styled.img`
  height: 4px;
  all: unset;
  margin: 0;
`;
