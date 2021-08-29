import { FC, useEffect, useState, useCallback, useContext } from 'react';
import Button from '~/components/common/Button';
import Divider from '~/components/common/Divider';
import { alert } from '~/utils/modal';
import ShipItem from '../ShippItem';
import ShippingModal from '../ShippingModal';
import { ButtonWrapper, ShipHeader } from './index.style';
import {
  deleteShipping,
  getShippings,
  postShpping,
  putShipping,
  selectShipping,
} from '~/lib/api/shipping';
import { ErrorResponse } from '~/lib/api/types';
import UserContext from '~/lib/contexts/userContext';

export type ShipType = {
  idx?: number;
  name: string;
  phone: string;
  code: string;
  address: string;
  detailAddress: string;
  defaultShipping?: boolean;
};

const message = {
  setDefault: '기본 배송지가 설정되었습니다.',
  deleteInfo: '배송정보가 삭제되었습니다.',
  setInfo: '배송정보가 등록되었습니다.',
  modifyInfo: '배송정보가 수정되었습니다.',
};

const Shipping: FC = () => {
  const { user: userState } = useContext(UserContext);
  const [shipItems, setShipItems] = useState<ShipType[]>([]);
  const [selectedShipIdx, setSelectedShipIdx] = useState<number>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isWriteModal, setIsWriteModal] = useState<boolean>(true);
  const [modifyItem, setModifyItem] = useState<ShipType>();

  const fetchShipping = () => {
    getShippings()
      .then((response) => {
        const shippings = response.data;
        if (shippings.length) {
          const selected = shippings.findIndex(
            (item) => item.defaultShipping === true,
          );
          if (selected > -1) setSelectedShipIdx(shippings[selected].idx);
        }
        setShipItems(shippings);
      })
      .catch((e: ErrorResponse) => alert(e.message));
  };

  useEffect(() => {
    if (userState.isLoggedIn) fetchShipping();
  }, [userState]);

  const handleNewBtnClick = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleUseThisAddress = useCallback(() => {
    selectShipping(selectedShipIdx)
      .then(() => {
        alert(message.setDefault);
      })
      .catch((e: ErrorResponse) => alert(e.message));
  }, [selectedShipIdx]);

  const changeSelectedBtn = useCallback((shipIdx: number) => {
    setSelectedShipIdx(shipIdx);
  }, []);

  const removeShippingItem = useCallback((shipIdx: number) => {
    deleteShipping(shipIdx)
      .then(() => {
        alert(message.deleteInfo);
        fetchShipping();
      })
      .catch((e: ErrorResponse) => alert(e.message));
  }, []);

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
    setIsWriteModal(true);
    setModifyItem(null);
  }, []);

  const modifyBtnClick = useCallback(
    (shipIdx: number) => {
      const selectedIdx = shipItems.findIndex((item) => item.idx === shipIdx);
      setModifyItem(shipItems[selectedIdx]);
      setIsWriteModal(false);
      setIsModalOpen(true);
    },
    [shipItems, selectedShipIdx],
  );

  const handleWriteShipping = useCallback((_info: ShipType) => {
    postShpping(_info)
      .then(() => {
        alert(message.setInfo);
        handleModalClose();
        fetchShipping();
      })
      .catch((e: ErrorResponse) => alert(e.message));
  }, []);

  const handleUpdateShipping = useCallback(
    (_info: ShipType) => {
      putShipping(modifyItem.idx, _info)
        .then(() => {
          alert(message.modifyInfo);
          handleModalClose();
          fetchShipping();
        })
        .catch((e: ErrorResponse) => alert(e.message));
    },
    [modifyItem],
  );

  return (
    <>
      {isModalOpen && (
        <ShippingModal
          isWrite={isWriteModal}
          modifyItem={modifyItem}
          handleModalClose={handleModalClose}
          handleWriteShipping={handleWriteShipping}
          handleUpdateShipping={handleUpdateShipping}
        />
      )}
      <ButtonWrapper>
        <Button size="md" onClick={handleNewBtnClick}>
          신규주소 등록
        </Button>
      </ButtonWrapper>
      <ShipHeader>
        <div>수령인 정보</div>
        <div>주소지 정보</div>
      </ShipHeader>
      <Divider width="1015px" direction="horizontal" />
      <div>
        {shipItems &&
          shipItems.map((item) => (
            <div key={item.idx}>
              <ShipItem
                shipItem={item}
                selected={selectedShipIdx === item.idx}
                changeSelectedBtn={changeSelectedBtn}
                removeShippingItem={removeShippingItem}
                modifyBtnClick={modifyBtnClick}
              />
              <Divider width="1015px" direction="horizontal" />
            </div>
          ))}
      </div>
      <ButtonWrapper>
        <Button size="lg" onClick={handleUseThisAddress}>
          선택주소 사용하기
        </Button>
      </ButtonWrapper>
    </>
  );
};

export default Shipping;
