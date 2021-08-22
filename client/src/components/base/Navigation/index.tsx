import React, { FC } from 'react';
import { useLocation } from '~/core/Router';

import {
  NavigationWrapper,
  Content,
  HeaderRightSection,
  CartWrapper,
  BadgeWrapper,
  UselessDoodle,
  Logo,
} from './index.style';

import {
  LogoSVG,
  DoodleUselessSVG,
  HeartSVG,
  MypageSVG,
  CartSVG,
} from '~/assets';
import Divider from '~/components/common/Divider';

const Navigation: FC = () => {
  const { pathname } = useLocation();
  if (['/', '/login', '/signup'].includes(pathname)) return null;

  return (
    <NavigationWrapper>
      <Content>
        <UselessDoodle>
          <img src={DoodleUselessSVG} alt="useless" />
        </UselessDoodle>
        <Logo>
          <img src={LogoSVG} alt="logo" />
        </Logo>
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
      </Content>
      <Divider />
    </NavigationWrapper>
  );
};

export default Navigation;
