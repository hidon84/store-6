import React, { useState } from 'react';
import styled from 'styled-components';

const MyPageWrapper = styled.div`
  width: 100%;
  display:flex;
  flex-direction:column;
  align-items:center;
`

const MyPageTitleContainer = styled.div`
  margin-bottom: 90px;
`

const MyPageTitle = styled.div`
  font-size: 25px;
  padding: 6px 40px 7px 10px;
`

const MyPageRowContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-around;
  width:630px;
  margin : 30px 0;
`

const MyPageRowTitle = styled.div`
  font-size:20px;
`

const MyPagePhotoContentContainer = styled.div`

`

const MyPageEmailContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top : 6px;
`

const MyPageEmailInput = styled.input`
  border: none;
  outline: none;
  margin-bottom: 15px;
  padding-left:10px;
  font-size: 14px;
`

const MyPageButton = styled.div`
  border: none;
  outline: none;
  font-size1: 15px;
`

const MyPagePhoneContentContainer = styled.div`
  display:flex;
  position: relative;
  top: 3px;
`
const MyPagePhoneInputContainer = styled.div`
  width:100px;
`


const MyPagePhoneInput = styled.input`
  border: none;
  outline: none;
  width:90px;
  font-size: 14px;
  text-align: center;
`


const DivideContainer = styled.div`
  width: 30px;
  text-align: center;
  position: relative;
  top: 6px;
  right: 2px;
`

const MyPage: React.FC = () => {
  const [profile, setProfile] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [firstPhoneValue, setFirstPhoneValue] = useState<string>('');
  const [middlePhoneValue, setMiddlePhoneValue] = useState<string>('');
  const [lastPhoneValue, setLastPhoneValue] = useState<string>('');

  return (
    <MyPageWrapper>
      <MyPageTitleContainer>
        <MyPageTitle>마이페이지</MyPageTitle>
        <img src="https://user-images.githubusercontent.com/47776356/129517220-96148b08-55d7-46fb-adaa-1c04152e9e09.png"/>
      </MyPageTitleContainer>
      <div>
        <MyPageRowContainer>
          <MyPageRowTitle>사진</MyPageRowTitle>
          <MyPagePhotoContentContainer>
            <div>
              <label htmlFor="img" className="input-preview"></label>
              <input name="img" id="img" className="input-preview__src" type="file"/>
            </div>
            <div>사진을 클릭하면 등록된 사진을 수정할 수 있습니다.</div>
          </MyPagePhotoContentContainer>
          <div></div>
        </MyPageRowContainer>
        <img src="https://user-images.githubusercontent.com/47776356/129521962-9d063baa-2794-4936-9635-ba989f1c831f.png"/>
        <MyPageRowContainer>
          <MyPageRowTitle>이메일</MyPageRowTitle>
          <MyPageEmailContentContainer>
            <MyPageEmailInput/>
            <img src="https://user-images.githubusercontent.com/47776356/129522373-57c5806a-1959-47f2-9bb0-4f189f6ed6cf.png"/>
          </MyPageEmailContentContainer>  
          <MyPageButton>수정</MyPageButton>
        </MyPageRowContainer>
        <img src="https://user-images.githubusercontent.com/47776356/129521962-9d063baa-2794-4936-9635-ba989f1c831f.png"/>
        <MyPageRowContainer>
          <MyPageRowTitle>연락처</MyPageRowTitle>
          <MyPagePhoneContentContainer>
            <MyPagePhoneInputContainer>
              <MyPagePhoneInput />
              <img src="https://user-images.githubusercontent.com/47776356/129524612-34323042-93bf-49be-b346-5d1e9433d614.png"/>
            </MyPagePhoneInputContainer>
            <DivideContainer>
              <img src="https://user-images.githubusercontent.com/47776356/129524462-7931a7ae-73d2-4b7e-a911-01c4f780a99a.png"/>
            </DivideContainer>
            <MyPagePhoneInputContainer>
              <MyPagePhoneInput/>
              <img src="https://user-images.githubusercontent.com/47776356/129524612-34323042-93bf-49be-b346-5d1e9433d614.png"/>
            </MyPagePhoneInputContainer>
            <DivideContainer>
              <img src="https://user-images.githubusercontent.com/47776356/129524462-7931a7ae-73d2-4b7e-a911-01c4f780a99a.png"/>
            </DivideContainer>
            <MyPagePhoneInputContainer>
              <MyPagePhoneInput/>
              <img src="https://user-images.githubusercontent.com/47776356/129524612-34323042-93bf-49be-b346-5d1e9433d614.png"/>
            </MyPagePhoneInputContainer>
          </MyPagePhoneContentContainer>
          <MyPageButton>완료</MyPageButton>
        </MyPageRowContainer>
      </div>
    </MyPageWrapper>
  );
};

export default MyPage;
