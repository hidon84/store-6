import { FC } from 'react';

import styled from 'styled-components';

const LoadingTextWrapper = styled.div<{ isFetching: boolean }>`
  opacity: ${({ isFetching }) => (isFetching ? 1 : 0)};
  translate: opacity 0.5s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 650px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
`;

const LoadingText: FC<{ isFetching: boolean }> = ({ isFetching }) => {
  return (
    <LoadingTextWrapper isFetching={isFetching}>
      <span>sdfsdf</span>
    </LoadingTextWrapper>
  );
};

export default LoadingText;
