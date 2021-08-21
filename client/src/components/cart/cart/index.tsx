import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '~/components/common/Button';
import Divider from '~/components/common/Divider';
import { deleteCartItem, getCartItems } from '~/lib/api/cart';
import { alert } from '~/utils/modal';
import CartItem from '../cartItem';

const CartFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  right: 110px;
  margin-top: 30px;
  gap: 50px;
  font-size: 25px;
`;

const CartHeader = styled.div`
  display: flex;
  height: 80px;
  align-items: center;
  font-size: 15px;
  width: 950px;
  text-align: center;
  > :first-child {
    flex-grow: 2;
  }

  > :nth-child(2) {
    flex-grow: 1;
  }

  > :nth-child(3) {
    flex-grow: 1;
  }

  > :last-child {
    flex-grow: 1;
  }
`;



const mockdata = [
  {
    idx: 4,
    createdAt: '2021-08-20T23:41:06.770Z',
    updatedAt: '2021-08-20T23:41:06.770Z',
    product: {
      idx: 1,
      title:
        '1번상품 제목1번상품1번상품 제목1번상품1번상품 제목1번상품1번상품 제목1번상품1번상품 제목1번상품1번상품 제목1번상품1번상품 제목1번상품1번상품 제목1번상품1번상품 제목1번상품1번상품 제목1번상품1번상품 제목1번상품1번상품 제목1번상품1번상품 제목1번상품1번상품 제목1번상품1번상품 제목1번상품1번상품 제목1번상품1번상품 제목1번상품1번상품 제목1번상품1번상품 제목1번상품1번상품 제목1번상품1번상품 제목1번상품1번상품 제목1번상품1번상품 제목1번상품 제목1번상품 제목1번상품 제목1번상품 제목1번상품 제목1번상품 제목1번상품 제목1번상품 제목1번상품 제목1번상품 제목1번상품 제목1번상품 제목1번상품 제목1번상품 제목1번상품 제목1번상품 제목1번상품 제목1번상품 제목1번상품 제목',
      thumbnail:
        'https://store-6-bucket.s3.ap-northeast-2.amazonaws.com/product/sample.jpeg',
      price: 1000,
      description: '1번상품 설명',
      shipSummary: '1번상품 배송요약',
      shipDetail: '1번상품 배송디테일',
      policy: '1번상품 정책',
      createdAt: '2021-08-20T23:37:27.132Z',
      updatedAt: '2021-08-20T23:37:27.132Z',
    },
  },
  {
    idx: 5,
    createdAt: '2021-08-20T23:41:06.788Z',
    updatedAt: '2021-08-20T23:41:06.788Z',
    product: {
      idx: 2,
      title: '2번상품 제목',
      thumbnail:
        'https://store-6-bucket.s3.ap-northeast-2.amazonaws.com/product/sample.jpeg',
      price: 2000,
      description: '2번상품 설명',
      shipSummary: '2번상품 배송요약',
      shipDetail: '2번상품 배송디테일',
      policy: '2번상품 정책',
      createdAt: '2021-08-20T23:37:27.132Z',
      updatedAt: '2021-08-20T23:39:17.185Z',
    },
  },
  {
    idx: 6,
    createdAt: '2021-08-20T23:41:06.801Z',
    updatedAt: '2021-08-20T23:41:06.801Z',
    product: {
      idx: 3,
      title: '3번상품 제목',
      thumbnail:
        'https://store-6-bucket.s3.ap-northeast-2.amazonaws.com/product/sample.jpeg',
      price: 3000,
      description: '3번상품 설명',
      shipSummary: '3번상품 배송요약',
      shipDetail: '3번상품 배송디테일',
      policy: '3번상품 정책',
      createdAt: '2021-08-20T23:37:27.132Z',
      updatedAt: '2021-08-20T23:39:33.361Z',
    },
  },
  {
    idx: 7,
    createdAt: '2021-08-20T23:41:06.814Z',
    updatedAt: '2021-08-20T23:42:40.724Z',
    product: {
      idx: 6,
      title: '6번상품 제목',
      thumbnail:
        'https://store-6-bucket.s3.ap-northeast-2.amazonaws.com/product/sample.jpeg',
      price: 6000,
      description: '6번상품 설명',
      shipSummary: '6번상품 배송요약',
      shipDetail: '6번상품 배송디테일',
      policy: '6번상품 정책',
      createdAt: '2021-08-20T23:37:27.132Z',
      updatedAt: '2021-08-20T23:39:17.233Z',
    },
  },
  {
    idx: 8,
    createdAt: '2021-08-20T23:41:06.814Z',
    updatedAt: '2021-08-20T23:42:40.724Z',
    product: {
      idx: 6,
      title: '6번상품 제목',
      thumbnail:
        'https://store-6-bucket.s3.ap-northeast-2.amazonaws.com/product/sample.jpeg',
      price: 6000,
      description: '6번상품 설명',
      shipSummary: '6번상품 배송요약',
      shipDetail: '6번상품 배송디테일',
      policy: '6번상품 정책',
      createdAt: '2021-08-20T23:37:27.132Z',
      updatedAt: '2021-08-20T23:39:17.233Z',
    },
  },
  {
    idx: 9,
    createdAt: '2021-08-20T23:41:06.814Z',
    updatedAt: '2021-08-20T23:42:40.724Z',
    product: {
      idx: 6,
      title: '6번상품 제목',
      thumbnail:
        'https://store-6-bucket.s3.ap-northeast-2.amazonaws.com/product/sample.jpeg',
      price: 6000,
      description: '6번상품 설명',
      shipSummary: '6번상품 배송요약',
      shipDetail: '6번상품 배송디테일',
      policy: '6번상품 정책',
      createdAt: '2021-08-20T23:37:27.132Z',
      updatedAt: '2021-08-20T23:39:17.233Z',
    },
  },
  {
    idx: 10,
    createdAt: '2021-08-20T23:41:06.814Z',
    updatedAt: '2021-08-20T23:42:40.724Z',
    product: {
      idx: 6,
      title: '6번상품 제목',
      thumbnail:
        'https://store-6-bucket.s3.ap-northeast-2.amazonaws.com/product/sample.jpeg',
      price: 6000,
      description: '6번상품 설명',
      shipSummary: '6번상품 배송요약',
      shipDetail: '6번상품 배송디테일',
      policy: '6번상품 정책',
      createdAt: '2021-08-20T23:37:27.132Z',
      updatedAt: '2021-08-20T23:39:17.233Z',
    },
  },
  {
    idx: 11,
    createdAt: '2021-08-20T23:41:06.814Z',
    updatedAt: '2021-08-20T23:42:40.724Z',
    product: {
      idx: 6,
      title: '6번상품 제목',
      thumbnail:
        'https://store-6-bucket.s3.ap-northeast-2.amazonaws.com/product/sample.jpeg',
      price: 6000,
      description: '6번상품 설명',
      shipSummary: '6번상품 배송요약',
      shipDetail: '6번상품 배송디테일',
      policy: '6번상품 정책',
      createdAt: '2021-08-20T23:37:27.132Z',
      updatedAt: '2021-08-20T23:39:17.233Z',
    },
  },
];

const withComma = (x: number): string => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const Cart: FC = () => {

  const calAmount = () => { 
    return cartItems.reduce((acc, cur) => { 
      return acc+cur.product.price
    },0)
  }

  const onSubmit = () => {
    alert('결제기능은 준비되지 않았습니다.')
  };

  const [cartItems, setCartItems] = useState(mockdata);
  const [amount, setAmount] = useState(calAmount());


  const fetchCart = async () => {
    const response = await getCartItems();
    if (response.statusCode === 200) {
        const cartItems = response.data;
        setCartItems(cartItems)

    }
};

  useEffect(() => {
      fetchCart();
  },[]);

  const changAmount = (price:number, type: 'up' | 'down') => { 
    if (type === 'up') { 
      setAmount(amount+price)
    }

    if (type === 'down') { 
      setAmount(amount - price);
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
        <div>총 {withComma(amount)}원</div>
        <Button size="lg" onClick={onSubmit}>
          결제하기
        </Button>
        <div />
      </CartFooter>
    </div>
  );
};

export default Cart;
