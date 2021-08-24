import { FC } from 'react';

import { StyledSignUpPage } from './index.style';
import LeftDoodles from '~/components/signup/LeftDoodles';
import RightDoodles from '~/components/signup/RightDoodles';
import SignUpTypes from '~/components/signup/SignUpTypes';
import SignUpForm from '~/components/signup/SignUpForm';
import { useParams } from '~/core/Router';

/**
 * /signup/:stage
 * stage: one of ['select', 'own', 'facebook', 'google']
 */
const SignUpPage: FC = () => {
  const { stage } = useParams();
  return (
    <StyledSignUpPage>
      <LeftDoodles />
      {stage === 'select' ? <SignUpTypes /> : null}
      {stage === 'own' ? <SignUpForm /> : null}
      {stage === 'google' ? <SignUpForm /> : null}
      <RightDoodles />
    </StyledSignUpPage>
  );
};

export default SignUpPage;
