import React, { FC } from 'react';

import useInputValidator from '~/lib/hooks/useInputValidator';
import { idValidator, pwValidator } from '~/utils/validation';
import { alert } from '~/utils/modal';
import { login } from '~/lib/api/auth';

import Input from '~/components/common/Input';
import Button from '~/components/common/Button';
import Checkbox from '~/components/common/Checkbox';
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
  CheckboxWrapper,
  SocialButtons,
  CheckboxSection,
  SocialButton,
} from './index.style';
import { useHistory, useLocation } from '~/core/Router';
import { ErrorResponse } from '~/lib/api/types';

const LoginPage: FC = () => {
  const { state } = useLocation();
  const { push } = useHistory();
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

    /**
     * @TODO response에 따라서 로그인에 실패했습니다 말고 서버응답에 따라서 다르게 표시하기.
     * 현재 login()의 리턴값 타입추론이 이상함.
     */
    await login({
      id,
      password: pw,
    })
      .then(() => {
        push('/');
      })
      .catch((err: ErrorResponse) => {
        alert(err.message);
      });
  };

  const onSocialLogin = () => {
    alert('소셜로그인은 아직 구현되지 않았습니다');
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
        <CheckboxSection>
          <CheckboxWrapper>
            <Checkbox checked />
            <span>자동로그인</span>
          </CheckboxWrapper>
        </CheckboxSection>
        <Divider />
        <SocialButtons>
          <SocialButton
            src={socialFacebookSVG}
            alt="facebook"
            onClick={onSocialLogin}
          />
          <img src={verticalLineSVG} alt="vertical" />
          <SocialButton
            src={socialGoogleSVG}
            alt="google"
            onClick={onSocialLogin}
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
