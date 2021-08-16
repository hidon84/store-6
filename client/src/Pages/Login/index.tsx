import React, { FC } from 'react';

import Input from '~/Components/Input';
import Button from '~/Components/Button';
import Checkbox from '~/Components/Checkbox';
import Divider from '~/Components/Divider';
import Copyright from '~/Components/Copyright';
import InputHelp from '~/Components/InputHelp';

import {
  doodleTeasingSVG,
  doodleSkeletonSVG,
  doodleStickmanSVG,
  doodleAssKickSVG,
  doodleRobotSVG,
  verticalLineSVG,
  socialFacebookSVG,
  socialGoogleSVG,
} from '~/assets/index';

import {
  StyledLoginPage,
  LeftDoodles,
  RightDoodles,
  LoginForm,
  LoginFormHeader,
  ButtonWrapper,
  CheckboxWrapper,
  SocialButtons,
} from './index.style';

const LoginPage: FC = () => {
  return (
    <StyledLoginPage>
      <LeftDoodles>
        <div>
          <img src={doodleTeasingSVG} alt="teasing" />
        </div>
        <div style={{ marginLeft: '96px' }}>
          <img src={doodleSkeletonSVG} alt="skeleton" />
        </div>
      </LeftDoodles>
      <LoginForm>
        <LoginFormHeader>
          <img src={doodleRobotSVG} alt="robot" />
          <h1 className="text-baemin100">배민</h1>
          <h1>문방구</h1>
        </LoginFormHeader>
        <Input
          autoComplete="off"
          type="text"
          name="id"
          id="id"
          placeholder="아이디"
        />
        <InputHelp>가입되지 않은 아이디입니다.</InputHelp>
        <Input
          autoComplete="off"
          type="password"
          name="password"
          id="password"
          placeholder="비밀번호"
        />
        <InputHelp>비밀번호 형식이 맞지 않습니다.</InputHelp>
        <ButtonWrapper>
          <Button>로그인</Button>
        </ButtonWrapper>
        <CheckboxWrapper>
          <Checkbox checked={false} label="자동로그인" />
        </CheckboxWrapper>
        <Divider />
        <SocialButtons>
          <img src={socialFacebookSVG} alt="facebook" />
          <img src={verticalLineSVG} alt="vertical" />
          <img src={socialGoogleSVG} alt="google" />
        </SocialButtons>
        <Copyright>
          COPYRIGHT © 2021 우아한형제들 ALL RIGHTS RESERVED.
        </Copyright>
      </LoginForm>
      <RightDoodles>
        <img src={doodleStickmanSVG} alt="stickman" />
        <img
          src={doodleAssKickSVG}
          alt="assKick"
          style={{ marginTop: '16px' }}
        />
      </RightDoodles>
    </StyledLoginPage>
  );
};

export default LoginPage;
