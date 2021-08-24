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

const Navigation: FC = () => {
  const [user] = useUser();
  const { pathname } = useLocation();
  if (['/', '/login', '/signup'].includes(pathname)) return null;

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
            <CartIcon />
            <Badge badgeContent="15" />
          </CartWrapper>
          <ProductLikeButton isLike={false} />
          {user?.profile ? (
            <ProfileImage src={user.profile} size="30px" />
          ) : (
            <MyPageIcon />
          )}
        </HeaderRightSection>
      </Content>
      <Divider />
    </NavigationWrapper>
  );
};

export default Navigation;
