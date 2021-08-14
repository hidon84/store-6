import React, { FC } from 'react';
import styled from 'styled-components';

const StyledLoginPage = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledLeftDoodles = styled.aside`
  display: flex;
`;

const LoginPage: FC = () => {
  return (
    <StyledLoginPage>
      <StyledLeftDoodles />
      배민 문방구 로그인
    </StyledLoginPage>
  );
};

export default LoginPage;
