import styled from 'styled-components';

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  cursor: pointer;
`;

export const RadioWrapper = styled.div`
  position: relative;
  height: 16px;
`;

export const CheckCircleImg = styled.img`
  height: 100%;
`;

export const CheckImg = styled.img`
  position: absolute;
  bottom: 5px;
  left: 1px;
`;
