import { FC, useEffect, useState, useCallback } from 'react';
import Button from '~/components/common/Button';
import Divider from '~/components/common/Divider';
import { alert } from '~/utils/modal';
import ShipItem from '../shippItem';
import ShippingModal from '../shippingModal';
import { ButtonWrapper, ShipHeader } from './index.style';
import {
  deleteShipping,
  getShippings,
  postShpping,
  putShipping,
  selectShipping,
} from '~/lib/api/shipping';
import useUser from '~/lib/hooks/useUser';

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
  SET_DEFAULT: '기본 배송지가 설정되었습니다.',
  DELETE_INFO: '배송정보가 삭제되었습니다.',
  SET_INFO: '배송정보가 등록되었습니다.',
  MODIFY_INFO: '배송정보가 수정되었습니다.'
}

const Shipping: FC = () => {
  const [user] = useUser();
  const [shipItems, setShipItems] = useState<ShipType[]>([]);
  const [selectedShipIdx, setSelectedShipIdx] = useState<number>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isWriteModal, setIsWriteModal] = useState<boolean>(true);
  const [modifyItem, setModifyItem] = useState<ShipType>();

  const fetchShipping = async () => {
    const response = await getShippings();
    if (response.statusCode === 200 && response.data.length) {
      const shippings = response.data;
      const selected = shippings.findIndex(
        (item) => item.defaultShipping === true,
      );
      if (selected > -1) setSelectedShipIdx(shippings[selected].idx);
      setShipItems(shippings);
    }
  };

  useEffect(() => {
    if (user) {
      fetchShipping();
    }
  }, [user]);

  const handleNewBtnClick = useCallback(async () => {
    setIsModalOpen(true);
  }, []);

  const handleUseThisAddress = useCallback(async () => {
    const response = await selectShipping(selectedShipIdx);
    if (response.statusCode === 200) {
      alert(message.SET_DEFAULT);
    }
  }, [selectedShipIdx]);

  const changeSelectedBtn = useCallback((shipIdx: number) => {
    setSelectedShipIdx(shipIdx);
  }, []);

  const removeShippingItem = useCallback(async (shipIdx: number) => {
    const response = await deleteShipping(shipIdx);
    if (response.statusCode === 204) {
      alert(message.DELETE_INFO);
      fetchShipping();
    }
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

  const handleWriteShipping = useCallback(async (_info: ShipType) => {
    const response = await postShpping(_info);
    if (response.statusCode === 200) {
      alert(message.SET_INFO);
      handleModalClose();
      fetchShipping();
    }
  }, []);

  const handleUpdateShipping = useCallback(
    async (_info: ShipType) => {
      const response = await putShipping(modifyItem.idx, _info);
      if (response.statusCode === 200) {
        alert(message.MODIFY_INFO);
        handleModalClose();
        fetchShipping();
      }
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
