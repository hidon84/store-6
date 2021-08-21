import React, { FC, useState, useEffect } from 'react';
import Button from '~/components/common/Button';
import Divider from '~/components/common/Divider';
import { deleteCartItem, getCartItems } from '~/lib/api/cart';
import { alert } from '~/utils/modal';
import CartItem from '../cartItem';
import { CartFooter, CartHeader } from './index.style'

const Cart: FC = () => {

  const calAmount = () => { 
    return cartItems.reduce((acc, cur) => { 
      return acc+cur.product.price
    },0)
  }

  const [cartItems, setCartItems] = useState([]);
  const [amount, setAmount] = useState(calAmount());

  useEffect(() => {
    fetchCart();
  },[]);

  const fetchCart = async () => {
    const response = await getCartItems();
    if (response.statusCode === 200) {
        const cartItems = response.data;
        setCartItems(cartItems)
    }
  };

  const onSubmit = () => {
    alert('결제기능은 준비되지 않았습니다.')
  };

  const changAmount = (price:number, type: string) => { 
    if (type === 'up') { 
      setAmount(amount+price)
    }

    if (type === 'down') {
      setAmount(amount-price);
    }
  }

  const removeCartItem = async(cartIdx: number) => {
    const response = await deleteCartItem(cartIdx);
    if (response.statusCode === 200) { 
      await fetchCart();
    }
  }

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
              <CartItem cartIdx={item.idx} product={item.product} changAmount={changAmount} removeCartItem={removeCartItem}/>
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
