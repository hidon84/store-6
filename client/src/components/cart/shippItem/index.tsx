import React, { FC } from 'react';
import { cancleSVG, modifySVG, underlineShortSVG } from '~/assets';
import Checkbox from '~/components/common/Checkbox';
import { confirm } from '~/utils/modal';
import { ShipType } from '~/components/cart/shipping';

import {
  ShipItemWrapper,
  CheckboxWrapper,
  ShipUser,
  ShipAddress,
  ShipControlWrapper,
  ShipControl,
  ShipHover,
} from './index.style';

interface Props {
  shipItem: ShipType;
  selected: boolean;
  changeSelectedBtn: (shipIdx: number) => void;
  removeShippingItem: (shipIdx: number) => void;
  modifyBtnClick: (shipIdx: number) => void;
}

const ShipItem: FC<Props> = ({
  shipItem,
  selected,
  changeSelectedBtn,
  removeShippingItem,
  modifyBtnClick,
}) => {
  const handleSelectBtnClick = () => {
    changeSelectedBtn(shipItem.idx);
  };

  const handleRemoveBtnClick = () => {
    confirm('정말 삭제하시겠어요?', () => {
      removeShippingItem(shipItem.idx);
    });
  };

  const handleModifyBtnClick = () => {
    modifyBtnClick(shipItem.idx);
  };

  return (
    <ShipItemWrapper>
      <CheckboxWrapper onClick={handleSelectBtnClick}>
        <Checkbox checked={selected} />
      </CheckboxWrapper>
      <ShipUser>
        <div>{shipItem.name}</div>
        <div>{shipItem.phone}</div>
      </ShipUser>
      <ShipAddress>
        <div>{shipItem.address}</div>
        <div>{shipItem.detailAddress}</div>
      </ShipAddress>
      <ShipControlWrapper>
        <ShipHover>
          <ShipControl onClick={handleModifyBtnClick}>
            <img src={modifySVG} alt="modify" />
            <div>수정</div>
          </ShipControl>
          <img src={underlineShortSVG} alt="underline" />
        </ShipHover>
        <ShipHover>
          <ShipControl onClick={handleRemoveBtnClick}>
            <img src={cancleSVG} alt="cancle" />
            <div>삭제</div>
          </ShipControl>
          <img src={underlineShortSVG} alt="underline" />
        </ShipHover>
      </ShipControlWrapper>
    </ShipItemWrapper>
  );
};

export default ShipItem;
