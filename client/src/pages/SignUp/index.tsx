import { FC } from 'react';

import { StyledLoginPage } from './index.style';
import LeftDoodles from '~/components/signup/LeftDoodles';
import RightDoodles from '~/components/signup/RightDoodles';
import SignUpForm from '~/components/signup/SignUpForm';
// import SignUpTypes from '~/components/signup/SignUpTypes';

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
