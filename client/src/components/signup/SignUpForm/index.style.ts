import styled from 'styled-components';

const SignUpFormWrapper = styled.form`
  display: flex;
  flex: 2;
  min-width: 400px;
  max-width: 400px;
  flex-direction: column;
  height: 100%;
  gap: 28px;
  justify-content: flex-start;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  margin-top: 42px;
`;

export default { SignUpFormWrapper, ButtonWrapper };
