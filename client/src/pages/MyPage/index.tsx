import React, { useState, useEffect } from 'react';
import Divider from '~/components/common/Divider';
import { putMe } from '~/lib/api/users';
import { REG_EMAIL, REG_IMAGE, REG_PHONE } from '~/utils/validation';
import { alert } from '~/utils/modal';
import UserInfoInput from '~/components/my/UserInfoInput';
import PhoneInput from '~/components/my/PhoneInput';
import EmailInput from '~/components/my/EmailInput';
import useUser from '~/lib/hooks/useUser';
import SubPageWrapper from '~/components/subpage/SubPageWrapper';
import SubPageHeader from '~/components/subpage/SubPageHeader';
import SubPageHeaderItem from '~/components/subpage/SubPageHeaderItem';
import {
  RowWrapper,
  RowTitle,
  PhotoWrapper,
  ImagePreview,
  ImageDesc,
  ImageInput,
  MyPageContent,
} from './index.style';

const message = {
  EMAIL_UPDATE_SUCCESS: '이메일이 수정되었습니다.',
  PHONE_UPDATE_SUCCESS: '연락처가 수정되었습니다.',
  PHOTO_UPDATE_SUCCESS: '사진이 수정되었습니다.',
  NOT_CORRECT_IMAGE: '올바른 이미지파일 형식이 아닙니다.',
  EMAIL_UPDATE_FAIL: '이메일 수정에 실패했습니다.',
  PHONE_UPDATE_FAIL: '연락처 수정에 실패했습니다.',
  PHOTO_UPDATE_FAIL: '사진 수정에 실패했습니다',
};

const MyPage: React.FC = () => {
  const [profile, setProfile] = useState<string>(
    'https://user-images.githubusercontent.com/47776356/129712816-13701b24-57cc-451e-93c6-ca7afe190af1.jpeg',
  );

  const [userInfo, setUserInfo] = useUser();

  const handleSubmitEmail = (value: string) => {
    return putMe({ email: value })
      .then(() => {
        alert(message.EMAIL_UPDATE_SUCCESS);
        setUserInfo({ ...userInfo, email: value });
      })
      .catch(() => alert(message.EMAIL_UPDATE_FAIL));
  };

  const handleSubmitPhone = (value: string) => {
    return putMe({ phone: value })
      .then(() => {
        alert(message.PHONE_UPDATE_SUCCESS);
        setUserInfo({ ...userInfo, phone: value });
      })
      .catch(() => alert(message.PHONE_UPDATE_FAIL));
  };

  const handleSubmitProfile = (file: File, fileToString: string) => {
    return putMe({ profile: file })
      .then(() => {
        setProfile(fileToString);
        alert(message.PHOTO_UPDATE_SUCCESS);
      })
      .catch(() => alert(message.PHOTO_UPDATE_FAIL));
  };

  const handleImageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
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
    if (userInfo?.profile) {
      setProfile(userInfo.profile);
    }
  }, [userInfo]);

  return (
    <SubPageWrapper width="700px">
      <SubPageHeader>
        <SubPageHeaderItem>마이페이지</SubPageHeaderItem>
      </SubPageHeader>
      <MyPageContent>
        <RowWrapper>
          <RowTitle>사진</RowTitle>
          <PhotoWrapper>
            <div>
              <ImagePreview src={profile} size="60px" />
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
      </MyPageContent>
    </SubPageWrapper>
  );
};

export default MyPage;
