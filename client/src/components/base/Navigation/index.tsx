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
  if ([urls.main, urls.login, urls.signup].includes(pathname)) return null;

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
          <CartWrapper>
            <CartIcon activate={pathname === urls.cart} />
            <Badge badgeContent="15" />
          </CartWrapper>
          <ProductLikeButton isLike={pathname === urls.likeList} />
          {user?.profile ? (
            <ProfileImage src={user.profile} size="30px" />
          ) : (
            <MyPageIcon activate={pathname === urls.myPage} />
          )}
        </HeaderRightSection>
      </Content>
      <Divider />
    </NavigationWrapper>
  );
};

export default Navigation;
