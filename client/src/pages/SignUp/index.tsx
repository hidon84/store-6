import { FC, useContext, useEffect } from 'react';

import { StyledSignUpPage } from './index.style';
import LeftDoodles from '~/components/signup/LeftDoodles';
import RightDoodles from '~/components/signup/RightDoodles';
import SignUpTypes from '~/components/signup/SignUpTypes';
import SignUpForm from '~/components/signup/SignUpForm';
import { useHistory, useParams } from '~/core/Router';
import UserContext from '~/lib/contexts/userContext';

/**
 * /signup/:stage
 * stage: one of ['select', 'own', 'facebook', 'google']
 */
const SignUpPage: FC = () => {
  const { user: userState } = useContext(UserContext);
  const { stage } = useParams();
  const { push } = useHistory();

  useEffect(() => {
    if (userState.isLoggedIn)
      push('/', { from: '/signup', error: 'accessWithToken' });
  }, [userState.isLoggedIn]);

  return (
    <StyledSignUpPage>
      <LeftDoodles />
      {stage === 'select' ? <SignUpTypes /> : null}
      {stage === 'own' ? <SignUpForm /> : null}
      {stage === 'google' ? <SignUpForm social="GOOGLE" /> : null}
      {stage === 'facebook' ? <SignUpForm social="FACEBOOK" /> : null}
      <RightDoodles />
    </StyledSignUpPage>
  );
};

export default SignUpPage;
