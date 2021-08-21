import React, { FC, useState } from 'react';
import styled from 'styled-components';
import Button from '~/components/common/Button';
import Divider from '~/components/common/Divider';
import { alert } from '~/utils/modal';

const ButtonWrapper = styled.div`
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: flex-end;
  margin-right: 150px;
`

const ShipHeader = styled.div`
  height: 50px;
  display : flex;
  align-items: center;
  font-size: 15px;

  div {
    width: 100px;
    margin-left: 170px;
  }

`


const Shipping: FC = () => {

  const [shipItems, setShipItems] = useState([]);

  const handleNewBtnClick = () => { 
      alert('기다려')
  }


  return (
    <div>
      <ButtonWrapper>
        <Button size="lg" onClick={handleNewBtnClick}>
            신규주소 등록
        </Button>
      </ButtonWrapper>
      <ShipHeader>
        <div>수령인 정보</div>
        <div>주소지 정보</div>
      </ShipHeader>
      <Divider width="950px" direction="horizontal" />
      <div>
        맵돌리는 부분
      </div>
      <div>선택주소 사용하기</div>
    </div>
  );
};

export default Shipping;
