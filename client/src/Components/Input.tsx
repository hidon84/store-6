import styled from 'styled-components';
import { underlineSVG } from '~/assets/index';

/**
 * width에 string으로 %를 넘겨주세요
 * example) <Input width="100%" />
 */
const Input = styled.input<{ width?: string }>`
  font-size: 20px;
  margin-top: 16px;
  width: ${(props) => props.width || '100%'};
  padding-left: 16px;
  line-height: 25px;
  height: 34px;
  background: url(${underlineSVG}) bottom left no-repeat;
  box-sizing: border-box;
  background-size: contain;
`;

export default Input;
