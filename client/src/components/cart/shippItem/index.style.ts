import styled from 'styled-components';

export const ShipItemWrapper = styled.div`
  padding: 41px 0;
  display: flex;
  align-items: center;
  font-size: 15px;
  > * {
    margin-left: 70px;
  }
`;

export const CheckboxWrapper = styled.div`
  width: 20px;
  cursor: pointer;
`;

export const ShipUser = styled.div`
  line-height: 1.4;
  width: 150px;
  div:last-child{
      color #999999;
  }
`;

export const ShipAddress = styled.div`
  display: flex;
  flex-direction: column;
  width: 370px;
  line-height: 1.4;
  white-space: pre-wrap;
`;

export const ShipControlWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ShipControl = styled.div`
  display: flex;
  cursor: pointer;
  gap: 15px;
`;

export const ShipHover = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7px;
  img {
    &:last-child {
      opacity: 0;
    }
  }

  &:hover {
    img {
      opacity: 1;
    }
  }
`;
