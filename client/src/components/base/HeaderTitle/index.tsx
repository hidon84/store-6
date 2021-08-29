import { FC } from 'react';
import styled from 'styled-components';
import { doodleRobotSVG } from '~/assets';
import { Link } from '~/core/Router';

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
    <Link to="/products">
      <SignUpFormHeader>
        <img src={doodleRobotSVG} alt="robot" />
        <h1>
          <span className="text-baemin100">배민</span>
          <span>문방구</span>
        </h1>
      </SignUpFormHeader>
    </Link>
  );
};

export default HeaderTitle;
