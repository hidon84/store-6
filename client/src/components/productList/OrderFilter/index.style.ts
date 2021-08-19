import styled from 'styled-components';

export const OrderFilterWrapper = styled.div`
  img {
    cursor: pointer;
  }
`;

export const OrderHeder = styled.div`
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  margin-bottom: 35px;
  img {
    width: 25px;
    &:hover {
      transition: all 300ms;
      transform: scale(1.2);
    }
  }
`;

export const OrderContainer = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
