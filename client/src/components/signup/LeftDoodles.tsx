import { FC } from 'react';
import styled from 'styled-components';
import { breakSVG } from '~/assets';

const LeftDoodleWrapper = styled.aside`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const LeftDoodles: FC = () => {
  return (
    <LeftDoodleWrapper>
      <img src={breakSVG} alt="뷁" />
    </LeftDoodleWrapper>
  );
};

export default LeftDoodles;
