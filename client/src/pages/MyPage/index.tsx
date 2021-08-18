import React, { useState, useRef, RefObject, useEffect } from 'react';
import Divider from '~/components/Divider';
import { getMe, putMe } from '~/lib/api/users';
import { login } from '~/lib/api/auth';
import {
  UsersGetResponseBody,
  UsersPutResponseBody,
} from '~/lib/api/types/users';
import {
  REG_EMAIL,
  WARNING_EMAIL,
  REG_IMAGE,
  REG_PHONE,
} from '~/utils/validation';
import { alert } from '~/utils/modal';
import UserInfoInput from '~/components/UserInfoInput';
import PhoneInput from '~/components/PhoneInput';
import EmailInput from '~/components/EmailInput';
import {
  StyledMyPage,
  Title,
  RowWrapper,
  RowTitle,
  PhotoWrapper,
  ImagePreview,
  ImageDesc,
  ImageInput,
} from './index.style';

const message = {
  EMAIL_UPDATE_SUCCESS: '이메일이 수정되었습니다.',
  PHONE_UPDATE_SUCCESS: '연락처가 수정되었습니다.',
  PHOTO_UPDATE_SUCCESS: '사진이 수정되었습니다.',
  NOT_CORRECT_IMAGE: '올바른 이미지파일 형식이 아닙니다.',
  EMAIL_UPDATE_FAIL: '이메일 수정에 실패했습니다.',
  PHONE_UPDATE_FAIL: '연락처 수정에 실패했습니다.',
};

const MyPage: React.FC = () => {
  const [profile, setProfile] = useState<string>(
    'https://user-images.githubusercontent.com/47776356/129712816-13701b24-57cc-451e-93c6-ca7afe190af1.jpeg',
  );

  const [userInfo, setUserInfo] = useState<UsersGetResponseBody | null>(null);
  const imagePreviewRef: RefObject<HTMLLabelElement> = useRef();

  const handleSubmitEmail = async (value: string) => {
    const response = await putMe({ email: value });
    if (response.statusCode === 200) {
      setUserInfo({ ...userInfo, email: value });
      alert(message.EMAIL_UPDATE_SUCCESS);
    }
  };

  const handleSubmitPhone = async (value: string) => {
    const response = await putMe({ phone: value });
    if (response.statusCode === 200) {
      alert(message.PHONE_UPDATE_SUCCESS);
      setUserInfo({ ...userInfo, phone: value });
    }
  };

  const handleSubmitProfile = async (file, fileToString) => {
    const response = await putMe({
      img: file,
    });

    if (response.statusCode === 200) {
      setProfile(fileToString);
      alert(message.PHOTO_UPDATE_SUCCESS);
    }
  };

  const handleImageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    if (!file.type.match(REG_IMAGE)) {
      e.target.value = '';
      alert(message.NOT_CORRECT_IMAGE);
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (event) => {
      handleSubmitProfile(file, event.target.result.toString());
    };
  };

  const emailValidator = (value: string) => {
    return REG_EMAIL.test(value);
  };
  const phoneValidator = (value: string) => {
    return REG_PHONE.test(value);
  };

  useEffect(() => {
    imagePreviewRef.current.style.backgroundImage = `url(${profile})`;
  }, [imagePreviewRef, profile]);

  useEffect(() => {
    const fetchUser = async () => {
      // 로그인 기능이 아직 구현되어있지 않아, 테스트를 위해 로그인 로직을 추가해놓았습니다.
      // const test = await login({
      //   id: 'test',
      //   password: 'hahahahoho',
      // });

      const response = await getMe();

      if (response.statusCode === 200) {
        const user = response.data as UsersGetResponseBody;

        if (user.profile) {
          setProfile(user.profile);
        }

        setUserInfo(user);
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

        <UserInfoInput
          title="이메일"
          showWarning={() => alert(message.EMAIL_UPDATE_FAIL)}
          value={userInfo?.email}
          placeholder={userInfo?.email}
          onSubmit={handleSubmitEmail}
          inputComponent={EmailInput}
          validator={emailValidator}
        />

        <Divider width="630px" direction="horizontal" />

        <UserInfoInput
          title="연락처"
          showWarning={() => alert(message.PHONE_UPDATE_FAIL)}
          value={userInfo?.phone}
          placeholder={userInfo?.phone?.split('-').join(' ')}
          onSubmit={handleSubmitPhone}
          inputComponent={PhoneInput}
          validator={phoneValidator}
        />
      </div>
    </StyledMyPage>
  );
};

export default MyPage;
