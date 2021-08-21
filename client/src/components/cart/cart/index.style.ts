import styled from 'styled-components';

export const CartFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  right: 110px;
  margin-top: 30px;
  gap: 50px;
  font-size: 25px;
`;

export const CartHeader = styled.div`
  display: flex;
  height: 80px;
  align-items: center;
  font-size: 15px;
  width: 950px;
  text-align: center;
  > :first-child {
    flex-grow: 2;
  }

  > :nth-child(2) {
    flex-grow: 1;
  }

  > :nth-child(3) {
    flex-grow: 1;
  }

  > :last-child {
    flex-grow: 1;
  }
`;
