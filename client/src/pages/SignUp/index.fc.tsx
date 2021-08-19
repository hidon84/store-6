import { FC } from 'react';
import { breakSVG, mooyahoSVG, mooyahoWeUseSVG } from '~/assets';
import { LeftDoodleWrapper, RightDoodleWrapper } from './index.style';

const LeftDoodles: FC = () => {
  return (
    <LeftDoodleWrapper>
      <img src={breakSVG} alt="jiroboQuote" />
    </LeftDoodleWrapper>
  );
};

const RightDoodles: FC = () => {
  return (
    <RightDoodleWrapper>
      <img src={mooyahoSVG} alt="jiroboQuote" />
      <img src={mooyahoWeUseSVG} alt="jiroboQuote" />
    </RightDoodleWrapper>
  );
};

export { LeftDoodles, RightDoodles };
