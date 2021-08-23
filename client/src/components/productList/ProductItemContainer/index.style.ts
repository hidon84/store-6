import styled from 'styled-components';

export const ProductItemContainerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const ItemList = styled.ul<{ isFetching: boolean }>`
  opacity: ${({ isFetching }) => (isFetching ? 0 : 1)};
  transition: opacity 0.5s ease-in-out;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 31px;
  padding-left: 7px;
`;

export const ListFooter = styled.div`
  width: 100%;
  height: 20px;
`;
