import styled from 'styled-components';

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

export const ImagePreview = styled.label`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  transition: ease-in-out 750ms;
  margin-right: 40px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  cursor: pointer;
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

export const ImageInput = styled.input`
  display: none;
`;

export const MyPageContent = styled.div`
  margin: 0 auto;
  padding-top: 70px;
`;
