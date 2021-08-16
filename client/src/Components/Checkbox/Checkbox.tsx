import React, { FC } from 'react';
import { checkCircleSVG, checkSVG } from '~/assets/index';

import {
  RadioContainer,
  RadioWrapper,
  CheckImg,
  CheckCircleImg,
} from './Checkbox.style';

/**
 * example)
 * <Checkbox checked label='로그인' />
 * <Checkbox label='로그인' />
 */
const Checkbox: FC<{
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

export default Checkbox;
