import React, { FC } from 'react';
import styled from 'styled-components';
import doodleTeasingSVG from '~/assets/doodle-teasing.svg'
import doodleSkeletonSVG from '~/assets/doodle-skeleton.svg';
import doodleStickmanSVG from '~/assets/doodle-stickman.svg';
import doodleAssKickSVG from '~/assets/doodle-ass-kick.svg';

const StyledLoginPage = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const LeftDoodles = styled.aside`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: space-evenly;
`;

const LoginForm = styled.form`
  display: flex;
  flex: 2;
  min-width: 28rem;
  max-width: 28rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 0.8rem;
`;

const RightDoodles = styled.aside`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  width: 33%;
  align-items: center;
  justify-content: center;
`;

const LoginPage: FC = () => {
  return (
    <StyledLoginPage>
      <LeftDoodles>
        <div>
          <img src={doodleTeasingSVG} alt="" />
        </div>
        <div style={{marginLeft: '6rem'}}>
          <img src={doodleSkeletonSVG} alt="" />
        </div>
      </LeftDoodles>
      <LoginForm>

      </LoginForm>
      <RightDoodles>
        <div>
          <img src={doodleStickmanSVG} alt="" />
        </div>
        <div>
          <img src={doodleAssKickSVG} alt="" />
        </div>
      </RightDoodles>
    </StyledLoginPage>
  );
};

export default LoginPage;
