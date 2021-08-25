import styled from 'styled-components';

export const ProductRecommendContainerWrapper = styled.div`
  width: 300px;
  margin-top: 50px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  margin-top: 15px;
  img {
    width: 70px;
    height: 91.3px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
      drop-shadow(2px 2px 12px rgba(0, 0, 0, 0.15));
    border-radius: 10px;
    margin-right: 15px;
    cursor: pointer;

    &:hover {
      transition: transform 300ms;
      transform: scale(1.1);
    }
  }
`;
