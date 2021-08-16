import styled from 'styled-components';
import { underlineSVG } from '~/assets/index';

/**
 * width에 string으로 %를 넘겨주세요.
 *
 * @example
 * <Input width="100%" />
 */
const Input = styled.input<{ width?: string }>`
  box-sizing: border-box;
  width: ${(props) => props.width || '100%'};
  height: 34px;
  padding: 0 16px 10px 16px;
  margin-top: 16px;
  line-height: 25px;
  font-size: 20px;
  background: bottom left / contain no-repeat url(${underlineSVG});

  &::placeholder {
    color: #999;
  }
`;

export default Input;
