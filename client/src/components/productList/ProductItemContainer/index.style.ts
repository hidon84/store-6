import styled from 'styled-components';

const ProductItemContainerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  margin-bottom: 50px;
`;

const ItemList = styled.ul<{
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

const NoResourceWrapper = styled.div`
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

const ListFooter = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingText = styled.span`
  font-size: 25px;
  font-family: 'BM Hanna' !important;
`;

const ScrollTriggerDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 5px;
`;

export default {
  ProductItemContainerWrapper,
  ItemList,
  NoResourceWrapper,
  ListFooter,
  LoadingText,
  ScrollTriggerDiv,
};
