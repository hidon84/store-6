import { FC } from 'react';
import styled from 'styled-components';
import { doodleRobotSVG } from '~/assets';

const SignUpFormHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 64px;
  margin-bottom: 64px;
  font-size: 48px;
`;

const HeaderTitle: FC = () => {
  return (
    <SignUpFormHeader>
      <img src={doodleRobotSVG} alt="robot" />
      <h1 className="text-baemin100">배민</h1>
      <h1>문방구</h1>
    </SignUpFormHeader>
  );
};

export default HeaderTitle;
