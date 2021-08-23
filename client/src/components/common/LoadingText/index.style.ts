import styled from 'styled-components';

export const LoadingTextWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 650px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.span`
  display: block;
  -webkit-text-stroke: 1px #000;
  -webkit-text-fill-color: #fff;

  font-family: 'BM Hanna' !important;
  font-size: 40px;
  line-height: 40px;
`;

export const TextArea = styled.div<{ isFetching: boolean }>`
  opacity: ${({ isFetching }) => (isFetching ? 1 : 0)};
  translate: opacity 0.2s ease-in-out;
  text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.45);
`;
