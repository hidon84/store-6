import { FC } from 'react';
import { breakSVG, mooyahoSVG, mooyahoWeUseSVG } from '~/assets';
import { LeftDoodleWrapper, RightDoodleWrapper } from './index.style';

const LeftDoodles: FC = () => {
  return (
    <LeftDoodleWrapper>
      <img src={breakSVG} alt="뷁" />
    </LeftDoodleWrapper>
  );
};

const RightDoodles: FC = () => {
  return (
    <RightDoodleWrapper>
      <img src={mooyahoSVG} alt="무야호" />
      <img src={mooyahoWeUseSVG} alt="저희가 많이 보죠" />
    </RightDoodleWrapper>
  );
};

export { LeftDoodles, RightDoodles };
