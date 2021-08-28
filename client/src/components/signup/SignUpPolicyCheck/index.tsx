import { FC, useCallback } from 'react';
import Checkbox from '~/components/common/Checkbox';
import SignUpLabel from '../SignUpLabel';
import S from './index.style';
import terms from '~/lib/constants/terms';

interface IProps {
  serviceTermsCheck?: boolean;
  privacyTermsCheck?: boolean;
  onChange?: (serviceTermsCheck: boolean, privacyTermsCheck: boolean) => void;
}

const SignUpPolicyCheck: FC<IProps> = ({
  serviceTermsCheck = false,
  privacyTermsCheck = false,
  onChange,
}) => {
  const onChangeCheckedTerms = (service: boolean, privacy: boolean) => {
    if (onChange) {
      onChange(service, privacy);
    }
  };

  const onCheckAll = useCallback(
    () => onChangeCheckedTerms(!serviceTermsCheck, !privacyTermsCheck),
    [serviceTermsCheck, privacyTermsCheck],
  );
  const onCheckServiceTerms = useCallback(
    () => onChangeCheckedTerms(!serviceTermsCheck, privacyTermsCheck),
    [serviceTermsCheck, privacyTermsCheck],
  );
  const onCheckPrivacyTerms = useCallback(
    () => onChangeCheckedTerms(serviceTermsCheck, !privacyTermsCheck),
    [serviceTermsCheck, privacyTermsCheck],
  );

  return (
    <div>
      <SignUpLabel title="약관 동의" />
      <S.CheckboxSection>
        <S.CheckboxWrapper onClick={onCheckAll}>
          <Checkbox checked={serviceTermsCheck && privacyTermsCheck} />
          <span style={{ fontSize: '20px', lineHeight: '25px' }}>
            아래 약관에 모두 동의합니다
          </span>
        </S.CheckboxWrapper>
      </S.CheckboxSection>
      <S.CheckboxSection>
        <S.CheckboxWrapper onClick={onCheckPrivacyTerms}>
          <Checkbox checked={privacyTermsCheck} />
          <span>개인정보 이용약관 (필수)</span>
        </S.CheckboxWrapper>
      </S.CheckboxSection>
      <S.Policy>{terms.service}</S.Policy>
      <S.CheckboxSection>
        <S.CheckboxWrapper onClick={onCheckServiceTerms}>
          <Checkbox checked={serviceTermsCheck} />
          <span>배민문방구 이용약관 (필수)</span>
        </S.CheckboxWrapper>
      </S.CheckboxSection>
      <S.Policy>{terms.privacy}</S.Policy>
    </div>
  );
};

export default SignUpPolicyCheck;
