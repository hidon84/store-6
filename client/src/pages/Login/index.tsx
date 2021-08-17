import React, { FC } from 'react';

import useInputValidator from '~/lib/hooks/useInputValidator';
import { REG_ID, REG_PW, WARNING_ID, WARNING_PW } from '~/utils/validation';
import { alert } from '~/utils/modal';

import Input from '~/components/Input';
import Button from '~/components/Button';
import Checkbox from '~/components/Checkbox';
import Divider from '~/components/Divider';
import Copyright from '~/components/Copyright';
import InputHelp from '~/components/InputHelp';

import {
  doodleTeasingSVG,
  doodleSkeletonSVG,
  doodleStickmanSVG,
  doodleAssKickSVG,
  doodleRobotSVG,
  verticalLineSVG,
  socialFacebookSVG,
  socialGoogleSVG,
} from '~/assets';

import {
  StyledLoginPage,
  LeftDoodles,
  RightDoodles,
  LoginForm,
  LoginFormHeader,
  ButtonWrapper,
  CheckboxWrapper,
  SocialButtons,
  CheckboxSection,
} from './index.style';

const LoginPage: FC = () => {
  const [id, idWarning, handleId] = useInputValidator('', (id_input) => {
    const { length } = id_input;
    if (REG_ID.test(id_input) || length === 0) {
      return '';
    }
    return WARNING_ID;
  });
  const [pw, pwWarning, handlePW] = useInputValidator('', (pw_input) => {
    const { length } = pw_input;
    if (REG_PW.test(pw_input) || length === 0) {
      return '';
    }
    return WARNING_PW;
  });

  const onSubmit = () => {
    if (id.length === 0 || idWarning.length) {
      alert('id 폼이 이상해요');
      return;
    }
    if (pw.length === 0 || pwWarning.length) {
      alert('pw 폼이 이상해요');
      return;
    }

    alert('submit!');
  };

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
      <LoginForm onSubmit={(e) => e.preventDefault()}>
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
          onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
            handleId(ev.target.value);
          }}
        />
        <InputHelp>{idWarning}</InputHelp>
        <Input
          autoComplete="off"
          type="password"
          name="password"
          id="password"
          placeholder="비밀번호"
          onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
            handlePW(ev.target.value);
          }}
        />
        <InputHelp>{pwWarning}</InputHelp>
        <ButtonWrapper>
          <Button size="lg" onClick={onSubmit}>
            로그인
          </Button>
        </ButtonWrapper>
        <CheckboxSection>
          <CheckboxWrapper>
            <Checkbox checked />
            <span>자동로그인</span>
          </CheckboxWrapper>
        </CheckboxSection>
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
