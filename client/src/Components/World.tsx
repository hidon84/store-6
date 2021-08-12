import React from 'react';
import styled from 'styled-components';
import { useHistory } from '~/core/Router';

const Title = styled.div`
  color: red;
`;

const World: React.FC = () => {
  const { location, push } = useHistory();

  return (
    <Title
      onClick={() => {
        push('/hello/inkyu/500', { message: 'hi' });
      }}
    >
      World
    </Title>
  );
};

export default World;

// export default Title;
