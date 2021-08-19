import { FC } from 'react';
import {
  breakSVG,
  doodleRobotSVG,
  mooyahoSVG,
  mooyahoWeUseSVG,
} from '~/assets';
import {
  LeftDoodleWrapper,
  RightDoodleWrapper,
  SignUpFormHeader,
} from './index.style';

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

const HeaderTitle: FC = () => {
  return (
    <SignUpFormHeader>
      <img src={doodleRobotSVG} alt="robot" />
      <h1 className="text-baemin100">배민</h1>
      <h1>문방구</h1>
    </SignUpFormHeader>
  );
};

export { LeftDoodles, RightDoodles, HeaderTitle };
