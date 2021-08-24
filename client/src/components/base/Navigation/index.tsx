import { FC } from 'react';
import { Link, useLocation } from '~/core/Router';
import { LogoSVG, DoodleUselessSVG, MypageSVG, CartSVG } from '~/assets';
import Divider from '~/components/common/Divider';
import useUser from '~/lib/hooks/useUser';
import ProfileImage from '~/components/common/ProfileImage';
import ProductLikeButton from '~/components/product/ProductLikeButton';
import {
  NavigationWrapper,
  Content,
  HeaderRightSection,
  CartWrapper,
  BadgeWrapper,
  UselessDoodle,
  Logo,
} from './index.style';

const Navigation: FC = () => {
  const [user] = useUser();
  const { pathname } = useLocation();
  if (['/', '/login', '/signup'].includes(pathname)) return null;

  return (
    <NavigationWrapper>
      <Content>
        <UselessDoodle>
          <img src={DoodleUselessSVG} alt="useless" />
        </UselessDoodle>
        <Link to="/">
          <Logo>
            <img src={LogoSVG} alt="logo" />
          </Logo>
        </Link>
        <HeaderRightSection>
          <CartWrapper>
            <img src={CartSVG} alt="cart" />
            <BadgeWrapper>
              <span>15</span>
            </BadgeWrapper>
          </CartWrapper>
          <ProductLikeButton isLike={false} />
          {user?.profile ? (
            <ProfileImage src={user.profile} size="30px" />
          ) : (
            <img src={MypageSVG} alt="mypage" />
          )}
        </HeaderRightSection>
      </Content>
      <Divider />
    </NavigationWrapper>
  );
};

export default Navigation;
