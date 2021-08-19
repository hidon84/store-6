import { FC } from 'react';
import styled from 'styled-components';
import { titleSVG } from '~/assets';
import Space from '~/components/Space';

const SignUpTypesWrapper = styled.div`
  display: flex;
  width: 400px;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const SignUpTypes: FC = () => {
  return (
    <SignUpTypesWrapper>
      <img src={titleSVG} alt="배민문방구" />
      <Space aria-hidden />
    </SignUpTypesWrapper>
  );
};

export default SignUpTypes;
