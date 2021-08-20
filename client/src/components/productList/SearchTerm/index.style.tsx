import styled from 'styled-components';

export const SearchTermWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Term = styled.span`
  display: flex;
  white-space: nowrap;
`;

export const X = styled.img`
  margin-left: 6px;

  transition: filter 0.2s ease;
  &:hover {
    filter: invert(64%) sepia(72%) saturate(451%) hue-rotate(127deg)
      brightness(88%) contrast(85%);
  }
`;
