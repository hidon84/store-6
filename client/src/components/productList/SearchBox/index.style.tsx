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
  font-size: 25px;
  line-height: 31px;
  padding: 0 20px 0 80px;

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }
`;

export const SearchButton = styled.button`
  all: unset;
  position: absolute;
  left: 23px;
  bottom: 12px;
  width: 30px;
  cursor: pointer;
`;

export const SearchLine = styled.img`
  height: 4px;
  all: unset;
  margin: 0;
`;

export const ValueRemoveButton = styled.button<{ isEmpty: boolean }>`
  all: unset;
  opacity: ${({ isEmpty }) => (isEmpty ? 0 : 1)};
  position: absolute;
  right: 23px;
  bottom: 12px;
  width: 30px;
  cursor: pointer;
`;
