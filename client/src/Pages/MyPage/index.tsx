import React, {
  useState,
  useRef,
  RefObject,
  useEffect,
  useCallback,
} from 'react';
import Input from '~/components/Input';
import Divider from '~/components/Divider';
import PhoneInput from '~/components/PhoneInput';
import { getMe } from '~/lib/api/users';
import { login } from '~/lib/api/auth';
import { UsersGetResponseBody } from '~/lib/api/types/users';

import {
  StyledMyPage,
  Title,
  RowWrapper,
  RowTitle,
  PhotoWrapper,
  Button,
  ImagePreview,
  EmailWrapper,
  ImageDesc,
  ImageInput,
} from './index.style';

const MyPage: React.FC = () => {
  const [profile, setProfile] = useState<string>(
    'https://user-images.githubusercontent.com/47776356/129712816-13701b24-57cc-451e-93c6-ca7afe190af1.jpeg',
  );
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string[]>(['', '', '']);

  const imagePreviewRef: RefObject<HTMLLabelElement> = useRef();

  const handleImageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const file = e.target.files[0];

    if (file && file.type.match('image.*')) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (event) => {
      setProfile(event.target.result.toString());
    };
  };

  useEffect(() => {
    imagePreviewRef.current.style.backgroundImage = `url(${profile})`;
  }, [imagePreviewRef, profile]);

  const handleOnChangePhoneNumber = useCallback(
    (phone: string[]) => {
      setPhoneNumber(phone);
      console.log(phone);
    },
    [setPhoneNumber],
  );

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const test = await login({
        id: 'test',
        password: 'hahahahoho',
      });

      const response = await getMe();

      if (response.statusCode === 200) {
        const user = response.data as UsersGetResponseBody;

        if (user.email) {
          setEmail(user.email);
        }

        if (user.phone) {
          setPhoneNumber(user.phone.split('-'));
        }

        if (user.profile) {
          setProfile(user.profile);
        }
      }
    };
    fetchUser();
  }, []);

  return (
    <StyledMyPage>
      <div>
        <Title>마이페이지</Title>
        <Divider width="700px" direction="horizontal" thick />
      </div>
      <div>
        <RowWrapper>
          <RowTitle>사진</RowTitle>
          <PhotoWrapper>
            <div>
              <ImagePreview htmlFor="img" ref={imagePreviewRef} />
              <ImageInput onChange={handleImageInput} id="img" type="file" />
            </div>
            <ImageDesc>
              <p>사진을 클릭하면 등록된 사진을 수정할 수 있습니다.</p>
              <p>등록된 사진은 상품 리뷰, 댓글 등에 사용됩니다.</p>
            </ImageDesc>
          </PhotoWrapper>
          <div />
        </RowWrapper>

        <Divider width="630px" direction="horizontal" />

        <RowWrapper>
          <RowTitle>이메일</RowTitle>
          <EmailWrapper>
            <Input
              type="text"
              value={email}
              onChange={handleEmailChange}
              placeholder="이메일을 입력해 주세요."
              width="370px"
              style={{ fontSize: '14px' }}
            />
          </EmailWrapper>
          <Button>수정</Button>
        </RowWrapper>

        <Divider width="630px" direction="horizontal" />

        <RowWrapper>
          <RowTitle>연락처</RowTitle>
          <PhoneInput
            onChange={handleOnChangePhoneNumber}
            value={phoneNumber}
          />
          <Button>수정</Button>
        </RowWrapper>
      </div>
    </StyledMyPage>
  );
};

export default MyPage;
