import styled from 'styled-components';
import * as customStyled from '~/lib/customStyledComponents';

const StyledLoginPage = customStyled.default.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  justify-self: center;
  height: 100vh;
`;

const LeftDoodles = customStyled.default.aside`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: space-evenly;
`;

const RightDoodles = customStyled.default.aside`
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
  min-width: 400px;
  max-width: 400px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 12px;
`;

const Logo = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 64px;
  font-size: 48px;
`;

const ButtonWrapper = styled.div`
  margin-top: 42px;
`;

const RegisterSection = styled.section`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 32px;
`;

const LoginDemo = styled.span`
  font-size: 20px;
  line-height: 26px;
  padding-left: 20px;
  cursor: pointer;
`;

const RegisterLink = styled.span`
  color: var(--baemin100);
  font-size: 20px;
  line-height: 26px;
  padding-right: 26px;
  cursor: pointer;
`;

const SocialButtons = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 48px;
  justify-content: space-evenly;
  align-items: center;
`;

const SocialButton = styled.img`
  cursor: pointer;
`;

export default {
  StyledLoginPage,
  LeftDoodles,
  RightDoodles,
  LoginForm,
  Logo,
  ButtonWrapper,
  RegisterSection,
  LoginDemo,
  RegisterLink,
  SocialButtons,
  SocialButton,
};
