import React from 'react';
import styled from 'styled-components';
import { useLocation } from '~/core/Router';

const Title = styled.div`
  color: red;
`;

const T: React.FC = () => {
  const [location, setLocation] = useLocation();

  return (
    <Title
      onClick={() => {
        setLocation('/world');
      }}
    >
      Hello
    </Title>
  );
};

export default T;

// export default Title;
