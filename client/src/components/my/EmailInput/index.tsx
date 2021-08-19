import React from 'react';
import Input from '~/components/common/Input';
import { EmailWrapper } from './index.style';

interface Props {
  onChange?: (email: string) => void;
  value?: string;
  disabled?: boolean;
  placeholder?: string;
}

const EmailInput: React.FC<Props> = ({
  onChange,
  value,
  disabled,
  placeholder,
}) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <Input
      type="email"
      value={value || ''}
      onChange={handleOnChange}
      placeholder={placeholder ?? '이메일을 입력해 주세요.'}
      width="370px"
      style={{ fontSize: '14px' }}
      disabled={disabled}
    />
  );
};

export default EmailInput;
