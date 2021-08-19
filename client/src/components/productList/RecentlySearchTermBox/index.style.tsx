import styled from 'styled-components';
import { SearchTermWrapper } from '../SearchTerm/index.style';

export const RecentlySearchTermBoxWrapper = styled.div<{ isEmpty: boolean }>`
  opacity: ${({ isEmpty }) => (isEmpty ? 0 : 1)};
  display: flex;
  align-items: center;
  margin: 0 0 30px 7px;

  ${SearchTermWrapper}:not(:last-child) {
    margin-right: 19px;
  }
`;

export const RecentlySearchTermTitle = styled.span`
  font-size: 16px;
  line-height: 20px;
  color: #999999;
`;

export const Divider = styled.img`
  margin: 2px 12px 0px 12px;
`;

export const TermWrapper = styled.div`
  display: flex;
  overflow: hidden;
  max-width: 580px;
  cursor: pointer;
`;
