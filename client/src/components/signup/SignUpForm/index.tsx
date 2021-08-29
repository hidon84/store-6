import React, { FC, useCallback, useContext, useState } from 'react';
import { useHistory } from '~/core/Router';
import Button from '~/components/common/Button';
import Copyright from '~/components/base/Copyright';
import Space from '~/components/common/Space';
import * as userAPI from '~/lib/api/users';
import UserContext from '~/lib/contexts/userContext';
import { alert } from '~/utils/modal';
import {
  emailValidator,
  idValidator,
  phoneValidator,
  pwValidator,
  rePwValidator,
} from '~/utils/validation';
import HeaderTitle from '~/components/signup/HeaderTitle';
import SignUpOwnForm from '~/components/signup/SignUpOwnForm';
import SignUpEmailInput from '~/components/signup/SignUpEmailInput';
import SignUpPhoneInput from '~/components/signup/SignUpPhoneInput';
import SignUpPolicyCheck from '~/components/signup/SignUpPolicyCheck';
import S from './index.style';

const message = {
  needCheckTerms: '약관을 동의해주세요.',
  failedToSignUp: '회원가입에 실패했습니다.',
  successToSignUp: '회원가입에 성공했습니다.',
  emptyField: '빈 항목이 있습니다.',
};

const SignUpForm: FC<{
  social?: 'GOOGLE' | 'FACEBOOK';
}> = ({ social }) => {
  const { push } = useHistory();
  const { user: userState } = useContext(UserContext);
  const [userAccount, setUserAccount] = useState({ id: '', pw: '', rePw: '' });
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [policyCheck, setPolicyCheck] = useState({
    serviceTerms: false,
    privacyTerms: false,
  });

  const onPolicyCheck = useCallback(
    (serviceTerms: boolean, privacyTerms: boolean) => {
      setPolicyCheck({ serviceTerms, privacyTerms });
    },
    [setPolicyCheck],
  );

  const inputDataValidator = () => {
    if (!policyCheck.serviceTerms || !policyCheck.privacyTerms) {
      return message.needCheckTerms;
    }
    const warning =
      (!social &&
        (idValidator(userAccount.id) ||
          pwValidator(userAccount.pw) ||
          rePwValidator(userAccount.rePw, userAccount.pw))) ||
      emailValidator(email) ||
      phoneValidator(phone);

    if (warning === ' ') {
      return message.emptyField;
    }

    if (warning) {
      return warning;
    }

    return '';
  };

  const onFormSubmit = useCallback(
    (e: React.FormEvent) => e.preventDefault(),
    [],
  );

  const onSubmit = useCallback(async () => {
    const warningMessage = inputDataValidator();
    if (warningMessage) {
      alert(warningMessage);
      return;
    }

    try {
      await userAPI.postUser({
        id: social ? userState.user.id : userAccount.id,
        password: userAccount.pw,
        phone,
        email,
        profile: social ? userState.user?.profile : null,
        privacyTermsAndConditions: policyCheck.privacyTerms,
        serviceTermsAndConditions: policyCheck.serviceTerms,
        type: social ?? 'OWN',
      });

      if (social) {
        alert(message.successToSignUp);
      }

      push('/login', {
        id: social ? '' : userAccount.id,
        from: '/signup',
      });
    } catch (e) {
      alert(`${message.failedToSignUp} - ${e?.message}`);
    }
  }, [userAccount, email, phone, policyCheck]);

  return (
    <S.SignUpFormWrapper onSubmit={onFormSubmit}>
      <HeaderTitle />
      {!social && <SignUpOwnForm onChange={setUserAccount} />}

      <SignUpEmailInput value={email} onChange={setEmail} />
      <SignUpPhoneInput value={phone} onChange={setPhone} />

      <SignUpPolicyCheck
        serviceTermsCheck={policyCheck.serviceTerms}
        privacyTermsCheck={policyCheck.privacyTerms}
        onChange={onPolicyCheck}
      />

      <S.ButtonWrapper>
        <Button size="lg" onClick={onSubmit}>
          회원가입
        </Button>
      </S.ButtonWrapper>
      <Copyright>COPYRIGHT © 2021 우아한형제들 ALL RIGHTS RESERVED.</Copyright>
      <Space height="32px" aria-hidden />
    </S.SignUpFormWrapper>
  );
};

export default SignUpForm;
