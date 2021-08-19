import styled from 'styled-components';
import { SearchTermWrapper } from '../SearchTerm/index.style';

export const RecentlySearchTermBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  opacity: 1;
  margin: 0 0 30px 7px;

  ${SearchTermWrapper}:not(:last-child) {
    margin-right: 19px;
  }
`;

export const Divider = styled.img`
  margin: 0 12px;
`;

export const TermWrapper = styled.div`
  display: flex;
  overflow: hidden;
  max-width: 580px;
  cursor: pointer;
`;
