import { FC } from 'react';
import S from './index.style';

interface IProps {
  title: string;
  warning?: string;
}

const SignUpLabel: FC<IProps> = ({ title, warning }) => {
  return (
    <S.LabelRow>
      <S.Label>{title}</S.Label>
      {warning && <S.WarningMessage>{warning}</S.WarningMessage>}
    </S.LabelRow>
  );
};

export default SignUpLabel;
