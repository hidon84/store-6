import React, { FC } from 'react';
import styled from 'styled-components';
import doodleTeasingSVG from '~/assets/doodle-teasing.svg'
import doodleSkeletonSVG from '~/assets/doodle-skeleton.svg';
import doodleStickmanSVG from '~/assets/doodle-stickman.svg';
import doodleAssKickSVG from '~/assets/doodle-ass-kick.svg';
import doodleRobotSVG from '~/assets/doodle-robot.svg';

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


const RightDoodles = styled.aside`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  width: 33%;
  align-items: center;
  justify-content: center;
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

const LoginFormHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 4rem;
  font-size: 3rem;
`;

const LoginPage: FC = () => {
  return (
    <StyledLoginPage>
      <LeftDoodles>
        <div>
          <img src={doodleTeasingSVG} alt="teasing" />
        </div>
        <div style={{marginLeft: '6rem'}}>
          <img src={doodleSkeletonSVG} alt="skeleton" />
        </div>
      </LeftDoodles>
      <LoginForm>
        <LoginFormHeader>
          <div className="robot-wrapper">
            <img src={doodleRobotSVG} alt="robot" />
          </div>
          <h1 className="text-baemin100">배민</h1>
          <h1>문방구</h1>
        </LoginFormHeader>
        <input
          autoComplete="off"
          className="underlined-input"
          type="text"
          name="id"
          id="id"
          placeholder="아이디"
        />
        <div id="id-helper">가입되지 않은 아이디입니다.</div>
        <input
          autoComplete="off"
          className="underlined-input"
          type="password"
          name="password"
          id="password"
          placeholder="비밀번호"
        />
        <div id="password-helper">비밀번호 형식이 맞지 않습니다.</div>
        <div className="login-submit-btn-wrapper">
          <button className="login-submit-btn" type="submit">로그인</button>
        </div>
        <div className="auto-login-wrapper">
          <div className="check-wrapper">
            <img className="checked" src="./assets/check.svg" alt="" />
            <img src="./assets/circle-unchecked.svg" alt="" />
          </div>
          자동 로그인
        </div>
        <div className="divider-full"></div>
        <div className="social-btns">
          <span className="social-facebook-wrapper">
            <img src="./assets/social-facebook.svg" alt="" />
          </span>
          <img src="./assets/vertical-line.svg" alt="" />
          <span className="social-google-wrapper">
            <img src="./assets/social-google.svg" alt="" />
          </span>
        </div>
        <footer className="footer">
          COPYRIGHT © 2021 우아한형제들 ALL RIGHTS RESERVED.
        </footer>
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
