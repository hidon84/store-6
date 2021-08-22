import React, { FC, useRef, useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import { cancleSVG, hyphenSVG } from '~/assets';
import Button from '~/components/common/Button';
import Divider from '~/components/common/Divider';
import useInputValidator from '~/lib/hooks/useInputValidator';
import useOnClickOutside from '~/lib/hooks/useOnClickOutside';
import { alert } from '~/utils/modal';
import { ph0Validator, ph1Validator, ph2Validator } from '~/utils/validation';
import { ShipType } from '~/components/cart/shipping';
import {
  ModalWrapper,
  PhoneInputWrapper,
  PhoneInput,
  Title,
  Name,
  NameInputWrapper,
  Phone,
  Address,
  Post,
  PostInputWrapper,
  ButtonWrapper,
  PostCode,
} from './index.style';

interface Props {
  handleModalClose: () => void;
  handleWriteShipping(info: ShipType): void;
  handleUpdateShipping(info: ShipType): void;
  isWrite: boolean;
  modifyItem: ShipType;
}

const ShippingModal: FC<Props> = ({
  handleModalClose,
  handleWriteShipping,
  handleUpdateShipping,
  isWrite,
  modifyItem,
}) => {
  const confirmModalRef = useRef();
  useOnClickOutside(confirmModalRef, () => {
    handleModalClose();
  });

  const [name, setName] = useState<string>(isWrite ? '' : modifyItem.name);
  const [ph0, ph0Warning, handlePh0] = useInputValidator(
    isWrite ? '' : modifyItem.phone.split('-')[0],
    ph0Validator,
  );
  const [ph1, ph1Warning, handlePh1] = useInputValidator(
    isWrite ? '' : modifyItem.phone.split('-')[1],
    ph1Validator,
  );
  const [ph2, ph2Warning, handlePh2] = useInputValidator(
    isWrite ? '' : modifyItem.phone.split('-')[2],
    ph2Validator,
  );
  const [isPostModalOpen, setIsPostModalOpen] = useState<boolean>(false);
  const [code, setCode] = useState<string>(isWrite ? '' : modifyItem.code);
  const [address, setAddress] = useState<string>(
    isWrite ? '' : modifyItem.address,
  );
  const [detailAddress, setDetailAddress] = useState<string>(
    isWrite ? '' : modifyItem.detailAddress,
  );

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handlePostModalOpen = () => {
    setIsPostModalOpen(true);
  };

  const handlePostModalClose = () => {
    setIsPostModalOpen(false);
  };

  const handleChangeDetailAddress = (e) => {
    setDetailAddress(e.target.value);
  };

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';
    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    setAddress(fullAddress);
    setCode(data.zonecode);
    handlePostModalClose();
  };

  const validationCheck = () => {
    if (!name || !ph0 || !ph1 || !ph2 || !code || !address || !detailAddress) {
      alert('빈 항목이 있습니다.');
      return;
    }

    const phone = `${ph0}-${ph1}-${ph2}`;

    const info = {
      name,
      phone,
      code,
      address,
      detailAddress,
    };

    if (isWrite) {
      handleWriteShipping(info);
    } else {
      handleUpdateShipping(info);
    }
  };

  return (
    <ModalWrapper ref={confirmModalRef}>
      <Title>
        <div>{isWrite ? '주소입력' : '주소수정'}</div>
        <button
          type="button"
          onClick={() => {
            handleModalClose();
          }}
        >
          <img alt="close" src={cancleSVG} />
        </button>
      </Title>
      <Divider width="640px" direction="horizontal" />
      <Name>
        <div>받으시는 분 이름</div>
        <NameInputWrapper>
          <input type="text" value={name} onChange={handleChangeName} />
          <Divider width="400px" direction="horizontal" />
        </NameInputWrapper>
      </Name>
      <Divider width="640px" direction="horizontal" />
      <Phone>
        <div>연락처</div>
        <PhoneInputWrapper>
          <PhoneInput
            autoComplete="off"
            type="text"
            value={ph0}
            placeholder="010"
            onChange={handlePh0}
          />
          <img src={hyphenSVG} alt="hyphen" />
          <PhoneInput
            autoComplete="off"
            type="text"
            value={ph1}
            placeholder="0000"
            onChange={handlePh1}
          />
          <img src={hyphenSVG} alt="hyphen" />
          <PhoneInput
            autoComplete="off"
            type="text"
            value={ph2}
            placeholder="0000"
            onChange={handlePh2}
          />
        </PhoneInputWrapper>
      </Phone>
      <Divider width="640px" direction="horizontal" />
      <Address>
        <div>주소</div>
        <div>
          <Post>
            <div>
              <input type="text" value={code} disabled />
              <Divider width="280px" direction="horizontal" />
            </div>
            <Button size="sm" onClick={handlePostModalOpen}>
              우편번호 찾기
            </Button>
          </Post>
          <input
            type="text"
            value={address}
            style={{ width: '410px' }}
            disabled
          />
          <Divider width="410px" direction="horizontal" />
          <PostInputWrapper>
            <input
              style={{ width: '410px' }}
              type="text"
              value={detailAddress}
              onChange={handleChangeDetailAddress}
            />
            <Divider width="410px" direction="horizontal" />
          </PostInputWrapper>
        </div>
      </Address>
      <ButtonWrapper>
        <Button size="md" onClick={validationCheck}>
          {isWrite ? '등록' : '수정'}
        </Button>
      </ButtonWrapper>
      {isPostModalOpen && (
        <PostCode>
          <div>
            <button
              type="button"
              onClick={() => {
                handlePostModalClose();
              }}
            >
              <img src={cancleSVG} alt="close" />
            </button>
          </div>
          <DaumPostcode onComplete={handleComplete} />
        </PostCode>
      )}
    </ModalWrapper>
  );
};

export default ShippingModal;
