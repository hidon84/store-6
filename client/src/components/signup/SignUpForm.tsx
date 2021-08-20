import { FC, useCallback, useState } from 'react';

import useInputValidator from '~/lib/hooks/useInputValidator';
import {
  emailValidator,
  idValidator,
  ph0Validator,
  ph1Validator,
  ph2Validator,
  pwValidator,
  WARNING_PWRE,
} from '~/utils/validation';
import { alert } from '~/utils/modal';

import Button from '~/components/common/Button';
import Checkbox from '~/components/common/Checkbox';
import Copyright from '~/components/base/Copyright';
import Space from '~/components/common/Space';

import { hyphenSVG } from '~/assets';

import {
  SignUpFormWrapper,
  ButtonWrapper,
  CheckboxWrapper,
  CheckboxSection,
  FullInput as Input,
  InputWrapper,
  LabelRow,
  Label,
  WarningMessage,
  Policy,
  PhoneInputWrapper,
  PhoneInput,
} from '~/pages/SignUp/index.style';
import { useHistory } from '~/core/Router';
import { postUser } from '~/lib/api/users';
import HeaderTitle from './HeaderTitle';
import { ErrorResponse } from '~/lib/api/types';

const SignUpForm: FC = () => {
  const { push } = useHistory();
  const [id, idWarning, handleId] = useInputValidator('', idValidator);
  const [pw, pwWarning, handlePW] = useInputValidator('', pwValidator);
  const [pwRe, pwReWarning, handlePWRe] = useInputValidator(
    '',
    (pwReIn) => {
      if (pwReIn === pw) return '';
      return WARNING_PWRE;
    },
    [pw],
  );

  const [email, emailWarning, handleEmail] = useInputValidator(
    '',
    emailValidator,
  );

  const [ph0, ph0Warning, handlePh0] = useInputValidator('', ph0Validator);
  const [ph1, ph1Warning, handlePh1] = useInputValidator('', ph1Validator);
  const [ph2, ph2Warning, handlePh2] = useInputValidator('', ph2Validator);

  const [checkAll, setCheckAll] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);

  const handleCheckAll = useCallback(() => {
    const reversed = !checkAll;
    setCheckAll(reversed);
    setCheck1(reversed);
    setCheck2(reversed);
  }, [checkAll, check1, check2]);

  const handleCheck1 = useCallback(() => {
    setCheck1(!check1);
  }, [check1]);

  const handleCheck2 = useCallback(() => {
    setCheck2(!check2);
  }, [check2]);

  const onSubmit = useCallback(async () => {
    if (check1 === false || check2 === false) {
      alert('약관을 동의해주세요');
      return;
    }
    const warning =
      idWarning ||
      pwWarning ||
      pwReWarning ||
      emailWarning ||
      ph0Warning ||
      ph1Warning ||
      ph2Warning;
    if (warning) {
      if (warning === ' ') {
        alert('빈 항목이 있습니다.');
        return;
      }

      alert(warning);
    }

    /**
     * @todo: postUser의 response 다듬기
     */
    const res = await postUser({
      id,
      password: pw,
      phone: `${ph0}-${ph1}-${ph2}`,
      email,
      privacyTermsAndConditions: check1,
      serviceTermsAndConditions: check2,
    })
      .then(() => {
        push('/login', { id, from: '/signup' });
      })
      .catch((e: ErrorResponse) => {
        alert(e.message);
      });
  }, [
    id,
    pw,
    email,
    ph0,
    ph1,
    ph2,
    check1,
    check2,
    idWarning,
    pwWarning,
    pwReWarning,
    emailWarning,
    ph0Warning,
    ph1Warning,
    ph2Warning,
  ]);

  return (
    <SignUpFormWrapper onSubmit={(e) => e.preventDefault()}>
      <HeaderTitle />
      <InputWrapper>
        <LabelRow>
          <Label>아이디</Label>
          <WarningMessage>{idWarning}</WarningMessage>
        </LabelRow>
        <Input autoComplete="false" type="text" onChange={handleId} />
      </InputWrapper>
      <InputWrapper>
        <LabelRow>
          <Label>비밀번호</Label>
          <WarningMessage>{pwWarning}</WarningMessage>
        </LabelRow>
        <Input autoComplete="false" type="password" onChange={handlePW} />
      </InputWrapper>
      <InputWrapper>
        <LabelRow>
          <Label>비밀번호 확인</Label>
          <WarningMessage>{pwReWarning}</WarningMessage>
        </LabelRow>
        <Input autoComplete="false" type="password" onChange={handlePWRe} />
      </InputWrapper>
      <InputWrapper>
        <LabelRow>
          <Label>이메일</Label>
          <WarningMessage>{emailWarning}</WarningMessage>
        </LabelRow>
        <Input autoComplete="false" type="text" onChange={handleEmail} />
      </InputWrapper>
      <InputWrapper>
        <LabelRow>
          <Label>전화번호</Label>
          <WarningMessage>
            {ph0Warning || ph1Warning || ph2Warning}
          </WarningMessage>
        </LabelRow>
        <PhoneInputWrapper>
          <PhoneInput
            autoComplete="false"
            type="text"
            placeholder="010"
            onChange={handlePh0}
          />
          <img src={hyphenSVG} alt="hyphen" />
          <PhoneInput
            autoComplete="false"
            type="text"
            placeholder="0000"
            onChange={handlePh1}
          />
          <img src={hyphenSVG} alt="hyphen" />
          <PhoneInput
            autoComplete="false"
            type="text"
            placeholder="0000"
            onChange={handlePh2}
          />
        </PhoneInputWrapper>
      </InputWrapper>
      <div>
        <LabelRow>
          <Label>약관 동의</Label>
        </LabelRow>
        <CheckboxSection>
          <CheckboxWrapper onClick={handleCheckAll}>
            <Checkbox checked={checkAll} />
            <span style={{ fontSize: '20px', lineHeight: '25px' }}>
              아래 약관에 모두 동의합니다
            </span>
          </CheckboxWrapper>
        </CheckboxSection>
        <CheckboxSection>
          <CheckboxWrapper onClick={handleCheck1}>
            <Checkbox checked={check1} />
            <span>개인정보 이용약관 (필수)</span>
          </CheckboxWrapper>
        </CheckboxSection>
        <Policy>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
          doloremque quam quasi cupiditate suscipit optio, aliquid vero omnis
          ducimus? Nulla, laudantium maxime incidunt laborum iure vero
          consequuntur tenetur voluptatibus voluptate.
        </Policy>
        <CheckboxSection>
          <CheckboxWrapper onClick={handleCheck2}>
            <Checkbox checked={check2} />
            <span>배민문방구 이용약관 (필수)</span>
          </CheckboxWrapper>
        </CheckboxSection>
        <Policy>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
          doloremque quam quasi cupiditate suscipit optio, aliquid vero omnis
          ducimus? Nulla, laudantium maxime incidunt laborum iure vero
          consequuntur tenetur voluptatibus voluptate.
        </Policy>
      </div>

      <ButtonWrapper>
        <Button size="lg" onClick={onSubmit}>
          회원가입
        </Button>
      </ButtonWrapper>
      <Copyright>COPYRIGHT © 2021 우아한형제들 ALL RIGHTS RESERVED.</Copyright>
      <Space height="32px" aria-hidden />
    </SignUpFormWrapper>
  );
};

export default SignUpForm;
