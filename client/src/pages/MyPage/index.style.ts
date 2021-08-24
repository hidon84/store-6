import styled from 'styled-components';
import ProfileImage from '~/components/common/ProfileImage';

export const RowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 630px;
  height: 70px;
  margin: 30px 0;
`;

export const RowTitle = styled.div`
  font-size: 20px;
`;

export const PhotoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.div`
  border: none;
  outline: none;
  font-size: 15px;
`;

export const ImagePreview = styled(ProfileImage).attrs({
  as: 'label',
  htmlFor: 'img',
})`
  margin-right: 40px;
`;

export const ImageInput = styled.input.attrs({
  name: 'img',
})`
  display: none;
`;

export const EmailWrapper = styled.div`
  position: relative;
  bottom: 4px;
`;

export const ImageDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  p {
    font-size: 15px;
  }
`;

export const MyPageContent = styled.div`
  margin: 0 auto;
  padding-top: 70px;
`;
