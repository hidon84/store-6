import { FC, useCallback, useContext, useEffect } from 'react';
import Cart from '~/components/cart/Cart';
import Shipping from '~/components/shipping/Shipping';
import SubPageHeader from '~/components/subpage/SubPageHeader';
import SubPageHeaderItem from '~/components/subpage/SubPageHeaderItem';
import SubPageWrapper from '~/components/subpage/SubPageWrapper';
import { useHistory } from '~/core/Router';
import urls from '~/lib/constants/urls';
import UserContext from '~/lib/contexts/userContext';

interface IProps {
  pageType?: 'cart' | 'shipping';
}

const CartAndShippingPage: FC<IProps> = ({ pageType = 'cart' }) => {
  const { push } = useHistory();
  const isCartPage = pageType === 'cart';
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user.isLoggedIn)
      push('/', { from: '/like', error: 'accessWithoutToken' });
    return () => {};
  }, [user]);

  const goCartPage = useCallback(
    () => !isCartPage && push(urls.cart),
    [isCartPage, push],
  );
  const goShippingPage = useCallback(
    () => isCartPage && push(urls.shipping),
    [isCartPage, push],
  );

  return (
    <SubPageWrapper width="1006px">
      <SubPageHeader>
        <SubPageHeaderItem onClick={goCartPage} isSelected={isCartPage}>
          장바구니
        </SubPageHeaderItem>
        <SubPageHeaderItem onClick={goShippingPage} isSelected={!isCartPage}>
          배송주소지 관리
        </SubPageHeaderItem>
      </SubPageHeader>
      {isCartPage ? <Cart /> : <Shipping />}
    </SubPageWrapper>
  );
};

export default CartAndShippingPage;
