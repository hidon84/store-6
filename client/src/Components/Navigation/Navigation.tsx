import React, { FC } from 'react';
import { useLocation } from '~/core/Router';

import {
  NavigationWrapper,
  HeaderRightSection,
  CartWrapper,
  BadgeWrapper,
} from './Navigation.style';

import {
  LogoSVG,
  DoodleUselessSVG,
  HeartSVG,
  MypageSVG,
  CartSVG,
} from '~/assets/index';

const Navigation: FC = () => {
  const { pathname } = useLocation();
  if (['/', '/login', '/signup'].includes(pathname)) return null;

  return (
    <NavigationWrapper>
      <img src={DoodleUselessSVG} alt="useless" />
      <img src={LogoSVG} alt="logo" />
      <HeaderRightSection>
        <CartWrapper>
          <img src={CartSVG} alt="cart" />
          <BadgeWrapper>
            <span>15</span>
          </BadgeWrapper>
        </CartWrapper>
        <img src={HeartSVG} alt="heart" />
        <img src={MypageSVG} alt="mypage" />
      </HeaderRightSection>
    </NavigationWrapper>
  );
};

export default Navigation;
