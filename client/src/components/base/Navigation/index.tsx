import { FC, useContext } from 'react';
import { Link, useLocation } from '~/core/Router';

import HeaderLogo from '~/components/base/HeaderLogo';
import ProfileIcon from '~/components/base/ProfileIcon';
import Divider from '~/components/common/Divider';
import ProductLikeButton from '~/components/product/ProductLikeButton';

import urls from '~/lib/constants/urls';
import UserContext from '~/lib/contexts/userContext';
import useCartAmount from '~/lib/hooks/useCartAmount';

import * as S from './index.style';

const Navigation: FC = () => {
  const { user: userState } = useContext(UserContext);
  const cartAmount = useCartAmount();
  const { pathname } = useLocation();
  if ([urls.main, urls.login].includes(pathname)) return null;
  if (pathname.includes(urls.signup)) return null;

  return (
    <S.NavigationWrapper>
      <S.Content>
        <Link to="/">
          <S.FestivalWrapper>
            <S.FestivalIcon />
          </S.FestivalWrapper>
        </Link>
        <S.UselessDoodle>
          <S.DoodleUselessIcon />
        </S.UselessDoodle>
        <Link to="/products">
          <S.Logo>
            <HeaderLogo />
          </S.Logo>
        </Link>
        <S.HeaderRightSection>
          <Link to="/cart">
            <S.CartWrapper
              activate={pathname === urls.cart || pathname === urls.shipping}
            >
              <S.CartIcon
                activate={pathname === urls.cart || pathname === urls.shipping}
              />
              <S.Badge badgeContent={cartAmount.toString()} />
            </S.CartWrapper>
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
              <S.MyPageIcon activate={pathname === urls.login} />
            </Link>
          )}
        </S.HeaderRightSection>
      </S.Content>
      <Divider />
    </S.NavigationWrapper>
  );
};

export default Navigation;
