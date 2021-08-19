import styled from 'styled-components';

export const TitleContainer = styled.div`
  height: 30px;
`;
export const Title = styled.div`
  font-size: 24px;
  &.selected {
    transition: all 150ms;
    color: #2ac0bc;
  }
`;
