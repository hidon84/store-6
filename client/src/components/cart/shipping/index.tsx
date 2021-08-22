import React, { FC, useEffect, useState, useCallback } from 'react';
import Button from '~/components/common/Button';
import Divider from '~/components/common/Divider';
import { alert } from '~/utils/modal';
import ShipItem from '../shippItem';
import useUser from '~/lib/hooks/useUser';
import ShippingModal from '../shippingModal';
import { ButtonWrapper, ShipHeader } from './index.style';

const mockData = [
  {
    idx: 5,
    name: '황병현',
    phone: '010-5022-2332',
    code: '123213',
    address: '서울 영등포구 선유로 200가길 39',
    detailAddress: '우형빌딩200호',
    selected: 0,
  },
  {
    idx: 10,
    name: '황병현2',
    phone: '010-5022-2332',
    code: '123213',
    address: '서울 영등포구 선유로 200가길 39',
    detailAddress: '우형빌딩200호',
    selected: 0,
  },
  {
    idx: 100,
    name: '황병현3',
    phone: '010-5022-2332',
    code: '123213',
    address: '서울 영등포구 선유로 200가길 39',
    detailAddress: '우형빌딩200호',
    selected: 1,
  },
];

export type ShipType = {
  idx?: number;
  name: string;
  phone: string;
  code: string;
  address: string;
  detailAddress: string;
  selected?: number;
};

const Shipping: FC = () => {
  // const [user] = useUser();
  const [shipItems, setShipItems] = useState<ShipType[]>([]);
  const [selectedShipIdx, setSelectedShipIdx] = useState<number>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isWriteModal, setIsWriteModal] = useState<boolean>(true);
  const [modifyItem, setModifyItem] = useState<ShipType>();

  const fetchShipping = async () => {
    /**
     * 주소지 가져오기 api 호출
     * const response = await getShippingItems();
     * if (response.statusCode === 200) {
     *  setShipItems(response.data);
     * }
     */
    setShipItems(mockData);
    const selectedIdx = mockData.findIndex((item) => item.selected === 1);
    setSelectedShipIdx(mockData[selectedIdx].idx);
    alert(`기본 설정 idx는 ${mockData[selectedIdx].idx}`);
  };

  // useEffect(() => {
  //   if (user) { fetchShipping();}
  // }, [user]);

  useEffect(() => {
    fetchShipping();
  }, []);

  const handleNewBtnClick = () => {
    alert('모달 오픈');
    setIsModalOpen(true);
  };

  const handleUseThisAddress = useCallback(() => {
    alert(`기본배송지가 ${selectedShipIdx}로 설정`);
    /**
     * 주소지 선택 api 호출
     * const response = await putShippingItem(selectedShipIdx);
     * if (response.statusCode === 200) {
     *  alert('수정이 완료되었습니다.)
     * }
     */
  }, []);

  const changeSelectedBtn = useCallback((shipIdx: number) => {
    alert(`${shipIdx}선택`);
    setSelectedShipIdx(shipIdx);
  }, []);

  const removeShippingItem = useCallback((shipIdx: number) => {
    alert(`${shipIdx}삭제`);
    /**
     * 삭제 api 호출
     * const await deleteShippingItem();
     * if (response.statusCode === 200) {
     *  fetchShipping()
     * }
     */
  }, []);

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
    setIsWriteModal(true);
    setModifyItem(null);
  }, []);

  const modifyBtnClick = useCallback((shipIdx: number) => {
    alert(`${shipIdx}에 대한 수정 모달`);
    const selectedIdx = mockData.findIndex((item) => item.idx === shipIdx);
    setIsWriteModal(false);
    setModifyItem(mockData[selectedIdx]);
    setIsModalOpen(true);
  }, []);

  const handleWriteShipping = useCallback((info: ShipType) => {
    alert('배송지가 등록되었습니다.');
    handleModalClose();
    /**
     * 등록 api 호출
     * const await postShippingItem();
     * if (response.statusCode === 200) {
     *  fetchShipping()
     * }
     */
  }, []);

  const handleUpdateShipping = useCallback((info: ShipType) => {
    alert('배송지가 수정되었습니다.');
    handleModalClose();
    /**
     * 수정 api 호출
     * const await putShippingItem();
     * if (response.statusCode === 200) {
     *  fetchShipping()
     * }
     */
  }, []);

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
      <Divider width="950px" direction="horizontal" />
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
              <Divider width="950px" direction="horizontal" />
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
