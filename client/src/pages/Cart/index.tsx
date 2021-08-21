import React, { FC, useState } from 'react';
import Cart from '~/components/cart/cart';
import Shipping from '~/components/cart/shipping';
import Divider from '~/components/common/Divider';

import { CartPageWrapper, Header, HeaderItem } from './index.style';

const CartPage: FC = () => {
  const [isCartComponent, setIsCartComponent] = useState<boolean>(true);

  const handleSetIsCartComponent = (state: boolean) => {
    setIsCartComponent(state);
  };

  return (
    <CartPageWrapper>
      <Header>
        <HeaderItem
          onClick={() => handleSetIsCartComponent(true)}
          className={isCartComponent && 'selected'}
        >
          장바구니
        </HeaderItem>
        <HeaderItem
          onClick={() => handleSetIsCartComponent(false)}
          className={!isCartComponent && 'selected'}
        >
          배송주소지 관리
        </HeaderItem>
      </Header>
      <Divider width="770px" direction="horizontal" thick />
      {isCartComponent ? <Cart /> : <Shipping />}
    </CartPageWrapper>
  );
};

export default CartPage;
