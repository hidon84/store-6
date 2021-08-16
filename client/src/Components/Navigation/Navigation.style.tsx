import styled from 'styled-components';
import { BadgeSVG } from '~/assets/index';

export const NavigationWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 920px;
  background-color: pink;
`;

export const HeaderRightSection = styled.div`
  display: flex;
  gap: 35px;
`;

export const CartWrapper = styled.div`
  position: relative;
`;

export const BadgeWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  right: -8px;
  text-align: center;
  line-height: 20px;
  height: 20px;
  width: 20px;
  background: url(${BadgeSVG}) no-repeat center center;
  color: #fff;
  font-size: 12px;
`;
