import { FC, useState } from 'react';
import Cart from '~/components/cart/Cart';
import Shipping from '~/components/shipping/Shipping';
import SubPageHeader from '~/components/subpage/SubPageHeader';
import SubPageHeaderItem from '~/components/subpage/SubPageHeaderItem';
import SubPageWrapper from '~/components/subpage/SubPageWrapper';

const CartPage: FC = () => {
  const [isCartComponent, setIsCartComponent] = useState<boolean>(true);

  const handleSetIsCartComponent = (state: boolean) => {
    setIsCartComponent(state);
  };

  return (
    <SubPageWrapper width="1006px">
      <SubPageHeader>
        <SubPageHeaderItem
          onClick={() => handleSetIsCartComponent(true)}
          isSelected={isCartComponent}
        >
          장바구니
        </SubPageHeaderItem>
        <SubPageHeaderItem
          onClick={() => handleSetIsCartComponent(false)}
          isSelected={!isCartComponent}
        >
          배송주소지 관리
        </SubPageHeaderItem>
      </SubPageHeader>
      {isCartComponent ? <Cart /> : <Shipping />}
    </SubPageWrapper>
  );
};

export default CartPage;
