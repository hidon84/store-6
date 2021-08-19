import styled from 'styled-components';

export const ProductItemContainer = styled.div`
  position: relative;
  height: 300px;
  width: 230px;
  transition: all 300ms;
`;

export const ProductImage = styled.img`
  height: 300px;
  width: 230px;
  border-radius: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    drop-shadow(2px 2px 12px rgba(0, 0, 0, 0.15));
  transition: all 300ms;
  ${ProductItemContainer}:hover & {
    filter: brightness(60%);
    transform: scale(1.08);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
      2px 2px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const ProductInfoConatiner = styled.div`
  position: absolute;
  left: 0.5rem;
  bottom: 0.7rem;
`;

export const ProductTitle = styled.div`
  width: 204px;
  height: 32px;
  font-size: 24px;
  color: #ffffff;
`;

export const ProductPrice = styled.div`
  width: 179px;
  height: 18px;
  font-size: 18px;
  color: #ffffff;
`;
