import styled from 'styled-components';
import { doodleRobotSVG } from '~/assets';

export const StyledHeaderLogo = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoTitle = styled.h1`
  display: inline-flex;
  font-size: 40px;
  width: 150px;
  justify-content: center;
  color: #000;
`;

export const LogoIcon = styled.img.attrs({
  src: doodleRobotSVG,
  alt: 'robot for logo',
})`
  width: 45px;
  margin-right: 7px;
`;
