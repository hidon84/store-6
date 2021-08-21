import React, { FC, useState } from 'react';
import styled from 'styled-components';

const CartItemWrapper = styled.div`
  padding: 41px 10px;
  display: flex;
  align-items: center;
  font-size: 15px;
  > * {
    padding-left: 60px;
  }
`;

const CartImg = styled.img`
  padding: 0;
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
  display: flex;
  gap: 10px;
`;

const CountBtn = styled.div`
  color: #999999;
  cursor: pointer;
`;

const CartCancle = styled.div`
  font-size: 25px;
  font-weight: bold;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

interface Props {
  product: {
    idx: number;
    thumbnail: string;
    title: string;
    price: number;
  };
}

const withComma = (x: number): string => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const CartItem: FC<Props> = ({ product }) => {
  return (
    <CartItemWrapper>
      <CartImg src={product.thumbnail} />
      <CartTitle>{[product.title]}</CartTitle>
      <CartPrice>{withComma(product.price)}</CartPrice>
      <CartCount>{withComma(product.price)}</CartCount>
      <CartCounter>
        <CountBtn>&uarr;</CountBtn>
        <div>2개</div>
        <CountBtn>&darr;</CountBtn>
      </CartCounter>
      <CartCancle>x</CartCancle>
    </CartItemWrapper>
  );
};

export default CartItem;
