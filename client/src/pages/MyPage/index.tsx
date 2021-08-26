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
  emailUpdateSuccess: '이메일이 수정되었습니다.',
  phoneUpdateSuccess: '연락처가 수정되었습니다.',
  photoUpdateSuccess: '사진이 수정되었습니다.',
  notCorrectImage: '올바른 이미지파일 형식이 아닙니다.',
  emailUpdateFail: '이메일 수정에 실패했습니다.',
  emailInvalid: '올바른 이메일 형식이 아닙니다.',
  phoneInvalid: '올바른 연락처 형식이 아닙니다.',
  phoneUpdateFail: '연락처 수정에 실패했습니다.',
  photoUpdateFail: '사진 수정에 실패했습니다',
};

const MyPage: React.FC = () => {
  const [profile, setProfile] = useState<string>(
    'https://user-images.githubusercontent.com/47776356/129712816-13701b24-57cc-451e-93c6-ca7afe190af1.jpeg',
  );

  const [userInfo, setUserInfo] = useUser();

  const handleSubmitEmail = (value: string) => {
    return putMe({ email: value })
      .then(() => {
        alert(message.emailUpdateSuccess);
        setUserInfo({ ...userInfo, email: value });
      })
      .catch(() => alert(message.emailUpdateFail));
  };

  const handleSubmitPhone = (value: string) => {
    return putMe({ phone: value })
      .then(() => {
        alert(message.phoneUpdateSuccess);
        setUserInfo({ ...userInfo, phone: value });
      })
      .catch(() => alert(message.phoneUpdateFail));
  };

  const handleSubmitProfile = (file: File, fileToString: string) => {
    return putMe({ profile: file })
      .then(() => {
        setProfile(fileToString);
        alert(message.photoUpdateSuccess);
      })
      .catch(() => alert(message.photoUpdateFail));
  };

  const handleImageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    if (!file.type.match(REG_IMAGE)) {
      e.target.value = '';
      alert(message.notCorrectImage);
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
              <ImagePreview image={profile} size="60px" />
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
          showWarning={() => alert(message.emailInvalid)}
          value={userInfo?.email}
          placeholder={userInfo?.email}
          onSubmit={handleSubmitEmail}
          inputComponent={EmailInput}
          validator={emailValidator}
        />

        <Divider width="630px" direction="horizontal" />

        <UserInfoInput
          title="연락처"
          showWarning={() => alert(message.phoneInvalid)}
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
