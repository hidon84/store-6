import { FC } from 'react';
import PhoneInput from '~/components/common/PhoneInput';
import S from './index.style';

interface Props {
  onChange?: (phoneNumber: string) => void;
  value?: string;
  disabled?: boolean;
  placeholder?: string;
}

const MyPagePhoneInput: FC<Props> = ({
  onChange,
  value,
  disabled,
  placeholder,
}) => {
  return (
    <S.MyPagePhoneInputWrap>
      <PhoneInput
        onChange={onChange}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
      />
    </S.MyPagePhoneInputWrap>
  );
};

export default MyPagePhoneInput;
