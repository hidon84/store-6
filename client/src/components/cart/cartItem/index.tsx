import React, { FC, useState } from 'react';
import { cancleSVG } from '~/assets';
import { confirm } from '~/utils/modal';
import {
  CartCancle,
  CartCount,
  CartCounter,
  CartImg,
  CartItemWrapper,
  CartPrice,
  CartTitle,
  Count,
  CountBtn,
} from './index.style';

interface Props {
  cartIdx: number;
  product: {
    idx: number;
    thumbnail: string;
    title: string;
    price: number;
  };
  changeAmount: (price: number, type: string) => void;
  removeCartItem: (cartIdx: number, count: number, price: number) => void;
}

const CartItem: FC<Props> = ({
  cartIdx,
  product,
  changeAmount,
  removeCartItem,
}) => {
  const [count, setCount] = useState(1);
  const [orderPrice, setOrderPrice] = useState(product.price);

  const handleUpBtnClick = () => {
    setOrderPrice(orderPrice + product.price);
    setCount(count + 1);
    changeAmount(product.price, 'up');
  };

  const handleDownBtnClick = () => {
    if (count > 1) {
      setCount(count - 1);
      setOrderPrice(orderPrice - product.price);
      changeAmount(product.price, 'down');
    }
  };

  const handleRemoveBtnClick = () => {
    confirm('정말 삭제하시겠어요?', () => {
      removeCartItem(cartIdx, count, product.price);
      changeAmount(count * product.price, 'down');
    });
  };

  return (
    <CartItemWrapper>
      <CartImg src={product.thumbnail} />
      <CartTitle>{[product.title]}</CartTitle>
      <CartPrice>{product.price}</CartPrice>
      <CartCount>{orderPrice}</CartCount>
      <CartCounter>
        <CountBtn onClick={handleUpBtnClick}>&uarr;</CountBtn>
        <Count>{count}개</Count>
        <CountBtn onClick={handleDownBtnClick}>&darr;</CountBtn>
      </CartCounter>
      <CartCancle onClick={handleRemoveBtnClick}>
        <img src={cancleSVG} alt="cancle" />
      </CartCancle>
    </CartItemWrapper>
  );
};

export default CartItem;
