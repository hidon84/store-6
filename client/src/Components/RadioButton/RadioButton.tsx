import React, { FC } from 'react';
import { checkCircleSVG, checkSVG } from '~/assets/index';

import {
  RadioContainer,
  RadioWrapper,
  CheckImg,
  CheckCircleImg,
} from './RadioButton.style';

/**
 * example)
 * <RadioButton checked label='로그인' />
 * <RadioButton label='로그인' />
 */
const RadioButton: FC<{
  checked?: boolean;
  onClick?: () => void;
  label: string;
}> = ({ checked, onClick, label }) => {
  return (
    <RadioContainer onClick={() => onClick?.()}>
      <RadioWrapper>
        {checked && <CheckImg src={checkSVG} />}
        <CheckCircleImg src={checkCircleSVG} />
      </RadioWrapper>
      {label}
    </RadioContainer>
  );
};

export default RadioButton;
