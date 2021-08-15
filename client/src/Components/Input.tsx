import styled from 'styled-components';
import { underlineSVG } from '~/assets/index';

const Input = styled.input`
  font-size: 20px;
  margin-top: 16px;
  width: 100%;
  padding-left: 16px;
  line-height: 25px;
  height: 34px;
  background: url(${underlineSVG}) bottom left no-repeat;
  box-sizing: border-box;
  background-size: contain;
`;

export default Input;
