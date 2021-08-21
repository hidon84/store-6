import React, { FC, useState } from 'react';
import styled from 'styled-components';
import Button from '~/components/common/Button';
import Divider from '~/components/common/Divider';
import { alert } from '~/utils/modal';
import ShipItem from '../shippItem';

const ButtonWrapper = styled.div`
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: flex-end;
  margin-right: 150px;

  &:last-child{
    margin-top: 40px;
  }
`

const ShipHeader = styled.div`
  height: 50px;
  display : flex;
  align-items: center;
  font-size: 15px;

  div {
    margin-left: 170px;
  }
`


const mockData = [
  {
    idx: 1,
    user: {
      name: '황병현',
      phone: '010-5022-2332',
    },
    address: '서울 영등포구 선유로 200가길 39\n우형빌딩200호',
    selected: 0
  },
  {
    idx: 2,
    user: {
      name: '황병현',
      phone: '010-5022-2332',
    },
    address: '서울 영등포구 선유로 200가길 39\n우형빌딩200호',
    selected: 1
  },
  {
    idx: 3,
    user: {
      name: '황병현',
      phone: '010-5022-2332',
    },
    address: '서울 영등포구 선유로 200가길 39서울 영등포구 선유로 200가길 39서울 영등포구 선유로 200가길 39서울 영등포구 선유로 200가길 39서울 영등포구 선유로 200가길 39서울 영등포구 선유로 200가길 39서울 영등포구 선유로 200가길 39서울 영등포구 선유로 200가길 39서울 영등포구 선유로 200가길 39서울 영등포구 선유로 200가길 39\n우형빌딩200호',
    selected: 0
  },
]



const Shipping: FC = () => {

  const [shipItems, setShipItems] = useState(mockData);

  const handleNewBtnClick = () => { 
      alert('기다려')
  }


  return (
    <div>
      <ButtonWrapper>
        <Button size="md" onClick={handleNewBtnClick}>
            신규주소 등록
        </Button>
      </ButtonWrapper>
      <ShipHeader>
        <div>수령인 정보</div>
        <div>주소지 정보</div>
      </ShipHeader>
      <Divider width="950px" direction="horizontal" />
      <div>
        {shipItems &&
          shipItems.map((item) => (
            <div key={item.idx}>
              <ShipItem shipIdx={item.idx} user={item.user} selected={item.selected} address={item.address}/>
              <Divider width="950px" direction="horizontal" />
            </div>
          ))}
      </div>
      <ButtonWrapper>
        <Button size="lg" onClick={handleNewBtnClick}>
            선택주소 사용하기
        </Button>
      </ButtonWrapper>
    </div>
  );
};

export default Shipping;
