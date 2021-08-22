import styled from 'styled-components';
import { BadgeSVG } from '~/assets';

export const NavigationWrapper = styled.nav`
  width: 100%;
  height: 100px;
`;

export const Content = styled.div`
  height: 100%;
  position: relative;
  height: 100px;
  margin: 0 auto;
  width: 920px;
`;

export const UselessDoodle = styled.div`
  position: absolute;
  top: calc(50% - 8px);
  left: 0;
  height: 16px;
`;

export const Logo = styled.div`
  position: absolute;
  top: calc(50% - 36.5px);
  left: calc(50% - 116px);
  width: 203px;
  height: 71px;
`;

export const HeaderRightSection = styled.div`
  position: absolute;
  top: calc(50% - 17px);
  right: 0;
  /* height: 34px; */
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
