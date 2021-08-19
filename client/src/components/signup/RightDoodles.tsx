import { FC } from 'react';
import styled from 'styled-components';
import { mooyahoSVG, mooyahoWeUseSVG } from '~/assets';

const RightDoodleWrapper = styled.aside`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: space-evenly;
`;

const RightDoodles: FC = () => {
  return (
    <RightDoodleWrapper>
      <img src={mooyahoSVG} alt="무야호" />
      <img src={mooyahoWeUseSVG} alt="저희가 많이 보죠" />
    </RightDoodleWrapper>
  );
};

export default RightDoodles;
