import { FC } from 'react';

import { StyledLoginPage } from './index.style';
import { LeftDoodles, RightDoodles } from './index.fc';
import SignUpForm from './SignUpForm';
import SignUpTypes from './SignUpTypes';

const SignUpPage: FC = () => {
  return (
    <StyledLoginPage>
      <LeftDoodles />
      <SignUpForm />
      <RightDoodles />
    </StyledLoginPage>
  );
};

export default SignUpPage;
