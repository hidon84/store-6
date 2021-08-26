import styled from 'styled-components';

export const CartFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  left: 20px;
  margin-top: 35px;
  gap: 55px;
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
    width: 400px;
  }

  > :nth-child(2) {
    width: 160px;
  }

  > :nth-child(3) {
    width: 160px;
  }

  > :last-child {
    width: 160px;
  }
`;
