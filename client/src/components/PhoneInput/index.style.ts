import styled from 'styled-components';
import { phoneUnderLineSVG } from '~/assets';

export const PhoneWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  bottom: 4px;
`;

export const StyledPhoneInput = styled.input`
  text-align: center;
  box-sizing: border-box;
  width: 100px;
  height: 34px;
  padding: 0 16px 10px 16px;
  margin-top: 16px;
  line-height: 25px;
  font-size: 14px;
  background: bottom left / contain no-repeat url(${phoneUnderLineSVG});

  &::placeholder {
    color: #999;
  }
`;
