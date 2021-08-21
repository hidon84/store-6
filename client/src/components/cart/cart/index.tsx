import { FC, useState, useEffect } from 'react';
import Button from '~/components/common/Button';
import Divider from '~/components/common/Divider';
import { deleteCartItem, getCartItems } from '~/lib/api/cart';
import useUser from '~/lib/hooks/useUser';
import { alert } from '~/utils/modal';
import CartItem from '../cartItem';
import { CartFooter, CartHeader } from './index.style';

const Cart: FC = () => {
  const [cartItems, setCartItems] = useState([]);
  const [amount, setAmount] = useState(0);
  const [user] = useUser();

  const calAmount = (items) => {
    return items.reduce((acc, cur) => {
      return acc + cur.product.price;
    }, 0);
  };

  const fetchCart = async () => {
    const response = await getCartItems();
    if (response.statusCode === 200) {
      setCartItems(response.data);
      setAmount(calAmount(response.data));
    }
  };

  useEffect(() => {
    if (user) {
      fetchCart();
    }
  }, [user]);

  const onSubmit = () => {
    alert('결제기능은 준비되지 않았습니다.');
  };

  const changeAmount = (price: number, type: string) => {

    const offset = type === 'down' ? price * -1 : price;

    setAmount(amount + offset);

  };

  const removeCartItem = async (cartIdx: number) => {
    const response = await deleteCartItem(cartIdx);
    if (response.statusCode === 200) {
      fetchCart();
    }
  };

  return (
    <div>
      <CartHeader>
        <div>상품명</div>
        <div>판매가</div>
        <div>주문금액</div>
        <div>수령</div>
      </CartHeader>
      <Divider width="950px" direction="horizontal" />
      <div>
        {cartItems &&
          cartItems.map((item) => (
            <div key={item.idx}>
              <CartItem
                cartIdx={item.idx}
                product={item.product}
                changeAmount={changeAmount}
                removeCartItem={removeCartItem}
              />
              <Divider width="950px" direction="horizontal" />
            </div>
          ))}
      </div>
      <CartFooter>
        <div>총 {amount}원</div>
        <Button size="lg" onClick={onSubmit}>
          결제하기
        </Button>
        <div />
      </CartFooter>
    </div>
  );
};

export default Cart;
