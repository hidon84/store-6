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
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 31px;
  padding-left: 7px;
  transition: opacity ${({ delayedTime }) => delayedTime}s ease-in;
`;

export const NoResourceWrapper = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ListFooter = styled.div`
  width: 100%;
  height: 100px;
`;
