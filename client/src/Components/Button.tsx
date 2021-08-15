import styled from "styled-components";
import buttonSVG from '~/assets/button.svg';

const ButtonWrapper = styled.div`
  display: flex;
  height: 3rem;
  width: 10rem;
`;

const Button = styled.button`
  font-size: 1.4rem;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  position: relative;
  background-position-x: center;
  background-position-y: center;
  background: url(${buttonSVG}) no-repeat;
  background-size: cover;
`;

export default Button;
