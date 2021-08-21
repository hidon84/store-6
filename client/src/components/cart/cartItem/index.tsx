import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { confirm } from '~/utils/modal';

const CartItemWrapper = styled.div`
  padding: 41px 10px;
  display: flex;
  align-items: center;
  font-size: 15px;
  > * {
    margin-left: 60px;
  }
`;

const CartImg = styled.img`
  margin: 0;
  width: 90px;
  height: 120px;
  border-radius: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    drop-shadow(2px 2px 12px rgba(0, 0, 0, 0.15));
`;

const CartTitle = styled.div`
  display: flex;
  align-items: center;
  width: 220px;
  height: 105px;
  line-height: 1.4;
  overflow-y: auto;
  text-overflow: ellipsis;
`;

const CartPrice = styled.div`
  width: 140px;
`;

const CartCount = styled.div`
  width: 140px;
`;

const CartCounter = styled.div`
  width: 80px;
  display: flex;
  gap: 10px;
`;

const CountBtn = styled.button`
  color: #999999;
  cursor: pointer;

  &:hover{
    color:#45C8C4;
  }
`;

const Count = styled.div`
  min-width: 40px;
  text-align:center;
`

const CartCancle = styled.div`
  width: 10px;
  font-size: 25px;
  font-weight: bold;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover{
    transition: transform 300ms;
    transform: scale(1.08);
  }
`;

interface Props {
  cartIdx : number,

  product: {
    idx: number;
    thumbnail: string;
    title: string;
    price: number;
  },

  changAmount: Function,

  removeCartItem: Function
}

const withComma = (x: number): string => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};


const CartItem: FC<Props> = ({ product ,changAmount , removeCartItem, cartIdx}) => {

  const [count, setCount] = useState(1)

  const handleUpBtnClick = () => {
    changAmount(product.price, 'up');
    setCount(count + 1);
  }

  const handleDownBtnClick = () => {
    if (count > 1) { 
      changAmount(product.price, 'down');
      setCount(count - 1);
    }
  }

  const handleRemoveBtnClick = () => {
    
    confirm('정말 삭제하시겠어요?', () => {
      removeCartItem(cartIdx)
      changAmount(count*product.price, 'down');
    })
  }

  return (
    <CartItemWrapper>
      <CartImg src={product.thumbnail} />
      <CartTitle>{[product.title]}</CartTitle>
      <CartPrice>{withComma(product.price)}</CartPrice>
      <CartCount>{withComma(product.price)}</CartCount>
      <CartCounter>
        <CountBtn onClick={handleUpBtnClick}>&uarr;</CountBtn>
        <Count>{count}개</Count>
        <CountBtn onClick={handleDownBtnClick}>&darr;</CountBtn>
      </CartCounter>
      <CartCancle onClick={handleRemoveBtnClick}>x</CartCancle>
      
    </CartItemWrapper>
  );
};

export default CartItem;
