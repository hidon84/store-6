import styled from 'styled-components';

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  line-height: 25px;
  font-size: 20px;
  padding: 0 8px;

  &::placeholder {
    color: #999;
  }
`;

const InputWrapper = styled.div`
  height: 34px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const LineWrapper = styled.div`
  padding: 0 3px;
`;

export default { Input, InputWrapper, LineWrapper };
