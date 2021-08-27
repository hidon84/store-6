import { FC, useContext } from 'react';
import { Link, useLocation } from '~/core/Router';

import HeaderLogo from '~/components/base/HeaderLogo';
import ProfileIcon from '~/components/base/ProfileIcon';
import Divider from '~/components/common/Divider';
import ProductLikeButton from '~/components/product/ProductLikeButton';

import urls from '~/lib/constants/urls';
import useCartAmount from '~/lib/hooks/useCartAmount';

import {
  NavigationWrapper,
  Content,
  HeaderRightSection,
  CartWrapper,
  Badge,
  UselessDoodle,
  Logo,
  CartIcon,
  DoodleUselessIcon,
  MyPageIcon,
} from './index.style';
import UserContext from '~/lib/contexts/userContext';

const Navigation: FC = () => {
  const { user: userState } = useContext(UserContext);
  const cartAmount = useCartAmount();
  const { pathname } = useLocation();
  if ([urls.main, urls.login].includes(pathname)) return null;
  if (pathname.includes(urls.signup)) return null;

  return (
    <NavigationWrapper>
      <Content>
        <UselessDoodle>
          <DoodleUselessIcon />
        </UselessDoodle>
        <Link to="/">
          <Logo>
            <HeaderLogo />
          </Logo>
        </Link>
        <HeaderRightSection>
          <Link to="/cart">
            <CartWrapper
              activate={pathname === urls.cart || pathname === urls.shipping}
            >
              <CartIcon
                activate={pathname === urls.cart || pathname === urls.shipping}
              />
              <Badge badgeContent={cartAmount.toString()} />
            </CartWrapper>
          </Link>
          <Link to="/like">
            <ProductLikeButton
              isLike={pathname === urls.likeList}
              fillLineWhenHover
            />
          </Link>
          {userState.isLoggedIn ? (
            <ProfileIcon pathname={pathname} user={userState.user} />
          ) : (
            <Link to="/login">
              <MyPageIcon activate={pathname === urls.login} />
            </Link>
          )}
        </HeaderRightSection>
      </Content>
      <Divider />
    </NavigationWrapper>
  );
};

export default Navigation;
