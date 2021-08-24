import { FC } from 'react';
import { Link, useLocation } from '~/core/Router';
import Divider from '~/components/common/Divider';
import useUser from '~/lib/hooks/useUser';
import ProfileImage from '~/components/common/ProfileImage';
import ProductLikeButton from '~/components/product/ProductLikeButton';
import HeaderLogo from '../HeaderLogo';
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
import urls from '~/lib/constants/urls';

const Navigation: FC = () => {
  const [user] = useUser();
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
            <CartWrapper activate={pathname === urls.cart}>
              <CartIcon activate={pathname === urls.cart} />
              <Badge badgeContent="15" />
            </CartWrapper>
          </Link>
          <Link to="/like">
            <ProductLikeButton
              isLike={pathname === urls.likeList}
              fillLineWhenHover
            />
          </Link>
          {user?.profile ? (
            <ProfileImage image={user.profile} size="30px" />
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
