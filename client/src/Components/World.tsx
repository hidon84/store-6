import React from 'react';
import styled from 'styled-components';
import { useLocation } from '~/core/Router';

const Title = styled.div`
  color: red;
`;

const World: React.FC = () => {
  const [location, setLocation] = useLocation();

  return (
    <Title
      onClick={() => {
        setLocation('/hello');
      }}
    >
      World
    </Title>
  );
};

export default World;

// export default Title;
