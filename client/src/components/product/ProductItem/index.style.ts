import styled from 'styled-components';

export const ProductLikeButtonWrapper = styled.div`
  position: absolute;
  right: 14px;
  top: 14px;
  display: inline-flex;
`;

export const ProductInfoWrapper = styled.div<{ isHovered: boolean }>`
  position: absolute;
  left: 15px;
  bottom: 20px;
  transition: opacity 300ms ease-in-out;
  opacity: ${({ isHovered }) => (isHovered ? '1' : '0')};
  text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.65);
  color: #fff;
`;

export const ProductTitle = styled.span`
  display: block;
  width: 169px;
  font-family: 'BM Hanna' !important;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const ProductPrice = styled.span`
  width: 179px;
  font-family: 'BM Hanna' !important;
  font-size: 16px;
`;
