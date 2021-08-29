import styled from 'styled-components';

const LoadingTextWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  background-color: #fff;
  justify-content: center;
  z-index: 2;
`;

const Text = styled.span`
  display: block;
  -webkit-text-stroke: 1px #000;
  -webkit-text-fill-color: #fff;

  font-family: 'BM Hanna' !important;
  font-size: 40px;
  line-height: 40px;
`;

const TextArea = styled.div`
  text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.45);
`;

export default { LoadingTextWrapper, Text, TextArea };
