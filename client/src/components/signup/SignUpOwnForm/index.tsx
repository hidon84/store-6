import { FC, useCallback, useEffect } from 'react';
import useInputValidator from '~/lib/hooks/useInputValidator';
import { idValidator, pwValidator, rePwValidator } from '~/utils/validation';
import SignUpInput from '../SignUpInput';
import SignUpInputWrapper from '../SignUpInputWrapper';
import SignUpLabel from '../SignUpLabel';

interface IUserAccount {
  id: string;
  pw: string;
  rePw: string;
}

interface IProps {
  onChange?: ({ id, pw, rePw }: IUserAccount) => void;
}

const SignUpOwnForm: FC<IProps> = ({ onChange }) => {
  const [id, idWarning, handleId] = useInputValidator('', idValidator);
  const [pw, pwWarning, handlePW] = useInputValidator('', pwValidator);
  const [rePw, pwReWarning, handleRePw, onInputRePw] = useInputValidator(
    '',
    (rePwIn) => rePwValidator(rePwIn, pw),
    [pw],
  );

  const onChangePw = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onInputRePw(rePw);
      handlePW(e);
    },
    [handlePW, onInputRePw, rePw],
  );

  useEffect(() => {
    if (onChange) {
      onChange({ id, pw, rePw });
    }
  }, [id, pw, rePw]);

  return (
    <>
      <SignUpInputWrapper>
        <SignUpLabel title="아이디" warning={idWarning} />
        <SignUpInput
          autoComplete="off"
          type="text"
          value={id}
          onChange={handleId}
        />
      </SignUpInputWrapper>
      <SignUpInputWrapper>
        <SignUpLabel title="비밀번호" warning={pwWarning} />
        <SignUpInput
          autoComplete="off"
          type="password"
          value={pw}
          onChange={onChangePw}
        />
      </SignUpInputWrapper>
      <SignUpInputWrapper>
        <SignUpLabel title="비밀번호 확인" warning={pwReWarning} />
        <SignUpInput
          autoComplete="off"
          type="password"
          value={rePw}
          onChange={handleRePw}
        />
      </SignUpInputWrapper>
    </>
  );
};

export default SignUpOwnForm;
