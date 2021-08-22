import styled from 'styled-components';

export const ProductItemWrapper = styled.li`
  position: relative;
  height: 300px;
  width: 230px;
  cursor: pointer;
`;

export const ProductImage = styled.img<{ delayedIsHovered: boolean }>`
  height: 300px;
  width: 230px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 2px 2px 12px rgba(0, 0, 0, 0.15);
  transform: ${({ delayedIsHovered }) =>
    delayedIsHovered ? `scale(1.08)` : 'none'};
  transition: all 300ms ease-in-out;
`;

export const ProductInfoWrapper = styled.div<{ delayedIsHovered: boolean }>`
  position: absolute;
  left: 15px;
  bottom: 20px;
  transition: opacity 300ms ease-in-out;
  opacity: ${({ delayedIsHovered }) => (delayedIsHovered ? '1' : '0')};
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
