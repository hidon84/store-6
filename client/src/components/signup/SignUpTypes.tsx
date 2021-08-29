import { FC } from 'react';
import styled from 'styled-components';
import {
  signUpWithFacebookSVG,
  signUpWithGoogleSVG,
  signUpWithOwnSVG,
} from '~/assets';
import Space from '~/components/common/Space';
import { useHistory } from '~/core/Router';
import { oauthUrl } from '~/lib/api/oauth';
import HeaderTitle from '../base/HeaderTitle';

const SignUpTypesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const SignUpTypeButtons = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 48px;
`;

const SignUpTypeButton = styled.img`
  cursor: pointer;
`;

const SignUpTypes: FC = () => {
  const { push } = useHistory();
  return (
    <SignUpTypesWrapper>
      <HeaderTitle />
      <SignUpTypeButtons>
        <SignUpTypeButton
          onClick={() => push('/signup/own')}
          src={signUpWithOwnSVG}
          alt="own"
        />
        <SignUpTypeButton
          onClick={() => {
            window.location.href = oauthUrl.facebook.facebook;
          }}
          src={signUpWithFacebookSVG}
          alt="facebook"
        />
        <SignUpTypeButton
          onClick={() => {
            window.location.href = oauthUrl.google.google;
          }}
          src={signUpWithGoogleSVG}
          alt="google"
        />
        <Space height="120px" />
      </SignUpTypeButtons>
    </SignUpTypesWrapper>
  );
};

export default SignUpTypes;
