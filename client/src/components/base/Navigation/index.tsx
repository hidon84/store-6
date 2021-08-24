import { FC, useEffect, useState } from 'react';
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
import * as cartApi from '~/lib/api/cart';
import { alert } from '~/utils/modal';

const message = {
  failedToGetCartAmount: '장바구니 개수를 가져오는 데 실패했습니다.',
};

const Navigation: FC = () => {
  const [user] = useUser();
  const [cartAmount, setCartAmount] = useState(0);
  const { pathname } = useLocation();

  useEffect(() => {
    if (user) {
      cartApi
        .getCartAmount()
        .then((result) => setCartAmount(result.data.amount))
        .catch(() => alert(message.failedToGetCartAmount));
    }
  }, [user, pathname]);

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
          <Link to="/cart">
            <CartWrapper activate={pathname === urls.cart}>
              <CartIcon activate={pathname === urls.cart} />
              <Badge badgeContent={cartAmount.toString()} />
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
