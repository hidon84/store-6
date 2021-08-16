import React, { FC } from 'react';
import { checkCircleSVG, checkSVG } from '~/assets/index';

import { RadioWrapper, CheckImg, CheckCircleImg } from './index.style';

/**
 * @example
 *  <Checkbox checked />
 *  <Checkbox />
 */
const Checkbox: FC<{
  checked?: boolean;
}> = ({ checked }) => {
  return (
    <RadioWrapper>
      {checked && <CheckImg src={checkSVG} />}
      <CheckCircleImg src={checkCircleSVG} />
    </RadioWrapper>
  );
};

export default Checkbox;
