import styled from 'styled-components';
import { underlineSVG } from '~/assets';

const StyledLoginPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const LeftDoodles = styled.aside`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: space-evenly;
`;

const RightDoodles = styled.aside`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100vh;
  width: 33%;
  align-items: center;
  justify-content: center;
`;

const SignUpForm = styled.form`
  display: flex;
  flex: 2;
  min-width: 400px;
  max-width: 400px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
`;

const SignUpFormHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 64px;
  margin-bottom: 64px;
  font-size: 48px;
`;

const ButtonWrapper = styled.div`
  margin-top: 42px;
`;

const CheckboxSection = styled.section`
  width: 100%;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: fit-content;
  margin-top: 32px;
  padding-left: 14px;
  cursor: pointer;
`;

const FullInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 34px;
  padding: 0 8px 0 8px;
  line-height: 25px;
  font-size: 20px;
  background: bottom left / contain no-repeat url(${underlineSVG});

  &::placeholder {
    color: #999;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const LabelRow = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: 32px;
  align-items: center;
  justify-content: flex-start;
`;

const Label = styled.label`
  padding-left: 8px;
  font-size: 20px;
  line-height: 25px;
`;

const WarningMessage = styled.span`
  font-size: 12px;
  line-height: 15px;
  color: #ff9e2c;
`;

const Policy = styled.div`
  display: block;
  margin-top: 8px;
  border: 1px solid #eeeeee;
  box-sizing: border-box;
  border-radius: 10px;
  overflow-y: scroll;
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  height: 80px;
  font-family: 'noto sans', sans-serif !important;
`;

export {
  ButtonWrapper,
  CheckboxSection,
  CheckboxWrapper,
  FullInput,
  InputWrapper,
  Label,
  LabelRow,
  LeftDoodles,
  Policy,
  RightDoodles,
  SignUpForm,
  SignUpFormHeader,
  StyledLoginPage,
  WarningMessage,
};
