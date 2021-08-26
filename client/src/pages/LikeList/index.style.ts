import styled from 'styled-components';

export const ProductLikeItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 31px;
  position: relative;
  transition: 3s;
  padding-top: 40px;
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
