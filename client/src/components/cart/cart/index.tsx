import { FC, useState, useEffect, useContext } from 'react';
import Button from '~/components/common/Button';
import Divider from '~/components/common/Divider';
import { deleteCartItem, getCartItems } from '~/lib/api/cart';
import { CartGetResponseBody } from '~/lib/api/types';
import useSetCartAmount from '~/lib/hooks/useSetCartAmount';
import { alert } from '~/utils/modal';
import CartItem from '../cartItem';
import { CartFooter, CartHeader } from './index.style';
import { formatPrice } from '~/utils/formatPrice';
import UserContext from '~/lib/contexts/userContext';

const message = {
  failedToGetCartItems: '장바구니 리스트를 가져오는 데 실패했습니다.',
  failedToDeleteCartItem:
    '아이템을 장바구니 리스트로부터 삭제하는 데 실패했습니다.',
  youCanNotPay: '결제기능은 준비되지 않았습니다.',
};

const Cart: FC = () => {
  const setCartAmount = useSetCartAmount();
  const [cartItems, setCartItems] = useState<CartGetResponseBody[]>([]);
  const [amount, setAmount] = useState(0);
  const { user: userState } = useContext(UserContext);

  const calAmount = (items: CartGetResponseBody[]) => {
    return items.reduce((acc, cur) => {
      return acc + cur.product.discountedPrice;
    }, 0);
  };

  const fetchCart = async () => {
    getCartItems()
      .then((result) => {
        setCartItems(result.data);
        setAmount(calAmount(result.data));
      })
      .catch(() => alert(message.failedToGetCartItems));
  };

  useEffect(() => {
    if (userState.isLoggedIn) fetchCart();
  }, [userState]);

  const onSubmit = () => {
    alert(message.youCanNotPay);
  };

  const changeAmount = (price: number, type: string) => {
    const offset = type === 'down' ? price * -1 : price;
    setAmount(amount + offset);
  };

  const removeCartItem = async (
    cartIdx: number,
    count: number,
    price: number,
  ) => {
    deleteCartItem(cartIdx)
      .then((result) => {
        const nextCartItems = [...cartItems];
        const indexToDelete = cartItems.findIndex(
          (item) => item.idx === cartIdx,
        );
        nextCartItems.splice(indexToDelete, 1);

        setCartItems(nextCartItems);
        changeAmount(count * price, 'down');
        setCartAmount(result.data.amount);
      })
      .catch(() => alert(message.failedToDeleteCartItem));
  };

  return (
    <div>
      <CartHeader>
        <div>상품명</div>
        <div>판매가</div>
        <div>주문금액</div>
        <div>수량</div>
      </CartHeader>
      <Divider width="980px" direction="horizontal" />
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
              <Divider width="980px" direction="horizontal" />
            </div>
          ))}
      </div>
      <CartFooter>
        <div>총 {formatPrice(amount)}</div>
        <Button size="lg" onClick={onSubmit}>
          결제하기
        </Button>
        <div />
      </CartFooter>
    </div>
  );
};

export default Cart;
