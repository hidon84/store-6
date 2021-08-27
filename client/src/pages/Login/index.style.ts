import styled from 'styled-components';

export const StyledLoginPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const LeftDoodles = styled.aside`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: space-evenly;
`;

export const RightDoodles = styled.aside`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  width: 33%;
  align-items: center;
  justify-content: center;
`;

export const LoginForm = styled.form`
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

export const LoginFormHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 64px;
  font-size: 48px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 42px;
`;

export const RegisterSection = styled.section`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 32px;
`;

export const LoginDemo = styled.span`
  font-size: 20px;
  line-height: 26px;
  padding-left: 20px;
  cursor: pointer;
`;

export const RegisterLink = styled.span`
  color: var(--baemin100);
  font-size: 20px;
  line-height: 26px;
  padding-right: 26px;
  cursor: pointer;
`;

export const SocialButtons = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 48px;
  justify-content: space-evenly;
  align-items: center;
`;

export const SocialButton = styled.img`
  cursor: pointer;
`;
