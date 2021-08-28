import { FC } from 'react';
import UnderLine from '~/components/common/UnderLine';
import S from './index.style';

interface IProps {
  type?: string;
  autoComplete?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const SignUpInput: FC<IProps> = ({
  type = 'text',
  autoComplete = 'off',
  value,
  onChange,
}) => {
  return (
    <S.InputWrapper>
      <S.Input
        autoComplete={autoComplete}
        value={value ?? ''}
        type={type}
        onChange={onChange}
      />
      <S.LineWrapper>
        <UnderLine />
      </S.LineWrapper>
    </S.InputWrapper>
  );
};

export default SignUpInput;
