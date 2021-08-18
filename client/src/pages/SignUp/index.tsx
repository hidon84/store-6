import React, { FC } from 'react';

import Button from '~/components/Button';
import Checkbox from '~/components/Checkbox';
import Copyright from '~/components/Copyright';
import Space from '~/components/Space';

import { doodleRobotSVG } from '~/assets';

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
} from './index.style';

const SignUpPage: FC = () => {
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
            <WarningMessage>중복된 아이디입니다.</WarningMessage>
          </LabelRow>
          <Input autoComplete="off" type="text" name="id" id="id" />
        </InputWrapper>
        <Space height="48px" />
        <InputWrapper>
          <LabelRow>
            <Label>비밀번호</Label>
            <WarningMessage>비밀번호 다시 확인할것!</WarningMessage>
          </LabelRow>
          <Input type="password" name="password" id="password" />
        </InputWrapper>
        <Space height="48px" />
        <InputWrapper>
          <LabelRow>
            <Label>비밀번호 확인</Label>
            <WarningMessage>비밀번호가 일치하지 않습니다.</WarningMessage>
          </LabelRow>
          <Input type="password" name="password" id="password" />
        </InputWrapper>
        <Space height="48px" />
        <InputWrapper>
          <LabelRow>
            <Label>이메일</Label>
            <WarningMessage>이메일 형식이 맞지 않습니다.</WarningMessage>
          </LabelRow>
          <Input type="password" name="password" id="password" />
        </InputWrapper>
        <Space height="48px" />
        <InputWrapper>
          <LabelRow>
            <Label>전화번호</Label>
            <WarningMessage>전화번호 형식이 맞지 않습니다.</WarningMessage>
          </LabelRow>
          <Input type="password" name="password" id="password" />
        </InputWrapper>
        <Space height="48px" />
        <LabelRow>
          <Label>약관 동의</Label>
        </LabelRow>
        <CheckboxSection>
          <CheckboxWrapper>
            <Checkbox checked />
            <span style={{ fontSize: '20px', lineHeight: '25px' }}>
              아래 약관에 모두 동의합니다
            </span>
          </CheckboxWrapper>
        </CheckboxSection>
        <CheckboxSection>
          <CheckboxWrapper>
            <Checkbox checked />
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
          <CheckboxWrapper>
            <Checkbox checked />
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
          <Button size="lg">회원가입</Button>
        </ButtonWrapper>
        <Copyright>
          COPYRIGHT © 2021 우아한형제들 ALL RIGHTS RESERVED.
        </Copyright>
        <Space height="32px" />
      </SignUpForm>
      <RightDoodles />
    </StyledLoginPage>
  );
};

export default SignUpPage;
