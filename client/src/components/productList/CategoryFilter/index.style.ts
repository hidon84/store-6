import styled from 'styled-components';

const CategoryFilterWrapper = styled.div`
  img {
    cursor: pointer;
  }
`;

const CategoryHeader = styled.div`
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  margin-bottom: 20px;
  img {
    width: 25px;
    &:hover {
      transition: all 300ms;
      transform: scale(1.2);
    }
  }
`;

const CategoryContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
`;

export default { CategoryFilterWrapper, CategoryHeader, CategoryContainer };
