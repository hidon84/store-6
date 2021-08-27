import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 27%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 700px;
  height: 550px;
  padding: 30px;
  box-sizing: border-box;
  filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.5));
  border-radius: 20px;
  background-color: #fff;
  z-index: 1;
`;

export const PhoneInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
  align-items: center;
  bottom: 3px;
  gap: 15px;
`;

export const PhoneInput = styled.input`
  text-align: center;
  width: 100px;
  height: 34px;
  font-size: 15px;
  &::placeholder {
    color: #999;
  }
  position: relative;
  top: 10px;
`;

export const Title = styled.div`
  font-size: 25px;
  padding-bottom: 30px;
  padding-left: 15px;
  img {
    cursor: pointer;
  }
  display: flex;
  justify-content: space-between;
`;

export const Name = styled.div`
  display: flex;
  font-size: 20px;
  padding: 30px 30px 30px 0;
  justify-content: center;
  text-align: center;

  > div:first-child {
    width: 150px;
    display: flex;
    align-items: center;
    text-align: center;
  }

  input {
    padding: 0 16px 10px 0;
    width: 350px;
    font-size: 15px;
  }
`;

export const NameInputWrapper = styled.div`
  div {
    filter: invert(71%) sepia(15%) saturate(2122%) hue-rotate(128deg)
      brightness(92%) contrast(78%);
  }
  input::placeholder {
    color: #999;
  }
`;

export const Phone = styled.div`
  display: flex;
  padding: 30px 30px 30px 0;
  font-size: 20px;
  align-items: center;
  > div:first-child {
    text-align: center;
    width: 180px;
  }
`;

export const Address = styled.div`
  display: flex;
  font-size: 20px;
  padding: 30px 30px 30px 0px;

  > div:first-child {
    width: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > div:last-child {
    width: 420px;
  }

  input {
    padding: 0 16px 10px 16px;
    font-size: 15px;

    &::placeholder {
      color: #999;
    }
  }
`;

export const Post = styled.div`
  display: flex;
  padding-bottom: 20px;
  gap: 35px;
`;

export const PostInputWrapper = styled.div`
  padding-top: 20px;

  div {
    filter: invert(71%) sepia(15%) saturate(2122%) hue-rotate(128deg)
      brightness(92%) contrast(78%);
  }
`;

export const ButtonWrapper = styled.div`
  text-align: center;
`;

export const PostCode = styled.div`
  position: fixed;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 700px;
  height: 550px;
  padding: 30px;
  box-sizing: border-box;
  filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.5));
  border-radius: 20px;
  background-color: #fff;
  z-index: 2;

  img {
    cursor: pointer;
  }

  > :first-child {
    text-align: right;
  }
`;
