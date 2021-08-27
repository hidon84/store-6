import React, { useEffect, useContext } from 'react';

import Divider from '~/components/common/Divider';
import UserInfoInput from '~/components/my/UserInfoInput';
import PhoneInput from '~/components/my/PhoneInput';
import EmailInput from '~/components/my/EmailInput';
import SubPageWrapper from '~/components/subpage/SubPageWrapper';
import SubPageHeader from '~/components/subpage/SubPageHeader';
import SubPageHeaderItem from '~/components/subpage/SubPageHeaderItem';

import { setUserInfo } from '~/stores/userModule';
import { putMe } from '~/lib/api/users';
import UserContext from '~/lib/contexts/userContext';
import { alert } from '~/utils/modal';
import { REG_EMAIL, REG_IMAGE, REG_PHONE } from '~/utils/validation';

import {
  RowWrapper,
  RowTitle,
  PhotoWrapper,
  ImagePreview,
  ImageDesc,
  ImageInput,
  MyPageContent,
} from './index.style';
import { useHistory } from '~/core/Router';

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
  photoUpdateLarge: '1mb 이하의 사진만 업로드 가능합니다.',
};

const MyPage: React.FC = () => {
  const { push } = useHistory();
  const { user: userState, userDispatch } = useContext(UserContext);
  const mb = 1;

  const handleSubmitEmail = (value: string) => {
    return putMe({ email: value })
      .then(() => {
        alert(message.emailUpdateSuccess);
        userDispatch(setUserInfo({ email: value }));
      })
      .catch(() => alert(message.emailUpdateFail));
  };

  const handleSubmitPhone = (value: string) => {
    return putMe({ phone: value })
      .then(() => {
        alert(message.phoneUpdateSuccess);
        userDispatch(setUserInfo({ phone: value }));
      })
      .catch(() => alert(message.phoneUpdateFail));
  };

  const handleSubmitProfile = (file: File, fileToString: string) => {
    return putMe({ profile: file })
      .then(() => {
        userDispatch(setUserInfo({ ...userState.user, profile: fileToString }));
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
      if (file.size / (1024 * 1024) > mb) {
        alert(message.photoUpdateLarge);
      } else {
        handleSubmitProfile(file, event.target.result.toString());
      }
    };
  };

  const emailValidator = (value: string) => {
    return REG_EMAIL.test(value);
  };
  const phoneValidator = (value: string) => {
    return REG_PHONE.test(value);
  };

  useEffect(() => {
    if (!userState.isLoggedIn) {
      push('/', { from: '/me', error: 'accessWithoutToken' });
    }
  }, [userState]);

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
              <ImagePreview image={userState.user?.profile} size="60px" />
              <ImageInput
                onChange={handleImageInput}
                accept=".jpg, .png, .jpeg"
                id="img"
                type="file"
              />
            </div>
            <ImageDesc>
              <p>사진을 클릭하면 등록된 사진을 수정할 수 있습니다.</p>
            </ImageDesc>
          </PhotoWrapper>
          <div />
        </RowWrapper>

        <Divider width="630px" direction="horizontal" />

        <UserInfoInput
          title="이메일"
          showWarning={() => alert(message.emailInvalid)}
          value={userState.user?.email}
          placeholder={userState.user?.email}
          onSubmit={handleSubmitEmail}
          inputComponent={EmailInput}
          validator={emailValidator}
        />

        <Divider width="630px" direction="horizontal" />

        <UserInfoInput
          title="연락처"
          showWarning={() => alert(message.phoneInvalid)}
          value={userState.user?.phone}
          placeholder={userState.user?.phone?.split('-').join(' ')}
          onSubmit={handleSubmitPhone}
          inputComponent={PhoneInput}
          validator={phoneValidator}
        />
      </MyPageContent>
    </SubPageWrapper>
  );
};

export default MyPage;
