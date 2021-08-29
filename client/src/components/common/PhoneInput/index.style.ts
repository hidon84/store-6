import styled from 'styled-components';
import { phoneUnderLineSVG } from '~/assets';

export const PhoneWrapper = styled.div<{ fontSize }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  font-size: ${({ fontSize }) => fontSize || 'inherit'};
`;

export const StyledPhoneInput = styled.input`
  text-align: center;
  box-sizing: border-box;
  width: 100px;
  height: 34px;
  background: bottom left / contain no-repeat url(${phoneUnderLineSVG});
  font-size: inherit;
  line-height: inherit;

  &::placeholder {
    color: #999;
  }
`;
