import { FC, useCallback } from 'react';
import Cart from '~/components/cart/Cart';
import Shipping from '~/components/shipping/Shipping';
import SubPageHeader from '~/components/subpage/SubPageHeader';
import SubPageHeaderItem from '~/components/subpage/SubPageHeaderItem';
import SubPageWrapper from '~/components/subpage/SubPageWrapper';
import { useHistory } from '~/core/Router';
import urls from '~/lib/constants/urls';

interface IProps {
  pageType?: 'cart' | 'shipping';
}

const CartAndShippingPage: FC<IProps> = ({ pageType = 'cart' }) => {
  const { push } = useHistory();
  const isCartPage = pageType === 'cart';

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
