import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { cancleSVG, modifySVG, underlineShortSVG } from '~/assets';
import Checkbox from '~/components/common/Checkbox';

interface Props {
    shipIdx: number,
    user: {
        name: string,
        phone: string,
    },
    address: string,
    selected: number
}


const ShipItemWrapper = styled.div`
    padding: 41px 10px;
    display: flex;
    align-items: center;
    font-size: 15px;
    > * {
    margin-left: 70px;
}
`

const CheckboxWrapper = styled.div`
    width: 20px;
`

const ShipUser = styled.div`
    line-height: 1.4;
    width: 150px;

    div:last-child{
        color #999999;
    }
`

const ShipAddress = styled.div`
    display: flex;
    align-items: center;
    width: 370px;
    line-height: 1.4;
    white-space:pre-wrap;
`

const ShipControllWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`


const ShipControll = styled.div`
    display: flex;
`


const ShipItem: FC<Props> = ({ shipIdx, user, address, selected }) => {

  return (
    <ShipItemWrapper>
        <CheckboxWrapper>
            <Checkbox checked={true} />
        </CheckboxWrapper>
        <ShipUser>
              <div>{user.name}</div>
              <div>{user.phone}</div>
        </ShipUser>
        <ShipAddress>
            {address}
        </ShipAddress>
        <ShipControllWrapper>
          <div>
            <ShipControll>
              <img src={modifySVG}/>
              <div>수정</div>
            </ShipControll>
            <img src={underlineShortSVG} />
            </div>
          <div>
            <ShipControll> 
              <img src={cancleSVG}/>
              <div>삭제</div>
            </ShipControll>
            <img src={underlineShortSVG} />
          </div>
        </ShipControllWrapper>
    </ShipItemWrapper>
  );
};

export default ShipItem;
