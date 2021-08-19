import styled from 'styled-components';

export const CategoryFilterWrapper = styled.div`
  img {
    cursor: pointer;
  }
`;

export const CategoryHeder = styled.div`
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  margin-bottom: 33px;
  img {
    width: 25px;
  }
`;

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
`;
