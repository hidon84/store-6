import { FC, useState } from 'react';
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
    title: string;
    thumbnail: string;
    discountedPrice: number;
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
  const { thumbnail, title, discountedPrice } = product;
  const [count, setCount] = useState(1);
  const [orderPrice, setOrderPrice] = useState(discountedPrice);

  const handleUpBtnClick = () => {
    setOrderPrice(orderPrice + discountedPrice);
    setCount(count + 1);
    changeAmount(discountedPrice, 'up');
  };

  const handleDownBtnClick = () => {
    if (count > 1) {
      setCount(count - 1);
      setOrderPrice(orderPrice - discountedPrice);
      changeAmount(discountedPrice, 'down');
    }
  };

  const handleRemoveBtnClick = () => {
    confirm('정말 삭제하시겠어요?', () => {
      removeCartItem(cartIdx, count, discountedPrice);
      changeAmount(count * discountedPrice, 'down');
    });
  };

  return (
    <CartItemWrapper>
      <CartImg src={thumbnail} />
      <CartTitle>{[title]}</CartTitle>
      <CartPrice>{discountedPrice}</CartPrice>
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
