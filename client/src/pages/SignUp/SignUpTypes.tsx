import { FC } from 'react';
import styled from 'styled-components';
import {
  signUpWithFacebookSVG,
  signUpWithGoogleSVG,
  signUpWithOwnSVG,
} from '~/assets';
import Space from '~/components/Space';
import { HeaderTitle } from './index.fc';

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
  return (
    <SignUpTypesWrapper>
      <HeaderTitle />
      <SignUpTypeButtons>
        <SignUpTypeButton src={signUpWithOwnSVG} alt="own" />
        <SignUpTypeButton src={signUpWithFacebookSVG} alt="facebook" />
        <SignUpTypeButton src={signUpWithGoogleSVG} alt="google" />
        <Space height="120px" />
      </SignUpTypeButtons>
    </SignUpTypesWrapper>
  );
};

export default SignUpTypes;
