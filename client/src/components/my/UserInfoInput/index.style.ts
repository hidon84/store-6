import styled from 'styled-components';

export const StyledUserInfoInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 630px;
  height: 70px;
  margin: 30px 0;
`;

export const UserInfoInputTitle = styled.div`
  font-size: 20px;
`;

export const ModifyButton = styled.div<{
  disabled: boolean;
}>`
  border: none;
  outline: none;
  font-size: 15px;
  cursor: pointer;
  color: ${({ disabled }) => (disabled ? '#000' : '#2ac1bc')};
`;
