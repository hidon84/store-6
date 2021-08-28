import { FC, useEffect } from 'react';
import PhoneInput from '~/components/common/PhoneInput';
import useInputValidator from '~/lib/hooks/useInputValidator';
import { phoneValidator } from '~/utils/validation';
import SignUpInputWrapper from '../SignUpInputWrapper';
import SignUpLabel from '../SignUpLabel';
import * as S from './index.style';

interface IProps {
  onChange?: (phoneNumber: string) => void;
  value?: string;
}

const SignUpPhoneInput: FC<IProps> = ({ value, onChange }) => {
  const [phone, phoneWarning, _, onInput] = useInputValidator(
    '',
    phoneValidator,
  );

  useEffect(() => {
    if (onChange) {
      onChange(phone);
    }
  }, [phone]);

  return (
    <SignUpInputWrapper>
      <SignUpLabel title="전화번호" warning={phoneWarning} />
      <S.PhoneInputWrapper>
        <PhoneInput
          fontSize="20px"
          placeholder="010 0000 0000"
          value={value}
          onChange={onInput}
        />
      </S.PhoneInputWrapper>
    </SignUpInputWrapper>
  );
};

export default SignUpPhoneInput;
