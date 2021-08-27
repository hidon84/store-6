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
import { formatPrice } from '~/utils/formatPrice';
import { useHistory } from '~/core/Router';

interface Props {
  cartIdx: number;
  product: {
    idx: number;
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
  const { thumbnail, title, discountedPrice, idx } = product;
  const [count, setCount] = useState(1);
  const [orderPrice, setOrderPrice] = useState(discountedPrice);
  const { push } = useHistory();

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

  const handleImgClick = () => {
    push(`/products/${idx}`);
  };

  return (
    <CartItemWrapper>
      <CartImg src={thumbnail} onClick={handleImgClick} />
      <CartTitle onClick={handleImgClick}>{[title]}</CartTitle>
      <CartPrice>{formatPrice(discountedPrice, '')}</CartPrice>
      <CartCount>{formatPrice(orderPrice, '')}</CartCount>
      <CartCounter>
        <CountBtn onClick={handleUpBtnClick}>&uarr;</CountBtn>
        <Count>{count}</Count>
        <CountBtn onClick={handleDownBtnClick}>&darr;</CountBtn>
      </CartCounter>
      <CartCancle onClick={handleRemoveBtnClick}>
        <img src={cancleSVG} alt="cancle" />
      </CartCancle>
    </CartItemWrapper>
  );
};

export default CartItem;
