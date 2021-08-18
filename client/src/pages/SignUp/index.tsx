import React, { FC, useCallback, useState } from 'react';

import useInputValidator from '~/lib/hooks/useInputValidator';
import {
  REG_EMAIL,
  REG_ID,
  REG_PH0,
  REG_PH1,
  REG_PH2,
  REG_PW,
  WARNING_EMAIL,
  WARNING_ID,
  WARNING_PHONE,
  WARNING_PW,
  WARNING_PWRE,
} from '~/utils/validation';
import { alert } from '~/utils/modal';

import Button from '~/components/Button';
import Checkbox from '~/components/Checkbox';
import Copyright from '~/components/Copyright';
import Space from '~/components/Space';

import { doodleRobotSVG, hyphenSVG } from '~/assets';

import {
  StyledLoginPage,
  LeftDoodles,
  RightDoodles,
  SignUpForm,
  SignUpFormHeader,
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
} from './index.style';

const SignUpPage: FC = () => {
  const [id, idWarning, handleId] = useInputValidator('', (id_input) => {
    const { length } = id_input;
    if (length === 0) return ' ';
    if (REG_ID.test(id_input)) return '';

    return WARNING_ID;
  });
  const [pw, pwWarning, handlePW] = useInputValidator('', (pw_input) => {
    const { length } = pw_input;
    if (length === 0) return ' ';
    if (REG_PW.test(pw_input)) return '';

    return WARNING_PW;
  });

  const [pwRe, pwReWarning, handlePWRe] = useInputValidator('', (pw_input) => {
    if (pw_input === pw) return '';
    return WARNING_PWRE;
  });

  const [email, emailWarning, handleEmail] = useInputValidator(
    '',
    (email_input) => {
      const { length } = email_input;
      if (length === 0) return ' ';
      if (REG_EMAIL.test(email_input)) return '';

      return WARNING_EMAIL;
    },
  );

  const [ph0, ph0Warning, handlePh0] = useInputValidator('', (ph0_input) => {
    const { length } = ph0_input;
    if (length === 0) return ' ';
    if (REG_PH0.test(ph0_input)) return '';

    return WARNING_PHONE;
  });

  const [ph1, ph1Warning, handlePh1] = useInputValidator('', (ph1_input) => {
    const { length } = ph1_input;
    if (length === 0) return ' ';
    if (REG_PH1.test(ph1_input)) return '';

    return WARNING_PHONE;
  });

  const [ph2, ph2Warning, handlePh2] = useInputValidator('', (ph2_input) => {
    const { length } = ph2_input;
    if (length === 0) return ' ';
    if (REG_PH2.test(ph2_input)) return '';

    return WARNING_PHONE;
  });

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

  const onSubmit = useCallback(() => {
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

    alert('submit!');
  }, [
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
    <StyledLoginPage>
      <LeftDoodles />
      <SignUpForm onSubmit={(e) => e.preventDefault()}>
        <SignUpFormHeader>
          <img src={doodleRobotSVG} alt="robot" />
          <h1 className="text-baemin100">배민</h1>
          <h1>문방구</h1>
        </SignUpFormHeader>
        <InputWrapper>
          <LabelRow>
            <Label>아이디</Label>
            <WarningMessage>{idWarning}</WarningMessage>
          </LabelRow>
          <Input
            autoComplete="off"
            type="text"
            onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
              handleId(ev.target.value);
            }}
          />
        </InputWrapper>
        <Space height="48px" aria-hidden />
        <InputWrapper>
          <LabelRow>
            <Label>비밀번호</Label>
            <WarningMessage>{pwWarning}</WarningMessage>
          </LabelRow>
          <Input
            autoComplete="false"
            type="password"
            onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
              handlePW(ev.target.value);
            }}
          />
        </InputWrapper>
        <Space height="48px" aria-hidden />
        <InputWrapper>
          <LabelRow>
            <Label>비밀번호 확인</Label>
            <WarningMessage>{pwReWarning}</WarningMessage>
          </LabelRow>
          <Input
            autoComplete="false"
            type="password"
            onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
              handlePWRe(ev.target.value);
            }}
          />
        </InputWrapper>
        <Space height="48px" aria-hidden />
        <InputWrapper>
          <LabelRow>
            <Label>이메일</Label>
            <WarningMessage>{emailWarning}</WarningMessage>
          </LabelRow>
          <Input
            autoComplete="false"
            type="text"
            onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
              handleEmail(ev.target.value);
            }}
          />
        </InputWrapper>
        <Space height="48px" aria-hidden />
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
              onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
                handlePh0(ev.target.value);
              }}
            />
            <img src={hyphenSVG} alt="hyphen" />
            <PhoneInput
              autoComplete="false"
              type="text"
              placeholder="0000"
              onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
                handlePh1(ev.target.value);
              }}
            />
            <img src={hyphenSVG} alt="hyphen" />
            <PhoneInput
              autoComplete="false"
              type="text"
              placeholder="0000"
              onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
                handlePh2(ev.target.value);
              }}
            />
          </PhoneInputWrapper>
        </InputWrapper>
        <Space height="48px" aria-hidden />
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
        <ButtonWrapper>
          <Button size="lg" onClick={onSubmit}>
            회원가입
          </Button>
        </ButtonWrapper>
        <Copyright>
          COPYRIGHT © 2021 우아한형제들 ALL RIGHTS RESERVED.
        </Copyright>
        <Space height="32px" aria-hidden />
      </SignUpForm>
      <RightDoodles />
    </StyledLoginPage>
  );
};

export default SignUpPage;
