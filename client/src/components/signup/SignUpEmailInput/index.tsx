import { FC, useEffect } from 'react';
import useInputValidator from '~/lib/hooks/useInputValidator';
import { emailValidator } from '~/utils/validation';
import SignUpInput from '../SignUpInput';
import SignUpInputWrapper from '../SignUpInputWrapper';
import SignUpLabel from '../SignUpLabel';

interface IProps {
  value?: string;
  onChange?: (email: string) => void;
}

const SignUpEmailInput: FC<IProps> = ({ value, onChange }) => {
  const [email, emailWarning, handleEmail] = useInputValidator(
    '',
    emailValidator,
  );

  useEffect(() => {
    if (onChange) {
      onChange(email);
    }
  }, [email]);

  return (
    <SignUpInputWrapper>
      <SignUpLabel title="이메일" warning={emailWarning} />
      <SignUpInput
        autoComplete="off"
        type="text"
        value={value}
        onChange={handleEmail}
      />
    </SignUpInputWrapper>
  );
};

export default SignUpEmailInput;
