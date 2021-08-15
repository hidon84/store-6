import styled from "styled-components";
import underlineSVG from '~/assets/underline.svg';

const Input = styled.input`
  font-size: 1.2rem;
  margin-top: 1rem;
  width: 100%;
  padding-left: 2rem;
  height: 2rem;
  background: url(${underlineSVG}) bottom left no-repeat;
  box-sizing: border-box;
  background-size: contain;
`;

export default Input;
