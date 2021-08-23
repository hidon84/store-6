import styled from 'styled-components';

export const ProductItemContainerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  margin-bottom: 50px;
`;

export const ItemList = styled.ul<{
  isFetching: boolean;
  delayedTime: number;
}>`
  opacity: ${({ isFetching }) => (isFetching ? 0 : 1)};
  transition: opacity ${({ delayedTime }) => delayedTime}s ease-in;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 31px;
  padding-left: 7px;
`;

export const ListFooter = styled.div`
  width: 100%;
  height: 40px;
`;
