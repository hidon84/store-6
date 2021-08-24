import styled from 'styled-components';

interface Props {
  image?: string;
  size?: string;
}

const ProfileImage = styled.div<Props>`
  border-radius: 50%;
  width: ${({ size }) => size ?? '100%'};
  height: ${({ size }) => size ?? '100%'};
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: ${({ image }) => (image ? `url(${image})` : 'none')};
  transition: ease-in-out 750ms;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  cursor: pointer;
`;

export default ProfileImage;
