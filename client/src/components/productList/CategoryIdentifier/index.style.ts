import styled from 'styled-components';

export const IdentifierWrapper = styled.div`
  margin: 24px 0 30px 0;
  display: flex;
  align-items: center;
  height: 40px;
`;

export const PhotoIdentification = styled.img<{ isImage: boolean }>`
  width: 35px;
  margin-right: 8px;
  filter: ${({ isImage }) =>
    !isImage
      ? `none`
      : `invert(62%) sepia(74%) saturate(410%) hue-rotate(129deg)
    brightness(89%) contrast(92%)`};
`;

export const NameIdentification = styled.span`
  font-size: 20px;
  color: var(--baemin100);
`;
