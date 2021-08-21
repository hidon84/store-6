import styled from 'styled-components';

export const CartPageWrapper = styled.div`
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  position: relative;
  left: 50px;
`;

export const Header = styled.div`
  font-size: 25px;
  padding: 6px 40px 20px 30px;
  display: flex;
  gap: 70px;
  color: #cccccc;
`;

export const HeaderItem = styled.div`
  &.selected {
    color: black;
  }
  cursor : pointer
`;
