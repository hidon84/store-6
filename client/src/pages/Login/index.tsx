import React, { FC, useCallback } from 'react';

import useInputValidator from '~/lib/hooks/useInputValidator';
import { idValidator, pwValidator } from '~/utils/validation';
import { alert } from '~/utils/modal';
import { login } from '~/lib/api/auth';

import Input from '~/components/common/Input';
import Button from '~/components/common/Button';
import Divider from '~/components/common/Divider';
import Copyright from '~/components/base/Copyright';
import InputHelp from '~/components/login/InputHelp';

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
  SocialButtons,
  RegisterSection,
  SocialButton,
  RegisterLink,
  LoginDemo,
} from './index.style';
import { useHistory, useLocation } from '~/core/Router';
import { ErrorResponse } from '~/lib/api/types';
import { oauthUrl } from '~/lib/api/oauth';

const LoginPage: FC = () => {
  const { state } = useLocation();
  const { goBack, push } = useHistory();
  const [id, idWarning, handleId] = useInputValidator(
    (state as { id: string; from: string })?.id ?? '',
    idValidator,
  );
  const [pw, pwWarning, handlePW] = useInputValidator('', pwValidator);

  const onSubmit = async () => {
    if (idWarning.length > 2 || id.length < 4) {
      alert(`아이디 폼에러. ${idWarning}`);
      return;
    }
    if (pwWarning) {
      alert(`비밀번호 폼에러. ${pwWarning}`);
      return;
    }

    await login({
      id,
      password: pw,
    })
      .then(() => goBack())
      .catch((err: ErrorResponse) => {
        alert(err.message);
      });
  };

  const onGoogleLogin = useCallback(() => {
    window.location.href = oauthUrl.google.login;
  }, []);

  const onFacebookLogin = useCallback(() => {
    window.location.href = oauthUrl.facebook.login;
  }, []);

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
          autoFocus
          value={id}
          placeholder="아이디"
          onChange={handleId}
        />
        <InputHelp>{idWarning}</InputHelp>
        <Input
          autoComplete="off"
          type="password"
          placeholder="비밀번호"
          onChange={handlePW}
        />
        <InputHelp>{pwWarning}</InputHelp>
        <ButtonWrapper>
          <Button size="lg" onClick={onSubmit}>
            로그인
          </Button>
        </ButtonWrapper>
        <RegisterSection>
          <LoginDemo
            onClick={() => {
              alert('아직 시연용계정 안만들었습니다');
            }}
          >
            시연용 계정 로그인
          </LoginDemo>
          <RegisterLink
            onClick={() => {
              push('/signup/select');
            }}
          >
            회원가입
          </RegisterLink>
        </RegisterSection>
        <Divider />
        <SocialButtons>
          <SocialButton
            src={socialFacebookSVG}
            alt="facebook"
            onClick={onFacebookLogin}
          />
          <img src={verticalLineSVG} alt="vertical" />
          <SocialButton
            src={socialGoogleSVG}
            alt="google"
            onClick={onGoogleLogin}
          />
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
